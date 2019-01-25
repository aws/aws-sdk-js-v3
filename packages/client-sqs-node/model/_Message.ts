import {_MessageSystemAttributeMap} from './_MessageSystemAttributeMap';
import {_MessageBodyAttributeMap} from './_MessageBodyAttributeMap';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _Message: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        MessageId: {
            shape: {
                type: 'string',
            },
        },
        ReceiptHandle: {
            shape: {
                type: 'string',
            },
        },
        MD5OfBody: {
            shape: {
                type: 'string',
            },
        },
        Body: {
            shape: {
                type: 'string',
            },
        },
        Attributes: {
            shape: _MessageSystemAttributeMap,
            locationName: 'Attribute',
        },
        MD5OfMessageAttributes: {
            shape: {
                type: 'string',
            },
        },
        MessageAttributes: {
            shape: _MessageBodyAttributeMap,
            locationName: 'MessageAttribute',
        },
    },
};