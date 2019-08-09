import { DuplicateListenerException } from "./DuplicateListenerException";
import { TooManyListenersException } from "./TooManyListenersException";
import { TooManyCertificatesException } from "./TooManyCertificatesException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { TargetGroupAssociationLimitException } from "./TargetGroupAssociationLimitException";
import { IncompatibleProtocolsException } from "./IncompatibleProtocolsException";
import { SSLPolicyNotFoundException } from "./SSLPolicyNotFoundException";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { TooManyRegistrationsForTargetIdException } from "./TooManyRegistrationsForTargetIdException";
import { TooManyTargetsException } from "./TooManyTargetsException";
import { TooManyActionsException } from "./TooManyActionsException";
import { InvalidLoadBalancerActionException } from "./InvalidLoadBalancerActionException";
export type ModifyListenerExceptionsUnion =
  | DuplicateListenerException
  | TooManyListenersException
  | TooManyCertificatesException
  | ListenerNotFoundException
  | TargetGroupNotFoundException
  | TargetGroupAssociationLimitException
  | IncompatibleProtocolsException
  | SSLPolicyNotFoundException
  | CertificateNotFoundException
  | InvalidConfigurationRequestException
  | UnsupportedProtocolException
  | TooManyRegistrationsForTargetIdException
  | TooManyTargetsException
  | TooManyActionsException
  | InvalidLoadBalancerActionException;
