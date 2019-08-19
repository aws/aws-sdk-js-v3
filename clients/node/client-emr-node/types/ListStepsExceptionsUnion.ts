import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
export type ListStepsExceptionsUnion =
  | InternalServerException
  | InvalidRequestException;
