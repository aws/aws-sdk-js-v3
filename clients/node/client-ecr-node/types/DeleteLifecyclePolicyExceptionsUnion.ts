import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { LifecyclePolicyNotFoundException } from "./LifecyclePolicyNotFoundException";
export type DeleteLifecyclePolicyExceptionsUnion =
  | ServerException
  | InvalidParameterException
  | RepositoryNotFoundException
  | LifecyclePolicyNotFoundException;
