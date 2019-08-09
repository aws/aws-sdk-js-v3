import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
export type DescribeJobDefinitionsExceptionsUnion =
  | ClientException
  | ServerException;
