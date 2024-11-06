// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateLibraryItemReviewCommand,
  AssociateLibraryItemReviewCommandInput,
  AssociateLibraryItemReviewCommandOutput,
} from "./commands/AssociateLibraryItemReviewCommand";
import {
  AssociateQAppWithUserCommand,
  AssociateQAppWithUserCommandInput,
  AssociateQAppWithUserCommandOutput,
} from "./commands/AssociateQAppWithUserCommand";
import {
  BatchCreateCategoryCommand,
  BatchCreateCategoryCommandInput,
  BatchCreateCategoryCommandOutput,
} from "./commands/BatchCreateCategoryCommand";
import {
  BatchDeleteCategoryCommand,
  BatchDeleteCategoryCommandInput,
  BatchDeleteCategoryCommandOutput,
} from "./commands/BatchDeleteCategoryCommand";
import {
  BatchUpdateCategoryCommand,
  BatchUpdateCategoryCommandInput,
  BatchUpdateCategoryCommandOutput,
} from "./commands/BatchUpdateCategoryCommand";
import {
  CreateLibraryItemCommand,
  CreateLibraryItemCommandInput,
  CreateLibraryItemCommandOutput,
} from "./commands/CreateLibraryItemCommand";
import { CreateQAppCommand, CreateQAppCommandInput, CreateQAppCommandOutput } from "./commands/CreateQAppCommand";
import {
  DeleteLibraryItemCommand,
  DeleteLibraryItemCommandInput,
  DeleteLibraryItemCommandOutput,
} from "./commands/DeleteLibraryItemCommand";
import { DeleteQAppCommand, DeleteQAppCommandInput, DeleteQAppCommandOutput } from "./commands/DeleteQAppCommand";
import {
  DisassociateLibraryItemReviewCommand,
  DisassociateLibraryItemReviewCommandInput,
  DisassociateLibraryItemReviewCommandOutput,
} from "./commands/DisassociateLibraryItemReviewCommand";
import {
  DisassociateQAppFromUserCommand,
  DisassociateQAppFromUserCommandInput,
  DisassociateQAppFromUserCommandOutput,
} from "./commands/DisassociateQAppFromUserCommand";
import {
  GetLibraryItemCommand,
  GetLibraryItemCommandInput,
  GetLibraryItemCommandOutput,
} from "./commands/GetLibraryItemCommand";
import { GetQAppCommand, GetQAppCommandInput, GetQAppCommandOutput } from "./commands/GetQAppCommand";
import {
  GetQAppSessionCommand,
  GetQAppSessionCommandInput,
  GetQAppSessionCommandOutput,
} from "./commands/GetQAppSessionCommand";
import {
  ImportDocumentCommand,
  ImportDocumentCommandInput,
  ImportDocumentCommandOutput,
} from "./commands/ImportDocumentCommand";
import {
  ListCategoriesCommand,
  ListCategoriesCommandInput,
  ListCategoriesCommandOutput,
} from "./commands/ListCategoriesCommand";
import {
  ListLibraryItemsCommand,
  ListLibraryItemsCommandInput,
  ListLibraryItemsCommandOutput,
} from "./commands/ListLibraryItemsCommand";
import { ListQAppsCommand, ListQAppsCommandInput, ListQAppsCommandOutput } from "./commands/ListQAppsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PredictQAppCommand, PredictQAppCommandInput, PredictQAppCommandOutput } from "./commands/PredictQAppCommand";
import {
  StartQAppSessionCommand,
  StartQAppSessionCommandInput,
  StartQAppSessionCommandOutput,
} from "./commands/StartQAppSessionCommand";
import {
  StopQAppSessionCommand,
  StopQAppSessionCommandInput,
  StopQAppSessionCommandOutput,
} from "./commands/StopQAppSessionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateLibraryItemCommand,
  UpdateLibraryItemCommandInput,
  UpdateLibraryItemCommandOutput,
} from "./commands/UpdateLibraryItemCommand";
import {
  UpdateLibraryItemMetadataCommand,
  UpdateLibraryItemMetadataCommandInput,
  UpdateLibraryItemMetadataCommandOutput,
} from "./commands/UpdateLibraryItemMetadataCommand";
import { UpdateQAppCommand, UpdateQAppCommandInput, UpdateQAppCommandOutput } from "./commands/UpdateQAppCommand";
import {
  UpdateQAppSessionCommand,
  UpdateQAppSessionCommandInput,
  UpdateQAppSessionCommandOutput,
} from "./commands/UpdateQAppSessionCommand";
import { QAppsClient, QAppsClientConfig } from "./QAppsClient";

const commands = {
  AssociateLibraryItemReviewCommand,
  AssociateQAppWithUserCommand,
  BatchCreateCategoryCommand,
  BatchDeleteCategoryCommand,
  BatchUpdateCategoryCommand,
  CreateLibraryItemCommand,
  CreateQAppCommand,
  DeleteLibraryItemCommand,
  DeleteQAppCommand,
  DisassociateLibraryItemReviewCommand,
  DisassociateQAppFromUserCommand,
  GetLibraryItemCommand,
  GetQAppCommand,
  GetQAppSessionCommand,
  ImportDocumentCommand,
  ListCategoriesCommand,
  ListLibraryItemsCommand,
  ListQAppsCommand,
  ListTagsForResourceCommand,
  PredictQAppCommand,
  StartQAppSessionCommand,
  StopQAppSessionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLibraryItemCommand,
  UpdateLibraryItemMetadataCommand,
  UpdateQAppCommand,
  UpdateQAppSessionCommand,
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
   * @see {@link CreateQAppCommand}
   */
  createQApp(args: CreateQAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateQAppCommandOutput>;
  createQApp(args: CreateQAppCommandInput, cb: (err: any, data?: CreateQAppCommandOutput) => void): void;
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
  deleteQApp(args: DeleteQAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQAppCommandOutput>;
  deleteQApp(args: DeleteQAppCommandInput, cb: (err: any, data?: DeleteQAppCommandOutput) => void): void;
  deleteQApp(
    args: DeleteQAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQAppCommandOutput) => void
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
   * @see {@link GetLibraryItemCommand}
   */
  getLibraryItem(
    args: GetLibraryItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLibraryItemCommandOutput>;
  getLibraryItem(args: GetLibraryItemCommandInput, cb: (err: any, data?: GetLibraryItemCommandOutput) => void): void;
  getLibraryItem(
    args: GetLibraryItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLibraryItemCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQAppCommand}
   */
  getQApp(args: GetQAppCommandInput, options?: __HttpHandlerOptions): Promise<GetQAppCommandOutput>;
  getQApp(args: GetQAppCommandInput, cb: (err: any, data?: GetQAppCommandOutput) => void): void;
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
  getQAppSession(args: GetQAppSessionCommandInput, cb: (err: any, data?: GetQAppSessionCommandOutput) => void): void;
  getQAppSession(
    args: GetQAppSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQAppSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportDocumentCommand}
   */
  importDocument(
    args: ImportDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportDocumentCommandOutput>;
  importDocument(args: ImportDocumentCommandInput, cb: (err: any, data?: ImportDocumentCommandOutput) => void): void;
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
  listCategories(args: ListCategoriesCommandInput, cb: (err: any, data?: ListCategoriesCommandOutput) => void): void;
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
  listQApps(args: ListQAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListQAppsCommandOutput>;
  listQApps(args: ListQAppsCommandInput, cb: (err: any, data?: ListQAppsCommandOutput) => void): void;
  listQApps(
    args: ListQAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQAppsCommandOutput) => void
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
  predictQApp(args: PredictQAppCommandInput, options?: __HttpHandlerOptions): Promise<PredictQAppCommandOutput>;
  predictQApp(args: PredictQAppCommandInput, cb: (err: any, data?: PredictQAppCommandOutput) => void): void;
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
  stopQAppSession(args: StopQAppSessionCommandInput, cb: (err: any, data?: StopQAppSessionCommandOutput) => void): void;
  stopQAppSession(
    args: StopQAppSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopQAppSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
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
  updateQApp(args: UpdateQAppCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQAppCommandOutput>;
  updateQApp(args: UpdateQAppCommandInput, cb: (err: any, data?: UpdateQAppCommandOutput) => void): void;
  updateQApp(
    args: UpdateQAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQAppCommandOutput) => void
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
}

/**
 * <p>The Amazon Q Apps feature capability within Amazon Q Business allows web experience
 *       users to create lightweight, purpose-built AI apps to fulfill specific tasks from
 *       within their web experience. For example, users can create a Q App that exclusively
 *       generates marketing-related content to improve your marketing team's productivity or a
 *       Q App for writing customer emails and creating promotional content using a certain
 *       style of voice, tone, and branding. For more information on the capabilities, see
 *       <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html#q-apps-actions">Amazon Q Apps capabilities</a> in the <i>Amazon Q Business User Guide</i>.
 *       </p>
 *          <p>For an overview of the Amazon Q App APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_Operations_QApps.html">Overview of
 *       Amazon Q Apps API operations</a>.</p>
 *          <p>For information about the IAM access control permissions you need to
 *       use the Amazon Q Apps API, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html">
 *         IAM role for the Amazon Q Business web experience including Amazon Q Apps</a> in the
 *       <i>Amazon Q Business User Guide</i>.</p>
 * @public
 */
export class QApps extends QAppsClient implements QApps {}
createAggregatedClient(commands, QApps);
