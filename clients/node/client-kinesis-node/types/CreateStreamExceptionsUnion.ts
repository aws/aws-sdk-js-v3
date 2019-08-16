import { ResourceInUseException } from "./ResourceInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
export type CreateStreamExceptionsUnion =
  | ResourceInUseException
  | LimitExceededException
  | InvalidArgumentException;
