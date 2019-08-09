import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
import { TooManyPlatformsException } from "./TooManyPlatformsException";
export type CreatePlatformVersionExceptionsUnion =
  | InsufficientPrivilegesException
  | ElasticBeanstalkServiceException
  | TooManyPlatformsException;
