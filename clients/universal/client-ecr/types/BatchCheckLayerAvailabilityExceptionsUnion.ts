import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerException } from "./ServerException";
export type BatchCheckLayerAvailabilityExceptionsUnion =
  | RepositoryNotFoundException
  | InvalidParameterException
  | ServerException;
