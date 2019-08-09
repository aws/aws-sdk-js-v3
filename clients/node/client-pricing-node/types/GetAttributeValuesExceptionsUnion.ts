import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
export type GetAttributeValuesExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | InvalidNextTokenException
  | ExpiredNextTokenException;
