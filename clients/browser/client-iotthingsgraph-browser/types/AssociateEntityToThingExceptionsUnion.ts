import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
export type AssociateEntityToThingExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | InternalFailureException
  | ThrottlingException;
