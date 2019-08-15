import { PutAutoScalingPolicyInput } from "../shapes/PutAutoScalingPolicyInput";
import { PutAutoScalingPolicyOutput } from "../shapes/PutAutoScalingPolicyOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutAutoScalingPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutAutoScalingPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutAutoScalingPolicyInput
  },
  output: {
    shape: PutAutoScalingPolicyOutput
  },
  errors: []
};
