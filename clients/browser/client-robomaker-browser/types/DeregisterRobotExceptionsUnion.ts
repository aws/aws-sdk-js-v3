import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeregisterRobotExceptionsUnion =
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException
  | ResourceNotFoundException;
