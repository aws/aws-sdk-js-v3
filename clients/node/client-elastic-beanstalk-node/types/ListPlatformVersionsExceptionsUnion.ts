import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
export type ListPlatformVersionsExceptionsUnion =
  | InsufficientPrivilegesException
  | ElasticBeanstalkServiceException;
