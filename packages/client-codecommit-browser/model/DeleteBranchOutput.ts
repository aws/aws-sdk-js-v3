import {_BranchInfo} from './_BranchInfo';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteBranchOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        deletedBranch: {
            shape: _BranchInfo,
        },
    },
};