import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
export type DeleteFleetExceptionsUnion =
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException;
