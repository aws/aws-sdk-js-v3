import {Map as _Map_} from '@aws-sdk/types';
import {_AddressConfiguration} from './_AddressConfiguration';

export const _MapOfAddressConfiguration: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: _AddressConfiguration,
    },
};