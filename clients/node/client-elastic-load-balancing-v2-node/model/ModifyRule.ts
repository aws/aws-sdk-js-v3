import { ModifyRuleInput } from "./ModifyRuleInput";
import { ModifyRuleOutput } from "./ModifyRuleOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
