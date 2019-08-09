import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { DeviceNotRegisteredException } from "./DeviceNotRegisteredException";
export type AssociateDeviceWithRoomExceptionsUnion =
  | LimitExceededException
  | ConcurrentModificationException
  | DeviceNotRegisteredException;
