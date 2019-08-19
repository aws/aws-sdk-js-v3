import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type RevokeInvitationExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
