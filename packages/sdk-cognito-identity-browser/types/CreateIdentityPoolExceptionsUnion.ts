import {InvalidParameterException} from './InvalidParameterException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {LimitExceededException} from './LimitExceededException';
export type CreateIdentityPoolExceptionsUnion = InvalidParameterException |
    NotAuthorizedException |
    ResourceConflictException |
    TooManyRequestsException |
    InternalErrorException |
    LimitExceededException;
