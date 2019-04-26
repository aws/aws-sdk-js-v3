import {List as _List_} from '@aws-sdk/types';
import {_MultipartUpload} from './_MultipartUpload';

export const _MultipartUploadList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _MultipartUpload,
    },
};