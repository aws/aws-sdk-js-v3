import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidDomainValidationOptionsException } from "./InvalidDomainValidationOptionsException";
export type ResendValidationEmailExceptionsUnion =
  | ResourceNotFoundException
  | InvalidStateException
  | InvalidArnException
  | InvalidDomainValidationOptionsException;
