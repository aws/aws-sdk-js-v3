import {_MapOf__string} from './_MapOf__string';
import {_MapOfListOf__string} from './_MapOfListOf__string';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _AddressConfiguration: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        BodyOverride: {
            shape: {
                type: 'string',
            },
        },
        ChannelType: {
            shape: {
                type: 'string',
            },
        },
        Context: {
            shape: _MapOf__string,
        },
        RawContent: {
            shape: {
                type: 'string',
            },
        },
        Substitutions: {
            shape: _MapOfListOf__string,
        },
        TitleOverride: {
            shape: {
                type: 'string',
            },
        },
    },
};