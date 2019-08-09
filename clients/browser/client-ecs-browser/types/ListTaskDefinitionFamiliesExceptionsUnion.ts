import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
export type ListTaskDefinitionFamiliesExceptionsUnion =
  | ServerException
  | ClientException
  | InvalidParameterException;
