import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidTagParameterException } from "./InvalidTagParameterException";
import { TooManyTagsException } from "./TooManyTagsException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { ServerException } from "./ServerException";
export type TagResourceExceptionsUnion =
  | InvalidParameterException
  | InvalidTagParameterException
  | TooManyTagsException
  | RepositoryNotFoundException
  | ServerException;
