import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
export type ListNodesExceptionsUnion =
  | NotFoundException
  | BadRequestException
  | InternalServerErrorException
  | ForbiddenException;
