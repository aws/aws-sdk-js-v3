import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { DuplicateListenerException } from "./DuplicateListenerException";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
export type CreateLoadBalancerListenersExceptionsUnion =
  | AccessPointNotFoundException
  | DuplicateListenerException
  | CertificateNotFoundException
  | InvalidConfigurationRequestException
  | UnsupportedProtocolException;
