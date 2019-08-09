import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { UnsupportedDocumentEncodingException } from "./UnsupportedDocumentEncodingException";
export type GetThingShadowExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException
  | MethodNotAllowedException
  | UnsupportedDocumentEncodingException;
