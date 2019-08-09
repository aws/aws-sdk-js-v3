import { InvalidRequestException } from "./InvalidRequestException";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
export type DescribeEnvironmentHealthExceptionsUnion =
  | InvalidRequestException
  | ElasticBeanstalkServiceException;
