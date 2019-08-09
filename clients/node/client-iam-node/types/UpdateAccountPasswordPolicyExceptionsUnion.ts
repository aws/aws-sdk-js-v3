import { NoSuchEntityException } from "./NoSuchEntityException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateAccountPasswordPolicyExceptionsUnion =
  | NoSuchEntityException
  | MalformedPolicyDocumentException
  | LimitExceededException
  | ServiceFailureException;
