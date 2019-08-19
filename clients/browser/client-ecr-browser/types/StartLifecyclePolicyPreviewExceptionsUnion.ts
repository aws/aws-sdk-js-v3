import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { LifecyclePolicyNotFoundException } from "./LifecyclePolicyNotFoundException";
import { LifecyclePolicyPreviewInProgressException } from "./LifecyclePolicyPreviewInProgressException";
export type StartLifecyclePolicyPreviewExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | RepositoryNotFoundException
  | LifecyclePolicyNotFoundException
  | LifecyclePolicyPreviewInProgressException;
