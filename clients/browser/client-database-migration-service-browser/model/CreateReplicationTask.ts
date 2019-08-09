import { CreateReplicationTaskInput } from "./CreateReplicationTaskInput";
import { CreateReplicationTaskOutput } from "./CreateReplicationTaskOutput";
import { AccessDeniedFault } from "./AccessDeniedFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
