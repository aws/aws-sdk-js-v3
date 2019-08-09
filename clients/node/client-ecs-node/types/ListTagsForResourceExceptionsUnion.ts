import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
export type ListTagsForResourceExceptionsUnion =
  | ServerException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException;
