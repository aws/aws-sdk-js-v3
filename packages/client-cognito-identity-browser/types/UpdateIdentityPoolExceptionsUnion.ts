import {InvalidParameterException} from './InvalidParameterException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {ConcurrentModificationException} from './ConcurrentModificationException';
import {LimitExceededException} from './LimitExceededException';
export type UpdateIdentityPoolExceptionsUnion = InvalidParameterException |
    ResourceNotFoundException |
    NotAuthorizedException |
    ResourceConflictException |
    TooManyRequestsException |
    InternalErrorException |
    ConcurrentModificationException |
    LimitExceededException;
