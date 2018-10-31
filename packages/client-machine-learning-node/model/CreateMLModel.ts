import {CreateMLModelInput} from './CreateMLModelInput';
import {CreateMLModelOutput} from './CreateMLModelOutput';
import {InvalidInputException} from './InvalidInputException';
import {InternalServerException} from './InternalServerException';
import {IdempotentParameterMismatchException} from './IdempotentParameterMismatchException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateMLModel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateMLModel',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateMLModelInput,
    },
    output: {
        shape: CreateMLModelOutput,
    },
    errors: [
        {
            shape: InvalidInputException,
        },
        {
            shape: InternalServerException,
        },
        {
            shape: IdempotentParameterMismatchException,
        },
    ],
};