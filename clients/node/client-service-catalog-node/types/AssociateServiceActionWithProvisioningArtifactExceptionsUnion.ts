import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { LimitExceededException } from "./LimitExceededException";
export type AssociateServiceActionWithProvisioningArtifactExceptionsUnion =
  | ResourceNotFoundException
  | DuplicateResourceException
  | LimitExceededException;
