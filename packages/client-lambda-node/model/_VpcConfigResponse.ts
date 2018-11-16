import {_SubnetIds} from './_SubnetIds';
import {_SecurityGroupIds} from './_SecurityGroupIds';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _VpcConfigResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        SubnetIds: {
            shape: _SubnetIds,
        },
        SecurityGroupIds: {
            shape: _SecurityGroupIds,
        },
        VpcId: {
            shape: {
                type: 'string',
            },
        },
    },
};