import {_SetDimension} from './_SetDimension';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _SegmentDemographics: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        AppVersion: {
            shape: _SetDimension,
        },
        Channel: {
            shape: _SetDimension,
        },
        DeviceType: {
            shape: _SetDimension,
        },
        Make: {
            shape: _SetDimension,
        },
        Model: {
            shape: _SetDimension,
        },
        Platform: {
            shape: _SetDimension,
        },
    },
};