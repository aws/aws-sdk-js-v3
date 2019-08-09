import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
export type ListRobotApplicationsExceptionsUnion =
  | InvalidParameterException
  | ThrottlingException
  | InternalServerException;
