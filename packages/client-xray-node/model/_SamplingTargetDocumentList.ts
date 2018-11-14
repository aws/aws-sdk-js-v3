import {List as _List_} from '@aws-sdk/types';
import {_SamplingTargetDocument} from './_SamplingTargetDocument';

export const _SamplingTargetDocumentList: _List_ = {
    type: 'list',
    member: {
        shape: _SamplingTargetDocument,
    },
};