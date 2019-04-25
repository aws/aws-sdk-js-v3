import {_BucketLoggingStatus} from './_BucketLoggingStatus';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutBucketLoggingInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'BucketLoggingStatus',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        BucketLoggingStatus: {
            shape: _BucketLoggingStatus,
            locationName: 'BucketLoggingStatus',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
        ContentMD5: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-MD5',
        },
    },
    payload: 'BucketLoggingStatus',
};