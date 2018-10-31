import {UpdateDataSourceInput} from './UpdateDataSourceInput';
import {UpdateDataSourceOutput} from './UpdateDataSourceOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateDataSource: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateDataSource',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateDataSourceInput,
    },
    output: {
        shape: UpdateDataSourceOutput,
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