import {HeadObjectInput} from './HeadObjectInput';
import {HeadObjectOutput} from './HeadObjectOutput';
import {NoSuchKey} from './NoSuchKey';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const HeadObject: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'HeadObject',
    http: {
        method: 'HEAD',
        requestUri: '/{Bucket}/{Key+}',
    },
    input: {
        shape: HeadObjectInput,
    },
    output: {
        shape: HeadObjectOutput,
    },
    errors: [
        {
            shape: NoSuchKey,
        },
    ],
};