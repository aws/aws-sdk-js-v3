import { AuthorizeClusterSecurityGroupIngressInput } from "../shapes/AuthorizeClusterSecurityGroupIngressInput";
import { AuthorizeClusterSecurityGroupIngressOutput } from "../shapes/AuthorizeClusterSecurityGroupIngressOutput";
import { ClusterSecurityGroupNotFoundFault } from "../shapes/ClusterSecurityGroupNotFoundFault";
import { InvalidClusterSecurityGroupStateFault } from "../shapes/InvalidClusterSecurityGroupStateFault";
import { AuthorizationAlreadyExistsFault } from "../shapes/AuthorizationAlreadyExistsFault";
import { AuthorizationQuotaExceededFault } from "../shapes/AuthorizationQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AuthorizeClusterSecurityGroupIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AuthorizeClusterSecurityGroupIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AuthorizeClusterSecurityGroupIngressInput
  },
  output: {
    shape: AuthorizeClusterSecurityGroupIngressOutput,
    resultWrapper: "AuthorizeClusterSecurityGroupIngressResult"
  },
  errors: [
    {
      shape: ClusterSecurityGroupNotFoundFault
    },
    {
      shape: InvalidClusterSecurityGroupStateFault
    },
    {
      shape: AuthorizationAlreadyExistsFault
    },
    {
      shape: AuthorizationQuotaExceededFault
    }
  ]
};
