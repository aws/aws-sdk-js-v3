import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteDataflowEndpointGroupExceptionsUnion =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException;
