import { CreateDeploymentGroupInput } from "./CreateDeploymentGroupInput";
import { CreateDeploymentGroupOutput } from "./CreateDeploymentGroupOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { DeploymentGroupAlreadyExistsException } from "./DeploymentGroupAlreadyExistsException";
import { InvalidEC2TagException } from "./InvalidEC2TagException";
import { InvalidTagException } from "./InvalidTagException";
import { InvalidAutoScalingGroupException } from "./InvalidAutoScalingGroupException";
import { InvalidDeploymentConfigNameException } from "./InvalidDeploymentConfigNameException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
import { RoleRequiredException } from "./RoleRequiredException";
import { InvalidRoleException } from "./InvalidRoleException";
import { DeploymentGroupLimitExceededException } from "./DeploymentGroupLimitExceededException";
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
import { InvalidTagsToAddException } from "./InvalidTagsToAddException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
