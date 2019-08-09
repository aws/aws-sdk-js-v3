import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArnException } from "./InvalidArnException";
export type DeleteCertificateExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArnException;
