import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type GetMasterAccountExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
