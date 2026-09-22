// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateWhatsAppBusinessAccountCommandInput,
  type AssociateWhatsAppBusinessAccountCommandOutput,
  AssociateWhatsAppBusinessAccountCommand,
} from "./commands/AssociateWhatsAppBusinessAccountCommand";
import {
  type CreateWhatsAppDatasetCommandInput,
  type CreateWhatsAppDatasetCommandOutput,
  CreateWhatsAppDatasetCommand,
} from "./commands/CreateWhatsAppDatasetCommand";
import {
  type CreateWhatsAppFlowCommandInput,
  type CreateWhatsAppFlowCommandOutput,
  CreateWhatsAppFlowCommand,
} from "./commands/CreateWhatsAppFlowCommand";
import {
  type CreateWhatsAppMessageTemplateCommandInput,
  type CreateWhatsAppMessageTemplateCommandOutput,
  CreateWhatsAppMessageTemplateCommand,
} from "./commands/CreateWhatsAppMessageTemplateCommand";
import {
  type CreateWhatsAppMessageTemplateFromLibraryCommandInput,
  type CreateWhatsAppMessageTemplateFromLibraryCommandOutput,
  CreateWhatsAppMessageTemplateFromLibraryCommand,
} from "./commands/CreateWhatsAppMessageTemplateFromLibraryCommand";
import {
  type CreateWhatsAppMessageTemplateMediaCommandInput,
  type CreateWhatsAppMessageTemplateMediaCommandOutput,
  CreateWhatsAppMessageTemplateMediaCommand,
} from "./commands/CreateWhatsAppMessageTemplateMediaCommand";
import {
  type DeleteWhatsAppFlowCommandInput,
  type DeleteWhatsAppFlowCommandOutput,
  DeleteWhatsAppFlowCommand,
} from "./commands/DeleteWhatsAppFlowCommand";
import {
  type DeleteWhatsAppMessageMediaCommandInput,
  type DeleteWhatsAppMessageMediaCommandOutput,
  DeleteWhatsAppMessageMediaCommand,
} from "./commands/DeleteWhatsAppMessageMediaCommand";
import {
  type DeleteWhatsAppMessageTemplateCommandInput,
  type DeleteWhatsAppMessageTemplateCommandOutput,
  DeleteWhatsAppMessageTemplateCommand,
} from "./commands/DeleteWhatsAppMessageTemplateCommand";
import {
  type DeprecateWhatsAppFlowCommandInput,
  type DeprecateWhatsAppFlowCommandOutput,
  DeprecateWhatsAppFlowCommand,
} from "./commands/DeprecateWhatsAppFlowCommand";
import {
  type DisassociateWhatsAppBusinessAccountCommandInput,
  type DisassociateWhatsAppBusinessAccountCommandOutput,
  DisassociateWhatsAppBusinessAccountCommand,
} from "./commands/DisassociateWhatsAppBusinessAccountCommand";
import {
  type GetLinkedWhatsAppBusinessAccountCommandInput,
  type GetLinkedWhatsAppBusinessAccountCommandOutput,
  GetLinkedWhatsAppBusinessAccountCommand,
} from "./commands/GetLinkedWhatsAppBusinessAccountCommand";
import {
  type GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
  type GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput,
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommand,
} from "./commands/GetLinkedWhatsAppBusinessAccountPhoneNumberCommand";
import {
  type GetWhatsAppBusinessPublicKeyCommandInput,
  type GetWhatsAppBusinessPublicKeyCommandOutput,
  GetWhatsAppBusinessPublicKeyCommand,
} from "./commands/GetWhatsAppBusinessPublicKeyCommand";
import {
  type GetWhatsAppCallPermissionCommandInput,
  type GetWhatsAppCallPermissionCommandOutput,
  GetWhatsAppCallPermissionCommand,
} from "./commands/GetWhatsAppCallPermissionCommand";
import {
  type GetWhatsAppFlowCommandInput,
  type GetWhatsAppFlowCommandOutput,
  GetWhatsAppFlowCommand,
} from "./commands/GetWhatsAppFlowCommand";
import {
  type GetWhatsAppFlowPreviewCommandInput,
  type GetWhatsAppFlowPreviewCommandOutput,
  GetWhatsAppFlowPreviewCommand,
} from "./commands/GetWhatsAppFlowPreviewCommand";
import {
  type GetWhatsAppMessageMediaCommandInput,
  type GetWhatsAppMessageMediaCommandOutput,
  GetWhatsAppMessageMediaCommand,
} from "./commands/GetWhatsAppMessageMediaCommand";
import {
  type GetWhatsAppMessageTemplateCommandInput,
  type GetWhatsAppMessageTemplateCommandOutput,
  GetWhatsAppMessageTemplateCommand,
} from "./commands/GetWhatsAppMessageTemplateCommand";
import {
  type ListLinkedWhatsAppBusinessAccountsCommandInput,
  type ListLinkedWhatsAppBusinessAccountsCommandOutput,
  ListLinkedWhatsAppBusinessAccountsCommand,
} from "./commands/ListLinkedWhatsAppBusinessAccountsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWhatsAppFlowAssetsCommandInput,
  type ListWhatsAppFlowAssetsCommandOutput,
  ListWhatsAppFlowAssetsCommand,
} from "./commands/ListWhatsAppFlowAssetsCommand";
import {
  type ListWhatsAppFlowsCommandInput,
  type ListWhatsAppFlowsCommandOutput,
  ListWhatsAppFlowsCommand,
} from "./commands/ListWhatsAppFlowsCommand";
import {
  type ListWhatsAppMessageTemplatesCommandInput,
  type ListWhatsAppMessageTemplatesCommandOutput,
  ListWhatsAppMessageTemplatesCommand,
} from "./commands/ListWhatsAppMessageTemplatesCommand";
import {
  type ListWhatsAppTemplateLibraryCommandInput,
  type ListWhatsAppTemplateLibraryCommandOutput,
  ListWhatsAppTemplateLibraryCommand,
} from "./commands/ListWhatsAppTemplateLibraryCommand";
import {
  type PostWhatsAppMessageMediaCommandInput,
  type PostWhatsAppMessageMediaCommandOutput,
  PostWhatsAppMessageMediaCommand,
} from "./commands/PostWhatsAppMessageMediaCommand";
import {
  type PublishWhatsAppFlowCommandInput,
  type PublishWhatsAppFlowCommandOutput,
  PublishWhatsAppFlowCommand,
} from "./commands/PublishWhatsAppFlowCommand";
import {
  type PutWhatsAppBusinessAccountEventDestinationsCommandInput,
  type PutWhatsAppBusinessAccountEventDestinationsCommandOutput,
  PutWhatsAppBusinessAccountEventDestinationsCommand,
} from "./commands/PutWhatsAppBusinessAccountEventDestinationsCommand";
import {
  type PutWhatsAppBusinessPublicKeyCommandInput,
  type PutWhatsAppBusinessPublicKeyCommandOutput,
  PutWhatsAppBusinessPublicKeyCommand,
} from "./commands/PutWhatsAppBusinessPublicKeyCommand";
import {
  type SendWhatsAppCallEventCommandInput,
  type SendWhatsAppCallEventCommandOutput,
  SendWhatsAppCallEventCommand,
} from "./commands/SendWhatsAppCallEventCommand";
import {
  type SendWhatsAppConversionEventCommandInput,
  type SendWhatsAppConversionEventCommandOutput,
  SendWhatsAppConversionEventCommand,
} from "./commands/SendWhatsAppConversionEventCommand";
import {
  type SendWhatsAppMessageCommandInput,
  type SendWhatsAppMessageCommandOutput,
  SendWhatsAppMessageCommand,
} from "./commands/SendWhatsAppMessageCommand";
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
  type UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
  type UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput,
  UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommand,
} from "./commands/UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommand";
import {
  type UpdateWhatsAppFlowAssetsCommandInput,
  type UpdateWhatsAppFlowAssetsCommandOutput,
  UpdateWhatsAppFlowAssetsCommand,
} from "./commands/UpdateWhatsAppFlowAssetsCommand";
import {
  type UpdateWhatsAppFlowCommandInput,
  type UpdateWhatsAppFlowCommandOutput,
  UpdateWhatsAppFlowCommand,
} from "./commands/UpdateWhatsAppFlowCommand";
import {
  type UpdateWhatsAppMessageTemplateCommandInput,
  type UpdateWhatsAppMessageTemplateCommandOutput,
  UpdateWhatsAppMessageTemplateCommand,
} from "./commands/UpdateWhatsAppMessageTemplateCommand";
import { paginateListLinkedWhatsAppBusinessAccounts } from "./pagination/ListLinkedWhatsAppBusinessAccountsPaginator";
import { paginateListWhatsAppFlowAssets } from "./pagination/ListWhatsAppFlowAssetsPaginator";
import { paginateListWhatsAppFlows } from "./pagination/ListWhatsAppFlowsPaginator";
import { paginateListWhatsAppMessageTemplates } from "./pagination/ListWhatsAppMessageTemplatesPaginator";
import { paginateListWhatsAppTemplateLibrary } from "./pagination/ListWhatsAppTemplateLibraryPaginator";
import { SocialMessagingClient } from "./SocialMessagingClient";

const commands = {
  AssociateWhatsAppBusinessAccountCommand,
  CreateWhatsAppDatasetCommand,
  CreateWhatsAppFlowCommand,
  CreateWhatsAppMessageTemplateCommand,
  CreateWhatsAppMessageTemplateFromLibraryCommand,
  CreateWhatsAppMessageTemplateMediaCommand,
  DeleteWhatsAppFlowCommand,
  DeleteWhatsAppMessageMediaCommand,
  DeleteWhatsAppMessageTemplateCommand,
  DeprecateWhatsAppFlowCommand,
  DisassociateWhatsAppBusinessAccountCommand,
  GetLinkedWhatsAppBusinessAccountCommand,
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommand,
  GetWhatsAppBusinessPublicKeyCommand,
  GetWhatsAppCallPermissionCommand,
  GetWhatsAppFlowCommand,
  GetWhatsAppFlowPreviewCommand,
  GetWhatsAppMessageMediaCommand,
  GetWhatsAppMessageTemplateCommand,
  ListLinkedWhatsAppBusinessAccountsCommand,
  ListTagsForResourceCommand,
  ListWhatsAppFlowAssetsCommand,
  ListWhatsAppFlowsCommand,
  ListWhatsAppMessageTemplatesCommand,
  ListWhatsAppTemplateLibraryCommand,
  PostWhatsAppMessageMediaCommand,
  PublishWhatsAppFlowCommand,
  PutWhatsAppBusinessAccountEventDestinationsCommand,
  PutWhatsAppBusinessPublicKeyCommand,
  SendWhatsAppCallEventCommand,
  SendWhatsAppConversionEventCommand,
  SendWhatsAppMessageCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommand,
  UpdateWhatsAppFlowCommand,
  UpdateWhatsAppFlowAssetsCommand,
  UpdateWhatsAppMessageTemplateCommand,
};
const paginators = {
  paginateListLinkedWhatsAppBusinessAccounts,
  paginateListWhatsAppFlowAssets,
  paginateListWhatsAppFlows,
  paginateListWhatsAppMessageTemplates,
  paginateListWhatsAppTemplateLibrary,
};

/**
 * @public
 */
export interface SocialMessagingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SocialMessaging {
  /**
   * @see {@link AssociateWhatsAppBusinessAccountCommand}
   */
  associateWhatsAppBusinessAccount(): Promise<AssociateWhatsAppBusinessAccountCommandOutput>;
  associateWhatsAppBusinessAccount(
    args: AssociateWhatsAppBusinessAccountCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<AssociateWhatsAppBusinessAccountCommandOutput>;
  associateWhatsAppBusinessAccount(
    args: AssociateWhatsAppBusinessAccountCommandInput,
    cb: (err: any, data?: AssociateWhatsAppBusinessAccountCommandOutput) => void
  ): void;
  associateWhatsAppBusinessAccount(
    args: AssociateWhatsAppBusinessAccountCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: AssociateWhatsAppBusinessAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatsAppDatasetCommand}
   */
  createWhatsAppDataset(
    args: CreateWhatsAppDatasetCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<CreateWhatsAppDatasetCommandOutput>;
  createWhatsAppDataset(
    args: CreateWhatsAppDatasetCommandInput,
    cb: (err: any, data?: CreateWhatsAppDatasetCommandOutput) => void
  ): void;
  createWhatsAppDataset(
    args: CreateWhatsAppDatasetCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: CreateWhatsAppDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatsAppFlowCommand}
   */
  createWhatsAppFlow(
    args: CreateWhatsAppFlowCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<CreateWhatsAppFlowCommandOutput>;
  createWhatsAppFlow(
    args: CreateWhatsAppFlowCommandInput,
    cb: (err: any, data?: CreateWhatsAppFlowCommandOutput) => void
  ): void;
  createWhatsAppFlow(
    args: CreateWhatsAppFlowCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: CreateWhatsAppFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatsAppMessageTemplateCommand}
   */
  createWhatsAppMessageTemplate(
    args: CreateWhatsAppMessageTemplateCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<CreateWhatsAppMessageTemplateCommandOutput>;
  createWhatsAppMessageTemplate(
    args: CreateWhatsAppMessageTemplateCommandInput,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateCommandOutput) => void
  ): void;
  createWhatsAppMessageTemplate(
    args: CreateWhatsAppMessageTemplateCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatsAppMessageTemplateFromLibraryCommand}
   */
  createWhatsAppMessageTemplateFromLibrary(
    args: CreateWhatsAppMessageTemplateFromLibraryCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<CreateWhatsAppMessageTemplateFromLibraryCommandOutput>;
  createWhatsAppMessageTemplateFromLibrary(
    args: CreateWhatsAppMessageTemplateFromLibraryCommandInput,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateFromLibraryCommandOutput) => void
  ): void;
  createWhatsAppMessageTemplateFromLibrary(
    args: CreateWhatsAppMessageTemplateFromLibraryCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateFromLibraryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatsAppMessageTemplateMediaCommand}
   */
  createWhatsAppMessageTemplateMedia(
    args: CreateWhatsAppMessageTemplateMediaCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<CreateWhatsAppMessageTemplateMediaCommandOutput>;
  createWhatsAppMessageTemplateMedia(
    args: CreateWhatsAppMessageTemplateMediaCommandInput,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateMediaCommandOutput) => void
  ): void;
  createWhatsAppMessageTemplateMedia(
    args: CreateWhatsAppMessageTemplateMediaCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatsAppFlowCommand}
   */
  deleteWhatsAppFlow(
    args: DeleteWhatsAppFlowCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<DeleteWhatsAppFlowCommandOutput>;
  deleteWhatsAppFlow(
    args: DeleteWhatsAppFlowCommandInput,
    cb: (err: any, data?: DeleteWhatsAppFlowCommandOutput) => void
  ): void;
  deleteWhatsAppFlow(
    args: DeleteWhatsAppFlowCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: DeleteWhatsAppFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatsAppMessageMediaCommand}
   */
  deleteWhatsAppMessageMedia(
    args: DeleteWhatsAppMessageMediaCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<DeleteWhatsAppMessageMediaCommandOutput>;
  deleteWhatsAppMessageMedia(
    args: DeleteWhatsAppMessageMediaCommandInput,
    cb: (err: any, data?: DeleteWhatsAppMessageMediaCommandOutput) => void
  ): void;
  deleteWhatsAppMessageMedia(
    args: DeleteWhatsAppMessageMediaCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: DeleteWhatsAppMessageMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatsAppMessageTemplateCommand}
   */
  deleteWhatsAppMessageTemplate(
    args: DeleteWhatsAppMessageTemplateCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<DeleteWhatsAppMessageTemplateCommandOutput>;
  deleteWhatsAppMessageTemplate(
    args: DeleteWhatsAppMessageTemplateCommandInput,
    cb: (err: any, data?: DeleteWhatsAppMessageTemplateCommandOutput) => void
  ): void;
  deleteWhatsAppMessageTemplate(
    args: DeleteWhatsAppMessageTemplateCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: DeleteWhatsAppMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprecateWhatsAppFlowCommand}
   */
  deprecateWhatsAppFlow(
    args: DeprecateWhatsAppFlowCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<DeprecateWhatsAppFlowCommandOutput>;
  deprecateWhatsAppFlow(
    args: DeprecateWhatsAppFlowCommandInput,
    cb: (err: any, data?: DeprecateWhatsAppFlowCommandOutput) => void
  ): void;
  deprecateWhatsAppFlow(
    args: DeprecateWhatsAppFlowCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: DeprecateWhatsAppFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWhatsAppBusinessAccountCommand}
   */
  disassociateWhatsAppBusinessAccount(
    args: DisassociateWhatsAppBusinessAccountCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<DisassociateWhatsAppBusinessAccountCommandOutput>;
  disassociateWhatsAppBusinessAccount(
    args: DisassociateWhatsAppBusinessAccountCommandInput,
    cb: (err: any, data?: DisassociateWhatsAppBusinessAccountCommandOutput) => void
  ): void;
  disassociateWhatsAppBusinessAccount(
    args: DisassociateWhatsAppBusinessAccountCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: DisassociateWhatsAppBusinessAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkedWhatsAppBusinessAccountCommand}
   */
  getLinkedWhatsAppBusinessAccount(
    args: GetLinkedWhatsAppBusinessAccountCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<GetLinkedWhatsAppBusinessAccountCommandOutput>;
  getLinkedWhatsAppBusinessAccount(
    args: GetLinkedWhatsAppBusinessAccountCommandInput,
    cb: (err: any, data?: GetLinkedWhatsAppBusinessAccountCommandOutput) => void
  ): void;
  getLinkedWhatsAppBusinessAccount(
    args: GetLinkedWhatsAppBusinessAccountCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: GetLinkedWhatsAppBusinessAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommand}
   */
  getLinkedWhatsAppBusinessAccountPhoneNumber(
    args: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput>;
  getLinkedWhatsAppBusinessAccountPhoneNumber(
    args: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
    cb: (err: any, data?: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput) => void
  ): void;
  getLinkedWhatsAppBusinessAccountPhoneNumber(
    args: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWhatsAppBusinessPublicKeyCommand}
   */
  getWhatsAppBusinessPublicKey(
    args: GetWhatsAppBusinessPublicKeyCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<GetWhatsAppBusinessPublicKeyCommandOutput>;
  getWhatsAppBusinessPublicKey(
    args: GetWhatsAppBusinessPublicKeyCommandInput,
    cb: (err: any, data?: GetWhatsAppBusinessPublicKeyCommandOutput) => void
  ): void;
  getWhatsAppBusinessPublicKey(
    args: GetWhatsAppBusinessPublicKeyCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: GetWhatsAppBusinessPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWhatsAppCallPermissionCommand}
   */
  getWhatsAppCallPermission(
    args: GetWhatsAppCallPermissionCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<GetWhatsAppCallPermissionCommandOutput>;
  getWhatsAppCallPermission(
    args: GetWhatsAppCallPermissionCommandInput,
    cb: (err: any, data?: GetWhatsAppCallPermissionCommandOutput) => void
  ): void;
  getWhatsAppCallPermission(
    args: GetWhatsAppCallPermissionCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: GetWhatsAppCallPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWhatsAppFlowCommand}
   */
  getWhatsAppFlow(
    args: GetWhatsAppFlowCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<GetWhatsAppFlowCommandOutput>;
  getWhatsAppFlow(
    args: GetWhatsAppFlowCommandInput,
    cb: (err: any, data?: GetWhatsAppFlowCommandOutput) => void
  ): void;
  getWhatsAppFlow(
    args: GetWhatsAppFlowCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: GetWhatsAppFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWhatsAppFlowPreviewCommand}
   */
  getWhatsAppFlowPreview(
    args: GetWhatsAppFlowPreviewCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<GetWhatsAppFlowPreviewCommandOutput>;
  getWhatsAppFlowPreview(
    args: GetWhatsAppFlowPreviewCommandInput,
    cb: (err: any, data?: GetWhatsAppFlowPreviewCommandOutput) => void
  ): void;
  getWhatsAppFlowPreview(
    args: GetWhatsAppFlowPreviewCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: GetWhatsAppFlowPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWhatsAppMessageMediaCommand}
   */
  getWhatsAppMessageMedia(
    args: GetWhatsAppMessageMediaCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<GetWhatsAppMessageMediaCommandOutput>;
  getWhatsAppMessageMedia(
    args: GetWhatsAppMessageMediaCommandInput,
    cb: (err: any, data?: GetWhatsAppMessageMediaCommandOutput) => void
  ): void;
  getWhatsAppMessageMedia(
    args: GetWhatsAppMessageMediaCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: GetWhatsAppMessageMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWhatsAppMessageTemplateCommand}
   */
  getWhatsAppMessageTemplate(
    args: GetWhatsAppMessageTemplateCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<GetWhatsAppMessageTemplateCommandOutput>;
  getWhatsAppMessageTemplate(
    args: GetWhatsAppMessageTemplateCommandInput,
    cb: (err: any, data?: GetWhatsAppMessageTemplateCommandOutput) => void
  ): void;
  getWhatsAppMessageTemplate(
    args: GetWhatsAppMessageTemplateCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: GetWhatsAppMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinkedWhatsAppBusinessAccountsCommand}
   */
  listLinkedWhatsAppBusinessAccounts(): Promise<ListLinkedWhatsAppBusinessAccountsCommandOutput>;
  listLinkedWhatsAppBusinessAccounts(
    args: ListLinkedWhatsAppBusinessAccountsCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<ListLinkedWhatsAppBusinessAccountsCommandOutput>;
  listLinkedWhatsAppBusinessAccounts(
    args: ListLinkedWhatsAppBusinessAccountsCommandInput,
    cb: (err: any, data?: ListLinkedWhatsAppBusinessAccountsCommandOutput) => void
  ): void;
  listLinkedWhatsAppBusinessAccounts(
    args: ListLinkedWhatsAppBusinessAccountsCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: ListLinkedWhatsAppBusinessAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWhatsAppFlowAssetsCommand}
   */
  listWhatsAppFlowAssets(
    args: ListWhatsAppFlowAssetsCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<ListWhatsAppFlowAssetsCommandOutput>;
  listWhatsAppFlowAssets(
    args: ListWhatsAppFlowAssetsCommandInput,
    cb: (err: any, data?: ListWhatsAppFlowAssetsCommandOutput) => void
  ): void;
  listWhatsAppFlowAssets(
    args: ListWhatsAppFlowAssetsCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: ListWhatsAppFlowAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWhatsAppFlowsCommand}
   */
  listWhatsAppFlows(
    args: ListWhatsAppFlowsCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<ListWhatsAppFlowsCommandOutput>;
  listWhatsAppFlows(
    args: ListWhatsAppFlowsCommandInput,
    cb: (err: any, data?: ListWhatsAppFlowsCommandOutput) => void
  ): void;
  listWhatsAppFlows(
    args: ListWhatsAppFlowsCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: ListWhatsAppFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWhatsAppMessageTemplatesCommand}
   */
  listWhatsAppMessageTemplates(
    args: ListWhatsAppMessageTemplatesCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<ListWhatsAppMessageTemplatesCommandOutput>;
  listWhatsAppMessageTemplates(
    args: ListWhatsAppMessageTemplatesCommandInput,
    cb: (err: any, data?: ListWhatsAppMessageTemplatesCommandOutput) => void
  ): void;
  listWhatsAppMessageTemplates(
    args: ListWhatsAppMessageTemplatesCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: ListWhatsAppMessageTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWhatsAppTemplateLibraryCommand}
   */
  listWhatsAppTemplateLibrary(
    args: ListWhatsAppTemplateLibraryCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<ListWhatsAppTemplateLibraryCommandOutput>;
  listWhatsAppTemplateLibrary(
    args: ListWhatsAppTemplateLibraryCommandInput,
    cb: (err: any, data?: ListWhatsAppTemplateLibraryCommandOutput) => void
  ): void;
  listWhatsAppTemplateLibrary(
    args: ListWhatsAppTemplateLibraryCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: ListWhatsAppTemplateLibraryCommandOutput) => void
  ): void;

  /**
   * @see {@link PostWhatsAppMessageMediaCommand}
   */
  postWhatsAppMessageMedia(
    args: PostWhatsAppMessageMediaCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<PostWhatsAppMessageMediaCommandOutput>;
  postWhatsAppMessageMedia(
    args: PostWhatsAppMessageMediaCommandInput,
    cb: (err: any, data?: PostWhatsAppMessageMediaCommandOutput) => void
  ): void;
  postWhatsAppMessageMedia(
    args: PostWhatsAppMessageMediaCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: PostWhatsAppMessageMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishWhatsAppFlowCommand}
   */
  publishWhatsAppFlow(
    args: PublishWhatsAppFlowCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<PublishWhatsAppFlowCommandOutput>;
  publishWhatsAppFlow(
    args: PublishWhatsAppFlowCommandInput,
    cb: (err: any, data?: PublishWhatsAppFlowCommandOutput) => void
  ): void;
  publishWhatsAppFlow(
    args: PublishWhatsAppFlowCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: PublishWhatsAppFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWhatsAppBusinessAccountEventDestinationsCommand}
   */
  putWhatsAppBusinessAccountEventDestinations(
    args: PutWhatsAppBusinessAccountEventDestinationsCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<PutWhatsAppBusinessAccountEventDestinationsCommandOutput>;
  putWhatsAppBusinessAccountEventDestinations(
    args: PutWhatsAppBusinessAccountEventDestinationsCommandInput,
    cb: (err: any, data?: PutWhatsAppBusinessAccountEventDestinationsCommandOutput) => void
  ): void;
  putWhatsAppBusinessAccountEventDestinations(
    args: PutWhatsAppBusinessAccountEventDestinationsCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: PutWhatsAppBusinessAccountEventDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWhatsAppBusinessPublicKeyCommand}
   */
  putWhatsAppBusinessPublicKey(
    args: PutWhatsAppBusinessPublicKeyCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<PutWhatsAppBusinessPublicKeyCommandOutput>;
  putWhatsAppBusinessPublicKey(
    args: PutWhatsAppBusinessPublicKeyCommandInput,
    cb: (err: any, data?: PutWhatsAppBusinessPublicKeyCommandOutput) => void
  ): void;
  putWhatsAppBusinessPublicKey(
    args: PutWhatsAppBusinessPublicKeyCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: PutWhatsAppBusinessPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link SendWhatsAppCallEventCommand}
   */
  sendWhatsAppCallEvent(
    args: SendWhatsAppCallEventCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<SendWhatsAppCallEventCommandOutput>;
  sendWhatsAppCallEvent(
    args: SendWhatsAppCallEventCommandInput,
    cb: (err: any, data?: SendWhatsAppCallEventCommandOutput) => void
  ): void;
  sendWhatsAppCallEvent(
    args: SendWhatsAppCallEventCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: SendWhatsAppCallEventCommandOutput) => void
  ): void;

  /**
   * @see {@link SendWhatsAppConversionEventCommand}
   */
  sendWhatsAppConversionEvent(
    args: SendWhatsAppConversionEventCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<SendWhatsAppConversionEventCommandOutput>;
  sendWhatsAppConversionEvent(
    args: SendWhatsAppConversionEventCommandInput,
    cb: (err: any, data?: SendWhatsAppConversionEventCommandOutput) => void
  ): void;
  sendWhatsAppConversionEvent(
    args: SendWhatsAppConversionEventCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: SendWhatsAppConversionEventCommandOutput) => void
  ): void;

  /**
   * @see {@link SendWhatsAppMessageCommand}
   */
  sendWhatsAppMessage(
    args: SendWhatsAppMessageCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<SendWhatsAppMessageCommandOutput>;
  sendWhatsAppMessage(
    args: SendWhatsAppMessageCommandInput,
    cb: (err: any, data?: SendWhatsAppMessageCommandOutput) => void
  ): void;
  sendWhatsAppMessage(
    args: SendWhatsAppMessageCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: SendWhatsAppMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommand}
   */
  updateLinkedWhatsAppBusinessAccountPhoneNumber(
    args: UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput>;
  updateLinkedWhatsAppBusinessAccountPhoneNumber(
    args: UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
    cb: (err: any, data?: UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput) => void
  ): void;
  updateLinkedWhatsAppBusinessAccountPhoneNumber(
    args: UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWhatsAppFlowCommand}
   */
  updateWhatsAppFlow(
    args: UpdateWhatsAppFlowCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<UpdateWhatsAppFlowCommandOutput>;
  updateWhatsAppFlow(
    args: UpdateWhatsAppFlowCommandInput,
    cb: (err: any, data?: UpdateWhatsAppFlowCommandOutput) => void
  ): void;
  updateWhatsAppFlow(
    args: UpdateWhatsAppFlowCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: UpdateWhatsAppFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWhatsAppFlowAssetsCommand}
   */
  updateWhatsAppFlowAssets(
    args: UpdateWhatsAppFlowAssetsCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<UpdateWhatsAppFlowAssetsCommandOutput>;
  updateWhatsAppFlowAssets(
    args: UpdateWhatsAppFlowAssetsCommandInput,
    cb: (err: any, data?: UpdateWhatsAppFlowAssetsCommandOutput) => void
  ): void;
  updateWhatsAppFlowAssets(
    args: UpdateWhatsAppFlowAssetsCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: UpdateWhatsAppFlowAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWhatsAppMessageTemplateCommand}
   */
  updateWhatsAppMessageTemplate(
    args: UpdateWhatsAppMessageTemplateCommandInput,
    options?: SocialMessagingRequestOptions
  ): Promise<UpdateWhatsAppMessageTemplateCommandOutput>;
  updateWhatsAppMessageTemplate(
    args: UpdateWhatsAppMessageTemplateCommandInput,
    cb: (err: any, data?: UpdateWhatsAppMessageTemplateCommandOutput) => void
  ): void;
  updateWhatsAppMessageTemplate(
    args: UpdateWhatsAppMessageTemplateCommandInput,
    options: SocialMessagingRequestOptions,
    cb: (err: any, data?: UpdateWhatsAppMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinkedWhatsAppBusinessAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLinkedWhatsAppBusinessAccountsCommandOutput}.
   */
  paginateListLinkedWhatsAppBusinessAccounts(
    args?: ListLinkedWhatsAppBusinessAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLinkedWhatsAppBusinessAccountsCommandOutput>;

  /**
   * @see {@link ListWhatsAppFlowAssetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWhatsAppFlowAssetsCommandOutput}.
   */
  paginateListWhatsAppFlowAssets(
    args: ListWhatsAppFlowAssetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWhatsAppFlowAssetsCommandOutput>;

  /**
   * @see {@link ListWhatsAppFlowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWhatsAppFlowsCommandOutput}.
   */
  paginateListWhatsAppFlows(
    args: ListWhatsAppFlowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWhatsAppFlowsCommandOutput>;

  /**
   * @see {@link ListWhatsAppMessageTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWhatsAppMessageTemplatesCommandOutput}.
   */
  paginateListWhatsAppMessageTemplates(
    args: ListWhatsAppMessageTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWhatsAppMessageTemplatesCommandOutput>;

  /**
   * @see {@link ListWhatsAppTemplateLibraryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWhatsAppTemplateLibraryCommandOutput}.
   */
  paginateListWhatsAppTemplateLibrary(
    args: ListWhatsAppTemplateLibraryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWhatsAppTemplateLibraryCommandOutput>;
}

/**
 * <p>
 *             <i>Amazon Web Services End User Messaging Social</i>, also referred to as Social messaging, is a messaging service that enables
 *          application developers to incorporate WhatsApp into their existing workflows. The <i>Amazon Web Services End User Messaging Social API</i> provides information about the
 *          <i>Amazon Web Services End User Messaging Social API</i> resources, including supported HTTP methods, parameters, and schemas.</p>
 *          <p>The <i>Amazon Web Services End User Messaging Social API</i> provides programmatic access to options that are unique to the WhatsApp Business Platform.</p>
 *          <p>If you're new to the <i>Amazon Web Services End User Messaging Social API</i>, it's also helpful to review <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html">What is
 *                Amazon Web Services End User Messaging Social</a> in the <i>Amazon Web Services End User Messaging Social User Guide</i>. The
 *          <i>Amazon Web Services End User Messaging Social User Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use
 *          <i>Amazon Web Services End User Messaging Social API</i> features programmatically and how to integrate functionality into applications.
 *          The guide also provides key information, such as integration with other Amazon Web Services
 *          services, and the quotas that apply to use of the service.</p>
 *          <p>
 *             <b>Regional availability</b>
 *          </p>
 *          <p>The <i>Amazon Web Services End User Messaging Social API</i> is available across several Amazon Web Services Regions and it provides a dedicated endpoint for each of these Regions. For a list of
 *          all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">Amazon Web Services Service Endpoints</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/end-user-messaging.html">Amazon Web Services End User Messaging endpoints and quotas</a> in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing
 *                Amazon Web Services Regions</a> in the Amazon Web Services General
 *          Reference.</p>
 *          <p>In each Region, Amazon Web Services maintains multiple Availability Zones. These
 *          Availability Zones are physically isolated from each other, but are united by private,
 *          low-latency, high-throughput, and highly redundant network connections. These Availability
 *          Zones enable us to provide very high levels of availability and redundancy, while also
 *          minimizing latency. To learn more about the number of Availability Zones that are available
 *          in each Region, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/">Amazon Web Services Global Infrastructure.</a>
 *          </p>
 * @public
 */
export class SocialMessaging extends SocialMessagingClient implements SocialMessaging {}
createAggregatedClient(commands, SocialMessaging, { paginators });
