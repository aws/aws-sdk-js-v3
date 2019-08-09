import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type StopFleetExceptionsUnion =
  | ResourceNotFoundException
  | ConcurrentModificationException;
