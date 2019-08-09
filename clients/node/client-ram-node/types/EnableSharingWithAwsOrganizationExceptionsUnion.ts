import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type EnableSharingWithAwsOrganizationExceptionsUnion =
  | OperationNotPermittedException
  | ServerInternalException
  | ServiceUnavailableException;
