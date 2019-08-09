import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
export type DescribeBudgetPerformanceHistoryExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | InvalidNextTokenException
  | ExpiredNextTokenException;
