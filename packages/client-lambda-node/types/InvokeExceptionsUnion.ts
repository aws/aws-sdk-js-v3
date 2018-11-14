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
export type InvokeExceptionsUnion = ServiceException |
    ResourceNotFoundException |
    InvalidRequestContentException |
    RequestTooLargeException |
    UnsupportedMediaTypeException |
    TooManyRequestsException |
    InvalidParameterValueException |
    EC2UnexpectedException |
    SubnetIPAddressLimitReachedException |
    ENILimitReachedException |
    EC2ThrottledException |
    EC2AccessDeniedException |
    InvalidSubnetIDException |
    InvalidSecurityGroupIDException |
    InvalidZipFileException |
    KMSDisabledException |
    KMSInvalidStateException |
    KMSAccessDeniedException |
    KMSNotFoundException |
    InvalidRuntimeException;
