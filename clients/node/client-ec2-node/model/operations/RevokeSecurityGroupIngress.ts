import { RevokeSecurityGroupIngressInput } from "../shapes/RevokeSecurityGroupIngressInput";
import { RevokeSecurityGroupIngressOutput } from "../shapes/RevokeSecurityGroupIngressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RevokeSecurityGroupIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeSecurityGroupIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeSecurityGroupIngressInput
  },
  output: {
    shape: RevokeSecurityGroupIngressOutput
  },
  errors: []
};
