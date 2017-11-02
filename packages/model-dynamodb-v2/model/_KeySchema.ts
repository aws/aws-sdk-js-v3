import {List as _List_} from '@aws/types';
import {_KeySchemaElement} from './_KeySchemaElement';

export const _KeySchema: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: _KeySchemaElement,
    },
};