import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { DeviceNotRegisteredException } from "./DeviceNotRegisteredException";
export type DisassociateDeviceFromRoomExceptionsUnion =
  | ConcurrentModificationException
  | DeviceNotRegisteredException;
