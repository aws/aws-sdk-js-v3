import {_UpdateGlobalSecondaryIndexAction} from './_UpdateGlobalSecondaryIndexAction';
import {_CreateGlobalSecondaryIndexAction} from './_CreateGlobalSecondaryIndexAction';
import {_DeleteGlobalSecondaryIndexAction} from './_DeleteGlobalSecondaryIndexAction';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _GlobalSecondaryIndexUpdate: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Update: {
            shape: _UpdateGlobalSecondaryIndexAction,
        },
        Create: {
            shape: _CreateGlobalSecondaryIndexAction,
        },
        Delete: {
            shape: _DeleteGlobalSecondaryIndexAction,
        },
    },
};