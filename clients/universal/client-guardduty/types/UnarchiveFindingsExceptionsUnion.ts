import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type UnarchiveFindingsExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
