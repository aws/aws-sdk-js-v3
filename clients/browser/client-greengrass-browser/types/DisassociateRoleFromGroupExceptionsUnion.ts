import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type DisassociateRoleFromGroupExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
