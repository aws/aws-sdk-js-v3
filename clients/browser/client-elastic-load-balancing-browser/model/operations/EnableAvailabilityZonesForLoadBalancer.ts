import { EnableAvailabilityZonesForLoadBalancerInput } from "../shapes/EnableAvailabilityZonesForLoadBalancerInput";
import { EnableAvailabilityZonesForLoadBalancerOutput } from "../shapes/EnableAvailabilityZonesForLoadBalancerOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableAvailabilityZonesForLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableAvailabilityZonesForLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableAvailabilityZonesForLoadBalancerInput
  },
  output: {
    shape: EnableAvailabilityZonesForLoadBalancerOutput,
    resultWrapper: "EnableAvailabilityZonesForLoadBalancerResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    }
  ]
};
