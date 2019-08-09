import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidArgsException } from "./InvalidArgsException";
import { MalformedCSRException } from "./MalformedCSRException";
export type IssueCertificateExceptionsUnion =
  | LimitExceededException
  | ResourceNotFoundException
  | InvalidStateException
  | InvalidArnException
  | InvalidArgsException
  | MalformedCSRException;
