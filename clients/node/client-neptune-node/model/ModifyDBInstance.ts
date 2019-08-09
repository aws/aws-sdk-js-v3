import { ModifyDBInstanceInput } from "./ModifyDBInstanceInput";
import { ModifyDBInstanceOutput } from "./ModifyDBInstanceOutput";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { ProvisionedIopsNotAvailableInAZFault } from "./ProvisionedIopsNotAvailableInAZFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { DBUpgradeDependencyFailureFault } from "./DBUpgradeDependencyFailureFault";
import { StorageTypeNotSupportedFault } from "./StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { CertificateNotFoundFault } from "./CertificateNotFoundFault";
import { DomainNotFoundFault } from "./DomainNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
    }
  ]
};
