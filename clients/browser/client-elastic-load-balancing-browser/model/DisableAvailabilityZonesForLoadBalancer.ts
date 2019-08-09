import { DisableAvailabilityZonesForLoadBalancerInput } from "./DisableAvailabilityZonesForLoadBalancerInput";
import { DisableAvailabilityZonesForLoadBalancerOutput } from "./DisableAvailabilityZonesForLoadBalancerOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
