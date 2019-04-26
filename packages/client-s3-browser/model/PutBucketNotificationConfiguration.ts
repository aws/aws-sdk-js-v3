import {PutBucketNotificationConfigurationInput} from './PutBucketNotificationConfigurationInput';
import {PutBucketNotificationConfigurationOutput} from './PutBucketNotificationConfigurationOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketNotificationConfiguration: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketNotificationConfiguration',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?notification',
    },
    input: {
        shape: PutBucketNotificationConfigurationInput,
    },
    output: {
        shape: PutBucketNotificationConfigurationOutput,
    },
    errors: [],
};