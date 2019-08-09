import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateLogStreamExceptionsUnion =
  | InvalidParameterException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException;
