import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { ConflictException } from "./ConflictException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateAccountSettingsExceptionsUnion =
  | UnauthorizedClientException
  | NotFoundException
  | BadRequestException
  | ForbiddenException
  | ConflictException
  | ThrottledClientException
  | ServiceUnavailableException
  | ServiceFailureException;
