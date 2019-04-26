import {GetBucketNotificationInput} from './GetBucketNotificationInput';
import {GetBucketNotificationOutput} from './GetBucketNotificationOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetBucketNotification: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetBucketNotification',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}?notification',
    },
    input: {
        shape: GetBucketNotificationInput,
    },
    output: {
        shape: GetBucketNotificationOutput,
    },
    errors: [],
};