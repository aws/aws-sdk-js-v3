import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { NotEligibleException } from "./NotEligibleException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
export type ListOfferingPromotionsExceptionsUnion =
  | ArgumentException
  | NotFoundException
  | NotEligibleException
  | LimitExceededException
  | ServiceAccountException;
