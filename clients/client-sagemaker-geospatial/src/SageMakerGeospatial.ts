// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type DeleteEarthObservationJobCommandInput,
  type DeleteEarthObservationJobCommandOutput,
  DeleteEarthObservationJobCommand,
} from "./commands/DeleteEarthObservationJobCommand";
import {
  type DeleteVectorEnrichmentJobCommandInput,
  type DeleteVectorEnrichmentJobCommandOutput,
  DeleteVectorEnrichmentJobCommand,
} from "./commands/DeleteVectorEnrichmentJobCommand";
import {
  type ExportEarthObservationJobCommandInput,
  type ExportEarthObservationJobCommandOutput,
  ExportEarthObservationJobCommand,
} from "./commands/ExportEarthObservationJobCommand";
import {
  type ExportVectorEnrichmentJobCommandInput,
  type ExportVectorEnrichmentJobCommandOutput,
  ExportVectorEnrichmentJobCommand,
} from "./commands/ExportVectorEnrichmentJobCommand";
import {
  type GetEarthObservationJobCommandInput,
  type GetEarthObservationJobCommandOutput,
  GetEarthObservationJobCommand,
} from "./commands/GetEarthObservationJobCommand";
import {
  type GetRasterDataCollectionCommandInput,
  type GetRasterDataCollectionCommandOutput,
  GetRasterDataCollectionCommand,
} from "./commands/GetRasterDataCollectionCommand";
import { type GetTileCommandInput, type GetTileCommandOutput, GetTileCommand } from "./commands/GetTileCommand";
import {
  type GetVectorEnrichmentJobCommandInput,
  type GetVectorEnrichmentJobCommandOutput,
  GetVectorEnrichmentJobCommand,
} from "./commands/GetVectorEnrichmentJobCommand";
import {
  type ListEarthObservationJobsCommandInput,
  type ListEarthObservationJobsCommandOutput,
  ListEarthObservationJobsCommand,
} from "./commands/ListEarthObservationJobsCommand";
import {
  type ListRasterDataCollectionsCommandInput,
  type ListRasterDataCollectionsCommandOutput,
  ListRasterDataCollectionsCommand,
} from "./commands/ListRasterDataCollectionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListVectorEnrichmentJobsCommandInput,
  type ListVectorEnrichmentJobsCommandOutput,
  ListVectorEnrichmentJobsCommand,
} from "./commands/ListVectorEnrichmentJobsCommand";
import {
  type SearchRasterDataCollectionCommandInput,
  type SearchRasterDataCollectionCommandOutput,
  SearchRasterDataCollectionCommand,
} from "./commands/SearchRasterDataCollectionCommand";
import {
  type StartEarthObservationJobCommandInput,
  type StartEarthObservationJobCommandOutput,
  StartEarthObservationJobCommand,
} from "./commands/StartEarthObservationJobCommand";
import {
  type StartVectorEnrichmentJobCommandInput,
  type StartVectorEnrichmentJobCommandOutput,
  StartVectorEnrichmentJobCommand,
} from "./commands/StartVectorEnrichmentJobCommand";
import {
  type StopEarthObservationJobCommandInput,
  type StopEarthObservationJobCommandOutput,
  StopEarthObservationJobCommand,
} from "./commands/StopEarthObservationJobCommand";
import {
  type StopVectorEnrichmentJobCommandInput,
  type StopVectorEnrichmentJobCommandOutput,
  StopVectorEnrichmentJobCommand,
} from "./commands/StopVectorEnrichmentJobCommand";
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
import { paginateListEarthObservationJobs } from "./pagination/ListEarthObservationJobsPaginator";
import { paginateListRasterDataCollections } from "./pagination/ListRasterDataCollectionsPaginator";
import { paginateListVectorEnrichmentJobs } from "./pagination/ListVectorEnrichmentJobsPaginator";
import { paginateSearchRasterDataCollection } from "./pagination/SearchRasterDataCollectionPaginator";
import { SageMakerGeospatialClient } from "./SageMakerGeospatialClient";

const commands = {
  DeleteEarthObservationJobCommand,
  DeleteVectorEnrichmentJobCommand,
  ExportEarthObservationJobCommand,
  ExportVectorEnrichmentJobCommand,
  GetEarthObservationJobCommand,
  GetRasterDataCollectionCommand,
  GetTileCommand,
  GetVectorEnrichmentJobCommand,
  ListEarthObservationJobsCommand,
  ListRasterDataCollectionsCommand,
  ListTagsForResourceCommand,
  ListVectorEnrichmentJobsCommand,
  SearchRasterDataCollectionCommand,
  StartEarthObservationJobCommand,
  StartVectorEnrichmentJobCommand,
  StopEarthObservationJobCommand,
  StopVectorEnrichmentJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListEarthObservationJobs,
  paginateListRasterDataCollections,
  paginateListVectorEnrichmentJobs,
  paginateSearchRasterDataCollection,
};

export interface SageMakerGeospatial {
  /**
   * @see {@link DeleteEarthObservationJobCommand}
   */
  deleteEarthObservationJob(
    args: DeleteEarthObservationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEarthObservationJobCommandOutput>;
  deleteEarthObservationJob(
    args: DeleteEarthObservationJobCommandInput,
    cb: (err: any, data?: DeleteEarthObservationJobCommandOutput) => void
  ): void;
  deleteEarthObservationJob(
    args: DeleteEarthObservationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEarthObservationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVectorEnrichmentJobCommand}
   */
  deleteVectorEnrichmentJob(
    args: DeleteVectorEnrichmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVectorEnrichmentJobCommandOutput>;
  deleteVectorEnrichmentJob(
    args: DeleteVectorEnrichmentJobCommandInput,
    cb: (err: any, data?: DeleteVectorEnrichmentJobCommandOutput) => void
  ): void;
  deleteVectorEnrichmentJob(
    args: DeleteVectorEnrichmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVectorEnrichmentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportEarthObservationJobCommand}
   */
  exportEarthObservationJob(
    args: ExportEarthObservationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportEarthObservationJobCommandOutput>;
  exportEarthObservationJob(
    args: ExportEarthObservationJobCommandInput,
    cb: (err: any, data?: ExportEarthObservationJobCommandOutput) => void
  ): void;
  exportEarthObservationJob(
    args: ExportEarthObservationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportEarthObservationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportVectorEnrichmentJobCommand}
   */
  exportVectorEnrichmentJob(
    args: ExportVectorEnrichmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportVectorEnrichmentJobCommandOutput>;
  exportVectorEnrichmentJob(
    args: ExportVectorEnrichmentJobCommandInput,
    cb: (err: any, data?: ExportVectorEnrichmentJobCommandOutput) => void
  ): void;
  exportVectorEnrichmentJob(
    args: ExportVectorEnrichmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportVectorEnrichmentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEarthObservationJobCommand}
   */
  getEarthObservationJob(
    args: GetEarthObservationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEarthObservationJobCommandOutput>;
  getEarthObservationJob(
    args: GetEarthObservationJobCommandInput,
    cb: (err: any, data?: GetEarthObservationJobCommandOutput) => void
  ): void;
  getEarthObservationJob(
    args: GetEarthObservationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEarthObservationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRasterDataCollectionCommand}
   */
  getRasterDataCollection(
    args: GetRasterDataCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRasterDataCollectionCommandOutput>;
  getRasterDataCollection(
    args: GetRasterDataCollectionCommandInput,
    cb: (err: any, data?: GetRasterDataCollectionCommandOutput) => void
  ): void;
  getRasterDataCollection(
    args: GetRasterDataCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRasterDataCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTileCommand}
   */
  getTile(
    args: GetTileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTileCommandOutput>;
  getTile(
    args: GetTileCommandInput,
    cb: (err: any, data?: GetTileCommandOutput) => void
  ): void;
  getTile(
    args: GetTileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVectorEnrichmentJobCommand}
   */
  getVectorEnrichmentJob(
    args: GetVectorEnrichmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVectorEnrichmentJobCommandOutput>;
  getVectorEnrichmentJob(
    args: GetVectorEnrichmentJobCommandInput,
    cb: (err: any, data?: GetVectorEnrichmentJobCommandOutput) => void
  ): void;
  getVectorEnrichmentJob(
    args: GetVectorEnrichmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVectorEnrichmentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEarthObservationJobsCommand}
   */
  listEarthObservationJobs(): Promise<ListEarthObservationJobsCommandOutput>;
  listEarthObservationJobs(
    args: ListEarthObservationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEarthObservationJobsCommandOutput>;
  listEarthObservationJobs(
    args: ListEarthObservationJobsCommandInput,
    cb: (err: any, data?: ListEarthObservationJobsCommandOutput) => void
  ): void;
  listEarthObservationJobs(
    args: ListEarthObservationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEarthObservationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRasterDataCollectionsCommand}
   */
  listRasterDataCollections(): Promise<ListRasterDataCollectionsCommandOutput>;
  listRasterDataCollections(
    args: ListRasterDataCollectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRasterDataCollectionsCommandOutput>;
  listRasterDataCollections(
    args: ListRasterDataCollectionsCommandInput,
    cb: (err: any, data?: ListRasterDataCollectionsCommandOutput) => void
  ): void;
  listRasterDataCollections(
    args: ListRasterDataCollectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRasterDataCollectionsCommandOutput) => void
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
   * @see {@link ListVectorEnrichmentJobsCommand}
   */
  listVectorEnrichmentJobs(): Promise<ListVectorEnrichmentJobsCommandOutput>;
  listVectorEnrichmentJobs(
    args: ListVectorEnrichmentJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVectorEnrichmentJobsCommandOutput>;
  listVectorEnrichmentJobs(
    args: ListVectorEnrichmentJobsCommandInput,
    cb: (err: any, data?: ListVectorEnrichmentJobsCommandOutput) => void
  ): void;
  listVectorEnrichmentJobs(
    args: ListVectorEnrichmentJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVectorEnrichmentJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchRasterDataCollectionCommand}
   */
  searchRasterDataCollection(
    args: SearchRasterDataCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchRasterDataCollectionCommandOutput>;
  searchRasterDataCollection(
    args: SearchRasterDataCollectionCommandInput,
    cb: (err: any, data?: SearchRasterDataCollectionCommandOutput) => void
  ): void;
  searchRasterDataCollection(
    args: SearchRasterDataCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchRasterDataCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEarthObservationJobCommand}
   */
  startEarthObservationJob(
    args: StartEarthObservationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEarthObservationJobCommandOutput>;
  startEarthObservationJob(
    args: StartEarthObservationJobCommandInput,
    cb: (err: any, data?: StartEarthObservationJobCommandOutput) => void
  ): void;
  startEarthObservationJob(
    args: StartEarthObservationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEarthObservationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartVectorEnrichmentJobCommand}
   */
  startVectorEnrichmentJob(
    args: StartVectorEnrichmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVectorEnrichmentJobCommandOutput>;
  startVectorEnrichmentJob(
    args: StartVectorEnrichmentJobCommandInput,
    cb: (err: any, data?: StartVectorEnrichmentJobCommandOutput) => void
  ): void;
  startVectorEnrichmentJob(
    args: StartVectorEnrichmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVectorEnrichmentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopEarthObservationJobCommand}
   */
  stopEarthObservationJob(
    args: StopEarthObservationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEarthObservationJobCommandOutput>;
  stopEarthObservationJob(
    args: StopEarthObservationJobCommandInput,
    cb: (err: any, data?: StopEarthObservationJobCommandOutput) => void
  ): void;
  stopEarthObservationJob(
    args: StopEarthObservationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEarthObservationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopVectorEnrichmentJobCommand}
   */
  stopVectorEnrichmentJob(
    args: StopVectorEnrichmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopVectorEnrichmentJobCommandOutput>;
  stopVectorEnrichmentJob(
    args: StopVectorEnrichmentJobCommandInput,
    cb: (err: any, data?: StopVectorEnrichmentJobCommandOutput) => void
  ): void;
  stopVectorEnrichmentJob(
    args: StopVectorEnrichmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopVectorEnrichmentJobCommandOutput) => void
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
   * @see {@link ListEarthObservationJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEarthObservationJobsCommandOutput}.
   */
  paginateListEarthObservationJobs(
    args?: ListEarthObservationJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEarthObservationJobsCommandOutput>;

  /**
   * @see {@link ListRasterDataCollectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRasterDataCollectionsCommandOutput}.
   */
  paginateListRasterDataCollections(
    args?: ListRasterDataCollectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRasterDataCollectionsCommandOutput>;

  /**
   * @see {@link ListVectorEnrichmentJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVectorEnrichmentJobsCommandOutput}.
   */
  paginateListVectorEnrichmentJobs(
    args?: ListVectorEnrichmentJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVectorEnrichmentJobsCommandOutput>;

  /**
   * @see {@link SearchRasterDataCollectionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchRasterDataCollectionCommandOutput}.
   */
  paginateSearchRasterDataCollection(
    args: SearchRasterDataCollectionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchRasterDataCollectionCommandOutput>;
}

/**
 * <p>Provides APIs for creating and managing SageMaker geospatial resources.</p>
 * @public
 */
export class SageMakerGeospatial extends SageMakerGeospatialClient implements SageMakerGeospatial {}
createAggregatedClient(commands, SageMakerGeospatial, { paginators });
