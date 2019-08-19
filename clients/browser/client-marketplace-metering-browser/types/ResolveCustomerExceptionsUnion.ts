import { InvalidTokenException } from "./InvalidTokenException";
import { ExpiredTokenException } from "./ExpiredTokenException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { DisabledApiException } from "./DisabledApiException";
export type ResolveCustomerExceptionsUnion =
  | InvalidTokenException
  | ExpiredTokenException
  | ThrottlingException
  | InternalServiceErrorException
  | DisabledApiException;
