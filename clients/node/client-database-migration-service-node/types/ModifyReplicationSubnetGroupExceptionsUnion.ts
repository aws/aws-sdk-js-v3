import { AccessDeniedFault } from "./AccessDeniedFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { SubnetAlreadyInUse } from "./SubnetAlreadyInUse";
import { ReplicationSubnetGroupDoesNotCoverEnoughAZs } from "./ReplicationSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
export type ModifyReplicationSubnetGroupExceptionsUnion =
  | AccessDeniedFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | SubnetAlreadyInUse
  | ReplicationSubnetGroupDoesNotCoverEnoughAZs
  | InvalidSubnet;
