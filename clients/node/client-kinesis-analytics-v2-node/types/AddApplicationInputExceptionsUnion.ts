import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { CodeValidationException } from "./CodeValidationException";
import { InvalidRequestException } from "./InvalidRequestException";
export type AddApplicationInputExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArgumentException
  | ConcurrentModificationException
  | CodeValidationException
  | InvalidRequestException;
