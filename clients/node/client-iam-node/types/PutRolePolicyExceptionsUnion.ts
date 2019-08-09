import { LimitExceededException } from "./LimitExceededException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type PutRolePolicyExceptionsUnion =
  | LimitExceededException
  | MalformedPolicyDocumentException
  | NoSuchEntityException
  | UnmodifiableEntityException
  | ServiceFailureException;
