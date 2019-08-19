import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
export type SendAnnouncementExceptionsUnion =
  | LimitExceededException
  | AlreadyExistsException;
