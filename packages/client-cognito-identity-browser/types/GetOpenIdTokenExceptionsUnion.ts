import {InvalidParameterException} from './InvalidParameterException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {ExternalServiceException} from './ExternalServiceException';
export type GetOpenIdTokenExceptionsUnion = InvalidParameterException |
    ResourceNotFoundException |
    NotAuthorizedException |
    ResourceConflictException |
    TooManyRequestsException |
    InternalErrorException |
    ExternalServiceException;
