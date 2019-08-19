import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TransferAlreadyCompletedException } from "./TransferAlreadyCompletedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type CancelCertificateTransferExceptionsUnion =
  | ResourceNotFoundException
  | TransferAlreadyCompletedException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
