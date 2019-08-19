import { RestoreDBInstanceToPointInTimeInput } from "../shapes/RestoreDBInstanceToPointInTimeInput";
import { RestoreDBInstanceToPointInTimeOutput } from "../shapes/RestoreDBInstanceToPointInTimeOutput";
import { DBInstanceAlreadyExistsFault } from "../shapes/DBInstanceAlreadyExistsFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { InstanceQuotaExceededFault } from "../shapes/InstanceQuotaExceededFault";
import { InsufficientDBInstanceCapacityFault } from "../shapes/InsufficientDBInstanceCapacityFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { PointInTimeRestoreNotEnabledFault } from "../shapes/PointInTimeRestoreNotEnabledFault";
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
import { BackupPolicyNotFoundFault } from "../shapes/BackupPolicyNotFoundFault";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { DBInstanceAutomatedBackupNotFoundFault } from "../shapes/DBInstanceAutomatedBackupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
