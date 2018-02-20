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
            apiVersion: '2016-11-15',
            endpointPrefix: 'ec2',
            protocol: 'ec2' as SupportedProtocol,
            serviceFullName: 'Amazon Elastic Compute Cloud',
            signatureVersion: 'v4',
            uid: 'ec2-2016-11-15'
        },
        name: 'CopySnapshot',
        http: {
            method: 'POST',
            requestUri: '/'
        },
        input: {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    DestinationRegion: {
                        shape: {type: 'string'},
                        locationName: 'destinationRegion'
                    },
                    PresignedUrl: {
                        shape: {type: 'string'},
                        locationName: "presignedUrl"
                    },
                    SourceRegion: {shape: {type: 'string'},},
                    SourceSnapshotId: {shape: {type: 'string'},},
                }
            },
        },
        output: {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    SnapshotId: {
                        shape: {type: 'string'},
                        locationName: "snapshotId"
                    }
                }
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

export const endpoint = () => Promise.resolve({
    protocol: 'https:',
    path: '/',
    hostname: 'ec2.mock-region.amazonaws.com'
});

export const credentials = () => Promise.resolve({
    accessKeyId: 'akid',
    secretAccessKey: 'secret',
    sessionToken: 'session'
});

export const toBase64 = jest.fn();

export const fromUtf8 = jest.fn();

export const nextHandler = jest.fn(() => Promise.resolve());
