import { AuthorizeSecurityGroupEgressInput } from "../shapes/AuthorizeSecurityGroupEgressInput";
import { AuthorizeSecurityGroupEgressOutput } from "../shapes/AuthorizeSecurityGroupEgressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AuthorizeSecurityGroupEgress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AuthorizeSecurityGroupEgress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AuthorizeSecurityGroupEgressInput
  },
  output: {
    shape: AuthorizeSecurityGroupEgressOutput
  },
  errors: []
};
