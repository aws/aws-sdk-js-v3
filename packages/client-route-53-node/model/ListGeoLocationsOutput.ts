import {_GeoLocationDetailsList} from './_GeoLocationDetailsList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListGeoLocationsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'GeoLocationDetailsList',
        'IsTruncated',
        'MaxItems',
    ],
    members: {
        GeoLocationDetailsList: {
            shape: _GeoLocationDetailsList,
        },
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        NextContinentCode: {
            shape: {
                type: 'string',
                min: 2,
            },
        },
        NextCountryCode: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        NextSubdivisionCode: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        MaxItems: {
            shape: {
                type: 'string',
            },
        },
    },
};