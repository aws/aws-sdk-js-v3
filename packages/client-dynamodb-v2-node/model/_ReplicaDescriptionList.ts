import {List as _List_} from '@aws-sdk/types';
import {_ReplicaDescription} from './_ReplicaDescription';

export const _ReplicaDescriptionList: _List_ = {
    type: 'list',
    member: {
        shape: _ReplicaDescription,
    },
};