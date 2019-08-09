import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
export type CreateGroupExceptionsUnion =
  | InvalidRequestException
  | ThrottledException;
