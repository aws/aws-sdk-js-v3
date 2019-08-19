import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
export type ListClustersExceptionsUnion =
  | InternalServerException
  | InvalidRequestException;
