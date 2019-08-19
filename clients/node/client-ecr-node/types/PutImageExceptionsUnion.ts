import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { ImageAlreadyExistsException } from "./ImageAlreadyExistsException";
import { LayersNotFoundException } from "./LayersNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ImageTagAlreadyExistsException } from "./ImageTagAlreadyExistsException";
export type PutImageExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | RepositoryNotFoundException
  | ImageAlreadyExistsException
  | LayersNotFoundException
  | LimitExceededException
  | ImageTagAlreadyExistsException;
