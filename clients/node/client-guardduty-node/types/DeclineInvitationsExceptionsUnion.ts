import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type DeclineInvitationsExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
