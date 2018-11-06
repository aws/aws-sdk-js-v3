import {InvalidInputException} from './InvalidInputException';
import {InternalServerException} from './InternalServerException';
import {IdempotentParameterMismatchException} from './IdempotentParameterMismatchException';
export type CreateEvaluationExceptionsUnion = InvalidInputException |
    InternalServerException |
    IdempotentParameterMismatchException;
