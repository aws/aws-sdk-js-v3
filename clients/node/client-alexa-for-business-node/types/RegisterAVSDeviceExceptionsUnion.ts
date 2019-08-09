import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidDeviceException } from "./InvalidDeviceException";
export type RegisterAVSDeviceExceptionsUnion =
  | LimitExceededException
  | ConcurrentModificationException
  | InvalidDeviceException;
