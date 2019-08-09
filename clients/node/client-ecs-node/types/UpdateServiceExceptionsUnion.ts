import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { ServiceNotFoundException } from "./ServiceNotFoundException";
import { ServiceNotActiveException } from "./ServiceNotActiveException";
import { PlatformUnknownException } from "./PlatformUnknownException";
import { PlatformTaskDefinitionIncompatibilityException } from "./PlatformTaskDefinitionIncompatibilityException";
import { AccessDeniedException } from "./AccessDeniedException";
export type UpdateServiceExceptionsUnion =
  | ServerException
  | ClientException
  | InvalidParameterException
  | ClusterNotFoundException
  | ServiceNotFoundException
  | ServiceNotActiveException
  | PlatformUnknownException
  | PlatformTaskDefinitionIncompatibilityException
  | AccessDeniedException;
