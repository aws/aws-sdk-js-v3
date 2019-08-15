import { CreateDBInstanceReadReplicaInput } from "../shapes/CreateDBInstanceReadReplicaInput";
import { CreateDBInstanceReadReplicaOutput } from "../shapes/CreateDBInstanceReadReplicaOutput";
import { DBInstanceAlreadyExistsFault } from "../shapes/DBInstanceAlreadyExistsFault";
import { InsufficientDBInstanceCapacityFault } from "../shapes/InsufficientDBInstanceCapacityFault";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "../shapes/DBSecurityGroupNotFoundFault";
import { InstanceQuotaExceededFault } from "../shapes/InstanceQuotaExceededFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "../shapes/DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { ProvisionedIopsNotAvailableInAZFault } from "../shapes/ProvisionedIopsNotAvailableInAZFault";
import { OptionGroupNotFoundFault } from "../shapes/OptionGroupNotFoundFault";
import { DBSubnetGroupNotAllowedFault } from "../shapes/DBSubnetGroupNotAllowedFault";
import { InvalidDBSubnetGroupFault } from "../shapes/InvalidDBSubnetGroupFault";
import { StorageTypeNotSupportedFault } from "../shapes/StorageTypeNotSupportedFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDBInstanceReadReplica: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDBInstanceReadReplica",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDBInstanceReadReplicaInput
  },
  output: {
    shape: CreateDBInstanceReadReplicaOutput,
    resultWrapper: "CreateDBInstanceReadReplicaResult"
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
      shape: DBInstanceNotFoundFault
    },
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: DBSubnetGroupNotFoundFault
    },
    {
      shape: DBSubnetGroupDoesNotCoverEnoughAZs
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: ProvisionedIopsNotAvailableInAZFault
    },
    {
      shape: OptionGroupNotFoundFault
    },
    {
      shape: DBSubnetGroupNotAllowedFault
    },
    {
      shape: InvalidDBSubnetGroupFault
    },
    {
      shape: StorageTypeNotSupportedFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    }
  ]
};
