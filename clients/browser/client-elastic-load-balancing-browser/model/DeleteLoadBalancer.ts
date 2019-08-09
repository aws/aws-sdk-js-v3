import { DeleteLoadBalancerInput } from "./DeleteLoadBalancerInput";
import { DeleteLoadBalancerOutput } from "./DeleteLoadBalancerOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLoadBalancerInput
  },
  output: {
    shape: DeleteLoadBalancerOutput,
    resultWrapper: "DeleteLoadBalancerResult"
  },
  errors: []
};
