import { CreateLoadBalancerListenersInput } from "../shapes/CreateLoadBalancerListenersInput";
import { CreateLoadBalancerListenersOutput } from "../shapes/CreateLoadBalancerListenersOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { DuplicateListenerException } from "../shapes/DuplicateListenerException";
import { CertificateNotFoundException } from "../shapes/CertificateNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { UnsupportedProtocolException } from "../shapes/UnsupportedProtocolException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLoadBalancerListeners: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLoadBalancerListeners",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLoadBalancerListenersInput
  },
  output: {
    shape: CreateLoadBalancerListenersOutput,
    resultWrapper: "CreateLoadBalancerListenersResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: DuplicateListenerException
    },
    {
      shape: CertificateNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    },
    {
      shape: UnsupportedProtocolException
    }
  ]
};
