import { AppStreamClient } from "./AppStreamClient";
import { AssociateFleetInput } from "./types/AssociateFleetInput";
import { AssociateFleetOutput } from "./types/AssociateFleetOutput";
import { BatchAssociateUserStackInput } from "./types/BatchAssociateUserStackInput";
import { BatchAssociateUserStackOutput } from "./types/BatchAssociateUserStackOutput";
import { BatchDisassociateUserStackInput } from "./types/BatchDisassociateUserStackInput";
import { BatchDisassociateUserStackOutput } from "./types/BatchDisassociateUserStackOutput";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CopyImageInput } from "./types/CopyImageInput";
import { CopyImageOutput } from "./types/CopyImageOutput";
import { CreateDirectoryConfigInput } from "./types/CreateDirectoryConfigInput";
import { CreateDirectoryConfigOutput } from "./types/CreateDirectoryConfigOutput";
import { CreateFleetInput } from "./types/CreateFleetInput";
import { CreateFleetOutput } from "./types/CreateFleetOutput";
import { CreateImageBuilderInput } from "./types/CreateImageBuilderInput";
import { CreateImageBuilderOutput } from "./types/CreateImageBuilderOutput";
import { CreateImageBuilderStreamingURLInput } from "./types/CreateImageBuilderStreamingURLInput";
import { CreateImageBuilderStreamingURLOutput } from "./types/CreateImageBuilderStreamingURLOutput";
import { CreateStackInput } from "./types/CreateStackInput";
import { CreateStackOutput } from "./types/CreateStackOutput";
import { CreateStreamingURLInput } from "./types/CreateStreamingURLInput";
import { CreateStreamingURLOutput } from "./types/CreateStreamingURLOutput";
import { CreateUsageReportSubscriptionInput } from "./types/CreateUsageReportSubscriptionInput";
import { CreateUsageReportSubscriptionOutput } from "./types/CreateUsageReportSubscriptionOutput";
import { CreateUserInput } from "./types/CreateUserInput";
import { CreateUserOutput } from "./types/CreateUserOutput";
import { DeleteDirectoryConfigInput } from "./types/DeleteDirectoryConfigInput";
import { DeleteDirectoryConfigOutput } from "./types/DeleteDirectoryConfigOutput";
import { DeleteFleetInput } from "./types/DeleteFleetInput";
import { DeleteFleetOutput } from "./types/DeleteFleetOutput";
import { DeleteImageBuilderInput } from "./types/DeleteImageBuilderInput";
import { DeleteImageBuilderOutput } from "./types/DeleteImageBuilderOutput";
import { DeleteImageInput } from "./types/DeleteImageInput";
import { DeleteImageOutput } from "./types/DeleteImageOutput";
import { DeleteImagePermissionsInput } from "./types/DeleteImagePermissionsInput";
import { DeleteImagePermissionsOutput } from "./types/DeleteImagePermissionsOutput";
import { DeleteStackInput } from "./types/DeleteStackInput";
import { DeleteStackOutput } from "./types/DeleteStackOutput";
import { DeleteUsageReportSubscriptionInput } from "./types/DeleteUsageReportSubscriptionInput";
import { DeleteUsageReportSubscriptionOutput } from "./types/DeleteUsageReportSubscriptionOutput";
import { DeleteUserInput } from "./types/DeleteUserInput";
import { DeleteUserOutput } from "./types/DeleteUserOutput";
import { DescribeDirectoryConfigsInput } from "./types/DescribeDirectoryConfigsInput";
import { DescribeDirectoryConfigsOutput } from "./types/DescribeDirectoryConfigsOutput";
import { DescribeFleetsInput } from "./types/DescribeFleetsInput";
import { DescribeFleetsOutput } from "./types/DescribeFleetsOutput";
import { DescribeImageBuildersInput } from "./types/DescribeImageBuildersInput";
import { DescribeImageBuildersOutput } from "./types/DescribeImageBuildersOutput";
import { DescribeImagePermissionsInput } from "./types/DescribeImagePermissionsInput";
import { DescribeImagePermissionsOutput } from "./types/DescribeImagePermissionsOutput";
import { DescribeImagesInput } from "./types/DescribeImagesInput";
import { DescribeImagesOutput } from "./types/DescribeImagesOutput";
import { DescribeSessionsInput } from "./types/DescribeSessionsInput";
import { DescribeSessionsOutput } from "./types/DescribeSessionsOutput";
import { DescribeStacksInput } from "./types/DescribeStacksInput";
import { DescribeStacksOutput } from "./types/DescribeStacksOutput";
import { DescribeUsageReportSubscriptionsInput } from "./types/DescribeUsageReportSubscriptionsInput";
import { DescribeUsageReportSubscriptionsOutput } from "./types/DescribeUsageReportSubscriptionsOutput";
import { DescribeUserStackAssociationsInput } from "./types/DescribeUserStackAssociationsInput";
import { DescribeUserStackAssociationsOutput } from "./types/DescribeUserStackAssociationsOutput";
import { DescribeUsersInput } from "./types/DescribeUsersInput";
import { DescribeUsersOutput } from "./types/DescribeUsersOutput";
import { DisableUserInput } from "./types/DisableUserInput";
import { DisableUserOutput } from "./types/DisableUserOutput";
import { DisassociateFleetInput } from "./types/DisassociateFleetInput";
import { DisassociateFleetOutput } from "./types/DisassociateFleetOutput";
import { EnableUserInput } from "./types/EnableUserInput";
import { EnableUserOutput } from "./types/EnableUserOutput";
import { ExpireSessionInput } from "./types/ExpireSessionInput";
import { ExpireSessionOutput } from "./types/ExpireSessionOutput";
import { IncompatibleImageException } from "./types/IncompatibleImageException";
import { InvalidAccountStatusException } from "./types/InvalidAccountStatusException";
import { InvalidParameterCombinationException } from "./types/InvalidParameterCombinationException";
import { InvalidRoleException } from "./types/InvalidRoleException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListAssociatedFleetsInput } from "./types/ListAssociatedFleetsInput";
import { ListAssociatedFleetsOutput } from "./types/ListAssociatedFleetsOutput";
import { ListAssociatedStacksInput } from "./types/ListAssociatedStacksInput";
import { ListAssociatedStacksOutput } from "./types/ListAssociatedStacksOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { OperationNotPermittedException } from "./types/OperationNotPermittedException";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotAvailableException } from "./types/ResourceNotAvailableException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { StartFleetInput } from "./types/StartFleetInput";
import { StartFleetOutput } from "./types/StartFleetOutput";
import { StartImageBuilderInput } from "./types/StartImageBuilderInput";
import { StartImageBuilderOutput } from "./types/StartImageBuilderOutput";
import { StopFleetInput } from "./types/StopFleetInput";
import { StopFleetOutput } from "./types/StopFleetOutput";
import { StopImageBuilderInput } from "./types/StopImageBuilderInput";
import { StopImageBuilderOutput } from "./types/StopImageBuilderOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateDirectoryConfigInput } from "./types/UpdateDirectoryConfigInput";
import { UpdateDirectoryConfigOutput } from "./types/UpdateDirectoryConfigOutput";
import { UpdateFleetInput } from "./types/UpdateFleetInput";
import { UpdateFleetOutput } from "./types/UpdateFleetOutput";
import { UpdateImagePermissionsInput } from "./types/UpdateImagePermissionsInput";
import { UpdateImagePermissionsOutput } from "./types/UpdateImagePermissionsOutput";
import { UpdateStackInput } from "./types/UpdateStackInput";
import { UpdateStackOutput } from "./types/UpdateStackOutput";
import { AssociateFleetCommand } from "./commands/AssociateFleetCommand";
import { BatchAssociateUserStackCommand } from "./commands/BatchAssociateUserStackCommand";
import { BatchDisassociateUserStackCommand } from "./commands/BatchDisassociateUserStackCommand";
import { CopyImageCommand } from "./commands/CopyImageCommand";
import { CreateDirectoryConfigCommand } from "./commands/CreateDirectoryConfigCommand";
import { CreateFleetCommand } from "./commands/CreateFleetCommand";
import { CreateImageBuilderCommand } from "./commands/CreateImageBuilderCommand";
import { CreateImageBuilderStreamingURLCommand } from "./commands/CreateImageBuilderStreamingURLCommand";
import { CreateStackCommand } from "./commands/CreateStackCommand";
import { CreateStreamingURLCommand } from "./commands/CreateStreamingURLCommand";
import { CreateUsageReportSubscriptionCommand } from "./commands/CreateUsageReportSubscriptionCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { DeleteDirectoryConfigCommand } from "./commands/DeleteDirectoryConfigCommand";
import { DeleteFleetCommand } from "./commands/DeleteFleetCommand";
import { DeleteImageBuilderCommand } from "./commands/DeleteImageBuilderCommand";
import { DeleteImageCommand } from "./commands/DeleteImageCommand";
import { DeleteImagePermissionsCommand } from "./commands/DeleteImagePermissionsCommand";
import { DeleteStackCommand } from "./commands/DeleteStackCommand";
import { DeleteUsageReportSubscriptionCommand } from "./commands/DeleteUsageReportSubscriptionCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DescribeDirectoryConfigsCommand } from "./commands/DescribeDirectoryConfigsCommand";
import { DescribeFleetsCommand } from "./commands/DescribeFleetsCommand";
import { DescribeImageBuildersCommand } from "./commands/DescribeImageBuildersCommand";
import { DescribeImagePermissionsCommand } from "./commands/DescribeImagePermissionsCommand";
import { DescribeImagesCommand } from "./commands/DescribeImagesCommand";
import { DescribeSessionsCommand } from "./commands/DescribeSessionsCommand";
import { DescribeStacksCommand } from "./commands/DescribeStacksCommand";
import { DescribeUsageReportSubscriptionsCommand } from "./commands/DescribeUsageReportSubscriptionsCommand";
import { DescribeUserStackAssociationsCommand } from "./commands/DescribeUserStackAssociationsCommand";
import { DescribeUsersCommand } from "./commands/DescribeUsersCommand";
import { DisableUserCommand } from "./commands/DisableUserCommand";
import { DisassociateFleetCommand } from "./commands/DisassociateFleetCommand";
import { EnableUserCommand } from "./commands/EnableUserCommand";
import { ExpireSessionCommand } from "./commands/ExpireSessionCommand";
import { ListAssociatedFleetsCommand } from "./commands/ListAssociatedFleetsCommand";
import { ListAssociatedStacksCommand } from "./commands/ListAssociatedStacksCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { StartFleetCommand } from "./commands/StartFleetCommand";
import { StartImageBuilderCommand } from "./commands/StartImageBuilderCommand";
import { StopFleetCommand } from "./commands/StopFleetCommand";
import { StopImageBuilderCommand } from "./commands/StopImageBuilderCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateDirectoryConfigCommand } from "./commands/UpdateDirectoryConfigCommand";
import { UpdateFleetCommand } from "./commands/UpdateFleetCommand";
import { UpdateImagePermissionsCommand } from "./commands/UpdateImagePermissionsCommand";
import { UpdateStackCommand } from "./commands/UpdateStackCommand";

export class AppStream extends AppStreamClient {
  /**
   * <p>Associates the specified fleet with the specified stack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {IncompatibleImageException} <p>The image does not support storage connectors.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateFleet(
    args: AssociateFleetInput
  ): Promise<AssociateFleetOutput>;
  public associateFleet(
    args: AssociateFleetInput,
    cb: (err: any, data?: AssociateFleetOutput) => void
  ): void;
  public associateFleet(
    args: AssociateFleetInput,
    cb?: (err: any, data?: AssociateFleetOutput) => void
  ): Promise<AssociateFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchAssociateUserStack(
    args: BatchAssociateUserStackInput
  ): Promise<BatchAssociateUserStackOutput>;
  public batchAssociateUserStack(
    args: BatchAssociateUserStackInput,
    cb: (err: any, data?: BatchAssociateUserStackOutput) => void
  ): void;
  public batchAssociateUserStack(
    args: BatchAssociateUserStackInput,
    cb?: (err: any, data?: BatchAssociateUserStackOutput) => void
  ): Promise<BatchAssociateUserStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchAssociateUserStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the specified users from the specified stacks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDisassociateUserStack(
    args: BatchDisassociateUserStackInput
  ): Promise<BatchDisassociateUserStackOutput>;
  public batchDisassociateUserStack(
    args: BatchDisassociateUserStackInput,
    cb: (err: any, data?: BatchDisassociateUserStackOutput) => void
  ): void;
  public batchDisassociateUserStack(
    args: BatchDisassociateUserStackInput,
    cb?: (err: any, data?: BatchDisassociateUserStackOutput) => void
  ): Promise<BatchDisassociateUserStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDisassociateUserStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ResourceNotAvailableException} <p>The specified resource exists and is not in use, but isn't available.</p>
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {IncompatibleImageException} <p>The image does not support storage connectors.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyImage(args: CopyImageInput): Promise<CopyImageOutput>;
  public copyImage(
    args: CopyImageInput,
    cb: (err: any, data?: CopyImageOutput) => void
  ): void;
  public copyImage(
    args: CopyImageInput,
    cb?: (err: any, data?: CopyImageOutput) => void
  ): Promise<CopyImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDirectoryConfig(
    args: CreateDirectoryConfigInput
  ): Promise<CreateDirectoryConfigOutput>;
  public createDirectoryConfig(
    args: CreateDirectoryConfigInput,
    cb: (err: any, data?: CreateDirectoryConfigOutput) => void
  ): void;
  public createDirectoryConfig(
    args: CreateDirectoryConfigInput,
    cb?: (err: any, data?: CreateDirectoryConfigOutput) => void
  ): Promise<CreateDirectoryConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDirectoryConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a fleet. A fleet consists of streaming instances that run a specified image.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {ResourceNotAvailableException} <p>The specified resource exists and is not in use, but isn't available.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {InvalidRoleException} <p>The specified role is invalid.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {IncompatibleImageException} <p>The image does not support storage connectors.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFleet(args: CreateFleetInput): Promise<CreateFleetOutput>;
  public createFleet(
    args: CreateFleetInput,
    cb: (err: any, data?: CreateFleetOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetInput,
    cb?: (err: any, data?: CreateFleetOutput) => void
  ): Promise<CreateFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {ResourceNotAvailableException} <p>The specified resource exists and is not in use, but isn't available.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidRoleException} <p>The specified role is invalid.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {IncompatibleImageException} <p>The image does not support storage connectors.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createImageBuilder(
    args: CreateImageBuilderInput
  ): Promise<CreateImageBuilderOutput>;
  public createImageBuilder(
    args: CreateImageBuilderInput,
    cb: (err: any, data?: CreateImageBuilderOutput) => void
  ): void;
  public createImageBuilder(
    args: CreateImageBuilderInput,
    cb?: (err: any, data?: CreateImageBuilderOutput) => void
  ): Promise<CreateImageBuilderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateImageBuilderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a URL to start an image builder streaming session.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLInput
  ): Promise<CreateImageBuilderStreamingURLOutput>;
  public createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLInput,
    cb: (err: any, data?: CreateImageBuilderStreamingURLOutput) => void
  ): void;
  public createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLInput,
    cb?: (err: any, data?: CreateImageBuilderStreamingURLOutput) => void
  ): Promise<CreateImageBuilderStreamingURLOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateImageBuilderStreamingURLCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {InvalidRoleException} <p>The specified role is invalid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStack(args: CreateStackInput): Promise<CreateStackOutput>;
  public createStack(
    args: CreateStackInput,
    cb: (err: any, data?: CreateStackOutput) => void
  ): void;
  public createStack(
    args: CreateStackInput,
    cb?: (err: any, data?: CreateStackOutput) => void
  ): Promise<CreateStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ResourceNotAvailableException} <p>The specified resource exists and is not in use, but isn't available.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStreamingURL(
    args: CreateStreamingURLInput
  ): Promise<CreateStreamingURLOutput>;
  public createStreamingURL(
    args: CreateStreamingURLInput,
    cb: (err: any, data?: CreateStreamingURLOutput) => void
  ): void;
  public createStreamingURL(
    args: CreateStreamingURLInput,
    cb?: (err: any, data?: CreateStreamingURLOutput) => void
  ): Promise<CreateStreamingURLOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStreamingURLCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a usage report subscription. Usage reports are generated daily.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRoleException} <p>The specified role is invalid.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUsageReportSubscription(
    args: CreateUsageReportSubscriptionInput
  ): Promise<CreateUsageReportSubscriptionOutput>;
  public createUsageReportSubscription(
    args: CreateUsageReportSubscriptionInput,
    cb: (err: any, data?: CreateUsageReportSubscriptionOutput) => void
  ): void;
  public createUsageReportSubscription(
    args: CreateUsageReportSubscriptionInput,
    cb?: (err: any, data?: CreateUsageReportSubscriptionOutput) => void
  ): Promise<CreateUsageReportSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUsageReportSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new user in the user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUser(args: CreateUserInput): Promise<CreateUserOutput>;
  public createUser(
    args: CreateUserInput,
    cb: (err: any, data?: CreateUserOutput) => void
  ): void;
  public createUser(
    args: CreateUserInput,
    cb?: (err: any, data?: CreateUserOutput) => void
  ): Promise<CreateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDirectoryConfig(
    args: DeleteDirectoryConfigInput
  ): Promise<DeleteDirectoryConfigOutput>;
  public deleteDirectoryConfig(
    args: DeleteDirectoryConfigInput,
    cb: (err: any, data?: DeleteDirectoryConfigOutput) => void
  ): void;
  public deleteDirectoryConfig(
    args: DeleteDirectoryConfigInput,
    cb?: (err: any, data?: DeleteDirectoryConfigOutput) => void
  ): Promise<DeleteDirectoryConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDirectoryConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFleet(args: DeleteFleetInput): Promise<DeleteFleetOutput>;
  public deleteFleet(
    args: DeleteFleetInput,
    cb: (err: any, data?: DeleteFleetOutput) => void
  ): void;
  public deleteFleet(
    args: DeleteFleetInput,
    cb?: (err: any, data?: DeleteFleetOutput) => void
  ): Promise<DeleteFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteImage(args: DeleteImageInput): Promise<DeleteImageOutput>;
  public deleteImage(
    args: DeleteImageInput,
    cb: (err: any, data?: DeleteImageOutput) => void
  ): void;
  public deleteImage(
    args: DeleteImageInput,
    cb?: (err: any, data?: DeleteImageOutput) => void
  ): Promise<DeleteImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified image builder and releases the capacity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteImageBuilder(
    args: DeleteImageBuilderInput
  ): Promise<DeleteImageBuilderOutput>;
  public deleteImageBuilder(
    args: DeleteImageBuilderInput,
    cb: (err: any, data?: DeleteImageBuilderOutput) => void
  ): void;
  public deleteImageBuilder(
    args: DeleteImageBuilderInput,
    cb?: (err: any, data?: DeleteImageBuilderOutput) => void
  ): Promise<DeleteImageBuilderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteImageBuilderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotAvailableException} <p>The specified resource exists and is not in use, but isn't available.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteImagePermissions(
    args: DeleteImagePermissionsInput
  ): Promise<DeleteImagePermissionsOutput>;
  public deleteImagePermissions(
    args: DeleteImagePermissionsInput,
    cb: (err: any, data?: DeleteImagePermissionsOutput) => void
  ): void;
  public deleteImagePermissions(
    args: DeleteImagePermissionsInput,
    cb?: (err: any, data?: DeleteImagePermissionsOutput) => void
  ): Promise<DeleteImagePermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteImagePermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteStack(args: DeleteStackInput): Promise<DeleteStackOutput>;
  public deleteStack(
    args: DeleteStackInput,
    cb: (err: any, data?: DeleteStackOutput) => void
  ): void;
  public deleteStack(
    args: DeleteStackInput,
    cb?: (err: any, data?: DeleteStackOutput) => void
  ): Promise<DeleteStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables usage report generation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionInput
  ): Promise<DeleteUsageReportSubscriptionOutput>;
  public deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionInput,
    cb: (err: any, data?: DeleteUsageReportSubscriptionOutput) => void
  ): void;
  public deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionInput,
    cb?: (err: any, data?: DeleteUsageReportSubscriptionOutput) => void
  ): Promise<DeleteUsageReportSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUsageReportSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a user from the user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUser(args: DeleteUserInput): Promise<DeleteUserOutput>;
  public deleteUser(
    args: DeleteUserInput,
    cb: (err: any, data?: DeleteUserOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserInput,
    cb?: (err: any, data?: DeleteUserOutput) => void
  ): Promise<DeleteUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDirectoryConfigs(
    args: DescribeDirectoryConfigsInput
  ): Promise<DescribeDirectoryConfigsOutput>;
  public describeDirectoryConfigs(
    args: DescribeDirectoryConfigsInput,
    cb: (err: any, data?: DescribeDirectoryConfigsOutput) => void
  ): void;
  public describeDirectoryConfigs(
    args: DescribeDirectoryConfigsInput,
    cb?: (err: any, data?: DescribeDirectoryConfigsOutput) => void
  ): Promise<DescribeDirectoryConfigsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDirectoryConfigsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFleets(
    args: DescribeFleetsInput
  ): Promise<DescribeFleetsOutput>;
  public describeFleets(
    args: DescribeFleetsInput,
    cb: (err: any, data?: DescribeFleetsOutput) => void
  ): void;
  public describeFleets(
    args: DescribeFleetsInput,
    cb?: (err: any, data?: DescribeFleetsOutput) => void
  ): Promise<DescribeFleetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFleetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeImageBuilders(
    args: DescribeImageBuildersInput
  ): Promise<DescribeImageBuildersOutput>;
  public describeImageBuilders(
    args: DescribeImageBuildersInput,
    cb: (err: any, data?: DescribeImageBuildersOutput) => void
  ): void;
  public describeImageBuilders(
    args: DescribeImageBuildersInput,
    cb?: (err: any, data?: DescribeImageBuildersOutput) => void
  ): Promise<DescribeImageBuildersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeImageBuildersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeImagePermissions(
    args: DescribeImagePermissionsInput
  ): Promise<DescribeImagePermissionsOutput>;
  public describeImagePermissions(
    args: DescribeImagePermissionsInput,
    cb: (err: any, data?: DescribeImagePermissionsOutput) => void
  ): void;
  public describeImagePermissions(
    args: DescribeImagePermissionsInput,
    cb?: (err: any, data?: DescribeImagePermissionsOutput) => void
  ): Promise<DescribeImagePermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeImagePermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeImages(
    args: DescribeImagesInput
  ): Promise<DescribeImagesOutput>;
  public describeImages(
    args: DescribeImagesInput,
    cb: (err: any, data?: DescribeImagesOutput) => void
  ): void;
  public describeImages(
    args: DescribeImagesInput,
    cb?: (err: any, data?: DescribeImagesOutput) => void
  ): Promise<DescribeImagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeImagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSessions(
    args: DescribeSessionsInput
  ): Promise<DescribeSessionsOutput>;
  public describeSessions(
    args: DescribeSessionsInput,
    cb: (err: any, data?: DescribeSessionsOutput) => void
  ): void;
  public describeSessions(
    args: DescribeSessionsInput,
    cb?: (err: any, data?: DescribeSessionsOutput) => void
  ): Promise<DescribeSessionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSessionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStacks(
    args: DescribeStacksInput
  ): Promise<DescribeStacksOutput>;
  public describeStacks(
    args: DescribeStacksInput,
    cb: (err: any, data?: DescribeStacksOutput) => void
  ): void;
  public describeStacks(
    args: DescribeStacksInput,
    cb?: (err: any, data?: DescribeStacksOutput) => void
  ): Promise<DescribeStacksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStacksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more usage report subscriptions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsInput
  ): Promise<DescribeUsageReportSubscriptionsOutput>;
  public describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsInput,
    cb: (err: any, data?: DescribeUsageReportSubscriptionsOutput) => void
  ): void;
  public describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsInput,
    cb?: (err: any, data?: DescribeUsageReportSubscriptionsOutput) => void
  ): Promise<DescribeUsageReportSubscriptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUsageReportSubscriptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUserStackAssociations(
    args: DescribeUserStackAssociationsInput
  ): Promise<DescribeUserStackAssociationsOutput>;
  public describeUserStackAssociations(
    args: DescribeUserStackAssociationsInput,
    cb: (err: any, data?: DescribeUserStackAssociationsOutput) => void
  ): void;
  public describeUserStackAssociations(
    args: DescribeUserStackAssociationsInput,
    cb?: (err: any, data?: DescribeUserStackAssociationsOutput) => void
  ): Promise<DescribeUserStackAssociationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserStackAssociationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more specified users in the user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUsers(args: DescribeUsersInput): Promise<DescribeUsersOutput>;
  public describeUsers(
    args: DescribeUsersInput,
    cb: (err: any, data?: DescribeUsersOutput) => void
  ): void;
  public describeUsers(
    args: DescribeUsersInput,
    cb?: (err: any, data?: DescribeUsersOutput) => void
  ): Promise<DescribeUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableUser(args: DisableUserInput): Promise<DisableUserOutput>;
  public disableUser(
    args: DisableUserInput,
    cb: (err: any, data?: DisableUserOutput) => void
  ): void;
  public disableUser(
    args: DisableUserInput,
    cb?: (err: any, data?: DisableUserOutput) => void
  ): Promise<DisableUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the specified fleet from the specified stack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateFleet(
    args: DisassociateFleetInput
  ): Promise<DisassociateFleetOutput>;
  public disassociateFleet(
    args: DisassociateFleetInput,
    cb: (err: any, data?: DisassociateFleetOutput) => void
  ): void;
  public disassociateFleet(
    args: DisassociateFleetInput,
    cb?: (err: any, data?: DisassociateFleetOutput) => void
  ): Promise<DisassociateFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableUser(args: EnableUserInput): Promise<EnableUserOutput>;
  public enableUser(
    args: EnableUserInput,
    cb: (err: any, data?: EnableUserOutput) => void
  ): void;
  public enableUser(
    args: EnableUserInput,
    cb?: (err: any, data?: EnableUserOutput) => void
  ): Promise<EnableUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Immediately stops the specified streaming session.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public expireSession(args: ExpireSessionInput): Promise<ExpireSessionOutput>;
  public expireSession(
    args: ExpireSessionInput,
    cb: (err: any, data?: ExpireSessionOutput) => void
  ): void;
  public expireSession(
    args: ExpireSessionInput,
    cb?: (err: any, data?: ExpireSessionOutput) => void
  ): Promise<ExpireSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExpireSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the name of the fleet that is associated with the specified stack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAssociatedFleets(
    args: ListAssociatedFleetsInput
  ): Promise<ListAssociatedFleetsOutput>;
  public listAssociatedFleets(
    args: ListAssociatedFleetsInput,
    cb: (err: any, data?: ListAssociatedFleetsOutput) => void
  ): void;
  public listAssociatedFleets(
    args: ListAssociatedFleetsInput,
    cb?: (err: any, data?: ListAssociatedFleetsOutput) => void
  ): Promise<ListAssociatedFleetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssociatedFleetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the name of the stack with which the specified fleet is associated.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAssociatedStacks(
    args: ListAssociatedStacksInput
  ): Promise<ListAssociatedStacksOutput>;
  public listAssociatedStacks(
    args: ListAssociatedStacksInput,
    cb: (err: any, data?: ListAssociatedStacksOutput) => void
  ): void;
  public listAssociatedStacks(
    args: ListAssociatedStacksInput,
    cb?: (err: any, data?: ListAssociatedStacksOutput) => void
  ): Promise<ListAssociatedStacksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssociatedStacksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
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
   * <p>Starts the specified fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startFleet(args: StartFleetInput): Promise<StartFleetOutput>;
  public startFleet(
    args: StartFleetInput,
    cb: (err: any, data?: StartFleetOutput) => void
  ): void;
  public startFleet(
    args: StartFleetInput,
    cb?: (err: any, data?: StartFleetOutput) => void
  ): Promise<StartFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the specified image builder.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotAvailableException} <p>The specified resource exists and is not in use, but isn't available.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {IncompatibleImageException} <p>The image does not support storage connectors.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startImageBuilder(
    args: StartImageBuilderInput
  ): Promise<StartImageBuilderOutput>;
  public startImageBuilder(
    args: StartImageBuilderInput,
    cb: (err: any, data?: StartImageBuilderOutput) => void
  ): void;
  public startImageBuilder(
    args: StartImageBuilderInput,
    cb?: (err: any, data?: StartImageBuilderOutput) => void
  ): Promise<StartImageBuilderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartImageBuilderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops the specified fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopFleet(args: StopFleetInput): Promise<StopFleetOutput>;
  public stopFleet(
    args: StopFleetInput,
    cb: (err: any, data?: StopFleetOutput) => void
  ): void;
  public stopFleet(
    args: StopFleetInput,
    cb?: (err: any, data?: StopFleetOutput) => void
  ): Promise<StopFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops the specified image builder.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopImageBuilder(
    args: StopImageBuilderInput
  ): Promise<StopImageBuilderOutput>;
  public stopImageBuilder(
    args: StopImageBuilderInput,
    cb: (err: any, data?: StopImageBuilderOutput) => void
  ): void;
  public stopImageBuilder(
    args: StopImageBuilderInput,
    cb?: (err: any, data?: StopImageBuilderOutput) => void
  ): Promise<StopImageBuilderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopImageBuilderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
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
   * <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
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
   * <p>Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDirectoryConfig(
    args: UpdateDirectoryConfigInput
  ): Promise<UpdateDirectoryConfigOutput>;
  public updateDirectoryConfig(
    args: UpdateDirectoryConfigInput,
    cb: (err: any, data?: UpdateDirectoryConfigOutput) => void
  ): void;
  public updateDirectoryConfig(
    args: UpdateDirectoryConfigInput,
    cb?: (err: any, data?: UpdateDirectoryConfigOutput) => void
  ): Promise<UpdateDirectoryConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDirectoryConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name. If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, and <code>DisconnectTimeoutInSeconds</code> attributes. If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {InvalidRoleException} <p>The specified role is invalid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ResourceNotAvailableException} <p>The specified resource exists and is not in use, but isn't available.</p>
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {IncompatibleImageException} <p>The image does not support storage connectors.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFleet(args: UpdateFleetInput): Promise<UpdateFleetOutput>;
  public updateFleet(
    args: UpdateFleetInput,
    cb: (err: any, data?: UpdateFleetOutput) => void
  ): void;
  public updateFleet(
    args: UpdateFleetInput,
    cb?: (err: any, data?: UpdateFleetOutput) => void
  ): Promise<UpdateFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates permissions for the specified private image. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ResourceNotAvailableException} <p>The specified resource exists and is not in use, but isn't available.</p>
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateImagePermissions(
    args: UpdateImagePermissionsInput
  ): Promise<UpdateImagePermissionsOutput>;
  public updateImagePermissions(
    args: UpdateImagePermissionsInput,
    cb: (err: any, data?: UpdateImagePermissionsOutput) => void
  ): void;
  public updateImagePermissions(
    args: UpdateImagePermissionsInput,
    cb?: (err: any, data?: UpdateImagePermissionsOutput) => void
  ): Promise<UpdateImagePermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateImagePermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified fields for the specified stack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {InvalidRoleException} <p>The specified role is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
   *   - {LimitExceededException} <p>The requested limit exceeds the permitted limit for an account.</p>
   *   - {InvalidAccountStatusException} <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
   *   - {IncompatibleImageException} <p>The image does not support storage connectors.</p>
   *   - {OperationNotPermittedException} <p>The attempted operation is not permitted.</p>
   *   - {ConcurrentModificationException} <p>An API error occurred. Wait a few minutes and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateStack(args: UpdateStackInput): Promise<UpdateStackOutput>;
  public updateStack(
    args: UpdateStackInput,
    cb: (err: any, data?: UpdateStackOutput) => void
  ): void;
  public updateStack(
    args: UpdateStackInput,
    cb?: (err: any, data?: UpdateStackOutput) => void
  ): Promise<UpdateStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
