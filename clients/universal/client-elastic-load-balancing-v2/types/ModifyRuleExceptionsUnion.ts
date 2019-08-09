import { TargetGroupAssociationLimitException } from "./TargetGroupAssociationLimitException";
import { IncompatibleProtocolsException } from "./IncompatibleProtocolsException";
import { RuleNotFoundException } from "./RuleNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { TooManyRegistrationsForTargetIdException } from "./TooManyRegistrationsForTargetIdException";
import { TooManyTargetsException } from "./TooManyTargetsException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { TooManyActionsException } from "./TooManyActionsException";
import { InvalidLoadBalancerActionException } from "./InvalidLoadBalancerActionException";
export type ModifyRuleExceptionsUnion =
  | TargetGroupAssociationLimitException
  | IncompatibleProtocolsException
  | RuleNotFoundException
  | OperationNotPermittedException
  | TooManyRegistrationsForTargetIdException
  | TooManyTargetsException
  | TargetGroupNotFoundException
  | UnsupportedProtocolException
  | TooManyActionsException
  | InvalidLoadBalancerActionException;
