import { CodeValidationException } from "./CodeValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidApplicationConfigurationException } from "./InvalidApplicationConfigurationException";
export type UpdateApplicationExceptionsUnion =
  | CodeValidationException
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArgumentException
  | ConcurrentModificationException
  | InvalidRequestException
  | InvalidApplicationConfigurationException;
