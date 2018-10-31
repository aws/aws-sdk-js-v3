import {List as _List_} from '@aws-sdk/types';
import {_DeleteMarkerEntry} from './_DeleteMarkerEntry';

export const _DeleteMarkers: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _DeleteMarkerEntry,
    },
};