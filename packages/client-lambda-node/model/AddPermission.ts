import {AddPermissionInput} from './AddPermissionInput';
import {AddPermissionOutput} from './AddPermissionOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ResourceConflictException} from './ResourceConflictException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {PolicyLengthExceededException} from './PolicyLengthExceededException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {PreconditionFailedException} from './PreconditionFailedException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const AddPermission: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'AddPermission',
    http: {
        method: 'POST',
        requestUri: '/2015-03-31/functions/{FunctionName}/policy',
    },
    input: {
        shape: AddPermissionInput,
    },
    output: {
        shape: AddPermissionOutput,
    },
    errors: [
        {
            shape: ServiceException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: ResourceConflictException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: PolicyLengthExceededException,
        },
        {
            shape: TooManyRequestsException,
        },
        {
            shape: PreconditionFailedException,
        },
    ],
};