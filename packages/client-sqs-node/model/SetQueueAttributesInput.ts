import {_QueueAttributeMap} from './_QueueAttributeMap';
import {Structure as _Structure_} from '@aws-sdk/types';

export const SetQueueAttributesInput: _Structure_ = {
    type: 'structure',
    required: [
        'QueueUrl',
        'Attributes',
    ],
    members: {
        QueueUrl: {
            shape: {
                type: 'string',
            },
        },
        Attributes: {
            shape: _QueueAttributeMap,
            locationName: 'Attribute',
        },
    },
};