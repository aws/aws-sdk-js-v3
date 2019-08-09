import { DeleteReplicationTaskInput } from "./DeleteReplicationTaskInput";
import { DeleteReplicationTaskOutput } from "./DeleteReplicationTaskOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteReplicationTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteReplicationTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteReplicationTaskInput
  },
  output: {
    shape: DeleteReplicationTaskOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidResourceStateFault
    }
  ]
};
