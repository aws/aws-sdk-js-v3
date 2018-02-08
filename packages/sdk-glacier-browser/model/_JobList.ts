import {List as _List_} from '@aws/types';
import {_GlacierJobDescription} from './_GlacierJobDescription';

export const _JobList: _List_ = {
    type: 'list',
    member: {
        shape: _GlacierJobDescription,
    },
};