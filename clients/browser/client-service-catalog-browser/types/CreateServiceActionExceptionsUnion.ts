import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateServiceActionExceptionsUnion =
  | InvalidParametersException
  | LimitExceededException;
