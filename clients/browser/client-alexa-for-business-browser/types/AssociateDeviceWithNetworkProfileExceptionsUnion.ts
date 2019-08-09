import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { DeviceNotRegisteredException } from "./DeviceNotRegisteredException";
export type AssociateDeviceWithNetworkProfileExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException
  | DeviceNotRegisteredException;
