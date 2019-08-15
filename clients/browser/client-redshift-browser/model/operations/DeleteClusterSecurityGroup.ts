import { DeleteClusterSecurityGroupInput } from "../shapes/DeleteClusterSecurityGroupInput";
import { DeleteClusterSecurityGroupOutput } from "../shapes/DeleteClusterSecurityGroupOutput";
import { InvalidClusterSecurityGroupStateFault } from "../shapes/InvalidClusterSecurityGroupStateFault";
import { ClusterSecurityGroupNotFoundFault } from "../shapes/ClusterSecurityGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteClusterSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteClusterSecurityGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteClusterSecurityGroupInput
  },
  output: {
    shape: DeleteClusterSecurityGroupOutput
  },
  errors: [
    {
      shape: InvalidClusterSecurityGroupStateFault
    },
    {
      shape: ClusterSecurityGroupNotFoundFault
    }
  ]
};
