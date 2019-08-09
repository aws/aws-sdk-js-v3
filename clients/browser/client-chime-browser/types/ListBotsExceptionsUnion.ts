import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
export type ListBotsExceptionsUnion =
  | ServiceUnavailableException
  | ServiceFailureException
  | ForbiddenException
  | UnauthorizedClientException
  | BadRequestException
  | NotFoundException;
