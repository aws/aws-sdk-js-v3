import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
export type DeleteGroupExceptionsUnion =
  | InvalidRequestException
  | ThrottledException;
