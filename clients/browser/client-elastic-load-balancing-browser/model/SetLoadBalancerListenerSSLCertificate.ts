import { SetLoadBalancerListenerSSLCertificateInput } from "./SetLoadBalancerListenerSSLCertificateInput";
import { SetLoadBalancerListenerSSLCertificateOutput } from "./SetLoadBalancerListenerSSLCertificateOutput";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
