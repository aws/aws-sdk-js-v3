import { DeleteReplicationSubnetGroupInput } from "../shapes/DeleteReplicationSubnetGroupInput";
import { DeleteReplicationSubnetGroupOutput } from "../shapes/DeleteReplicationSubnetGroupOutput";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
