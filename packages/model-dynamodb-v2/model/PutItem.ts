import {PutItemInput} from './PutItemInput';
import {PutItemOutput} from './PutItemOutput';
import {ConditionalCheckFailedException} from './ConditionalCheckFailedException';
import {ProvisionedThroughputExceededException} from './ProvisionedThroughputExceededException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ItemCollectionSizeLimitExceededException} from './ItemCollectionSizeLimitExceededException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutItem: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutItem',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: PutItemInput,
    },
    output: {
        shape: PutItemOutput,
    },
    errors: [
        {
            shape: ConditionalCheckFailedException,
        },
        {
            shape: ProvisionedThroughputExceededException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: ItemCollectionSizeLimitExceededException,
        },
        {
            shape: InternalServerError,
        },
    ],
};