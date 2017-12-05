import {InvalidSortByException} from './InvalidSortByException';
import {InvalidOrderException} from './InvalidOrderException';
import {InvalidContinuationTokenException} from './InvalidContinuationTokenException';
import {SdkExceptions} from '@aws/types';
export type ListRepositoriesExceptionTypesUnion = InvalidSortByException |
    InvalidOrderException |
    InvalidContinuationTokenException |
    SdkExceptions;
