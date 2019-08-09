import { AuthorizeClusterSecurityGroupIngressInput } from "./AuthorizeClusterSecurityGroupIngressInput";
import { AuthorizeClusterSecurityGroupIngressOutput } from "./AuthorizeClusterSecurityGroupIngressOutput";
import { ClusterSecurityGroupNotFoundFault } from "./ClusterSecurityGroupNotFoundFault";
import { InvalidClusterSecurityGroupStateFault } from "./InvalidClusterSecurityGroupStateFault";
import { AuthorizationAlreadyExistsFault } from "./AuthorizationAlreadyExistsFault";
import { AuthorizationQuotaExceededFault } from "./AuthorizationQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
