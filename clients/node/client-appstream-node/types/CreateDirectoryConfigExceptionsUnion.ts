import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
export type CreateDirectoryConfigExceptionsUnion =
  | ResourceAlreadyExistsException
  | LimitExceededException
  | InvalidAccountStatusException;
