import {Structure as _Structure_} from '@aws-sdk/types';

export const _GeoLocation: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ContinentCode: {
            shape: {
                type: 'string',
                min: 2,
            },
        },
        CountryCode: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        SubdivisionCode: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};