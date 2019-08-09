import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
export type GetDeliverabilityDashboardOptionsExceptionsUnion =
  | TooManyRequestsException
  | LimitExceededException
  | BadRequestException;
