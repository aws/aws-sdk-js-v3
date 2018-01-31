import {InvalidParameterException} from './InvalidParameterException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
export type DescribeIdentityExceptionsUnion = InvalidParameterException |
    ResourceNotFoundException |
    NotAuthorizedException |
    TooManyRequestsException |
    InternalErrorException;
