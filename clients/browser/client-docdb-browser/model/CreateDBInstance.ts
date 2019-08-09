import { CreateDBInstanceInput } from "./CreateDBInstanceInput";
import { CreateDBInstanceOutput } from "./CreateDBInstanceOutput";
import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { InstanceQuotaExceededFault } from "./InstanceQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { StorageTypeNotSupportedFault } from "./StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDBInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDBInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDBInstanceInput
  },
  output: {
    shape: CreateDBInstanceOutput,
    resultWrapper: "CreateDBInstanceResult"
  },
  errors: [
    {
      shape: DBInstanceAlreadyExistsFault
    },
    {
      shape: InsufficientDBInstanceCapacityFault
    },
    {
      shape: DBParameterGroupNotFoundFault
    },
    {
      shape: DBSecurityGroupNotFoundFault
    },
    {
      shape: InstanceQuotaExceededFault
    },
    {
      shape: StorageQuotaExceededFault
    },
    {
      shape: DBSubnetGroupNotFoundFault
    },
    {
      shape: DBSubnetGroupDoesNotCoverEnoughAZs
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: StorageTypeNotSupportedFault
    },
    {
      shape: AuthorizationNotFoundFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    }
  ]
};
