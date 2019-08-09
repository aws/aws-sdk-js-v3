import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
export type AcceptPortfolioShareExceptionsUnion =
  | InvalidParametersException
  | ResourceNotFoundException
  | LimitExceededException;
