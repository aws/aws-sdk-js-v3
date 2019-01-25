import {_MessageBodyAttributeMap} from './_MessageBodyAttributeMap';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _SendMessageBatchRequestEntry: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
        'MessageBody',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        MessageBody: {
            shape: {
                type: 'string',
            },
        },
        DelaySeconds: {
            shape: {
                type: 'integer',
            },
        },
        MessageAttributes: {
            shape: _MessageBodyAttributeMap,
            locationName: 'MessageAttribute',
        },
        MessageDeduplicationId: {
            shape: {
                type: 'string',
            },
        },
        MessageGroupId: {
            shape: {
                type: 'string',
            },
        },
    },
};