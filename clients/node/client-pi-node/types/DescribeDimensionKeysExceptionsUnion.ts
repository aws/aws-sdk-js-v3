import { InvalidArgumentException } from "./InvalidArgumentException";
import { InternalServiceError } from "./InternalServiceError";
import { NotAuthorizedException } from "./NotAuthorizedException";
export type DescribeDimensionKeysExceptionsUnion =
  | InvalidArgumentException
  | InternalServiceError
  | NotAuthorizedException;
