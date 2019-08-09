import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateFleetExceptionsUnion =
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException
  | LimitExceededException;
