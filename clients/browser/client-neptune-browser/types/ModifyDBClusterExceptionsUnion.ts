import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidDBSubnetGroupStateFault } from "./InvalidDBSubnetGroupStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { DBClusterParameterGroupNotFoundFault } from "./DBClusterParameterGroupNotFoundFault";
import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBClusterAlreadyExistsFault } from "./DBClusterAlreadyExistsFault";
export type ModifyDBClusterExceptionsUnion =
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault
  | StorageQuotaExceededFault
  | DBSubnetGroupNotFoundFault
  | InvalidVPCNetworkStateFault
  | InvalidDBSubnetGroupStateFault
  | InvalidSubnet
  | DBClusterParameterGroupNotFoundFault
  | InvalidDBSecurityGroupStateFault
  | InvalidDBInstanceStateFault
  | DBClusterAlreadyExistsFault;
