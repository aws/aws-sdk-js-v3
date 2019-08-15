import { RevokeClusterSecurityGroupIngressInput } from "../shapes/RevokeClusterSecurityGroupIngressInput";
import { RevokeClusterSecurityGroupIngressOutput } from "../shapes/RevokeClusterSecurityGroupIngressOutput";
import { ClusterSecurityGroupNotFoundFault } from "../shapes/ClusterSecurityGroupNotFoundFault";
import { AuthorizationNotFoundFault } from "../shapes/AuthorizationNotFoundFault";
import { InvalidClusterSecurityGroupStateFault } from "../shapes/InvalidClusterSecurityGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RevokeClusterSecurityGroupIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeClusterSecurityGroupIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeClusterSecurityGroupIngressInput
  },
  output: {
    shape: RevokeClusterSecurityGroupIngressOutput,
    resultWrapper: "RevokeClusterSecurityGroupIngressResult"
  },
  errors: [
    {
      shape: ClusterSecurityGroupNotFoundFault
    },
    {
      shape: AuthorizationNotFoundFault
    },
    {
      shape: InvalidClusterSecurityGroupStateFault
    }
  ]
};
