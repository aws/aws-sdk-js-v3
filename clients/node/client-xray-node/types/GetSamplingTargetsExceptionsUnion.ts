import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
export type GetSamplingTargetsExceptionsUnion =
  | InvalidRequestException
  | ThrottledException;
