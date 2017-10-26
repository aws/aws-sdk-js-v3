import {List as _List_} from '@aws/types';
import {_GlobalSecondaryIndexDescription} from './_GlobalSecondaryIndexDescription';

export const _GlobalSecondaryIndexDescriptionList: _List_ = {
    type: 'list',
    member: {
        shape: _GlobalSecondaryIndexDescription,
    },
};