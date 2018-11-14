import {List as _List_} from '@aws-sdk/types';
import {_EventSourceMappingConfiguration} from './_EventSourceMappingConfiguration';

export const _EventSourceMappingsList: _List_ = {
    type: 'list',
    member: {
        shape: _EventSourceMappingConfiguration,
    },
};