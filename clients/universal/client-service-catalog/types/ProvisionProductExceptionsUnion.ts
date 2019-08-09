import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DuplicateResourceException } from "./DuplicateResourceException";
export type ProvisionProductExceptionsUnion =
  | InvalidParametersException
  | ResourceNotFoundException
  | DuplicateResourceException;
