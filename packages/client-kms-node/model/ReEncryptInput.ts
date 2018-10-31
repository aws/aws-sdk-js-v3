import {_EncryptionContextType} from './_EncryptionContextType';
import {_GrantTokenList} from './_GrantTokenList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ReEncryptInput: _Structure_ = {
    type: 'structure',
    required: [
        'CiphertextBlob',
        'DestinationKeyId',
    ],
    members: {
        CiphertextBlob: {
            shape: {
                type: 'blob',
            },
        },
        SourceEncryptionContext: {
            shape: _EncryptionContextType,
        },
        DestinationKeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DestinationEncryptionContext: {
            shape: _EncryptionContextType,
        },
        GrantTokens: {
            shape: _GrantTokenList,
        },
    },
};