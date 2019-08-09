import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { UnsupportedFeatureException } from "./UnsupportedFeatureException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceNotFoundException } from "./ServiceNotFoundException";
import { ServiceNotActiveException } from "./ServiceNotActiveException";
export type DescribeTaskSetsExceptionsUnion =
  | ServerException
  | ClientException
  | InvalidParameterException
  | ClusterNotFoundException
  | UnsupportedFeatureException
  | AccessDeniedException
  | ServiceNotFoundException
  | ServiceNotActiveException;
