import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type ListFiltersExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
