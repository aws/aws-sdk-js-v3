import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottledException } from "./ThrottledException";
import { InternalServiceException } from "./InternalServiceException";
export type UntagResourcesExceptionsUnion =
  | InvalidParameterException
  | ThrottledException
  | InternalServiceException;
