import { InternalServerError } from "./InternalServerError";
import { GlobalTableNotFoundException } from "./GlobalTableNotFoundException";
import { ReplicaAlreadyExistsException } from "./ReplicaAlreadyExistsException";
import { ReplicaNotFoundException } from "./ReplicaNotFoundException";
import { TableNotFoundException } from "./TableNotFoundException";
export type UpdateGlobalTableExceptionsUnion =
  | InternalServerError
  | GlobalTableNotFoundException
  | ReplicaAlreadyExistsException
  | ReplicaNotFoundException
  | TableNotFoundException;
