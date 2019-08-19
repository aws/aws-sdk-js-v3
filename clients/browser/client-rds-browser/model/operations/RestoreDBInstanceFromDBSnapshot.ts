import { RestoreDBInstanceFromDBSnapshotInput } from "../shapes/RestoreDBInstanceFromDBSnapshotInput";
import { RestoreDBInstanceFromDBSnapshotOutput } from "../shapes/RestoreDBInstanceFromDBSnapshotOutput";
import { DBInstanceAlreadyExistsFault } from "../shapes/DBInstanceAlreadyExistsFault";
import { DBSnapshotNotFoundFault } from "../shapes/DBSnapshotNotFoundFault";
import { InstanceQuotaExceededFault } from "../shapes/InstanceQuotaExceededFault";
import { InsufficientDBInstanceCapacityFault } from "../shapes/InsufficientDBInstanceCapacityFault";
import { InvalidDBSnapshotStateFault } from "../shapes/InvalidDBSnapshotStateFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InvalidRestoreFault } from "../shapes/InvalidRestoreFault";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "../shapes/DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { ProvisionedIopsNotAvailableInAZFault } from "../shapes/ProvisionedIopsNotAvailableInAZFault";
import { OptionGroupNotFoundFault } from "../shapes/OptionGroupNotFoundFault";
import { StorageTypeNotSupportedFault } from "../shapes/StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "../shapes/AuthorizationNotFoundFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { DBSecurityGroupNotFoundFault } from "../shapes/DBSecurityGroupNotFoundFault";
import { DomainNotFoundFault } from "../shapes/DomainNotFoundFault";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { BackupPolicyNotFoundFault } from "../shapes/BackupPolicyNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RestoreDBInstanceFromDBSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreDBInstanceFromDBSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreDBInstanceFromDBSnapshotInput
  },
  output: {
    shape: RestoreDBInstanceFromDBSnapshotOutput,
    resultWrapper: "RestoreDBInstanceFromDBSnapshotResult"
  },
  errors: [
    {
      shape: DBInstanceAlreadyExistsFault
    },
    {
      shape: DBSnapshotNotFoundFault
    },
    {
      shape: InstanceQuotaExceededFault
    },
    {
      shape: InsufficientDBInstanceCapacityFault
    },
    {
      shape: InvalidDBSnapshotStateFault
    },
    {
      shape: StorageQuotaExceededFault
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: InvalidRestoreFault
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
      shape: ProvisionedIopsNotAvailableInAZFault
    },
    {
      shape: OptionGroupNotFoundFault
    },
    {
      shape: StorageTypeNotSupportedFault
    },
    {
      shape: AuthorizationNotFoundFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    },
    {
      shape: DBSecurityGroupNotFoundFault
    },
    {
      shape: DomainNotFoundFault
    },
    {
      shape: DBParameterGroupNotFoundFault
    },
    {
      shape: BackupPolicyNotFoundFault
    }
  ]
};
