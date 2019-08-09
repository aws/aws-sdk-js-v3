import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
export type DeleteDatasetExceptionsUnion =
  | InvalidInputException
  | ResourceNotFoundException
  | ResourceInUseException;
