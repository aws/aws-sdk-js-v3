import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
export type PutVoiceConnectorTerminationExceptionsUnion =
  | UnauthorizedClientException
  | NotFoundException
  | ForbiddenException
  | BadRequestException
  | ThrottledClientException
  | ServiceUnavailableException
  | ServiceFailureException;
