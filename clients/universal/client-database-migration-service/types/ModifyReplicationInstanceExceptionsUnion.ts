import { AccessDeniedFault } from "./AccessDeniedFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InsufficientResourceCapacityFault } from "./InsufficientResourceCapacityFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { UpgradeDependencyFailureFault } from "./UpgradeDependencyFailureFault";
export type ModifyReplicationInstanceExceptionsUnion =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | InsufficientResourceCapacityFault
  | StorageQuotaExceededFault
  | UpgradeDependencyFailureFault;
