import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotAttachableException } from "./PolicyNotAttachableException";
import { ServiceFailureException } from "./ServiceFailureException";
export type PutUserPermissionsBoundaryExceptionsUnion =
  | NoSuchEntityException
  | InvalidInputException
  | PolicyNotAttachableException
  | ServiceFailureException;
