import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type ListInvitationsExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
