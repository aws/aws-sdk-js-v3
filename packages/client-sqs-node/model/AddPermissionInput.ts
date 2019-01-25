import {_AWSAccountIdList} from './_AWSAccountIdList';
import {_ActionNameList} from './_ActionNameList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const AddPermissionInput: _Structure_ = {
    type: 'structure',
    required: [
        'QueueUrl',
        'Label',
        'AWSAccountIds',
        'Actions',
    ],
    members: {
        QueueUrl: {
            shape: {
                type: 'string',
            },
        },
        Label: {
            shape: {
                type: 'string',
            },
        },
        AWSAccountIds: {
            shape: _AWSAccountIdList,
        },
        Actions: {
            shape: _ActionNameList,
        },
    },
};