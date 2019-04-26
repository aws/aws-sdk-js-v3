import {_InventoryS3BucketDestination} from './_InventoryS3BucketDestination';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _InventoryDestination: _Structure_ = {
    type: 'structure',
    required: [
        'S3BucketDestination',
    ],
    members: {
        S3BucketDestination: {
            shape: _InventoryS3BucketDestination,
        },
    },
};