import { LimitExceededException } from "./LimitExceededException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type PutGroupPolicyExceptionsUnion =
  | LimitExceededException
  | MalformedPolicyDocumentException
  | NoSuchEntityException
  | ServiceFailureException;
