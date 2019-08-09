import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListContactsExceptionsUnion =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException;
