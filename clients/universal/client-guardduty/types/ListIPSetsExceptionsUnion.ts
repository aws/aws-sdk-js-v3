import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type ListIPSetsExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
