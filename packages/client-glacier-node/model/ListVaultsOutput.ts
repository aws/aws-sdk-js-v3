import {_VaultList} from './_VaultList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListVaultsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        VaultList: {
            shape: _VaultList,
        },
        Marker: {
            shape: {
                type: 'string',
            },
        },
    },
};