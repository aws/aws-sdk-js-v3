import { CreateRuleInput } from "./CreateRuleInput";
import { CreateRuleOutput } from "./CreateRuleOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
