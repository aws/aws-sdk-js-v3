import {DeleteBucketEncryptionInput} from './DeleteBucketEncryptionInput';
import {DeleteBucketEncryptionOutput} from './DeleteBucketEncryptionOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteBucketEncryption: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteBucketEncryption',
    http: {
        method: 'DELETE',
        requestUri: '/{Bucket}?encryption',
    },
    input: {
        shape: DeleteBucketEncryptionInput,
    },
    output: {
        shape: DeleteBucketEncryptionOutput,
    },
    errors: [],
};