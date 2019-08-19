import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DeleteResourcePolicyExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException;
