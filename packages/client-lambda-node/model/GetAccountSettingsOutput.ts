import {_AccountLimit} from './_AccountLimit';
import {_AccountUsage} from './_AccountUsage';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetAccountSettingsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        AccountLimit: {
            shape: _AccountLimit,
        },
        AccountUsage: {
            shape: _AccountUsage,
        },
    },
};