import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
export type GetBotExceptionsUnion =
  | ServiceUnavailableException
  | ServiceFailureException
  | ForbiddenException
  | UnauthorizedClientException
  | NotFoundException
  | BadRequestException;
