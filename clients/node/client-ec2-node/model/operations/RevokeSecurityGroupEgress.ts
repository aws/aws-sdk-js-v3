import { RevokeSecurityGroupEgressInput } from "../shapes/RevokeSecurityGroupEgressInput";
import { RevokeSecurityGroupEgressOutput } from "../shapes/RevokeSecurityGroupEgressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RevokeSecurityGroupEgress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeSecurityGroupEgress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeSecurityGroupEgressInput
  },
  output: {
    shape: RevokeSecurityGroupEgressOutput
  },
  errors: []
};
