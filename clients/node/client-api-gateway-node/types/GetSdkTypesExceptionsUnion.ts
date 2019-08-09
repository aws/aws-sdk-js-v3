import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetSdkTypesExceptionsUnion =
  | UnauthorizedException
  | TooManyRequestsException;
