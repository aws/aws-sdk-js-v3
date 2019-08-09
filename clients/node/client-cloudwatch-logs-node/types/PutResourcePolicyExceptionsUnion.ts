import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type PutResourcePolicyExceptionsUnion =
  | InvalidParameterException
  | LimitExceededException
  | ServiceUnavailableException;
