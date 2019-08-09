import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { NotEligibleException } from "./NotEligibleException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
export type PurchaseOfferingExceptionsUnion =
  | ArgumentException
  | NotFoundException
  | NotEligibleException
  | LimitExceededException
  | ServiceAccountException;
