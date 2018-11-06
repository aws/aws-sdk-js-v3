import {_LinkedService} from './_LinkedService';
import {_HealthCheckConfig} from './_HealthCheckConfig';
import {_CloudWatchAlarmConfiguration} from './_CloudWatchAlarmConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _HealthCheck: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
        'CallerReference',
        'HealthCheckConfig',
        'HealthCheckVersion',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        CallerReference: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        LinkedService: {
            shape: _LinkedService,
        },
        HealthCheckConfig: {
            shape: _HealthCheckConfig,
        },
        HealthCheckVersion: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        CloudWatchAlarmConfiguration: {
            shape: _CloudWatchAlarmConfiguration,
        },
    },
};