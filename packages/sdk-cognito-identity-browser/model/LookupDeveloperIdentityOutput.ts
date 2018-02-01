import {_DeveloperUserIdentifierList} from './_DeveloperUserIdentifierList';
import {Structure as _Structure_} from '@aws/types';

export const LookupDeveloperIdentityOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DeveloperUserIdentifierList: {
            shape: _DeveloperUserIdentifierList,
        },
        NextToken: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};