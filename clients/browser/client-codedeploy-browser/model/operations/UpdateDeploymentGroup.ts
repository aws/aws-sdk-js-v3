import { UpdateDeploymentGroupInput } from "../shapes/UpdateDeploymentGroupInput";
import { UpdateDeploymentGroupOutput } from "../shapes/UpdateDeploymentGroupOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { InvalidDeploymentGroupNameException } from "../shapes/InvalidDeploymentGroupNameException";
import { DeploymentGroupAlreadyExistsException } from "../shapes/DeploymentGroupAlreadyExistsException";
import { DeploymentGroupNameRequiredException } from "../shapes/DeploymentGroupNameRequiredException";
import { DeploymentGroupDoesNotExistException } from "../shapes/DeploymentGroupDoesNotExistException";
import { InvalidEC2TagException } from "../shapes/InvalidEC2TagException";
import { InvalidTagException } from "../shapes/InvalidTagException";
import { InvalidAutoScalingGroupException } from "../shapes/InvalidAutoScalingGroupException";
import { InvalidDeploymentConfigNameException } from "../shapes/InvalidDeploymentConfigNameException";
import { DeploymentConfigDoesNotExistException } from "../shapes/DeploymentConfigDoesNotExistException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDeploymentGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDeploymentGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDeploymentGroupInput
  },
  output: {
    shape: UpdateDeploymentGroupOutput
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
      shape: InvalidDeploymentGroupNameException
    },
    {
      shape: DeploymentGroupAlreadyExistsException
    },
    {
      shape: DeploymentGroupNameRequiredException
    },
    {
      shape: DeploymentGroupDoesNotExistException
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
      shape: InvalidRoleException
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
    }
  ]
};
