import { PriorityInUseException } from "./PriorityInUseException";
import { TooManyTargetGroupsException } from "./TooManyTargetGroupsException";
import { TooManyRulesException } from "./TooManyRulesException";
import { TargetGroupAssociationLimitException } from "./TargetGroupAssociationLimitException";
import { IncompatibleProtocolsException } from "./IncompatibleProtocolsException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { TooManyRegistrationsForTargetIdException } from "./TooManyRegistrationsForTargetIdException";
import { TooManyTargetsException } from "./TooManyTargetsException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { TooManyActionsException } from "./TooManyActionsException";
import { InvalidLoadBalancerActionException } from "./InvalidLoadBalancerActionException";
export type CreateRuleExceptionsUnion =
  | PriorityInUseException
  | TooManyTargetGroupsException
  | TooManyRulesException
  | TargetGroupAssociationLimitException
  | IncompatibleProtocolsException
  | ListenerNotFoundException
  | TargetGroupNotFoundException
  | InvalidConfigurationRequestException
  | TooManyRegistrationsForTargetIdException
  | TooManyTargetsException
  | UnsupportedProtocolException
  | TooManyActionsException
  | InvalidLoadBalancerActionException;
