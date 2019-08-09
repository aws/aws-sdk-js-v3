import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { RepositoryNotEmptyException } from "./RepositoryNotEmptyException";
export type DeleteRepositoryExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | RepositoryNotFoundException
  | RepositoryNotEmptyException;
