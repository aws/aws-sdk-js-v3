import { GlobalTableNotFoundException } from "./GlobalTableNotFoundException";
import { ReplicaNotFoundException } from "./ReplicaNotFoundException";
import { IndexNotFoundException } from "./IndexNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InternalServerError } from "./InternalServerError";
export type UpdateGlobalTableSettingsExceptionsUnion =
  | GlobalTableNotFoundException
  | ReplicaNotFoundException
  | IndexNotFoundException
  | LimitExceededException
  | ResourceInUseException
  | InternalServerError;
