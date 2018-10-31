import {List as _List_} from '@aws-sdk/types';
import {_UploadListElement} from './_UploadListElement';

export const _UploadsList: _List_ = {
    type: 'list',
    member: {
        shape: _UploadListElement,
    },
};