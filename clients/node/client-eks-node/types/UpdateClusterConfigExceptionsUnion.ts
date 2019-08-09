import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
export type UpdateClusterConfigExceptionsUnion =
  | InvalidParameterException
  | ClientException
  | ServerException
  | ResourceInUseException
  | ResourceNotFoundException
  | InvalidRequestException;
