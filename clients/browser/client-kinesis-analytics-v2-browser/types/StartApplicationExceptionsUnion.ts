import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidApplicationConfigurationException } from "./InvalidApplicationConfigurationException";
import { InvalidRequestException } from "./InvalidRequestException";
export type StartApplicationExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArgumentException
  | InvalidApplicationConfigurationException
  | InvalidRequestException;
