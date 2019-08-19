import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
export type DeregisterJobDefinitionExceptionsUnion =
  | ClientException
  | ServerException;
