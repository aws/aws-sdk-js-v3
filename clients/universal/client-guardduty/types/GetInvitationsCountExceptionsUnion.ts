import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type GetInvitationsCountExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
