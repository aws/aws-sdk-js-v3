import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
export type DeleteAccountSettingExceptionsUnion =
  | ServerException
  | ClientException
  | InvalidParameterException;
