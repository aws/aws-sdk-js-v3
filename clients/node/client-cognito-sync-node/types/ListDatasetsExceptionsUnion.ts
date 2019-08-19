import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListDatasetsExceptionsUnion =
  | NotAuthorizedException
  | InvalidParameterException
  | InternalErrorException
  | TooManyRequestsException;
