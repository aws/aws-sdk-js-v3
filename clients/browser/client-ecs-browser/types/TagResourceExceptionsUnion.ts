import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
export type TagResourceExceptionsUnion =
  | ServerException
  | ClientException
  | ClusterNotFoundException
  | ResourceNotFoundException
  | InvalidParameterException;
