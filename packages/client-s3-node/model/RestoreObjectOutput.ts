import {Structure as _Structure_} from '@aws-sdk/types';

export const RestoreObjectOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        RequestCharged: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-charged',
        },
        RestoreOutputPath: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-restore-output-path',
        },
    },
};