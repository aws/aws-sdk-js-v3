import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
export type EnableUserExceptionsUnion =
  | ResourceNotFoundException
  | InvalidAccountStatusException;
