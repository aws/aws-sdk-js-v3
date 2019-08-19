import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
export type CreateCampaignExceptionsUnion =
  | InvalidInputException
  | ResourceNotFoundException
  | ResourceAlreadyExistsException
  | LimitExceededException
  | ResourceInUseException;
