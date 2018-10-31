import {CreatePullRequestInput} from './CreatePullRequestInput';
import {CreatePullRequestOutput} from './CreatePullRequestOutput';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {ClientRequestTokenRequiredException} from './ClientRequestTokenRequiredException';
import {InvalidClientRequestTokenException} from './InvalidClientRequestTokenException';
import {IdempotencyParameterMismatchException} from './IdempotencyParameterMismatchException';
import {ReferenceNameRequiredException} from './ReferenceNameRequiredException';
import {InvalidReferenceNameException} from './InvalidReferenceNameException';
import {ReferenceDoesNotExistException} from './ReferenceDoesNotExistException';
import {ReferenceTypeNotSupportedException} from './ReferenceTypeNotSupportedException';
import {TitleRequiredException} from './TitleRequiredException';
import {InvalidTitleException} from './InvalidTitleException';
import {InvalidDescriptionException} from './InvalidDescriptionException';
import {TargetsRequiredException} from './TargetsRequiredException';
import {InvalidTargetsException} from './InvalidTargetsException';
import {TargetRequiredException} from './TargetRequiredException';
import {InvalidTargetException} from './InvalidTargetException';
import {MultipleRepositoriesInPullRequestException} from './MultipleRepositoriesInPullRequestException';
import {MaximumOpenPullRequestsExceededException} from './MaximumOpenPullRequestsExceededException';
import {SourceAndDestinationAreSameException} from './SourceAndDestinationAreSameException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreatePullRequest: _Operation_ = {
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