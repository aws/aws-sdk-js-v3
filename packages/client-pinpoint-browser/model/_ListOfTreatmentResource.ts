import {List as _List_} from '@aws-sdk/types';
import {_TreatmentResource} from './_TreatmentResource';

export const _ListOfTreatmentResource: _List_ = {
    type: 'list',
    member: {
        shape: _TreatmentResource,
    },
};