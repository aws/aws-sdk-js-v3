import { NoSuchEntityException } from "./NoSuchEntityException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { LimitExceededException } from "./LimitExceededException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateAssumeRolePolicyExceptionsUnion =
  | NoSuchEntityException
  | MalformedPolicyDocumentException
  | LimitExceededException
  | UnmodifiableEntityException
  | ServiceFailureException;
