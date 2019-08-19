import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { UnsupportedFeatureException } from "./UnsupportedFeatureException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceNotFoundException } from "./ServiceNotFoundException";
import { ServiceNotActiveException } from "./ServiceNotActiveException";
import { TaskSetNotFoundException } from "./TaskSetNotFoundException";
export type UpdateServicePrimaryTaskSetExceptionsUnion =
  | ServerException
  | ClientException
  | InvalidParameterException
  | ClusterNotFoundException
  | UnsupportedFeatureException
  | AccessDeniedException
  | ServiceNotFoundException
  | ServiceNotActiveException
  | TaskSetNotFoundException;
