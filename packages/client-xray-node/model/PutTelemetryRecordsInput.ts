import {_TelemetryRecordList} from './_TelemetryRecordList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutTelemetryRecordsInput: _Structure_ = {
    type: 'structure',
    required: [
        'TelemetryRecords',
    ],
    members: {
        TelemetryRecords: {
            shape: _TelemetryRecordList,
        },
        EC2InstanceId: {
            shape: {
                type: 'string',
            },
        },
        Hostname: {
            shape: {
                type: 'string',
            },
        },
        ResourceARN: {
            shape: {
                type: 'string',
            },
        },
    },
};