import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { UploadNotFoundException } from "./UploadNotFoundException";
import { InvalidLayerException } from "./InvalidLayerException";
import { LayerPartTooSmallException } from "./LayerPartTooSmallException";
import { LayerAlreadyExistsException } from "./LayerAlreadyExistsException";
import { EmptyUploadException } from "./EmptyUploadException";
export type CompleteLayerUploadExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | RepositoryNotFoundException
  | UploadNotFoundException
  | InvalidLayerException
  | LayerPartTooSmallException
  | LayerAlreadyExistsException
  | EmptyUploadException;
