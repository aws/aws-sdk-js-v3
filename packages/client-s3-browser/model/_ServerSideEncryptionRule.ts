import {_ServerSideEncryptionByDefault} from './_ServerSideEncryptionByDefault';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ServerSideEncryptionRule: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ApplyServerSideEncryptionByDefault: {
            shape: _ServerSideEncryptionByDefault,
        },
    },
};