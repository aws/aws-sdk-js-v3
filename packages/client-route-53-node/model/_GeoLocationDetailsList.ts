import {List as _List_} from '@aws-sdk/types';
import {_GeoLocationDetails} from './_GeoLocationDetails';

export const _GeoLocationDetailsList: _List_ = {
    type: 'list',
    member: {
        shape: _GeoLocationDetails,
        locationName: 'GeoLocationDetails',
    },
};