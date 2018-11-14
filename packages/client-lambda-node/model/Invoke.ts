import {InvokeInput} from './InvokeInput';
import {InvokeOutput} from './InvokeOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidRequestContentException} from './InvalidRequestContentException';
import {RequestTooLargeException} from './RequestTooLargeException';
import {UnsupportedMediaTypeException} from './UnsupportedMediaTypeException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {EC2UnexpectedException} from './EC2UnexpectedException';
import {SubnetIPAddressLimitReachedException} from './SubnetIPAddressLimitReachedException';
import {ENILimitReachedException} from './ENILimitReachedException';
import {EC2ThrottledException} from './EC2ThrottledException';
import {EC2AccessDeniedException} from './EC2AccessDeniedException';
import {InvalidSubnetIDException} from './InvalidSubnetIDException';
import {InvalidSecurityGroupIDException} from './InvalidSecurityGroupIDException';
import {InvalidZipFileException} from './InvalidZipFileException';
import {KMSDisabledException} from './KMSDisabledException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {KMSAccessDeniedException} from './KMSAccessDeniedException';
import {KMSNotFoundException} from './KMSNotFoundException';
import {InvalidRuntimeException} from './InvalidRuntimeException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const Invoke: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'Invoke',
    http: {
        method: 'POST',
        requestUri: '/2015-03-31/functions/{FunctionName}/invocations',
    },
    input: {
        shape: InvokeInput,
    },
    output: {
        shape: InvokeOutput,
    },
    errors: [
        {
            shape: ServiceException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InvalidRequestContentException,
        },
        {
            shape: RequestTooLargeException,
        },
        {
            shape: UnsupportedMediaTypeException,
        },
        {
            shape: TooManyRequestsException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: EC2UnexpectedException,
        },
        {
            shape: SubnetIPAddressLimitReachedException,
        },
        {
            shape: ENILimitReachedException,
        },
        {
            shape: EC2ThrottledException,
        },
        {
            shape: EC2AccessDeniedException,
        },
        {
            shape: InvalidSubnetIDException,
        },
        {
            shape: InvalidSecurityGroupIDException,
        },
        {
            shape: InvalidZipFileException,
        },
        {
            shape: KMSDisabledException,
        },
        {
            shape: KMSInvalidStateException,
        },
        {
            shape: KMSAccessDeniedException,
        },
        {
            shape: KMSNotFoundException,
        },
        {
            shape: InvalidRuntimeException,
        },
    ],
};