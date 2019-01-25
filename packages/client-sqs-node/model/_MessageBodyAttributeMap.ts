import {Map as _Map_} from '@aws-sdk/types';
import {_MessageAttributeValue} from './_MessageAttributeValue';

export const _MessageBodyAttributeMap: _Map_ = {
    type: 'map',
    flattened: true,
    key: {
        shape: {
            type: 'string',
        },
        locationName: 'Name',
    },
    value: {
        shape: _MessageAttributeValue,
        locationName: 'Value',
    },
};