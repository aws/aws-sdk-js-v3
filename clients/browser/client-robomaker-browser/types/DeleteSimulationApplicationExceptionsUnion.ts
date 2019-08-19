import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
export type DeleteSimulationApplicationExceptionsUnion =
  | InvalidParameterException
  | ThrottlingException
  | InternalServerException;
