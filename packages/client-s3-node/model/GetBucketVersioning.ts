import {GetBucketVersioningInput} from './GetBucketVersioningInput';
import {GetBucketVersioningOutput} from './GetBucketVersioningOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetBucketVersioning: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetBucketVersioning',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}?versioning',
    },
    input: {
        shape: GetBucketVersioningInput,
    },
    output: {
        shape: GetBucketVersioningOutput,
    },
    errors: [],
};