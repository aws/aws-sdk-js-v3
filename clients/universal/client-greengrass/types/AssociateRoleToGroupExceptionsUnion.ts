import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type AssociateRoleToGroupExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
