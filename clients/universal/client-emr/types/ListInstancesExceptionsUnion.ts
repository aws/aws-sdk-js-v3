import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
export type ListInstancesExceptionsUnion =
  | InternalServerException
  | InvalidRequestException;
