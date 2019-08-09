import { RevokeClusterSecurityGroupIngressInput } from "./RevokeClusterSecurityGroupIngressInput";
import { RevokeClusterSecurityGroupIngressOutput } from "./RevokeClusterSecurityGroupIngressOutput";
import { ClusterSecurityGroupNotFoundFault } from "./ClusterSecurityGroupNotFoundFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { InvalidClusterSecurityGroupStateFault } from "./InvalidClusterSecurityGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
