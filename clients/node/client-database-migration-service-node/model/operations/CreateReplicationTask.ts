import { CreateReplicationTaskInput } from "../shapes/CreateReplicationTaskInput";
import { CreateReplicationTaskOutput } from "../shapes/CreateReplicationTaskOutput";
import { AccessDeniedFault } from "../shapes/AccessDeniedFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceAlreadyExistsFault } from "../shapes/ResourceAlreadyExistsFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { ResourceQuotaExceededFault } from "../shapes/ResourceQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateReplicationTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateReplicationTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateReplicationTaskInput
  },
  output: {
    shape: CreateReplicationTaskOutput
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
      shape: KMSKeyNotAccessibleFault
    },
    {
      shape: ResourceQuotaExceededFault
    }
  ]
};
