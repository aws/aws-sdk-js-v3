import { ArgumentException } from "./ArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
export type CreateVPCEConfigurationExceptionsUnion =
  | ArgumentException
  | LimitExceededException
  | ServiceAccountException;
