import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteAccountExceptionsUnion =
  | UnauthorizedClientException
  | NotFoundException
  | ForbiddenException
  | BadRequestException
  | ThrottledClientException
  | UnprocessableEntityException
  | ServiceUnavailableException
  | ServiceFailureException;
