import { CodeValidationException } from "./CodeValidationException";
import { ResourceInUseException } from "./ResourceInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyTagsException } from "./TooManyTagsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateApplicationExceptionsUnion =
  | CodeValidationException
  | ResourceInUseException
  | LimitExceededException
  | InvalidArgumentException
  | InvalidRequestException
  | TooManyTagsException
  | ConcurrentModificationException;
