import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidParametersException } from "./InvalidParametersException";
export type DisassociateProductFromPortfolioExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidParametersException;
