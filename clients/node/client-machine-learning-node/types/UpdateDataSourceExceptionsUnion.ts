import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
export type UpdateDataSourceExceptionsUnion =
  | InvalidInputException
  | ResourceNotFoundException
  | InternalServerException;
