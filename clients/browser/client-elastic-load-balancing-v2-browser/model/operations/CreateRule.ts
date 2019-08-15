import { CreateRuleInput } from "../shapes/CreateRuleInput";
import { CreateRuleOutput } from "../shapes/CreateRuleOutput";
import { PriorityInUseException } from "../shapes/PriorityInUseException";
import { TooManyTargetGroupsException } from "../shapes/TooManyTargetGroupsException";
import { TooManyRulesException } from "../shapes/TooManyRulesException";
import { TargetGroupAssociationLimitException } from "../shapes/TargetGroupAssociationLimitException";
import { IncompatibleProtocolsException } from "../shapes/IncompatibleProtocolsException";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { TooManyRegistrationsForTargetIdException } from "../shapes/TooManyRegistrationsForTargetIdException";
import { TooManyTargetsException } from "../shapes/TooManyTargetsException";
import { UnsupportedProtocolException } from "../shapes/UnsupportedProtocolException";
import { TooManyActionsException } from "../shapes/TooManyActionsException";
import { InvalidLoadBalancerActionException } from "../shapes/InvalidLoadBalancerActionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRuleInput
  },
  output: {
    shape: CreateRuleOutput,
    resultWrapper: "CreateRuleResult"
  },
  errors: [
    {
      shape: PriorityInUseException
    },
    {
      shape: TooManyTargetGroupsException
    },
    {
      shape: TooManyRulesException
    },
    {
      shape: TargetGroupAssociationLimitException
    },
    {
      shape: IncompatibleProtocolsException
    },
    {
      shape: ListenerNotFoundException
    },
    {
      shape: TargetGroupNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    },
    {
      shape: TooManyRegistrationsForTargetIdException
    },
    {
      shape: TooManyTargetsException
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
