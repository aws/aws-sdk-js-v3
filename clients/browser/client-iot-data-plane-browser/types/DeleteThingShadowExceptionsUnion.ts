import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { UnsupportedDocumentEncodingException } from "./UnsupportedDocumentEncodingException";
export type DeleteThingShadowExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException
  | MethodNotAllowedException
  | UnsupportedDocumentEncodingException;
