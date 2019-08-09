import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { PolicyNotAttachableException } from "./PolicyNotAttachableException";
import { ServiceFailureException } from "./ServiceFailureException";
export type AttachRolePolicyExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | InvalidInputException
  | UnmodifiableEntityException
  | PolicyNotAttachableException
  | ServiceFailureException;
