import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
export type AssociateProductWithPortfolioExceptionsUnion =
  | InvalidParametersException
  | ResourceNotFoundException
  | LimitExceededException;
