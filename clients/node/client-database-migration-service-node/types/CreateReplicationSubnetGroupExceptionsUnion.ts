import { AccessDeniedFault } from "./AccessDeniedFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { ReplicationSubnetGroupDoesNotCoverEnoughAZs } from "./ReplicationSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
export type CreateReplicationSubnetGroupExceptionsUnion =
  | AccessDeniedFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | ReplicationSubnetGroupDoesNotCoverEnoughAZs
  | InvalidSubnet;
