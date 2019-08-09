import { WorkSpacesClient } from "./WorkSpacesClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AssociateIpGroupsInput } from "./types/AssociateIpGroupsInput";
import { AssociateIpGroupsOutput } from "./types/AssociateIpGroupsOutput";
import { AuthorizeIpRulesInput } from "./types/AuthorizeIpRulesInput";
import { AuthorizeIpRulesOutput } from "./types/AuthorizeIpRulesOutput";
import { CopyWorkspaceImageInput } from "./types/CopyWorkspaceImageInput";
import { CopyWorkspaceImageOutput } from "./types/CopyWorkspaceImageOutput";
import { CreateIpGroupInput } from "./types/CreateIpGroupInput";
import { CreateIpGroupOutput } from "./types/CreateIpGroupOutput";
import { CreateTagsInput } from "./types/CreateTagsInput";
import { CreateTagsOutput } from "./types/CreateTagsOutput";
import { CreateWorkspacesInput } from "./types/CreateWorkspacesInput";
import { CreateWorkspacesOutput } from "./types/CreateWorkspacesOutput";
import { DeleteIpGroupInput } from "./types/DeleteIpGroupInput";
import { DeleteIpGroupOutput } from "./types/DeleteIpGroupOutput";
import { DeleteTagsInput } from "./types/DeleteTagsInput";
import { DeleteTagsOutput } from "./types/DeleteTagsOutput";
import { DeleteWorkspaceImageInput } from "./types/DeleteWorkspaceImageInput";
import { DeleteWorkspaceImageOutput } from "./types/DeleteWorkspaceImageOutput";
import { DescribeAccountInput } from "./types/DescribeAccountInput";
import { DescribeAccountModificationsInput } from "./types/DescribeAccountModificationsInput";
import { DescribeAccountModificationsOutput } from "./types/DescribeAccountModificationsOutput";
import { DescribeAccountOutput } from "./types/DescribeAccountOutput";
import { DescribeClientPropertiesInput } from "./types/DescribeClientPropertiesInput";
import { DescribeClientPropertiesOutput } from "./types/DescribeClientPropertiesOutput";
import { DescribeIpGroupsInput } from "./types/DescribeIpGroupsInput";
import { DescribeIpGroupsOutput } from "./types/DescribeIpGroupsOutput";
import { DescribeTagsInput } from "./types/DescribeTagsInput";
import { DescribeTagsOutput } from "./types/DescribeTagsOutput";
import { DescribeWorkspaceBundlesInput } from "./types/DescribeWorkspaceBundlesInput";
import { DescribeWorkspaceBundlesOutput } from "./types/DescribeWorkspaceBundlesOutput";
import { DescribeWorkspaceDirectoriesInput } from "./types/DescribeWorkspaceDirectoriesInput";
import { DescribeWorkspaceDirectoriesOutput } from "./types/DescribeWorkspaceDirectoriesOutput";
import { DescribeWorkspaceImagesInput } from "./types/DescribeWorkspaceImagesInput";
import { DescribeWorkspaceImagesOutput } from "./types/DescribeWorkspaceImagesOutput";
import { DescribeWorkspacesConnectionStatusInput } from "./types/DescribeWorkspacesConnectionStatusInput";
import { DescribeWorkspacesConnectionStatusOutput } from "./types/DescribeWorkspacesConnectionStatusOutput";
import { DescribeWorkspacesInput } from "./types/DescribeWorkspacesInput";
import { DescribeWorkspacesOutput } from "./types/DescribeWorkspacesOutput";
import { DisassociateIpGroupsInput } from "./types/DisassociateIpGroupsInput";
import { DisassociateIpGroupsOutput } from "./types/DisassociateIpGroupsOutput";
import { ImportWorkspaceImageInput } from "./types/ImportWorkspaceImageInput";
import { ImportWorkspaceImageOutput } from "./types/ImportWorkspaceImageOutput";
import { InvalidParameterValuesException } from "./types/InvalidParameterValuesException";
import { InvalidResourceStateException } from "./types/InvalidResourceStateException";
import { ListAvailableManagementCidrRangesInput } from "./types/ListAvailableManagementCidrRangesInput";
import { ListAvailableManagementCidrRangesOutput } from "./types/ListAvailableManagementCidrRangesOutput";
import { ModifyAccountInput } from "./types/ModifyAccountInput";
import { ModifyAccountOutput } from "./types/ModifyAccountOutput";
import { ModifyClientPropertiesInput } from "./types/ModifyClientPropertiesInput";
import { ModifyClientPropertiesOutput } from "./types/ModifyClientPropertiesOutput";
import { ModifyWorkspacePropertiesInput } from "./types/ModifyWorkspacePropertiesInput";
import { ModifyWorkspacePropertiesOutput } from "./types/ModifyWorkspacePropertiesOutput";
import { ModifyWorkspaceStateInput } from "./types/ModifyWorkspaceStateInput";
import { ModifyWorkspaceStateOutput } from "./types/ModifyWorkspaceStateOutput";
import { OperationInProgressException } from "./types/OperationInProgressException";
import { OperationNotSupportedException } from "./types/OperationNotSupportedException";
import { RebootWorkspacesInput } from "./types/RebootWorkspacesInput";
import { RebootWorkspacesOutput } from "./types/RebootWorkspacesOutput";
import { RebuildWorkspacesInput } from "./types/RebuildWorkspacesInput";
import { RebuildWorkspacesOutput } from "./types/RebuildWorkspacesOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceAssociatedException } from "./types/ResourceAssociatedException";
import { ResourceCreationFailedException } from "./types/ResourceCreationFailedException";
import { ResourceLimitExceededException } from "./types/ResourceLimitExceededException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ResourceUnavailableException } from "./types/ResourceUnavailableException";
import { RevokeIpRulesInput } from "./types/RevokeIpRulesInput";
import { RevokeIpRulesOutput } from "./types/RevokeIpRulesOutput";
import { StartWorkspacesInput } from "./types/StartWorkspacesInput";
import { StartWorkspacesOutput } from "./types/StartWorkspacesOutput";
import { StopWorkspacesInput } from "./types/StopWorkspacesInput";
import { StopWorkspacesOutput } from "./types/StopWorkspacesOutput";
import { TerminateWorkspacesInput } from "./types/TerminateWorkspacesInput";
import { TerminateWorkspacesOutput } from "./types/TerminateWorkspacesOutput";
import { UnsupportedWorkspaceConfigurationException } from "./types/UnsupportedWorkspaceConfigurationException";
import { UpdateRulesOfIpGroupInput } from "./types/UpdateRulesOfIpGroupInput";
import { UpdateRulesOfIpGroupOutput } from "./types/UpdateRulesOfIpGroupOutput";
import { AssociateIpGroupsCommand } from "./commands/AssociateIpGroupsCommand";
import { AuthorizeIpRulesCommand } from "./commands/AuthorizeIpRulesCommand";
import { CopyWorkspaceImageCommand } from "./commands/CopyWorkspaceImageCommand";
import { CreateIpGroupCommand } from "./commands/CreateIpGroupCommand";
import { CreateTagsCommand } from "./commands/CreateTagsCommand";
import { CreateWorkspacesCommand } from "./commands/CreateWorkspacesCommand";
import { DeleteIpGroupCommand } from "./commands/DeleteIpGroupCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DeleteWorkspaceImageCommand } from "./commands/DeleteWorkspaceImageCommand";
import { DescribeAccountCommand } from "./commands/DescribeAccountCommand";
import { DescribeAccountModificationsCommand } from "./commands/DescribeAccountModificationsCommand";
import { DescribeClientPropertiesCommand } from "./commands/DescribeClientPropertiesCommand";
import { DescribeIpGroupsCommand } from "./commands/DescribeIpGroupsCommand";
import { DescribeTagsCommand } from "./commands/DescribeTagsCommand";
import { DescribeWorkspaceBundlesCommand } from "./commands/DescribeWorkspaceBundlesCommand";
import { DescribeWorkspaceDirectoriesCommand } from "./commands/DescribeWorkspaceDirectoriesCommand";
import { DescribeWorkspaceImagesCommand } from "./commands/DescribeWorkspaceImagesCommand";
import { DescribeWorkspacesCommand } from "./commands/DescribeWorkspacesCommand";
import { DescribeWorkspacesConnectionStatusCommand } from "./commands/DescribeWorkspacesConnectionStatusCommand";
import { DisassociateIpGroupsCommand } from "./commands/DisassociateIpGroupsCommand";
import { ImportWorkspaceImageCommand } from "./commands/ImportWorkspaceImageCommand";
import { ListAvailableManagementCidrRangesCommand } from "./commands/ListAvailableManagementCidrRangesCommand";
import { ModifyAccountCommand } from "./commands/ModifyAccountCommand";
import { ModifyClientPropertiesCommand } from "./commands/ModifyClientPropertiesCommand";
import { ModifyWorkspacePropertiesCommand } from "./commands/ModifyWorkspacePropertiesCommand";
import { ModifyWorkspaceStateCommand } from "./commands/ModifyWorkspaceStateCommand";
import { RebootWorkspacesCommand } from "./commands/RebootWorkspacesCommand";
import { RebuildWorkspacesCommand } from "./commands/RebuildWorkspacesCommand";
import { RevokeIpRulesCommand } from "./commands/RevokeIpRulesCommand";
import { StartWorkspacesCommand } from "./commands/StartWorkspacesCommand";
import { StopWorkspacesCommand } from "./commands/StopWorkspacesCommand";
import { TerminateWorkspacesCommand } from "./commands/TerminateWorkspacesCommand";
import { UpdateRulesOfIpGroupCommand } from "./commands/UpdateRulesOfIpGroupCommand";

export class WorkSpaces extends WorkSpacesClient {
  /**
   * <p>Associates the specified IP access control group with the specified directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {ResourceLimitExceededException} <p>Your resource limits have been exceeded.</p>
   *   - {InvalidResourceStateException} <p>The state of the resource is not valid for this operation.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {OperationNotSupportedException} <p>This operation is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateIpGroups(
    args: AssociateIpGroupsInput
  ): Promise<AssociateIpGroupsOutput>;
  public associateIpGroups(
    args: AssociateIpGroupsInput,
    cb: (err: any, data?: AssociateIpGroupsOutput) => void
  ): void;
  public associateIpGroups(
    args: AssociateIpGroupsInput,
    cb?: (err: any, data?: AssociateIpGroupsOutput) => void
  ): Promise<AssociateIpGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateIpGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {ResourceLimitExceededException} <p>Your resource limits have been exceeded.</p>
   *   - {InvalidResourceStateException} <p>The state of the resource is not valid for this operation.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public authorizeIpRules(
    args: AuthorizeIpRulesInput
  ): Promise<AuthorizeIpRulesOutput>;
  public authorizeIpRules(
    args: AuthorizeIpRulesInput,
    cb: (err: any, data?: AuthorizeIpRulesOutput) => void
  ): void;
  public authorizeIpRules(
    args: AuthorizeIpRulesInput,
    cb?: (err: any, data?: AuthorizeIpRulesOutput) => void
  ): Promise<AuthorizeIpRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AuthorizeIpRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies the specified image from the specified Region to the current Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceededException} <p>Your resource limits have been exceeded.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {ResourceUnavailableException} <p>The specified resource is not available.</p>
   *   - {OperationNotSupportedException} <p>This operation is not supported.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyWorkspaceImage(
    args: CopyWorkspaceImageInput
  ): Promise<CopyWorkspaceImageOutput>;
  public copyWorkspaceImage(
    args: CopyWorkspaceImageInput,
    cb: (err: any, data?: CopyWorkspaceImageOutput) => void
  ): void;
  public copyWorkspaceImage(
    args: CopyWorkspaceImageInput,
    cb?: (err: any, data?: CopyWorkspaceImageOutput) => void
  ): Promise<CopyWorkspaceImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyWorkspaceImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceLimitExceededException} <p>Your resource limits have been exceeded.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {ResourceCreationFailedException} <p>The resource could not be created.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createIpGroup(args: CreateIpGroupInput): Promise<CreateIpGroupOutput>;
  public createIpGroup(
    args: CreateIpGroupInput,
    cb: (err: any, data?: CreateIpGroupOutput) => void
  ): void;
  public createIpGroup(
    args: CreateIpGroupInput,
    cb?: (err: any, data?: CreateIpGroupOutput) => void
  ): Promise<CreateIpGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateIpGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates the specified tags for the specified WorkSpaces resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceLimitExceededException} <p>Your resource limits have been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTags(args: CreateTagsInput): Promise<CreateTagsOutput>;
  public createTags(
    args: CreateTagsInput,
    cb: (err: any, data?: CreateTagsOutput) => void
  ): void;
  public createTags(
    args: CreateTagsInput,
    cb?: (err: any, data?: CreateTagsOutput) => void
  ): Promise<CreateTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceededException} <p>Your resource limits have been exceeded.</p>
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createWorkspaces(
    args: CreateWorkspacesInput
  ): Promise<CreateWorkspacesOutput>;
  public createWorkspaces(
    args: CreateWorkspacesInput,
    cb: (err: any, data?: CreateWorkspacesOutput) => void
  ): void;
  public createWorkspaces(
    args: CreateWorkspacesInput,
    cb?: (err: any, data?: CreateWorkspacesOutput) => void
  ): Promise<CreateWorkspacesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateWorkspacesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {ResourceAssociatedException} <p>The resource is associated with a directory.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIpGroup(args: DeleteIpGroupInput): Promise<DeleteIpGroupOutput>;
  public deleteIpGroup(
    args: DeleteIpGroupInput,
    cb: (err: any, data?: DeleteIpGroupOutput) => void
  ): void;
  public deleteIpGroup(
    args: DeleteIpGroupInput,
    cb?: (err: any, data?: DeleteIpGroupOutput) => void
  ): Promise<DeleteIpGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIpGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified tags from the specified WorkSpaces resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTags(args: DeleteTagsInput): Promise<DeleteTagsOutput>;
  public deleteTags(
    args: DeleteTagsInput,
    cb: (err: any, data?: DeleteTagsOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsInput,
    cb?: (err: any, data?: DeleteTagsOutput) => void
  ): Promise<DeleteTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and un-share the image if it is shared with other accounts. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAssociatedException} <p>The resource is associated with a directory.</p>
   *   - {InvalidResourceStateException} <p>The state of the resource is not valid for this operation.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteWorkspaceImage(
    args: DeleteWorkspaceImageInput
  ): Promise<DeleteWorkspaceImageOutput>;
  public deleteWorkspaceImage(
    args: DeleteWorkspaceImageInput,
    cb: (err: any, data?: DeleteWorkspaceImageOutput) => void
  ): void;
  public deleteWorkspaceImage(
    args: DeleteWorkspaceImageInput,
    cb?: (err: any, data?: DeleteWorkspaceImageOutput) => void
  ): Promise<DeleteWorkspaceImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteWorkspaceImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes the configuration of bring your own license (BYOL) for the specified account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccount(
    args: DescribeAccountInput
  ): Promise<DescribeAccountOutput>;
  public describeAccount(
    args: DescribeAccountInput,
    cb: (err: any, data?: DescribeAccountOutput) => void
  ): void;
  public describeAccount(
    args: DescribeAccountInput,
    cb?: (err: any, data?: DescribeAccountOutput) => void
  ): Promise<DescribeAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes modifications to the configuration of bring your own license (BYOL) for the specified account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccountModifications(
    args: DescribeAccountModificationsInput
  ): Promise<DescribeAccountModificationsOutput>;
  public describeAccountModifications(
    args: DescribeAccountModificationsInput,
    cb: (err: any, data?: DescribeAccountModificationsOutput) => void
  ): void;
  public describeAccountModifications(
    args: DescribeAccountModificationsInput,
    cb?: (err: any, data?: DescribeAccountModificationsOutput) => void
  ): Promise<DescribeAccountModificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountModificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more specified Amazon WorkSpaces clients.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClientProperties(
    args: DescribeClientPropertiesInput
  ): Promise<DescribeClientPropertiesOutput>;
  public describeClientProperties(
    args: DescribeClientPropertiesInput,
    cb: (err: any, data?: DescribeClientPropertiesOutput) => void
  ): void;
  public describeClientProperties(
    args: DescribeClientPropertiesInput,
    cb?: (err: any, data?: DescribeClientPropertiesOutput) => void
  ): Promise<DescribeClientPropertiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClientPropertiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your IP access control groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeIpGroups(
    args: DescribeIpGroupsInput
  ): Promise<DescribeIpGroupsOutput>;
  public describeIpGroups(
    args: DescribeIpGroupsInput,
    cb: (err: any, data?: DescribeIpGroupsOutput) => void
  ): void;
  public describeIpGroups(
    args: DescribeIpGroupsInput,
    cb?: (err: any, data?: DescribeIpGroupsOutput) => void
  ): Promise<DescribeIpGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeIpGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified tags for the specified WorkSpaces resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTags(args: DescribeTagsInput): Promise<DescribeTagsOutput>;
  public describeTags(
    args: DescribeTagsInput,
    cb: (err: any, data?: DescribeTagsOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsInput,
    cb?: (err: any, data?: DescribeTagsOutput) => void
  ): Promise<DescribeTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeWorkspaceBundles(
    args: DescribeWorkspaceBundlesInput
  ): Promise<DescribeWorkspaceBundlesOutput>;
  public describeWorkspaceBundles(
    args: DescribeWorkspaceBundlesInput,
    cb: (err: any, data?: DescribeWorkspaceBundlesOutput) => void
  ): void;
  public describeWorkspaceBundles(
    args: DescribeWorkspaceBundlesInput,
    cb?: (err: any, data?: DescribeWorkspaceBundlesOutput) => void
  ): Promise<DescribeWorkspaceBundlesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeWorkspaceBundlesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the available AWS Directory Service directories that are registered with Amazon WorkSpaces.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeWorkspaceDirectories(
    args: DescribeWorkspaceDirectoriesInput
  ): Promise<DescribeWorkspaceDirectoriesOutput>;
  public describeWorkspaceDirectories(
    args: DescribeWorkspaceDirectoriesInput,
    cb: (err: any, data?: DescribeWorkspaceDirectoriesOutput) => void
  ): void;
  public describeWorkspaceDirectories(
    args: DescribeWorkspaceDirectoriesInput,
    cb?: (err: any, data?: DescribeWorkspaceDirectoriesOutput) => void
  ): Promise<DescribeWorkspaceDirectoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeWorkspaceDirectoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeWorkspaceImages(
    args: DescribeWorkspaceImagesInput
  ): Promise<DescribeWorkspaceImagesOutput>;
  public describeWorkspaceImages(
    args: DescribeWorkspaceImagesInput,
    cb: (err: any, data?: DescribeWorkspaceImagesOutput) => void
  ): void;
  public describeWorkspaceImages(
    args: DescribeWorkspaceImagesInput,
    cb?: (err: any, data?: DescribeWorkspaceImagesOutput) => void
  ): Promise<DescribeWorkspaceImagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeWorkspaceImagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceUnavailableException} <p>The specified resource is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeWorkspaces(
    args: DescribeWorkspacesInput
  ): Promise<DescribeWorkspacesOutput>;
  public describeWorkspaces(
    args: DescribeWorkspacesInput,
    cb: (err: any, data?: DescribeWorkspacesOutput) => void
  ): void;
  public describeWorkspaces(
    args: DescribeWorkspacesInput,
    cb?: (err: any, data?: DescribeWorkspacesOutput) => void
  ): Promise<DescribeWorkspacesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeWorkspacesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the connection status of the specified WorkSpaces.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeWorkspacesConnectionStatus(
    args: DescribeWorkspacesConnectionStatusInput
  ): Promise<DescribeWorkspacesConnectionStatusOutput>;
  public describeWorkspacesConnectionStatus(
    args: DescribeWorkspacesConnectionStatusInput,
    cb: (err: any, data?: DescribeWorkspacesConnectionStatusOutput) => void
  ): void;
  public describeWorkspacesConnectionStatus(
    args: DescribeWorkspacesConnectionStatusInput,
    cb?: (err: any, data?: DescribeWorkspacesConnectionStatusOutput) => void
  ): Promise<DescribeWorkspacesConnectionStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeWorkspacesConnectionStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the specified IP access control group from the specified directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateException} <p>The state of the resource is not valid for this operation.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateIpGroups(
    args: DisassociateIpGroupsInput
  ): Promise<DisassociateIpGroupsOutput>;
  public disassociateIpGroups(
    args: DisassociateIpGroupsInput,
    cb: (err: any, data?: DisassociateIpGroupsOutput) => void
  ): void;
  public disassociateIpGroups(
    args: DisassociateIpGroupsInput,
    cb?: (err: any, data?: DisassociateIpGroupsOutput) => void
  ): Promise<DisassociateIpGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateIpGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Imports the specified Windows 7 or Windows 10 bring your own license (BYOL) image into Amazon WorkSpaces. The image must be an already licensed EC2 image that is in your AWS account, and you must own the image. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceededException} <p>Your resource limits have been exceeded.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {OperationNotSupportedException} <p>This operation is not supported.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importWorkspaceImage(
    args: ImportWorkspaceImageInput
  ): Promise<ImportWorkspaceImageOutput>;
  public importWorkspaceImage(
    args: ImportWorkspaceImageInput,
    cb: (err: any, data?: ImportWorkspaceImageOutput) => void
  ): void;
  public importWorkspaceImage(
    args: ImportWorkspaceImageInput,
    cb?: (err: any, data?: ImportWorkspaceImageOutput) => void
  ): Promise<ImportWorkspaceImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportWorkspaceImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable bring your own license (BYOL). </p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAvailableManagementCidrRanges(
    args: ListAvailableManagementCidrRangesInput
  ): Promise<ListAvailableManagementCidrRangesOutput>;
  public listAvailableManagementCidrRanges(
    args: ListAvailableManagementCidrRangesInput,
    cb: (err: any, data?: ListAvailableManagementCidrRangesOutput) => void
  ): void;
  public listAvailableManagementCidrRanges(
    args: ListAvailableManagementCidrRangesInput,
    cb?: (err: any, data?: ListAvailableManagementCidrRangesOutput) => void
  ): Promise<ListAvailableManagementCidrRangesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAvailableManagementCidrRangesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the configuration of bring your own license (BYOL) for the specified account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {InvalidResourceStateException} <p>The state of the resource is not valid for this operation.</p>
   *   - {ResourceUnavailableException} <p>The specified resource is not available.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyAccount(args: ModifyAccountInput): Promise<ModifyAccountOutput>;
  public modifyAccount(
    args: ModifyAccountInput,
    cb: (err: any, data?: ModifyAccountOutput) => void
  ): void;
  public modifyAccount(
    args: ModifyAccountInput,
    cb?: (err: any, data?: ModifyAccountOutput) => void
  ): Promise<ModifyAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the properties of the specified Amazon WorkSpaces clients.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyClientProperties(
    args: ModifyClientPropertiesInput
  ): Promise<ModifyClientPropertiesOutput>;
  public modifyClientProperties(
    args: ModifyClientPropertiesInput,
    cb: (err: any, data?: ModifyClientPropertiesOutput) => void
  ): void;
  public modifyClientProperties(
    args: ModifyClientPropertiesInput,
    cb?: (err: any, data?: ModifyClientPropertiesOutput) => void
  ): Promise<ModifyClientPropertiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyClientPropertiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified WorkSpace properties.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {InvalidResourceStateException} <p>The state of the resource is not valid for this operation.</p>
   *   - {OperationInProgressException} <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
   *   - {UnsupportedWorkspaceConfigurationException} <p>The configuration of this WorkSpace is not supported for this operation. For more information, see the <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>. </p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {ResourceUnavailableException} <p>The specified resource is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyWorkspaceProperties(
    args: ModifyWorkspacePropertiesInput
  ): Promise<ModifyWorkspacePropertiesOutput>;
  public modifyWorkspaceProperties(
    args: ModifyWorkspacePropertiesInput,
    cb: (err: any, data?: ModifyWorkspacePropertiesOutput) => void
  ): void;
  public modifyWorkspaceProperties(
    args: ModifyWorkspacePropertiesInput,
    cb?: (err: any, data?: ModifyWorkspacePropertiesOutput) => void
  ): Promise<ModifyWorkspacePropertiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyWorkspacePropertiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {InvalidResourceStateException} <p>The state of the resource is not valid for this operation.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyWorkspaceState(
    args: ModifyWorkspaceStateInput
  ): Promise<ModifyWorkspaceStateOutput>;
  public modifyWorkspaceState(
    args: ModifyWorkspaceStateInput,
    cb: (err: any, data?: ModifyWorkspaceStateOutput) => void
  ): void;
  public modifyWorkspaceState(
    args: ModifyWorkspaceStateInput,
    cb?: (err: any, data?: ModifyWorkspaceStateOutput) => void
  ): Promise<ModifyWorkspaceStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyWorkspaceStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootWorkspaces(
    args: RebootWorkspacesInput
  ): Promise<RebootWorkspacesOutput>;
  public rebootWorkspaces(
    args: RebootWorkspacesInput,
    cb: (err: any, data?: RebootWorkspacesOutput) => void
  ): void;
  public rebootWorkspaces(
    args: RebootWorkspacesInput,
    cb?: (err: any, data?: RebootWorkspacesOutput) => void
  ): Promise<RebootWorkspacesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootWorkspacesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, or <code>UNHEALTHY</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebuildWorkspaces(
    args: RebuildWorkspacesInput
  ): Promise<RebuildWorkspacesOutput>;
  public rebuildWorkspaces(
    args: RebuildWorkspacesInput,
    cb: (err: any, data?: RebuildWorkspacesOutput) => void
  ): void;
  public rebuildWorkspaces(
    args: RebuildWorkspacesInput,
    cb?: (err: any, data?: RebuildWorkspacesOutput) => void
  ): Promise<RebuildWorkspacesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebuildWorkspacesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more rules from the specified IP access control group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateException} <p>The state of the resource is not valid for this operation.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeIpRules(args: RevokeIpRulesInput): Promise<RevokeIpRulesOutput>;
  public revokeIpRules(
    args: RevokeIpRulesInput,
    cb: (err: any, data?: RevokeIpRulesOutput) => void
  ): void;
  public revokeIpRules(
    args: RevokeIpRulesInput,
    cb?: (err: any, data?: RevokeIpRulesOutput) => void
  ): Promise<RevokeIpRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeIpRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startWorkspaces(
    args: StartWorkspacesInput
  ): Promise<StartWorkspacesOutput>;
  public startWorkspaces(
    args: StartWorkspacesInput,
    cb: (err: any, data?: StartWorkspacesOutput) => void
  ): void;
  public startWorkspaces(
    args: StartWorkspacesInput,
    cb?: (err: any, data?: StartWorkspacesOutput) => void
  ): Promise<StartWorkspacesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartWorkspacesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopWorkspaces(
    args: StopWorkspacesInput
  ): Promise<StopWorkspacesOutput>;
  public stopWorkspaces(
    args: StopWorkspacesInput,
    cb: (err: any, data?: StopWorkspacesOutput) => void
  ): void;
  public stopWorkspaces(
    args: StopWorkspacesInput,
    cb?: (err: any, data?: StopWorkspacesOutput) => void
  ): Promise<StopWorkspacesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopWorkspacesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Terminates the specified WorkSpaces.</p> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace.</p> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public terminateWorkspaces(
    args: TerminateWorkspacesInput
  ): Promise<TerminateWorkspacesOutput>;
  public terminateWorkspaces(
    args: TerminateWorkspacesInput,
    cb: (err: any, data?: TerminateWorkspacesOutput) => void
  ): void;
  public terminateWorkspaces(
    args: TerminateWorkspacesInput,
    cb?: (err: any, data?: TerminateWorkspacesOutput) => void
  ): Promise<TerminateWorkspacesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TerminateWorkspacesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces the current rules of the specified IP access control group with the specified rules.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValuesException} <p>One or more parameter values are not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource could not be found.</p>
   *   - {ResourceLimitExceededException} <p>Your resource limits have been exceeded.</p>
   *   - {InvalidResourceStateException} <p>The state of the resource is not valid for this operation.</p>
   *   - {AccessDeniedException} <p>The user is not authorized to access a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRulesOfIpGroup(
    args: UpdateRulesOfIpGroupInput
  ): Promise<UpdateRulesOfIpGroupOutput>;
  public updateRulesOfIpGroup(
    args: UpdateRulesOfIpGroupInput,
    cb: (err: any, data?: UpdateRulesOfIpGroupOutput) => void
  ): void;
  public updateRulesOfIpGroup(
    args: UpdateRulesOfIpGroupInput,
    cb?: (err: any, data?: UpdateRulesOfIpGroupOutput) => void
  ): Promise<UpdateRulesOfIpGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRulesOfIpGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
