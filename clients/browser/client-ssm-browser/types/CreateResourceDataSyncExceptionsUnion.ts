import { InternalServerError } from "./InternalServerError";
import { ResourceDataSyncCountExceededException } from "./ResourceDataSyncCountExceededException";
import { ResourceDataSyncAlreadyExistsException } from "./ResourceDataSyncAlreadyExistsException";
import { ResourceDataSyncInvalidConfigurationException } from "./ResourceDataSyncInvalidConfigurationException";
export type CreateResourceDataSyncExceptionsUnion =
  | InternalServerError
  | ResourceDataSyncCountExceededException
  | ResourceDataSyncAlreadyExistsException
  | ResourceDataSyncInvalidConfigurationException;
