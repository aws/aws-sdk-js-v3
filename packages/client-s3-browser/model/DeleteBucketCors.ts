import {DeleteBucketCorsInput} from './DeleteBucketCorsInput';
import {DeleteBucketCorsOutput} from './DeleteBucketCorsOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteBucketCors: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteBucketCors',
    http: {
        method: 'DELETE',
        requestUri: '/{Bucket}?cors',
    },
    input: {
        shape: DeleteBucketCorsInput,
    },
    output: {
        shape: DeleteBucketCorsOutput,
    },
    errors: [],
};