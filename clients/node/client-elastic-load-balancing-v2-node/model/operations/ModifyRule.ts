import { ModifyRuleInput } from "../shapes/ModifyRuleInput";
import { ModifyRuleOutput } from "../shapes/ModifyRuleOutput";
import { TargetGroupAssociationLimitException } from "../shapes/TargetGroupAssociationLimitException";
import { IncompatibleProtocolsException } from "../shapes/IncompatibleProtocolsException";
import { RuleNotFoundException } from "../shapes/RuleNotFoundException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { TooManyRegistrationsForTargetIdException } from "../shapes/TooManyRegistrationsForTargetIdException";
import { TooManyTargetsException } from "../shapes/TooManyTargetsException";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { UnsupportedProtocolException } from "../shapes/UnsupportedProtocolException";
import { TooManyActionsException } from "../shapes/TooManyActionsException";
import { InvalidLoadBalancerActionException } from "../shapes/InvalidLoadBalancerActionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyRuleInput
  },
  output: {
    shape: ModifyRuleOutput,
    resultWrapper: "ModifyRuleResult"
  },
  errors: [
    {
      shape: TargetGroupAssociationLimitException
    },
    {
      shape: IncompatibleProtocolsException
    },
    {
      shape: RuleNotFoundException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: TooManyRegistrationsForTargetIdException
    },
    {
      shape: TooManyTargetsException
    },
    {
      shape: TargetGroupNotFoundException
    },
    {
      shape: UnsupportedProtocolException
    },
    {
      shape: TooManyActionsException
    },
    {
      shape: InvalidLoadBalancerActionException
    }
  ]
};
