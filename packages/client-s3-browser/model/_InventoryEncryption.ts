import {_SSES3} from './_SSES3';
import {_SSEKMS} from './_SSEKMS';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _InventoryEncryption: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        SSES3: {
            shape: _SSES3,
            locationName: 'SSE-S3',
        },
        SSEKMS: {
            shape: _SSEKMS,
            locationName: 'SSE-KMS',
        },
    },
};