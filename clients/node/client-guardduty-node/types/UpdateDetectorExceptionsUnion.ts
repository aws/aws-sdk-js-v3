import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type UpdateDetectorExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
