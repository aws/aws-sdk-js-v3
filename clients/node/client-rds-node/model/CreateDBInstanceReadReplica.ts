import { CreateDBInstanceReadReplicaInput } from "./CreateDBInstanceReadReplicaInput";
import { CreateDBInstanceReadReplicaOutput } from "./CreateDBInstanceReadReplicaOutput";
import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { InstanceQuotaExceededFault } from "./InstanceQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { ProvisionedIopsNotAvailableInAZFault } from "./ProvisionedIopsNotAvailableInAZFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { DBSubnetGroupNotAllowedFault } from "./DBSubnetGroupNotAllowedFault";
import { InvalidDBSubnetGroupFault } from "./InvalidDBSubnetGroupFault";
import { StorageTypeNotSupportedFault } from "./StorageTypeNotSupportedFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
