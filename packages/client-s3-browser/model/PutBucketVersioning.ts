import {PutBucketVersioningInput} from './PutBucketVersioningInput';
import {PutBucketVersioningOutput} from './PutBucketVersioningOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketVersioning: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketVersioning',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?versioning',
    },
    input: {
        shape: PutBucketVersioningInput,
    },
    output: {
        shape: PutBucketVersioningOutput,
    },
    errors: [],
};