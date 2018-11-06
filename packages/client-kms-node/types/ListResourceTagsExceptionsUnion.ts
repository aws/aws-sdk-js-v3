import {KMSInternalException} from './KMSInternalException';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {InvalidMarkerException} from './InvalidMarkerException';
export type ListResourceTagsExceptionsUnion = KMSInternalException |
    NotFoundException |
    InvalidArnException |
    InvalidMarkerException;
