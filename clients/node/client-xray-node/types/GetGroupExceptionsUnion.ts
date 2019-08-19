import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
export type GetGroupExceptionsUnion =
  | InvalidRequestException
  | ThrottledException;
