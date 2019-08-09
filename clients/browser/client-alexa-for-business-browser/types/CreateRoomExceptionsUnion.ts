import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateRoomExceptionsUnion =
  | AlreadyExistsException
  | LimitExceededException;
