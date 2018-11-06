import {KMSInternalException} from './KMSInternalException';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {LimitExceededException} from './LimitExceededException';
import {TagException} from './TagException';
export type TagResourceExceptionsUnion = KMSInternalException |
    NotFoundException |
    InvalidArnException |
    KMSInvalidStateException |
    LimitExceededException |
    TagException;
