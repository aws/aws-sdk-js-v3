import {DeleteDataSourceInput} from './DeleteDataSourceInput';
import {DeleteDataSourceOutput} from './DeleteDataSourceOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteDataSource: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteDataSource',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteDataSourceInput,
    },
    output: {
        shape: DeleteDataSourceOutput,
    },
    errors: [
        {
            shape: InvalidInputException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalServerException,
        },
    ],
};