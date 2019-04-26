import {_CORSConfiguration} from './_CORSConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutBucketCorsInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'CORSConfiguration',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        CORSConfiguration: {
            shape: _CORSConfiguration,
            locationName: 'CORSConfiguration',
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
    payload: 'CORSConfiguration',
};