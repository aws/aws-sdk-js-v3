import { AccessDeniedFault } from "./AccessDeniedFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { InsufficientResourceCapacityFault } from "./InsufficientResourceCapacityFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ReplicationSubnetGroupDoesNotCoverEnoughAZs } from "./ReplicationSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
export type CreateReplicationInstanceExceptionsUnion =
  | AccessDeniedFault
  | ResourceAlreadyExistsFault
  | InsufficientResourceCapacityFault
  | ResourceQuotaExceededFault
  | StorageQuotaExceededFault
  | ResourceNotFoundFault
  | ReplicationSubnetGroupDoesNotCoverEnoughAZs
  | InvalidResourceStateFault
  | InvalidSubnet
  | KMSKeyNotAccessibleFault;
