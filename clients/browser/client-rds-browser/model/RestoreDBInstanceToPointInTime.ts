import { RestoreDBInstanceToPointInTimeInput } from "./RestoreDBInstanceToPointInTimeInput";
import { RestoreDBInstanceToPointInTimeOutput } from "./RestoreDBInstanceToPointInTimeOutput";
import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InstanceQuotaExceededFault } from "./InstanceQuotaExceededFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { PointInTimeRestoreNotEnabledFault } from "./PointInTimeRestoreNotEnabledFault";
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
import { BackupPolicyNotFoundFault } from "./BackupPolicyNotFoundFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBInstanceAutomatedBackupNotFoundFault } from "./DBInstanceAutomatedBackupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestoreDBInstanceToPointInTime: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreDBInstanceToPointInTime",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreDBInstanceToPointInTimeInput
  },
  output: {
    shape: RestoreDBInstanceToPointInTimeOutput,
    resultWrapper: "RestoreDBInstanceToPointInTimeResult"
  },
  errors: [
    {
      shape: DBInstanceAlreadyExistsFault
    },
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: InstanceQuotaExceededFault
    },
    {
      shape: InsufficientDBInstanceCapacityFault
    },
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: PointInTimeRestoreNotEnabledFault
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
      shape: BackupPolicyNotFoundFault
    },
    {
      shape: DBParameterGroupNotFoundFault
    },
    {
      shape: DBInstanceAutomatedBackupNotFoundFault
    }
  ]
};
