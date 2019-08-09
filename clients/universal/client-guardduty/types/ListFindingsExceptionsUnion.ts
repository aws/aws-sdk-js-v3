import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type ListFindingsExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
