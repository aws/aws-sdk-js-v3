import { CreateDeploymentInput } from "./CreateDeploymentInput";
import { CreateDeploymentOutput } from "./CreateDeploymentOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
