import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
export type CreateRobotExceptionsUnion =
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException
  | LimitExceededException
  | ResourceAlreadyExistsException;
