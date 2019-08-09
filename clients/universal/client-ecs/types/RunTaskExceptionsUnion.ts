import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { UnsupportedFeatureException } from "./UnsupportedFeatureException";
import { PlatformUnknownException } from "./PlatformUnknownException";
import { PlatformTaskDefinitionIncompatibilityException } from "./PlatformTaskDefinitionIncompatibilityException";
import { AccessDeniedException } from "./AccessDeniedException";
import { BlockedException } from "./BlockedException";
export type RunTaskExceptionsUnion =
  | ServerException
  | ClientException
  | InvalidParameterException
  | ClusterNotFoundException
  | UnsupportedFeatureException
  | PlatformUnknownException
  | PlatformTaskDefinitionIncompatibilityException
  | AccessDeniedException
  | BlockedException;
