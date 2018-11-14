import {_EdgeStatistics} from './_EdgeStatistics';
import {_Histogram} from './_Histogram';
import {_AliasList} from './_AliasList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _Edge: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ReferenceId: {
            shape: {
                type: 'integer',
            },
        },
        StartTime: {
            shape: {
                type: 'timestamp',
            },
        },
        EndTime: {
            shape: {
                type: 'timestamp',
            },
        },
        SummaryStatistics: {
            shape: _EdgeStatistics,
        },
        ResponseTimeHistogram: {
            shape: _Histogram,
        },
        Aliases: {
            shape: _AliasList,
        },
    },
};