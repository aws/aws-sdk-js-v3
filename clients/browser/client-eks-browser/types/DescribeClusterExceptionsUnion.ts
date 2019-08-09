import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DescribeClusterExceptionsUnion =
  | ResourceNotFoundException
  | ClientException
  | ServerException
  | ServiceUnavailableException;
