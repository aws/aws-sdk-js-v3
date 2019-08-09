import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { PolicyNotAttachableException } from "./PolicyNotAttachableException";
import { ServiceFailureException } from "./ServiceFailureException";
export type PutRolePermissionsBoundaryExceptionsUnion =
  | NoSuchEntityException
  | InvalidInputException
  | UnmodifiableEntityException
  | PolicyNotAttachableException
  | ServiceFailureException;
