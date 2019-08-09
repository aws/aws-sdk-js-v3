import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type GetFindingsExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
