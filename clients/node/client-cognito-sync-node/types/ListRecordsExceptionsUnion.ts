import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
export type ListRecordsExceptionsUnion =
  | InvalidParameterException
  | NotAuthorizedException
  | TooManyRequestsException
  | InternalErrorException;
