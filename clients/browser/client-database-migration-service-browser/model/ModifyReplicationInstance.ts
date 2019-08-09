import { ModifyReplicationInstanceInput } from "./ModifyReplicationInstanceInput";
import { ModifyReplicationInstanceOutput } from "./ModifyReplicationInstanceOutput";
import { AccessDeniedFault } from "./AccessDeniedFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InsufficientResourceCapacityFault } from "./InsufficientResourceCapacityFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { UpgradeDependencyFailureFault } from "./UpgradeDependencyFailureFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyReplicationInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyReplicationInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyReplicationInstanceInput
  },
  output: {
    shape: ModifyReplicationInstanceOutput
  },
  errors: [
    {
      shape: AccessDeniedFault
    },
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: ResourceAlreadyExistsFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InsufficientResourceCapacityFault
    },
    {
      shape: StorageQuotaExceededFault
    },
    {
      shape: UpgradeDependencyFailureFault
    }
  ]
};
