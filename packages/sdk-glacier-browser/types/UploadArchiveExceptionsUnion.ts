import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {RequestTimeoutException} from './RequestTimeoutException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
export type UploadArchiveExceptionsUnion = ResourceNotFoundException |
    InvalidParameterValueException |
    MissingParameterValueException |
    RequestTimeoutException |
    ServiceUnavailableException;
