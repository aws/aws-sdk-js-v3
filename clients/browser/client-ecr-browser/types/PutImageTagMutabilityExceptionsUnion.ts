import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
export type PutImageTagMutabilityExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | RepositoryNotFoundException;
