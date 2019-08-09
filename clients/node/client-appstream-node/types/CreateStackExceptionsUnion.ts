import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidRoleException } from "./InvalidRoleException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type CreateStackExceptionsUnion =
  | LimitExceededException
  | InvalidAccountStatusException
  | ResourceAlreadyExistsException
  | ConcurrentModificationException
  | InvalidRoleException
  | ResourceNotFoundException
  | InvalidParameterCombinationException;
