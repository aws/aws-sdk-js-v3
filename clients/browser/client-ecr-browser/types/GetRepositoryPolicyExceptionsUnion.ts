import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { RepositoryPolicyNotFoundException } from "./RepositoryPolicyNotFoundException";
export type GetRepositoryPolicyExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | RepositoryNotFoundException
  | RepositoryPolicyNotFoundException;
