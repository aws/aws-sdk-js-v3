import {Structure as _Structure_} from '@aws-sdk/types';

export const ListHealthChecksInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Marker: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'marker',
        },
        MaxItems: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'maxitems',
        },
    },
};