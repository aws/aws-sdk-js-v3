import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetGlobalSettingsExceptionsUnion =
  | UnauthorizedClientException
  | ForbiddenException
  | BadRequestException
  | ThrottledClientException
  | ServiceUnavailableException
  | ServiceFailureException;
