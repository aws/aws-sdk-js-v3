import { DeleteReplicationInstanceInput } from "./DeleteReplicationInstanceInput";
import { DeleteReplicationInstanceOutput } from "./DeleteReplicationInstanceOutput";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteReplicationInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteReplicationInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteReplicationInstanceInput
  },
  output: {
    shape: DeleteReplicationInstanceOutput
  },
  errors: [
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: ResourceNotFoundFault
    }
  ]
};
