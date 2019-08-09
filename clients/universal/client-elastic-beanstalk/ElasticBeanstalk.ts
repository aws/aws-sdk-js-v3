import { ElasticBeanstalkClient } from "./ElasticBeanstalkClient";
import { AbortEnvironmentUpdateInput } from "./types/AbortEnvironmentUpdateInput";
import { AbortEnvironmentUpdateOutput } from "./types/AbortEnvironmentUpdateOutput";
import { ApplyEnvironmentManagedActionInput } from "./types/ApplyEnvironmentManagedActionInput";
import { ApplyEnvironmentManagedActionOutput } from "./types/ApplyEnvironmentManagedActionOutput";
import { CheckDNSAvailabilityInput } from "./types/CheckDNSAvailabilityInput";
import { CheckDNSAvailabilityOutput } from "./types/CheckDNSAvailabilityOutput";
import { CodeBuildNotInServiceRegionException } from "./types/CodeBuildNotInServiceRegionException";
import { ComposeEnvironmentsInput } from "./types/ComposeEnvironmentsInput";
import { ComposeEnvironmentsOutput } from "./types/ComposeEnvironmentsOutput";
import { CreateApplicationInput } from "./types/CreateApplicationInput";
import { CreateApplicationOutput } from "./types/CreateApplicationOutput";
import { CreateApplicationVersionInput } from "./types/CreateApplicationVersionInput";
import { CreateApplicationVersionOutput } from "./types/CreateApplicationVersionOutput";
import { CreateConfigurationTemplateInput } from "./types/CreateConfigurationTemplateInput";
import { CreateConfigurationTemplateOutput } from "./types/CreateConfigurationTemplateOutput";
import { CreateEnvironmentInput } from "./types/CreateEnvironmentInput";
import { CreateEnvironmentOutput } from "./types/CreateEnvironmentOutput";
import { CreatePlatformVersionInput } from "./types/CreatePlatformVersionInput";
import { CreatePlatformVersionOutput } from "./types/CreatePlatformVersionOutput";
import { CreateStorageLocationInput } from "./types/CreateStorageLocationInput";
import { CreateStorageLocationOutput } from "./types/CreateStorageLocationOutput";
import { DeleteApplicationInput } from "./types/DeleteApplicationInput";
import { DeleteApplicationOutput } from "./types/DeleteApplicationOutput";
import { DeleteApplicationVersionInput } from "./types/DeleteApplicationVersionInput";
import { DeleteApplicationVersionOutput } from "./types/DeleteApplicationVersionOutput";
import { DeleteConfigurationTemplateInput } from "./types/DeleteConfigurationTemplateInput";
import { DeleteConfigurationTemplateOutput } from "./types/DeleteConfigurationTemplateOutput";
import { DeleteEnvironmentConfigurationInput } from "./types/DeleteEnvironmentConfigurationInput";
import { DeleteEnvironmentConfigurationOutput } from "./types/DeleteEnvironmentConfigurationOutput";
import { DeletePlatformVersionInput } from "./types/DeletePlatformVersionInput";
import { DeletePlatformVersionOutput } from "./types/DeletePlatformVersionOutput";
import { DescribeAccountAttributesInput } from "./types/DescribeAccountAttributesInput";
import { DescribeAccountAttributesOutput } from "./types/DescribeAccountAttributesOutput";
import { DescribeApplicationVersionsInput } from "./types/DescribeApplicationVersionsInput";
import { DescribeApplicationVersionsOutput } from "./types/DescribeApplicationVersionsOutput";
import { DescribeApplicationsInput } from "./types/DescribeApplicationsInput";
import { DescribeApplicationsOutput } from "./types/DescribeApplicationsOutput";
import { DescribeConfigurationOptionsInput } from "./types/DescribeConfigurationOptionsInput";
import { DescribeConfigurationOptionsOutput } from "./types/DescribeConfigurationOptionsOutput";
import { DescribeConfigurationSettingsInput } from "./types/DescribeConfigurationSettingsInput";
import { DescribeConfigurationSettingsOutput } from "./types/DescribeConfigurationSettingsOutput";
import { DescribeEnvironmentHealthInput } from "./types/DescribeEnvironmentHealthInput";
import { DescribeEnvironmentHealthOutput } from "./types/DescribeEnvironmentHealthOutput";
import { DescribeEnvironmentManagedActionHistoryInput } from "./types/DescribeEnvironmentManagedActionHistoryInput";
import { DescribeEnvironmentManagedActionHistoryOutput } from "./types/DescribeEnvironmentManagedActionHistoryOutput";
import { DescribeEnvironmentManagedActionsInput } from "./types/DescribeEnvironmentManagedActionsInput";
import { DescribeEnvironmentManagedActionsOutput } from "./types/DescribeEnvironmentManagedActionsOutput";
import { DescribeEnvironmentResourcesInput } from "./types/DescribeEnvironmentResourcesInput";
import { DescribeEnvironmentResourcesOutput } from "./types/DescribeEnvironmentResourcesOutput";
import { DescribeEnvironmentsInput } from "./types/DescribeEnvironmentsInput";
import { DescribeEnvironmentsOutput } from "./types/DescribeEnvironmentsOutput";
import { DescribeEventsInput } from "./types/DescribeEventsInput";
import { DescribeEventsOutput } from "./types/DescribeEventsOutput";
import { DescribeInstancesHealthInput } from "./types/DescribeInstancesHealthInput";
import { DescribeInstancesHealthOutput } from "./types/DescribeInstancesHealthOutput";
import { DescribePlatformVersionInput } from "./types/DescribePlatformVersionInput";
import { DescribePlatformVersionOutput } from "./types/DescribePlatformVersionOutput";
import { ElasticBeanstalkServiceException } from "./types/ElasticBeanstalkServiceException";
import { InsufficientPrivilegesException } from "./types/InsufficientPrivilegesException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListAvailableSolutionStacksInput } from "./types/ListAvailableSolutionStacksInput";
import { ListAvailableSolutionStacksOutput } from "./types/ListAvailableSolutionStacksOutput";
import { ListPlatformVersionsInput } from "./types/ListPlatformVersionsInput";
import { ListPlatformVersionsOutput } from "./types/ListPlatformVersionsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ManagedActionInvalidStateException } from "./types/ManagedActionInvalidStateException";
import { OperationInProgressException } from "./types/OperationInProgressException";
import { PlatformVersionStillReferencedException } from "./types/PlatformVersionStillReferencedException";
import { RebuildEnvironmentInput } from "./types/RebuildEnvironmentInput";
import { RebuildEnvironmentOutput } from "./types/RebuildEnvironmentOutput";
import { RequestEnvironmentInfoInput } from "./types/RequestEnvironmentInfoInput";
import { RequestEnvironmentInfoOutput } from "./types/RequestEnvironmentInfoOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ResourceTypeNotSupportedException } from "./types/ResourceTypeNotSupportedException";
import { RestartAppServerInput } from "./types/RestartAppServerInput";
import { RestartAppServerOutput } from "./types/RestartAppServerOutput";
import { RetrieveEnvironmentInfoInput } from "./types/RetrieveEnvironmentInfoInput";
import { RetrieveEnvironmentInfoOutput } from "./types/RetrieveEnvironmentInfoOutput";
import { S3LocationNotInServiceRegionException } from "./types/S3LocationNotInServiceRegionException";
import { S3SubscriptionRequiredException } from "./types/S3SubscriptionRequiredException";
import { SourceBundleDeletionException } from "./types/SourceBundleDeletionException";
import { SwapEnvironmentCNAMEsInput } from "./types/SwapEnvironmentCNAMEsInput";
import { SwapEnvironmentCNAMEsOutput } from "./types/SwapEnvironmentCNAMEsOutput";
import { TerminateEnvironmentInput } from "./types/TerminateEnvironmentInput";
import { TerminateEnvironmentOutput } from "./types/TerminateEnvironmentOutput";
import { TooManyApplicationVersionsException } from "./types/TooManyApplicationVersionsException";
import { TooManyApplicationsException } from "./types/TooManyApplicationsException";
import { TooManyBucketsException } from "./types/TooManyBucketsException";
import { TooManyConfigurationTemplatesException } from "./types/TooManyConfigurationTemplatesException";
import { TooManyEnvironmentsException } from "./types/TooManyEnvironmentsException";
import { TooManyPlatformsException } from "./types/TooManyPlatformsException";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UpdateApplicationInput } from "./types/UpdateApplicationInput";
import { UpdateApplicationOutput } from "./types/UpdateApplicationOutput";
import { UpdateApplicationResourceLifecycleInput } from "./types/UpdateApplicationResourceLifecycleInput";
import { UpdateApplicationResourceLifecycleOutput } from "./types/UpdateApplicationResourceLifecycleOutput";
import { UpdateApplicationVersionInput } from "./types/UpdateApplicationVersionInput";
import { UpdateApplicationVersionOutput } from "./types/UpdateApplicationVersionOutput";
import { UpdateConfigurationTemplateInput } from "./types/UpdateConfigurationTemplateInput";
import { UpdateConfigurationTemplateOutput } from "./types/UpdateConfigurationTemplateOutput";
import { UpdateEnvironmentInput } from "./types/UpdateEnvironmentInput";
import { UpdateEnvironmentOutput } from "./types/UpdateEnvironmentOutput";
import { UpdateTagsForResourceInput } from "./types/UpdateTagsForResourceInput";
import { UpdateTagsForResourceOutput } from "./types/UpdateTagsForResourceOutput";
import { ValidateConfigurationSettingsInput } from "./types/ValidateConfigurationSettingsInput";
import { ValidateConfigurationSettingsOutput } from "./types/ValidateConfigurationSettingsOutput";
import { AbortEnvironmentUpdateCommand } from "./commands/AbortEnvironmentUpdateCommand";
import { ApplyEnvironmentManagedActionCommand } from "./commands/ApplyEnvironmentManagedActionCommand";
import { CheckDNSAvailabilityCommand } from "./commands/CheckDNSAvailabilityCommand";
import { ComposeEnvironmentsCommand } from "./commands/ComposeEnvironmentsCommand";
import { CreateApplicationCommand } from "./commands/CreateApplicationCommand";
import { CreateApplicationVersionCommand } from "./commands/CreateApplicationVersionCommand";
import { CreateConfigurationTemplateCommand } from "./commands/CreateConfigurationTemplateCommand";
import { CreateEnvironmentCommand } from "./commands/CreateEnvironmentCommand";
import { CreatePlatformVersionCommand } from "./commands/CreatePlatformVersionCommand";
import { CreateStorageLocationCommand } from "./commands/CreateStorageLocationCommand";
import { DeleteApplicationCommand } from "./commands/DeleteApplicationCommand";
import { DeleteApplicationVersionCommand } from "./commands/DeleteApplicationVersionCommand";
import { DeleteConfigurationTemplateCommand } from "./commands/DeleteConfigurationTemplateCommand";
import { DeleteEnvironmentConfigurationCommand } from "./commands/DeleteEnvironmentConfigurationCommand";
import { DeletePlatformVersionCommand } from "./commands/DeletePlatformVersionCommand";
import { DescribeAccountAttributesCommand } from "./commands/DescribeAccountAttributesCommand";
import { DescribeApplicationVersionsCommand } from "./commands/DescribeApplicationVersionsCommand";
import { DescribeApplicationsCommand } from "./commands/DescribeApplicationsCommand";
import { DescribeConfigurationOptionsCommand } from "./commands/DescribeConfigurationOptionsCommand";
import { DescribeConfigurationSettingsCommand } from "./commands/DescribeConfigurationSettingsCommand";
import { DescribeEnvironmentHealthCommand } from "./commands/DescribeEnvironmentHealthCommand";
import { DescribeEnvironmentManagedActionHistoryCommand } from "./commands/DescribeEnvironmentManagedActionHistoryCommand";
import { DescribeEnvironmentManagedActionsCommand } from "./commands/DescribeEnvironmentManagedActionsCommand";
import { DescribeEnvironmentResourcesCommand } from "./commands/DescribeEnvironmentResourcesCommand";
import { DescribeEnvironmentsCommand } from "./commands/DescribeEnvironmentsCommand";
import { DescribeEventsCommand } from "./commands/DescribeEventsCommand";
import { DescribeInstancesHealthCommand } from "./commands/DescribeInstancesHealthCommand";
import { DescribePlatformVersionCommand } from "./commands/DescribePlatformVersionCommand";
import { ListAvailableSolutionStacksCommand } from "./commands/ListAvailableSolutionStacksCommand";
import { ListPlatformVersionsCommand } from "./commands/ListPlatformVersionsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { RebuildEnvironmentCommand } from "./commands/RebuildEnvironmentCommand";
import { RequestEnvironmentInfoCommand } from "./commands/RequestEnvironmentInfoCommand";
import { RestartAppServerCommand } from "./commands/RestartAppServerCommand";
import { RetrieveEnvironmentInfoCommand } from "./commands/RetrieveEnvironmentInfoCommand";
import { SwapEnvironmentCNAMEsCommand } from "./commands/SwapEnvironmentCNAMEsCommand";
import { TerminateEnvironmentCommand } from "./commands/TerminateEnvironmentCommand";
import { UpdateApplicationCommand } from "./commands/UpdateApplicationCommand";
import { UpdateApplicationResourceLifecycleCommand } from "./commands/UpdateApplicationResourceLifecycleCommand";
import { UpdateApplicationVersionCommand } from "./commands/UpdateApplicationVersionCommand";
import { UpdateConfigurationTemplateCommand } from "./commands/UpdateConfigurationTemplateCommand";
import { UpdateEnvironmentCommand } from "./commands/UpdateEnvironmentCommand";
import { UpdateTagsForResourceCommand } from "./commands/UpdateTagsForResourceCommand";
import { ValidateConfigurationSettingsCommand } from "./commands/ValidateConfigurationSettingsCommand";

export class ElasticBeanstalk extends ElasticBeanstalkClient {
  /**
   * <p>Cancels in-progress environment configuration update or application version deployment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateInput
  ): Promise<AbortEnvironmentUpdateOutput>;
  public abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateInput,
    cb: (err: any, data?: AbortEnvironmentUpdateOutput) => void
  ): void;
  public abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateInput,
    cb?: (err: any, data?: AbortEnvironmentUpdateOutput) => void
  ): Promise<AbortEnvironmentUpdateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AbortEnvironmentUpdateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ElasticBeanstalkServiceException} <p>A generic service exception has occurred.</p>
   *   - {ManagedActionInvalidStateException} <p>Cannot modify the managed action in its current state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionInput
  ): Promise<ApplyEnvironmentManagedActionOutput>;
  public applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionInput,
    cb: (err: any, data?: ApplyEnvironmentManagedActionOutput) => void
  ): void;
  public applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionInput,
    cb?: (err: any, data?: ApplyEnvironmentManagedActionOutput) => void
  ): Promise<ApplyEnvironmentManagedActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ApplyEnvironmentManagedActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Checks if the specified CNAME is available.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public checkDNSAvailability(
    args: CheckDNSAvailabilityInput
  ): Promise<CheckDNSAvailabilityOutput>;
  public checkDNSAvailability(
    args: CheckDNSAvailabilityInput,
    cb: (err: any, data?: CheckDNSAvailabilityOutput) => void
  ): void;
  public checkDNSAvailability(
    args: CheckDNSAvailabilityInput,
    cb?: (err: any, data?: CheckDNSAvailabilityOutput) => void
  ): Promise<CheckDNSAvailabilityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CheckDNSAvailabilityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyEnvironmentsException} <p>The specified account has reached its limit of environments.</p>
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public composeEnvironments(
    args: ComposeEnvironmentsInput
  ): Promise<ComposeEnvironmentsOutput>;
  public composeEnvironments(
    args: ComposeEnvironmentsInput,
    cb: (err: any, data?: ComposeEnvironmentsOutput) => void
  ): void;
  public composeEnvironments(
    args: ComposeEnvironmentsInput,
    cb?: (err: any, data?: ComposeEnvironmentsOutput) => void
  ): Promise<ComposeEnvironmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ComposeEnvironmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Creates an application that has one configuration template named <code>default</code> and no application versions. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyApplicationsException} <p>The specified account has reached its limit of applications.</p>
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
   * <p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>Once you create an application version with a specified Amazon S3 bucket and key location, you cannot change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyApplicationsException} <p>The specified account has reached its limit of applications.</p>
   *   - {TooManyApplicationVersionsException} <p>The specified account has reached its limit of application versions.</p>
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {S3LocationNotInServiceRegionException} <p>The specified S3 bucket does not belong to the S3 region in which the service is running. The following regions are supported:</p> <ul> <li> <p>IAD/us-east-1</p> </li> <li> <p>PDX/us-west-2</p> </li> <li> <p>DUB/eu-west-1</p> </li> </ul>
   *   - {CodeBuildNotInServiceRegionException} <p>AWS CodeBuild is not available in the specified region.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApplicationVersion(
    args: CreateApplicationVersionInput
  ): Promise<CreateApplicationVersionOutput>;
  public createApplicationVersion(
    args: CreateApplicationVersionInput,
    cb: (err: any, data?: CreateApplicationVersionOutput) => void
  ): void;
  public createApplicationVersion(
    args: CreateApplicationVersionInput,
    cb?: (err: any, data?: CreateApplicationVersionOutput) => void
  ): Promise<CreateApplicationVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateApplicationVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a configuration template. Templates are associated with a specific application and are used to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {TooManyBucketsException} <p>The specified account has reached its limit of Amazon S3 buckets.</p>
   *   - {TooManyConfigurationTemplatesException} <p>The specified account has reached its limit of configuration templates.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConfigurationTemplate(
    args: CreateConfigurationTemplateInput
  ): Promise<CreateConfigurationTemplateOutput>;
  public createConfigurationTemplate(
    args: CreateConfigurationTemplateInput,
    cb: (err: any, data?: CreateConfigurationTemplateOutput) => void
  ): void;
  public createConfigurationTemplate(
    args: CreateConfigurationTemplateInput,
    cb?: (err: any, data?: CreateConfigurationTemplateOutput) => void
  ): Promise<CreateConfigurationTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConfigurationTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Launches an environment for the specified application using the specified configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyEnvironmentsException} <p>The specified account has reached its limit of environments.</p>
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEnvironment(
    args: CreateEnvironmentInput
  ): Promise<CreateEnvironmentOutput>;
  public createEnvironment(
    args: CreateEnvironmentInput,
    cb: (err: any, data?: CreateEnvironmentOutput) => void
  ): void;
  public createEnvironment(
    args: CreateEnvironmentInput,
    cb?: (err: any, data?: CreateEnvironmentOutput) => void
  ): Promise<CreateEnvironmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEnvironmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a new version of your custom platform.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {ElasticBeanstalkServiceException} <p>A generic service exception has occurred.</p>
   *   - {TooManyPlatformsException} <p>You have exceeded the maximum number of allowed platforms associated with the account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPlatformVersion(
    args: CreatePlatformVersionInput
  ): Promise<CreatePlatformVersionOutput>;
  public createPlatformVersion(
    args: CreatePlatformVersionInput,
    cb: (err: any, data?: CreatePlatformVersionOutput) => void
  ): void;
  public createPlatformVersion(
    args: CreatePlatformVersionInput,
    cb?: (err: any, data?: CreatePlatformVersionOutput) => void
  ): Promise<CreatePlatformVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePlatformVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyBucketsException} <p>The specified account has reached its limit of Amazon S3 buckets.</p>
   *   - {S3SubscriptionRequiredException} <p>The specified account does not have a subscription to Amazon S3.</p>
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStorageLocation(
    args: CreateStorageLocationInput
  ): Promise<CreateStorageLocationOutput>;
  public createStorageLocation(
    args: CreateStorageLocationInput,
    cb: (err: any, data?: CreateStorageLocationOutput) => void
  ): void;
  public createStorageLocation(
    args: CreateStorageLocationInput,
    cb?: (err: any, data?: CreateStorageLocationOutput) => void
  ): Promise<CreateStorageLocationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStorageLocationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationInProgressException} <p>Unable to perform the specified operation because another operation that effects an element in this activity is already in progress.</p>
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
   * <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {SourceBundleDeletionException} <p>Unable to delete the Amazon S3 source bundle associated with the application version. The application version was deleted successfully.</p>
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {OperationInProgressException} <p>Unable to perform the specified operation because another operation that effects an element in this activity is already in progress.</p>
   *   - {S3LocationNotInServiceRegionException} <p>The specified S3 bucket does not belong to the S3 region in which the service is running. The following regions are supported:</p> <ul> <li> <p>IAD/us-east-1</p> </li> <li> <p>PDX/us-west-2</p> </li> <li> <p>DUB/eu-west-1</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplicationVersion(
    args: DeleteApplicationVersionInput
  ): Promise<DeleteApplicationVersionOutput>;
  public deleteApplicationVersion(
    args: DeleteApplicationVersionInput,
    cb: (err: any, data?: DeleteApplicationVersionOutput) => void
  ): void;
  public deleteApplicationVersion(
    args: DeleteApplicationVersionInput,
    cb?: (err: any, data?: DeleteApplicationVersionOutput) => void
  ): Promise<DeleteApplicationVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationInProgressException} <p>Unable to perform the specified operation because another operation that effects an element in this activity is already in progress.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateInput
  ): Promise<DeleteConfigurationTemplateOutput>;
  public deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateInput,
    cb: (err: any, data?: DeleteConfigurationTemplateOutput) => void
  ): void;
  public deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateInput,
    cb?: (err: any, data?: DeleteConfigurationTemplateOutput) => void
  ): Promise<DeleteConfigurationTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigurationTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationInput
  ): Promise<DeleteEnvironmentConfigurationOutput>;
  public deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationInput,
    cb: (err: any, data?: DeleteEnvironmentConfigurationOutput) => void
  ): void;
  public deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationInput,
    cb?: (err: any, data?: DeleteEnvironmentConfigurationOutput) => void
  ): Promise<DeleteEnvironmentConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEnvironmentConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified version of a custom platform.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationInProgressException} <p>Unable to perform the specified operation because another operation that effects an element in this activity is already in progress.</p>
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {ElasticBeanstalkServiceException} <p>A generic service exception has occurred.</p>
   *   - {PlatformVersionStillReferencedException} <p>You cannot delete the platform version because there are still environments running on it.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePlatformVersion(
    args: DeletePlatformVersionInput
  ): Promise<DeletePlatformVersionOutput>;
  public deletePlatformVersion(
    args: DeletePlatformVersionInput,
    cb: (err: any, data?: DeletePlatformVersionOutput) => void
  ): void;
  public deletePlatformVersion(
    args: DeletePlatformVersionInput,
    cb?: (err: any, data?: DeletePlatformVersionOutput) => void
  ): Promise<DeletePlatformVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePlatformVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput
  ): Promise<DescribeAccountAttributesOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput,
    cb: (err: any, data?: DescribeAccountAttributesOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput,
    cb?: (err: any, data?: DescribeAccountAttributesOutput) => void
  ): Promise<DescribeAccountAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve a list of application versions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeApplicationVersions(
    args: DescribeApplicationVersionsInput
  ): Promise<DescribeApplicationVersionsOutput>;
  public describeApplicationVersions(
    args: DescribeApplicationVersionsInput,
    cb: (err: any, data?: DescribeApplicationVersionsOutput) => void
  ): void;
  public describeApplicationVersions(
    args: DescribeApplicationVersionsInput,
    cb?: (err: any, data?: DescribeApplicationVersionsOutput) => void
  ): Promise<DescribeApplicationVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeApplicationVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the descriptions of existing applications.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeApplications(
    args: DescribeApplicationsInput
  ): Promise<DescribeApplicationsOutput>;
  public describeApplications(
    args: DescribeApplicationsInput,
    cb: (err: any, data?: DescribeApplicationsOutput) => void
  ): void;
  public describeApplications(
    args: DescribeApplicationsInput,
    cb?: (err: any, data?: DescribeApplicationsOutput) => void
  ): Promise<DescribeApplicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeApplicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyBucketsException} <p>The specified account has reached its limit of Amazon S3 buckets.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigurationOptions(
    args: DescribeConfigurationOptionsInput
  ): Promise<DescribeConfigurationOptionsOutput>;
  public describeConfigurationOptions(
    args: DescribeConfigurationOptionsInput,
    cb: (err: any, data?: DescribeConfigurationOptionsOutput) => void
  ): void;
  public describeConfigurationOptions(
    args: DescribeConfigurationOptionsInput,
    cb?: (err: any, data?: DescribeConfigurationOptionsOutput) => void
  ): Promise<DescribeConfigurationOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigurationOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyBucketsException} <p>The specified account has reached its limit of Amazon S3 buckets.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigurationSettings(
    args: DescribeConfigurationSettingsInput
  ): Promise<DescribeConfigurationSettingsOutput>;
  public describeConfigurationSettings(
    args: DescribeConfigurationSettingsInput,
    cb: (err: any, data?: DescribeConfigurationSettingsOutput) => void
  ): void;
  public describeConfigurationSettings(
    args: DescribeConfigurationSettingsInput,
    cb?: (err: any, data?: DescribeConfigurationSettingsOutput) => void
  ): Promise<DescribeConfigurationSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigurationSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>One or more input parameters is not valid. Please correct the input parameters and try the operation again.</p>
   *   - {ElasticBeanstalkServiceException} <p>A generic service exception has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEnvironmentHealth(
    args: DescribeEnvironmentHealthInput
  ): Promise<DescribeEnvironmentHealthOutput>;
  public describeEnvironmentHealth(
    args: DescribeEnvironmentHealthInput,
    cb: (err: any, data?: DescribeEnvironmentHealthOutput) => void
  ): void;
  public describeEnvironmentHealth(
    args: DescribeEnvironmentHealthInput,
    cb?: (err: any, data?: DescribeEnvironmentHealthOutput) => void
  ): Promise<DescribeEnvironmentHealthOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEnvironmentHealthCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists an environment's completed and failed managed actions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ElasticBeanstalkServiceException} <p>A generic service exception has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryInput
  ): Promise<DescribeEnvironmentManagedActionHistoryOutput>;
  public describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryInput,
    cb: (err: any, data?: DescribeEnvironmentManagedActionHistoryOutput) => void
  ): void;
  public describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryInput,
    cb?: (
      err: any,
      data?: DescribeEnvironmentManagedActionHistoryOutput
    ) => void
  ): Promise<DescribeEnvironmentManagedActionHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEnvironmentManagedActionHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists an environment's upcoming and in-progress managed actions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ElasticBeanstalkServiceException} <p>A generic service exception has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsInput
  ): Promise<DescribeEnvironmentManagedActionsOutput>;
  public describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsInput,
    cb: (err: any, data?: DescribeEnvironmentManagedActionsOutput) => void
  ): void;
  public describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsInput,
    cb?: (err: any, data?: DescribeEnvironmentManagedActionsOutput) => void
  ): Promise<DescribeEnvironmentManagedActionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEnvironmentManagedActionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns AWS resources for this environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEnvironmentResources(
    args: DescribeEnvironmentResourcesInput
  ): Promise<DescribeEnvironmentResourcesOutput>;
  public describeEnvironmentResources(
    args: DescribeEnvironmentResourcesInput,
    cb: (err: any, data?: DescribeEnvironmentResourcesOutput) => void
  ): void;
  public describeEnvironmentResources(
    args: DescribeEnvironmentResourcesInput,
    cb?: (err: any, data?: DescribeEnvironmentResourcesOutput) => void
  ): Promise<DescribeEnvironmentResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEnvironmentResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns descriptions for existing environments.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEnvironments(
    args: DescribeEnvironmentsInput
  ): Promise<DescribeEnvironmentsOutput>;
  public describeEnvironments(
    args: DescribeEnvironmentsInput,
    cb: (err: any, data?: DescribeEnvironmentsOutput) => void
  ): void;
  public describeEnvironments(
    args: DescribeEnvironmentsInput,
    cb?: (err: any, data?: DescribeEnvironmentsOutput) => void
  ): Promise<DescribeEnvironmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEnvironmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEvents(
    args: DescribeEventsInput
  ): Promise<DescribeEventsOutput>;
  public describeEvents(
    args: DescribeEventsInput,
    cb: (err: any, data?: DescribeEventsOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsInput,
    cb?: (err: any, data?: DescribeEventsOutput) => void
  ): Promise<DescribeEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>One or more input parameters is not valid. Please correct the input parameters and try the operation again.</p>
   *   - {ElasticBeanstalkServiceException} <p>A generic service exception has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstancesHealth(
    args: DescribeInstancesHealthInput
  ): Promise<DescribeInstancesHealthOutput>;
  public describeInstancesHealth(
    args: DescribeInstancesHealthInput,
    cb: (err: any, data?: DescribeInstancesHealthOutput) => void
  ): void;
  public describeInstancesHealth(
    args: DescribeInstancesHealthInput,
    cb?: (err: any, data?: DescribeInstancesHealthOutput) => void
  ): Promise<DescribeInstancesHealthOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstancesHealthCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the version of the platform.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {ElasticBeanstalkServiceException} <p>A generic service exception has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePlatformVersion(
    args: DescribePlatformVersionInput
  ): Promise<DescribePlatformVersionOutput>;
  public describePlatformVersion(
    args: DescribePlatformVersionInput,
    cb: (err: any, data?: DescribePlatformVersionOutput) => void
  ): void;
  public describePlatformVersion(
    args: DescribePlatformVersionInput,
    cb?: (err: any, data?: DescribePlatformVersionOutput) => void
  ): Promise<DescribePlatformVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePlatformVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksInput
  ): Promise<ListAvailableSolutionStacksOutput>;
  public listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksInput,
    cb: (err: any, data?: ListAvailableSolutionStacksOutput) => void
  ): void;
  public listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksInput,
    cb?: (err: any, data?: ListAvailableSolutionStacksOutput) => void
  ): Promise<ListAvailableSolutionStacksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAvailableSolutionStacksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the available platforms.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {ElasticBeanstalkServiceException} <p>A generic service exception has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPlatformVersions(
    args: ListPlatformVersionsInput
  ): Promise<ListPlatformVersionsOutput>;
  public listPlatformVersions(
    args: ListPlatformVersionsInput,
    cb: (err: any, data?: ListPlatformVersionsOutput) => void
  ): void;
  public listPlatformVersions(
    args: ListPlatformVersionsInput,
    cb?: (err: any, data?: ListPlatformVersionsOutput) => void
  ): Promise<ListPlatformVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPlatformVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Currently, Elastic Beanstalk only supports tagging of Elastic Beanstalk environments. For details about environment tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.tagging.html">Tagging Resources in Your Elastic Beanstalk Environment</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {ResourceNotFoundException} <p>A resource doesn't exist for the specified Amazon Resource Name (ARN).</p>
   *   - {ResourceTypeNotSupportedException} <p>The type of the specified Amazon Resource Name (ARN) isn't supported for this operation.</p>
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
   * <p>Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebuildEnvironment(
    args: RebuildEnvironmentInput
  ): Promise<RebuildEnvironmentOutput>;
  public rebuildEnvironment(
    args: RebuildEnvironmentInput,
    cb: (err: any, data?: RebuildEnvironmentOutput) => void
  ): void;
  public rebuildEnvironment(
    args: RebuildEnvironmentInput,
    cb?: (err: any, data?: RebuildEnvironmentOutput) => void
  ): Promise<RebuildEnvironmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebuildEnvironmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public requestEnvironmentInfo(
    args: RequestEnvironmentInfoInput
  ): Promise<RequestEnvironmentInfoOutput>;
  public requestEnvironmentInfo(
    args: RequestEnvironmentInfoInput,
    cb: (err: any, data?: RequestEnvironmentInfoOutput) => void
  ): void;
  public requestEnvironmentInfo(
    args: RequestEnvironmentInfoInput,
    cb?: (err: any, data?: RequestEnvironmentInfoOutput) => void
  ): Promise<RequestEnvironmentInfoOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RequestEnvironmentInfoCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Causes the environment to restart the application container server running on each Amazon EC2 instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restartAppServer(
    args: RestartAppServerInput
  ): Promise<RestartAppServerOutput>;
  public restartAppServer(
    args: RestartAppServerInput,
    cb: (err: any, data?: RestartAppServerOutput) => void
  ): void;
  public restartAppServer(
    args: RestartAppServerInput,
    cb?: (err: any, data?: RestartAppServerOutput) => void
  ): Promise<RestartAppServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestartAppServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoInput
  ): Promise<RetrieveEnvironmentInfoOutput>;
  public retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoInput,
    cb: (err: any, data?: RetrieveEnvironmentInfoOutput) => void
  ): void;
  public retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoInput,
    cb?: (err: any, data?: RetrieveEnvironmentInfoOutput) => void
  ): Promise<RetrieveEnvironmentInfoOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RetrieveEnvironmentInfoCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Swaps the CNAMEs of two environments.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsInput
  ): Promise<SwapEnvironmentCNAMEsOutput>;
  public swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsInput,
    cb: (err: any, data?: SwapEnvironmentCNAMEsOutput) => void
  ): void;
  public swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsInput,
    cb?: (err: any, data?: SwapEnvironmentCNAMEsOutput) => void
  ): Promise<SwapEnvironmentCNAMEsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SwapEnvironmentCNAMEsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Terminates the specified environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public terminateEnvironment(
    args: TerminateEnvironmentInput
  ): Promise<TerminateEnvironmentOutput>;
  public terminateEnvironment(
    args: TerminateEnvironmentInput,
    cb: (err: any, data?: TerminateEnvironmentOutput) => void
  ): void;
  public terminateEnvironment(
    args: TerminateEnvironmentInput,
    cb?: (err: any, data?: TerminateEnvironmentOutput) => void
  ): Promise<TerminateEnvironmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TerminateEnvironmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
   *
   * This operation may fail with one of the following errors:
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
   * <p>Modifies lifecycle settings for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleInput
  ): Promise<UpdateApplicationResourceLifecycleOutput>;
  public updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleInput,
    cb: (err: any, data?: UpdateApplicationResourceLifecycleOutput) => void
  ): void;
  public updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleInput,
    cb?: (err: any, data?: UpdateApplicationResourceLifecycleOutput) => void
  ): Promise<UpdateApplicationResourceLifecycleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApplicationResourceLifecycleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApplicationVersion(
    args: UpdateApplicationVersionInput
  ): Promise<UpdateApplicationVersionOutput>;
  public updateApplicationVersion(
    args: UpdateApplicationVersionInput,
    cb: (err: any, data?: UpdateApplicationVersionOutput) => void
  ): void;
  public updateApplicationVersion(
    args: UpdateApplicationVersionInput,
    cb?: (err: any, data?: UpdateApplicationVersionOutput) => void
  ): Promise<UpdateApplicationVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApplicationVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {TooManyBucketsException} <p>The specified account has reached its limit of Amazon S3 buckets.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConfigurationTemplate(
    args: UpdateConfigurationTemplateInput
  ): Promise<UpdateConfigurationTemplateOutput>;
  public updateConfigurationTemplate(
    args: UpdateConfigurationTemplateInput,
    cb: (err: any, data?: UpdateConfigurationTemplateOutput) => void
  ): void;
  public updateConfigurationTemplate(
    args: UpdateConfigurationTemplateInput,
    cb?: (err: any, data?: UpdateConfigurationTemplateOutput) => void
  ): Promise<UpdateConfigurationTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConfigurationTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {TooManyBucketsException} <p>The specified account has reached its limit of Amazon S3 buckets.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEnvironment(
    args: UpdateEnvironmentInput
  ): Promise<UpdateEnvironmentOutput>;
  public updateEnvironment(
    args: UpdateEnvironmentInput,
    cb: (err: any, data?: UpdateEnvironmentOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentInput,
    cb?: (err: any, data?: UpdateEnvironmentOutput) => void
  ): Promise<UpdateEnvironmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEnvironmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Currently, Elastic Beanstalk only supports tagging of Elastic Beanstalk environments. For details about environment tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.tagging.html">Tagging Resources in Your Elastic Beanstalk Environment</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {OperationInProgressException} <p>Unable to perform the specified operation because another operation that effects an element in this activity is already in progress.</p>
   *   - {TooManyTagsException} <p>The number of tags in the resource would exceed the number of tags that each resource can have.</p> <p>To calculate this, the operation considers both the number of tags the resource already has and the tags this operation would add if it succeeded.</p>
   *   - {ResourceNotFoundException} <p>A resource doesn't exist for the specified Amazon Resource Name (ARN).</p>
   *   - {ResourceTypeNotSupportedException} <p>The type of the specified Amazon Resource Name (ARN) isn't supported for this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTagsForResource(
    args: UpdateTagsForResourceInput
  ): Promise<UpdateTagsForResourceOutput>;
  public updateTagsForResource(
    args: UpdateTagsForResourceInput,
    cb: (err: any, data?: UpdateTagsForResourceOutput) => void
  ): void;
  public updateTagsForResource(
    args: UpdateTagsForResourceInput,
    cb?: (err: any, data?: UpdateTagsForResourceOutput) => void
  ): Promise<UpdateTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPrivilegesException} <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
   *   - {TooManyBucketsException} <p>The specified account has reached its limit of Amazon S3 buckets.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public validateConfigurationSettings(
    args: ValidateConfigurationSettingsInput
  ): Promise<ValidateConfigurationSettingsOutput>;
  public validateConfigurationSettings(
    args: ValidateConfigurationSettingsInput,
    cb: (err: any, data?: ValidateConfigurationSettingsOutput) => void
  ): void;
  public validateConfigurationSettings(
    args: ValidateConfigurationSettingsInput,
    cb?: (err: any, data?: ValidateConfigurationSettingsOutput) => void
  ): Promise<ValidateConfigurationSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ValidateConfigurationSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
