import { DeleteClusterSubnetGroupInput } from "./DeleteClusterSubnetGroupInput";
import { DeleteClusterSubnetGroupOutput } from "./DeleteClusterSubnetGroupOutput";
import { InvalidClusterSubnetGroupStateFault } from "./InvalidClusterSubnetGroupStateFault";
import { InvalidClusterSubnetStateFault } from "./InvalidClusterSubnetStateFault";
import { ClusterSubnetGroupNotFoundFault } from "./ClusterSubnetGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
