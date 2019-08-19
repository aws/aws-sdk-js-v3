import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { DeploymentGroupDoesNotExistException } from "./DeploymentGroupDoesNotExistException";
import { RevisionRequiredException } from "./RevisionRequiredException";
import { RevisionDoesNotExistException } from "./RevisionDoesNotExistException";
import { InvalidRevisionException } from "./InvalidRevisionException";
import { InvalidDeploymentConfigNameException } from "./InvalidDeploymentConfigNameException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
import { DescriptionTooLongException } from "./DescriptionTooLongException";
import { DeploymentLimitExceededException } from "./DeploymentLimitExceededException";
import { InvalidTargetInstancesException } from "./InvalidTargetInstancesException";
import { InvalidAutoRollbackConfigException } from "./InvalidAutoRollbackConfigException";
import { InvalidLoadBalancerInfoException } from "./InvalidLoadBalancerInfoException";
import { InvalidFileExistsBehaviorException } from "./InvalidFileExistsBehaviorException";
import { InvalidRoleException } from "./InvalidRoleException";
import { InvalidAutoScalingGroupException } from "./InvalidAutoScalingGroupException";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidUpdateOutdatedInstancesOnlyValueException } from "./InvalidUpdateOutdatedInstancesOnlyValueException";
import { InvalidIgnoreApplicationStopFailuresValueException } from "./InvalidIgnoreApplicationStopFailuresValueException";
import { InvalidGitHubAccountTokenException } from "./InvalidGitHubAccountTokenException";
export type CreateDeploymentExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | ApplicationDoesNotExistException
  | DeploymentGroupNameRequiredException
  | InvalidDeploymentGroupNameException
  | DeploymentGroupDoesNotExistException
  | RevisionRequiredException
  | RevisionDoesNotExistException
  | InvalidRevisionException
  | InvalidDeploymentConfigNameException
  | DeploymentConfigDoesNotExistException
  | DescriptionTooLongException
  | DeploymentLimitExceededException
  | InvalidTargetInstancesException
  | InvalidAutoRollbackConfigException
  | InvalidLoadBalancerInfoException
  | InvalidFileExistsBehaviorException
  | InvalidRoleException
  | InvalidAutoScalingGroupException
  | ThrottlingException
  | InvalidUpdateOutdatedInstancesOnlyValueException
  | InvalidIgnoreApplicationStopFailuresValueException
  | InvalidGitHubAccountTokenException;
