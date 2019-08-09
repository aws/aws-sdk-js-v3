import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type ArchiveFindingsExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
