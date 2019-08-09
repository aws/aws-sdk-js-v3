import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
export type UpdateRobotApplicationExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | LimitExceededException
  | ThrottlingException
  | InternalServerException;
