import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { UpdateInProgressException } from "./UpdateInProgressException";
import { NoUpdateAvailableException } from "./NoUpdateAvailableException";
import { MissingVersionException } from "./MissingVersionException";
export type UpdateContainerAgentExceptionsUnion =
  | ServerException
  | ClientException
  | InvalidParameterException
  | ClusterNotFoundException
  | UpdateInProgressException
  | NoUpdateAvailableException
  | MissingVersionException;
