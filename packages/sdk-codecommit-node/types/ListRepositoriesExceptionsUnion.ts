import {InvalidSortByException} from './InvalidSortByException';
import {InvalidOrderException} from './InvalidOrderException';
import {InvalidContinuationTokenException} from './InvalidContinuationTokenException';
import {UnkownServiceException} from '@aws/types';
export type ListRepositoriesExceptionsUnion = InvalidSortByException |
    InvalidOrderException |
    InvalidContinuationTokenException |
    UnkownServiceException;
