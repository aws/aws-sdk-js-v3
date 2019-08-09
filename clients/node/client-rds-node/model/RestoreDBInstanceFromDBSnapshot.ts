import { RestoreDBInstanceFromDBSnapshotInput } from "./RestoreDBInstanceFromDBSnapshotInput";
import { RestoreDBInstanceFromDBSnapshotOutput } from "./RestoreDBInstanceFromDBSnapshotOutput";
import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { InstanceQuotaExceededFault } from "./InstanceQuotaExceededFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { InvalidDBSnapshotStateFault } from "./InvalidDBSnapshotStateFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidRestoreFault } from "./InvalidRestoreFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
import { ProvisionedIopsNotAvailableInAZFault } from "./ProvisionedIopsNotAvailableInAZFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { StorageTypeNotSupportedFault } from "./StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { DomainNotFoundFault } from "./DomainNotFoundFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { BackupPolicyNotFoundFault } from "./BackupPolicyNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
