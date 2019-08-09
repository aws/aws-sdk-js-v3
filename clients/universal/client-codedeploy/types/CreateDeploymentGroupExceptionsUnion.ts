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
export type CreateDeploymentGroupExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | ApplicationDoesNotExistException
  | DeploymentGroupNameRequiredException
  | InvalidDeploymentGroupNameException
  | DeploymentGroupAlreadyExistsException
  | InvalidEC2TagException
  | InvalidTagException
  | InvalidAutoScalingGroupException
  | InvalidDeploymentConfigNameException
  | DeploymentConfigDoesNotExistException
  | RoleRequiredException
  | InvalidRoleException
  | DeploymentGroupLimitExceededException
  | LifecycleHookLimitExceededException
  | InvalidTriggerConfigException
  | TriggerTargetsLimitExceededException
  | InvalidAlarmConfigException
  | AlarmsLimitExceededException
  | InvalidAutoRollbackConfigException
  | InvalidLoadBalancerInfoException
  | InvalidDeploymentStyleException
  | InvalidBlueGreenDeploymentConfigurationException
  | InvalidEC2TagCombinationException
  | InvalidOnPremisesTagCombinationException
  | TagSetListLimitExceededException
  | InvalidInputException
  | ThrottlingException
  | InvalidECSServiceException
  | InvalidTargetGroupPairException
  | ECSServiceMappingLimitExceededException
  | InvalidTagsToAddException;
