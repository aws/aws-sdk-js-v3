import { CreateDeploymentInput } from "../shapes/CreateDeploymentInput";
import { CreateDeploymentOutput } from "../shapes/CreateDeploymentOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "../shapes/DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "../shapes/InvalidDeploymentGroupNameException";
import { DeploymentGroupDoesNotExistException } from "../shapes/DeploymentGroupDoesNotExistException";
import { RevisionRequiredException } from "../shapes/RevisionRequiredException";
import { RevisionDoesNotExistException } from "../shapes/RevisionDoesNotExistException";
import { InvalidRevisionException } from "../shapes/InvalidRevisionException";
import { InvalidDeploymentConfigNameException } from "../shapes/InvalidDeploymentConfigNameException";
import { DeploymentConfigDoesNotExistException } from "../shapes/DeploymentConfigDoesNotExistException";
import { DescriptionTooLongException } from "../shapes/DescriptionTooLongException";
import { DeploymentLimitExceededException } from "../shapes/DeploymentLimitExceededException";
import { InvalidTargetInstancesException } from "../shapes/InvalidTargetInstancesException";
import { InvalidAutoRollbackConfigException } from "../shapes/InvalidAutoRollbackConfigException";
import { InvalidLoadBalancerInfoException } from "../shapes/InvalidLoadBalancerInfoException";
import { InvalidFileExistsBehaviorException } from "../shapes/InvalidFileExistsBehaviorException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { InvalidAutoScalingGroupException } from "../shapes/InvalidAutoScalingGroupException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InvalidUpdateOutdatedInstancesOnlyValueException } from "../shapes/InvalidUpdateOutdatedInstancesOnlyValueException";
import { InvalidIgnoreApplicationStopFailuresValueException } from "../shapes/InvalidIgnoreApplicationStopFailuresValueException";
import { InvalidGitHubAccountTokenException } from "../shapes/InvalidGitHubAccountTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeployment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDeploymentInput
  },
  output: {
    shape: CreateDeploymentOutput
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
      shape: DeploymentGroupDoesNotExistException
    },
    {
      shape: RevisionRequiredException
    },
    {
      shape: RevisionDoesNotExistException
    },
    {
      shape: InvalidRevisionException
    },
    {
      shape: InvalidDeploymentConfigNameException
    },
    {
      shape: DeploymentConfigDoesNotExistException
    },
    {
      shape: DescriptionTooLongException
    },
    {
      shape: DeploymentLimitExceededException
    },
    {
      shape: InvalidTargetInstancesException
    },
    {
      shape: InvalidAutoRollbackConfigException
    },
    {
      shape: InvalidLoadBalancerInfoException
    },
    {
      shape: InvalidFileExistsBehaviorException
    },
    {
      shape: InvalidRoleException
    },
    {
      shape: InvalidAutoScalingGroupException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InvalidUpdateOutdatedInstancesOnlyValueException
    },
    {
      shape: InvalidIgnoreApplicationStopFailuresValueException
    },
    {
      shape: InvalidGitHubAccountTokenException
    }
  ]
};
