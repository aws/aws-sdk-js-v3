import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
export type RegisterContainerInstanceExceptionsUnion =
  | ServerException
  | ClientException
  | InvalidParameterException;
