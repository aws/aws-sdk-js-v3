import {
    OperationModel,
    ServiceMetadata
} from '@aws-sdk/types';

const glacierMetadata: ServiceMetadata = {
    apiVersion: '2012-06-01',
    endpointPrefix: 'glacier',
    protocol: 'rest-json',
    serviceFullName: 'Amazon Glacier',
    signatureVersion: 'v4',
    uid: 'glacier-2012-06-01'
};

export const UploadArchiveOperation: OperationModel = {
    metadata: glacierMetadata,
    name: 'UploadArchiveOperation',
    http: {
        method: 'POST',
        requestUri: '/{accountId}/vaults/{vaultName}/archives',
    },
    input: {
        shape: {
            type: 'structure',
            required: [
                'vaultName',
                'accountId',
            ],
            members: {
                vaultName: {
                    shape: {
                        type: 'string',
                    },
                    location: 'uri',
                    locationName: 'vaultName',
                },
                accountId: {
                    shape: {
                        type: 'string',
                    },
                    location: 'uri',
                    locationName: 'accountId',
                },
                archiveDescription: {
                    shape: {
                        type: 'string',
                    },
                    location: 'header',
                    locationName: 'x-amz-archive-description',
                },
                checksum: {
                    shape: {
                        type: 'string',
                    },
                    location: 'header',
                    locationName: 'x-amz-sha256-tree-hash',
                },
                body: {
                    shape: {
                        type: 'blob',
                        streaming: true,
                    },
                },
            },
            payload: 'body',
        }
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {
                location: {
                    shape: {
                        type: 'string',
                    },
                    location: 'header',
                    locationName: 'Location',
                },
                checksum: {
                    shape: {
                        type: 'string',
                    },
                    location: 'header',
                    locationName: 'x-amz-sha256-tree-hash',
                },
                archiveId: {
                    shape: {
                        type: 'string',
                    },
                    location: 'header',
                    locationName: 'x-amz-archive-id',
                },
            },
        }
    },
    errors: [],
}