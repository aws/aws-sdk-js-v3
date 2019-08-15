import { CreateDBInstanceInput } from "../shapes/CreateDBInstanceInput";
import { CreateDBInstanceOutput } from "../shapes/CreateDBInstanceOutput";
import { DBInstanceAlreadyExistsFault } from "../shapes/DBInstanceAlreadyExistsFault";
import { InsufficientDBInstanceCapacityFault } from "../shapes/InsufficientDBInstanceCapacityFault";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "../shapes/DBSecurityGroupNotFoundFault";
import { InstanceQuotaExceededFault } from "../shapes/InstanceQuotaExceededFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "../shapes/DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { StorageTypeNotSupportedFault } from "../shapes/StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "../shapes/AuthorizationNotFoundFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
