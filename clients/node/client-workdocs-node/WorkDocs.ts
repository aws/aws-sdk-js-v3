import { WorkDocsClient } from "./WorkDocsClient";
import { AbortDocumentVersionUploadInput } from "./types/AbortDocumentVersionUploadInput";
import { AbortDocumentVersionUploadOutput } from "./types/AbortDocumentVersionUploadOutput";
import { ActivateUserInput } from "./types/ActivateUserInput";
import { ActivateUserOutput } from "./types/ActivateUserOutput";
import { AddResourcePermissionsInput } from "./types/AddResourcePermissionsInput";
import { AddResourcePermissionsOutput } from "./types/AddResourcePermissionsOutput";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { ConflictingOperationException } from "./types/ConflictingOperationException";
import { CreateCommentInput } from "./types/CreateCommentInput";
import { CreateCommentOutput } from "./types/CreateCommentOutput";
import { CreateCustomMetadataInput } from "./types/CreateCustomMetadataInput";
import { CreateCustomMetadataOutput } from "./types/CreateCustomMetadataOutput";
import { CreateFolderInput } from "./types/CreateFolderInput";
import { CreateFolderOutput } from "./types/CreateFolderOutput";
import { CreateLabelsInput } from "./types/CreateLabelsInput";
import { CreateLabelsOutput } from "./types/CreateLabelsOutput";
import { CreateNotificationSubscriptionInput } from "./types/CreateNotificationSubscriptionInput";
import { CreateNotificationSubscriptionOutput } from "./types/CreateNotificationSubscriptionOutput";
import { CreateUserInput } from "./types/CreateUserInput";
import { CreateUserOutput } from "./types/CreateUserOutput";
import { CustomMetadataLimitExceededException } from "./types/CustomMetadataLimitExceededException";
import { DeactivateUserInput } from "./types/DeactivateUserInput";
import { DeactivateUserOutput } from "./types/DeactivateUserOutput";
import { DeactivatingLastSystemUserException } from "./types/DeactivatingLastSystemUserException";
import { DeleteCommentInput } from "./types/DeleteCommentInput";
import { DeleteCommentOutput } from "./types/DeleteCommentOutput";
import { DeleteCustomMetadataInput } from "./types/DeleteCustomMetadataInput";
import { DeleteCustomMetadataOutput } from "./types/DeleteCustomMetadataOutput";
import { DeleteDocumentInput } from "./types/DeleteDocumentInput";
import { DeleteDocumentOutput } from "./types/DeleteDocumentOutput";
import { DeleteFolderContentsInput } from "./types/DeleteFolderContentsInput";
import { DeleteFolderContentsOutput } from "./types/DeleteFolderContentsOutput";
import { DeleteFolderInput } from "./types/DeleteFolderInput";
import { DeleteFolderOutput } from "./types/DeleteFolderOutput";
import { DeleteLabelsInput } from "./types/DeleteLabelsInput";
import { DeleteLabelsOutput } from "./types/DeleteLabelsOutput";
import { DeleteNotificationSubscriptionInput } from "./types/DeleteNotificationSubscriptionInput";
import { DeleteNotificationSubscriptionOutput } from "./types/DeleteNotificationSubscriptionOutput";
import { DeleteUserInput } from "./types/DeleteUserInput";
import { DeleteUserOutput } from "./types/DeleteUserOutput";
import { DescribeActivitiesInput } from "./types/DescribeActivitiesInput";
import { DescribeActivitiesOutput } from "./types/DescribeActivitiesOutput";
import { DescribeCommentsInput } from "./types/DescribeCommentsInput";
import { DescribeCommentsOutput } from "./types/DescribeCommentsOutput";
import { DescribeDocumentVersionsInput } from "./types/DescribeDocumentVersionsInput";
import { DescribeDocumentVersionsOutput } from "./types/DescribeDocumentVersionsOutput";
import { DescribeFolderContentsInput } from "./types/DescribeFolderContentsInput";
import { DescribeFolderContentsOutput } from "./types/DescribeFolderContentsOutput";
import { DescribeGroupsInput } from "./types/DescribeGroupsInput";
import { DescribeGroupsOutput } from "./types/DescribeGroupsOutput";
import { DescribeNotificationSubscriptionsInput } from "./types/DescribeNotificationSubscriptionsInput";
import { DescribeNotificationSubscriptionsOutput } from "./types/DescribeNotificationSubscriptionsOutput";
import { DescribeResourcePermissionsInput } from "./types/DescribeResourcePermissionsInput";
import { DescribeResourcePermissionsOutput } from "./types/DescribeResourcePermissionsOutput";
import { DescribeRootFoldersInput } from "./types/DescribeRootFoldersInput";
import { DescribeRootFoldersOutput } from "./types/DescribeRootFoldersOutput";
import { DescribeUsersInput } from "./types/DescribeUsersInput";
import { DescribeUsersOutput } from "./types/DescribeUsersOutput";
import { DocumentLockedForCommentsException } from "./types/DocumentLockedForCommentsException";
import { DraftUploadOutOfSyncException } from "./types/DraftUploadOutOfSyncException";
import { EntityAlreadyExistsException } from "./types/EntityAlreadyExistsException";
import { EntityNotExistsException } from "./types/EntityNotExistsException";
import { FailedDependencyException } from "./types/FailedDependencyException";
import { GetCurrentUserInput } from "./types/GetCurrentUserInput";
import { GetCurrentUserOutput } from "./types/GetCurrentUserOutput";
import { GetDocumentInput } from "./types/GetDocumentInput";
import { GetDocumentOutput } from "./types/GetDocumentOutput";
import { GetDocumentPathInput } from "./types/GetDocumentPathInput";
import { GetDocumentPathOutput } from "./types/GetDocumentPathOutput";
import { GetDocumentVersionInput } from "./types/GetDocumentVersionInput";
import { GetDocumentVersionOutput } from "./types/GetDocumentVersionOutput";
import { GetFolderInput } from "./types/GetFolderInput";
import { GetFolderOutput } from "./types/GetFolderOutput";
import { GetFolderPathInput } from "./types/GetFolderPathInput";
import { GetFolderPathOutput } from "./types/GetFolderPathOutput";
import { GetResourcesInput } from "./types/GetResourcesInput";
import { GetResourcesOutput } from "./types/GetResourcesOutput";
import { IllegalUserStateException } from "./types/IllegalUserStateException";
import { InitiateDocumentVersionUploadInput } from "./types/InitiateDocumentVersionUploadInput";
import { InitiateDocumentVersionUploadOutput } from "./types/InitiateDocumentVersionUploadOutput";
import { InvalidArgumentException } from "./types/InvalidArgumentException";
import { InvalidCommentOperationException } from "./types/InvalidCommentOperationException";
import { InvalidOperationException } from "./types/InvalidOperationException";
import { InvalidPasswordException } from "./types/InvalidPasswordException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ProhibitedStateException } from "./types/ProhibitedStateException";
import { RemoveAllResourcePermissionsInput } from "./types/RemoveAllResourcePermissionsInput";
import { RemoveAllResourcePermissionsOutput } from "./types/RemoveAllResourcePermissionsOutput";
import { RemoveResourcePermissionInput } from "./types/RemoveResourcePermissionInput";
import { RemoveResourcePermissionOutput } from "./types/RemoveResourcePermissionOutput";
import { RequestedEntityTooLargeException } from "./types/RequestedEntityTooLargeException";
import { ResourceAlreadyCheckedOutException } from "./types/ResourceAlreadyCheckedOutException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { StorageLimitExceededException } from "./types/StorageLimitExceededException";
import { StorageLimitWillExceedException } from "./types/StorageLimitWillExceedException";
import { TooManyLabelsException } from "./types/TooManyLabelsException";
import { TooManySubscriptionsException } from "./types/TooManySubscriptionsException";
import { UnauthorizedOperationException } from "./types/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./types/UnauthorizedResourceAccessException";
import { UpdateDocumentInput } from "./types/UpdateDocumentInput";
import { UpdateDocumentOutput } from "./types/UpdateDocumentOutput";
import { UpdateDocumentVersionInput } from "./types/UpdateDocumentVersionInput";
import { UpdateDocumentVersionOutput } from "./types/UpdateDocumentVersionOutput";
import { UpdateFolderInput } from "./types/UpdateFolderInput";
import { UpdateFolderOutput } from "./types/UpdateFolderOutput";
import { UpdateUserInput } from "./types/UpdateUserInput";
import { UpdateUserOutput } from "./types/UpdateUserOutput";
import { AbortDocumentVersionUploadCommand } from "./commands/AbortDocumentVersionUploadCommand";
import { ActivateUserCommand } from "./commands/ActivateUserCommand";
import { AddResourcePermissionsCommand } from "./commands/AddResourcePermissionsCommand";
import { CreateCommentCommand } from "./commands/CreateCommentCommand";
import { CreateCustomMetadataCommand } from "./commands/CreateCustomMetadataCommand";
import { CreateFolderCommand } from "./commands/CreateFolderCommand";
import { CreateLabelsCommand } from "./commands/CreateLabelsCommand";
import { CreateNotificationSubscriptionCommand } from "./commands/CreateNotificationSubscriptionCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { DeactivateUserCommand } from "./commands/DeactivateUserCommand";
import { DeleteCommentCommand } from "./commands/DeleteCommentCommand";
import { DeleteCustomMetadataCommand } from "./commands/DeleteCustomMetadataCommand";
import { DeleteDocumentCommand } from "./commands/DeleteDocumentCommand";
import { DeleteFolderCommand } from "./commands/DeleteFolderCommand";
import { DeleteFolderContentsCommand } from "./commands/DeleteFolderContentsCommand";
import { DeleteLabelsCommand } from "./commands/DeleteLabelsCommand";
import { DeleteNotificationSubscriptionCommand } from "./commands/DeleteNotificationSubscriptionCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DescribeActivitiesCommand } from "./commands/DescribeActivitiesCommand";
import { DescribeCommentsCommand } from "./commands/DescribeCommentsCommand";
import { DescribeDocumentVersionsCommand } from "./commands/DescribeDocumentVersionsCommand";
import { DescribeFolderContentsCommand } from "./commands/DescribeFolderContentsCommand";
import { DescribeGroupsCommand } from "./commands/DescribeGroupsCommand";
import { DescribeNotificationSubscriptionsCommand } from "./commands/DescribeNotificationSubscriptionsCommand";
import { DescribeResourcePermissionsCommand } from "./commands/DescribeResourcePermissionsCommand";
import { DescribeRootFoldersCommand } from "./commands/DescribeRootFoldersCommand";
import { DescribeUsersCommand } from "./commands/DescribeUsersCommand";
import { GetCurrentUserCommand } from "./commands/GetCurrentUserCommand";
import { GetDocumentCommand } from "./commands/GetDocumentCommand";
import { GetDocumentPathCommand } from "./commands/GetDocumentPathCommand";
import { GetDocumentVersionCommand } from "./commands/GetDocumentVersionCommand";
import { GetFolderCommand } from "./commands/GetFolderCommand";
import { GetFolderPathCommand } from "./commands/GetFolderPathCommand";
import { GetResourcesCommand } from "./commands/GetResourcesCommand";
import { InitiateDocumentVersionUploadCommand } from "./commands/InitiateDocumentVersionUploadCommand";
import { RemoveAllResourcePermissionsCommand } from "./commands/RemoveAllResourcePermissionsCommand";
import { RemoveResourcePermissionCommand } from "./commands/RemoveResourcePermissionCommand";
import { UpdateDocumentCommand } from "./commands/UpdateDocumentCommand";
import { UpdateDocumentVersionCommand } from "./commands/UpdateDocumentVersionCommand";
import { UpdateFolderCommand } from "./commands/UpdateFolderCommand";
import { UpdateUserCommand } from "./commands/UpdateUserCommand";

export class WorkDocs extends WorkDocsClient {
  /**
   * <p>Aborts the upload of the specified document version that was previously initiated by <a>InitiateDocumentVersionUpload</a>. The client should make this call only when it no longer intends to upload the document version, or fails to do so.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public abortDocumentVersionUpload(
    args: AbortDocumentVersionUploadInput
  ): Promise<AbortDocumentVersionUploadOutput>;
  public abortDocumentVersionUpload(
    args: AbortDocumentVersionUploadInput,
    cb: (err: any, data?: AbortDocumentVersionUploadOutput) => void
  ): void;
  public abortDocumentVersionUpload(
    args: AbortDocumentVersionUploadInput,
    cb?: (err: any, data?: AbortDocumentVersionUploadOutput) => void
  ): Promise<AbortDocumentVersionUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AbortDocumentVersionUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Activates the specified user. Only active users can access Amazon WorkDocs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public activateUser(args: ActivateUserInput): Promise<ActivateUserOutput>;
  public activateUser(
    args: ActivateUserInput,
    cb: (err: any, data?: ActivateUserOutput) => void
  ): void;
  public activateUser(
    args: ActivateUserInput,
    cb?: (err: any, data?: ActivateUserOutput) => void
  ): Promise<ActivateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ActivateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addResourcePermissions(
    args: AddResourcePermissionsInput
  ): Promise<AddResourcePermissionsOutput>;
  public addResourcePermissions(
    args: AddResourcePermissionsInput,
    cb: (err: any, data?: AddResourcePermissionsOutput) => void
  ): void;
  public addResourcePermissions(
    args: AddResourcePermissionsInput,
    cb?: (err: any, data?: AddResourcePermissionsOutput) => void
  ): Promise<AddResourcePermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddResourcePermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a new comment to the specified document version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {DocumentLockedForCommentsException} <p>This exception is thrown when the document is locked for comments and user tries to create or delete a comment on that document.</p>
   *   - {InvalidCommentOperationException} <p>The requested operation is not allowed on the specified comment object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createComment(args: CreateCommentInput): Promise<CreateCommentOutput>;
  public createComment(
    args: CreateCommentInput,
    cb: (err: any, data?: CreateCommentOutput) => void
  ): void;
  public createComment(
    args: CreateCommentInput,
    cb?: (err: any, data?: CreateCommentOutput) => void
  ): Promise<CreateCommentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCommentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more custom properties to the specified resource (a folder, document, or version).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {CustomMetadataLimitExceededException} <p>The limit has been reached on the number of custom properties for the specified resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCustomMetadata(
    args: CreateCustomMetadataInput
  ): Promise<CreateCustomMetadataOutput>;
  public createCustomMetadata(
    args: CreateCustomMetadataInput,
    cb: (err: any, data?: CreateCustomMetadataOutput) => void
  ): void;
  public createCustomMetadata(
    args: CreateCustomMetadataInput,
    cb?: (err: any, data?: CreateCustomMetadataOutput) => void
  ): Promise<CreateCustomMetadataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCustomMetadataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a folder with the specified name and parent folder.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {EntityAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {ConflictingOperationException} <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
   *   - {LimitExceededException} <p>The maximum of 100,000 folders under the parent folder has been exceeded.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFolder(args: CreateFolderInput): Promise<CreateFolderOutput>;
  public createFolder(
    args: CreateFolderInput,
    cb: (err: any, data?: CreateFolderOutput) => void
  ): void;
  public createFolder(
    args: CreateFolderInput,
    cb?: (err: any, data?: CreateFolderOutput) => void
  ): Promise<CreateFolderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFolderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified list of labels to the given resource (a document or folder)</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {TooManyLabelsException} <p>The limit has been reached on the number of labels for the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLabels(args: CreateLabelsInput): Promise<CreateLabelsOutput>;
  public createLabels(
    args: CreateLabelsInput,
    cb: (err: any, data?: CreateLabelsOutput) => void
  ): void;
  public createLabels(
    args: CreateLabelsInput,
    cb?: (err: any, data?: CreateLabelsOutput) => void
  ): Promise<CreateLabelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLabelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a confirmation message, and must confirm the subscription.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/subscribe-notifications.html">Subscribe to Notifications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {TooManySubscriptionsException} <p>You've reached the limit on the number of subscriptions for the WorkDocs instance.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNotificationSubscription(
    args: CreateNotificationSubscriptionInput
  ): Promise<CreateNotificationSubscriptionOutput>;
  public createNotificationSubscription(
    args: CreateNotificationSubscriptionInput,
    cb: (err: any, data?: CreateNotificationSubscriptionOutput) => void
  ): void;
  public createNotificationSubscription(
    args: CreateNotificationSubscriptionInput,
    cb?: (err: any, data?: CreateNotificationSubscriptionOutput) => void
  ): Promise<CreateNotificationSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNotificationSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a user in a Simple AD or Microsoft AD directory. The status of a newly created user is "ACTIVE". New users can access Amazon WorkDocs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityAlreadyExistsException} <p>The resource already exists.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
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
   * <p>Deactivates the specified user, which revokes the user's access to Amazon WorkDocs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deactivateUser(
    args: DeactivateUserInput
  ): Promise<DeactivateUserOutput>;
  public deactivateUser(
    args: DeactivateUserInput,
    cb: (err: any, data?: DeactivateUserOutput) => void
  ): void;
  public deactivateUser(
    args: DeactivateUserInput,
    cb?: (err: any, data?: DeactivateUserOutput) => void
  ): Promise<DeactivateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeactivateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified comment from the document version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {DocumentLockedForCommentsException} <p>This exception is thrown when the document is locked for comments and user tries to create or delete a comment on that document.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteComment(args: DeleteCommentInput): Promise<DeleteCommentOutput>;
  public deleteComment(
    args: DeleteCommentInput,
    cb: (err: any, data?: DeleteCommentOutput) => void
  ): void;
  public deleteComment(
    args: DeleteCommentInput,
    cb?: (err: any, data?: DeleteCommentOutput) => void
  ): Promise<DeleteCommentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCommentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes custom metadata from the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCustomMetadata(
    args: DeleteCustomMetadataInput
  ): Promise<DeleteCustomMetadataOutput>;
  public deleteCustomMetadata(
    args: DeleteCustomMetadataInput,
    cb: (err: any, data?: DeleteCustomMetadataOutput) => void
  ): void;
  public deleteCustomMetadata(
    args: DeleteCustomMetadataInput,
    cb?: (err: any, data?: DeleteCustomMetadataOutput) => void
  ): Promise<DeleteCustomMetadataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCustomMetadataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes the specified document and its associated metadata.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {ConflictingOperationException} <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
   *   - {ConcurrentModificationException} <p>The resource hierarchy is changing.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDocument(
    args: DeleteDocumentInput
  ): Promise<DeleteDocumentOutput>;
  public deleteDocument(
    args: DeleteDocumentInput,
    cb: (err: any, data?: DeleteDocumentOutput) => void
  ): void;
  public deleteDocument(
    args: DeleteDocumentInput,
    cb?: (err: any, data?: DeleteDocumentOutput) => void
  ): Promise<DeleteDocumentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDocumentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes the specified folder and its contents.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {ConflictingOperationException} <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
   *   - {ConcurrentModificationException} <p>The resource hierarchy is changing.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFolder(args: DeleteFolderInput): Promise<DeleteFolderOutput>;
  public deleteFolder(
    args: DeleteFolderInput,
    cb: (err: any, data?: DeleteFolderOutput) => void
  ): void;
  public deleteFolder(
    args: DeleteFolderInput,
    cb?: (err: any, data?: DeleteFolderOutput) => void
  ): Promise<DeleteFolderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFolderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the contents of the specified folder.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {ConflictingOperationException} <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFolderContents(
    args: DeleteFolderContentsInput
  ): Promise<DeleteFolderContentsOutput>;
  public deleteFolderContents(
    args: DeleteFolderContentsInput,
    cb: (err: any, data?: DeleteFolderContentsOutput) => void
  ): void;
  public deleteFolderContents(
    args: DeleteFolderContentsInput,
    cb?: (err: any, data?: DeleteFolderContentsOutput) => void
  ): Promise<DeleteFolderContentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFolderContentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified list of labels from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLabels(args: DeleteLabelsInput): Promise<DeleteLabelsOutput>;
  public deleteLabels(
    args: DeleteLabelsInput,
    cb: (err: any, data?: DeleteLabelsOutput) => void
  ): void;
  public deleteLabels(
    args: DeleteLabelsInput,
    cb?: (err: any, data?: DeleteLabelsOutput) => void
  ): Promise<DeleteLabelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLabelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified subscription from the specified organization.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNotificationSubscription(
    args: DeleteNotificationSubscriptionInput
  ): Promise<DeleteNotificationSubscriptionOutput>;
  public deleteNotificationSubscription(
    args: DeleteNotificationSubscriptionInput,
    cb: (err: any, data?: DeleteNotificationSubscriptionOutput) => void
  ): void;
  public deleteNotificationSubscription(
    args: DeleteNotificationSubscriptionInput,
    cb?: (err: any, data?: DeleteNotificationSubscriptionOutput) => void
  ): Promise<DeleteNotificationSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNotificationSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified user from a Simple AD or Microsoft AD directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
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
   * <p>Describes the user activities in a specified time period.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {InvalidArgumentException} <p>The pagination marker or limit fields are not valid.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeActivities(
    args: DescribeActivitiesInput
  ): Promise<DescribeActivitiesOutput>;
  public describeActivities(
    args: DescribeActivitiesInput,
    cb: (err: any, data?: DescribeActivitiesOutput) => void
  ): void;
  public describeActivities(
    args: DescribeActivitiesInput,
    cb?: (err: any, data?: DescribeActivitiesOutput) => void
  ): Promise<DescribeActivitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeActivitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all the comments for the specified document version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeComments(
    args: DescribeCommentsInput
  ): Promise<DescribeCommentsOutput>;
  public describeComments(
    args: DescribeCommentsInput,
    cb: (err: any, data?: DescribeCommentsOutput) => void
  ): void;
  public describeComments(
    args: DescribeCommentsInput,
    cb?: (err: any, data?: DescribeCommentsOutput) => void
  ): Promise<DescribeCommentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCommentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the document versions for the specified document.</p> <p>By default, only active versions are returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {InvalidArgumentException} <p>The pagination marker or limit fields are not valid.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDocumentVersions(
    args: DescribeDocumentVersionsInput
  ): Promise<DescribeDocumentVersionsOutput>;
  public describeDocumentVersions(
    args: DescribeDocumentVersionsInput,
    cb: (err: any, data?: DescribeDocumentVersionsOutput) => void
  ): void;
  public describeDocumentVersions(
    args: DescribeDocumentVersionsInput,
    cb?: (err: any, data?: DescribeDocumentVersionsOutput) => void
  ): Promise<DescribeDocumentVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDocumentVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the contents of the specified folder, including its documents and subfolders.</p> <p>By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {InvalidArgumentException} <p>The pagination marker or limit fields are not valid.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFolderContents(
    args: DescribeFolderContentsInput
  ): Promise<DescribeFolderContentsOutput>;
  public describeFolderContents(
    args: DescribeFolderContentsInput,
    cb: (err: any, data?: DescribeFolderContentsOutput) => void
  ): void;
  public describeFolderContents(
    args: DescribeFolderContentsInput,
    cb?: (err: any, data?: DescribeFolderContentsOutput) => void
  ): Promise<DescribeFolderContentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFolderContentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the groups specified by the query. Groups are defined by the underlying Active Directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeGroups(
    args: DescribeGroupsInput
  ): Promise<DescribeGroupsOutput>;
  public describeGroups(
    args: DescribeGroupsInput,
    cb: (err: any, data?: DescribeGroupsOutput) => void
  ): void;
  public describeGroups(
    args: DescribeGroupsInput,
    cb?: (err: any, data?: DescribeGroupsOutput) => void
  ): Promise<DescribeGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the specified notification subscriptions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsInput
  ): Promise<DescribeNotificationSubscriptionsOutput>;
  public describeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsInput,
    cb: (err: any, data?: DescribeNotificationSubscriptionsOutput) => void
  ): void;
  public describeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsInput,
    cb?: (err: any, data?: DescribeNotificationSubscriptionsOutput) => void
  ): Promise<DescribeNotificationSubscriptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNotificationSubscriptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the permissions of a specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeResourcePermissions(
    args: DescribeResourcePermissionsInput
  ): Promise<DescribeResourcePermissionsOutput>;
  public describeResourcePermissions(
    args: DescribeResourcePermissionsInput,
    cb: (err: any, data?: DescribeResourcePermissionsOutput) => void
  ): void;
  public describeResourcePermissions(
    args: DescribeResourcePermissionsInput,
    cb?: (err: any, data?: DescribeResourcePermissionsOutput) => void
  ): Promise<DescribeResourcePermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeResourcePermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the current user's special folders; the <code>RootFolder</code> and the <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid action for SigV4 (administrative API) clients.</p> <p>This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access Control for User Applications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {InvalidArgumentException} <p>The pagination marker or limit fields are not valid.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRootFolders(
    args: DescribeRootFoldersInput
  ): Promise<DescribeRootFoldersOutput>;
  public describeRootFolders(
    args: DescribeRootFoldersInput,
    cb: (err: any, data?: DescribeRootFoldersOutput) => void
  ): void;
  public describeRootFolders(
    args: DescribeRootFoldersInput,
    cb?: (err: any, data?: DescribeRootFoldersOutput) => void
  ): Promise<DescribeRootFoldersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRootFoldersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified users. You can describe all users or filter the results (for example, by status or organization).</p> <p>By default, Amazon WorkDocs returns the first 24 active or pending users. If there are more results, the response includes a marker that you can use to request the next set of results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {InvalidArgumentException} <p>The pagination marker or limit fields are not valid.</p>
   *   - {RequestedEntityTooLargeException} <p>The response is too large to return. The request must include a filter to reduce the size of the response.</p>
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
   * <p>Retrieves details of the current user for whom the authentication token was generated. This is not a valid action for SigV4 (administrative API) clients.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCurrentUser(
    args: GetCurrentUserInput
  ): Promise<GetCurrentUserOutput>;
  public getCurrentUser(
    args: GetCurrentUserInput,
    cb: (err: any, data?: GetCurrentUserOutput) => void
  ): void;
  public getCurrentUser(
    args: GetCurrentUserInput,
    cb?: (err: any, data?: GetCurrentUserOutput) => void
  ): Promise<GetCurrentUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCurrentUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves details of a document.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {InvalidArgumentException} <p>The pagination marker or limit fields are not valid.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {InvalidPasswordException} <p>The password is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDocument(args: GetDocumentInput): Promise<GetDocumentOutput>;
  public getDocument(
    args: GetDocumentInput,
    cb: (err: any, data?: GetDocumentOutput) => void
  ): void;
  public getDocument(
    args: GetDocumentInput,
    cb?: (err: any, data?: GetDocumentOutput) => void
  ): Promise<GetDocumentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDocumentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the path information (the hierarchy from the root folder) for the requested document.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested document and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the names of the parent folders.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDocumentPath(
    args: GetDocumentPathInput
  ): Promise<GetDocumentPathOutput>;
  public getDocumentPath(
    args: GetDocumentPathInput,
    cb: (err: any, data?: GetDocumentPathOutput) => void
  ): void;
  public getDocumentPath(
    args: GetDocumentPathInput,
    cb?: (err: any, data?: GetDocumentPathOutput) => void
  ): Promise<GetDocumentPathOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDocumentPathCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves version metadata for the specified document.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {InvalidPasswordException} <p>The password is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDocumentVersion(
    args: GetDocumentVersionInput
  ): Promise<GetDocumentVersionOutput>;
  public getDocumentVersion(
    args: GetDocumentVersionInput,
    cb: (err: any, data?: GetDocumentVersionOutput) => void
  ): void;
  public getDocumentVersion(
    args: GetDocumentVersionInput,
    cb?: (err: any, data?: GetDocumentVersionOutput) => void
  ): Promise<GetDocumentVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDocumentVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the metadata of the specified folder.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {InvalidArgumentException} <p>The pagination marker or limit fields are not valid.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFolder(args: GetFolderInput): Promise<GetFolderOutput>;
  public getFolder(
    args: GetFolderInput,
    cb: (err: any, data?: GetFolderOutput) => void
  ): void;
  public getFolder(
    args: GetFolderInput,
    cb?: (err: any, data?: GetFolderOutput) => void
  ): Promise<GetFolderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFolderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the path information (the hierarchy from the root folder) for the specified folder.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested folder and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the parent folder names.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFolderPath(args: GetFolderPathInput): Promise<GetFolderPathOutput>;
  public getFolderPath(
    args: GetFolderPathInput,
    cb: (err: any, data?: GetFolderPathOutput) => void
  ): void;
  public getFolderPath(
    args: GetFolderPathInput,
    cb?: (err: any, data?: GetFolderPathOutput) => void
  ): Promise<GetFolderPathOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFolderPathCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a collection of resources, including folders and documents. The only <code>CollectionType</code> supported is <code>SHARED_WITH_ME</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {InvalidArgumentException} <p>The pagination marker or limit fields are not valid.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResources(args: GetResourcesInput): Promise<GetResourcesOutput>;
  public getResources(
    args: GetResourcesInput,
    cb: (err: any, data?: GetResourcesOutput) => void
  ): void;
  public getResources(
    args: GetResourcesInput,
    cb?: (err: any, data?: GetResourcesOutput) => void
  ): Promise<GetResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new document object and version object.</p> <p>The client specifies the parent folder ID and name of the document to upload. The ID is optionally specified when creating a new version of an existing document. This is the first step to upload a document. Next, upload the document to the URL returned from the call, and then call <a>UpdateDocumentVersion</a>.</p> <p>To cancel the document upload, call <a>AbortDocumentVersionUpload</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {EntityAlreadyExistsException} <p>The resource already exists.</p>
   *   - {StorageLimitExceededException} <p>The storage limit has been exceeded.</p>
   *   - {StorageLimitWillExceedException} <p>The storage limit will be exceeded.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {DraftUploadOutOfSyncException} <p>This exception is thrown when a valid checkout ID is not presented on document version upload calls for a document that has been checked out from Web client.</p>
   *   - {ResourceAlreadyCheckedOutException} <p>The resource is already checked out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public initiateDocumentVersionUpload(
    args: InitiateDocumentVersionUploadInput
  ): Promise<InitiateDocumentVersionUploadOutput>;
  public initiateDocumentVersionUpload(
    args: InitiateDocumentVersionUploadInput,
    cb: (err: any, data?: InitiateDocumentVersionUploadOutput) => void
  ): void;
  public initiateDocumentVersionUpload(
    args: InitiateDocumentVersionUploadInput,
    cb?: (err: any, data?: InitiateDocumentVersionUploadOutput) => void
  ): Promise<InitiateDocumentVersionUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InitiateDocumentVersionUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes all the permissions from the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeAllResourcePermissions(
    args: RemoveAllResourcePermissionsInput
  ): Promise<RemoveAllResourcePermissionsOutput>;
  public removeAllResourcePermissions(
    args: RemoveAllResourcePermissionsInput,
    cb: (err: any, data?: RemoveAllResourcePermissionsOutput) => void
  ): void;
  public removeAllResourcePermissions(
    args: RemoveAllResourcePermissionsInput,
    cb?: (err: any, data?: RemoveAllResourcePermissionsOutput) => void
  ): Promise<RemoveAllResourcePermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveAllResourcePermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the permission for the specified principal from the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeResourcePermission(
    args: RemoveResourcePermissionInput
  ): Promise<RemoveResourcePermissionOutput>;
  public removeResourcePermission(
    args: RemoveResourcePermissionInput,
    cb: (err: any, data?: RemoveResourcePermissionOutput) => void
  ): void;
  public removeResourcePermission(
    args: RemoveResourcePermissionInput,
    cb?: (err: any, data?: RemoveResourcePermissionOutput) => void
  ): Promise<RemoveResourcePermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveResourcePermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified attributes of a document. The user must have access to both the document and its parent folder, if applicable.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {EntityAlreadyExistsException} <p>The resource already exists.</p>
   *   - {LimitExceededException} <p>The maximum of 100,000 folders under the parent folder has been exceeded.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {ConflictingOperationException} <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
   *   - {ConcurrentModificationException} <p>The resource hierarchy is changing.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDocument(
    args: UpdateDocumentInput
  ): Promise<UpdateDocumentOutput>;
  public updateDocument(
    args: UpdateDocumentInput,
    cb: (err: any, data?: UpdateDocumentOutput) => void
  ): void;
  public updateDocument(
    args: UpdateDocumentInput,
    cb?: (err: any, data?: UpdateDocumentOutput) => void
  ): Promise<UpdateDocumentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDocumentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the status of the document version to ACTIVE. </p> <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by <a>InitiateDocumentVersionUpload</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {ConcurrentModificationException} <p>The resource hierarchy is changing.</p>
   *   - {InvalidOperationException} <p>The operation is invalid.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDocumentVersion(
    args: UpdateDocumentVersionInput
  ): Promise<UpdateDocumentVersionOutput>;
  public updateDocumentVersion(
    args: UpdateDocumentVersionInput,
    cb: (err: any, data?: UpdateDocumentVersionOutput) => void
  ): void;
  public updateDocumentVersion(
    args: UpdateDocumentVersionInput,
    cb?: (err: any, data?: UpdateDocumentVersionOutput) => void
  ): Promise<UpdateDocumentVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDocumentVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {EntityAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ProhibitedStateException} <p>The specified document version is not in the INITIALIZED state.</p>
   *   - {ConflictingOperationException} <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
   *   - {ConcurrentModificationException} <p>The resource hierarchy is changing.</p>
   *   - {LimitExceededException} <p>The maximum of 100,000 folders under the parent folder has been exceeded.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFolder(args: UpdateFolderInput): Promise<UpdateFolderOutput>;
  public updateFolder(
    args: UpdateFolderInput,
    cb: (err: any, data?: UpdateFolderOutput) => void
  ): void;
  public updateFolder(
    args: UpdateFolderInput,
    cb?: (err: any, data?: UpdateFolderOutput) => void
  ): Promise<UpdateFolderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFolderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotExistsException} <p>The resource does not exist.</p>
   *   - {UnauthorizedOperationException} <p>The operation is not permitted.</p>
   *   - {UnauthorizedResourceAccessException} <p>The caller does not have access to perform the action on the resource.</p>
   *   - {IllegalUserStateException} <p>The user is undergoing transfer of ownership.</p>
   *   - {FailedDependencyException} <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
   *   - {ServiceUnavailableException} <p>One or more of the dependencies is unavailable.</p>
   *   - {DeactivatingLastSystemUserException} <p>The last user in the organization is being deactivated.</p>
   *   - {InvalidArgumentException} <p>The pagination marker or limit fields are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUser(args: UpdateUserInput): Promise<UpdateUserOutput>;
  public updateUser(
    args: UpdateUserInput,
    cb: (err: any, data?: UpdateUserOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserInput,
    cb?: (err: any, data?: UpdateUserOutput) => void
  ): Promise<UpdateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
