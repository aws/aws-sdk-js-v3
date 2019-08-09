import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidOperationException } from "./InvalidOperationException";
export type ListAttacksExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | InvalidOperationException;
