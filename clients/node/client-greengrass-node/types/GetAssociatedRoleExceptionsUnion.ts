import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type GetAssociatedRoleExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
