import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
export type DeleteBudgetExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException;
