import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DeleteClusterExceptionsUnion =
  | ResourceInUseException
  | ResourceNotFoundException
  | ClientException
  | ServerException
  | ServiceUnavailableException;
