import {_AnalyticsConfiguration} from './_AnalyticsConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutBucketAnalyticsConfigurationInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Id',
        'AnalyticsConfiguration',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        Id: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'id',
        },
        AnalyticsConfiguration: {
            shape: _AnalyticsConfiguration,
            locationName: 'AnalyticsConfiguration',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
    },
    payload: 'AnalyticsConfiguration',
};