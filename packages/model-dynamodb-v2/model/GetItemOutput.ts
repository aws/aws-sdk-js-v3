import {_AttributeMap} from './_AttributeMap';
import {_ConsumedCapacity} from './_ConsumedCapacity';
import {Structure as _Structure_} from '@aws/types';

export const GetItemOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Item: {
            shape: _AttributeMap,
        },
        ConsumedCapacity: {
            shape: _ConsumedCapacity,
        },
    },
};