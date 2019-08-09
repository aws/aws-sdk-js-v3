import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type GetEntitlementsExceptionsUnion =
  | InvalidParameterException
  | ThrottlingException
  | InternalServiceErrorException;
