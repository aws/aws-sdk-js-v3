import {_PutRequest} from './_PutRequest';
import {_DeleteRequest} from './_DeleteRequest';
import {Structure as _Structure_} from '@aws/types';

export const _WriteRequest: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        PutRequest: {
            shape: _PutRequest,
        },
        DeleteRequest: {
            shape: _DeleteRequest,
        },
    },
};