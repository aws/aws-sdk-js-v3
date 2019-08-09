import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
export type DiscoverPollEndpointExceptionsUnion =
  | ServerException
  | ClientException;
