// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateLibraryItemReviewCommandInput,
  type AssociateLibraryItemReviewCommandOutput,
  AssociateLibraryItemReviewCommand,
} from "./commands/AssociateLibraryItemReviewCommand";
import {
  type AssociateQAppWithUserCommandInput,
  type AssociateQAppWithUserCommandOutput,
  AssociateQAppWithUserCommand,
} from "./commands/AssociateQAppWithUserCommand";
import {
  type BatchCreateCategoryCommandInput,
  type BatchCreateCategoryCommandOutput,
  BatchCreateCategoryCommand,
} from "./commands/BatchCreateCategoryCommand";
import {
  type BatchDeleteCategoryCommandInput,
  type BatchDeleteCategoryCommandOutput,
  BatchDeleteCategoryCommand,
} from "./commands/BatchDeleteCategoryCommand";
import {
  type BatchUpdateCategoryCommandInput,
  type BatchUpdateCategoryCommandOutput,
  BatchUpdateCategoryCommand,
} from "./commands/BatchUpdateCategoryCommand";
import {
  type CreateLibraryItemCommandInput,
  type CreateLibraryItemCommandOutput,
  CreateLibraryItemCommand,
} from "./commands/CreateLibraryItemCommand";
import {
  type CreatePresignedUrlCommandInput,
  type CreatePresignedUrlCommandOutput,
  CreatePresignedUrlCommand,
} from "./commands/CreatePresignedUrlCommand";
import {
  type CreateQAppCommandInput,
  type CreateQAppCommandOutput,
  CreateQAppCommand,
} from "./commands/CreateQAppCommand";
import {
  type DeleteLibraryItemCommandInput,
  type DeleteLibraryItemCommandOutput,
  DeleteLibraryItemCommand,
} from "./commands/DeleteLibraryItemCommand";
import {
  type DeleteQAppCommandInput,
  type DeleteQAppCommandOutput,
  DeleteQAppCommand,
} from "./commands/DeleteQAppCommand";
import {
  type DescribeQAppPermissionsCommandInput,
  type DescribeQAppPermissionsCommandOutput,
  DescribeQAppPermissionsCommand,
} from "./commands/DescribeQAppPermissionsCommand";
import {
  type DisassociateLibraryItemReviewCommandInput,
  type DisassociateLibraryItemReviewCommandOutput,
  DisassociateLibraryItemReviewCommand,
} from "./commands/DisassociateLibraryItemReviewCommand";
import {
  type DisassociateQAppFromUserCommandInput,
  type DisassociateQAppFromUserCommandOutput,
  DisassociateQAppFromUserCommand,
} from "./commands/DisassociateQAppFromUserCommand";
import {
  type ExportQAppSessionDataCommandInput,
  type ExportQAppSessionDataCommandOutput,
  ExportQAppSessionDataCommand,
} from "./commands/ExportQAppSessionDataCommand";
import {
  type GetLibraryItemCommandInput,
  type GetLibraryItemCommandOutput,
  GetLibraryItemCommand,
} from "./commands/GetLibraryItemCommand";
import { type GetQAppCommandInput, type GetQAppCommandOutput, GetQAppCommand } from "./commands/GetQAppCommand";
import {
  type GetQAppSessionCommandInput,
  type GetQAppSessionCommandOutput,
  GetQAppSessionCommand,
} from "./commands/GetQAppSessionCommand";
import {
  type GetQAppSessionMetadataCommandInput,
  type GetQAppSessionMetadataCommandOutput,
  GetQAppSessionMetadataCommand,
} from "./commands/GetQAppSessionMetadataCommand";
import {
  type ImportDocumentCommandInput,
  type ImportDocumentCommandOutput,
  ImportDocumentCommand,
} from "./commands/ImportDocumentCommand";
import {
  type ListCategoriesCommandInput,
  type ListCategoriesCommandOutput,
  ListCategoriesCommand,
} from "./commands/ListCategoriesCommand";
import {
  type ListLibraryItemsCommandInput,
  type ListLibraryItemsCommandOutput,
  ListLibraryItemsCommand,
} from "./commands/ListLibraryItemsCommand";
import { type ListQAppsCommandInput, type ListQAppsCommandOutput, ListQAppsCommand } from "./commands/ListQAppsCommand";
import {
  type ListQAppSessionDataCommandInput,
  type ListQAppSessionDataCommandOutput,
  ListQAppSessionDataCommand,
} from "./commands/ListQAppSessionDataCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PredictQAppCommandInput,
  type PredictQAppCommandOutput,
  PredictQAppCommand,
} from "./commands/PredictQAppCommand";
import {
  type StartQAppSessionCommandInput,
  type StartQAppSessionCommandOutput,
  StartQAppSessionCommand,
} from "./commands/StartQAppSessionCommand";
import {
  type StopQAppSessionCommandInput,
  type StopQAppSessionCommandOutput,
  StopQAppSessionCommand,
} from "./commands/StopQAppSessionCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateLibraryItemCommandInput,
  type UpdateLibraryItemCommandOutput,
  UpdateLibraryItemCommand,
} from "./commands/UpdateLibraryItemCommand";
import {
  type UpdateLibraryItemMetadataCommandInput,
  type UpdateLibraryItemMetadataCommandOutput,
  UpdateLibraryItemMetadataCommand,
} from "./commands/UpdateLibraryItemMetadataCommand";
import {
  type UpdateQAppCommandInput,
  type UpdateQAppCommandOutput,
  UpdateQAppCommand,
} from "./commands/UpdateQAppCommand";
import {
  type UpdateQAppPermissionsCommandInput,
  type UpdateQAppPermissionsCommandOutput,
  UpdateQAppPermissionsCommand,
} from "./commands/UpdateQAppPermissionsCommand";
import {
  type UpdateQAppSessionCommandInput,
  type UpdateQAppSessionCommandOutput,
  UpdateQAppSessionCommand,
} from "./commands/UpdateQAppSessionCommand";
import {
  type UpdateQAppSessionMetadataCommandInput,
  type UpdateQAppSessionMetadataCommandOutput,
  UpdateQAppSessionMetadataCommand,
} from "./commands/UpdateQAppSessionMetadataCommand";
import { paginateListLibraryItems } from "./pagination/ListLibraryItemsPaginator";
import { paginateListQApps } from "./pagination/ListQAppsPaginator";
import { QAppsClient } from "./QAppsClient";

const commands = {
  AssociateLibraryItemReviewCommand,
  AssociateQAppWithUserCommand,
  BatchCreateCategoryCommand,
  BatchDeleteCategoryCommand,
  BatchUpdateCategoryCommand,
  CreateLibraryItemCommand,
  CreatePresignedUrlCommand,
  CreateQAppCommand,
  DeleteLibraryItemCommand,
  DeleteQAppCommand,
  DescribeQAppPermissionsCommand,
  DisassociateLibraryItemReviewCommand,
  DisassociateQAppFromUserCommand,
  ExportQAppSessionDataCommand,
  GetLibraryItemCommand,
  GetQAppCommand,
  GetQAppSessionCommand,
  GetQAppSessionMetadataCommand,
  ImportDocumentCommand,
  ListCategoriesCommand,
  ListLibraryItemsCommand,
  ListQAppsCommand,
  ListQAppSessionDataCommand,
  ListTagsForResourceCommand,
  PredictQAppCommand,
  StartQAppSessionCommand,
  StopQAppSessionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLibraryItemCommand,
  UpdateLibraryItemMetadataCommand,
  UpdateQAppCommand,
  UpdateQAppPermissionsCommand,
  UpdateQAppSessionCommand,
  UpdateQAppSessionMetadataCommand,
};
const paginators = {
  paginateListLibraryItems,
  paginateListQApps,
};

export interface QApps {
  /**
   * @see {@link AssociateLibraryItemReviewCommand}
   */
  associateLibraryItemReview(
    args: AssociateLibraryItemReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLibraryItemReviewCommandOutput>;
  associateLibraryItemReview(
    args: AssociateLibraryItemReviewCommandInput,
    cb: (err: any, data?: AssociateLibraryItemReviewCommandOutput) => void
  ): void;
  associateLibraryItemReview(
    args: AssociateLibraryItemReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLibraryItemReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateQAppWithUserCommand}
   */
  associateQAppWithUser(
    args: AssociateQAppWithUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateQAppWithUserCommandOutput>;
  associateQAppWithUser(
    args: AssociateQAppWithUserCommandInput,
    cb: (err: any, data?: AssociateQAppWithUserCommandOutput) => void
  ): void;
  associateQAppWithUser(
    args: AssociateQAppWithUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateQAppWithUserCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateCategoryCommand}
   */
  batchCreateCategory(
    args: BatchCreateCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateCategoryCommandOutput>;
  batchCreateCategory(
    args: BatchCreateCategoryCommandInput,
    cb: (err: any, data?: BatchCreateCategoryCommandOutput) => void
  ): void;
  batchCreateCategory(
    args: BatchCreateCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateCategoryCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteCategoryCommand}
   */
  batchDeleteCategory(
    args: BatchDeleteCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteCategoryCommandOutput>;
  batchDeleteCategory(
    args: BatchDeleteCategoryCommandInput,
    cb: (err: any, data?: BatchDeleteCategoryCommandOutput) => void
  ): void;
  batchDeleteCategory(
    args: BatchDeleteCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteCategoryCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateCategoryCommand}
   */
  batchUpdateCategory(
    args: BatchUpdateCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateCategoryCommandOutput>;
  batchUpdateCategory(
    args: BatchUpdateCategoryCommandInput,
    cb: (err: any, data?: BatchUpdateCategoryCommandOutput) => void
  ): void;
  batchUpdateCategory(
    args: BatchUpdateCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateCategoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLibraryItemCommand}
   */
  createLibraryItem(
    args: CreateLibraryItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLibraryItemCommandOutput>;
  createLibraryItem(
    args: CreateLibraryItemCommandInput,
    cb: (err: any, data?: CreateLibraryItemCommandOutput) => void
  ): void;
  createLibraryItem(
    args: CreateLibraryItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLibraryItemCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePresignedUrlCommand}
   */
  createPresignedUrl(
    args: CreatePresignedUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePresignedUrlCommandOutput>;
  createPresignedUrl(
    args: CreatePresignedUrlCommandInput,
    cb: (err: any, data?: CreatePresignedUrlCommandOutput) => void
  ): void;
  createPresignedUrl(
    args: CreatePresignedUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePresignedUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQAppCommand}
   */
  createQApp(
    args: CreateQAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQAppCommandOutput>;
  createQApp(
    args: CreateQAppCommandInput,
    cb: (err: any, data?: CreateQAppCommandOutput) => void
  ): void;
  createQApp(
    args: CreateQAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLibraryItemCommand}
   */
  deleteLibraryItem(
    args: DeleteLibraryItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLibraryItemCommandOutput>;
  deleteLibraryItem(
    args: DeleteLibraryItemCommandInput,
    cb: (err: any, data?: DeleteLibraryItemCommandOutput) => void
  ): void;
  deleteLibraryItem(
    args: DeleteLibraryItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLibraryItemCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQAppCommand}
   */
  deleteQApp(
    args: DeleteQAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQAppCommandOutput>;
  deleteQApp(
    args: DeleteQAppCommandInput,
    cb: (err: any, data?: DeleteQAppCommandOutput) => void
  ): void;
  deleteQApp(
    args: DeleteQAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQAppPermissionsCommand}
   */
  describeQAppPermissions(
    args: DescribeQAppPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQAppPermissionsCommandOutput>;
  describeQAppPermissions(
    args: DescribeQAppPermissionsCommandInput,
    cb: (err: any, data?: DescribeQAppPermissionsCommandOutput) => void
  ): void;
  describeQAppPermissions(
    args: DescribeQAppPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQAppPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateLibraryItemReviewCommand}
   */
  disassociateLibraryItemReview(
    args: DisassociateLibraryItemReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLibraryItemReviewCommandOutput>;
  disassociateLibraryItemReview(
    args: DisassociateLibraryItemReviewCommandInput,
    cb: (err: any, data?: DisassociateLibraryItemReviewCommandOutput) => void
  ): void;
  disassociateLibraryItemReview(
    args: DisassociateLibraryItemReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLibraryItemReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateQAppFromUserCommand}
   */
  disassociateQAppFromUser(
    args: DisassociateQAppFromUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateQAppFromUserCommandOutput>;
  disassociateQAppFromUser(
    args: DisassociateQAppFromUserCommandInput,
    cb: (err: any, data?: DisassociateQAppFromUserCommandOutput) => void
  ): void;
  disassociateQAppFromUser(
    args: DisassociateQAppFromUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateQAppFromUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportQAppSessionDataCommand}
   */
  exportQAppSessionData(
    args: ExportQAppSessionDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportQAppSessionDataCommandOutput>;
  exportQAppSessionData(
    args: ExportQAppSessionDataCommandInput,
    cb: (err: any, data?: ExportQAppSessionDataCommandOutput) => void
  ): void;
  exportQAppSessionData(
    args: ExportQAppSessionDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportQAppSessionDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLibraryItemCommand}
   */
  getLibraryItem(
    args: GetLibraryItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLibraryItemCommandOutput>;
  getLibraryItem(
    args: GetLibraryItemCommandInput,
    cb: (err: any, data?: GetLibraryItemCommandOutput) => void
  ): void;
  getLibraryItem(
    args: GetLibraryItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLibraryItemCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQAppCommand}
   */
  getQApp(
    args: GetQAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQAppCommandOutput>;
  getQApp(
    args: GetQAppCommandInput,
    cb: (err: any, data?: GetQAppCommandOutput) => void
  ): void;
  getQApp(
    args: GetQAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQAppCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQAppSessionCommand}
   */
  getQAppSession(
    args: GetQAppSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQAppSessionCommandOutput>;
  getQAppSession(
    args: GetQAppSessionCommandInput,
    cb: (err: any, data?: GetQAppSessionCommandOutput) => void
  ): void;
  getQAppSession(
    args: GetQAppSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQAppSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQAppSessionMetadataCommand}
   */
  getQAppSessionMetadata(
    args: GetQAppSessionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQAppSessionMetadataCommandOutput>;
  getQAppSessionMetadata(
    args: GetQAppSessionMetadataCommandInput,
    cb: (err: any, data?: GetQAppSessionMetadataCommandOutput) => void
  ): void;
  getQAppSessionMetadata(
    args: GetQAppSessionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQAppSessionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportDocumentCommand}
   */
  importDocument(
    args: ImportDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportDocumentCommandOutput>;
  importDocument(
    args: ImportDocumentCommandInput,
    cb: (err: any, data?: ImportDocumentCommandOutput) => void
  ): void;
  importDocument(
    args: ImportDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCategoriesCommand}
   */
  listCategories(
    args: ListCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCategoriesCommandOutput>;
  listCategories(
    args: ListCategoriesCommandInput,
    cb: (err: any, data?: ListCategoriesCommandOutput) => void
  ): void;
  listCategories(
    args: ListCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCategoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLibraryItemsCommand}
   */
  listLibraryItems(
    args: ListLibraryItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLibraryItemsCommandOutput>;
  listLibraryItems(
    args: ListLibraryItemsCommandInput,
    cb: (err: any, data?: ListLibraryItemsCommandOutput) => void
  ): void;
  listLibraryItems(
    args: ListLibraryItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLibraryItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQAppsCommand}
   */
  listQApps(
    args: ListQAppsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQAppsCommandOutput>;
  listQApps(
    args: ListQAppsCommandInput,
    cb: (err: any, data?: ListQAppsCommandOutput) => void
  ): void;
  listQApps(
    args: ListQAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQAppSessionDataCommand}
   */
  listQAppSessionData(
    args: ListQAppSessionDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQAppSessionDataCommandOutput>;
  listQAppSessionData(
    args: ListQAppSessionDataCommandInput,
    cb: (err: any, data?: ListQAppSessionDataCommandOutput) => void
  ): void;
  listQAppSessionData(
    args: ListQAppSessionDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQAppSessionDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PredictQAppCommand}
   */
  predictQApp(
    args: PredictQAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PredictQAppCommandOutput>;
  predictQApp(
    args: PredictQAppCommandInput,
    cb: (err: any, data?: PredictQAppCommandOutput) => void
  ): void;
  predictQApp(
    args: PredictQAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PredictQAppCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQAppSessionCommand}
   */
  startQAppSession(
    args: StartQAppSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartQAppSessionCommandOutput>;
  startQAppSession(
    args: StartQAppSessionCommandInput,
    cb: (err: any, data?: StartQAppSessionCommandOutput) => void
  ): void;
  startQAppSession(
    args: StartQAppSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartQAppSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopQAppSessionCommand}
   */
  stopQAppSession(
    args: StopQAppSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopQAppSessionCommandOutput>;
  stopQAppSession(
    args: StopQAppSessionCommandInput,
    cb: (err: any, data?: StopQAppSessionCommandOutput) => void
  ): void;
  stopQAppSession(
    args: StopQAppSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopQAppSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLibraryItemCommand}
   */
  updateLibraryItem(
    args: UpdateLibraryItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLibraryItemCommandOutput>;
  updateLibraryItem(
    args: UpdateLibraryItemCommandInput,
    cb: (err: any, data?: UpdateLibraryItemCommandOutput) => void
  ): void;
  updateLibraryItem(
    args: UpdateLibraryItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLibraryItemCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLibraryItemMetadataCommand}
   */
  updateLibraryItemMetadata(
    args: UpdateLibraryItemMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLibraryItemMetadataCommandOutput>;
  updateLibraryItemMetadata(
    args: UpdateLibraryItemMetadataCommandInput,
    cb: (err: any, data?: UpdateLibraryItemMetadataCommandOutput) => void
  ): void;
  updateLibraryItemMetadata(
    args: UpdateLibraryItemMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLibraryItemMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQAppCommand}
   */
  updateQApp(
    args: UpdateQAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQAppCommandOutput>;
  updateQApp(
    args: UpdateQAppCommandInput,
    cb: (err: any, data?: UpdateQAppCommandOutput) => void
  ): void;
  updateQApp(
    args: UpdateQAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQAppCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQAppPermissionsCommand}
   */
  updateQAppPermissions(
    args: UpdateQAppPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQAppPermissionsCommandOutput>;
  updateQAppPermissions(
    args: UpdateQAppPermissionsCommandInput,
    cb: (err: any, data?: UpdateQAppPermissionsCommandOutput) => void
  ): void;
  updateQAppPermissions(
    args: UpdateQAppPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQAppPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQAppSessionCommand}
   */
  updateQAppSession(
    args: UpdateQAppSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQAppSessionCommandOutput>;
  updateQAppSession(
    args: UpdateQAppSessionCommandInput,
    cb: (err: any, data?: UpdateQAppSessionCommandOutput) => void
  ): void;
  updateQAppSession(
    args: UpdateQAppSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQAppSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQAppSessionMetadataCommand}
   */
  updateQAppSessionMetadata(
    args: UpdateQAppSessionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQAppSessionMetadataCommandOutput>;
  updateQAppSessionMetadata(
    args: UpdateQAppSessionMetadataCommandInput,
    cb: (err: any, data?: UpdateQAppSessionMetadataCommandOutput) => void
  ): void;
  updateQAppSessionMetadata(
    args: UpdateQAppSessionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQAppSessionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLibraryItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLibraryItemsCommandOutput}.
   */
  paginateListLibraryItems(
    args: ListLibraryItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLibraryItemsCommandOutput>;

  /**
   * @see {@link ListQAppsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQAppsCommandOutput}.
   */
  paginateListQApps(
    args: ListQAppsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQAppsCommandOutput>;
}

/**
 * <p>The Amazon Q Apps feature capability within Amazon Q Business allows web experience users to create lightweight, purpose-built AI apps to fulfill specific tasks from within their web experience. For example, users can create a Q App that exclusively generates marketing-related content to improve your marketing team's productivity or a Q App for writing customer emails and creating promotional content using a certain style of voice, tone, and branding. For more information on the capabilities, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html#q-apps-actions">Amazon Q Apps capabilities</a> in the <i>Amazon Q Business User Guide</i>. </p> <p>For an overview of the Amazon Q App APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_Operations_QApps.html">Overview of Amazon Q Apps API operations</a>.</p> <p>For information about the IAM access control permissions you need to use the Amazon Q Apps API, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html"> IAM role for the Amazon Q Business web experience including Amazon Q Apps</a> in the <i>Amazon Q Business User Guide</i>.</p>
 * @public
 */
export class QApps extends QAppsClient implements QApps {}
createAggregatedClient(commands, QApps, { paginators });
