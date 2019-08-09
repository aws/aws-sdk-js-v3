import { NoSuchEntityException } from "./NoSuchEntityException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreatePolicyVersionExceptionsUnion =
  | NoSuchEntityException
  | MalformedPolicyDocumentException
  | InvalidInputException
  | LimitExceededException
  | ServiceFailureException;
