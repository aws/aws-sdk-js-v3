import { DeleteClusterSecurityGroupInput } from "./DeleteClusterSecurityGroupInput";
import { DeleteClusterSecurityGroupOutput } from "./DeleteClusterSecurityGroupOutput";
import { InvalidClusterSecurityGroupStateFault } from "./InvalidClusterSecurityGroupStateFault";
import { ClusterSecurityGroupNotFoundFault } from "./ClusterSecurityGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
