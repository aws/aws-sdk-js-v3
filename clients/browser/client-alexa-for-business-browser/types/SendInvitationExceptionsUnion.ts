import { NotFoundException } from "./NotFoundException";
import { InvalidUserStatusException } from "./InvalidUserStatusException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type SendInvitationExceptionsUnion =
  | NotFoundException
  | InvalidUserStatusException
  | ConcurrentModificationException;
