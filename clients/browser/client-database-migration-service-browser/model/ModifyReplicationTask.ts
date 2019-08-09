import { ModifyReplicationTaskInput } from "./ModifyReplicationTaskInput";
import { ModifyReplicationTaskOutput } from "./ModifyReplicationTaskOutput";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyReplicationTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyReplicationTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyReplicationTaskInput
  },
  output: {
    shape: ModifyReplicationTaskOutput
  },
  errors: [
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: ResourceAlreadyExistsFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    }
  ]
};
