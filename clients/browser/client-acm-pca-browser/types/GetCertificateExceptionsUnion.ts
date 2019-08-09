import { RequestInProgressException } from "./RequestInProgressException";
import { RequestFailedException } from "./RequestFailedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
export type GetCertificateExceptionsUnion =
  | RequestInProgressException
  | RequestFailedException
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidStateException;
