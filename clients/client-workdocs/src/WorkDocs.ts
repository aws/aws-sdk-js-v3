// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AbortDocumentVersionUploadCommand,
  AbortDocumentVersionUploadCommandInput,
  AbortDocumentVersionUploadCommandOutput,
} from "./commands/AbortDocumentVersionUploadCommand";
import {
  ActivateUserCommand,
  ActivateUserCommandInput,
  ActivateUserCommandOutput,
} from "./commands/ActivateUserCommand";
import {
  AddResourcePermissionsCommand,
  AddResourcePermissionsCommandInput,
  AddResourcePermissionsCommandOutput,
} from "./commands/AddResourcePermissionsCommand";
import {
  CreateCommentCommand,
  CreateCommentCommandInput,
  CreateCommentCommandOutput,
} from "./commands/CreateCommentCommand";
import {
  CreateCustomMetadataCommand,
  CreateCustomMetadataCommandInput,
  CreateCustomMetadataCommandOutput,
} from "./commands/CreateCustomMetadataCommand";
import {
  CreateFolderCommand,
  CreateFolderCommandInput,
  CreateFolderCommandOutput,
} from "./commands/CreateFolderCommand";
import {
  CreateLabelsCommand,
  CreateLabelsCommandInput,
  CreateLabelsCommandOutput,
} from "./commands/CreateLabelsCommand";
import {
  CreateNotificationSubscriptionCommand,
  CreateNotificationSubscriptionCommandInput,
  CreateNotificationSubscriptionCommandOutput,
} from "./commands/CreateNotificationSubscriptionCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeactivateUserCommand,
  DeactivateUserCommandInput,
  DeactivateUserCommandOutput,
} from "./commands/DeactivateUserCommand";
import {
  DeleteCommentCommand,
  DeleteCommentCommandInput,
  DeleteCommentCommandOutput,
} from "./commands/DeleteCommentCommand";
import {
  DeleteCustomMetadataCommand,
  DeleteCustomMetadataCommandInput,
  DeleteCustomMetadataCommandOutput,
} from "./commands/DeleteCustomMetadataCommand";
import {
  DeleteDocumentCommand,
  DeleteDocumentCommandInput,
  DeleteDocumentCommandOutput,
} from "./commands/DeleteDocumentCommand";
import {
  DeleteDocumentVersionCommand,
  DeleteDocumentVersionCommandInput,
  DeleteDocumentVersionCommandOutput,
} from "./commands/DeleteDocumentVersionCommand";
import {
  DeleteFolderCommand,
  DeleteFolderCommandInput,
  DeleteFolderCommandOutput,
} from "./commands/DeleteFolderCommand";
import {
  DeleteFolderContentsCommand,
  DeleteFolderContentsCommandInput,
  DeleteFolderContentsCommandOutput,
} from "./commands/DeleteFolderContentsCommand";
import {
  DeleteLabelsCommand,
  DeleteLabelsCommandInput,
  DeleteLabelsCommandOutput,
} from "./commands/DeleteLabelsCommand";
import {
  DeleteNotificationSubscriptionCommand,
  DeleteNotificationSubscriptionCommandInput,
  DeleteNotificationSubscriptionCommandOutput,
} from "./commands/DeleteNotificationSubscriptionCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeActivitiesCommand,
  DescribeActivitiesCommandInput,
  DescribeActivitiesCommandOutput,
} from "./commands/DescribeActivitiesCommand";
import {
  DescribeCommentsCommand,
  DescribeCommentsCommandInput,
  DescribeCommentsCommandOutput,
} from "./commands/DescribeCommentsCommand";
import {
  DescribeDocumentVersionsCommand,
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput,
} from "./commands/DescribeDocumentVersionsCommand";
import {
  DescribeFolderContentsCommand,
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput,
} from "./commands/DescribeFolderContentsCommand";
import {
  DescribeGroupsCommand,
  DescribeGroupsCommandInput,
  DescribeGroupsCommandOutput,
} from "./commands/DescribeGroupsCommand";
import {
  DescribeNotificationSubscriptionsCommand,
  DescribeNotificationSubscriptionsCommandInput,
  DescribeNotificationSubscriptionsCommandOutput,
} from "./commands/DescribeNotificationSubscriptionsCommand";
import {
  DescribeResourcePermissionsCommand,
  DescribeResourcePermissionsCommandInput,
  DescribeResourcePermissionsCommandOutput,
} from "./commands/DescribeResourcePermissionsCommand";
import {
  DescribeRootFoldersCommand,
  DescribeRootFoldersCommandInput,
  DescribeRootFoldersCommandOutput,
} from "./commands/DescribeRootFoldersCommand";
import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "./commands/DescribeUsersCommand";
import {
  GetCurrentUserCommand,
  GetCurrentUserCommandInput,
  GetCurrentUserCommandOutput,
} from "./commands/GetCurrentUserCommand";
import { GetDocumentCommand, GetDocumentCommandInput, GetDocumentCommandOutput } from "./commands/GetDocumentCommand";
import {
  GetDocumentPathCommand,
  GetDocumentPathCommandInput,
  GetDocumentPathCommandOutput,
} from "./commands/GetDocumentPathCommand";
import {
  GetDocumentVersionCommand,
  GetDocumentVersionCommandInput,
  GetDocumentVersionCommandOutput,
} from "./commands/GetDocumentVersionCommand";
import { GetFolderCommand, GetFolderCommandInput, GetFolderCommandOutput } from "./commands/GetFolderCommand";
import {
  GetFolderPathCommand,
  GetFolderPathCommandInput,
  GetFolderPathCommandOutput,
} from "./commands/GetFolderPathCommand";
import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "./commands/GetResourcesCommand";
import {
  InitiateDocumentVersionUploadCommand,
  InitiateDocumentVersionUploadCommandInput,
  InitiateDocumentVersionUploadCommandOutput,
} from "./commands/InitiateDocumentVersionUploadCommand";
import {
  RemoveAllResourcePermissionsCommand,
  RemoveAllResourcePermissionsCommandInput,
  RemoveAllResourcePermissionsCommandOutput,
} from "./commands/RemoveAllResourcePermissionsCommand";
import {
  RemoveResourcePermissionCommand,
  RemoveResourcePermissionCommandInput,
  RemoveResourcePermissionCommandOutput,
} from "./commands/RemoveResourcePermissionCommand";
import {
  RestoreDocumentVersionsCommand,
  RestoreDocumentVersionsCommandInput,
  RestoreDocumentVersionsCommandOutput,
} from "./commands/RestoreDocumentVersionsCommand";
import {
  UpdateDocumentCommand,
  UpdateDocumentCommandInput,
  UpdateDocumentCommandOutput,
} from "./commands/UpdateDocumentCommand";
import {
  UpdateDocumentVersionCommand,
  UpdateDocumentVersionCommandInput,
  UpdateDocumentVersionCommandOutput,
} from "./commands/UpdateDocumentVersionCommand";
import {
  UpdateFolderCommand,
  UpdateFolderCommandInput,
  UpdateFolderCommandOutput,
} from "./commands/UpdateFolderCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { WorkDocsClient } from "./WorkDocsClient";

/**
 * <p>The WorkDocs API is designed for the following use cases:</p>
 *         <ul>
 *             <li>
 *                 <p>File Migration: File migration applications are supported for users who
 *                     want to migrate their files from an on-premises or off-premises file system or
 *                     service. Users can insert files into a user directory structure, as well as
 *                     allow for basic metadata changes, such as modifications to the permissions of
 *                     files.</p>
 *             </li>
 *             <li>
 *                 <p>Security: Support security applications are supported for users who have
 *                     additional security needs, such as antivirus or data loss prevention. The API
 *                     actions, along with AWS CloudTrail, allow these applications to detect when
 *                     changes occur in Amazon WorkDocs. Then, the application can take the necessary
 *                     actions and replace the target file. If the target file violates the policy, the
 *                     application can also choose to email the user.</p>
 *             </li>
 *             <li>
 *                 <p>eDiscovery/Analytics: General administrative applications are supported,
 *                     such as eDiscovery and analytics. These applications can choose to mimic or
 *                     record the actions in an Amazon WorkDocs site, along with AWS CloudTrail, to
 *                     replicate data for eDiscovery, backup, or analytical applications.</p>
 *             </li>
 *          </ul>
 *         <p>All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed.
 *             They not only require the use of the AWS SDK, but also allow for the exclusive use of
 *             IAM users and roles to help facilitate access, trust, and permission policies. By
 *             creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM
 *             user gains full administrative visibility into the entire Amazon WorkDocs site (or as
 *             set in the IAM policy). This includes, but is not limited to, the ability to modify file
 *             permissions and upload any file to any user. This allows developers to perform the three
 *             use cases above, as well as give users the ability to grant access on a selective basis
 *             using the IAM model.</p>
 *         <note>
 *             <p>The pricing for Amazon WorkDocs APIs varies depending on the API call type for these actions:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>READ  (Get*)</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>WRITE (Activate*, Add*, Create*, Deactivate*, Initiate*, Update*)</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>LIST (Describe*)</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>DELETE*, CANCEL</code>
 *                   </p>
 *                </li>
 *             </ul>
 *             <p>For information about Amazon WorkDocs API pricing, see <a href="https://aws.amazon.com/workdocs/pricing/">Amazon WorkDocs Pricing</a>.</p>
 *         </note>
 */
export class WorkDocs extends WorkDocsClient {
  /**
   * <p>Aborts the upload of the specified document version that was previously initiated
   *             by <a>InitiateDocumentVersionUpload</a>. The client should make this call
   *             only when it no longer intends to upload the document version, or fails to do
   *             so.</p>
   */
  public abortDocumentVersionUpload(
    args: AbortDocumentVersionUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortDocumentVersionUploadCommandOutput>;
  public abortDocumentVersionUpload(
    args: AbortDocumentVersionUploadCommandInput,
    cb: (err: any, data?: AbortDocumentVersionUploadCommandOutput) => void
  ): void;
  public abortDocumentVersionUpload(
    args: AbortDocumentVersionUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortDocumentVersionUploadCommandOutput) => void
  ): void;
  public abortDocumentVersionUpload(
    args: AbortDocumentVersionUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AbortDocumentVersionUploadCommandOutput) => void),
    cb?: (err: any, data?: AbortDocumentVersionUploadCommandOutput) => void
  ): Promise<AbortDocumentVersionUploadCommandOutput> | void {
    const command = new AbortDocumentVersionUploadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Activates the specified user. Only active users can access Amazon
   *             WorkDocs.</p>
   */
  public activateUser(
    args: ActivateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateUserCommandOutput>;
  public activateUser(args: ActivateUserCommandInput, cb: (err: any, data?: ActivateUserCommandOutput) => void): void;
  public activateUser(
    args: ActivateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateUserCommandOutput) => void
  ): void;
  public activateUser(
    args: ActivateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ActivateUserCommandOutput) => void),
    cb?: (err: any, data?: ActivateUserCommandOutput) => void
  ): Promise<ActivateUserCommandOutput> | void {
    const command = new ActivateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a set of permissions for the specified folder or document. The resource
   *             permissions are overwritten if the principals already have different
   *             permissions.</p>
   */
  public addResourcePermissions(
    args: AddResourcePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddResourcePermissionsCommandOutput>;
  public addResourcePermissions(
    args: AddResourcePermissionsCommandInput,
    cb: (err: any, data?: AddResourcePermissionsCommandOutput) => void
  ): void;
  public addResourcePermissions(
    args: AddResourcePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddResourcePermissionsCommandOutput) => void
  ): void;
  public addResourcePermissions(
    args: AddResourcePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddResourcePermissionsCommandOutput) => void),
    cb?: (err: any, data?: AddResourcePermissionsCommandOutput) => void
  ): Promise<AddResourcePermissionsCommandOutput> | void {
    const command = new AddResourcePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a new comment to the specified document version.</p>
   */
  public createComment(
    args: CreateCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCommentCommandOutput>;
  public createComment(
    args: CreateCommentCommandInput,
    cb: (err: any, data?: CreateCommentCommandOutput) => void
  ): void;
  public createComment(
    args: CreateCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCommentCommandOutput) => void
  ): void;
  public createComment(
    args: CreateCommentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCommentCommandOutput) => void),
    cb?: (err: any, data?: CreateCommentCommandOutput) => void
  ): Promise<CreateCommentCommandOutput> | void {
    const command = new CreateCommentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds one or more custom properties to the specified resource (a folder, document,
   *             or version).</p>
   */
  public createCustomMetadata(
    args: CreateCustomMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomMetadataCommandOutput>;
  public createCustomMetadata(
    args: CreateCustomMetadataCommandInput,
    cb: (err: any, data?: CreateCustomMetadataCommandOutput) => void
  ): void;
  public createCustomMetadata(
    args: CreateCustomMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomMetadataCommandOutput) => void
  ): void;
  public createCustomMetadata(
    args: CreateCustomMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomMetadataCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomMetadataCommandOutput) => void
  ): Promise<CreateCustomMetadataCommandOutput> | void {
    const command = new CreateCustomMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a folder with the specified name and parent folder.</p>
   */
  public createFolder(
    args: CreateFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFolderCommandOutput>;
  public createFolder(args: CreateFolderCommandInput, cb: (err: any, data?: CreateFolderCommandOutput) => void): void;
  public createFolder(
    args: CreateFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFolderCommandOutput) => void
  ): void;
  public createFolder(
    args: CreateFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFolderCommandOutput) => void),
    cb?: (err: any, data?: CreateFolderCommandOutput) => void
  ): Promise<CreateFolderCommandOutput> | void {
    const command = new CreateFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds the specified list of labels to the given resource (a document or
   *             folder)</p>
   */
  public createLabels(
    args: CreateLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLabelsCommandOutput>;
  public createLabels(args: CreateLabelsCommandInput, cb: (err: any, data?: CreateLabelsCommandOutput) => void): void;
  public createLabels(
    args: CreateLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLabelsCommandOutput) => void
  ): void;
  public createLabels(
    args: CreateLabelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLabelsCommandOutput) => void),
    cb?: (err: any, data?: CreateLabelsCommandOutput) => void
  ): Promise<CreateLabelsCommandOutput> | void {
    const command = new CreateLabelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a
   *             confirmation message, and must confirm the subscription.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/manage-notifications.html">Setting up notifications for an IAM user or role</a> in the <i>Amazon WorkDocs Developer
   *             Guide</i>.</p>
   */
  public createNotificationSubscription(
    args: CreateNotificationSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotificationSubscriptionCommandOutput>;
  public createNotificationSubscription(
    args: CreateNotificationSubscriptionCommandInput,
    cb: (err: any, data?: CreateNotificationSubscriptionCommandOutput) => void
  ): void;
  public createNotificationSubscription(
    args: CreateNotificationSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotificationSubscriptionCommandOutput) => void
  ): void;
  public createNotificationSubscription(
    args: CreateNotificationSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNotificationSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateNotificationSubscriptionCommandOutput) => void
  ): Promise<CreateNotificationSubscriptionCommandOutput> | void {
    const command = new CreateNotificationSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a user in a Simple AD or Microsoft AD directory. The status of a newly
   *             created user is "ACTIVE". New users can access Amazon WorkDocs.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deactivates the specified user, which revokes the user's access to Amazon
   *             WorkDocs.</p>
   */
  public deactivateUser(
    args: DeactivateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateUserCommandOutput>;
  public deactivateUser(
    args: DeactivateUserCommandInput,
    cb: (err: any, data?: DeactivateUserCommandOutput) => void
  ): void;
  public deactivateUser(
    args: DeactivateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateUserCommandOutput) => void
  ): void;
  public deactivateUser(
    args: DeactivateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeactivateUserCommandOutput) => void),
    cb?: (err: any, data?: DeactivateUserCommandOutput) => void
  ): Promise<DeactivateUserCommandOutput> | void {
    const command = new DeactivateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified comment from the document version.</p>
   */
  public deleteComment(
    args: DeleteCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCommentCommandOutput>;
  public deleteComment(
    args: DeleteCommentCommandInput,
    cb: (err: any, data?: DeleteCommentCommandOutput) => void
  ): void;
  public deleteComment(
    args: DeleteCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCommentCommandOutput) => void
  ): void;
  public deleteComment(
    args: DeleteCommentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCommentCommandOutput) => void),
    cb?: (err: any, data?: DeleteCommentCommandOutput) => void
  ): Promise<DeleteCommentCommandOutput> | void {
    const command = new DeleteCommentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes custom metadata from the specified resource.</p>
   */
  public deleteCustomMetadata(
    args: DeleteCustomMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomMetadataCommandOutput>;
  public deleteCustomMetadata(
    args: DeleteCustomMetadataCommandInput,
    cb: (err: any, data?: DeleteCustomMetadataCommandOutput) => void
  ): void;
  public deleteCustomMetadata(
    args: DeleteCustomMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomMetadataCommandOutput) => void
  ): void;
  public deleteCustomMetadata(
    args: DeleteCustomMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomMetadataCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomMetadataCommandOutput) => void
  ): Promise<DeleteCustomMetadataCommandOutput> | void {
    const command = new DeleteCustomMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Permanently deletes the specified document and its associated metadata.</p>
   */
  public deleteDocument(
    args: DeleteDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentCommandOutput>;
  public deleteDocument(
    args: DeleteDocumentCommandInput,
    cb: (err: any, data?: DeleteDocumentCommandOutput) => void
  ): void;
  public deleteDocument(
    args: DeleteDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentCommandOutput) => void
  ): void;
  public deleteDocument(
    args: DeleteDocumentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDocumentCommandOutput) => void),
    cb?: (err: any, data?: DeleteDocumentCommandOutput) => void
  ): Promise<DeleteDocumentCommandOutput> | void {
    const command = new DeleteDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a version of an Amazon WorkDocs document. Use the <code>DeletePriorVersions</code> parameter to delete prior versions.</p>
   */
  public deleteDocumentVersion(
    args: DeleteDocumentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentVersionCommandOutput>;
  public deleteDocumentVersion(
    args: DeleteDocumentVersionCommandInput,
    cb: (err: any, data?: DeleteDocumentVersionCommandOutput) => void
  ): void;
  public deleteDocumentVersion(
    args: DeleteDocumentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentVersionCommandOutput) => void
  ): void;
  public deleteDocumentVersion(
    args: DeleteDocumentVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDocumentVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteDocumentVersionCommandOutput) => void
  ): Promise<DeleteDocumentVersionCommandOutput> | void {
    const command = new DeleteDocumentVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Permanently deletes the specified folder and its contents.</p>
   */
  public deleteFolder(
    args: DeleteFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFolderCommandOutput>;
  public deleteFolder(args: DeleteFolderCommandInput, cb: (err: any, data?: DeleteFolderCommandOutput) => void): void;
  public deleteFolder(
    args: DeleteFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFolderCommandOutput) => void
  ): void;
  public deleteFolder(
    args: DeleteFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFolderCommandOutput) => void),
    cb?: (err: any, data?: DeleteFolderCommandOutput) => void
  ): Promise<DeleteFolderCommandOutput> | void {
    const command = new DeleteFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the contents of the specified folder.</p>
   */
  public deleteFolderContents(
    args: DeleteFolderContentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFolderContentsCommandOutput>;
  public deleteFolderContents(
    args: DeleteFolderContentsCommandInput,
    cb: (err: any, data?: DeleteFolderContentsCommandOutput) => void
  ): void;
  public deleteFolderContents(
    args: DeleteFolderContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFolderContentsCommandOutput) => void
  ): void;
  public deleteFolderContents(
    args: DeleteFolderContentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFolderContentsCommandOutput) => void),
    cb?: (err: any, data?: DeleteFolderContentsCommandOutput) => void
  ): Promise<DeleteFolderContentsCommandOutput> | void {
    const command = new DeleteFolderContentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified list of labels from a resource.</p>
   */
  public deleteLabels(
    args: DeleteLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLabelsCommandOutput>;
  public deleteLabels(args: DeleteLabelsCommandInput, cb: (err: any, data?: DeleteLabelsCommandOutput) => void): void;
  public deleteLabels(
    args: DeleteLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLabelsCommandOutput) => void
  ): void;
  public deleteLabels(
    args: DeleteLabelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLabelsCommandOutput) => void),
    cb?: (err: any, data?: DeleteLabelsCommandOutput) => void
  ): Promise<DeleteLabelsCommandOutput> | void {
    const command = new DeleteLabelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified subscription from the specified organization.</p>
   */
  public deleteNotificationSubscription(
    args: DeleteNotificationSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationSubscriptionCommandOutput>;
  public deleteNotificationSubscription(
    args: DeleteNotificationSubscriptionCommandInput,
    cb: (err: any, data?: DeleteNotificationSubscriptionCommandOutput) => void
  ): void;
  public deleteNotificationSubscription(
    args: DeleteNotificationSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationSubscriptionCommandOutput) => void
  ): void;
  public deleteNotificationSubscription(
    args: DeleteNotificationSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNotificationSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteNotificationSubscriptionCommandOutput) => void
  ): Promise<DeleteNotificationSubscriptionCommandOutput> | void {
    const command = new DeleteNotificationSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified user from a Simple AD or Microsoft AD directory.</p>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the user activities in a specified time period.</p>
   */
  public describeActivities(
    args: DescribeActivitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActivitiesCommandOutput>;
  public describeActivities(
    args: DescribeActivitiesCommandInput,
    cb: (err: any, data?: DescribeActivitiesCommandOutput) => void
  ): void;
  public describeActivities(
    args: DescribeActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActivitiesCommandOutput) => void
  ): void;
  public describeActivities(
    args: DescribeActivitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeActivitiesCommandOutput) => void),
    cb?: (err: any, data?: DescribeActivitiesCommandOutput) => void
  ): Promise<DescribeActivitiesCommandOutput> | void {
    const command = new DescribeActivitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all the comments for the specified document version.</p>
   */
  public describeComments(
    args: DescribeCommentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCommentsCommandOutput>;
  public describeComments(
    args: DescribeCommentsCommandInput,
    cb: (err: any, data?: DescribeCommentsCommandOutput) => void
  ): void;
  public describeComments(
    args: DescribeCommentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCommentsCommandOutput) => void
  ): void;
  public describeComments(
    args: DescribeCommentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCommentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCommentsCommandOutput) => void
  ): Promise<DescribeCommentsCommandOutput> | void {
    const command = new DescribeCommentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the document versions for the specified document.</p>
   *         <p>By default, only active versions are returned.</p>
   */
  public describeDocumentVersions(
    args: DescribeDocumentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDocumentVersionsCommandOutput>;
  public describeDocumentVersions(
    args: DescribeDocumentVersionsCommandInput,
    cb: (err: any, data?: DescribeDocumentVersionsCommandOutput) => void
  ): void;
  public describeDocumentVersions(
    args: DescribeDocumentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDocumentVersionsCommandOutput) => void
  ): void;
  public describeDocumentVersions(
    args: DescribeDocumentVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDocumentVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDocumentVersionsCommandOutput) => void
  ): Promise<DescribeDocumentVersionsCommandOutput> | void {
    const command = new DescribeDocumentVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the contents of the specified folder, including its documents and
   *             subfolders.</p>
   *         <p>By default, Amazon WorkDocs returns the first 100 active document and folder
   *             metadata items. If there are more results, the response includes a marker that you can
   *             use to request the next set of results. You can also request initialized
   *             documents.</p>
   */
  public describeFolderContents(
    args: DescribeFolderContentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFolderContentsCommandOutput>;
  public describeFolderContents(
    args: DescribeFolderContentsCommandInput,
    cb: (err: any, data?: DescribeFolderContentsCommandOutput) => void
  ): void;
  public describeFolderContents(
    args: DescribeFolderContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFolderContentsCommandOutput) => void
  ): void;
  public describeFolderContents(
    args: DescribeFolderContentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFolderContentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFolderContentsCommandOutput) => void
  ): Promise<DescribeFolderContentsCommandOutput> | void {
    const command = new DescribeFolderContentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the groups specified by the query. Groups are defined by the underlying
   *             Active Directory.</p>
   */
  public describeGroups(
    args: DescribeGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGroupsCommandOutput>;
  public describeGroups(
    args: DescribeGroupsCommandInput,
    cb: (err: any, data?: DescribeGroupsCommandOutput) => void
  ): void;
  public describeGroups(
    args: DescribeGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupsCommandOutput) => void
  ): void;
  public describeGroups(
    args: DescribeGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeGroupsCommandOutput) => void
  ): Promise<DescribeGroupsCommandOutput> | void {
    const command = new DescribeGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the specified notification subscriptions.</p>
   */
  public describeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationSubscriptionsCommandOutput>;
  public describeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeNotificationSubscriptionsCommandOutput) => void
  ): void;
  public describeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationSubscriptionsCommandOutput) => void
  ): void;
  public describeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNotificationSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeNotificationSubscriptionsCommandOutput) => void
  ): Promise<DescribeNotificationSubscriptionsCommandOutput> | void {
    const command = new DescribeNotificationSubscriptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the permissions of a specified resource.</p>
   */
  public describeResourcePermissions(
    args: DescribeResourcePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePermissionsCommandOutput>;
  public describeResourcePermissions(
    args: DescribeResourcePermissionsCommandInput,
    cb: (err: any, data?: DescribeResourcePermissionsCommandOutput) => void
  ): void;
  public describeResourcePermissions(
    args: DescribeResourcePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePermissionsCommandOutput) => void
  ): void;
  public describeResourcePermissions(
    args: DescribeResourcePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResourcePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeResourcePermissionsCommandOutput) => void
  ): Promise<DescribeResourcePermissionsCommandOutput> | void {
    const command = new DescribeResourcePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the current user's special folders; the <code>RootFolder</code> and the
   *                 <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and
   *             folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid
   *             action for SigV4 (administrative API) clients.</p>
   *         <p>This action requires an authentication token. To get an authentication token,
   *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
   *                 Control for User Applications</a> in the
   *             <i>Amazon
   *             WorkDocs Developer Guide</i>.</p>
   */
  public describeRootFolders(
    args: DescribeRootFoldersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRootFoldersCommandOutput>;
  public describeRootFolders(
    args: DescribeRootFoldersCommandInput,
    cb: (err: any, data?: DescribeRootFoldersCommandOutput) => void
  ): void;
  public describeRootFolders(
    args: DescribeRootFoldersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRootFoldersCommandOutput) => void
  ): void;
  public describeRootFolders(
    args: DescribeRootFoldersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRootFoldersCommandOutput) => void),
    cb?: (err: any, data?: DescribeRootFoldersCommandOutput) => void
  ): Promise<DescribeRootFoldersCommandOutput> | void {
    const command = new DescribeRootFoldersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified users. You can describe all users or filter the results
   *             (for example, by status or organization).</p>
   *         <p>By default, Amazon WorkDocs returns the first 24 active or pending users. If there
   *             are more results, the response includes a marker that you can use to request the next
   *             set of results.</p>
   */
  public describeUsers(
    args: DescribeUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUsersCommandOutput>;
  public describeUsers(
    args: DescribeUsersCommandInput,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;
  public describeUsers(
    args: DescribeUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;
  public describeUsers(
    args: DescribeUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUsersCommandOutput) => void),
    cb?: (err: any, data?: DescribeUsersCommandOutput) => void
  ): Promise<DescribeUsersCommandOutput> | void {
    const command = new DescribeUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves details of the current user for whom the authentication token was
   *             generated. This is not a valid action for SigV4 (administrative API) clients.</p>
   *         <p>This action requires an authentication token. To get an authentication token,
   *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
   *                 Control for User Applications</a> in the
   *             <i>Amazon
   *                 WorkDocs Developer Guide</i>.</p>
   */
  public getCurrentUser(
    args: GetCurrentUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCurrentUserCommandOutput>;
  public getCurrentUser(
    args: GetCurrentUserCommandInput,
    cb: (err: any, data?: GetCurrentUserCommandOutput) => void
  ): void;
  public getCurrentUser(
    args: GetCurrentUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCurrentUserCommandOutput) => void
  ): void;
  public getCurrentUser(
    args: GetCurrentUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCurrentUserCommandOutput) => void),
    cb?: (err: any, data?: GetCurrentUserCommandOutput) => void
  ): Promise<GetCurrentUserCommandOutput> | void {
    const command = new GetCurrentUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves details of a document.</p>
   */
  public getDocument(args: GetDocumentCommandInput, options?: __HttpHandlerOptions): Promise<GetDocumentCommandOutput>;
  public getDocument(args: GetDocumentCommandInput, cb: (err: any, data?: GetDocumentCommandOutput) => void): void;
  public getDocument(
    args: GetDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentCommandOutput) => void
  ): void;
  public getDocument(
    args: GetDocumentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDocumentCommandOutput) => void),
    cb?: (err: any, data?: GetDocumentCommandOutput) => void
  ): Promise<GetDocumentCommandOutput> | void {
    const command = new GetDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the path information (the hierarchy from the root folder) for the
   *             requested document.</p>
   *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
   *             requested document and only includes the IDs of the parent folders in the path. You can
   *             limit the maximum number of levels. You can also request the names of the parent
   *             folders.</p>
   */
  public getDocumentPath(
    args: GetDocumentPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentPathCommandOutput>;
  public getDocumentPath(
    args: GetDocumentPathCommandInput,
    cb: (err: any, data?: GetDocumentPathCommandOutput) => void
  ): void;
  public getDocumentPath(
    args: GetDocumentPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentPathCommandOutput) => void
  ): void;
  public getDocumentPath(
    args: GetDocumentPathCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDocumentPathCommandOutput) => void),
    cb?: (err: any, data?: GetDocumentPathCommandOutput) => void
  ): Promise<GetDocumentPathCommandOutput> | void {
    const command = new GetDocumentPathCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves version metadata for the specified document.</p>
   */
  public getDocumentVersion(
    args: GetDocumentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentVersionCommandOutput>;
  public getDocumentVersion(
    args: GetDocumentVersionCommandInput,
    cb: (err: any, data?: GetDocumentVersionCommandOutput) => void
  ): void;
  public getDocumentVersion(
    args: GetDocumentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentVersionCommandOutput) => void
  ): void;
  public getDocumentVersion(
    args: GetDocumentVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDocumentVersionCommandOutput) => void),
    cb?: (err: any, data?: GetDocumentVersionCommandOutput) => void
  ): Promise<GetDocumentVersionCommandOutput> | void {
    const command = new GetDocumentVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the metadata of the specified folder.</p>
   */
  public getFolder(args: GetFolderCommandInput, options?: __HttpHandlerOptions): Promise<GetFolderCommandOutput>;
  public getFolder(args: GetFolderCommandInput, cb: (err: any, data?: GetFolderCommandOutput) => void): void;
  public getFolder(
    args: GetFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFolderCommandOutput) => void
  ): void;
  public getFolder(
    args: GetFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFolderCommandOutput) => void),
    cb?: (err: any, data?: GetFolderCommandOutput) => void
  ): Promise<GetFolderCommandOutput> | void {
    const command = new GetFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the path information (the hierarchy from the root folder) for the
   *             specified folder.</p>
   *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
   *             requested folder and only includes the IDs of the parent folders in the path. You can
   *             limit the maximum number of levels. You can also request the parent folder
   *             names.</p>
   */
  public getFolderPath(
    args: GetFolderPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFolderPathCommandOutput>;
  public getFolderPath(
    args: GetFolderPathCommandInput,
    cb: (err: any, data?: GetFolderPathCommandOutput) => void
  ): void;
  public getFolderPath(
    args: GetFolderPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFolderPathCommandOutput) => void
  ): void;
  public getFolderPath(
    args: GetFolderPathCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFolderPathCommandOutput) => void),
    cb?: (err: any, data?: GetFolderPathCommandOutput) => void
  ): Promise<GetFolderPathCommandOutput> | void {
    const command = new GetFolderPathCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a collection of resources, including folders and documents. The only
   *             <code>CollectionType</code> supported is <code>SHARED_WITH_ME</code>.</p>
   */
  public getResources(
    args: GetResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcesCommandOutput>;
  public getResources(args: GetResourcesCommandInput, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
  public getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;
  public getResources(
    args: GetResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcesCommandOutput) => void),
    cb?: (err: any, data?: GetResourcesCommandOutput) => void
  ): Promise<GetResourcesCommandOutput> | void {
    const command = new GetResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new document object and version object.</p>
   *         <p>The client specifies the parent folder ID and name of the document to upload. The
   *             ID is optionally specified when creating a new version of an existing document. This is
   *             the first step to upload a document. Next, upload the document to the URL returned from
   *             the call, and then call <a>UpdateDocumentVersion</a>.</p>
   *         <p>To cancel the document upload, call <a>AbortDocumentVersionUpload</a>.</p>
   */
  public initiateDocumentVersionUpload(
    args: InitiateDocumentVersionUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateDocumentVersionUploadCommandOutput>;
  public initiateDocumentVersionUpload(
    args: InitiateDocumentVersionUploadCommandInput,
    cb: (err: any, data?: InitiateDocumentVersionUploadCommandOutput) => void
  ): void;
  public initiateDocumentVersionUpload(
    args: InitiateDocumentVersionUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateDocumentVersionUploadCommandOutput) => void
  ): void;
  public initiateDocumentVersionUpload(
    args: InitiateDocumentVersionUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InitiateDocumentVersionUploadCommandOutput) => void),
    cb?: (err: any, data?: InitiateDocumentVersionUploadCommandOutput) => void
  ): Promise<InitiateDocumentVersionUploadCommandOutput> | void {
    const command = new InitiateDocumentVersionUploadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes all the permissions from the specified resource.</p>
   */
  public removeAllResourcePermissions(
    args: RemoveAllResourcePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAllResourcePermissionsCommandOutput>;
  public removeAllResourcePermissions(
    args: RemoveAllResourcePermissionsCommandInput,
    cb: (err: any, data?: RemoveAllResourcePermissionsCommandOutput) => void
  ): void;
  public removeAllResourcePermissions(
    args: RemoveAllResourcePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAllResourcePermissionsCommandOutput) => void
  ): void;
  public removeAllResourcePermissions(
    args: RemoveAllResourcePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveAllResourcePermissionsCommandOutput) => void),
    cb?: (err: any, data?: RemoveAllResourcePermissionsCommandOutput) => void
  ): Promise<RemoveAllResourcePermissionsCommandOutput> | void {
    const command = new RemoveAllResourcePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the permission for the specified principal from the specified
   *             resource.</p>
   */
  public removeResourcePermission(
    args: RemoveResourcePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveResourcePermissionCommandOutput>;
  public removeResourcePermission(
    args: RemoveResourcePermissionCommandInput,
    cb: (err: any, data?: RemoveResourcePermissionCommandOutput) => void
  ): void;
  public removeResourcePermission(
    args: RemoveResourcePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveResourcePermissionCommandOutput) => void
  ): void;
  public removeResourcePermission(
    args: RemoveResourcePermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveResourcePermissionCommandOutput) => void),
    cb?: (err: any, data?: RemoveResourcePermissionCommandOutput) => void
  ): Promise<RemoveResourcePermissionCommandOutput> | void {
    const command = new RemoveResourcePermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Recovers a deleted version of an Amazon WorkDocs document.</p>
   */
  public restoreDocumentVersions(
    args: RestoreDocumentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDocumentVersionsCommandOutput>;
  public restoreDocumentVersions(
    args: RestoreDocumentVersionsCommandInput,
    cb: (err: any, data?: RestoreDocumentVersionsCommandOutput) => void
  ): void;
  public restoreDocumentVersions(
    args: RestoreDocumentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDocumentVersionsCommandOutput) => void
  ): void;
  public restoreDocumentVersions(
    args: RestoreDocumentVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreDocumentVersionsCommandOutput) => void),
    cb?: (err: any, data?: RestoreDocumentVersionsCommandOutput) => void
  ): Promise<RestoreDocumentVersionsCommandOutput> | void {
    const command = new RestoreDocumentVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified attributes of a document. The user must have access to both
   *             the document and its parent folder, if applicable.</p>
   */
  public updateDocument(
    args: UpdateDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentCommandOutput>;
  public updateDocument(
    args: UpdateDocumentCommandInput,
    cb: (err: any, data?: UpdateDocumentCommandOutput) => void
  ): void;
  public updateDocument(
    args: UpdateDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentCommandOutput) => void
  ): void;
  public updateDocument(
    args: UpdateDocumentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDocumentCommandOutput) => void),
    cb?: (err: any, data?: UpdateDocumentCommandOutput) => void
  ): Promise<UpdateDocumentCommandOutput> | void {
    const command = new UpdateDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the status of the document version to ACTIVE. </p>
   *         <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step
   *             in a document upload, after the client uploads the document to an S3-presigned URL
   *             returned by <a>InitiateDocumentVersionUpload</a>. </p>
   */
  public updateDocumentVersion(
    args: UpdateDocumentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentVersionCommandOutput>;
  public updateDocumentVersion(
    args: UpdateDocumentVersionCommandInput,
    cb: (err: any, data?: UpdateDocumentVersionCommandOutput) => void
  ): void;
  public updateDocumentVersion(
    args: UpdateDocumentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentVersionCommandOutput) => void
  ): void;
  public updateDocumentVersion(
    args: UpdateDocumentVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDocumentVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDocumentVersionCommandOutput) => void
  ): Promise<UpdateDocumentVersionCommandOutput> | void {
    const command = new UpdateDocumentVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified attributes of the specified folder. The user must have access
   *             to both the folder and its parent folder, if applicable.</p>
   */
  public updateFolder(
    args: UpdateFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFolderCommandOutput>;
  public updateFolder(args: UpdateFolderCommandInput, cb: (err: any, data?: UpdateFolderCommandOutput) => void): void;
  public updateFolder(
    args: UpdateFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFolderCommandOutput) => void
  ): void;
  public updateFolder(
    args: UpdateFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFolderCommandOutput) => void),
    cb?: (err: any, data?: UpdateFolderCommandOutput) => void
  ): Promise<UpdateFolderCommandOutput> | void {
    const command = new UpdateFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified attributes of the specified user, and grants or revokes
   *             administrative privileges to the Amazon WorkDocs site.</p>
   */
  public updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  public updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
