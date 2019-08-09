import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type ListMembersExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
