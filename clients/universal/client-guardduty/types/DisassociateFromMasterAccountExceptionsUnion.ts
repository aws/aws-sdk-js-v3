import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type DisassociateFromMasterAccountExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
