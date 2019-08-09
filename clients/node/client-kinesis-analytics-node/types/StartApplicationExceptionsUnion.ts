import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidApplicationConfigurationException } from "./InvalidApplicationConfigurationException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type StartApplicationExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArgumentException
  | InvalidApplicationConfigurationException
  | UnsupportedOperationException;
