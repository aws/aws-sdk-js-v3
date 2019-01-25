import {_QueueAttributeMap} from './_QueueAttributeMap';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateQueueInput: _Structure_ = {
    type: 'structure',
    required: [
        'QueueName',
    ],
    members: {
        QueueName: {
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