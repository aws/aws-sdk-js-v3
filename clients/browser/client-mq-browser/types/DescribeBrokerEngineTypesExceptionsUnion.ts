import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
export type DescribeBrokerEngineTypesExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | ForbiddenException;
