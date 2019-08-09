import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidLayerPartException } from "./InvalidLayerPartException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { UploadNotFoundException } from "./UploadNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
export type UploadLayerPartExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | InvalidLayerPartException
  | RepositoryNotFoundException
  | UploadNotFoundException
  | LimitExceededException;
