import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
export type EnableAWSOrganizationsAccessExceptionsUnion =
  | ResourceNotFoundException
  | InvalidStateException
  | OperationNotSupportedException;
