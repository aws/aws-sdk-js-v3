import {_TableDescription} from './_TableDescription';
import {Structure as _Structure_} from '@aws/types';

export const DescribeTableOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Table: {
            shape: _TableDescription,
        },
    },
};