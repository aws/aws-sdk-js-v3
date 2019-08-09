import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceValidationException } from "./ResourceValidationException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
export type ListGitHubAccountTokenNamesExceptionsUnion =
  | InvalidNextTokenException
  | ResourceValidationException
  | OperationNotSupportedException;
