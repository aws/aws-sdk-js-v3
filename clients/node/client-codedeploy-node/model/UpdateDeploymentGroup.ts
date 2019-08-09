import { UpdateDeploymentGroupInput } from "./UpdateDeploymentGroupInput";
import { UpdateDeploymentGroupOutput } from "./UpdateDeploymentGroupOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { DeploymentGroupAlreadyExistsException } from "./DeploymentGroupAlreadyExistsException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { DeploymentGroupDoesNotExistException } from "./DeploymentGroupDoesNotExistException";
import { InvalidEC2TagException } from "./InvalidEC2TagException";
import { InvalidTagException } from "./InvalidTagException";
import { InvalidAutoScalingGroupException } from "./InvalidAutoScalingGroupException";
import { InvalidDeploymentConfigNameException } from "./InvalidDeploymentConfigNameException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
import { InvalidRoleException } from "./InvalidRoleException";
import { LifecycleHookLimitExceededException } from "./LifecycleHookLimitExceededException";
import { InvalidTriggerConfigException } from "./InvalidTriggerConfigException";
import { TriggerTargetsLimitExceededException } from "./TriggerTargetsLimitExceededException";
import { InvalidAlarmConfigException } from "./InvalidAlarmConfigException";
import { AlarmsLimitExceededException } from "./AlarmsLimitExceededException";
import { InvalidAutoRollbackConfigException } from "./InvalidAutoRollbackConfigException";
import { InvalidLoadBalancerInfoException } from "./InvalidLoadBalancerInfoException";
import { InvalidDeploymentStyleException } from "./InvalidDeploymentStyleException";
import { InvalidBlueGreenDeploymentConfigurationException } from "./InvalidBlueGreenDeploymentConfigurationException";
import { InvalidEC2TagCombinationException } from "./InvalidEC2TagCombinationException";
import { InvalidOnPremisesTagCombinationException } from "./InvalidOnPremisesTagCombinationException";
import { TagSetListLimitExceededException } from "./TagSetListLimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidECSServiceException } from "./InvalidECSServiceException";
import { InvalidTargetGroupPairException } from "./InvalidTargetGroupPairException";
import { ECSServiceMappingLimitExceededException } from "./ECSServiceMappingLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
