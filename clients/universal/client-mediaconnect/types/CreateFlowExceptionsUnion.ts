import { CreateFlow420Exception } from "./CreateFlow420Exception";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CreateFlowExceptionsUnion =
  | CreateFlow420Exception
  | BadRequestException
  | InternalServerErrorException
  | ForbiddenException
  | ServiceUnavailableException
  | TooManyRequestsException;
