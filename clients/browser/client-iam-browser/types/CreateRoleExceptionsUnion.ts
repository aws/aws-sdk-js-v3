import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreateRoleExceptionsUnion =
  | LimitExceededException
  | InvalidInputException
  | EntityAlreadyExistsException
  | MalformedPolicyDocumentException
  | ConcurrentModificationException
  | ServiceFailureException;
