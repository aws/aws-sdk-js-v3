import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { ClusterContainsContainerInstancesException } from "./ClusterContainsContainerInstancesException";
import { ClusterContainsServicesException } from "./ClusterContainsServicesException";
import { ClusterContainsTasksException } from "./ClusterContainsTasksException";
export type DeleteClusterExceptionsUnion =
  | ServerException
  | ClientException
  | InvalidParameterException
  | ClusterNotFoundException
  | ClusterContainsContainerInstancesException
  | ClusterContainsServicesException
  | ClusterContainsTasksException;
