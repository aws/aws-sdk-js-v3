import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type DisassociateMembersExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
