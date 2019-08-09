import { CodeDeployClient } from "./CodeDeployClient";
import { AddTagsToOnPremisesInstancesInput } from "./types/AddTagsToOnPremisesInstancesInput";
import { AddTagsToOnPremisesInstancesOutput } from "./types/AddTagsToOnPremisesInstancesOutput";
import { AlarmsLimitExceededException } from "./types/AlarmsLimitExceededException";
import { ApplicationAlreadyExistsException } from "./types/ApplicationAlreadyExistsException";
import { ApplicationDoesNotExistException } from "./types/ApplicationDoesNotExistException";
import { ApplicationLimitExceededException } from "./types/ApplicationLimitExceededException";
import { ApplicationNameRequiredException } from "./types/ApplicationNameRequiredException";
import { ArnNotSupportedException } from "./types/ArnNotSupportedException";
import { BatchGetApplicationRevisionsInput } from "./types/BatchGetApplicationRevisionsInput";
import { BatchGetApplicationRevisionsOutput } from "./types/BatchGetApplicationRevisionsOutput";
import { BatchGetApplicationsInput } from "./types/BatchGetApplicationsInput";
import { BatchGetApplicationsOutput } from "./types/BatchGetApplicationsOutput";
import { BatchGetDeploymentGroupsInput } from "./types/BatchGetDeploymentGroupsInput";
import { BatchGetDeploymentGroupsOutput } from "./types/BatchGetDeploymentGroupsOutput";
import { BatchGetDeploymentInstancesInput } from "./types/BatchGetDeploymentInstancesInput";
import { BatchGetDeploymentInstancesOutput } from "./types/BatchGetDeploymentInstancesOutput";
import { BatchGetDeploymentTargetsInput } from "./types/BatchGetDeploymentTargetsInput";
import { BatchGetDeploymentTargetsOutput } from "./types/BatchGetDeploymentTargetsOutput";
import { BatchGetDeploymentsInput } from "./types/BatchGetDeploymentsInput";
import { BatchGetDeploymentsOutput } from "./types/BatchGetDeploymentsOutput";
import { BatchGetOnPremisesInstancesInput } from "./types/BatchGetOnPremisesInstancesInput";
import { BatchGetOnPremisesInstancesOutput } from "./types/BatchGetOnPremisesInstancesOutput";
import { BatchLimitExceededException } from "./types/BatchLimitExceededException";
import { BucketNameFilterRequiredException } from "./types/BucketNameFilterRequiredException";
import { ContinueDeploymentInput } from "./types/ContinueDeploymentInput";
import { ContinueDeploymentOutput } from "./types/ContinueDeploymentOutput";
import { CreateApplicationInput } from "./types/CreateApplicationInput";
import { CreateApplicationOutput } from "./types/CreateApplicationOutput";
import { CreateDeploymentConfigInput } from "./types/CreateDeploymentConfigInput";
import { CreateDeploymentConfigOutput } from "./types/CreateDeploymentConfigOutput";
import { CreateDeploymentGroupInput } from "./types/CreateDeploymentGroupInput";
import { CreateDeploymentGroupOutput } from "./types/CreateDeploymentGroupOutput";
import { CreateDeploymentInput } from "./types/CreateDeploymentInput";
import { CreateDeploymentOutput } from "./types/CreateDeploymentOutput";
import { DeleteApplicationInput } from "./types/DeleteApplicationInput";
import { DeleteApplicationOutput } from "./types/DeleteApplicationOutput";
import { DeleteDeploymentConfigInput } from "./types/DeleteDeploymentConfigInput";
import { DeleteDeploymentConfigOutput } from "./types/DeleteDeploymentConfigOutput";
import { DeleteDeploymentGroupInput } from "./types/DeleteDeploymentGroupInput";
import { DeleteDeploymentGroupOutput } from "./types/DeleteDeploymentGroupOutput";
import { DeleteGitHubAccountTokenInput } from "./types/DeleteGitHubAccountTokenInput";
import { DeleteGitHubAccountTokenOutput } from "./types/DeleteGitHubAccountTokenOutput";
import { DeploymentAlreadyCompletedException } from "./types/DeploymentAlreadyCompletedException";
import { DeploymentConfigAlreadyExistsException } from "./types/DeploymentConfigAlreadyExistsException";
import { DeploymentConfigDoesNotExistException } from "./types/DeploymentConfigDoesNotExistException";
import { DeploymentConfigInUseException } from "./types/DeploymentConfigInUseException";
import { DeploymentConfigLimitExceededException } from "./types/DeploymentConfigLimitExceededException";
import { DeploymentConfigNameRequiredException } from "./types/DeploymentConfigNameRequiredException";
import { DeploymentDoesNotExistException } from "./types/DeploymentDoesNotExistException";
import { DeploymentGroupAlreadyExistsException } from "./types/DeploymentGroupAlreadyExistsException";
import { DeploymentGroupDoesNotExistException } from "./types/DeploymentGroupDoesNotExistException";
import { DeploymentGroupLimitExceededException } from "./types/DeploymentGroupLimitExceededException";
import { DeploymentGroupNameRequiredException } from "./types/DeploymentGroupNameRequiredException";
import { DeploymentIdRequiredException } from "./types/DeploymentIdRequiredException";
import { DeploymentIsNotInReadyStateException } from "./types/DeploymentIsNotInReadyStateException";
import { DeploymentLimitExceededException } from "./types/DeploymentLimitExceededException";
import { DeploymentNotStartedException } from "./types/DeploymentNotStartedException";
import { DeploymentTargetDoesNotExistException } from "./types/DeploymentTargetDoesNotExistException";
import { DeploymentTargetIdRequiredException } from "./types/DeploymentTargetIdRequiredException";
import { DeploymentTargetListSizeExceededException } from "./types/DeploymentTargetListSizeExceededException";
import { DeregisterOnPremisesInstanceInput } from "./types/DeregisterOnPremisesInstanceInput";
import { DeregisterOnPremisesInstanceOutput } from "./types/DeregisterOnPremisesInstanceOutput";
import { DescriptionTooLongException } from "./types/DescriptionTooLongException";
import { ECSServiceMappingLimitExceededException } from "./types/ECSServiceMappingLimitExceededException";
import { GetApplicationInput } from "./types/GetApplicationInput";
import { GetApplicationOutput } from "./types/GetApplicationOutput";
import { GetApplicationRevisionInput } from "./types/GetApplicationRevisionInput";
import { GetApplicationRevisionOutput } from "./types/GetApplicationRevisionOutput";
import { GetDeploymentConfigInput } from "./types/GetDeploymentConfigInput";
import { GetDeploymentConfigOutput } from "./types/GetDeploymentConfigOutput";
import { GetDeploymentGroupInput } from "./types/GetDeploymentGroupInput";
import { GetDeploymentGroupOutput } from "./types/GetDeploymentGroupOutput";
import { GetDeploymentInput } from "./types/GetDeploymentInput";
import { GetDeploymentInstanceInput } from "./types/GetDeploymentInstanceInput";
import { GetDeploymentInstanceOutput } from "./types/GetDeploymentInstanceOutput";
import { GetDeploymentOutput } from "./types/GetDeploymentOutput";
import { GetDeploymentTargetInput } from "./types/GetDeploymentTargetInput";
import { GetDeploymentTargetOutput } from "./types/GetDeploymentTargetOutput";
import { GetOnPremisesInstanceInput } from "./types/GetOnPremisesInstanceInput";
import { GetOnPremisesInstanceOutput } from "./types/GetOnPremisesInstanceOutput";
import { GitHubAccountTokenDoesNotExistException } from "./types/GitHubAccountTokenDoesNotExistException";
import { GitHubAccountTokenNameRequiredException } from "./types/GitHubAccountTokenNameRequiredException";
import { IamArnRequiredException } from "./types/IamArnRequiredException";
import { IamSessionArnAlreadyRegisteredException } from "./types/IamSessionArnAlreadyRegisteredException";
import { IamUserArnAlreadyRegisteredException } from "./types/IamUserArnAlreadyRegisteredException";
import { IamUserArnRequiredException } from "./types/IamUserArnRequiredException";
import { InstanceDoesNotExistException } from "./types/InstanceDoesNotExistException";
import { InstanceIdRequiredException } from "./types/InstanceIdRequiredException";
import { InstanceLimitExceededException } from "./types/InstanceLimitExceededException";
import { InstanceNameAlreadyRegisteredException } from "./types/InstanceNameAlreadyRegisteredException";
import { InstanceNameRequiredException } from "./types/InstanceNameRequiredException";
import { InstanceNotRegisteredException } from "./types/InstanceNotRegisteredException";
import { InvalidAlarmConfigException } from "./types/InvalidAlarmConfigException";
import { InvalidApplicationNameException } from "./types/InvalidApplicationNameException";
import { InvalidArnException } from "./types/InvalidArnException";
import { InvalidAutoRollbackConfigException } from "./types/InvalidAutoRollbackConfigException";
import { InvalidAutoScalingGroupException } from "./types/InvalidAutoScalingGroupException";
import { InvalidBlueGreenDeploymentConfigurationException } from "./types/InvalidBlueGreenDeploymentConfigurationException";
import { InvalidBucketNameFilterException } from "./types/InvalidBucketNameFilterException";
import { InvalidComputePlatformException } from "./types/InvalidComputePlatformException";
import { InvalidDeployedStateFilterException } from "./types/InvalidDeployedStateFilterException";
import { InvalidDeploymentConfigNameException } from "./types/InvalidDeploymentConfigNameException";
import { InvalidDeploymentGroupNameException } from "./types/InvalidDeploymentGroupNameException";
import { InvalidDeploymentIdException } from "./types/InvalidDeploymentIdException";
import { InvalidDeploymentInstanceTypeException } from "./types/InvalidDeploymentInstanceTypeException";
import { InvalidDeploymentStatusException } from "./types/InvalidDeploymentStatusException";
import { InvalidDeploymentStyleException } from "./types/InvalidDeploymentStyleException";
import { InvalidDeploymentTargetIdException } from "./types/InvalidDeploymentTargetIdException";
import { InvalidDeploymentWaitTypeException } from "./types/InvalidDeploymentWaitTypeException";
import { InvalidEC2TagCombinationException } from "./types/InvalidEC2TagCombinationException";
import { InvalidEC2TagException } from "./types/InvalidEC2TagException";
import { InvalidECSServiceException } from "./types/InvalidECSServiceException";
import { InvalidFileExistsBehaviorException } from "./types/InvalidFileExistsBehaviorException";
import { InvalidGitHubAccountTokenException } from "./types/InvalidGitHubAccountTokenException";
import { InvalidGitHubAccountTokenNameException } from "./types/InvalidGitHubAccountTokenNameException";
import { InvalidIamSessionArnException } from "./types/InvalidIamSessionArnException";
import { InvalidIamUserArnException } from "./types/InvalidIamUserArnException";
import { InvalidIgnoreApplicationStopFailuresValueException } from "./types/InvalidIgnoreApplicationStopFailuresValueException";
import { InvalidInputException } from "./types/InvalidInputException";
import { InvalidInstanceNameException } from "./types/InvalidInstanceNameException";
import { InvalidInstanceStatusException } from "./types/InvalidInstanceStatusException";
import { InvalidInstanceTypeException } from "./types/InvalidInstanceTypeException";
import { InvalidKeyPrefixFilterException } from "./types/InvalidKeyPrefixFilterException";
import { InvalidLifecycleEventHookExecutionIdException } from "./types/InvalidLifecycleEventHookExecutionIdException";
import { InvalidLifecycleEventHookExecutionStatusException } from "./types/InvalidLifecycleEventHookExecutionStatusException";
import { InvalidLoadBalancerInfoException } from "./types/InvalidLoadBalancerInfoException";
import { InvalidMinimumHealthyHostValueException } from "./types/InvalidMinimumHealthyHostValueException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidOnPremisesTagCombinationException } from "./types/InvalidOnPremisesTagCombinationException";
import { InvalidOperationException } from "./types/InvalidOperationException";
import { InvalidRegistrationStatusException } from "./types/InvalidRegistrationStatusException";
import { InvalidRevisionException } from "./types/InvalidRevisionException";
import { InvalidRoleException } from "./types/InvalidRoleException";
import { InvalidSortByException } from "./types/InvalidSortByException";
import { InvalidSortOrderException } from "./types/InvalidSortOrderException";
import { InvalidTagException } from "./types/InvalidTagException";
import { InvalidTagFilterException } from "./types/InvalidTagFilterException";
import { InvalidTagsToAddException } from "./types/InvalidTagsToAddException";
import { InvalidTargetFilterNameException } from "./types/InvalidTargetFilterNameException";
import { InvalidTargetGroupPairException } from "./types/InvalidTargetGroupPairException";
import { InvalidTargetInstancesException } from "./types/InvalidTargetInstancesException";
import { InvalidTimeRangeException } from "./types/InvalidTimeRangeException";
import { InvalidTrafficRoutingConfigurationException } from "./types/InvalidTrafficRoutingConfigurationException";
import { InvalidTriggerConfigException } from "./types/InvalidTriggerConfigException";
import { InvalidUpdateOutdatedInstancesOnlyValueException } from "./types/InvalidUpdateOutdatedInstancesOnlyValueException";
import { LifecycleEventAlreadyCompletedException } from "./types/LifecycleEventAlreadyCompletedException";
import { LifecycleHookLimitExceededException } from "./types/LifecycleHookLimitExceededException";
import { ListApplicationRevisionsInput } from "./types/ListApplicationRevisionsInput";
import { ListApplicationRevisionsOutput } from "./types/ListApplicationRevisionsOutput";
import { ListApplicationsInput } from "./types/ListApplicationsInput";
import { ListApplicationsOutput } from "./types/ListApplicationsOutput";
import { ListDeploymentConfigsInput } from "./types/ListDeploymentConfigsInput";
import { ListDeploymentConfigsOutput } from "./types/ListDeploymentConfigsOutput";
import { ListDeploymentGroupsInput } from "./types/ListDeploymentGroupsInput";
import { ListDeploymentGroupsOutput } from "./types/ListDeploymentGroupsOutput";
import { ListDeploymentInstancesInput } from "./types/ListDeploymentInstancesInput";
import { ListDeploymentInstancesOutput } from "./types/ListDeploymentInstancesOutput";
import { ListDeploymentTargetsInput } from "./types/ListDeploymentTargetsInput";
import { ListDeploymentTargetsOutput } from "./types/ListDeploymentTargetsOutput";
import { ListDeploymentsInput } from "./types/ListDeploymentsInput";
import { ListDeploymentsOutput } from "./types/ListDeploymentsOutput";
import { ListGitHubAccountTokenNamesInput } from "./types/ListGitHubAccountTokenNamesInput";
import { ListGitHubAccountTokenNamesOutput } from "./types/ListGitHubAccountTokenNamesOutput";
import { ListOnPremisesInstancesInput } from "./types/ListOnPremisesInstancesInput";
import { ListOnPremisesInstancesOutput } from "./types/ListOnPremisesInstancesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { MultipleIamArnsProvidedException } from "./types/MultipleIamArnsProvidedException";
import { OperationNotSupportedException } from "./types/OperationNotSupportedException";
import { PutLifecycleEventHookExecutionStatusInput } from "./types/PutLifecycleEventHookExecutionStatusInput";
import { PutLifecycleEventHookExecutionStatusOutput } from "./types/PutLifecycleEventHookExecutionStatusOutput";
import { RegisterApplicationRevisionInput } from "./types/RegisterApplicationRevisionInput";
import { RegisterApplicationRevisionOutput } from "./types/RegisterApplicationRevisionOutput";
import { RegisterOnPremisesInstanceInput } from "./types/RegisterOnPremisesInstanceInput";
import { RegisterOnPremisesInstanceOutput } from "./types/RegisterOnPremisesInstanceOutput";
import { RemoveTagsFromOnPremisesInstancesInput } from "./types/RemoveTagsFromOnPremisesInstancesInput";
import { RemoveTagsFromOnPremisesInstancesOutput } from "./types/RemoveTagsFromOnPremisesInstancesOutput";
import { ResourceArnRequiredException } from "./types/ResourceArnRequiredException";
import { ResourceValidationException } from "./types/ResourceValidationException";
import { RevisionDoesNotExistException } from "./types/RevisionDoesNotExistException";
import { RevisionRequiredException } from "./types/RevisionRequiredException";
import { RoleRequiredException } from "./types/RoleRequiredException";
import { SkipWaitTimeForInstanceTerminationInput } from "./types/SkipWaitTimeForInstanceTerminationInput";
import { SkipWaitTimeForInstanceTerminationOutput } from "./types/SkipWaitTimeForInstanceTerminationOutput";
import { StopDeploymentInput } from "./types/StopDeploymentInput";
import { StopDeploymentOutput } from "./types/StopDeploymentOutput";
import { TagLimitExceededException } from "./types/TagLimitExceededException";
import { TagRequiredException } from "./types/TagRequiredException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TagSetListLimitExceededException } from "./types/TagSetListLimitExceededException";
import { ThrottlingException } from "./types/ThrottlingException";
import { TriggerTargetsLimitExceededException } from "./types/TriggerTargetsLimitExceededException";
import { UnsupportedActionForDeploymentTypeException } from "./types/UnsupportedActionForDeploymentTypeException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateApplicationInput } from "./types/UpdateApplicationInput";
import { UpdateApplicationOutput } from "./types/UpdateApplicationOutput";
import { UpdateDeploymentGroupInput } from "./types/UpdateDeploymentGroupInput";
import { UpdateDeploymentGroupOutput } from "./types/UpdateDeploymentGroupOutput";
import { AddTagsToOnPremisesInstancesCommand } from "./commands/AddTagsToOnPremisesInstancesCommand";
import { BatchGetApplicationRevisionsCommand } from "./commands/BatchGetApplicationRevisionsCommand";
import { BatchGetApplicationsCommand } from "./commands/BatchGetApplicationsCommand";
import { BatchGetDeploymentGroupsCommand } from "./commands/BatchGetDeploymentGroupsCommand";
import { BatchGetDeploymentInstancesCommand } from "./commands/BatchGetDeploymentInstancesCommand";
import { BatchGetDeploymentTargetsCommand } from "./commands/BatchGetDeploymentTargetsCommand";
import { BatchGetDeploymentsCommand } from "./commands/BatchGetDeploymentsCommand";
import { BatchGetOnPremisesInstancesCommand } from "./commands/BatchGetOnPremisesInstancesCommand";
import { ContinueDeploymentCommand } from "./commands/ContinueDeploymentCommand";
import { CreateApplicationCommand } from "./commands/CreateApplicationCommand";
import { CreateDeploymentCommand } from "./commands/CreateDeploymentCommand";
import { CreateDeploymentConfigCommand } from "./commands/CreateDeploymentConfigCommand";
import { CreateDeploymentGroupCommand } from "./commands/CreateDeploymentGroupCommand";
import { DeleteApplicationCommand } from "./commands/DeleteApplicationCommand";
import { DeleteDeploymentConfigCommand } from "./commands/DeleteDeploymentConfigCommand";
import { DeleteDeploymentGroupCommand } from "./commands/DeleteDeploymentGroupCommand";
import { DeleteGitHubAccountTokenCommand } from "./commands/DeleteGitHubAccountTokenCommand";
import { DeregisterOnPremisesInstanceCommand } from "./commands/DeregisterOnPremisesInstanceCommand";
import { GetApplicationCommand } from "./commands/GetApplicationCommand";
import { GetApplicationRevisionCommand } from "./commands/GetApplicationRevisionCommand";
import { GetDeploymentCommand } from "./commands/GetDeploymentCommand";
import { GetDeploymentConfigCommand } from "./commands/GetDeploymentConfigCommand";
import { GetDeploymentGroupCommand } from "./commands/GetDeploymentGroupCommand";
import { GetDeploymentInstanceCommand } from "./commands/GetDeploymentInstanceCommand";
import { GetDeploymentTargetCommand } from "./commands/GetDeploymentTargetCommand";
import { GetOnPremisesInstanceCommand } from "./commands/GetOnPremisesInstanceCommand";
import { ListApplicationRevisionsCommand } from "./commands/ListApplicationRevisionsCommand";
import { ListApplicationsCommand } from "./commands/ListApplicationsCommand";
import { ListDeploymentConfigsCommand } from "./commands/ListDeploymentConfigsCommand";
import { ListDeploymentGroupsCommand } from "./commands/ListDeploymentGroupsCommand";
import { ListDeploymentInstancesCommand } from "./commands/ListDeploymentInstancesCommand";
import { ListDeploymentTargetsCommand } from "./commands/ListDeploymentTargetsCommand";
import { ListDeploymentsCommand } from "./commands/ListDeploymentsCommand";
import { ListGitHubAccountTokenNamesCommand } from "./commands/ListGitHubAccountTokenNamesCommand";
import { ListOnPremisesInstancesCommand } from "./commands/ListOnPremisesInstancesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PutLifecycleEventHookExecutionStatusCommand } from "./commands/PutLifecycleEventHookExecutionStatusCommand";
import { RegisterApplicationRevisionCommand } from "./commands/RegisterApplicationRevisionCommand";
import { RegisterOnPremisesInstanceCommand } from "./commands/RegisterOnPremisesInstanceCommand";
import { RemoveTagsFromOnPremisesInstancesCommand } from "./commands/RemoveTagsFromOnPremisesInstancesCommand";
import { SkipWaitTimeForInstanceTerminationCommand } from "./commands/SkipWaitTimeForInstanceTerminationCommand";
import { StopDeploymentCommand } from "./commands/StopDeploymentCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommand } from "./commands/UpdateApplicationCommand";
import { UpdateDeploymentGroupCommand } from "./commands/UpdateDeploymentGroupCommand";

export class CodeDeploy extends CodeDeployClient {
  /**
   * <p>Adds tags to on-premises instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InstanceNameRequiredException} <p>An on-premises instance name was not specified.</p>
   *   - {InvalidInstanceNameException} <p>The on-premises instance name was specified in an invalid format.</p>
   *   - {TagRequiredException} <p>A tag was not specified.</p>
   *   - {InvalidTagException} <p>The tag was specified in an invalid format.</p>
   *   - {TagLimitExceededException} <p>The maximum allowed number of tags was exceeded.</p>
   *   - {InstanceLimitExceededException} <p>The maximum number of allowed on-premises instances in a single call was exceeded.</p>
   *   - {InstanceNotRegisteredException} <p>The specified on-premises instance is not registered.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesInput
  ): Promise<AddTagsToOnPremisesInstancesOutput>;
  public addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesInput,
    cb: (err: any, data?: AddTagsToOnPremisesInstancesOutput) => void
  ): void;
  public addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesInput,
    cb?: (err: any, data?: AddTagsToOnPremisesInstancesOutput) => void
  ): Promise<AddTagsToOnPremisesInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsToOnPremisesInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {RevisionRequiredException} <p>The revision ID was not specified.</p>
   *   - {InvalidRevisionException} <p>The revision was specified in an invalid format.</p>
   *   - {BatchLimitExceededException} <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsInput
  ): Promise<BatchGetApplicationRevisionsOutput>;
  public batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsInput,
    cb: (err: any, data?: BatchGetApplicationRevisionsOutput) => void
  ): void;
  public batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsInput,
    cb?: (err: any, data?: BatchGetApplicationRevisionsOutput) => void
  ): Promise<BatchGetApplicationRevisionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetApplicationRevisionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about one or more applications. The maximum number of applications that can be returned is 25.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {BatchLimitExceededException} <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetApplications(
    args: BatchGetApplicationsInput
  ): Promise<BatchGetApplicationsOutput>;
  public batchGetApplications(
    args: BatchGetApplicationsInput,
    cb: (err: any, data?: BatchGetApplicationsOutput) => void
  ): void;
  public batchGetApplications(
    args: BatchGetApplicationsInput,
    cb?: (err: any, data?: BatchGetApplicationsOutput) => void
  ): Promise<BatchGetApplicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetApplicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about one or more deployment groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {DeploymentGroupNameRequiredException} <p>The deployment group name was not specified.</p>
   *   - {InvalidDeploymentGroupNameException} <p>The deployment group name was specified in an invalid format.</p>
   *   - {BatchLimitExceededException} <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
   *   - {DeploymentConfigDoesNotExistException} <p>The deployment configuration does not exist with the IAM user or AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsInput
  ): Promise<BatchGetDeploymentGroupsOutput>;
  public batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsInput,
    cb: (err: any, data?: BatchGetDeploymentGroupsOutput) => void
  ): void;
  public batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsInput,
    cb?: (err: any, data?: BatchGetDeploymentGroupsOutput) => void
  ): Promise<BatchGetDeploymentGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetDeploymentGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and AWS Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {InstanceIdRequiredException} <p>The instance ID was not specified.</p>
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {InvalidInstanceNameException} <p>The on-premises instance name was specified in an invalid format.</p>
   *   - {BatchLimitExceededException} <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
   *   - {InvalidComputePlatformException} <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code> or <code>Server</code>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesInput
  ): Promise<BatchGetDeploymentInstancesOutput>;
  public batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesInput,
    cb: (err: any, data?: BatchGetDeploymentInstancesOutput) => void
  ): void;
  public batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesInput,
    cb?: (err: any, data?: BatchGetDeploymentInstancesOutput) => void
  ): Promise<BatchGetDeploymentInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetDeploymentInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about EC2 instance targets. </p> </li> <li> <p> <b>AWS Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentNotStartedException} <p>The specified deployment has not started.</p>
   *   - {DeploymentTargetIdRequiredException} <p> A deployment target ID was not provided. </p>
   *   - {InvalidDeploymentTargetIdException} <p> The target ID provided was not valid. </p>
   *   - {DeploymentTargetDoesNotExistException} <p> The provided target ID does not belong to the attempted deployment. </p>
   *   - {DeploymentTargetListSizeExceededException} <p> The maximum number of targets that can be associated with an Amazon ECS or AWS Lambda deployment was exceeded. The target list of both types of deployments must have exactly one item. This exception does not apply to EC2/On-premises deployments. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsInput
  ): Promise<BatchGetDeploymentTargetsOutput>;
  public batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsInput,
    cb: (err: any, data?: BatchGetDeploymentTargetsOutput) => void
  ): void;
  public batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsInput,
    cb?: (err: any, data?: BatchGetDeploymentTargetsOutput) => void
  ): Promise<BatchGetDeploymentTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetDeploymentTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {BatchLimitExceededException} <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetDeployments(
    args: BatchGetDeploymentsInput
  ): Promise<BatchGetDeploymentsOutput>;
  public batchGetDeployments(
    args: BatchGetDeploymentsInput,
    cb: (err: any, data?: BatchGetDeploymentsOutput) => void
  ): void;
  public batchGetDeployments(
    args: BatchGetDeploymentsInput,
    cb?: (err: any, data?: BatchGetDeploymentsOutput) => void
  ): Promise<BatchGetDeploymentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetDeploymentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InstanceNameRequiredException} <p>An on-premises instance name was not specified.</p>
   *   - {InvalidInstanceNameException} <p>The on-premises instance name was specified in an invalid format.</p>
   *   - {BatchLimitExceededException} <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesInput
  ): Promise<BatchGetOnPremisesInstancesOutput>;
  public batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesInput,
    cb: (err: any, data?: BatchGetOnPremisesInstancesOutput) => void
  ): void;
  public batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesInput,
    cb?: (err: any, data?: BatchGetOnPremisesInstancesOutput) => void
  ): Promise<BatchGetOnPremisesInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetOnPremisesInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentAlreadyCompletedException} <p>The deployment is already complete.</p>
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {DeploymentIsNotInReadyStateException} <p>The deployment does not have a status of Ready and can't continue yet.</p>
   *   - {UnsupportedActionForDeploymentTypeException} <p>A call was submitted that is not supported for the specified deployment type.</p>
   *   - {InvalidDeploymentWaitTypeException} <p> The wait type is invalid. </p>
   *   - {InvalidDeploymentStatusException} <p>The specified deployment status doesn't exist or cannot be determined.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public continueDeployment(
    args: ContinueDeploymentInput
  ): Promise<ContinueDeploymentOutput>;
  public continueDeployment(
    args: ContinueDeploymentInput,
    cb: (err: any, data?: ContinueDeploymentOutput) => void
  ): void;
  public continueDeployment(
    args: ContinueDeploymentInput,
    cb?: (err: any, data?: ContinueDeploymentOutput) => void
  ): Promise<ContinueDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ContinueDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationAlreadyExistsException} <p>An application with the specified name with the IAM user or AWS account already exists.</p>
   *   - {ApplicationLimitExceededException} <p>More applications were attempted to be created than are allowed.</p>
   *   - {InvalidComputePlatformException} <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code> or <code>Server</code>.</p>
   *   - {InvalidTagsToAddException} <p> The specified tags are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApplication(
    args: CreateApplicationInput
  ): Promise<CreateApplicationOutput>;
  public createApplication(
    args: CreateApplicationInput,
    cb: (err: any, data?: CreateApplicationOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationInput,
    cb?: (err: any, data?: CreateApplicationOutput) => void
  ): Promise<CreateApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deploys an application revision through the specified deployment group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {DeploymentGroupNameRequiredException} <p>The deployment group name was not specified.</p>
   *   - {InvalidDeploymentGroupNameException} <p>The deployment group name was specified in an invalid format.</p>
   *   - {DeploymentGroupDoesNotExistException} <p>The named deployment group with the IAM user or AWS account does not exist.</p>
   *   - {RevisionRequiredException} <p>The revision ID was not specified.</p>
   *   - {RevisionDoesNotExistException} <p>The named revision does not exist with the IAM user or AWS account.</p>
   *   - {InvalidRevisionException} <p>The revision was specified in an invalid format.</p>
   *   - {InvalidDeploymentConfigNameException} <p>The deployment configuration name was specified in an invalid format.</p>
   *   - {DeploymentConfigDoesNotExistException} <p>The deployment configuration does not exist with the IAM user or AWS account.</p>
   *   - {DescriptionTooLongException} <p>The description is too long.</p>
   *   - {DeploymentLimitExceededException} <p>The number of allowed deployments was exceeded.</p>
   *   - {InvalidTargetInstancesException} <p>The target instance configuration is invalid. Possible causes include:</p> <ul> <li> <p>Configuration data for target instances was entered for an in-place deployment.</p> </li> <li> <p>The limit of 10 tags for a tag type was exceeded.</p> </li> <li> <p>The combined length of the tag names exceeded the limit. </p> </li> <li> <p>A specified tag is not currently applied to any instances.</p> </li> </ul>
   *   - {InvalidAutoRollbackConfigException} <p>The automatic rollback configuration was specified in an invalid format. For example, automatic rollback is enabled, but an invalid triggering event type or no event types were listed.</p>
   *   - {InvalidLoadBalancerInfoException} <p>An invalid load balancer name, or no load balancer name, was specified.</p>
   *   - {InvalidFileExistsBehaviorException} <p>An invalid fileExistsBehavior option was specified to determine how AWS CodeDeploy handles files or directories that already exist in a deployment target location, but weren't part of the previous successful deployment. Valid values include "DISALLOW," "OVERWRITE," and "RETAIN."</p>
   *   - {InvalidRoleException} <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Amazon EC2 Auto Scaling.</p>
   *   - {InvalidAutoScalingGroupException} <p>The Auto Scaling group was specified in an invalid format or does not exist.</p>
   *   - {ThrottlingException} <p>An API function was called too frequently.</p>
   *   - {InvalidUpdateOutdatedInstancesOnlyValueException} <p>The UpdateOutdatedInstancesOnly value is invalid. For AWS Lambda deployments, <code>false</code> is expected. For EC2/On-premises deployments, <code>true</code> or <code>false</code> is expected.</p>
   *   - {InvalidIgnoreApplicationStopFailuresValueException} <p>The IgnoreApplicationStopFailures value is invalid. For AWS Lambda deployments, <code>false</code> is expected. For EC2/On-premises deployments, <code>true</code> or <code>false</code> is expected.</p>
   *   - {InvalidGitHubAccountTokenException} <p>The GitHub token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeployment(
    args: CreateDeploymentInput
  ): Promise<CreateDeploymentOutput>;
  public createDeployment(
    args: CreateDeploymentInput,
    cb: (err: any, data?: CreateDeploymentOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentInput,
    cb?: (err: any, data?: CreateDeploymentOutput) => void
  ): Promise<CreateDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Creates a deployment configuration. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDeploymentConfigNameException} <p>The deployment configuration name was specified in an invalid format.</p>
   *   - {DeploymentConfigNameRequiredException} <p>The deployment configuration name was not specified.</p>
   *   - {DeploymentConfigAlreadyExistsException} <p>A deployment configuration with the specified name with the IAM user or AWS account already exists .</p>
   *   - {InvalidMinimumHealthyHostValueException} <p>The minimum healthy instance value was specified in an invalid format.</p>
   *   - {DeploymentConfigLimitExceededException} <p>The deployment configurations limit was exceeded.</p>
   *   - {InvalidComputePlatformException} <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code> or <code>Server</code>.</p>
   *   - {InvalidTrafficRoutingConfigurationException} <p> The configuration that specifies how traffic is routed during a deployment is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeploymentConfig(
    args: CreateDeploymentConfigInput
  ): Promise<CreateDeploymentConfigOutput>;
  public createDeploymentConfig(
    args: CreateDeploymentConfigInput,
    cb: (err: any, data?: CreateDeploymentConfigOutput) => void
  ): void;
  public createDeploymentConfig(
    args: CreateDeploymentConfigInput,
    cb?: (err: any, data?: CreateDeploymentConfigOutput) => void
  ): Promise<CreateDeploymentConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeploymentConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a deployment group to which application revisions are deployed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {DeploymentGroupNameRequiredException} <p>The deployment group name was not specified.</p>
   *   - {InvalidDeploymentGroupNameException} <p>The deployment group name was specified in an invalid format.</p>
   *   - {DeploymentGroupAlreadyExistsException} <p>A deployment group with the specified name with the IAM user or AWS account already exists.</p>
   *   - {InvalidEC2TagException} <p>The tag was specified in an invalid format.</p>
   *   - {InvalidTagException} <p>The tag was specified in an invalid format.</p>
   *   - {InvalidAutoScalingGroupException} <p>The Auto Scaling group was specified in an invalid format or does not exist.</p>
   *   - {InvalidDeploymentConfigNameException} <p>The deployment configuration name was specified in an invalid format.</p>
   *   - {DeploymentConfigDoesNotExistException} <p>The deployment configuration does not exist with the IAM user or AWS account.</p>
   *   - {RoleRequiredException} <p>The role ID was not specified.</p>
   *   - {InvalidRoleException} <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Amazon EC2 Auto Scaling.</p>
   *   - {DeploymentGroupLimitExceededException} <p> The deployment groups limit was exceeded.</p>
   *   - {LifecycleHookLimitExceededException} <p>The limit for lifecycle hooks was exceeded.</p>
   *   - {InvalidTriggerConfigException} <p>The trigger was specified in an invalid format.</p>
   *   - {TriggerTargetsLimitExceededException} <p>The maximum allowed number of triggers was exceeded.</p>
   *   - {InvalidAlarmConfigException} <p>The format of the alarm configuration is invalid. Possible causes include:</p> <ul> <li> <p>The alarm list is null.</p> </li> <li> <p>The alarm object is null.</p> </li> <li> <p>The alarm name is empty or null or exceeds the limit of 255 characters.</p> </li> <li> <p>Two alarms with the same name have been specified.</p> </li> <li> <p>The alarm configuration is enabled, but the alarm list is empty.</p> </li> </ul>
   *   - {AlarmsLimitExceededException} <p>The maximum number of alarms for a deployment group (10) was exceeded.</p>
   *   - {InvalidAutoRollbackConfigException} <p>The automatic rollback configuration was specified in an invalid format. For example, automatic rollback is enabled, but an invalid triggering event type or no event types were listed.</p>
   *   - {InvalidLoadBalancerInfoException} <p>An invalid load balancer name, or no load balancer name, was specified.</p>
   *   - {InvalidDeploymentStyleException} <p>An invalid deployment style was specified. Valid deployment types include "IN_PLACE" and "BLUE_GREEN." Valid deployment options include "WITH_TRAFFIC_CONTROL" and "WITHOUT_TRAFFIC_CONTROL."</p>
   *   - {InvalidBlueGreenDeploymentConfigurationException} <p>The configuration for the blue/green deployment group was provided in an invalid format. For information about deployment configuration format, see <a>CreateDeploymentConfig</a>.</p>
   *   - {InvalidEC2TagCombinationException} <p>A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of these data types can be used in a single call.</p>
   *   - {InvalidOnPremisesTagCombinationException} <p>A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet, but only one of these data types can be used in a single call.</p>
   *   - {TagSetListLimitExceededException} <p>The number of tag groups included in the tag set list exceeded the maximum allowed limit of 3.</p>
   *   - {InvalidInputException} <p>The input was specified in an invalid format.</p>
   *   - {ThrottlingException} <p>An API function was called too frequently.</p>
   *   - {InvalidECSServiceException} <p> The Amazon ECS service identifier is not valid. </p>
   *   - {InvalidTargetGroupPairException} <p> A target group pair associated with this deployment is not valid. </p>
   *   - {ECSServiceMappingLimitExceededException} <p> The Amazon ECS service is associated with more than one deployment groups. An Amazon ECS service can be associated with only one deployment group. </p>
   *   - {InvalidTagsToAddException} <p> The specified tags are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeploymentGroup(
    args: CreateDeploymentGroupInput
  ): Promise<CreateDeploymentGroupOutput>;
  public createDeploymentGroup(
    args: CreateDeploymentGroupInput,
    cb: (err: any, data?: CreateDeploymentGroupOutput) => void
  ): void;
  public createDeploymentGroup(
    args: CreateDeploymentGroupInput,
    cb?: (err: any, data?: CreateDeploymentGroupOutput) => void
  ): Promise<CreateDeploymentGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeploymentGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {InvalidRoleException} <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Amazon EC2 Auto Scaling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplication(
    args: DeleteApplicationInput
  ): Promise<DeleteApplicationOutput>;
  public deleteApplication(
    args: DeleteApplicationInput,
    cb: (err: any, data?: DeleteApplicationOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationInput,
    cb?: (err: any, data?: DeleteApplicationOutput) => void
  ): Promise<DeleteApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDeploymentConfigNameException} <p>The deployment configuration name was specified in an invalid format.</p>
   *   - {DeploymentConfigNameRequiredException} <p>The deployment configuration name was not specified.</p>
   *   - {DeploymentConfigInUseException} <p>The deployment configuration is still in use.</p>
   *   - {InvalidOperationException} <p>An invalid operation was detected.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDeploymentConfig(
    args: DeleteDeploymentConfigInput
  ): Promise<DeleteDeploymentConfigOutput>;
  public deleteDeploymentConfig(
    args: DeleteDeploymentConfigInput,
    cb: (err: any, data?: DeleteDeploymentConfigOutput) => void
  ): void;
  public deleteDeploymentConfig(
    args: DeleteDeploymentConfigInput,
    cb?: (err: any, data?: DeleteDeploymentConfigOutput) => void
  ): Promise<DeleteDeploymentConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDeploymentConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a deployment group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {DeploymentGroupNameRequiredException} <p>The deployment group name was not specified.</p>
   *   - {InvalidDeploymentGroupNameException} <p>The deployment group name was specified in an invalid format.</p>
   *   - {InvalidRoleException} <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Amazon EC2 Auto Scaling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDeploymentGroup(
    args: DeleteDeploymentGroupInput
  ): Promise<DeleteDeploymentGroupOutput>;
  public deleteDeploymentGroup(
    args: DeleteDeploymentGroupInput,
    cb: (err: any, data?: DeleteDeploymentGroupOutput) => void
  ): void;
  public deleteDeploymentGroup(
    args: DeleteDeploymentGroupInput,
    cb?: (err: any, data?: DeleteDeploymentGroupOutput) => void
  ): Promise<DeleteDeploymentGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDeploymentGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a GitHub account connection.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {GitHubAccountTokenNameRequiredException} <p>The call is missing a required GitHub account connection name.</p>
   *   - {GitHubAccountTokenDoesNotExistException} <p>No GitHub account connection exists with the named specified in the call.</p>
   *   - {InvalidGitHubAccountTokenNameException} <p>The format of the specified GitHub account connection name is invalid.</p>
   *   - {ResourceValidationException} <p>The specified resource could not be validated.</p>
   *   - {OperationNotSupportedException} <p>The API used does not support the deployment.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenInput
  ): Promise<DeleteGitHubAccountTokenOutput>;
  public deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenInput,
    cb: (err: any, data?: DeleteGitHubAccountTokenOutput) => void
  ): void;
  public deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenInput,
    cb?: (err: any, data?: DeleteGitHubAccountTokenOutput) => void
  ): Promise<DeleteGitHubAccountTokenOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGitHubAccountTokenCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters an on-premises instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InstanceNameRequiredException} <p>An on-premises instance name was not specified.</p>
   *   - {InvalidInstanceNameException} <p>The on-premises instance name was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceInput
  ): Promise<DeregisterOnPremisesInstanceOutput>;
  public deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceInput,
    cb: (err: any, data?: DeregisterOnPremisesInstanceOutput) => void
  ): void;
  public deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceInput,
    cb?: (err: any, data?: DeregisterOnPremisesInstanceOutput) => void
  ): Promise<DeregisterOnPremisesInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterOnPremisesInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApplication(
    args: GetApplicationInput
  ): Promise<GetApplicationOutput>;
  public getApplication(
    args: GetApplicationInput,
    cb: (err: any, data?: GetApplicationOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationInput,
    cb?: (err: any, data?: GetApplicationOutput) => void
  ): Promise<GetApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about an application revision.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {RevisionDoesNotExistException} <p>The named revision does not exist with the IAM user or AWS account.</p>
   *   - {RevisionRequiredException} <p>The revision ID was not specified.</p>
   *   - {InvalidRevisionException} <p>The revision was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApplicationRevision(
    args: GetApplicationRevisionInput
  ): Promise<GetApplicationRevisionOutput>;
  public getApplicationRevision(
    args: GetApplicationRevisionInput,
    cb: (err: any, data?: GetApplicationRevisionOutput) => void
  ): void;
  public getApplicationRevision(
    args: GetApplicationRevisionInput,
    cb?: (err: any, data?: GetApplicationRevisionOutput) => void
  ): Promise<GetApplicationRevisionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApplicationRevisionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeployment(args: GetDeploymentInput): Promise<GetDeploymentOutput>;
  public getDeployment(
    args: GetDeploymentInput,
    cb: (err: any, data?: GetDeploymentOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentInput,
    cb?: (err: any, data?: GetDeploymentOutput) => void
  ): Promise<GetDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a deployment configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDeploymentConfigNameException} <p>The deployment configuration name was specified in an invalid format.</p>
   *   - {DeploymentConfigNameRequiredException} <p>The deployment configuration name was not specified.</p>
   *   - {DeploymentConfigDoesNotExistException} <p>The deployment configuration does not exist with the IAM user or AWS account.</p>
   *   - {InvalidComputePlatformException} <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code> or <code>Server</code>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeploymentConfig(
    args: GetDeploymentConfigInput
  ): Promise<GetDeploymentConfigOutput>;
  public getDeploymentConfig(
    args: GetDeploymentConfigInput,
    cb: (err: any, data?: GetDeploymentConfigOutput) => void
  ): void;
  public getDeploymentConfig(
    args: GetDeploymentConfigInput,
    cb?: (err: any, data?: GetDeploymentConfigOutput) => void
  ): Promise<GetDeploymentConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeploymentConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a deployment group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {DeploymentGroupNameRequiredException} <p>The deployment group name was not specified.</p>
   *   - {InvalidDeploymentGroupNameException} <p>The deployment group name was specified in an invalid format.</p>
   *   - {DeploymentGroupDoesNotExistException} <p>The named deployment group with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentConfigDoesNotExistException} <p>The deployment configuration does not exist with the IAM user or AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeploymentGroup(
    args: GetDeploymentGroupInput
  ): Promise<GetDeploymentGroupOutput>;
  public getDeploymentGroup(
    args: GetDeploymentGroupInput,
    cb: (err: any, data?: GetDeploymentGroupOutput) => void
  ): void;
  public getDeploymentGroup(
    args: GetDeploymentGroupInput,
    cb?: (err: any, data?: GetDeploymentGroupOutput) => void
  ): Promise<GetDeploymentGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeploymentGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about an instance as part of a deployment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {InstanceIdRequiredException} <p>The instance ID was not specified.</p>
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {InstanceDoesNotExistException} <p>The specified instance does not exist in the deployment group.</p>
   *   - {InvalidInstanceNameException} <p>The on-premises instance name was specified in an invalid format.</p>
   *   - {InvalidComputePlatformException} <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code> or <code>Server</code>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeploymentInstance(
    args: GetDeploymentInstanceInput
  ): Promise<GetDeploymentInstanceOutput>;
  public getDeploymentInstance(
    args: GetDeploymentInstanceInput,
    cb: (err: any, data?: GetDeploymentInstanceOutput) => void
  ): void;
  public getDeploymentInstance(
    args: GetDeploymentInstanceInput,
    cb?: (err: any, data?: GetDeploymentInstanceOutput) => void
  ): Promise<GetDeploymentInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeploymentInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns information about a deployment target. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentNotStartedException} <p>The specified deployment has not started.</p>
   *   - {DeploymentTargetIdRequiredException} <p> A deployment target ID was not provided. </p>
   *   - {InvalidDeploymentTargetIdException} <p> The target ID provided was not valid. </p>
   *   - {DeploymentTargetDoesNotExistException} <p> The provided target ID does not belong to the attempted deployment. </p>
   *   - {InvalidInstanceNameException} <p>The on-premises instance name was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeploymentTarget(
    args: GetDeploymentTargetInput
  ): Promise<GetDeploymentTargetOutput>;
  public getDeploymentTarget(
    args: GetDeploymentTargetInput,
    cb: (err: any, data?: GetDeploymentTargetOutput) => void
  ): void;
  public getDeploymentTarget(
    args: GetDeploymentTargetInput,
    cb?: (err: any, data?: GetDeploymentTargetOutput) => void
  ): Promise<GetDeploymentTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeploymentTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Gets information about an on-premises instance. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InstanceNameRequiredException} <p>An on-premises instance name was not specified.</p>
   *   - {InstanceNotRegisteredException} <p>The specified on-premises instance is not registered.</p>
   *   - {InvalidInstanceNameException} <p>The on-premises instance name was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOnPremisesInstance(
    args: GetOnPremisesInstanceInput
  ): Promise<GetOnPremisesInstanceOutput>;
  public getOnPremisesInstance(
    args: GetOnPremisesInstanceInput,
    cb: (err: any, data?: GetOnPremisesInstanceOutput) => void
  ): void;
  public getOnPremisesInstance(
    args: GetOnPremisesInstanceInput,
    cb?: (err: any, data?: GetOnPremisesInstanceOutput) => void
  ): Promise<GetOnPremisesInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOnPremisesInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists information about revisions for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {InvalidSortByException} <p>The column name to sort by is either not present or was specified in an invalid format.</p>
   *   - {InvalidSortOrderException} <p>The sort order was specified in an invalid format.</p>
   *   - {InvalidBucketNameFilterException} <p>The bucket name either doesn't exist or was specified in an invalid format.</p>
   *   - {InvalidKeyPrefixFilterException} <p>The specified key prefix filter was specified in an invalid format.</p>
   *   - {BucketNameFilterRequiredException} <p>A bucket name is required, but was not provided.</p>
   *   - {InvalidDeployedStateFilterException} <p>The deployed state filter was specified in an invalid format.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApplicationRevisions(
    args: ListApplicationRevisionsInput
  ): Promise<ListApplicationRevisionsOutput>;
  public listApplicationRevisions(
    args: ListApplicationRevisionsInput,
    cb: (err: any, data?: ListApplicationRevisionsOutput) => void
  ): void;
  public listApplicationRevisions(
    args: ListApplicationRevisionsInput,
    cb?: (err: any, data?: ListApplicationRevisionsOutput) => void
  ): Promise<ListApplicationRevisionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListApplicationRevisionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the applications registered with the IAM user or AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApplications(
    args: ListApplicationsInput
  ): Promise<ListApplicationsOutput>;
  public listApplications(
    args: ListApplicationsInput,
    cb: (err: any, data?: ListApplicationsOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsInput,
    cb?: (err: any, data?: ListApplicationsOutput) => void
  ): Promise<ListApplicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListApplicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the deployment configurations with the IAM user or AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeploymentConfigs(
    args: ListDeploymentConfigsInput
  ): Promise<ListDeploymentConfigsOutput>;
  public listDeploymentConfigs(
    args: ListDeploymentConfigsInput,
    cb: (err: any, data?: ListDeploymentConfigsOutput) => void
  ): void;
  public listDeploymentConfigs(
    args: ListDeploymentConfigsInput,
    cb?: (err: any, data?: ListDeploymentConfigsOutput) => void
  ): Promise<ListDeploymentConfigsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeploymentConfigsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the deployment groups for an application registered with the IAM user or AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeploymentGroups(
    args: ListDeploymentGroupsInput
  ): Promise<ListDeploymentGroupsOutput>;
  public listDeploymentGroups(
    args: ListDeploymentGroupsInput,
    cb: (err: any, data?: ListDeploymentGroupsOutput) => void
  ): void;
  public listDeploymentGroups(
    args: ListDeploymentGroupsInput,
    cb?: (err: any, data?: ListDeploymentGroupsOutput) => void
  ): Promise<ListDeploymentGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeploymentGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <note> <p> The newer BatchGetDeploymentTargets should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or AWS Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or AWS account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentNotStartedException} <p>The specified deployment has not started.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format.</p>
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {InvalidInstanceStatusException} <p>The specified instance status does not exist.</p>
   *   - {InvalidInstanceTypeException} <p>An invalid instance type was specified for instances in a blue/green deployment. Valid values include "Blue" for an original environment and "Green" for a replacement environment.</p>
   *   - {InvalidDeploymentInstanceTypeException} <p>An instance type was specified for an in-place deployment. Instance types are supported for blue/green deployments only.</p>
   *   - {InvalidTargetFilterNameException} <p> The target filter name is invalid. </p>
   *   - {InvalidComputePlatformException} <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code> or <code>Server</code>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeploymentInstances(
    args: ListDeploymentInstancesInput
  ): Promise<ListDeploymentInstancesOutput>;
  public listDeploymentInstances(
    args: ListDeploymentInstancesInput,
    cb: (err: any, data?: ListDeploymentInstancesOutput) => void
  ): void;
  public listDeploymentInstances(
    args: ListDeploymentInstancesInput,
    cb?: (err: any, data?: ListDeploymentInstancesOutput) => void
  ): Promise<ListDeploymentInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeploymentInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns an array of target IDs that are associated a deployment. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentNotStartedException} <p>The specified deployment has not started.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format.</p>
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {InvalidInstanceStatusException} <p>The specified instance status does not exist.</p>
   *   - {InvalidInstanceTypeException} <p>An invalid instance type was specified for instances in a blue/green deployment. Valid values include "Blue" for an original environment and "Green" for a replacement environment.</p>
   *   - {InvalidDeploymentInstanceTypeException} <p>An instance type was specified for an in-place deployment. Instance types are supported for blue/green deployments only.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeploymentTargets(
    args: ListDeploymentTargetsInput
  ): Promise<ListDeploymentTargetsOutput>;
  public listDeploymentTargets(
    args: ListDeploymentTargetsInput,
    cb: (err: any, data?: ListDeploymentTargetsOutput) => void
  ): void;
  public listDeploymentTargets(
    args: ListDeploymentTargetsInput,
    cb?: (err: any, data?: ListDeploymentTargetsOutput) => void
  ): Promise<ListDeploymentTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeploymentTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the deployments in a deployment group for an application registered with the IAM user or AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {InvalidDeploymentGroupNameException} <p>The deployment group name was specified in an invalid format.</p>
   *   - {DeploymentGroupDoesNotExistException} <p>The named deployment group with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentGroupNameRequiredException} <p>The deployment group name was not specified.</p>
   *   - {InvalidTimeRangeException} <p>The specified time range was specified in an invalid format.</p>
   *   - {InvalidDeploymentStatusException} <p>The specified deployment status doesn't exist or cannot be determined.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeployments(
    args: ListDeploymentsInput
  ): Promise<ListDeploymentsOutput>;
  public listDeployments(
    args: ListDeploymentsInput,
    cb: (err: any, data?: ListDeploymentsOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsInput,
    cb?: (err: any, data?: ListDeploymentsOutput) => void
  ): Promise<ListDeploymentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeploymentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the names of stored connections to GitHub accounts.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format.</p>
   *   - {ResourceValidationException} <p>The specified resource could not be validated.</p>
   *   - {OperationNotSupportedException} <p>The API used does not support the deployment.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesInput
  ): Promise<ListGitHubAccountTokenNamesOutput>;
  public listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesInput,
    cb: (err: any, data?: ListGitHubAccountTokenNamesOutput) => void
  ): void;
  public listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesInput,
    cb?: (err: any, data?: ListGitHubAccountTokenNamesOutput) => void
  ): Promise<ListGitHubAccountTokenNamesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGitHubAccountTokenNamesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRegistrationStatusException} <p>The registration status was specified in an invalid format.</p>
   *   - {InvalidTagFilterException} <p>The tag filter was specified in an invalid format.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOnPremisesInstances(
    args: ListOnPremisesInstancesInput
  ): Promise<ListOnPremisesInstancesOutput>;
  public listOnPremisesInstances(
    args: ListOnPremisesInstancesInput,
    cb: (err: any, data?: ListOnPremisesInstancesOutput) => void
  ): void;
  public listOnPremisesInstances(
    args: ListOnPremisesInstancesInput,
    cb?: (err: any, data?: ListOnPremisesInstancesOutput) => void
  ): Promise<ListOnPremisesInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOnPremisesInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns a list of tags for the resource identified by a specified ARN. Tags are used to organize and categorize your CodeDeploy resources. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArnNotSupportedException} <p> The specified ARN is not supported. For example, it might be an ARN for a resource that is not expected. </p>
   *   - {InvalidArnException} <p> The specified ARN is not in a valid format. </p>
   *   - {ResourceArnRequiredException} <p> The ARN of a resource is required, but was not found. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Sets the result of a Lambda validation function. The function validates one or both lifecycle events (<code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>) and returns <code>Succeeded</code> or <code>Failed</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidLifecycleEventHookExecutionStatusException} <p>The result of a Lambda validation function that verifies a lifecycle event is invalid. It should return <code>Succeeded</code> or <code>Failed</code>.</p>
   *   - {InvalidLifecycleEventHookExecutionIdException} <p>A lifecycle event hook is invalid. Review the <code>hooks</code> section in your AppSpec file to ensure the lifecycle events and <code>hooks</code> functions are valid.</p>
   *   - {LifecycleEventAlreadyCompletedException} <p>An attempt to return the status of an already completed lifecycle event occurred.</p>
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {UnsupportedActionForDeploymentTypeException} <p>A call was submitted that is not supported for the specified deployment type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusInput
  ): Promise<PutLifecycleEventHookExecutionStatusOutput>;
  public putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusInput,
    cb: (err: any, data?: PutLifecycleEventHookExecutionStatusOutput) => void
  ): void;
  public putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusInput,
    cb?: (err: any, data?: PutLifecycleEventHookExecutionStatusOutput) => void
  ): Promise<PutLifecycleEventHookExecutionStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutLifecycleEventHookExecutionStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers with AWS CodeDeploy a revision for the specified application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {DescriptionTooLongException} <p>The description is too long.</p>
   *   - {RevisionRequiredException} <p>The revision ID was not specified.</p>
   *   - {InvalidRevisionException} <p>The revision was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerApplicationRevision(
    args: RegisterApplicationRevisionInput
  ): Promise<RegisterApplicationRevisionOutput>;
  public registerApplicationRevision(
    args: RegisterApplicationRevisionInput,
    cb: (err: any, data?: RegisterApplicationRevisionOutput) => void
  ): void;
  public registerApplicationRevision(
    args: RegisterApplicationRevisionInput,
    cb?: (err: any, data?: RegisterApplicationRevisionOutput) => void
  ): Promise<RegisterApplicationRevisionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterApplicationRevisionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InstanceNameAlreadyRegisteredException} <p>The specified on-premises instance name is already registered.</p>
   *   - {IamArnRequiredException} <p>No IAM ARN was included in the request. You must use an IAM session ARN or IAM user ARN in the request.</p>
   *   - {IamSessionArnAlreadyRegisteredException} <p>The request included an IAM session ARN that has already been used to register a different instance.</p>
   *   - {IamUserArnAlreadyRegisteredException} <p>The specified IAM user ARN is already registered with an on-premises instance.</p>
   *   - {InstanceNameRequiredException} <p>An on-premises instance name was not specified.</p>
   *   - {IamUserArnRequiredException} <p>An IAM user ARN was not specified.</p>
   *   - {InvalidInstanceNameException} <p>The on-premises instance name was specified in an invalid format.</p>
   *   - {InvalidIamSessionArnException} <p>The IAM session ARN was specified in an invalid format.</p>
   *   - {InvalidIamUserArnException} <p>The IAM user ARN was specified in an invalid format.</p>
   *   - {MultipleIamArnsProvidedException} <p>Both an IAM user ARN and an IAM session ARN were included in the request. Use only one ARN type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceInput
  ): Promise<RegisterOnPremisesInstanceOutput>;
  public registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceInput,
    cb: (err: any, data?: RegisterOnPremisesInstanceOutput) => void
  ): void;
  public registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceInput,
    cb?: (err: any, data?: RegisterOnPremisesInstanceOutput) => void
  ): Promise<RegisterOnPremisesInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterOnPremisesInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more tags from one or more on-premises instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InstanceNameRequiredException} <p>An on-premises instance name was not specified.</p>
   *   - {InvalidInstanceNameException} <p>The on-premises instance name was specified in an invalid format.</p>
   *   - {TagRequiredException} <p>A tag was not specified.</p>
   *   - {InvalidTagException} <p>The tag was specified in an invalid format.</p>
   *   - {TagLimitExceededException} <p>The maximum allowed number of tags was exceeded.</p>
   *   - {InstanceLimitExceededException} <p>The maximum number of allowed on-premises instances in a single call was exceeded.</p>
   *   - {InstanceNotRegisteredException} <p>The specified on-premises instance is not registered.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesInput
  ): Promise<RemoveTagsFromOnPremisesInstancesOutput>;
  public removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesInput,
    cb: (err: any, data?: RemoveTagsFromOnPremisesInstancesOutput) => void
  ): void;
  public removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesInput,
    cb?: (err: any, data?: RemoveTagsFromOnPremisesInstancesOutput) => void
  ): Promise<RemoveTagsFromOnPremisesInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsFromOnPremisesInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentAlreadyCompletedException} <p>The deployment is already complete.</p>
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {DeploymentNotStartedException} <p>The specified deployment has not started.</p>
   *   - {UnsupportedActionForDeploymentTypeException} <p>A call was submitted that is not supported for the specified deployment type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationInput
  ): Promise<SkipWaitTimeForInstanceTerminationOutput>;
  public skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationInput,
    cb: (err: any, data?: SkipWaitTimeForInstanceTerminationOutput) => void
  ): void;
  public skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationInput,
    cb?: (err: any, data?: SkipWaitTimeForInstanceTerminationOutput) => void
  ): Promise<SkipWaitTimeForInstanceTerminationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SkipWaitTimeForInstanceTerminationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attempts to stop an ongoing deployment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeploymentIdRequiredException} <p>At least one deployment ID must be specified.</p>
   *   - {DeploymentDoesNotExistException} <p>The deployment with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentGroupDoesNotExistException} <p>The named deployment group with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentAlreadyCompletedException} <p>The deployment is already complete.</p>
   *   - {InvalidDeploymentIdException} <p>At least one of the deployment IDs was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopDeployment(
    args: StopDeploymentInput
  ): Promise<StopDeploymentOutput>;
  public stopDeployment(
    args: StopDeploymentInput,
    cb: (err: any, data?: StopDeploymentOutput) => void
  ): void;
  public stopDeployment(
    args: StopDeploymentInput,
    cb?: (err: any, data?: StopDeploymentOutput) => void
  ): Promise<StopDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceArnRequiredException} <p> The ARN of a resource is required, but was not found. </p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {DeploymentGroupDoesNotExistException} <p>The named deployment group with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentConfigDoesNotExistException} <p>The deployment configuration does not exist with the IAM user or AWS account.</p>
   *   - {TagRequiredException} <p>A tag was not specified.</p>
   *   - {InvalidTagsToAddException} <p> The specified tags are not valid. </p>
   *   - {ArnNotSupportedException} <p> The specified ARN is not supported. For example, it might be an ARN for a resource that is not expected. </p>
   *   - {InvalidArnException} <p> The specified ARN is not in a valid format. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identfied by the list of keys in the <code>TagKeys</code> input parameter. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceArnRequiredException} <p> The ARN of a resource is required, but was not found. </p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {DeploymentGroupDoesNotExistException} <p>The named deployment group with the IAM user or AWS account does not exist.</p>
   *   - {DeploymentConfigDoesNotExistException} <p>The deployment configuration does not exist with the IAM user or AWS account.</p>
   *   - {TagRequiredException} <p>A tag was not specified.</p>
   *   - {InvalidTagsToAddException} <p> The specified tags are not valid. </p>
   *   - {ArnNotSupportedException} <p> The specified ARN is not supported. For example, it might be an ARN for a resource that is not expected. </p>
   *   - {InvalidArnException} <p> The specified ARN is not in a valid format. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the name of an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationAlreadyExistsException} <p>An application with the specified name with the IAM user or AWS account already exists.</p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApplication(
    args: UpdateApplicationInput
  ): Promise<UpdateApplicationOutput>;
  public updateApplication(
    args: UpdateApplicationInput,
    cb: (err: any, data?: UpdateApplicationOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationInput,
    cb?: (err: any, data?: UpdateApplicationOutput) => void
  ): Promise<UpdateApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about a deployment group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ApplicationNameRequiredException} <p>The minimum number of required application names was not specified.</p>
   *   - {InvalidApplicationNameException} <p>The application name was specified in an invalid format.</p>
   *   - {ApplicationDoesNotExistException} <p>The application does not exist with the IAM user or AWS account.</p>
   *   - {InvalidDeploymentGroupNameException} <p>The deployment group name was specified in an invalid format.</p>
   *   - {DeploymentGroupAlreadyExistsException} <p>A deployment group with the specified name with the IAM user or AWS account already exists.</p>
   *   - {DeploymentGroupNameRequiredException} <p>The deployment group name was not specified.</p>
   *   - {DeploymentGroupDoesNotExistException} <p>The named deployment group with the IAM user or AWS account does not exist.</p>
   *   - {InvalidEC2TagException} <p>The tag was specified in an invalid format.</p>
   *   - {InvalidTagException} <p>The tag was specified in an invalid format.</p>
   *   - {InvalidAutoScalingGroupException} <p>The Auto Scaling group was specified in an invalid format or does not exist.</p>
   *   - {InvalidDeploymentConfigNameException} <p>The deployment configuration name was specified in an invalid format.</p>
   *   - {DeploymentConfigDoesNotExistException} <p>The deployment configuration does not exist with the IAM user or AWS account.</p>
   *   - {InvalidRoleException} <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Amazon EC2 Auto Scaling.</p>
   *   - {LifecycleHookLimitExceededException} <p>The limit for lifecycle hooks was exceeded.</p>
   *   - {InvalidTriggerConfigException} <p>The trigger was specified in an invalid format.</p>
   *   - {TriggerTargetsLimitExceededException} <p>The maximum allowed number of triggers was exceeded.</p>
   *   - {InvalidAlarmConfigException} <p>The format of the alarm configuration is invalid. Possible causes include:</p> <ul> <li> <p>The alarm list is null.</p> </li> <li> <p>The alarm object is null.</p> </li> <li> <p>The alarm name is empty or null or exceeds the limit of 255 characters.</p> </li> <li> <p>Two alarms with the same name have been specified.</p> </li> <li> <p>The alarm configuration is enabled, but the alarm list is empty.</p> </li> </ul>
   *   - {AlarmsLimitExceededException} <p>The maximum number of alarms for a deployment group (10) was exceeded.</p>
   *   - {InvalidAutoRollbackConfigException} <p>The automatic rollback configuration was specified in an invalid format. For example, automatic rollback is enabled, but an invalid triggering event type or no event types were listed.</p>
   *   - {InvalidLoadBalancerInfoException} <p>An invalid load balancer name, or no load balancer name, was specified.</p>
   *   - {InvalidDeploymentStyleException} <p>An invalid deployment style was specified. Valid deployment types include "IN_PLACE" and "BLUE_GREEN." Valid deployment options include "WITH_TRAFFIC_CONTROL" and "WITHOUT_TRAFFIC_CONTROL."</p>
   *   - {InvalidBlueGreenDeploymentConfigurationException} <p>The configuration for the blue/green deployment group was provided in an invalid format. For information about deployment configuration format, see <a>CreateDeploymentConfig</a>.</p>
   *   - {InvalidEC2TagCombinationException} <p>A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of these data types can be used in a single call.</p>
   *   - {InvalidOnPremisesTagCombinationException} <p>A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet, but only one of these data types can be used in a single call.</p>
   *   - {TagSetListLimitExceededException} <p>The number of tag groups included in the tag set list exceeded the maximum allowed limit of 3.</p>
   *   - {InvalidInputException} <p>The input was specified in an invalid format.</p>
   *   - {ThrottlingException} <p>An API function was called too frequently.</p>
   *   - {InvalidECSServiceException} <p> The Amazon ECS service identifier is not valid. </p>
   *   - {InvalidTargetGroupPairException} <p> A target group pair associated with this deployment is not valid. </p>
   *   - {ECSServiceMappingLimitExceededException} <p> The Amazon ECS service is associated with more than one deployment groups. An Amazon ECS service can be associated with only one deployment group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDeploymentGroup(
    args: UpdateDeploymentGroupInput
  ): Promise<UpdateDeploymentGroupOutput>;
  public updateDeploymentGroup(
    args: UpdateDeploymentGroupInput,
    cb: (err: any, data?: UpdateDeploymentGroupOutput) => void
  ): void;
  public updateDeploymentGroup(
    args: UpdateDeploymentGroupInput,
    cb?: (err: any, data?: UpdateDeploymentGroupOutput) => void
  ): Promise<UpdateDeploymentGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDeploymentGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
