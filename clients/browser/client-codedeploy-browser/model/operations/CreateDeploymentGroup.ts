import { CreateDeploymentGroupInput } from "../shapes/CreateDeploymentGroupInput";
import { CreateDeploymentGroupOutput } from "../shapes/CreateDeploymentGroupOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "../shapes/DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "../shapes/InvalidDeploymentGroupNameException";
import { DeploymentGroupAlreadyExistsException } from "../shapes/DeploymentGroupAlreadyExistsException";
import { InvalidEC2TagException } from "../shapes/InvalidEC2TagException";
import { InvalidTagException } from "../shapes/InvalidTagException";
import { InvalidAutoScalingGroupException } from "../shapes/InvalidAutoScalingGroupException";
import { InvalidDeploymentConfigNameException } from "../shapes/InvalidDeploymentConfigNameException";
import { DeploymentConfigDoesNotExistException } from "../shapes/DeploymentConfigDoesNotExistException";
import { RoleRequiredException } from "../shapes/RoleRequiredException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { DeploymentGroupLimitExceededException } from "../shapes/DeploymentGroupLimitExceededException";
import { LifecycleHookLimitExceededException } from "../shapes/LifecycleHookLimitExceededException";
import { InvalidTriggerConfigException } from "../shapes/InvalidTriggerConfigException";
import { TriggerTargetsLimitExceededException } from "../shapes/TriggerTargetsLimitExceededException";
import { InvalidAlarmConfigException } from "../shapes/InvalidAlarmConfigException";
import { AlarmsLimitExceededException } from "../shapes/AlarmsLimitExceededException";
import { InvalidAutoRollbackConfigException } from "../shapes/InvalidAutoRollbackConfigException";
import { InvalidLoadBalancerInfoException } from "../shapes/InvalidLoadBalancerInfoException";
import { InvalidDeploymentStyleException } from "../shapes/InvalidDeploymentStyleException";
import { InvalidBlueGreenDeploymentConfigurationException } from "../shapes/InvalidBlueGreenDeploymentConfigurationException";
import { InvalidEC2TagCombinationException } from "../shapes/InvalidEC2TagCombinationException";
import { InvalidOnPremisesTagCombinationException } from "../shapes/InvalidOnPremisesTagCombinationException";
import { TagSetListLimitExceededException } from "../shapes/TagSetListLimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InvalidECSServiceException } from "../shapes/InvalidECSServiceException";
import { InvalidTargetGroupPairException } from "../shapes/InvalidTargetGroupPairException";
import { ECSServiceMappingLimitExceededException } from "../shapes/ECSServiceMappingLimitExceededException";
import { InvalidTagsToAddException } from "../shapes/InvalidTagsToAddException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDeploymentGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeploymentGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDeploymentGroupInput
  },
  output: {
    shape: CreateDeploymentGroupOutput
  },
  errors: [
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: ApplicationDoesNotExistException
    },
    {
      shape: DeploymentGroupNameRequiredException
    },
    {
      shape: InvalidDeploymentGroupNameException
    },
    {
      shape: DeploymentGroupAlreadyExistsException
    },
    {
      shape: InvalidEC2TagException
    },
    {
      shape: InvalidTagException
    },
    {
      shape: InvalidAutoScalingGroupException
    },
    {
      shape: InvalidDeploymentConfigNameException
    },
    {
      shape: DeploymentConfigDoesNotExistException
    },
    {
      shape: RoleRequiredException
    },
    {
      shape: InvalidRoleException
    },
    {
      shape: DeploymentGroupLimitExceededException
    },
    {
      shape: LifecycleHookLimitExceededException
    },
    {
      shape: InvalidTriggerConfigException
    },
    {
      shape: TriggerTargetsLimitExceededException
    },
    {
      shape: InvalidAlarmConfigException
    },
    {
      shape: AlarmsLimitExceededException
    },
    {
      shape: InvalidAutoRollbackConfigException
    },
    {
      shape: InvalidLoadBalancerInfoException
    },
    {
      shape: InvalidDeploymentStyleException
    },
    {
      shape: InvalidBlueGreenDeploymentConfigurationException
    },
    {
      shape: InvalidEC2TagCombinationException
    },
    {
      shape: InvalidOnPremisesTagCombinationException
    },
    {
      shape: TagSetListLimitExceededException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InvalidECSServiceException
    },
    {
      shape: InvalidTargetGroupPairException
    },
    {
      shape: ECSServiceMappingLimitExceededException
    },
    {
      shape: InvalidTagsToAddException
    }
  ]
};
