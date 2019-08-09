import { DirectoryServiceClient } from "./DirectoryServiceClient";
import { AcceptSharedDirectoryInput } from "./types/AcceptSharedDirectoryInput";
import { AcceptSharedDirectoryOutput } from "./types/AcceptSharedDirectoryOutput";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AddIpRoutesInput } from "./types/AddIpRoutesInput";
import { AddIpRoutesOutput } from "./types/AddIpRoutesOutput";
import { AddTagsToResourceInput } from "./types/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./types/AddTagsToResourceOutput";
import { AuthenticationFailedException } from "./types/AuthenticationFailedException";
import { CancelSchemaExtensionInput } from "./types/CancelSchemaExtensionInput";
import { CancelSchemaExtensionOutput } from "./types/CancelSchemaExtensionOutput";
import { ClientException } from "./types/ClientException";
import { ConnectDirectoryInput } from "./types/ConnectDirectoryInput";
import { ConnectDirectoryOutput } from "./types/ConnectDirectoryOutput";
import { CreateAliasInput } from "./types/CreateAliasInput";
import { CreateAliasOutput } from "./types/CreateAliasOutput";
import { CreateComputerInput } from "./types/CreateComputerInput";
import { CreateComputerOutput } from "./types/CreateComputerOutput";
import { CreateConditionalForwarderInput } from "./types/CreateConditionalForwarderInput";
import { CreateConditionalForwarderOutput } from "./types/CreateConditionalForwarderOutput";
import { CreateDirectoryInput } from "./types/CreateDirectoryInput";
import { CreateDirectoryOutput } from "./types/CreateDirectoryOutput";
import { CreateLogSubscriptionInput } from "./types/CreateLogSubscriptionInput";
import { CreateLogSubscriptionOutput } from "./types/CreateLogSubscriptionOutput";
import { CreateMicrosoftADInput } from "./types/CreateMicrosoftADInput";
import { CreateMicrosoftADOutput } from "./types/CreateMicrosoftADOutput";
import { CreateSnapshotInput } from "./types/CreateSnapshotInput";
import { CreateSnapshotOutput } from "./types/CreateSnapshotOutput";
import { CreateTrustInput } from "./types/CreateTrustInput";
import { CreateTrustOutput } from "./types/CreateTrustOutput";
import { DeleteConditionalForwarderInput } from "./types/DeleteConditionalForwarderInput";
import { DeleteConditionalForwarderOutput } from "./types/DeleteConditionalForwarderOutput";
import { DeleteDirectoryInput } from "./types/DeleteDirectoryInput";
import { DeleteDirectoryOutput } from "./types/DeleteDirectoryOutput";
import { DeleteLogSubscriptionInput } from "./types/DeleteLogSubscriptionInput";
import { DeleteLogSubscriptionOutput } from "./types/DeleteLogSubscriptionOutput";
import { DeleteSnapshotInput } from "./types/DeleteSnapshotInput";
import { DeleteSnapshotOutput } from "./types/DeleteSnapshotOutput";
import { DeleteTrustInput } from "./types/DeleteTrustInput";
import { DeleteTrustOutput } from "./types/DeleteTrustOutput";
import { DeregisterEventTopicInput } from "./types/DeregisterEventTopicInput";
import { DeregisterEventTopicOutput } from "./types/DeregisterEventTopicOutput";
import { DescribeConditionalForwardersInput } from "./types/DescribeConditionalForwardersInput";
import { DescribeConditionalForwardersOutput } from "./types/DescribeConditionalForwardersOutput";
import { DescribeDirectoriesInput } from "./types/DescribeDirectoriesInput";
import { DescribeDirectoriesOutput } from "./types/DescribeDirectoriesOutput";
import { DescribeDomainControllersInput } from "./types/DescribeDomainControllersInput";
import { DescribeDomainControllersOutput } from "./types/DescribeDomainControllersOutput";
import { DescribeEventTopicsInput } from "./types/DescribeEventTopicsInput";
import { DescribeEventTopicsOutput } from "./types/DescribeEventTopicsOutput";
import { DescribeSharedDirectoriesInput } from "./types/DescribeSharedDirectoriesInput";
import { DescribeSharedDirectoriesOutput } from "./types/DescribeSharedDirectoriesOutput";
import { DescribeSnapshotsInput } from "./types/DescribeSnapshotsInput";
import { DescribeSnapshotsOutput } from "./types/DescribeSnapshotsOutput";
import { DescribeTrustsInput } from "./types/DescribeTrustsInput";
import { DescribeTrustsOutput } from "./types/DescribeTrustsOutput";
import { DirectoryAlreadySharedException } from "./types/DirectoryAlreadySharedException";
import { DirectoryLimitExceededException } from "./types/DirectoryLimitExceededException";
import { DirectoryNotSharedException } from "./types/DirectoryNotSharedException";
import { DirectoryUnavailableException } from "./types/DirectoryUnavailableException";
import { DisableRadiusInput } from "./types/DisableRadiusInput";
import { DisableRadiusOutput } from "./types/DisableRadiusOutput";
import { DisableSsoInput } from "./types/DisableSsoInput";
import { DisableSsoOutput } from "./types/DisableSsoOutput";
import { DomainControllerLimitExceededException } from "./types/DomainControllerLimitExceededException";
import { EnableRadiusInput } from "./types/EnableRadiusInput";
import { EnableRadiusOutput } from "./types/EnableRadiusOutput";
import { EnableSsoInput } from "./types/EnableSsoInput";
import { EnableSsoOutput } from "./types/EnableSsoOutput";
import { EntityAlreadyExistsException } from "./types/EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./types/EntityDoesNotExistException";
import { GetDirectoryLimitsInput } from "./types/GetDirectoryLimitsInput";
import { GetDirectoryLimitsOutput } from "./types/GetDirectoryLimitsOutput";
import { GetSnapshotLimitsInput } from "./types/GetSnapshotLimitsInput";
import { GetSnapshotLimitsOutput } from "./types/GetSnapshotLimitsOutput";
import { InsufficientPermissionsException } from "./types/InsufficientPermissionsException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidPasswordException } from "./types/InvalidPasswordException";
import { InvalidTargetException } from "./types/InvalidTargetException";
import { IpRouteLimitExceededException } from "./types/IpRouteLimitExceededException";
import { ListIpRoutesInput } from "./types/ListIpRoutesInput";
import { ListIpRoutesOutput } from "./types/ListIpRoutesOutput";
import { ListLogSubscriptionsInput } from "./types/ListLogSubscriptionsInput";
import { ListLogSubscriptionsOutput } from "./types/ListLogSubscriptionsOutput";
import { ListSchemaExtensionsInput } from "./types/ListSchemaExtensionsInput";
import { ListSchemaExtensionsOutput } from "./types/ListSchemaExtensionsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { OrganizationsException } from "./types/OrganizationsException";
import { RegisterEventTopicInput } from "./types/RegisterEventTopicInput";
import { RegisterEventTopicOutput } from "./types/RegisterEventTopicOutput";
import { RejectSharedDirectoryInput } from "./types/RejectSharedDirectoryInput";
import { RejectSharedDirectoryOutput } from "./types/RejectSharedDirectoryOutput";
import { RemoveIpRoutesInput } from "./types/RemoveIpRoutesInput";
import { RemoveIpRoutesOutput } from "./types/RemoveIpRoutesOutput";
import { RemoveTagsFromResourceInput } from "./types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./types/RemoveTagsFromResourceOutput";
import { ResetUserPasswordInput } from "./types/ResetUserPasswordInput";
import { ResetUserPasswordOutput } from "./types/ResetUserPasswordOutput";
import { RestoreFromSnapshotInput } from "./types/RestoreFromSnapshotInput";
import { RestoreFromSnapshotOutput } from "./types/RestoreFromSnapshotOutput";
import { ServiceException } from "./types/ServiceException";
import { ShareDirectoryInput } from "./types/ShareDirectoryInput";
import { ShareDirectoryOutput } from "./types/ShareDirectoryOutput";
import { ShareLimitExceededException } from "./types/ShareLimitExceededException";
import { SnapshotLimitExceededException } from "./types/SnapshotLimitExceededException";
import { StartSchemaExtensionInput } from "./types/StartSchemaExtensionInput";
import { StartSchemaExtensionOutput } from "./types/StartSchemaExtensionOutput";
import { TagLimitExceededException } from "./types/TagLimitExceededException";
import { UnshareDirectoryInput } from "./types/UnshareDirectoryInput";
import { UnshareDirectoryOutput } from "./types/UnshareDirectoryOutput";
import { UnsupportedOperationException } from "./types/UnsupportedOperationException";
import { UpdateConditionalForwarderInput } from "./types/UpdateConditionalForwarderInput";
import { UpdateConditionalForwarderOutput } from "./types/UpdateConditionalForwarderOutput";
import { UpdateNumberOfDomainControllersInput } from "./types/UpdateNumberOfDomainControllersInput";
import { UpdateNumberOfDomainControllersOutput } from "./types/UpdateNumberOfDomainControllersOutput";
import { UpdateRadiusInput } from "./types/UpdateRadiusInput";
import { UpdateRadiusOutput } from "./types/UpdateRadiusOutput";
import { UpdateTrustInput } from "./types/UpdateTrustInput";
import { UpdateTrustOutput } from "./types/UpdateTrustOutput";
import { UserDoesNotExistException } from "./types/UserDoesNotExistException";
import { VerifyTrustInput } from "./types/VerifyTrustInput";
import { VerifyTrustOutput } from "./types/VerifyTrustOutput";
import { AcceptSharedDirectoryCommand } from "./commands/AcceptSharedDirectoryCommand";
import { AddIpRoutesCommand } from "./commands/AddIpRoutesCommand";
import { AddTagsToResourceCommand } from "./commands/AddTagsToResourceCommand";
import { CancelSchemaExtensionCommand } from "./commands/CancelSchemaExtensionCommand";
import { ConnectDirectoryCommand } from "./commands/ConnectDirectoryCommand";
import { CreateAliasCommand } from "./commands/CreateAliasCommand";
import { CreateComputerCommand } from "./commands/CreateComputerCommand";
import { CreateConditionalForwarderCommand } from "./commands/CreateConditionalForwarderCommand";
import { CreateDirectoryCommand } from "./commands/CreateDirectoryCommand";
import { CreateLogSubscriptionCommand } from "./commands/CreateLogSubscriptionCommand";
import { CreateMicrosoftADCommand } from "./commands/CreateMicrosoftADCommand";
import { CreateSnapshotCommand } from "./commands/CreateSnapshotCommand";
import { CreateTrustCommand } from "./commands/CreateTrustCommand";
import { DeleteConditionalForwarderCommand } from "./commands/DeleteConditionalForwarderCommand";
import { DeleteDirectoryCommand } from "./commands/DeleteDirectoryCommand";
import { DeleteLogSubscriptionCommand } from "./commands/DeleteLogSubscriptionCommand";
import { DeleteSnapshotCommand } from "./commands/DeleteSnapshotCommand";
import { DeleteTrustCommand } from "./commands/DeleteTrustCommand";
import { DeregisterEventTopicCommand } from "./commands/DeregisterEventTopicCommand";
import { DescribeConditionalForwardersCommand } from "./commands/DescribeConditionalForwardersCommand";
import { DescribeDirectoriesCommand } from "./commands/DescribeDirectoriesCommand";
import { DescribeDomainControllersCommand } from "./commands/DescribeDomainControllersCommand";
import { DescribeEventTopicsCommand } from "./commands/DescribeEventTopicsCommand";
import { DescribeSharedDirectoriesCommand } from "./commands/DescribeSharedDirectoriesCommand";
import { DescribeSnapshotsCommand } from "./commands/DescribeSnapshotsCommand";
import { DescribeTrustsCommand } from "./commands/DescribeTrustsCommand";
import { DisableRadiusCommand } from "./commands/DisableRadiusCommand";
import { DisableSsoCommand } from "./commands/DisableSsoCommand";
import { EnableRadiusCommand } from "./commands/EnableRadiusCommand";
import { EnableSsoCommand } from "./commands/EnableSsoCommand";
import { GetDirectoryLimitsCommand } from "./commands/GetDirectoryLimitsCommand";
import { GetSnapshotLimitsCommand } from "./commands/GetSnapshotLimitsCommand";
import { ListIpRoutesCommand } from "./commands/ListIpRoutesCommand";
import { ListLogSubscriptionsCommand } from "./commands/ListLogSubscriptionsCommand";
import { ListSchemaExtensionsCommand } from "./commands/ListSchemaExtensionsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { RegisterEventTopicCommand } from "./commands/RegisterEventTopicCommand";
import { RejectSharedDirectoryCommand } from "./commands/RejectSharedDirectoryCommand";
import { RemoveIpRoutesCommand } from "./commands/RemoveIpRoutesCommand";
import { RemoveTagsFromResourceCommand } from "./commands/RemoveTagsFromResourceCommand";
import { ResetUserPasswordCommand } from "./commands/ResetUserPasswordCommand";
import { RestoreFromSnapshotCommand } from "./commands/RestoreFromSnapshotCommand";
import { ShareDirectoryCommand } from "./commands/ShareDirectoryCommand";
import { StartSchemaExtensionCommand } from "./commands/StartSchemaExtensionCommand";
import { UnshareDirectoryCommand } from "./commands/UnshareDirectoryCommand";
import { UpdateConditionalForwarderCommand } from "./commands/UpdateConditionalForwarderCommand";
import { UpdateNumberOfDomainControllersCommand } from "./commands/UpdateNumberOfDomainControllersCommand";
import { UpdateRadiusCommand } from "./commands/UpdateRadiusCommand";
import { UpdateTrustCommand } from "./commands/UpdateTrustCommand";
import { VerifyTrustCommand } from "./commands/VerifyTrustCommand";

export class DirectoryService extends DirectoryServiceClient {
  /**
   * <p>Accepts a directory sharing request that was sent from the directory owner account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {DirectoryAlreadySharedException} <p>The specified directory has already been shared with this AWS account.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptSharedDirectory(
    args: AcceptSharedDirectoryInput
  ): Promise<AcceptSharedDirectoryOutput>;
  public acceptSharedDirectory(
    args: AcceptSharedDirectoryInput,
    cb: (err: any, data?: AcceptSharedDirectoryOutput) => void
  ): void;
  public acceptSharedDirectory(
    args: AcceptSharedDirectoryInput,
    cb?: (err: any, data?: AcceptSharedDirectoryOutput) => void
  ): Promise<AcceptSharedDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptSharedDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>If the DNS server for your on-premises domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on AWS to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {EntityAlreadyExistsException} <p>The specified entity already exists.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {DirectoryUnavailableException} <p>The specified directory is unavailable or could not be found.</p>
   *   - {IpRouteLimitExceededException} <p>The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP address blocks.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addIpRoutes(args: AddIpRoutesInput): Promise<AddIpRoutesOutput>;
  public addIpRoutes(
    args: AddIpRoutesInput,
    cb: (err: any, data?: AddIpRoutesOutput) => void
  ): void;
  public addIpRoutes(
    args: AddIpRoutesInput,
    cb?: (err: any, data?: AddIpRoutesOutput) => void
  ): Promise<AddIpRoutesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddIpRoutesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {TagLimitExceededException} <p>The maximum allowed number of tags was exceeded.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTagsToResource(
    args: AddTagsToResourceInput
  ): Promise<AddTagsToResourceOutput>;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb: (err: any, data?: AddTagsToResourceOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb?: (err: any, data?: AddTagsToResourceOutput) => void
  ): Promise<AddTagsToResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsToResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelSchemaExtension(
    args: CancelSchemaExtensionInput
  ): Promise<CancelSchemaExtensionOutput>;
  public cancelSchemaExtension(
    args: CancelSchemaExtensionInput,
    cb: (err: any, data?: CancelSchemaExtensionOutput) => void
  ): void;
  public cancelSchemaExtension(
    args: CancelSchemaExtensionInput,
    cb?: (err: any, data?: CancelSchemaExtensionOutput) => void
  ): Promise<CancelSchemaExtensionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelSchemaExtensionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an AD Connector to connect to an on-premises directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryLimitExceededException} <p>The maximum number of directories in the region has been reached. You can use the <a>GetDirectoryLimits</a> operation to determine your directory limits in the region.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public connectDirectory(
    args: ConnectDirectoryInput
  ): Promise<ConnectDirectoryOutput>;
  public connectDirectory(
    args: ConnectDirectoryInput,
    cb: (err: any, data?: ConnectDirectoryOutput) => void
  ): void;
  public connectDirectory(
    args: ConnectDirectoryInput,
    cb?: (err: any, data?: ConnectDirectoryOutput) => void
  ): Promise<ConnectDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConnectDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityAlreadyExistsException} <p>The specified entity already exists.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAlias(args: CreateAliasInput): Promise<CreateAliasOutput>;
  public createAlias(
    args: CreateAliasInput,
    cb: (err: any, data?: CreateAliasOutput) => void
  ): void;
  public createAlias(
    args: CreateAliasInput,
    cb?: (err: any, data?: CreateAliasOutput) => void
  ): Promise<CreateAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a computer account in the specified directory, and joins the computer to the directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthenticationFailedException} <p>An authentication error occurred.</p>
   *   - {DirectoryUnavailableException} <p>The specified directory is unavailable or could not be found.</p>
   *   - {EntityAlreadyExistsException} <p>The specified entity already exists.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createComputer(
    args: CreateComputerInput
  ): Promise<CreateComputerOutput>;
  public createComputer(
    args: CreateComputerInput,
    cb: (err: any, data?: CreateComputerOutput) => void
  ): void;
  public createComputer(
    args: CreateComputerInput,
    cb?: (err: any, data?: CreateComputerOutput) => void
  ): Promise<CreateComputerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateComputerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a conditional forwarder associated with your AWS directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityAlreadyExistsException} <p>The specified entity already exists.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {DirectoryUnavailableException} <p>The specified directory is unavailable or could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConditionalForwarder(
    args: CreateConditionalForwarderInput
  ): Promise<CreateConditionalForwarderOutput>;
  public createConditionalForwarder(
    args: CreateConditionalForwarderInput,
    cb: (err: any, data?: CreateConditionalForwarderOutput) => void
  ): void;
  public createConditionalForwarder(
    args: CreateConditionalForwarderInput,
    cb?: (err: any, data?: CreateConditionalForwarderOutput) => void
  ): Promise<CreateConditionalForwarderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConditionalForwarderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Simple AD directory.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryLimitExceededException} <p>The maximum number of directories in the region has been reached. You can use the <a>GetDirectoryLimits</a> operation to determine your directory limits in the region.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDirectory(
    args: CreateDirectoryInput
  ): Promise<CreateDirectoryOutput>;
  public createDirectory(
    args: CreateDirectoryInput,
    cb: (err: any, data?: CreateDirectoryOutput) => void
  ): void;
  public createDirectory(
    args: CreateDirectoryInput,
    cb?: (err: any, data?: CreateDirectoryOutput) => void
  ): Promise<CreateDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a subscription to forward real time Directory Service domain controller security logs to the specified CloudWatch log group in your AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityAlreadyExistsException} <p>The specified entity already exists.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {InsufficientPermissionsException} <p>The account does not have sufficient permission to perform the operation.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLogSubscription(
    args: CreateLogSubscriptionInput
  ): Promise<CreateLogSubscriptionOutput>;
  public createLogSubscription(
    args: CreateLogSubscriptionInput,
    cb: (err: any, data?: CreateLogSubscriptionOutput) => void
  ): void;
  public createLogSubscription(
    args: CreateLogSubscriptionInput,
    cb?: (err: any, data?: CreateLogSubscriptionOutput) => void
  ): Promise<CreateLogSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLogSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an AWS Managed Microsoft AD directory.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryLimitExceededException} <p>The maximum number of directories in the region has been reached. You can use the <a>GetDirectoryLimits</a> operation to determine your directory limits in the region.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createMicrosoftAD(
    args: CreateMicrosoftADInput
  ): Promise<CreateMicrosoftADOutput>;
  public createMicrosoftAD(
    args: CreateMicrosoftADInput,
    cb: (err: any, data?: CreateMicrosoftADOutput) => void
  ): void;
  public createMicrosoftAD(
    args: CreateMicrosoftADInput,
    cb?: (err: any, data?: CreateMicrosoftADOutput) => void
  ): Promise<CreateMicrosoftADOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateMicrosoftADCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {SnapshotLimitExceededException} <p>The maximum number of manual snapshots for the directory has been reached. You can use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits for a directory.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSnapshot(
    args: CreateSnapshotInput
  ): Promise<CreateSnapshotOutput>;
  public createSnapshot(
    args: CreateSnapshotInput,
    cb: (err: any, data?: CreateSnapshotOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotInput,
    cb?: (err: any, data?: CreateSnapshotOutput) => void
  ): Promise<CreateSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityAlreadyExistsException} <p>The specified entity already exists.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrust(args: CreateTrustInput): Promise<CreateTrustOutput>;
  public createTrust(
    args: CreateTrustInput,
    cb: (err: any, data?: CreateTrustOutput) => void
  ): void;
  public createTrust(
    args: CreateTrustInput,
    cb?: (err: any, data?: CreateTrustOutput) => void
  ): Promise<CreateTrustOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTrustCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a conditional forwarder that has been set up for your AWS directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {DirectoryUnavailableException} <p>The specified directory is unavailable or could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConditionalForwarder(
    args: DeleteConditionalForwarderInput
  ): Promise<DeleteConditionalForwarderOutput>;
  public deleteConditionalForwarder(
    args: DeleteConditionalForwarderInput,
    cb: (err: any, data?: DeleteConditionalForwarderOutput) => void
  ): void;
  public deleteConditionalForwarder(
    args: DeleteConditionalForwarderInput,
    cb?: (err: any, data?: DeleteConditionalForwarderOutput) => void
  ): Promise<DeleteConditionalForwarderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConditionalForwarderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an AWS Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDirectory(
    args: DeleteDirectoryInput
  ): Promise<DeleteDirectoryOutput>;
  public deleteDirectory(
    args: DeleteDirectoryInput,
    cb: (err: any, data?: DeleteDirectoryOutput) => void
  ): void;
  public deleteDirectory(
    args: DeleteDirectoryInput,
    cb?: (err: any, data?: DeleteDirectoryOutput) => void
  ): Promise<DeleteDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified log subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLogSubscription(
    args: DeleteLogSubscriptionInput
  ): Promise<DeleteLogSubscriptionOutput>;
  public deleteLogSubscription(
    args: DeleteLogSubscriptionInput,
    cb: (err: any, data?: DeleteLogSubscriptionOutput) => void
  ): void;
  public deleteLogSubscription(
    args: DeleteLogSubscriptionInput,
    cb?: (err: any, data?: DeleteLogSubscriptionOutput) => void
  ): Promise<DeleteLogSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLogSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a directory snapshot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSnapshot(
    args: DeleteSnapshotInput
  ): Promise<DeleteSnapshotOutput>;
  public deleteSnapshot(
    args: DeleteSnapshotInput,
    cb: (err: any, data?: DeleteSnapshotOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotInput,
    cb?: (err: any, data?: DeleteSnapshotOutput) => void
  ): Promise<DeleteSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTrust(args: DeleteTrustInput): Promise<DeleteTrustOutput>;
  public deleteTrust(
    args: DeleteTrustInput,
    cb: (err: any, data?: DeleteTrustOutput) => void
  ): void;
  public deleteTrust(
    args: DeleteTrustInput,
    cb?: (err: any, data?: DeleteTrustOutput) => void
  ): Promise<DeleteTrustOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTrustCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified directory as a publisher to the specified SNS topic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterEventTopic(
    args: DeregisterEventTopicInput
  ): Promise<DeregisterEventTopicOutput>;
  public deregisterEventTopic(
    args: DeregisterEventTopicInput,
    cb: (err: any, data?: DeregisterEventTopicOutput) => void
  ): void;
  public deregisterEventTopic(
    args: DeregisterEventTopicInput,
    cb?: (err: any, data?: DeregisterEventTopicOutput) => void
  ): Promise<DeregisterEventTopicOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterEventTopicCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {DirectoryUnavailableException} <p>The specified directory is unavailable or could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConditionalForwarders(
    args: DescribeConditionalForwardersInput
  ): Promise<DescribeConditionalForwardersOutput>;
  public describeConditionalForwarders(
    args: DescribeConditionalForwardersInput,
    cb: (err: any, data?: DescribeConditionalForwardersOutput) => void
  ): void;
  public describeConditionalForwarders(
    args: DescribeConditionalForwardersInput,
    cb?: (err: any, data?: DescribeConditionalForwardersOutput) => void
  ): Promise<DescribeConditionalForwardersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConditionalForwardersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDirectories(
    args: DescribeDirectoriesInput
  ): Promise<DescribeDirectoriesOutput>;
  public describeDirectories(
    args: DescribeDirectoriesInput,
    cb: (err: any, data?: DescribeDirectoriesOutput) => void
  ): void;
  public describeDirectories(
    args: DescribeDirectoriesInput,
    cb?: (err: any, data?: DescribeDirectoriesOutput) => void
  ): Promise<DescribeDirectoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDirectoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides information about any domain controllers in your directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDomainControllers(
    args: DescribeDomainControllersInput
  ): Promise<DescribeDomainControllersOutput>;
  public describeDomainControllers(
    args: DescribeDomainControllersInput,
    cb: (err: any, data?: DescribeDomainControllersOutput) => void
  ): void;
  public describeDomainControllers(
    args: DescribeDomainControllersInput,
    cb?: (err: any, data?: DescribeDomainControllersOutput) => void
  ): Promise<DescribeDomainControllersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDomainControllersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Obtains information about which SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventTopics(
    args: DescribeEventTopicsInput
  ): Promise<DescribeEventTopicsOutput>;
  public describeEventTopics(
    args: DescribeEventTopicsInput,
    cb: (err: any, data?: DescribeEventTopicsOutput) => void
  ): void;
  public describeEventTopics(
    args: DescribeEventTopicsInput,
    cb?: (err: any, data?: DescribeEventTopicsOutput) => void
  ): Promise<DescribeEventTopicsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventTopicsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the shared directories in your account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSharedDirectories(
    args: DescribeSharedDirectoriesInput
  ): Promise<DescribeSharedDirectoriesOutput>;
  public describeSharedDirectories(
    args: DescribeSharedDirectoriesInput,
    cb: (err: any, data?: DescribeSharedDirectoriesOutput) => void
  ): void;
  public describeSharedDirectories(
    args: DescribeSharedDirectoriesInput,
    cb?: (err: any, data?: DescribeSharedDirectoriesOutput) => void
  ): Promise<DescribeSharedDirectoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSharedDirectoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSnapshots(
    args: DescribeSnapshotsInput
  ): Promise<DescribeSnapshotsOutput>;
  public describeSnapshots(
    args: DescribeSnapshotsInput,
    cb: (err: any, data?: DescribeSnapshotsOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsInput,
    cb?: (err: any, data?: DescribeSnapshotsOutput) => void
  ): Promise<DescribeSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTrusts(
    args: DescribeTrustsInput
  ): Promise<DescribeTrustsOutput>;
  public describeTrusts(
    args: DescribeTrustsInput,
    cb: (err: any, data?: DescribeTrustsOutput) => void
  ): void;
  public describeTrusts(
    args: DescribeTrustsInput,
    cb?: (err: any, data?: DescribeTrustsOutput) => void
  ): Promise<DescribeTrustsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTrustsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableRadius(args: DisableRadiusInput): Promise<DisableRadiusOutput>;
  public disableRadius(
    args: DisableRadiusInput,
    cb: (err: any, data?: DisableRadiusOutput) => void
  ): void;
  public disableRadius(
    args: DisableRadiusInput,
    cb?: (err: any, data?: DisableRadiusOutput) => void
  ): Promise<DisableRadiusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableRadiusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables single-sign on for a directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InsufficientPermissionsException} <p>The account does not have sufficient permission to perform the operation.</p>
   *   - {AuthenticationFailedException} <p>An authentication error occurred.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableSso(args: DisableSsoInput): Promise<DisableSsoOutput>;
  public disableSso(
    args: DisableSsoInput,
    cb: (err: any, data?: DisableSsoOutput) => void
  ): void;
  public disableSso(
    args: DisableSsoInput,
    cb?: (err: any, data?: DisableSsoOutput) => void
  ): Promise<DisableSsoOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableSsoCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {EntityAlreadyExistsException} <p>The specified entity already exists.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableRadius(args: EnableRadiusInput): Promise<EnableRadiusOutput>;
  public enableRadius(
    args: EnableRadiusInput,
    cb: (err: any, data?: EnableRadiusOutput) => void
  ): void;
  public enableRadius(
    args: EnableRadiusInput,
    cb?: (err: any, data?: EnableRadiusOutput) => void
  ): Promise<EnableRadiusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableRadiusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables single sign-on for a directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InsufficientPermissionsException} <p>The account does not have sufficient permission to perform the operation.</p>
   *   - {AuthenticationFailedException} <p>An authentication error occurred.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableSso(args: EnableSsoInput): Promise<EnableSsoOutput>;
  public enableSso(
    args: EnableSsoInput,
    cb: (err: any, data?: EnableSsoOutput) => void
  ): void;
  public enableSso(
    args: EnableSsoInput,
    cb?: (err: any, data?: EnableSsoOutput) => void
  ): Promise<EnableSsoOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableSsoCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Obtains directory limit information for the current region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDirectoryLimits(
    args: GetDirectoryLimitsInput
  ): Promise<GetDirectoryLimitsOutput>;
  public getDirectoryLimits(
    args: GetDirectoryLimitsInput,
    cb: (err: any, data?: GetDirectoryLimitsOutput) => void
  ): void;
  public getDirectoryLimits(
    args: GetDirectoryLimitsInput,
    cb?: (err: any, data?: GetDirectoryLimitsOutput) => void
  ): Promise<GetDirectoryLimitsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDirectoryLimitsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Obtains the manual snapshot limits for a directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSnapshotLimits(
    args: GetSnapshotLimitsInput
  ): Promise<GetSnapshotLimitsOutput>;
  public getSnapshotLimits(
    args: GetSnapshotLimitsInput,
    cb: (err: any, data?: GetSnapshotLimitsOutput) => void
  ): void;
  public getSnapshotLimits(
    args: GetSnapshotLimitsInput,
    cb?: (err: any, data?: GetSnapshotLimitsOutput) => void
  ): Promise<GetSnapshotLimitsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSnapshotLimitsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the address blocks that you have added to a directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listIpRoutes(args: ListIpRoutesInput): Promise<ListIpRoutesOutput>;
  public listIpRoutes(
    args: ListIpRoutesInput,
    cb: (err: any, data?: ListIpRoutesOutput) => void
  ): void;
  public listIpRoutes(
    args: ListIpRoutesInput,
    cb?: (err: any, data?: ListIpRoutesOutput) => void
  ): Promise<ListIpRoutesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListIpRoutesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the active log subscriptions for the AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLogSubscriptions(
    args: ListLogSubscriptionsInput
  ): Promise<ListLogSubscriptionsOutput>;
  public listLogSubscriptions(
    args: ListLogSubscriptionsInput,
    cb: (err: any, data?: ListLogSubscriptionsOutput) => void
  ): void;
  public listLogSubscriptions(
    args: ListLogSubscriptionsInput,
    cb?: (err: any, data?: ListLogSubscriptionsOutput) => void
  ): Promise<ListLogSubscriptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLogSubscriptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all schema extensions applied to a Microsoft AD Directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSchemaExtensions(
    args: ListSchemaExtensionsInput
  ): Promise<ListSchemaExtensionsOutput>;
  public listSchemaExtensions(
    args: ListSchemaExtensionsInput,
    cb: (err: any, data?: ListSchemaExtensionsOutput) => void
  ): void;
  public listSchemaExtensions(
    args: ListSchemaExtensionsInput,
    cb?: (err: any, data?: ListSchemaExtensionsOutput) => void
  ): Promise<ListSchemaExtensionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSchemaExtensionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all tags on a directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
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
   * <p>Associates a directory with an SNS topic. This establishes the directory as a publisher to the specified SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerEventTopic(
    args: RegisterEventTopicInput
  ): Promise<RegisterEventTopicOutput>;
  public registerEventTopic(
    args: RegisterEventTopicInput,
    cb: (err: any, data?: RegisterEventTopicOutput) => void
  ): void;
  public registerEventTopic(
    args: RegisterEventTopicInput,
    cb?: (err: any, data?: RegisterEventTopicOutput) => void
  ): Promise<RegisterEventTopicOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterEventTopicCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Rejects a directory sharing request that was sent from the directory owner account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {DirectoryAlreadySharedException} <p>The specified directory has already been shared with this AWS account.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rejectSharedDirectory(
    args: RejectSharedDirectoryInput
  ): Promise<RejectSharedDirectoryOutput>;
  public rejectSharedDirectory(
    args: RejectSharedDirectoryInput,
    cb: (err: any, data?: RejectSharedDirectoryOutput) => void
  ): void;
  public rejectSharedDirectory(
    args: RejectSharedDirectoryInput,
    cb?: (err: any, data?: RejectSharedDirectoryOutput) => void
  ): Promise<RejectSharedDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RejectSharedDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes IP address blocks from a directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {DirectoryUnavailableException} <p>The specified directory is unavailable or could not be found.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeIpRoutes(
    args: RemoveIpRoutesInput
  ): Promise<RemoveIpRoutesOutput>;
  public removeIpRoutes(
    args: RemoveIpRoutesInput,
    cb: (err: any, data?: RemoveIpRoutesOutput) => void
  ): void;
  public removeIpRoutes(
    args: RemoveIpRoutesInput,
    cb?: (err: any, data?: RemoveIpRoutesOutput) => void
  ): Promise<RemoveIpRoutesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveIpRoutesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes tags from a directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput
  ): Promise<RemoveTagsFromResourceOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb?: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): Promise<RemoveTagsFromResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets the password for any user in your AWS Managed Microsoft AD or Simple AD directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryUnavailableException} <p>The specified directory is unavailable or could not be found.</p>
   *   - {UserDoesNotExistException} <p>The user provided a username that does not exist in your directory.</p>
   *   - {InvalidPasswordException} <p>The new password provided by the user does not meet the password complexity requirements defined in your directory.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetUserPassword(
    args: ResetUserPasswordInput
  ): Promise<ResetUserPasswordOutput>;
  public resetUserPassword(
    args: ResetUserPasswordInput,
    cb: (err: any, data?: ResetUserPasswordOutput) => void
  ): void;
  public resetUserPassword(
    args: ResetUserPasswordInput,
    cb?: (err: any, data?: ResetUserPasswordOutput) => void
  ): Promise<ResetUserPasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetUserPasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreFromSnapshot(
    args: RestoreFromSnapshotInput
  ): Promise<RestoreFromSnapshotOutput>;
  public restoreFromSnapshot(
    args: RestoreFromSnapshotInput,
    cb: (err: any, data?: RestoreFromSnapshotOutput) => void
  ): void;
  public restoreFromSnapshot(
    args: RestoreFromSnapshotInput,
    cb?: (err: any, data?: RestoreFromSnapshotOutput) => void
  ): Promise<RestoreFromSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreFromSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Shares a specified directory (<code>DirectoryId</code>) in your AWS account (directory owner) with another AWS account (directory consumer). With this operation you can use your directory from any AWS account and from any Amazon VPC within an AWS Region.</p> <p>When you share your AWS Managed Microsoft AD directory, AWS Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between AWS accounts inside the same AWS organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other AWS account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryAlreadySharedException} <p>The specified directory has already been shared with this AWS account.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidTargetException} <p>The specified shared target is not valid.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ShareLimitExceededException} <p>The maximum number of AWS accounts that you can share with this directory has been reached.</p>
   *   - {OrganizationsException} <p>Exception encountered while trying to access your AWS organization.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public shareDirectory(
    args: ShareDirectoryInput
  ): Promise<ShareDirectoryOutput>;
  public shareDirectory(
    args: ShareDirectoryInput,
    cb: (err: any, data?: ShareDirectoryOutput) => void
  ): void;
  public shareDirectory(
    args: ShareDirectoryInput,
    cb?: (err: any, data?: ShareDirectoryOutput) => void
  ): Promise<ShareDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ShareDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Applies a schema extension to a Microsoft AD directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryUnavailableException} <p>The specified directory is unavailable or could not be found.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {SnapshotLimitExceededException} <p>The maximum number of manual snapshots for the directory has been reached. You can use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits for a directory.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startSchemaExtension(
    args: StartSchemaExtensionInput
  ): Promise<StartSchemaExtensionOutput>;
  public startSchemaExtension(
    args: StartSchemaExtensionInput,
    cb: (err: any, data?: StartSchemaExtensionOutput) => void
  ): void;
  public startSchemaExtension(
    args: StartSchemaExtensionInput,
    cb?: (err: any, data?: StartSchemaExtensionOutput) => void
  ): Promise<StartSchemaExtensionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartSchemaExtensionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops the directory sharing between the directory owner and consumer accounts. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidTargetException} <p>The specified shared target is not valid.</p>
   *   - {DirectoryNotSharedException} <p>The specified directory has not been shared with this AWS account.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unshareDirectory(
    args: UnshareDirectoryInput
  ): Promise<UnshareDirectoryOutput>;
  public unshareDirectory(
    args: UnshareDirectoryInput,
    cb: (err: any, data?: UnshareDirectoryOutput) => void
  ): void;
  public unshareDirectory(
    args: UnshareDirectoryInput,
    cb?: (err: any, data?: UnshareDirectoryOutput) => void
  ): Promise<UnshareDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnshareDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a conditional forwarder that has been set up for your AWS directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {DirectoryUnavailableException} <p>The specified directory is unavailable or could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConditionalForwarder(
    args: UpdateConditionalForwarderInput
  ): Promise<UpdateConditionalForwarderOutput>;
  public updateConditionalForwarder(
    args: UpdateConditionalForwarderInput,
    cb: (err: any, data?: UpdateConditionalForwarderOutput) => void
  ): void;
  public updateConditionalForwarder(
    args: UpdateConditionalForwarderInput,
    cb?: (err: any, data?: UpdateConditionalForwarderOutput) => void
  ): Promise<UpdateConditionalForwarderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConditionalForwarderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {DirectoryUnavailableException} <p>The specified directory is unavailable or could not be found.</p>
   *   - {DomainControllerLimitExceededException} <p>The maximum allowed number of domain controllers per directory was exceeded. The default limit per directory is 20 domain controllers.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateNumberOfDomainControllers(
    args: UpdateNumberOfDomainControllersInput
  ): Promise<UpdateNumberOfDomainControllersOutput>;
  public updateNumberOfDomainControllers(
    args: UpdateNumberOfDomainControllersInput,
    cb: (err: any, data?: UpdateNumberOfDomainControllersOutput) => void
  ): void;
  public updateNumberOfDomainControllers(
    args: UpdateNumberOfDomainControllersInput,
    cb?: (err: any, data?: UpdateNumberOfDomainControllersOutput) => void
  ): Promise<UpdateNumberOfDomainControllersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateNumberOfDomainControllersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRadius(args: UpdateRadiusInput): Promise<UpdateRadiusOutput>;
  public updateRadius(
    args: UpdateRadiusInput,
    cb: (err: any, data?: UpdateRadiusOutput) => void
  ): void;
  public updateRadius(
    args: UpdateRadiusInput,
    cb?: (err: any, data?: UpdateRadiusOutput) => void
  ): Promise<UpdateRadiusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRadiusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTrust(args: UpdateTrustInput): Promise<UpdateTrustOutput>;
  public updateTrust(
    args: UpdateTrustInput,
    cb: (err: any, data?: UpdateTrustOutput) => void
  ): void;
  public updateTrust(
    args: UpdateTrustInput,
    cb?: (err: any, data?: UpdateTrustOutput) => void
  ): Promise<UpdateTrustOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTrustCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityDoesNotExistException} <p>The specified entity could not be found.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ClientException} <p>A client exception has occurred.</p>
   *   - {ServiceException} <p>An exception has occurred in AWS Directory Service.</p>
   *   - {UnsupportedOperationException} <p>The operation is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public verifyTrust(args: VerifyTrustInput): Promise<VerifyTrustOutput>;
  public verifyTrust(
    args: VerifyTrustInput,
    cb: (err: any, data?: VerifyTrustOutput) => void
  ): void;
  public verifyTrust(
    args: VerifyTrustInput,
    cb?: (err: any, data?: VerifyTrustOutput) => void
  ): Promise<VerifyTrustOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new VerifyTrustCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
