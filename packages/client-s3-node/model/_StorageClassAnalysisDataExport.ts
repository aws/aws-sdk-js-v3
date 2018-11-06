import {_AnalyticsExportDestination} from './_AnalyticsExportDestination';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _StorageClassAnalysisDataExport: _Structure_ = {
    type: 'structure',
    required: [
        'OutputSchemaVersion',
        'Destination',
    ],
    members: {
        OutputSchemaVersion: {
            shape: {
                type: 'string',
            },
        },
        Destination: {
            shape: _AnalyticsExportDestination,
        },
    },
};