import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { CodeValidationException } from "./CodeValidationException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type AddApplicationInputExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArgumentException
  | ConcurrentModificationException
  | CodeValidationException
  | UnsupportedOperationException;
