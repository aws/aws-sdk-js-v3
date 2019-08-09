import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidTagParameterException } from "./InvalidTagParameterException";
import { TooManyTagsException } from "./TooManyTagsException";
import { RepositoryAlreadyExistsException } from "./RepositoryAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateRepositoryExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | InvalidTagParameterException
  | TooManyTagsException
  | RepositoryAlreadyExistsException
  | LimitExceededException;
