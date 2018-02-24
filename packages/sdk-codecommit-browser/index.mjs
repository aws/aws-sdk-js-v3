import { coreHandler } from '@aws/core-handler';
import { Sha256 } from '@aws/crypto-sha256-browser';
import { FetchHttpHandler } from '@aws/fetch-http-handler';
import { JsonBuilder } from '@aws/json-builder';
import { jsonErrorUnmarshaller } from '@aws/json-error-unmarshaller';
import { JsonParser } from '@aws/json-parser';
import { serializerMiddleware } from '@aws/middleware-serializer';
import { JsonRpcSerializer, JsonRpcParser } from '@aws/protocol-json-rpc';
import { SignatureV4 } from '@aws/signature-v4';
import { signingMiddleware } from '@aws/signing-middleware';
import { streamCollector } from '@aws/stream-collector-browser';
import { parseUrl } from '@aws/url-parser-browser';
import { fromBase64, toBase64 } from '@aws/util-base64-browser';
import { calculateBodyLength } from '@aws/util-body-length-browser';
import { fromUtf8, toUtf8 } from '@aws/util-utf8-browser';
import { resolveConfiguration } from '@aws/config-resolver';
import { contentLengthMiddleware } from '@aws/middleware-content-length';
import { MiddlewareStack } from '@aws/middleware-stack';
import { retryMiddleware } from '@aws/retry-middleware';

const configurationProperties = {
    profile: {
        required: false
    },
    maxRedirects: {
        required: false,
        defaultValue: 10
    },
    maxRetries: {
        required: false,
        defaultValue: 3
    },
    region: {
        required: true,
        apply: (region, configuration) => {
            if (typeof region === 'string') {
                const promisified = Promise.resolve(region);
                configuration.region = () => promisified;
            }
        }
    },
    sslEnabled: {
        required: false,
        defaultValue: true
    },
    urlParser: {
        required: false,
        defaultValue: parseUrl
    },
    endpointProvider: {
        required: false,
        defaultValue: (sslEnabled, region) => ({
            protocol: sslEnabled ? 'https:' : 'http:',
            path: '/',
            hostname: `codecommit.${region}.amazonaws.com`
        })
    },
    endpoint: {
        required: false,
        defaultProvider: (configuration) => {
            const promisified = configuration.region()
                .then(region => configuration.endpointProvider(configuration.sslEnabled, region));
            return () => promisified;
        },
        apply: (value, configuration) => {
            if (typeof value === 'string') {
                const promisified = Promise.resolve(configuration.urlParser(value));
                configuration.endpoint = () => promisified;
            }
            else if (typeof value === 'object') {
                const promisified = Promise.resolve(value);
                configuration.endpoint = () => promisified;
            }
        }
    },
    base64Decoder: {
        required: false,
        defaultValue: fromBase64
    },
    base64Encoder: {
        required: false,
        defaultValue: toBase64
    },
    utf8Decoder: {
        required: false,
        defaultValue: fromUtf8
    },
    utf8Encoder: {
        required: false,
        defaultValue: toUtf8
    },
    streamCollector: {
        required: false,
        defaultValue: streamCollector
    },
    serializer: {
        required: false,
        defaultProvider: (configuration) => {
            const promisified = configuration.endpoint()
                .then(endpoint => new JsonRpcSerializer(endpoint, new JsonBuilder(configuration.base64Encoder, configuration.utf8Decoder)));
            return () => promisified;
        },
        apply: (serializerProvider, configuration, middlewareStack) => {
            middlewareStack.add(serializerMiddleware(serializerProvider), {
                step: 'serialize',
                tags: { SERIALIZER: true },
                priority: 90
            });
        }
    },
    parser: {
        required: false,
        defaultProvider: (configuration) => new JsonRpcParser(new JsonParser(configuration.base64Decoder), jsonErrorUnmarshaller, configuration.streamCollector, configuration.utf8Encoder)
    },
    _user_injected_http_handler: {
        required: false,
        defaultProvider: (configuration) => !configuration.httpHandler
    },
    httpHandler: {
        required: false,
        defaultProvider: () => new FetchHttpHandler()
    },
    handler: {
        required: false,
        defaultProvider: (configuration) => coreHandler(configuration.httpHandler, configuration.parser)
    },
    credentials: {
        required: true,
        apply: (credentials, configuration) => {
            if (typeof credentials === 'object') {
                const promisified = Promise.resolve(credentials);
                configuration.credentials = () => promisified;
            }
        }
    },
    sha256: {
        required: false,
        defaultValue: Sha256
    },
    signingName: {
        required: false,
        defaultValue: 'codecommit'
    },
    signer: {
        required: false,
        defaultProvider: (configuration) => new SignatureV4({
            credentials: configuration.credentials,
            region: configuration.region,
            service: configuration.signingName,
            sha256: configuration.sha256,
            unsignedPayload: false,
            uriEscapePath: false,
        }),
        apply: (signer, configuration, middlewareStack) => {
            if (!signer) {
                throw new Error('No signer was defined');
            }
            middlewareStack.add(signingMiddleware(signer), {
                step: 'finalize',
                tags: { SIGNATURE: true }
            });
        }
    },
    bodyLengthChecker: {
        required: false,
        defaultValue: calculateBodyLength
    },
    retryDecider: {
        required: false
    },
    delayDecider: {
        required: false
    },
};

class CodeCommitClient {
    constructor(configuration) {
        this.middlewareStack = new MiddlewareStack();
        this.config = resolveConfiguration(configuration, configurationProperties, this.middlewareStack);
        this.middlewareStack.add(contentLengthMiddleware(this.config.bodyLengthChecker), {
            step: 'build',
            priority: -80,
            tags: { SET_CONTENT_LENGTH: true }
        });
        if (this.config.maxRetries > 0) {
            this.middlewareStack.add(retryMiddleware(this.config.maxRetries, this.config.retryDecider, this.config.delayDecider), {
                step: 'finalize',
                priority: Infinity,
                tags: { RETRY: true }
            });
        }
    }
    destroy() {
        if (!this.config._user_injected_http_handler) {
            this.config.httpHandler.destroy();
        }
    }
    send(command, cb) {
        const handler = command.resolveMiddleware(this.middlewareStack, this.config);
        if (cb) {
            handler(command).then((result) => cb(null, result), (err) => cb(err)).catch(
            // prevent any errors thrown in the callback from triggering an
            // unhandled promise rejection
            () => { });
        }
        else {
            return handler(command);
        }
    }
}

const _RepositoryNameList = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
};

const BatchGetRepositoriesInput = {
    type: 'structure',
    required: [
        'repositoryNames',
    ],
    members: {
        repositoryNames: {
            shape: _RepositoryNameList,
        },
    },
};

const _RepositoryMetadata = {
    type: 'structure',
    required: [],
    members: {
        accountId: {
            shape: {
                type: 'string',
            },
        },
        repositoryId: {
            shape: {
                type: 'string',
            },
        },
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        repositoryDescription: {
            shape: {
                type: 'string',
            },
        },
        defaultBranch: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        lastModifiedDate: {
            shape: {
                type: 'timestamp',
            },
        },
        creationDate: {
            shape: {
                type: 'timestamp',
            },
        },
        cloneUrlHttp: {
            shape: {
                type: 'string',
            },
        },
        cloneUrlSsh: {
            shape: {
                type: 'string',
            },
        },
        Arn: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _RepositoryMetadataList = {
    type: 'list',
    member: {
        shape: _RepositoryMetadata,
    },
};

const _RepositoryNotFoundList = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
};

const BatchGetRepositoriesOutput = {
    type: 'structure',
    required: [],
    members: {
        repositories: {
            shape: _RepositoryMetadataList,
        },
        repositoriesNotFound: {
            shape: _RepositoryNotFoundList,
        },
    },
};

const RepositoryNamesRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryNamesRequiredException',
};

const MaximumRepositoryNamesExceededException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'MaximumRepositoryNamesExceededException',
};

const InvalidRepositoryNameException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidRepositoryNameException',
};

const EncryptionIntegrityChecksFailedException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'EncryptionIntegrityChecksFailedException',
};

const EncryptionKeyAccessDeniedException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'EncryptionKeyAccessDeniedException',
};

const EncryptionKeyDisabledException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'EncryptionKeyDisabledException',
};

const EncryptionKeyNotFoundException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'EncryptionKeyNotFoundException',
};

const EncryptionKeyUnavailableException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'EncryptionKeyUnavailableException',
};

const ServiceMetadata = {
    apiVersion: '2015-04-13',
    endpointPrefix: 'codecommit',
    jsonVersion: '1.1',
    protocol: 'json',
    serviceAbbreviation: 'CodeCommit',
    serviceFullName: 'AWS CodeCommit',
    signatureVersion: 'v4',
    targetPrefix: 'CodeCommit_20150413',
    uid: 'codecommit-2015-04-13'
};

const BatchGetRepositories = {
    metadata: ServiceMetadata,
    name: 'BatchGetRepositories',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: BatchGetRepositoriesInput,
    },
    output: {
        shape: BatchGetRepositoriesOutput,
    },
    errors: [
        {
            shape: RepositoryNamesRequiredException,
        },
        {
            shape: MaximumRepositoryNamesExceededException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class BatchGetRepositoriesCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: BatchGetRepositories
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const CreateBranchInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'branchName',
        'commitId',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        branchName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        commitId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const CreateBranchOutput = {
    type: 'structure',
    required: [],
    members: {},
};

const RepositoryNameRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryNameRequiredException',
};

const RepositoryDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryDoesNotExistException',
};

const BranchNameRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'BranchNameRequiredException',
};

const BranchNameExistsException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'BranchNameExistsException',
};

const InvalidBranchNameException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidBranchNameException',
};

const CommitIdRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'CommitIdRequiredException',
};

const CommitDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'CommitDoesNotExistException',
};

const InvalidCommitIdException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidCommitIdException',
};

const CreateBranch = {
    metadata: ServiceMetadata,
    name: 'CreateBranch',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateBranchInput,
    },
    output: {
        shape: CreateBranchOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: BranchNameRequiredException,
        },
        {
            shape: BranchNameExistsException,
        },
        {
            shape: InvalidBranchNameException,
        },
        {
            shape: CommitIdRequiredException,
        },
        {
            shape: CommitDoesNotExistException,
        },
        {
            shape: InvalidCommitIdException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class CreateBranchCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: CreateBranch
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const _Target = {
    type: 'structure',
    required: [
        'repositoryName',
        'sourceReference',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        sourceReference: {
            shape: {
                type: 'string',
            },
        },
        destinationReference: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _TargetList = {
    type: 'list',
    member: {
        shape: _Target,
    },
};

const CreatePullRequestInput = {
    type: 'structure',
    required: [
        'title',
        'targets',
    ],
    members: {
        title: {
            shape: {
                type: 'string',
            },
        },
        description: {
            shape: {
                type: 'string',
            },
        },
        targets: {
            shape: _TargetList,
        },
        clientRequestToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _MergeMetadata = {
    type: 'structure',
    required: [],
    members: {
        isMerged: {
            shape: {
                type: 'boolean',
            },
        },
        mergedBy: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _PullRequestTarget = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        sourceReference: {
            shape: {
                type: 'string',
            },
        },
        destinationReference: {
            shape: {
                type: 'string',
            },
        },
        destinationCommit: {
            shape: {
                type: 'string',
            },
        },
        sourceCommit: {
            shape: {
                type: 'string',
            },
        },
        mergeMetadata: {
            shape: _MergeMetadata,
        },
    },
};

const _PullRequestTargetList = {
    type: 'list',
    member: {
        shape: _PullRequestTarget,
    },
};

const _PullRequest = {
    type: 'structure',
    required: [],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        title: {
            shape: {
                type: 'string',
            },
        },
        description: {
            shape: {
                type: 'string',
            },
        },
        lastActivityDate: {
            shape: {
                type: 'timestamp',
            },
        },
        creationDate: {
            shape: {
                type: 'timestamp',
            },
        },
        pullRequestStatus: {
            shape: {
                type: 'string',
            },
        },
        authorArn: {
            shape: {
                type: 'string',
            },
        },
        pullRequestTargets: {
            shape: _PullRequestTargetList,
        },
        clientRequestToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const CreatePullRequestOutput = {
    type: 'structure',
    required: [
        'pullRequest',
    ],
    members: {
        pullRequest: {
            shape: _PullRequest,
        },
    },
};

const ClientRequestTokenRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'ClientRequestTokenRequiredException',
};

const InvalidClientRequestTokenException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidClientRequestTokenException',
};

const IdempotencyParameterMismatchException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'IdempotencyParameterMismatchException',
};

const ReferenceNameRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'ReferenceNameRequiredException',
};

const InvalidReferenceNameException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidReferenceNameException',
};

const ReferenceDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'ReferenceDoesNotExistException',
};

const ReferenceTypeNotSupportedException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'ReferenceTypeNotSupportedException',
};

const TitleRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'TitleRequiredException',
};

const InvalidTitleException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidTitleException',
};

const InvalidDescriptionException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidDescriptionException',
};

const TargetsRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'TargetsRequiredException',
};

const InvalidTargetsException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidTargetsException',
};

const TargetRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'TargetRequiredException',
};

const InvalidTargetException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidTargetException',
};

const MultipleRepositoriesInPullRequestException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'MultipleRepositoriesInPullRequestException',
};

const MaximumOpenPullRequestsExceededException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'MaximumOpenPullRequestsExceededException',
};

const SourceAndDestinationAreSameException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'SourceAndDestinationAreSameException',
};

const CreatePullRequest = {
    metadata: ServiceMetadata,
    name: 'CreatePullRequest',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreatePullRequestInput,
    },
    output: {
        shape: CreatePullRequestOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
        {
            shape: ClientRequestTokenRequiredException,
        },
        {
            shape: InvalidClientRequestTokenException,
        },
        {
            shape: IdempotencyParameterMismatchException,
        },
        {
            shape: ReferenceNameRequiredException,
        },
        {
            shape: InvalidReferenceNameException,
        },
        {
            shape: ReferenceDoesNotExistException,
        },
        {
            shape: ReferenceTypeNotSupportedException,
        },
        {
            shape: TitleRequiredException,
        },
        {
            shape: InvalidTitleException,
        },
        {
            shape: InvalidDescriptionException,
        },
        {
            shape: TargetsRequiredException,
        },
        {
            shape: InvalidTargetsException,
        },
        {
            shape: TargetRequiredException,
        },
        {
            shape: InvalidTargetException,
        },
        {
            shape: MultipleRepositoriesInPullRequestException,
        },
        {
            shape: MaximumOpenPullRequestsExceededException,
        },
        {
            shape: SourceAndDestinationAreSameException,
        },
    ],
};

class CreatePullRequestCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: CreatePullRequest
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const CreateRepositoryInput = {
    type: 'structure',
    required: [
        'repositoryName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        repositoryDescription: {
            shape: {
                type: 'string',
            },
        },
    },
};

const CreateRepositoryOutput = {
    type: 'structure',
    required: [],
    members: {
        repositoryMetadata: {
            shape: _RepositoryMetadata,
        },
    },
};

const RepositoryNameExistsException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryNameExistsException',
};

const InvalidRepositoryDescriptionException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidRepositoryDescriptionException',
};

const RepositoryLimitExceededException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryLimitExceededException',
};

const CreateRepository = {
    metadata: ServiceMetadata,
    name: 'CreateRepository',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateRepositoryInput,
    },
    output: {
        shape: CreateRepositoryOutput,
    },
    errors: [
        {
            shape: RepositoryNameExistsException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: InvalidRepositoryDescriptionException,
        },
        {
            shape: RepositoryLimitExceededException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class CreateRepositoryCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: CreateRepository
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const DeleteBranchInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'branchName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        branchName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};

const _BranchInfo = {
    type: 'structure',
    required: [],
    members: {
        branchName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        commitId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const DeleteBranchOutput = {
    type: 'structure',
    required: [],
    members: {
        deletedBranch: {
            shape: _BranchInfo,
        },
    },
};

const DefaultBranchCannotBeDeletedException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'DefaultBranchCannotBeDeletedException',
};

const DeleteBranch = {
    metadata: ServiceMetadata,
    name: 'DeleteBranch',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteBranchInput,
    },
    output: {
        shape: DeleteBranchOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: BranchNameRequiredException,
        },
        {
            shape: InvalidBranchNameException,
        },
        {
            shape: DefaultBranchCannotBeDeletedException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class DeleteBranchCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: DeleteBranch
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const DeleteCommentContentInput = {
    type: 'structure',
    required: [
        'commentId',
    ],
    members: {
        commentId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _Comment = {
    type: 'structure',
    required: [],
    members: {
        commentId: {
            shape: {
                type: 'string',
            },
        },
        content: {
            shape: {
                type: 'string',
            },
        },
        inReplyTo: {
            shape: {
                type: 'string',
            },
        },
        creationDate: {
            shape: {
                type: 'timestamp',
            },
        },
        lastModifiedDate: {
            shape: {
                type: 'timestamp',
            },
        },
        authorArn: {
            shape: {
                type: 'string',
            },
        },
        deleted: {
            shape: {
                type: 'boolean',
            },
        },
        clientRequestToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const DeleteCommentContentOutput = {
    type: 'structure',
    required: [],
    members: {
        comment: {
            shape: _Comment,
        },
    },
};

const CommentDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'CommentDoesNotExistException',
};

const CommentIdRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'CommentIdRequiredException',
};

const InvalidCommentIdException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidCommentIdException',
};

const CommentDeletedException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'CommentDeletedException',
};

const DeleteCommentContent = {
    metadata: ServiceMetadata,
    name: 'DeleteCommentContent',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteCommentContentInput,
    },
    output: {
        shape: DeleteCommentContentOutput,
    },
    errors: [
        {
            shape: CommentDoesNotExistException,
        },
        {
            shape: CommentIdRequiredException,
        },
        {
            shape: InvalidCommentIdException,
        },
        {
            shape: CommentDeletedException,
        },
    ],
};

class DeleteCommentContentCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: DeleteCommentContent
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const DeleteRepositoryInput = {
    type: 'structure',
    required: [
        'repositoryName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};

const DeleteRepositoryOutput = {
    type: 'structure',
    required: [],
    members: {
        repositoryId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const DeleteRepository = {
    metadata: ServiceMetadata,
    name: 'DeleteRepository',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteRepositoryInput,
    },
    output: {
        shape: DeleteRepositoryOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class DeleteRepositoryCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: DeleteRepository
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const DescribePullRequestEventsInput = {
    type: 'structure',
    required: [
        'pullRequestId',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        pullRequestEventType: {
            shape: {
                type: 'string',
            },
        },
        actorArn: {
            shape: {
                type: 'string',
            },
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
        maxResults: {
            shape: {
                type: 'integer',
            },
        },
    },
};

const _PullRequestStatusChangedEventMetadata = {
    type: 'structure',
    required: [],
    members: {
        pullRequestStatus: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _PullRequestSourceReferenceUpdatedEventMetadata = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _PullRequestMergedStateChangedEventMetadata = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        destinationReference: {
            shape: {
                type: 'string',
            },
        },
        mergeMetadata: {
            shape: _MergeMetadata,
        },
    },
};

const _PullRequestEvent = {
    type: 'structure',
    required: [],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        eventDate: {
            shape: {
                type: 'timestamp',
            },
        },
        pullRequestEventType: {
            shape: {
                type: 'string',
            },
        },
        actorArn: {
            shape: {
                type: 'string',
            },
        },
        pullRequestStatusChangedEventMetadata: {
            shape: _PullRequestStatusChangedEventMetadata,
        },
        pullRequestSourceReferenceUpdatedEventMetadata: {
            shape: _PullRequestSourceReferenceUpdatedEventMetadata,
        },
        pullRequestMergedStateChangedEventMetadata: {
            shape: _PullRequestMergedStateChangedEventMetadata,
        },
    },
};

const _PullRequestEventList = {
    type: 'list',
    member: {
        shape: _PullRequestEvent,
    },
};

const DescribePullRequestEventsOutput = {
    type: 'structure',
    required: [
        'pullRequestEvents',
    ],
    members: {
        pullRequestEvents: {
            shape: _PullRequestEventList,
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const PullRequestDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'PullRequestDoesNotExistException',
};

const InvalidPullRequestIdException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidPullRequestIdException',
};

const PullRequestIdRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'PullRequestIdRequiredException',
};

const InvalidPullRequestEventTypeException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidPullRequestEventTypeException',
};

const InvalidActorArnException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidActorArnException',
};

const ActorDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'ActorDoesNotExistException',
};

const InvalidMaxResultsException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidMaxResultsException',
};

const InvalidContinuationTokenException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidContinuationTokenException',
};

const DescribePullRequestEvents = {
    metadata: ServiceMetadata,
    name: 'DescribePullRequestEvents',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribePullRequestEventsInput,
    },
    output: {
        shape: DescribePullRequestEventsOutput,
    },
    errors: [
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: InvalidPullRequestEventTypeException,
        },
        {
            shape: InvalidActorArnException,
        },
        {
            shape: ActorDoesNotExistException,
        },
        {
            shape: InvalidMaxResultsException,
        },
        {
            shape: InvalidContinuationTokenException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class DescribePullRequestEventsCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: DescribePullRequestEvents
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetBlobInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'blobId',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        blobId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const GetBlobOutput = {
    type: 'structure',
    required: [
        'content',
    ],
    members: {
        content: {
            shape: {
                type: 'blob',
            },
        },
    },
};

const BlobIdRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'BlobIdRequiredException',
};

const InvalidBlobIdException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidBlobIdException',
};

const BlobIdDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'BlobIdDoesNotExistException',
};

const FileTooLargeException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'FileTooLargeException',
};

const GetBlob = {
    metadata: ServiceMetadata,
    name: 'GetBlob',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetBlobInput,
    },
    output: {
        shape: GetBlobOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: BlobIdRequiredException,
        },
        {
            shape: InvalidBlobIdException,
        },
        {
            shape: BlobIdDoesNotExistException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
        {
            shape: FileTooLargeException,
        },
    ],
};

class GetBlobCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetBlob
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetBranchInput = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        branchName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};

const GetBranchOutput = {
    type: 'structure',
    required: [],
    members: {
        branch: {
            shape: _BranchInfo,
        },
    },
};

const BranchDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'BranchDoesNotExistException',
};

const GetBranch = {
    metadata: ServiceMetadata,
    name: 'GetBranch',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetBranchInput,
    },
    output: {
        shape: GetBranchOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: BranchNameRequiredException,
        },
        {
            shape: InvalidBranchNameException,
        },
        {
            shape: BranchDoesNotExistException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class GetBranchCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetBranch
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetCommentInput = {
    type: 'structure',
    required: [
        'commentId',
    ],
    members: {
        commentId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const GetCommentOutput = {
    type: 'structure',
    required: [],
    members: {
        comment: {
            shape: _Comment,
        },
    },
};

const GetComment = {
    metadata: ServiceMetadata,
    name: 'GetComment',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetCommentInput,
    },
    output: {
        shape: GetCommentOutput,
    },
    errors: [
        {
            shape: CommentDoesNotExistException,
        },
        {
            shape: CommentIdRequiredException,
        },
        {
            shape: InvalidCommentIdException,
        },
        {
            shape: CommentDeletedException,
        },
    ],
};

class GetCommentCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetComment
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetCommentsForComparedCommitInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'afterCommitId',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
        maxResults: {
            shape: {
                type: 'integer',
            },
        },
    },
};

const _Location = {
    type: 'structure',
    required: [],
    members: {
        filePath: {
            shape: {
                type: 'string',
            },
        },
        filePosition: {
            shape: {
                type: 'integer',
            },
        },
        relativeFileVersion: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _Comments = {
    type: 'list',
    member: {
        shape: _Comment,
    },
};

const _CommentsForComparedCommit = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
        beforeBlobId: {
            shape: {
                type: 'string',
            },
        },
        afterBlobId: {
            shape: {
                type: 'string',
            },
        },
        location: {
            shape: _Location,
        },
        comments: {
            shape: _Comments,
        },
    },
};

const _CommentsForComparedCommitData = {
    type: 'list',
    member: {
        shape: _CommentsForComparedCommit,
    },
};

const GetCommentsForComparedCommitOutput = {
    type: 'structure',
    required: [],
    members: {
        commentsForComparedCommitData: {
            shape: _CommentsForComparedCommitData,
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const GetCommentsForComparedCommit = {
    metadata: ServiceMetadata,
    name: 'GetCommentsForComparedCommit',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetCommentsForComparedCommitInput,
    },
    output: {
        shape: GetCommentsForComparedCommitOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: CommitIdRequiredException,
        },
        {
            shape: InvalidCommitIdException,
        },
        {
            shape: CommitDoesNotExistException,
        },
        {
            shape: InvalidMaxResultsException,
        },
        {
            shape: InvalidContinuationTokenException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class GetCommentsForComparedCommitCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetCommentsForComparedCommit
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetCommentsForPullRequestInput = {
    type: 'structure',
    required: [
        'pullRequestId',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
        maxResults: {
            shape: {
                type: 'integer',
            },
        },
    },
};

const _CommentsForPullRequest = {
    type: 'structure',
    required: [],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
        beforeBlobId: {
            shape: {
                type: 'string',
            },
        },
        afterBlobId: {
            shape: {
                type: 'string',
            },
        },
        location: {
            shape: _Location,
        },
        comments: {
            shape: _Comments,
        },
    },
};

const _CommentsForPullRequestData = {
    type: 'list',
    member: {
        shape: _CommentsForPullRequest,
    },
};

const GetCommentsForPullRequestOutput = {
    type: 'structure',
    required: [],
    members: {
        commentsForPullRequestData: {
            shape: _CommentsForPullRequestData,
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const RepositoryNotAssociatedWithPullRequestException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryNotAssociatedWithPullRequestException',
};

const GetCommentsForPullRequest = {
    metadata: ServiceMetadata,
    name: 'GetCommentsForPullRequest',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetCommentsForPullRequestInput,
    },
    output: {
        shape: GetCommentsForPullRequestOutput,
    },
    errors: [
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: CommitIdRequiredException,
        },
        {
            shape: InvalidCommitIdException,
        },
        {
            shape: CommitDoesNotExistException,
        },
        {
            shape: InvalidMaxResultsException,
        },
        {
            shape: InvalidContinuationTokenException,
        },
        {
            shape: RepositoryNotAssociatedWithPullRequestException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class GetCommentsForPullRequestCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetCommentsForPullRequest
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetCommitInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'commitId',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        commitId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _ParentList = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
        },
    },
};

const _UserInfo = {
    type: 'structure',
    required: [],
    members: {
        name: {
            shape: {
                type: 'string',
            },
        },
        email: {
            shape: {
                type: 'string',
            },
        },
        date: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _Commit = {
    type: 'structure',
    required: [],
    members: {
        commitId: {
            shape: {
                type: 'string',
            },
        },
        treeId: {
            shape: {
                type: 'string',
            },
        },
        parents: {
            shape: _ParentList,
        },
        message: {
            shape: {
                type: 'string',
            },
        },
        author: {
            shape: _UserInfo,
        },
        committer: {
            shape: _UserInfo,
        },
        additionalData: {
            shape: {
                type: 'string',
            },
        },
    },
};

const GetCommitOutput = {
    type: 'structure',
    required: [
        'commit',
    ],
    members: {
        commit: {
            shape: _Commit,
        },
    },
};

const CommitIdDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'CommitIdDoesNotExistException',
};

const GetCommit = {
    metadata: ServiceMetadata,
    name: 'GetCommit',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetCommitInput,
    },
    output: {
        shape: GetCommitOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: CommitIdRequiredException,
        },
        {
            shape: InvalidCommitIdException,
        },
        {
            shape: CommitIdDoesNotExistException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class GetCommitCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetCommit
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetDifferencesInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'afterCommitSpecifier',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        beforeCommitSpecifier: {
            shape: {
                type: 'string',
            },
        },
        afterCommitSpecifier: {
            shape: {
                type: 'string',
            },
        },
        beforePath: {
            shape: {
                type: 'string',
            },
        },
        afterPath: {
            shape: {
                type: 'string',
            },
        },
        MaxResults: {
            shape: {
                type: 'integer',
            },
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _BlobMetadata = {
    type: 'structure',
    required: [],
    members: {
        blobId: {
            shape: {
                type: 'string',
            },
        },
        path: {
            shape: {
                type: 'string',
            },
        },
        mode: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _Difference = {
    type: 'structure',
    required: [],
    members: {
        beforeBlob: {
            shape: _BlobMetadata,
        },
        afterBlob: {
            shape: _BlobMetadata,
        },
        changeType: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _DifferenceList = {
    type: 'list',
    member: {
        shape: _Difference,
    },
};

const GetDifferencesOutput = {
    type: 'structure',
    required: [],
    members: {
        differences: {
            shape: _DifferenceList,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const CommitRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'CommitRequiredException',
};

const InvalidCommitException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidCommitException',
};

const InvalidPathException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidPathException',
};

const PathDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'PathDoesNotExistException',
};

const GetDifferences = {
    metadata: ServiceMetadata,
    name: 'GetDifferences',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetDifferencesInput,
    },
    output: {
        shape: GetDifferencesOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: InvalidContinuationTokenException,
        },
        {
            shape: InvalidMaxResultsException,
        },
        {
            shape: InvalidCommitIdException,
        },
        {
            shape: CommitRequiredException,
        },
        {
            shape: InvalidCommitException,
        },
        {
            shape: CommitDoesNotExistException,
        },
        {
            shape: InvalidPathException,
        },
        {
            shape: PathDoesNotExistException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class GetDifferencesCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetDifferences
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetMergeConflictsInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'destinationCommitSpecifier',
        'sourceCommitSpecifier',
        'mergeOption',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        destinationCommitSpecifier: {
            shape: {
                type: 'string',
            },
        },
        sourceCommitSpecifier: {
            shape: {
                type: 'string',
            },
        },
        mergeOption: {
            shape: {
                type: 'string',
            },
        },
    },
};

const GetMergeConflictsOutput = {
    type: 'structure',
    required: [
        'mergeable',
        'destinationCommitId',
        'sourceCommitId',
    ],
    members: {
        mergeable: {
            shape: {
                type: 'boolean',
            },
        },
        destinationCommitId: {
            shape: {
                type: 'string',
            },
        },
        sourceCommitId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const MergeOptionRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'MergeOptionRequiredException',
};

const InvalidMergeOptionException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidMergeOptionException',
};

const InvalidDestinationCommitSpecifierException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidDestinationCommitSpecifierException',
};

const InvalidSourceCommitSpecifierException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidSourceCommitSpecifierException',
};

const TipsDivergenceExceededException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'TipsDivergenceExceededException',
};

const GetMergeConflicts = {
    metadata: ServiceMetadata,
    name: 'GetMergeConflicts',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetMergeConflictsInput,
    },
    output: {
        shape: GetMergeConflictsOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: MergeOptionRequiredException,
        },
        {
            shape: InvalidMergeOptionException,
        },
        {
            shape: InvalidDestinationCommitSpecifierException,
        },
        {
            shape: InvalidSourceCommitSpecifierException,
        },
        {
            shape: CommitRequiredException,
        },
        {
            shape: CommitDoesNotExistException,
        },
        {
            shape: InvalidCommitException,
        },
        {
            shape: TipsDivergenceExceededException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class GetMergeConflictsCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetMergeConflicts
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetPullRequestInput = {
    type: 'structure',
    required: [
        'pullRequestId',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const GetPullRequestOutput = {
    type: 'structure',
    required: [
        'pullRequest',
    ],
    members: {
        pullRequest: {
            shape: _PullRequest,
        },
    },
};

const GetPullRequest = {
    metadata: ServiceMetadata,
    name: 'GetPullRequest',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetPullRequestInput,
    },
    output: {
        shape: GetPullRequestOutput,
    },
    errors: [
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class GetPullRequestCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetPullRequest
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetRepositoryInput = {
    type: 'structure',
    required: [
        'repositoryName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};

const GetRepositoryOutput = {
    type: 'structure',
    required: [],
    members: {
        repositoryMetadata: {
            shape: _RepositoryMetadata,
        },
    },
};

const GetRepository = {
    metadata: ServiceMetadata,
    name: 'GetRepository',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetRepositoryInput,
    },
    output: {
        shape: GetRepositoryOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class GetRepositoryCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetRepository
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const GetRepositoryTriggersInput = {
    type: 'structure',
    required: [
        'repositoryName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};

const _BranchNameList = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
};

const _RepositoryTriggerEventList = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
        },
    },
};

const _RepositoryTrigger = {
    type: 'structure',
    required: [
        'name',
        'destinationArn',
        'events',
    ],
    members: {
        name: {
            shape: {
                type: 'string',
            },
        },
        destinationArn: {
            shape: {
                type: 'string',
            },
        },
        customData: {
            shape: {
                type: 'string',
            },
        },
        branches: {
            shape: _BranchNameList,
        },
        events: {
            shape: _RepositoryTriggerEventList,
        },
    },
};

const _RepositoryTriggersList = {
    type: 'list',
    member: {
        shape: _RepositoryTrigger,
    },
};

const GetRepositoryTriggersOutput = {
    type: 'structure',
    required: [],
    members: {
        configurationId: {
            shape: {
                type: 'string',
            },
        },
        triggers: {
            shape: _RepositoryTriggersList,
        },
    },
};

const GetRepositoryTriggers = {
    metadata: ServiceMetadata,
    name: 'GetRepositoryTriggers',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetRepositoryTriggersInput,
    },
    output: {
        shape: GetRepositoryTriggersOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class GetRepositoryTriggersCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: GetRepositoryTriggers
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const ListBranchesInput = {
    type: 'structure',
    required: [
        'repositoryName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const ListBranchesOutput = {
    type: 'structure',
    required: [],
    members: {
        branches: {
            shape: _BranchNameList,
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const ListBranches = {
    metadata: ServiceMetadata,
    name: 'ListBranches',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListBranchesInput,
    },
    output: {
        shape: ListBranchesOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
        {
            shape: InvalidContinuationTokenException,
        },
    ],
};

class ListBranchesCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: ListBranches
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const ListPullRequestsInput = {
    type: 'structure',
    required: [
        'repositoryName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        authorArn: {
            shape: {
                type: 'string',
            },
        },
        pullRequestStatus: {
            shape: {
                type: 'string',
            },
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
        maxResults: {
            shape: {
                type: 'integer',
            },
        },
    },
};

const _PullRequestIdList = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
        },
    },
};

const ListPullRequestsOutput = {
    type: 'structure',
    required: [
        'pullRequestIds',
    ],
    members: {
        pullRequestIds: {
            shape: _PullRequestIdList,
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const InvalidPullRequestStatusException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidPullRequestStatusException',
};

const InvalidAuthorArnException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidAuthorArnException',
};

const AuthorDoesNotExistException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'AuthorDoesNotExistException',
};

const ListPullRequests = {
    metadata: ServiceMetadata,
    name: 'ListPullRequests',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListPullRequestsInput,
    },
    output: {
        shape: ListPullRequestsOutput,
    },
    errors: [
        {
            shape: InvalidPullRequestStatusException,
        },
        {
            shape: InvalidAuthorArnException,
        },
        {
            shape: AuthorDoesNotExistException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidMaxResultsException,
        },
        {
            shape: InvalidContinuationTokenException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class ListPullRequestsCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: ListPullRequests
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const ListRepositoriesInput = {
    type: 'structure',
    required: [],
    members: {
        nextToken: {
            shape: {
                type: 'string',
            },
        },
        sortBy: {
            shape: {
                type: 'string',
            },
        },
        order: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _RepositoryNameIdPair = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        repositoryId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _RepositoryNameIdPairList = {
    type: 'list',
    member: {
        shape: _RepositoryNameIdPair,
    },
};

const ListRepositoriesOutput = {
    type: 'structure',
    required: [],
    members: {
        repositories: {
            shape: _RepositoryNameIdPairList,
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const InvalidSortByException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidSortByException',
};

const InvalidOrderException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidOrderException',
};

const ListRepositories = {
    metadata: ServiceMetadata,
    name: 'ListRepositories',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListRepositoriesInput,
    },
    output: {
        shape: ListRepositoriesOutput,
    },
    errors: [
        {
            shape: InvalidSortByException,
        },
        {
            shape: InvalidOrderException,
        },
        {
            shape: InvalidContinuationTokenException,
        },
    ],
};

class ListRepositoriesCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: ListRepositories
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const MergePullRequestByFastForwardInput = {
    type: 'structure',
    required: [
        'pullRequestId',
        'repositoryName',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        sourceCommitId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const MergePullRequestByFastForwardOutput = {
    type: 'structure',
    required: [],
    members: {
        pullRequest: {
            shape: _PullRequest,
        },
    },
};

const ManualMergeRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'ManualMergeRequiredException',
};

const PullRequestAlreadyClosedException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'PullRequestAlreadyClosedException',
};

const TipOfSourceReferenceIsDifferentException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'TipOfSourceReferenceIsDifferentException',
};

const MergePullRequestByFastForward = {
    metadata: ServiceMetadata,
    name: 'MergePullRequestByFastForward',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: MergePullRequestByFastForwardInput,
    },
    output: {
        shape: MergePullRequestByFastForwardOutput,
    },
    errors: [
        {
            shape: ManualMergeRequiredException,
        },
        {
            shape: PullRequestAlreadyClosedException,
        },
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: TipOfSourceReferenceIsDifferentException,
        },
        {
            shape: ReferenceDoesNotExistException,
        },
        {
            shape: InvalidCommitIdException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class MergePullRequestByFastForwardCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: MergePullRequestByFastForward
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const PostCommentForComparedCommitInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'afterCommitId',
        'content',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
        location: {
            shape: _Location,
        },
        content: {
            shape: {
                type: 'string',
            },
        },
        clientRequestToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const PostCommentForComparedCommitOutput = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
        beforeBlobId: {
            shape: {
                type: 'string',
            },
        },
        afterBlobId: {
            shape: {
                type: 'string',
            },
        },
        location: {
            shape: _Location,
        },
        comment: {
            shape: _Comment,
        },
    },
};

const CommentContentRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'CommentContentRequiredException',
};

const CommentContentSizeLimitExceededException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'CommentContentSizeLimitExceededException',
};

const InvalidFileLocationException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidFileLocationException',
};

const InvalidRelativeFileVersionEnumException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidRelativeFileVersionEnumException',
};

const PathRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'PathRequiredException',
};

const InvalidFilePositionException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidFilePositionException',
};

const BeforeCommitIdAndAfterCommitIdAreSameException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'BeforeCommitIdAndAfterCommitIdAreSameException',
};

const PostCommentForComparedCommit = {
    metadata: ServiceMetadata,
    name: 'PostCommentForComparedCommit',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: PostCommentForComparedCommitInput,
    },
    output: {
        shape: PostCommentForComparedCommitOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: ClientRequestTokenRequiredException,
        },
        {
            shape: InvalidClientRequestTokenException,
        },
        {
            shape: IdempotencyParameterMismatchException,
        },
        {
            shape: CommentContentRequiredException,
        },
        {
            shape: CommentContentSizeLimitExceededException,
        },
        {
            shape: InvalidFileLocationException,
        },
        {
            shape: InvalidRelativeFileVersionEnumException,
        },
        {
            shape: PathRequiredException,
        },
        {
            shape: InvalidFilePositionException,
        },
        {
            shape: CommitIdRequiredException,
        },
        {
            shape: InvalidCommitIdException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
        {
            shape: BeforeCommitIdAndAfterCommitIdAreSameException,
        },
        {
            shape: CommitDoesNotExistException,
        },
        {
            shape: InvalidPathException,
        },
        {
            shape: PathDoesNotExistException,
        },
    ],
};

class PostCommentForComparedCommitCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: PostCommentForComparedCommit
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const PostCommentForPullRequestInput = {
    type: 'structure',
    required: [
        'pullRequestId',
        'repositoryName',
        'beforeCommitId',
        'afterCommitId',
        'content',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
        location: {
            shape: _Location,
        },
        content: {
            shape: {
                type: 'string',
            },
        },
        clientRequestToken: {
            shape: {
                type: 'string',
            },
        },
    },
};

const PostCommentForPullRequestOutput = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
        beforeBlobId: {
            shape: {
                type: 'string',
            },
        },
        afterBlobId: {
            shape: {
                type: 'string',
            },
        },
        location: {
            shape: _Location,
        },
        comment: {
            shape: _Comment,
        },
    },
};

const PostCommentForPullRequest = {
    metadata: ServiceMetadata,
    name: 'PostCommentForPullRequest',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: PostCommentForPullRequestInput,
    },
    output: {
        shape: PostCommentForPullRequestOutput,
    },
    errors: [
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: RepositoryNotAssociatedWithPullRequestException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: ClientRequestTokenRequiredException,
        },
        {
            shape: InvalidClientRequestTokenException,
        },
        {
            shape: IdempotencyParameterMismatchException,
        },
        {
            shape: CommentContentRequiredException,
        },
        {
            shape: CommentContentSizeLimitExceededException,
        },
        {
            shape: InvalidFileLocationException,
        },
        {
            shape: InvalidRelativeFileVersionEnumException,
        },
        {
            shape: PathRequiredException,
        },
        {
            shape: InvalidFilePositionException,
        },
        {
            shape: CommitIdRequiredException,
        },
        {
            shape: InvalidCommitIdException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
        {
            shape: CommitDoesNotExistException,
        },
        {
            shape: InvalidPathException,
        },
        {
            shape: PathDoesNotExistException,
        },
        {
            shape: PathRequiredException,
        },
        {
            shape: BeforeCommitIdAndAfterCommitIdAreSameException,
        },
    ],
};

class PostCommentForPullRequestCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: PostCommentForPullRequest
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const PostCommentReplyInput = {
    type: 'structure',
    required: [
        'inReplyTo',
        'content',
    ],
    members: {
        inReplyTo: {
            shape: {
                type: 'string',
            },
        },
        clientRequestToken: {
            shape: {
                type: 'string',
            },
        },
        content: {
            shape: {
                type: 'string',
            },
        },
    },
};

const PostCommentReplyOutput = {
    type: 'structure',
    required: [],
    members: {
        comment: {
            shape: _Comment,
        },
    },
};

const PostCommentReply = {
    metadata: ServiceMetadata,
    name: 'PostCommentReply',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: PostCommentReplyInput,
    },
    output: {
        shape: PostCommentReplyOutput,
    },
    errors: [
        {
            shape: ClientRequestTokenRequiredException,
        },
        {
            shape: InvalidClientRequestTokenException,
        },
        {
            shape: IdempotencyParameterMismatchException,
        },
        {
            shape: CommentContentRequiredException,
        },
        {
            shape: CommentContentSizeLimitExceededException,
        },
        {
            shape: CommentDoesNotExistException,
        },
        {
            shape: CommentIdRequiredException,
        },
        {
            shape: InvalidCommentIdException,
        },
    ],
};

class PostCommentReplyCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: PostCommentReply
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const PutRepositoryTriggersInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'triggers',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        triggers: {
            shape: _RepositoryTriggersList,
        },
    },
};

const PutRepositoryTriggersOutput = {
    type: 'structure',
    required: [],
    members: {
        configurationId: {
            shape: {
                type: 'string',
            },
        },
    },
};

const RepositoryTriggersListRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryTriggersListRequiredException',
};

const MaximumRepositoryTriggersExceededException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'MaximumRepositoryTriggersExceededException',
};

const InvalidRepositoryTriggerNameException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidRepositoryTriggerNameException',
};

const InvalidRepositoryTriggerDestinationArnException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidRepositoryTriggerDestinationArnException',
};

const InvalidRepositoryTriggerRegionException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidRepositoryTriggerRegionException',
};

const InvalidRepositoryTriggerCustomDataException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidRepositoryTriggerCustomDataException',
};

const MaximumBranchesExceededException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'MaximumBranchesExceededException',
};

const InvalidRepositoryTriggerBranchNameException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidRepositoryTriggerBranchNameException',
};

const InvalidRepositoryTriggerEventsException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidRepositoryTriggerEventsException',
};

const RepositoryTriggerNameRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryTriggerNameRequiredException',
};

const RepositoryTriggerDestinationArnRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryTriggerDestinationArnRequiredException',
};

const RepositoryTriggerBranchNameListRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryTriggerBranchNameListRequiredException',
};

const RepositoryTriggerEventsListRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'RepositoryTriggerEventsListRequiredException',
};

const PutRepositoryTriggers = {
    metadata: ServiceMetadata,
    name: 'PutRepositoryTriggers',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: PutRepositoryTriggersInput,
    },
    output: {
        shape: PutRepositoryTriggersOutput,
    },
    errors: [
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryTriggersListRequiredException,
        },
        {
            shape: MaximumRepositoryTriggersExceededException,
        },
        {
            shape: InvalidRepositoryTriggerNameException,
        },
        {
            shape: InvalidRepositoryTriggerDestinationArnException,
        },
        {
            shape: InvalidRepositoryTriggerRegionException,
        },
        {
            shape: InvalidRepositoryTriggerCustomDataException,
        },
        {
            shape: MaximumBranchesExceededException,
        },
        {
            shape: InvalidRepositoryTriggerBranchNameException,
        },
        {
            shape: InvalidRepositoryTriggerEventsException,
        },
        {
            shape: RepositoryTriggerNameRequiredException,
        },
        {
            shape: RepositoryTriggerDestinationArnRequiredException,
        },
        {
            shape: RepositoryTriggerBranchNameListRequiredException,
        },
        {
            shape: RepositoryTriggerEventsListRequiredException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class PutRepositoryTriggersCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: PutRepositoryTriggers
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const TestRepositoryTriggersInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'triggers',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        triggers: {
            shape: _RepositoryTriggersList,
        },
    },
};

const _RepositoryTriggerNameList = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
        },
    },
};

const _RepositoryTriggerExecutionFailure = {
    type: 'structure',
    required: [],
    members: {
        trigger: {
            shape: {
                type: 'string',
            },
        },
        failureMessage: {
            shape: {
                type: 'string',
            },
        },
    },
};

const _RepositoryTriggerExecutionFailureList = {
    type: 'list',
    member: {
        shape: _RepositoryTriggerExecutionFailure,
    },
};

const TestRepositoryTriggersOutput = {
    type: 'structure',
    required: [],
    members: {
        successfulExecutions: {
            shape: _RepositoryTriggerNameList,
        },
        failedExecutions: {
            shape: _RepositoryTriggerExecutionFailureList,
        },
    },
};

const TestRepositoryTriggers = {
    metadata: ServiceMetadata,
    name: 'TestRepositoryTriggers',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: TestRepositoryTriggersInput,
    },
    output: {
        shape: TestRepositoryTriggersOutput,
    },
    errors: [
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryTriggersListRequiredException,
        },
        {
            shape: MaximumRepositoryTriggersExceededException,
        },
        {
            shape: InvalidRepositoryTriggerNameException,
        },
        {
            shape: InvalidRepositoryTriggerDestinationArnException,
        },
        {
            shape: InvalidRepositoryTriggerRegionException,
        },
        {
            shape: InvalidRepositoryTriggerCustomDataException,
        },
        {
            shape: MaximumBranchesExceededException,
        },
        {
            shape: InvalidRepositoryTriggerBranchNameException,
        },
        {
            shape: InvalidRepositoryTriggerEventsException,
        },
        {
            shape: RepositoryTriggerNameRequiredException,
        },
        {
            shape: RepositoryTriggerDestinationArnRequiredException,
        },
        {
            shape: RepositoryTriggerBranchNameListRequiredException,
        },
        {
            shape: RepositoryTriggerEventsListRequiredException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class TestRepositoryTriggersCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: TestRepositoryTriggers
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const UpdateCommentInput = {
    type: 'structure',
    required: [
        'commentId',
        'content',
    ],
    members: {
        commentId: {
            shape: {
                type: 'string',
            },
        },
        content: {
            shape: {
                type: 'string',
            },
        },
    },
};

const UpdateCommentOutput = {
    type: 'structure',
    required: [],
    members: {
        comment: {
            shape: _Comment,
        },
    },
};

const CommentNotCreatedByCallerException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'CommentNotCreatedByCallerException',
};

const UpdateComment = {
    metadata: ServiceMetadata,
    name: 'UpdateComment',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateCommentInput,
    },
    output: {
        shape: UpdateCommentOutput,
    },
    errors: [
        {
            shape: CommentContentRequiredException,
        },
        {
            shape: CommentContentSizeLimitExceededException,
        },
        {
            shape: CommentDoesNotExistException,
        },
        {
            shape: CommentIdRequiredException,
        },
        {
            shape: InvalidCommentIdException,
        },
        {
            shape: CommentNotCreatedByCallerException,
        },
        {
            shape: CommentDeletedException,
        },
    ],
};

class UpdateCommentCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: UpdateComment
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const UpdateDefaultBranchInput = {
    type: 'structure',
    required: [
        'repositoryName',
        'defaultBranchName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        defaultBranchName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};

const UpdateDefaultBranchOutput = {
    type: 'structure',
    required: [],
    members: {},
};

const UpdateDefaultBranch = {
    metadata: ServiceMetadata,
    name: 'UpdateDefaultBranch',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateDefaultBranchInput,
    },
    output: {
        shape: UpdateDefaultBranchOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: BranchNameRequiredException,
        },
        {
            shape: InvalidBranchNameException,
        },
        {
            shape: BranchDoesNotExistException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class UpdateDefaultBranchCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: UpdateDefaultBranch
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const UpdatePullRequestDescriptionInput = {
    type: 'structure',
    required: [
        'pullRequestId',
        'description',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        description: {
            shape: {
                type: 'string',
            },
        },
    },
};

const UpdatePullRequestDescriptionOutput = {
    type: 'structure',
    required: [
        'pullRequest',
    ],
    members: {
        pullRequest: {
            shape: _PullRequest,
        },
    },
};

const UpdatePullRequestDescription = {
    metadata: ServiceMetadata,
    name: 'UpdatePullRequestDescription',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdatePullRequestDescriptionInput,
    },
    output: {
        shape: UpdatePullRequestDescriptionOutput,
    },
    errors: [
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: InvalidDescriptionException,
        },
        {
            shape: PullRequestAlreadyClosedException,
        },
    ],
};

class UpdatePullRequestDescriptionCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: UpdatePullRequestDescription
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const UpdatePullRequestStatusInput = {
    type: 'structure',
    required: [
        'pullRequestId',
        'pullRequestStatus',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        pullRequestStatus: {
            shape: {
                type: 'string',
            },
        },
    },
};

const UpdatePullRequestStatusOutput = {
    type: 'structure',
    required: [
        'pullRequest',
    ],
    members: {
        pullRequest: {
            shape: _PullRequest,
        },
    },
};

const InvalidPullRequestStatusUpdateException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'InvalidPullRequestStatusUpdateException',
};

const PullRequestStatusRequiredException = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'PullRequestStatusRequiredException',
};

const UpdatePullRequestStatus = {
    metadata: ServiceMetadata,
    name: 'UpdatePullRequestStatus',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdatePullRequestStatusInput,
    },
    output: {
        shape: UpdatePullRequestStatusOutput,
    },
    errors: [
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: InvalidPullRequestStatusUpdateException,
        },
        {
            shape: InvalidPullRequestStatusException,
        },
        {
            shape: PullRequestStatusRequiredException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class UpdatePullRequestStatusCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: UpdatePullRequestStatus
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const UpdatePullRequestTitleInput = {
    type: 'structure',
    required: [
        'pullRequestId',
        'title',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        title: {
            shape: {
                type: 'string',
            },
        },
    },
};

const UpdatePullRequestTitleOutput = {
    type: 'structure',
    required: [
        'pullRequest',
    ],
    members: {
        pullRequest: {
            shape: _PullRequest,
        },
    },
};

const UpdatePullRequestTitle = {
    metadata: ServiceMetadata,
    name: 'UpdatePullRequestTitle',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdatePullRequestTitleInput,
    },
    output: {
        shape: UpdatePullRequestTitleOutput,
    },
    errors: [
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: TitleRequiredException,
        },
        {
            shape: InvalidTitleException,
        },
        {
            shape: PullRequestAlreadyClosedException,
        },
    ],
};

class UpdatePullRequestTitleCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: UpdatePullRequestTitle
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const UpdateRepositoryDescriptionInput = {
    type: 'structure',
    required: [
        'repositoryName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        repositoryDescription: {
            shape: {
                type: 'string',
            },
        },
    },
};

const UpdateRepositoryDescriptionOutput = {
    type: 'structure',
    required: [],
    members: {},
};

const UpdateRepositoryDescription = {
    metadata: ServiceMetadata,
    name: 'UpdateRepositoryDescription',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateRepositoryDescriptionInput,
    },
    output: {
        shape: UpdateRepositoryDescriptionOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: InvalidRepositoryDescriptionException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};

class UpdateRepositoryDescriptionCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: UpdateRepositoryDescription
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

const UpdateRepositoryNameInput = {
    type: 'structure',
    required: [
        'oldName',
        'newName',
    ],
    members: {
        oldName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        newName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};

const UpdateRepositoryNameOutput = {
    type: 'structure',
    required: [],
    members: {},
};

const UpdateRepositoryName = {
    metadata: ServiceMetadata,
    name: 'UpdateRepositoryName',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateRepositoryNameInput,
    },
    output: {
        shape: UpdateRepositoryNameOutput,
    },
    errors: [
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: RepositoryNameExistsException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
    ],
};

class UpdateRepositoryNameCommand {
    constructor(input) {
        this.input = input;
        this.middlewareStack = new MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: UpdateRepositoryName
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}

class CodeCommit extends CodeCommitClient {
    batchGetRepositories(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new BatchGetRepositoriesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    createBranch(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new CreateBranchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    createPullRequest(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new CreatePullRequestCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    createRepository(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new CreateRepositoryCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    deleteBranch(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new DeleteBranchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    deleteCommentContent(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new DeleteCommentContentCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    deleteRepository(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new DeleteRepositoryCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    describePullRequestEvents(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new DescribePullRequestEventsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getBlob(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetBlobCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getBranch(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetBranchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getComment(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetCommentCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getCommentsForComparedCommit(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetCommentsForComparedCommitCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getCommentsForPullRequest(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetCommentsForPullRequestCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getCommit(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetCommitCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getDifferences(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetDifferencesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getMergeConflicts(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetMergeConflictsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getPullRequest(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetPullRequestCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getRepository(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetRepositoryCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getRepositoryTriggers(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetRepositoryTriggersCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    listBranches(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new ListBranchesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    listPullRequests(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new ListPullRequestsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    listRepositories(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new ListRepositoriesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    mergePullRequestByFastForward(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new MergePullRequestByFastForwardCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    postCommentForComparedCommit(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new PostCommentForComparedCommitCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    postCommentForPullRequest(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new PostCommentForPullRequestCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    postCommentReply(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new PostCommentReplyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    putRepositoryTriggers(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new PutRepositoryTriggersCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    testRepositoryTriggers(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new TestRepositoryTriggersCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    updateComment(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new UpdateCommentCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    updateDefaultBranch(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new UpdateDefaultBranchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    updatePullRequestDescription(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new UpdatePullRequestDescriptionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    updatePullRequestStatus(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new UpdatePullRequestStatusCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    updatePullRequestTitle(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new UpdatePullRequestTitleCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    updateRepositoryDescription(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new UpdateRepositoryDescriptionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    updateRepositoryName(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new UpdateRepositoryNameCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
}

export { CodeCommitClient, configurationProperties, CodeCommit, BatchGetRepositoriesCommand, CreateBranchCommand, CreatePullRequestCommand, CreateRepositoryCommand, DeleteBranchCommand, DeleteCommentContentCommand, DeleteRepositoryCommand, DescribePullRequestEventsCommand, GetBlobCommand, GetBranchCommand, GetCommentCommand, GetCommentsForComparedCommitCommand, GetCommentsForPullRequestCommand, GetCommitCommand, GetDifferencesCommand, GetMergeConflictsCommand, GetPullRequestCommand, GetRepositoryCommand, GetRepositoryTriggersCommand, ListBranchesCommand, ListPullRequestsCommand, ListRepositoriesCommand, MergePullRequestByFastForwardCommand, PostCommentForComparedCommitCommand, PostCommentForPullRequestCommand, PostCommentReplyCommand, PutRepositoryTriggersCommand, TestRepositoryTriggersCommand, UpdateCommentCommand, UpdateDefaultBranchCommand, UpdatePullRequestDescriptionCommand, UpdatePullRequestStatusCommand, UpdatePullRequestTitleCommand, UpdateRepositoryDescriptionCommand, UpdateRepositoryNameCommand };
