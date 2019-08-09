import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
export type GetAuthorizationTokenExceptionsUnion =
  | ServerException
  | InvalidParameterException;
