import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
export type ListConfigurationSetsExceptionsUnion =
  | TooManyRequestsException
  | BadRequestException;
