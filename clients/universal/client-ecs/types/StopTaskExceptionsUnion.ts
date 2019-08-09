import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
export type StopTaskExceptionsUnion =
  | ServerException
  | ClientException
  | InvalidParameterException
  | ClusterNotFoundException;
