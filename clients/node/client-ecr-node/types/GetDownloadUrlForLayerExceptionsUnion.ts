import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { LayersNotFoundException } from "./LayersNotFoundException";
import { LayerInaccessibleException } from "./LayerInaccessibleException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
export type GetDownloadUrlForLayerExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | LayersNotFoundException
  | LayerInaccessibleException
  | RepositoryNotFoundException;
