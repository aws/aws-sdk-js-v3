import {List as _List_} from '@aws-sdk/types';
import {_WriteTreatmentResource} from './_WriteTreatmentResource';

export const _ListOfWriteTreatmentResource: _List_ = {
    type: 'list',
    member: {
        shape: _WriteTreatmentResource,
    },
};