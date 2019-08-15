import { ModifyDBInstanceInput } from "../shapes/ModifyDBInstanceInput";
import { ModifyDBInstanceOutput } from "../shapes/ModifyDBInstanceOutput";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { InvalidDBSecurityGroupStateFault } from "../shapes/InvalidDBSecurityGroupStateFault";
import { DBInstanceAlreadyExistsFault } from "../shapes/DBInstanceAlreadyExistsFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "../shapes/DBSecurityGroupNotFoundFault";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { InsufficientDBInstanceCapacityFault } from "../shapes/InsufficientDBInstanceCapacityFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { ProvisionedIopsNotAvailableInAZFault } from "../shapes/ProvisionedIopsNotAvailableInAZFault";
import { OptionGroupNotFoundFault } from "../shapes/OptionGroupNotFoundFault";
import { DBUpgradeDependencyFailureFault } from "../shapes/DBUpgradeDependencyFailureFault";
import { StorageTypeNotSupportedFault } from "../shapes/StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "../shapes/AuthorizationNotFoundFault";
import { CertificateNotFoundFault } from "../shapes/CertificateNotFoundFault";
import { DomainNotFoundFault } from "../shapes/DomainNotFoundFault";
import { BackupPolicyNotFoundFault } from "../shapes/BackupPolicyNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyDBInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyDBInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyDBInstanceInput
  },
  output: {
    shape: ModifyDBInstanceOutput,
    resultWrapper: "ModifyDBInstanceResult"
  },
  errors: [
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: InvalidDBSecurityGroupStateFault
    },
    {
      shape: DBInstanceAlreadyExistsFault
    },
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: DBSecurityGroupNotFoundFault
    },
    {
      shape: DBParameterGroupNotFoundFault
    },
    {
      shape: InsufficientDBInstanceCapacityFault
    },
    {
      shape: StorageQuotaExceededFault
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
      shape: DBUpgradeDependencyFailureFault
    },
    {
      shape: StorageTypeNotSupportedFault
    },
    {
      shape: AuthorizationNotFoundFault
    },
    {
      shape: CertificateNotFoundFault
    },
    {
      shape: DomainNotFoundFault
    },
    {
      shape: BackupPolicyNotFoundFault
    }
  ]
};
