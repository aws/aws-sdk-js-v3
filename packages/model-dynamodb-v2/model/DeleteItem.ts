import {DeleteItemInput} from './DeleteItemInput';
import {DeleteItemOutput} from './DeleteItemOutput';
import {ConditionalCheckFailedException} from './ConditionalCheckFailedException';
import {ProvisionedThroughputExceededException} from './ProvisionedThroughputExceededException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ItemCollectionSizeLimitExceededException} from './ItemCollectionSizeLimitExceededException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteItem: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteItem',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteItemInput,
    },
    output: {
        shape: DeleteItemOutput,
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