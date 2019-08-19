import { ModifyReplicationInstanceInput } from "../shapes/ModifyReplicationInstanceInput";
import { ModifyReplicationInstanceOutput } from "../shapes/ModifyReplicationInstanceOutput";
import { AccessDeniedFault } from "../shapes/AccessDeniedFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceAlreadyExistsFault } from "../shapes/ResourceAlreadyExistsFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InsufficientResourceCapacityFault } from "../shapes/InsufficientResourceCapacityFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { UpgradeDependencyFailureFault } from "../shapes/UpgradeDependencyFailureFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
