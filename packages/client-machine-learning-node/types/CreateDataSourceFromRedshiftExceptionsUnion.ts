import {InvalidInputException} from './InvalidInputException';
import {InternalServerException} from './InternalServerException';
import {IdempotentParameterMismatchException} from './IdempotentParameterMismatchException';
export type CreateDataSourceFromRedshiftExceptionsUnion = InvalidInputException |
    InternalServerException |
    IdempotentParameterMismatchException;
