import {_UnprocessedIdentityIdList} from './_UnprocessedIdentityIdList';
import {Structure as _Structure_} from '@aws/types';

export const DeleteIdentitiesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        UnprocessedIdentityIds: {
            shape: _UnprocessedIdentityIdList,
        },
    },
};