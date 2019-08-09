import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { CertificateValidationException } from "./CertificateValidationException";
import { TerminalStateException } from "./TerminalStateException";
export type DescribeJobExecutionExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | ServiceUnavailableException
  | CertificateValidationException
  | TerminalStateException;
