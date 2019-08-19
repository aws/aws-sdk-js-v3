import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeUpdateExceptionsUnion =
  | InvalidParameterException
  | ClientException
  | ServerException
  | ResourceNotFoundException;
