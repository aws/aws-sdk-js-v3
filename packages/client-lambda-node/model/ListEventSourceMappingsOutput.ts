import {_EventSourceMappingsList} from './_EventSourceMappingsList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListEventSourceMappingsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        NextMarker: {
            shape: {
                type: 'string',
            },
        },
        EventSourceMappings: {
            shape: _EventSourceMappingsList,
        },
    },
};