import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type DeleteDetectorExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
