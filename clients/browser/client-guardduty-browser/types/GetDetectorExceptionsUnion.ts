import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type GetDetectorExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
