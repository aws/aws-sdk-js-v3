import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
export type UntagResourceExceptionsUnion =
  | ServerException
  | ClientException
  | ClusterNotFoundException
  | ResourceNotFoundException
  | InvalidParameterException;
