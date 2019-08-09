import { GitHubAccountTokenNameRequiredException } from "./GitHubAccountTokenNameRequiredException";
import { GitHubAccountTokenDoesNotExistException } from "./GitHubAccountTokenDoesNotExistException";
import { InvalidGitHubAccountTokenNameException } from "./InvalidGitHubAccountTokenNameException";
import { ResourceValidationException } from "./ResourceValidationException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
export type DeleteGitHubAccountTokenExceptionsUnion =
  | GitHubAccountTokenNameRequiredException
  | GitHubAccountTokenDoesNotExistException
  | InvalidGitHubAccountTokenNameException
  | ResourceValidationException
  | OperationNotSupportedException;
