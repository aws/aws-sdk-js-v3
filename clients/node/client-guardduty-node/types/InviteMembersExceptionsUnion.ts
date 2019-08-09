import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type InviteMembersExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
