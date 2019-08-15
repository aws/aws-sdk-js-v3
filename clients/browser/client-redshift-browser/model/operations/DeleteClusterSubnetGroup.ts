import { DeleteClusterSubnetGroupInput } from "../shapes/DeleteClusterSubnetGroupInput";
import { DeleteClusterSubnetGroupOutput } from "../shapes/DeleteClusterSubnetGroupOutput";
import { InvalidClusterSubnetGroupStateFault } from "../shapes/InvalidClusterSubnetGroupStateFault";
import { InvalidClusterSubnetStateFault } from "../shapes/InvalidClusterSubnetStateFault";
import { ClusterSubnetGroupNotFoundFault } from "../shapes/ClusterSubnetGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteClusterSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteClusterSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteClusterSubnetGroupInput
  },
  output: {
    shape: DeleteClusterSubnetGroupOutput
  },
  errors: [
    {
      shape: InvalidClusterSubnetGroupStateFault
    },
    {
      shape: InvalidClusterSubnetStateFault
    },
    {
      shape: ClusterSubnetGroupNotFoundFault
    }
  ]
};
