import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type CreateMembersExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
