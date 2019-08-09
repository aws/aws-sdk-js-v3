import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotAttachableException } from "./PolicyNotAttachableException";
import { ServiceFailureException } from "./ServiceFailureException";
export type AttachUserPolicyExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | InvalidInputException
  | PolicyNotAttachableException
  | ServiceFailureException;
