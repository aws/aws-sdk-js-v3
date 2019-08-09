import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetAccountSettingsExceptionsUnion =
  | UnauthorizedClientException
  | NotFoundException
  | BadRequestException
  | ForbiddenException
  | ThrottledClientException
  | ServiceUnavailableException
  | ServiceFailureException;
