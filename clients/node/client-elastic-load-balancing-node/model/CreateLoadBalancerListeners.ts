import { CreateLoadBalancerListenersInput } from "./CreateLoadBalancerListenersInput";
import { CreateLoadBalancerListenersOutput } from "./CreateLoadBalancerListenersOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { DuplicateListenerException } from "./DuplicateListenerException";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
