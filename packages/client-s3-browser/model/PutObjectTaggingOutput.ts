import {Structure as _Structure_} from '@aws-sdk/types';

export const PutObjectTaggingOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        VersionId: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-version-id',
        },
    },
};