import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
export type SetLoadBalancerListenerSSLCertificateExceptionsUnion =
  | CertificateNotFoundException
  | AccessPointNotFoundException
  | ListenerNotFoundException
  | InvalidConfigurationRequestException
  | UnsupportedProtocolException;
