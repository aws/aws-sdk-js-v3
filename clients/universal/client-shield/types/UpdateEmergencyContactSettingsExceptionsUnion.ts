import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type UpdateEmergencyContactSettingsExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | OptimisticLockException
  | ResourceNotFoundException;
