import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreatePolicyExceptionsUnion =
  | InvalidInputException
  | LimitExceededException
  | EntityAlreadyExistsException
  | MalformedPolicyDocumentException
  | ServiceFailureException;
