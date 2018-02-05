import {
    HttpRequest,
    HandlerExecutionContext,
    SupportedProtocol,
    SourceData,
} from '@aws/types'

export const context: HandlerExecutionContext = {
    logger: {} as any,
    model: {
        metadata: {
            apiVersion: '2014-10-31',
            endpointPrefix: 'rds',
            protocol: 'query',
            serviceFullName: 'Amazon Relational Database Service',
            signatureVersion: 'v4',
            uid: 'rds-2014-10-31'
        },
        name: 'CopyDBClusterSnapshot',
        http: {
            method: 'POST',
            requestUri: '/'
        },
        input: {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    PreSignedUrl: {shape: {type: 'string'}},
                    SourceDBClusterSnapshotIdentifier: {shape: {type: 'string'}},
                    TargetDBClusterSnapshotIdentifier: {shape: {type: 'string'}},
                    KmsKeyId: {shape: {type: 'string'}},
                }
            },
        },
        output: {
            shape: {
                type: 'structure',
                required: [],
                members: {},
            },
        },
        errors: []
    }
}

export class MockSha256 {
    constructor(secret?: string | ArrayBuffer | ArrayBufferView) {}
    update (data?: SourceData) {}
    digest () {return Promise.resolve(new Uint8Array(5))}
}

export const region = () => Promise.resolve('mock-region');
// export const region = () => Promise.resolve('us-east-1');

export const endpoint = () => Promise.resolve({
    protocol: 'https:',
    path: '/',
    hostname: 'ec2.mock-region.amazonaws.com'
});

export const credentials = () => Promise.resolve({
    accessKeyId: 'akid',
    secretAccessKey: 'secret',
    sessionToken: 'session',
});

export const toBase64 = jest.fn();

export const fromUtf8 = jest.fn();
