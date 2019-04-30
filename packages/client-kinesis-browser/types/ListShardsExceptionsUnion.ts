import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
import { ResourceInUseException } from "./ResourceInUseException";
export type ListShardsExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | LimitExceededException
  | ExpiredNextTokenException
  | ResourceInUseException;
