import {GetMLModelInput} from './GetMLModelInput';
import {GetMLModelOutput} from './GetMLModelOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetMLModel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetMLModel',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetMLModelInput,
    },
    output: {
        shape: GetMLModelOutput,
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