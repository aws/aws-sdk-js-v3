// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchCreateCampaignAssetCommandInput,
  type BatchCreateCampaignAssetCommandOutput,
  BatchCreateCampaignAssetCommand,
} from "./commands/BatchCreateCampaignAssetCommand";
import {
  type CreateCampaignCommandInput,
  type CreateCampaignCommandOutput,
  CreateCampaignCommand,
} from "./commands/CreateCampaignCommand";
import {
  type CreateSocialConnectionAuthorizationUrlCommandInput,
  type CreateSocialConnectionAuthorizationUrlCommandOutput,
  CreateSocialConnectionAuthorizationUrlCommand,
} from "./commands/CreateSocialConnectionAuthorizationUrlCommand";
import {
  type DeactivateCampaignAssetCommandInput,
  type DeactivateCampaignAssetCommandOutput,
  DeactivateCampaignAssetCommand,
} from "./commands/DeactivateCampaignAssetCommand";
import {
  type DeleteCampaignAssetCommandInput,
  type DeleteCampaignAssetCommandOutput,
  DeleteCampaignAssetCommand,
} from "./commands/DeleteCampaignAssetCommand";
import {
  type DeleteCampaignCommandInput,
  type DeleteCampaignCommandOutput,
  DeleteCampaignCommand,
} from "./commands/DeleteCampaignCommand";
import {
  type DeleteSocialConnectionCommandInput,
  type DeleteSocialConnectionCommandOutput,
  DeleteSocialConnectionCommand,
} from "./commands/DeleteSocialConnectionCommand";
import {
  type GetCampaignAssetActivationTaskCommandInput,
  type GetCampaignAssetActivationTaskCommandOutput,
  GetCampaignAssetActivationTaskCommand,
} from "./commands/GetCampaignAssetActivationTaskCommand";
import {
  type GetCampaignAssetCommandInput,
  type GetCampaignAssetCommandOutput,
  GetCampaignAssetCommand,
} from "./commands/GetCampaignAssetCommand";
import {
  type GetCampaignAssetExportTaskCommandInput,
  type GetCampaignAssetExportTaskCommandOutput,
  GetCampaignAssetExportTaskCommand,
} from "./commands/GetCampaignAssetExportTaskCommand";
import {
  type GetCampaignCommandInput,
  type GetCampaignCommandOutput,
  GetCampaignCommand,
} from "./commands/GetCampaignCommand";
import {
  type GetCampaignTemplateCommandInput,
  type GetCampaignTemplateCommandOutput,
  GetCampaignTemplateCommand,
} from "./commands/GetCampaignTemplateCommand";
import {
  type ListCampaignAssetsCommandInput,
  type ListCampaignAssetsCommandOutput,
  ListCampaignAssetsCommand,
} from "./commands/ListCampaignAssetsCommand";
import {
  type ListCampaignsCommandInput,
  type ListCampaignsCommandOutput,
  ListCampaignsCommand,
} from "./commands/ListCampaignsCommand";
import {
  type ListSocialConnectionsCommandInput,
  type ListSocialConnectionsCommandOutput,
  ListSocialConnectionsCommand,
} from "./commands/ListSocialConnectionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type SearchCampaignTemplatesCommandInput,
  type SearchCampaignTemplatesCommandOutput,
  SearchCampaignTemplatesCommand,
} from "./commands/SearchCampaignTemplatesCommand";
import {
  type StartCampaignAssetActivationTaskCommandInput,
  type StartCampaignAssetActivationTaskCommandOutput,
  StartCampaignAssetActivationTaskCommand,
} from "./commands/StartCampaignAssetActivationTaskCommand";
import {
  type StartCampaignAssetExportTaskCommandInput,
  type StartCampaignAssetExportTaskCommandOutput,
  StartCampaignAssetExportTaskCommand,
} from "./commands/StartCampaignAssetExportTaskCommand";
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
  type UpdateCampaignAssetCommandInput,
  type UpdateCampaignAssetCommandOutput,
  UpdateCampaignAssetCommand,
} from "./commands/UpdateCampaignAssetCommand";
import {
  type UpdateCampaignCommandInput,
  type UpdateCampaignCommandOutput,
  UpdateCampaignCommand,
} from "./commands/UpdateCampaignCommand";
import { paginateListCampaignAssets } from "./pagination/ListCampaignAssetsPaginator";
import { paginateListCampaigns } from "./pagination/ListCampaignsPaginator";
import { paginateListSocialConnections } from "./pagination/ListSocialConnectionsPaginator";
import { paginateSearchCampaignTemplates } from "./pagination/SearchCampaignTemplatesPaginator";
import { PartnerCentralMarketingClient } from "./PartnerCentralMarketingClient";

const commands = {
  BatchCreateCampaignAssetCommand,
  CreateCampaignCommand,
  CreateSocialConnectionAuthorizationUrlCommand,
  DeactivateCampaignAssetCommand,
  DeleteCampaignCommand,
  DeleteCampaignAssetCommand,
  DeleteSocialConnectionCommand,
  GetCampaignCommand,
  GetCampaignAssetCommand,
  GetCampaignAssetActivationTaskCommand,
  GetCampaignAssetExportTaskCommand,
  GetCampaignTemplateCommand,
  ListCampaignAssetsCommand,
  ListCampaignsCommand,
  ListSocialConnectionsCommand,
  ListTagsForResourceCommand,
  SearchCampaignTemplatesCommand,
  StartCampaignAssetActivationTaskCommand,
  StartCampaignAssetExportTaskCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCampaignCommand,
  UpdateCampaignAssetCommand,
};
const paginators = {
  paginateListCampaignAssets,
  paginateListCampaigns,
  paginateListSocialConnections,
  paginateSearchCampaignTemplates,
};

/**
 * @public
 */
export interface PartnerCentralMarketingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface PartnerCentralMarketing {
  /**
   * @see {@link BatchCreateCampaignAssetCommand}
   */
  batchCreateCampaignAsset(
    args: BatchCreateCampaignAssetCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<BatchCreateCampaignAssetCommandOutput>;
  batchCreateCampaignAsset(
    args: BatchCreateCampaignAssetCommandInput,
    cb: (err: any, data?: BatchCreateCampaignAssetCommandOutput) => void
  ): void;
  batchCreateCampaignAsset(
    args: BatchCreateCampaignAssetCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: BatchCreateCampaignAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCampaignCommand}
   */
  createCampaign(
    args: CreateCampaignCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<CreateCampaignCommandOutput>;
  createCampaign(
    args: CreateCampaignCommandInput,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;
  createCampaign(
    args: CreateCampaignCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSocialConnectionAuthorizationUrlCommand}
   */
  createSocialConnectionAuthorizationUrl(
    args: CreateSocialConnectionAuthorizationUrlCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<CreateSocialConnectionAuthorizationUrlCommandOutput>;
  createSocialConnectionAuthorizationUrl(
    args: CreateSocialConnectionAuthorizationUrlCommandInput,
    cb: (err: any, data?: CreateSocialConnectionAuthorizationUrlCommandOutput) => void
  ): void;
  createSocialConnectionAuthorizationUrl(
    args: CreateSocialConnectionAuthorizationUrlCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: CreateSocialConnectionAuthorizationUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateCampaignAssetCommand}
   */
  deactivateCampaignAsset(
    args: DeactivateCampaignAssetCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<DeactivateCampaignAssetCommandOutput>;
  deactivateCampaignAsset(
    args: DeactivateCampaignAssetCommandInput,
    cb: (err: any, data?: DeactivateCampaignAssetCommandOutput) => void
  ): void;
  deactivateCampaignAsset(
    args: DeactivateCampaignAssetCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: DeactivateCampaignAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCampaignCommand}
   */
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<DeleteCampaignCommandOutput>;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCampaignAssetCommand}
   */
  deleteCampaignAsset(
    args: DeleteCampaignAssetCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<DeleteCampaignAssetCommandOutput>;
  deleteCampaignAsset(
    args: DeleteCampaignAssetCommandInput,
    cb: (err: any, data?: DeleteCampaignAssetCommandOutput) => void
  ): void;
  deleteCampaignAsset(
    args: DeleteCampaignAssetCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: DeleteCampaignAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSocialConnectionCommand}
   */
  deleteSocialConnection(
    args: DeleteSocialConnectionCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<DeleteSocialConnectionCommandOutput>;
  deleteSocialConnection(
    args: DeleteSocialConnectionCommandInput,
    cb: (err: any, data?: DeleteSocialConnectionCommandOutput) => void
  ): void;
  deleteSocialConnection(
    args: DeleteSocialConnectionCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: DeleteSocialConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignCommand}
   */
  getCampaign(
    args: GetCampaignCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<GetCampaignCommandOutput>;
  getCampaign(
    args: GetCampaignCommandInput,
    cb: (err: any, data?: GetCampaignCommandOutput) => void
  ): void;
  getCampaign(
    args: GetCampaignCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: GetCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignAssetCommand}
   */
  getCampaignAsset(
    args: GetCampaignAssetCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<GetCampaignAssetCommandOutput>;
  getCampaignAsset(
    args: GetCampaignAssetCommandInput,
    cb: (err: any, data?: GetCampaignAssetCommandOutput) => void
  ): void;
  getCampaignAsset(
    args: GetCampaignAssetCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: GetCampaignAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignAssetActivationTaskCommand}
   */
  getCampaignAssetActivationTask(
    args: GetCampaignAssetActivationTaskCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<GetCampaignAssetActivationTaskCommandOutput>;
  getCampaignAssetActivationTask(
    args: GetCampaignAssetActivationTaskCommandInput,
    cb: (err: any, data?: GetCampaignAssetActivationTaskCommandOutput) => void
  ): void;
  getCampaignAssetActivationTask(
    args: GetCampaignAssetActivationTaskCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: GetCampaignAssetActivationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignAssetExportTaskCommand}
   */
  getCampaignAssetExportTask(
    args: GetCampaignAssetExportTaskCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<GetCampaignAssetExportTaskCommandOutput>;
  getCampaignAssetExportTask(
    args: GetCampaignAssetExportTaskCommandInput,
    cb: (err: any, data?: GetCampaignAssetExportTaskCommandOutput) => void
  ): void;
  getCampaignAssetExportTask(
    args: GetCampaignAssetExportTaskCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: GetCampaignAssetExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignTemplateCommand}
   */
  getCampaignTemplate(
    args: GetCampaignTemplateCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<GetCampaignTemplateCommandOutput>;
  getCampaignTemplate(
    args: GetCampaignTemplateCommandInput,
    cb: (err: any, data?: GetCampaignTemplateCommandOutput) => void
  ): void;
  getCampaignTemplate(
    args: GetCampaignTemplateCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: GetCampaignTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCampaignAssetsCommand}
   */
  listCampaignAssets(
    args: ListCampaignAssetsCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<ListCampaignAssetsCommandOutput>;
  listCampaignAssets(
    args: ListCampaignAssetsCommandInput,
    cb: (err: any, data?: ListCampaignAssetsCommandOutput) => void
  ): void;
  listCampaignAssets(
    args: ListCampaignAssetsCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: ListCampaignAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCampaignsCommand}
   */
  listCampaigns(
    args: ListCampaignsCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<ListCampaignsCommandOutput>;
  listCampaigns(
    args: ListCampaignsCommandInput,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;
  listCampaigns(
    args: ListCampaignsCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSocialConnectionsCommand}
   */
  listSocialConnections(
    args: ListSocialConnectionsCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<ListSocialConnectionsCommandOutput>;
  listSocialConnections(
    args: ListSocialConnectionsCommandInput,
    cb: (err: any, data?: ListSocialConnectionsCommandOutput) => void
  ): void;
  listSocialConnections(
    args: ListSocialConnectionsCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: ListSocialConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchCampaignTemplatesCommand}
   */
  searchCampaignTemplates(
    args: SearchCampaignTemplatesCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<SearchCampaignTemplatesCommandOutput>;
  searchCampaignTemplates(
    args: SearchCampaignTemplatesCommandInput,
    cb: (err: any, data?: SearchCampaignTemplatesCommandOutput) => void
  ): void;
  searchCampaignTemplates(
    args: SearchCampaignTemplatesCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: SearchCampaignTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCampaignAssetActivationTaskCommand}
   */
  startCampaignAssetActivationTask(
    args: StartCampaignAssetActivationTaskCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<StartCampaignAssetActivationTaskCommandOutput>;
  startCampaignAssetActivationTask(
    args: StartCampaignAssetActivationTaskCommandInput,
    cb: (err: any, data?: StartCampaignAssetActivationTaskCommandOutput) => void
  ): void;
  startCampaignAssetActivationTask(
    args: StartCampaignAssetActivationTaskCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: StartCampaignAssetActivationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCampaignAssetExportTaskCommand}
   */
  startCampaignAssetExportTask(
    args: StartCampaignAssetExportTaskCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<StartCampaignAssetExportTaskCommandOutput>;
  startCampaignAssetExportTask(
    args: StartCampaignAssetExportTaskCommandInput,
    cb: (err: any, data?: StartCampaignAssetExportTaskCommandOutput) => void
  ): void;
  startCampaignAssetExportTask(
    args: StartCampaignAssetExportTaskCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: StartCampaignAssetExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignCommand}
   */
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<UpdateCampaignCommandOutput>;
  updateCampaign(
    args: UpdateCampaignCommandInput,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignAssetCommand}
   */
  updateCampaignAsset(
    args: UpdateCampaignAssetCommandInput,
    options?: PartnerCentralMarketingRequestOptions
  ): Promise<UpdateCampaignAssetCommandOutput>;
  updateCampaignAsset(
    args: UpdateCampaignAssetCommandInput,
    cb: (err: any, data?: UpdateCampaignAssetCommandOutput) => void
  ): void;
  updateCampaignAsset(
    args: UpdateCampaignAssetCommandInput,
    options: PartnerCentralMarketingRequestOptions,
    cb: (err: any, data?: UpdateCampaignAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCampaignAssetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCampaignAssetsCommandOutput}.
   */
  paginateListCampaignAssets(
    args: ListCampaignAssetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCampaignAssetsCommandOutput>;

  /**
   * @see {@link ListCampaignsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCampaignsCommandOutput}.
   */
  paginateListCampaigns(
    args: ListCampaignsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCampaignsCommandOutput>;

  /**
   * @see {@link ListSocialConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSocialConnectionsCommandOutput}.
   */
  paginateListSocialConnections(
    args: ListSocialConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSocialConnectionsCommandOutput>;

  /**
   * @see {@link SearchCampaignTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchCampaignTemplatesCommandOutput}.
   */
  paginateSearchCampaignTemplates(
    args: SearchCampaignTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchCampaignTemplatesCommandOutput>;
}

/**
 * AWS Partner Central Marketing API for campaign and asset management.
 * @public
 */
export class PartnerCentralMarketing extends PartnerCentralMarketingClient implements PartnerCentralMarketing {}
createAggregatedClient(commands, PartnerCentralMarketing, { paginators });
