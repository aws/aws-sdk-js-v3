import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListThingGroupsExceptionsUnion =
  | InvalidRequestException
  | InternalFailureException
  | ResourceNotFoundException;
