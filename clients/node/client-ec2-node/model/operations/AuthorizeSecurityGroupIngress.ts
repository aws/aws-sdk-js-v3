import { AuthorizeSecurityGroupIngressInput } from "../shapes/AuthorizeSecurityGroupIngressInput";
import { AuthorizeSecurityGroupIngressOutput } from "../shapes/AuthorizeSecurityGroupIngressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AuthorizeSecurityGroupIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AuthorizeSecurityGroupIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AuthorizeSecurityGroupIngressInput
  },
  output: {
    shape: AuthorizeSecurityGroupIngressOutput
  },
  errors: []
};
