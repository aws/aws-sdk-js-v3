import { DeleteReplicationInstanceInput } from "../shapes/DeleteReplicationInstanceInput";
import { DeleteReplicationInstanceOutput } from "../shapes/DeleteReplicationInstanceOutput";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
