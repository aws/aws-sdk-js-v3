import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
export type UpdateBotExceptionsUnion =
  | ServiceUnavailableException
  | ServiceFailureException
  | ForbiddenException
  | BadRequestException
  | UnauthorizedClientException
  | NotFoundException;
