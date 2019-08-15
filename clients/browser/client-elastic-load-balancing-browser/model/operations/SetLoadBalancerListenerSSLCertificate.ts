import { SetLoadBalancerListenerSSLCertificateInput } from "../shapes/SetLoadBalancerListenerSSLCertificateInput";
import { SetLoadBalancerListenerSSLCertificateOutput } from "../shapes/SetLoadBalancerListenerSSLCertificateOutput";
import { CertificateNotFoundException } from "../shapes/CertificateNotFoundException";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { UnsupportedProtocolException } from "../shapes/UnsupportedProtocolException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetLoadBalancerListenerSSLCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetLoadBalancerListenerSSLCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetLoadBalancerListenerSSLCertificateInput
  },
  output: {
    shape: SetLoadBalancerListenerSSLCertificateOutput,
    resultWrapper: "SetLoadBalancerListenerSSLCertificateResult"
  },
  errors: [
    {
      shape: CertificateNotFoundException
    },
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: ListenerNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    },
    {
      shape: UnsupportedProtocolException
    }
  ]
};
