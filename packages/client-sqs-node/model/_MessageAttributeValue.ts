import {_StringList} from './_StringList';
import {_BinaryList} from './_BinaryList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _MessageAttributeValue: _Structure_ = {
    type: 'structure',
    required: [
        'DataType',
    ],
    members: {
        StringValue: {
            shape: {
                type: 'string',
            },
        },
        BinaryValue: {
            shape: {
                type: 'blob',
            },
        },
        StringListValues: {
            shape: _StringList,
            flattened: true,
            locationName: 'StringListValue',
        },
        BinaryListValues: {
            shape: _BinaryList,
            flattened: true,
            locationName: 'BinaryListValue',
        },
        DataType: {
            shape: {
                type: 'string',
            },
        },
    },
};