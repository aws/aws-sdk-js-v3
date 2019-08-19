import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type GetConnectivityInfoExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
