// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  SearchResourcesCommand,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
} from "./commands/SearchResourcesCommand";
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
import { WorkDocsClient, WorkDocsClientConfig } from "./WorkDocsClient";

const commands = {
  AbortDocumentVersionUploadCommand,
  ActivateUserCommand,
  AddResourcePermissionsCommand,
  CreateCommentCommand,
  CreateCustomMetadataCommand,
  CreateFolderCommand,
  CreateLabelsCommand,
  CreateNotificationSubscriptionCommand,
  CreateUserCommand,
  DeactivateUserCommand,
  DeleteCommentCommand,
  DeleteCustomMetadataCommand,
  DeleteDocumentCommand,
  DeleteDocumentVersionCommand,
  DeleteFolderCommand,
  DeleteFolderContentsCommand,
  DeleteLabelsCommand,
  DeleteNotificationSubscriptionCommand,
  DeleteUserCommand,
  DescribeActivitiesCommand,
  DescribeCommentsCommand,
  DescribeDocumentVersionsCommand,
  DescribeFolderContentsCommand,
  DescribeGroupsCommand,
  DescribeNotificationSubscriptionsCommand,
  DescribeResourcePermissionsCommand,
  DescribeRootFoldersCommand,
  DescribeUsersCommand,
  GetCurrentUserCommand,
  GetDocumentCommand,
  GetDocumentPathCommand,
  GetDocumentVersionCommand,
  GetFolderCommand,
  GetFolderPathCommand,
  GetResourcesCommand,
  InitiateDocumentVersionUploadCommand,
  RemoveAllResourcePermissionsCommand,
  RemoveResourcePermissionCommand,
  RestoreDocumentVersionsCommand,
  SearchResourcesCommand,
  UpdateDocumentCommand,
  UpdateDocumentVersionCommand,
  UpdateFolderCommand,
  UpdateUserCommand,
};

export interface WorkDocs {
  /**
   * @see {@link AbortDocumentVersionUploadCommand}
   */
  abortDocumentVersionUpload(
    args: AbortDocumentVersionUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortDocumentVersionUploadCommandOutput>;
  abortDocumentVersionUpload(
    args: AbortDocumentVersionUploadCommandInput,
    cb: (err: any, data?: AbortDocumentVersionUploadCommandOutput) => void
  ): void;
  abortDocumentVersionUpload(
    args: AbortDocumentVersionUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortDocumentVersionUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link ActivateUserCommand}
   */
  activateUser(args: ActivateUserCommandInput, options?: __HttpHandlerOptions): Promise<ActivateUserCommandOutput>;
  activateUser(args: ActivateUserCommandInput, cb: (err: any, data?: ActivateUserCommandOutput) => void): void;
  activateUser(
    args: ActivateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AddResourcePermissionsCommand}
   */
  addResourcePermissions(
    args: AddResourcePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddResourcePermissionsCommandOutput>;
  addResourcePermissions(
    args: AddResourcePermissionsCommandInput,
    cb: (err: any, data?: AddResourcePermissionsCommandOutput) => void
  ): void;
  addResourcePermissions(
    args: AddResourcePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddResourcePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCommentCommand}
   */
  createComment(args: CreateCommentCommandInput, options?: __HttpHandlerOptions): Promise<CreateCommentCommandOutput>;
  createComment(args: CreateCommentCommandInput, cb: (err: any, data?: CreateCommentCommandOutput) => void): void;
  createComment(
    args: CreateCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomMetadataCommand}
   */
  createCustomMetadata(
    args: CreateCustomMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomMetadataCommandOutput>;
  createCustomMetadata(
    args: CreateCustomMetadataCommandInput,
    cb: (err: any, data?: CreateCustomMetadataCommandOutput) => void
  ): void;
  createCustomMetadata(
    args: CreateCustomMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFolderCommand}
   */
  createFolder(args: CreateFolderCommandInput, options?: __HttpHandlerOptions): Promise<CreateFolderCommandOutput>;
  createFolder(args: CreateFolderCommandInput, cb: (err: any, data?: CreateFolderCommandOutput) => void): void;
  createFolder(
    args: CreateFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLabelsCommand}
   */
  createLabels(args: CreateLabelsCommandInput, options?: __HttpHandlerOptions): Promise<CreateLabelsCommandOutput>;
  createLabels(args: CreateLabelsCommandInput, cb: (err: any, data?: CreateLabelsCommandOutput) => void): void;
  createLabels(
    args: CreateLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNotificationSubscriptionCommand}
   */
  createNotificationSubscription(
    args: CreateNotificationSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotificationSubscriptionCommandOutput>;
  createNotificationSubscription(
    args: CreateNotificationSubscriptionCommandInput,
    cb: (err: any, data?: CreateNotificationSubscriptionCommandOutput) => void
  ): void;
  createNotificationSubscription(
    args: CreateNotificationSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotificationSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateUserCommand}
   */
  deactivateUser(
    args: DeactivateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateUserCommandOutput>;
  deactivateUser(args: DeactivateUserCommandInput, cb: (err: any, data?: DeactivateUserCommandOutput) => void): void;
  deactivateUser(
    args: DeactivateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCommentCommand}
   */
  deleteComment(args: DeleteCommentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCommentCommandOutput>;
  deleteComment(args: DeleteCommentCommandInput, cb: (err: any, data?: DeleteCommentCommandOutput) => void): void;
  deleteComment(
    args: DeleteCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomMetadataCommand}
   */
  deleteCustomMetadata(
    args: DeleteCustomMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomMetadataCommandOutput>;
  deleteCustomMetadata(
    args: DeleteCustomMetadataCommandInput,
    cb: (err: any, data?: DeleteCustomMetadataCommandOutput) => void
  ): void;
  deleteCustomMetadata(
    args: DeleteCustomMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDocumentCommand}
   */
  deleteDocument(
    args: DeleteDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentCommandOutput>;
  deleteDocument(args: DeleteDocumentCommandInput, cb: (err: any, data?: DeleteDocumentCommandOutput) => void): void;
  deleteDocument(
    args: DeleteDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDocumentVersionCommand}
   */
  deleteDocumentVersion(
    args: DeleteDocumentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentVersionCommandOutput>;
  deleteDocumentVersion(
    args: DeleteDocumentVersionCommandInput,
    cb: (err: any, data?: DeleteDocumentVersionCommandOutput) => void
  ): void;
  deleteDocumentVersion(
    args: DeleteDocumentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFolderCommand}
   */
  deleteFolder(args: DeleteFolderCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFolderCommandOutput>;
  deleteFolder(args: DeleteFolderCommandInput, cb: (err: any, data?: DeleteFolderCommandOutput) => void): void;
  deleteFolder(
    args: DeleteFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFolderContentsCommand}
   */
  deleteFolderContents(
    args: DeleteFolderContentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFolderContentsCommandOutput>;
  deleteFolderContents(
    args: DeleteFolderContentsCommandInput,
    cb: (err: any, data?: DeleteFolderContentsCommandOutput) => void
  ): void;
  deleteFolderContents(
    args: DeleteFolderContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFolderContentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLabelsCommand}
   */
  deleteLabels(args: DeleteLabelsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLabelsCommandOutput>;
  deleteLabels(args: DeleteLabelsCommandInput, cb: (err: any, data?: DeleteLabelsCommandOutput) => void): void;
  deleteLabels(
    args: DeleteLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotificationSubscriptionCommand}
   */
  deleteNotificationSubscription(
    args: DeleteNotificationSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationSubscriptionCommandOutput>;
  deleteNotificationSubscription(
    args: DeleteNotificationSubscriptionCommandInput,
    cb: (err: any, data?: DeleteNotificationSubscriptionCommandOutput) => void
  ): void;
  deleteNotificationSubscription(
    args: DeleteNotificationSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActivitiesCommand}
   */
  describeActivities(
    args: DescribeActivitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActivitiesCommandOutput>;
  describeActivities(
    args: DescribeActivitiesCommandInput,
    cb: (err: any, data?: DescribeActivitiesCommandOutput) => void
  ): void;
  describeActivities(
    args: DescribeActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCommentsCommand}
   */
  describeComments(
    args: DescribeCommentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCommentsCommandOutput>;
  describeComments(
    args: DescribeCommentsCommandInput,
    cb: (err: any, data?: DescribeCommentsCommandOutput) => void
  ): void;
  describeComments(
    args: DescribeCommentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCommentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDocumentVersionsCommand}
   */
  describeDocumentVersions(
    args: DescribeDocumentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDocumentVersionsCommandOutput>;
  describeDocumentVersions(
    args: DescribeDocumentVersionsCommandInput,
    cb: (err: any, data?: DescribeDocumentVersionsCommandOutput) => void
  ): void;
  describeDocumentVersions(
    args: DescribeDocumentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDocumentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFolderContentsCommand}
   */
  describeFolderContents(
    args: DescribeFolderContentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFolderContentsCommandOutput>;
  describeFolderContents(
    args: DescribeFolderContentsCommandInput,
    cb: (err: any, data?: DescribeFolderContentsCommandOutput) => void
  ): void;
  describeFolderContents(
    args: DescribeFolderContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFolderContentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupsCommand}
   */
  describeGroups(
    args: DescribeGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGroupsCommandOutput>;
  describeGroups(args: DescribeGroupsCommandInput, cb: (err: any, data?: DescribeGroupsCommandOutput) => void): void;
  describeGroups(
    args: DescribeGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNotificationSubscriptionsCommand}
   */
  describeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationSubscriptionsCommandOutput>;
  describeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeNotificationSubscriptionsCommandOutput) => void
  ): void;
  describeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePermissionsCommand}
   */
  describeResourcePermissions(
    args: DescribeResourcePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePermissionsCommandOutput>;
  describeResourcePermissions(
    args: DescribeResourcePermissionsCommandInput,
    cb: (err: any, data?: DescribeResourcePermissionsCommandOutput) => void
  ): void;
  describeResourcePermissions(
    args: DescribeResourcePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRootFoldersCommand}
   */
  describeRootFolders(
    args: DescribeRootFoldersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRootFoldersCommandOutput>;
  describeRootFolders(
    args: DescribeRootFoldersCommandInput,
    cb: (err: any, data?: DescribeRootFoldersCommandOutput) => void
  ): void;
  describeRootFolders(
    args: DescribeRootFoldersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRootFoldersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUsersCommand}
   */
  describeUsers(args: DescribeUsersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUsersCommandOutput>;
  describeUsers(args: DescribeUsersCommandInput, cb: (err: any, data?: DescribeUsersCommandOutput) => void): void;
  describeUsers(
    args: DescribeUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCurrentUserCommand}
   */
  getCurrentUser(
    args: GetCurrentUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCurrentUserCommandOutput>;
  getCurrentUser(args: GetCurrentUserCommandInput, cb: (err: any, data?: GetCurrentUserCommandOutput) => void): void;
  getCurrentUser(
    args: GetCurrentUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCurrentUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentCommand}
   */
  getDocument(args: GetDocumentCommandInput, options?: __HttpHandlerOptions): Promise<GetDocumentCommandOutput>;
  getDocument(args: GetDocumentCommandInput, cb: (err: any, data?: GetDocumentCommandOutput) => void): void;
  getDocument(
    args: GetDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentPathCommand}
   */
  getDocumentPath(
    args: GetDocumentPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentPathCommandOutput>;
  getDocumentPath(args: GetDocumentPathCommandInput, cb: (err: any, data?: GetDocumentPathCommandOutput) => void): void;
  getDocumentPath(
    args: GetDocumentPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentPathCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentVersionCommand}
   */
  getDocumentVersion(
    args: GetDocumentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentVersionCommandOutput>;
  getDocumentVersion(
    args: GetDocumentVersionCommandInput,
    cb: (err: any, data?: GetDocumentVersionCommandOutput) => void
  ): void;
  getDocumentVersion(
    args: GetDocumentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFolderCommand}
   */
  getFolder(args: GetFolderCommandInput, options?: __HttpHandlerOptions): Promise<GetFolderCommandOutput>;
  getFolder(args: GetFolderCommandInput, cb: (err: any, data?: GetFolderCommandOutput) => void): void;
  getFolder(
    args: GetFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFolderPathCommand}
   */
  getFolderPath(args: GetFolderPathCommandInput, options?: __HttpHandlerOptions): Promise<GetFolderPathCommandOutput>;
  getFolderPath(args: GetFolderPathCommandInput, cb: (err: any, data?: GetFolderPathCommandOutput) => void): void;
  getFolderPath(
    args: GetFolderPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFolderPathCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcesCommand}
   */
  getResources(args: GetResourcesCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcesCommandOutput>;
  getResources(args: GetResourcesCommandInput, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
  getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateDocumentVersionUploadCommand}
   */
  initiateDocumentVersionUpload(
    args: InitiateDocumentVersionUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateDocumentVersionUploadCommandOutput>;
  initiateDocumentVersionUpload(
    args: InitiateDocumentVersionUploadCommandInput,
    cb: (err: any, data?: InitiateDocumentVersionUploadCommandOutput) => void
  ): void;
  initiateDocumentVersionUpload(
    args: InitiateDocumentVersionUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateDocumentVersionUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveAllResourcePermissionsCommand}
   */
  removeAllResourcePermissions(
    args: RemoveAllResourcePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAllResourcePermissionsCommandOutput>;
  removeAllResourcePermissions(
    args: RemoveAllResourcePermissionsCommandInput,
    cb: (err: any, data?: RemoveAllResourcePermissionsCommandOutput) => void
  ): void;
  removeAllResourcePermissions(
    args: RemoveAllResourcePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAllResourcePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveResourcePermissionCommand}
   */
  removeResourcePermission(
    args: RemoveResourcePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveResourcePermissionCommandOutput>;
  removeResourcePermission(
    args: RemoveResourcePermissionCommandInput,
    cb: (err: any, data?: RemoveResourcePermissionCommandOutput) => void
  ): void;
  removeResourcePermission(
    args: RemoveResourcePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveResourcePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDocumentVersionsCommand}
   */
  restoreDocumentVersions(
    args: RestoreDocumentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDocumentVersionsCommandOutput>;
  restoreDocumentVersions(
    args: RestoreDocumentVersionsCommandInput,
    cb: (err: any, data?: RestoreDocumentVersionsCommandOutput) => void
  ): void;
  restoreDocumentVersions(
    args: RestoreDocumentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDocumentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchResourcesCommand}
   */
  searchResources(
    args: SearchResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchResourcesCommandOutput>;
  searchResources(args: SearchResourcesCommandInput, cb: (err: any, data?: SearchResourcesCommandOutput) => void): void;
  searchResources(
    args: SearchResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDocumentCommand}
   */
  updateDocument(
    args: UpdateDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentCommandOutput>;
  updateDocument(args: UpdateDocumentCommandInput, cb: (err: any, data?: UpdateDocumentCommandOutput) => void): void;
  updateDocument(
    args: UpdateDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDocumentVersionCommand}
   */
  updateDocumentVersion(
    args: UpdateDocumentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentVersionCommandOutput>;
  updateDocumentVersion(
    args: UpdateDocumentVersionCommandInput,
    cb: (err: any, data?: UpdateDocumentVersionCommandOutput) => void
  ): void;
  updateDocumentVersion(
    args: UpdateDocumentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFolderCommand}
   */
  updateFolder(args: UpdateFolderCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFolderCommandOutput>;
  updateFolder(args: UpdateFolderCommandInput, cb: (err: any, data?: UpdateFolderCommandOutput) => void): void;
  updateFolder(
    args: UpdateFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amazon WorkDocs API is designed for the following use cases:</p>
 *          <ul>
 *             <li>
 *                <p>File Migration: File migration applications are supported for users who
 *                     want to migrate their files from an on-premises or off-premises file system or
 *                     service. Users can insert files into a user directory structure, as well as
 *                     allow for basic metadata changes, such as modifications to the permissions of
 *                     files.</p>
 *             </li>
 *             <li>
 *                <p>Security: Support security applications are supported for users who have
 *                     additional security needs, such as antivirus or data loss prevention. The API
 *                     actions, along with CloudTrail, allow these applications to detect when
 *                     changes occur in Amazon WorkDocs. Then, the application can take the necessary
 *                     actions and replace the target file. If the target file violates the policy, the
 *                     application can also choose to email the user.</p>
 *             </li>
 *             <li>
 *                <p>eDiscovery/Analytics: General administrative applications are supported,
 *                     such as eDiscovery and analytics. These applications can choose to mimic or
 *                     record the actions in an Amazon WorkDocs site, along with CloudTrail, to
 *                     replicate data for eDiscovery, backup, or analytical applications.</p>
 *             </li>
 *          </ul>
 *          <p>All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed.
 *             They not only require the use of the Amazon Web Services SDK, but also allow for the exclusive use of
 *             IAM users and roles to help facilitate access, trust, and permission policies. By
 *             creating a role and allowing an IAM user to access the Amazon WorkDocs site, the
 *             IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as
 *             set in the IAM policy). This includes, but is not limited to, the ability to modify file
 *             permissions and upload any file to any user. This allows developers to perform the three
 *             use cases above, as well as give users the ability to grant access on a selective basis
 *             using the IAM model.</p>
 *          <note>
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
 *          </note>
 */
export class WorkDocs extends WorkDocsClient implements WorkDocs {}
createAggregatedClient(commands, WorkDocs);
