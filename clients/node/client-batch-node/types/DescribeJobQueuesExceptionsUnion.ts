import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
export type DescribeJobQueuesExceptionsUnion =
  | ClientException
  | ServerException;
