import {List as _List_} from '@aws-sdk/types';
import {_ReplicaSettingsDescription} from './_ReplicaSettingsDescription';

export const _ReplicaSettingsDescriptionList: _List_ = {
    type: 'list',
    member: {
        shape: _ReplicaSettingsDescription,
    },
};