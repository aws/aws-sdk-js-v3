import { DeleteReplicationSubnetGroupInput } from "./DeleteReplicationSubnetGroupInput";
import { DeleteReplicationSubnetGroupOutput } from "./DeleteReplicationSubnetGroupOutput";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteReplicationSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteReplicationSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteReplicationSubnetGroupInput
  },
  output: {
    shape: DeleteReplicationSubnetGroupOutput
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
