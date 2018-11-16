import {Structure as _Structure_} from '@aws-sdk/types';

export const InvokeOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        StatusCode: {
            shape: {
                type: 'integer',
            },
            location: 'statusCode',
        },
        FunctionError: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'X-Amz-Function-Error',
        },
        LogResult: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'X-Amz-Log-Result',
        },
        Payload: {
            shape: {
                type: 'blob',
                sensitive: true,
            },
        },
        ExecutedVersion: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'header',
            locationName: 'X-Amz-Executed-Version',
        },
    },
    payload: 'Payload',
};