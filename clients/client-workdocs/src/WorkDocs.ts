// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AbortDocumentVersionUploadCommandInput,
  type AbortDocumentVersionUploadCommandOutput,
  AbortDocumentVersionUploadCommand,
} from "./commands/AbortDocumentVersionUploadCommand";
import {
  type ActivateUserCommandInput,
  type ActivateUserCommandOutput,
  ActivateUserCommand,
} from "./commands/ActivateUserCommand";
import {
  type AddResourcePermissionsCommandInput,
  type AddResourcePermissionsCommandOutput,
  AddResourcePermissionsCommand,
} from "./commands/AddResourcePermissionsCommand";
import {
  type CreateCommentCommandInput,
  type CreateCommentCommandOutput,
  CreateCommentCommand,
} from "./commands/CreateCommentCommand";
import {
  type CreateCustomMetadataCommandInput,
  type CreateCustomMetadataCommandOutput,
  CreateCustomMetadataCommand,
} from "./commands/CreateCustomMetadataCommand";
import {
  type CreateFolderCommandInput,
  type CreateFolderCommandOutput,
  CreateFolderCommand,
} from "./commands/CreateFolderCommand";
import {
  type CreateLabelsCommandInput,
  type CreateLabelsCommandOutput,
  CreateLabelsCommand,
} from "./commands/CreateLabelsCommand";
import {
  type CreateNotificationSubscriptionCommandInput,
  type CreateNotificationSubscriptionCommandOutput,
  CreateNotificationSubscriptionCommand,
} from "./commands/CreateNotificationSubscriptionCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import {
  type DeactivateUserCommandInput,
  type DeactivateUserCommandOutput,
  DeactivateUserCommand,
} from "./commands/DeactivateUserCommand";
import {
  type DeleteCommentCommandInput,
  type DeleteCommentCommandOutput,
  DeleteCommentCommand,
} from "./commands/DeleteCommentCommand";
import {
  type DeleteCustomMetadataCommandInput,
  type DeleteCustomMetadataCommandOutput,
  DeleteCustomMetadataCommand,
} from "./commands/DeleteCustomMetadataCommand";
import {
  type DeleteDocumentCommandInput,
  type DeleteDocumentCommandOutput,
  DeleteDocumentCommand,
} from "./commands/DeleteDocumentCommand";
import {
  type DeleteDocumentVersionCommandInput,
  type DeleteDocumentVersionCommandOutput,
  DeleteDocumentVersionCommand,
} from "./commands/DeleteDocumentVersionCommand";
import {
  type DeleteFolderCommandInput,
  type DeleteFolderCommandOutput,
  DeleteFolderCommand,
} from "./commands/DeleteFolderCommand";
import {
  type DeleteFolderContentsCommandInput,
  type DeleteFolderContentsCommandOutput,
  DeleteFolderContentsCommand,
} from "./commands/DeleteFolderContentsCommand";
import {
  type DeleteLabelsCommandInput,
  type DeleteLabelsCommandOutput,
  DeleteLabelsCommand,
} from "./commands/DeleteLabelsCommand";
import {
  type DeleteNotificationSubscriptionCommandInput,
  type DeleteNotificationSubscriptionCommandOutput,
  DeleteNotificationSubscriptionCommand,
} from "./commands/DeleteNotificationSubscriptionCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DescribeActivitiesCommandInput,
  type DescribeActivitiesCommandOutput,
  DescribeActivitiesCommand,
} from "./commands/DescribeActivitiesCommand";
import {
  type DescribeCommentsCommandInput,
  type DescribeCommentsCommandOutput,
  DescribeCommentsCommand,
} from "./commands/DescribeCommentsCommand";
import {
  type DescribeDocumentVersionsCommandInput,
  type DescribeDocumentVersionsCommandOutput,
  DescribeDocumentVersionsCommand,
} from "./commands/DescribeDocumentVersionsCommand";
import {
  type DescribeFolderContentsCommandInput,
  type DescribeFolderContentsCommandOutput,
  DescribeFolderContentsCommand,
} from "./commands/DescribeFolderContentsCommand";
import {
  type DescribeGroupsCommandInput,
  type DescribeGroupsCommandOutput,
  DescribeGroupsCommand,
} from "./commands/DescribeGroupsCommand";
import {
  type DescribeNotificationSubscriptionsCommandInput,
  type DescribeNotificationSubscriptionsCommandOutput,
  DescribeNotificationSubscriptionsCommand,
} from "./commands/DescribeNotificationSubscriptionsCommand";
import {
  type DescribeResourcePermissionsCommandInput,
  type DescribeResourcePermissionsCommandOutput,
  DescribeResourcePermissionsCommand,
} from "./commands/DescribeResourcePermissionsCommand";
import {
  type DescribeRootFoldersCommandInput,
  type DescribeRootFoldersCommandOutput,
  DescribeRootFoldersCommand,
} from "./commands/DescribeRootFoldersCommand";
import {
  type DescribeUsersCommandInput,
  type DescribeUsersCommandOutput,
  DescribeUsersCommand,
} from "./commands/DescribeUsersCommand";
import {
  type GetCurrentUserCommandInput,
  type GetCurrentUserCommandOutput,
  GetCurrentUserCommand,
} from "./commands/GetCurrentUserCommand";
import {
  type GetDocumentCommandInput,
  type GetDocumentCommandOutput,
  GetDocumentCommand,
} from "./commands/GetDocumentCommand";
import {
  type GetDocumentPathCommandInput,
  type GetDocumentPathCommandOutput,
  GetDocumentPathCommand,
} from "./commands/GetDocumentPathCommand";
import {
  type GetDocumentVersionCommandInput,
  type GetDocumentVersionCommandOutput,
  GetDocumentVersionCommand,
} from "./commands/GetDocumentVersionCommand";
import { type GetFolderCommandInput, type GetFolderCommandOutput, GetFolderCommand } from "./commands/GetFolderCommand";
import {
  type GetFolderPathCommandInput,
  type GetFolderPathCommandOutput,
  GetFolderPathCommand,
} from "./commands/GetFolderPathCommand";
import {
  type GetResourcesCommandInput,
  type GetResourcesCommandOutput,
  GetResourcesCommand,
} from "./commands/GetResourcesCommand";
import {
  type InitiateDocumentVersionUploadCommandInput,
  type InitiateDocumentVersionUploadCommandOutput,
  InitiateDocumentVersionUploadCommand,
} from "./commands/InitiateDocumentVersionUploadCommand";
import {
  type RemoveAllResourcePermissionsCommandInput,
  type RemoveAllResourcePermissionsCommandOutput,
  RemoveAllResourcePermissionsCommand,
} from "./commands/RemoveAllResourcePermissionsCommand";
import {
  type RemoveResourcePermissionCommandInput,
  type RemoveResourcePermissionCommandOutput,
  RemoveResourcePermissionCommand,
} from "./commands/RemoveResourcePermissionCommand";
import {
  type RestoreDocumentVersionsCommandInput,
  type RestoreDocumentVersionsCommandOutput,
  RestoreDocumentVersionsCommand,
} from "./commands/RestoreDocumentVersionsCommand";
import {
  type SearchResourcesCommandInput,
  type SearchResourcesCommandOutput,
  SearchResourcesCommand,
} from "./commands/SearchResourcesCommand";
import {
  type UpdateDocumentCommandInput,
  type UpdateDocumentCommandOutput,
  UpdateDocumentCommand,
} from "./commands/UpdateDocumentCommand";
import {
  type UpdateDocumentVersionCommandInput,
  type UpdateDocumentVersionCommandOutput,
  UpdateDocumentVersionCommand,
} from "./commands/UpdateDocumentVersionCommand";
import {
  type UpdateFolderCommandInput,
  type UpdateFolderCommandOutput,
  UpdateFolderCommand,
} from "./commands/UpdateFolderCommand";
import {
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UpdateUserCommand,
} from "./commands/UpdateUserCommand";
import { paginateDescribeActivities } from "./pagination/DescribeActivitiesPaginator";
import { paginateDescribeComments } from "./pagination/DescribeCommentsPaginator";
import { paginateDescribeDocumentVersions } from "./pagination/DescribeDocumentVersionsPaginator";
import { paginateDescribeFolderContents } from "./pagination/DescribeFolderContentsPaginator";
import { paginateDescribeGroups } from "./pagination/DescribeGroupsPaginator";
import { paginateDescribeNotificationSubscriptions } from "./pagination/DescribeNotificationSubscriptionsPaginator";
import { paginateDescribeResourcePermissions } from "./pagination/DescribeResourcePermissionsPaginator";
import { paginateDescribeRootFolders } from "./pagination/DescribeRootFoldersPaginator";
import { paginateDescribeUsers } from "./pagination/DescribeUsersPaginator";
import { paginateSearchResources } from "./pagination/SearchResourcesPaginator";
import { WorkDocsClient } from "./WorkDocsClient";

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
const paginators = {
  paginateDescribeActivities,
  paginateDescribeComments,
  paginateDescribeDocumentVersions,
  paginateDescribeFolderContents,
  paginateDescribeGroups,
  paginateDescribeNotificationSubscriptions,
  paginateDescribeResourcePermissions,
  paginateDescribeRootFolders,
  paginateDescribeUsers,
  paginateSearchResources,
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
  activateUser(
    args: ActivateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateUserCommandOutput>;
  activateUser(
    args: ActivateUserCommandInput,
    cb: (err: any, data?: ActivateUserCommandOutput) => void
  ): void;
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
  createComment(
    args: CreateCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCommentCommandOutput>;
  createComment(
    args: CreateCommentCommandInput,
    cb: (err: any, data?: CreateCommentCommandOutput) => void
  ): void;
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
  createFolder(
    args: CreateFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFolderCommandOutput>;
  createFolder(
    args: CreateFolderCommandInput,
    cb: (err: any, data?: CreateFolderCommandOutput) => void
  ): void;
  createFolder(
    args: CreateFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLabelsCommand}
   */
  createLabels(
    args: CreateLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLabelsCommandOutput>;
  createLabels(
    args: CreateLabelsCommandInput,
    cb: (err: any, data?: CreateLabelsCommandOutput) => void
  ): void;
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
  createUser(
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
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
  deactivateUser(
    args: DeactivateUserCommandInput,
    cb: (err: any, data?: DeactivateUserCommandOutput) => void
  ): void;
  deactivateUser(
    args: DeactivateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCommentCommand}
   */
  deleteComment(
    args: DeleteCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCommentCommandOutput>;
  deleteComment(
    args: DeleteCommentCommandInput,
    cb: (err: any, data?: DeleteCommentCommandOutput) => void
  ): void;
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
  deleteDocument(
    args: DeleteDocumentCommandInput,
    cb: (err: any, data?: DeleteDocumentCommandOutput) => void
  ): void;
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
  deleteFolder(
    args: DeleteFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFolderCommandOutput>;
  deleteFolder(
    args: DeleteFolderCommandInput,
    cb: (err: any, data?: DeleteFolderCommandOutput) => void
  ): void;
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
  deleteLabels(
    args: DeleteLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLabelsCommandOutput>;
  deleteLabels(
    args: DeleteLabelsCommandInput,
    cb: (err: any, data?: DeleteLabelsCommandOutput) => void
  ): void;
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
  deleteUser(
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActivitiesCommand}
   */
  describeActivities(): Promise<DescribeActivitiesCommandOutput>;
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
  describeGroups(
    args: DescribeGroupsCommandInput,
    cb: (err: any, data?: DescribeGroupsCommandOutput) => void
  ): void;
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
  describeUsers(): Promise<DescribeUsersCommandOutput>;
  describeUsers(
    args: DescribeUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUsersCommandOutput>;
  describeUsers(
    args: DescribeUsersCommandInput,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;
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
  getCurrentUser(
    args: GetCurrentUserCommandInput,
    cb: (err: any, data?: GetCurrentUserCommandOutput) => void
  ): void;
  getCurrentUser(
    args: GetCurrentUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCurrentUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentCommand}
   */
  getDocument(
    args: GetDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentCommandOutput>;
  getDocument(
    args: GetDocumentCommandInput,
    cb: (err: any, data?: GetDocumentCommandOutput) => void
  ): void;
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
  getDocumentPath(
    args: GetDocumentPathCommandInput,
    cb: (err: any, data?: GetDocumentPathCommandOutput) => void
  ): void;
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
  getFolder(
    args: GetFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFolderCommandOutput>;
  getFolder(
    args: GetFolderCommandInput,
    cb: (err: any, data?: GetFolderCommandOutput) => void
  ): void;
  getFolder(
    args: GetFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFolderPathCommand}
   */
  getFolderPath(
    args: GetFolderPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFolderPathCommandOutput>;
  getFolderPath(
    args: GetFolderPathCommandInput,
    cb: (err: any, data?: GetFolderPathCommandOutput) => void
  ): void;
  getFolderPath(
    args: GetFolderPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFolderPathCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcesCommand}
   */
  getResources(): Promise<GetResourcesCommandOutput>;
  getResources(
    args: GetResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcesCommandOutput>;
  getResources(
    args: GetResourcesCommandInput,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;
  getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateDocumentVersionUploadCommand}
   */
  initiateDocumentVersionUpload(): Promise<InitiateDocumentVersionUploadCommandOutput>;
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
  searchResources(): Promise<SearchResourcesCommandOutput>;
  searchResources(
    args: SearchResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchResourcesCommandOutput>;
  searchResources(
    args: SearchResourcesCommandInput,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;
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
  updateDocument(
    args: UpdateDocumentCommandInput,
    cb: (err: any, data?: UpdateDocumentCommandOutput) => void
  ): void;
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
  updateFolder(
    args: UpdateFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFolderCommandOutput>;
  updateFolder(
    args: UpdateFolderCommandInput,
    cb: (err: any, data?: UpdateFolderCommandOutput) => void
  ): void;
  updateFolder(
    args: UpdateFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActivitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeActivitiesCommandOutput}.
   */
  paginateDescribeActivities(
    args?: DescribeActivitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeActivitiesCommandOutput>;

  /**
   * @see {@link DescribeCommentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeCommentsCommandOutput}.
   */
  paginateDescribeComments(
    args: DescribeCommentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeCommentsCommandOutput>;

  /**
   * @see {@link DescribeDocumentVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDocumentVersionsCommandOutput}.
   */
  paginateDescribeDocumentVersions(
    args: DescribeDocumentVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDocumentVersionsCommandOutput>;

  /**
   * @see {@link DescribeFolderContentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeFolderContentsCommandOutput}.
   */
  paginateDescribeFolderContents(
    args: DescribeFolderContentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeFolderContentsCommandOutput>;

  /**
   * @see {@link DescribeGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeGroupsCommandOutput}.
   */
  paginateDescribeGroups(
    args: DescribeGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeGroupsCommandOutput>;

  /**
   * @see {@link DescribeNotificationSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeNotificationSubscriptionsCommandOutput}.
   */
  paginateDescribeNotificationSubscriptions(
    args: DescribeNotificationSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeNotificationSubscriptionsCommandOutput>;

  /**
   * @see {@link DescribeResourcePermissionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeResourcePermissionsCommandOutput}.
   */
  paginateDescribeResourcePermissions(
    args: DescribeResourcePermissionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeResourcePermissionsCommandOutput>;

  /**
   * @see {@link DescribeRootFoldersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRootFoldersCommandOutput}.
   */
  paginateDescribeRootFolders(
    args: DescribeRootFoldersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRootFoldersCommandOutput>;

  /**
   * @see {@link DescribeUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeUsersCommandOutput}.
   */
  paginateDescribeUsers(
    args?: DescribeUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeUsersCommandOutput>;

  /**
   * @see {@link SearchResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchResourcesCommandOutput}.
   */
  paginateSearchResources(
    args?: SearchResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchResourcesCommandOutput>;
}

/**
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
 * @public
 */
export class WorkDocs extends WorkDocsClient implements WorkDocs {}
createAggregatedClient(commands, WorkDocs, { paginators });
