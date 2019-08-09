import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type RegisterRobotExceptionsUnion =
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException
  | LimitExceededException
  | ResourceNotFoundException;
