import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerException } from "./InternalServerException";
export type DeleteApplicationExceptionsUnion =
  | ResourceNotFoundException
  | ValidationException
  | BadRequestException
  | InternalServerException;
