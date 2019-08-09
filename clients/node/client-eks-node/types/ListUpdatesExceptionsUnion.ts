import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListUpdatesExceptionsUnion =
  | InvalidParameterException
  | ClientException
  | ServerException
  | ResourceNotFoundException;
