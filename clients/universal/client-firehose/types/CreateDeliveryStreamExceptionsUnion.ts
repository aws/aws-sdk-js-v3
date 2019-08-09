import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
export type CreateDeliveryStreamExceptionsUnion =
  | InvalidArgumentException
  | LimitExceededException
  | ResourceInUseException;
