import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type PutInvitationConfigurationExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
