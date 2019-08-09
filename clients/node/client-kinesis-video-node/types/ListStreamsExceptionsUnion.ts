import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
export type ListStreamsExceptionsUnion =
  | ClientLimitExceededException
  | InvalidArgumentException;
