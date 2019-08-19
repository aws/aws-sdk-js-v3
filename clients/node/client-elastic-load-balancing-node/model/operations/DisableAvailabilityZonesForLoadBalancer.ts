import { DisableAvailabilityZonesForLoadBalancerInput } from "../shapes/DisableAvailabilityZonesForLoadBalancerInput";
import { DisableAvailabilityZonesForLoadBalancerOutput } from "../shapes/DisableAvailabilityZonesForLoadBalancerOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableAvailabilityZonesForLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableAvailabilityZonesForLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableAvailabilityZonesForLoadBalancerInput
  },
  output: {
    shape: DisableAvailabilityZonesForLoadBalancerOutput,
    resultWrapper: "DisableAvailabilityZonesForLoadBalancerResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    }
  ]
};
