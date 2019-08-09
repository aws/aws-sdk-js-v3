import { ModifyLoadBalancerAttributesInput } from "./ModifyLoadBalancerAttributesInput";
import { ModifyLoadBalancerAttributesOutput } from "./ModifyLoadBalancerAttributesOutput";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyLoadBalancerAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyLoadBalancerAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyLoadBalancerAttributesInput
  },
  output: {
    shape: ModifyLoadBalancerAttributesOutput,
    resultWrapper: "ModifyLoadBalancerAttributesResult"
  },
  errors: [
    {
      shape: LoadBalancerNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    }
  ]
};
