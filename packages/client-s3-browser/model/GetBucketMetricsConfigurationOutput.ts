import {_MetricsConfiguration} from './_MetricsConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetBucketMetricsConfigurationOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        MetricsConfiguration: {
            shape: _MetricsConfiguration,
        },
    },
    payload: 'MetricsConfiguration',
};