import {_ServiceNames} from './_ServiceNames';
import {_EdgeList} from './_EdgeList';
import {_ServiceStatistics} from './_ServiceStatistics';
import {_Histogram} from './_Histogram';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _Service: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ReferenceId: {
            shape: {
                type: 'integer',
            },
        },
        Name: {
            shape: {
                type: 'string',
            },
        },
        Names: {
            shape: _ServiceNames,
        },
        Root: {
            shape: {
                type: 'boolean',
            },
        },
        AccountId: {
            shape: {
                type: 'string',
            },
        },
        Type: {
            shape: {
                type: 'string',
            },
        },
        State: {
            shape: {
                type: 'string',
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
        Edges: {
            shape: _EdgeList,
        },
        SummaryStatistics: {
            shape: _ServiceStatistics,
        },
        DurationHistogram: {
            shape: _Histogram,
        },
        ResponseTimeHistogram: {
            shape: _Histogram,
        },
    },
};