import {_ListOfApplicationResponse} from './_ListOfApplicationResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ApplicationsResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Item: {
            shape: _ListOfApplicationResponse,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};