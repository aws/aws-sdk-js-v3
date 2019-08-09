import { DuplicateListenerException } from "./DuplicateListenerException";
import { TooManyListenersException } from "./TooManyListenersException";
import { TooManyCertificatesException } from "./TooManyCertificatesException";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { TargetGroupAssociationLimitException } from "./TargetGroupAssociationLimitException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { IncompatibleProtocolsException } from "./IncompatibleProtocolsException";
import { SSLPolicyNotFoundException } from "./SSLPolicyNotFoundException";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { TooManyRegistrationsForTargetIdException } from "./TooManyRegistrationsForTargetIdException";
import { TooManyTargetsException } from "./TooManyTargetsException";
import { TooManyActionsException } from "./TooManyActionsException";
import { InvalidLoadBalancerActionException } from "./InvalidLoadBalancerActionException";
export type CreateListenerExceptionsUnion =
  | DuplicateListenerException
  | TooManyListenersException
  | TooManyCertificatesException
  | LoadBalancerNotFoundException
  | TargetGroupNotFoundException
  | TargetGroupAssociationLimitException
  | InvalidConfigurationRequestException
  | IncompatibleProtocolsException
  | SSLPolicyNotFoundException
  | CertificateNotFoundException
  | UnsupportedProtocolException
  | TooManyRegistrationsForTargetIdException
  | TooManyTargetsException
  | TooManyActionsException
  | InvalidLoadBalancerActionException;
