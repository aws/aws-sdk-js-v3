import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
export type DeleteRobotExceptionsUnion =
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException;
