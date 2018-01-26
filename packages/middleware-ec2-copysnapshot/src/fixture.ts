import {
    HttpRequest,
    HandlerExecutionContext,
    SupportedProtocol,
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
