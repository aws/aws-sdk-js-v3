import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { LifecyclePolicyPreviewNotFoundException } from "./LifecyclePolicyPreviewNotFoundException";
export type GetLifecyclePolicyPreviewExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | RepositoryNotFoundException
  | LifecyclePolicyPreviewNotFoundException;
