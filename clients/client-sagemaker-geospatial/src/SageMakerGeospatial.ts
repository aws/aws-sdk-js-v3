// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteEarthObservationJobCommand,
  DeleteEarthObservationJobCommandInput,
  DeleteEarthObservationJobCommandOutput,
} from "./commands/DeleteEarthObservationJobCommand";
import {
  DeleteVectorEnrichmentJobCommand,
  DeleteVectorEnrichmentJobCommandInput,
  DeleteVectorEnrichmentJobCommandOutput,
} from "./commands/DeleteVectorEnrichmentJobCommand";
import {
  ExportEarthObservationJobCommand,
  ExportEarthObservationJobCommandInput,
  ExportEarthObservationJobCommandOutput,
} from "./commands/ExportEarthObservationJobCommand";
import {
  ExportVectorEnrichmentJobCommand,
  ExportVectorEnrichmentJobCommandInput,
  ExportVectorEnrichmentJobCommandOutput,
} from "./commands/ExportVectorEnrichmentJobCommand";
import {
  GetEarthObservationJobCommand,
  GetEarthObservationJobCommandInput,
  GetEarthObservationJobCommandOutput,
} from "./commands/GetEarthObservationJobCommand";
import {
  GetRasterDataCollectionCommand,
  GetRasterDataCollectionCommandInput,
  GetRasterDataCollectionCommandOutput,
} from "./commands/GetRasterDataCollectionCommand";
import { GetTileCommand, GetTileCommandInput, GetTileCommandOutput } from "./commands/GetTileCommand";
import {
  GetVectorEnrichmentJobCommand,
  GetVectorEnrichmentJobCommandInput,
  GetVectorEnrichmentJobCommandOutput,
} from "./commands/GetVectorEnrichmentJobCommand";
import {
  ListEarthObservationJobsCommand,
  ListEarthObservationJobsCommandInput,
  ListEarthObservationJobsCommandOutput,
} from "./commands/ListEarthObservationJobsCommand";
import {
  ListRasterDataCollectionsCommand,
  ListRasterDataCollectionsCommandInput,
  ListRasterDataCollectionsCommandOutput,
} from "./commands/ListRasterDataCollectionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVectorEnrichmentJobsCommand,
  ListVectorEnrichmentJobsCommandInput,
  ListVectorEnrichmentJobsCommandOutput,
} from "./commands/ListVectorEnrichmentJobsCommand";
import {
  SearchRasterDataCollectionCommand,
  SearchRasterDataCollectionCommandInput,
  SearchRasterDataCollectionCommandOutput,
} from "./commands/SearchRasterDataCollectionCommand";
import {
  StartEarthObservationJobCommand,
  StartEarthObservationJobCommandInput,
  StartEarthObservationJobCommandOutput,
} from "./commands/StartEarthObservationJobCommand";
import {
  StartVectorEnrichmentJobCommand,
  StartVectorEnrichmentJobCommandInput,
  StartVectorEnrichmentJobCommandOutput,
} from "./commands/StartVectorEnrichmentJobCommand";
import {
  StopEarthObservationJobCommand,
  StopEarthObservationJobCommandInput,
  StopEarthObservationJobCommandOutput,
} from "./commands/StopEarthObservationJobCommand";
import {
  StopVectorEnrichmentJobCommand,
  StopVectorEnrichmentJobCommandInput,
  StopVectorEnrichmentJobCommandOutput,
} from "./commands/StopVectorEnrichmentJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { SageMakerGeospatialClient, SageMakerGeospatialClientConfig } from "./SageMakerGeospatialClient";

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
  getTile(args: GetTileCommandInput, options?: __HttpHandlerOptions): Promise<GetTileCommandOutput>;
  getTile(args: GetTileCommandInput, cb: (err: any, data?: GetTileCommandOutput) => void): void;
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
}

/**
 * @public
 * <p>Provides APIs for creating and managing SageMaker geospatial resources.</p>
 */
export class SageMakerGeospatial extends SageMakerGeospatialClient implements SageMakerGeospatial {}
createAggregatedClient(commands, SageMakerGeospatial);
