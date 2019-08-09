import { InvalidArgumentException } from "./InvalidArgumentException";
import { InternalServiceError } from "./InternalServiceError";
import { NotAuthorizedException } from "./NotAuthorizedException";
export type GetResourceMetricsExceptionsUnion =
  | InvalidArgumentException
  | InternalServiceError
  | NotAuthorizedException;
