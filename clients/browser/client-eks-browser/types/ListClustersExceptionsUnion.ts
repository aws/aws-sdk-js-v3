import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type ListClustersExceptionsUnion =
  | InvalidParameterException
  | ClientException
  | ServerException
  | ServiceUnavailableException;
