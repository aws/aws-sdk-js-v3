import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { ServerException } from "./ServerException";
export type ListTagsForResourceExceptionsUnion =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException;
