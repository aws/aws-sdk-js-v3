import {_KeyMetadata} from './_KeyMetadata';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeKeyOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        KeyMetadata: {
            shape: _KeyMetadata,
        },
    },
};