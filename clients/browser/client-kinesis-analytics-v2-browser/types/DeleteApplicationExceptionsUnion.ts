import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidApplicationConfigurationException } from "./InvalidApplicationConfigurationException";
export type DeleteApplicationExceptionsUnion =
  | ConcurrentModificationException
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArgumentException
  | InvalidRequestException
  | InvalidApplicationConfigurationException;
