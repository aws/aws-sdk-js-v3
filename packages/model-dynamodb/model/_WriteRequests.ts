import {List as _List_} from '@aws/types';
import {_WriteRequest} from './_WriteRequest';

export const _WriteRequests: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: _WriteRequest,
    },
};