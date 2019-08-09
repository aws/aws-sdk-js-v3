import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type StopBuildExceptionsUnion =
  | InvalidInputException
  | ResourceNotFoundException;
