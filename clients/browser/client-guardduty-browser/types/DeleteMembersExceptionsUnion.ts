import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type DeleteMembersExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
