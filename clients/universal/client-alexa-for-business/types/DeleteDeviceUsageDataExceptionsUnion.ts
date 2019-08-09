import { NotFoundException } from "./NotFoundException";
import { DeviceNotRegisteredException } from "./DeviceNotRegisteredException";
import { LimitExceededException } from "./LimitExceededException";
export type DeleteDeviceUsageDataExceptionsUnion =
  | NotFoundException
  | DeviceNotRegisteredException
  | LimitExceededException;
