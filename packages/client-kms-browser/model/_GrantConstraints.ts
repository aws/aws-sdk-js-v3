import {_EncryptionContextType} from './_EncryptionContextType';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _GrantConstraints: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        EncryptionContextSubset: {
            shape: _EncryptionContextType,
        },
        EncryptionContextEquals: {
            shape: _EncryptionContextType,
        },
    },
};