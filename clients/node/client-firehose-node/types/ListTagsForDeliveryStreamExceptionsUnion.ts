import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
export type ListTagsForDeliveryStreamExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | LimitExceededException;
