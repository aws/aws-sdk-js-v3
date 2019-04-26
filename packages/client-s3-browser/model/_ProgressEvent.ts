import {_Progress} from './_Progress';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ProgressEvent: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Details: {
            shape: _Progress,
        },
    },
};