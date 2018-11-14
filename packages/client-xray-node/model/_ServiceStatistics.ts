import {_ErrorStatistics} from './_ErrorStatistics';
import {_FaultStatistics} from './_FaultStatistics';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ServiceStatistics: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        OkCount: {
            shape: {
                type: 'integer',
            },
        },
        ErrorStatistics: {
            shape: _ErrorStatistics,
        },
        FaultStatistics: {
            shape: _FaultStatistics,
        },
        TotalCount: {
            shape: {
                type: 'integer',
            },
        },
        TotalResponseTime: {
            shape: {
                type: 'float',
            },
        },
    },
};