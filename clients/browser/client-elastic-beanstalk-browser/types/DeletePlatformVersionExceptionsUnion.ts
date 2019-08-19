import { OperationInProgressException } from "./OperationInProgressException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
import { PlatformVersionStillReferencedException } from "./PlatformVersionStillReferencedException";
export type DeletePlatformVersionExceptionsUnion =
  | OperationInProgressException
  | InsufficientPrivilegesException
  | ElasticBeanstalkServiceException
  | PlatformVersionStillReferencedException;
