import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
export type AssociatePrincipalWithPortfolioExceptionsUnion =
  | InvalidParametersException
  | ResourceNotFoundException
  | LimitExceededException;
