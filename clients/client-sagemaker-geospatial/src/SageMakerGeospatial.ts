// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { SageMakerGeospatialClient } from "./SageMakerGeospatialClient";

/**
 * <p>Provides APIs for creating and managing SageMaker geospatial resources.</p>
 */
export class SageMakerGeospatial extends SageMakerGeospatialClient {
  /**
   * <p>Use this operation to delete an Earth Observation job.</p>
   */
  public deleteEarthObservationJob(
    args: DeleteEarthObservationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEarthObservationJobCommandOutput>;
  public deleteEarthObservationJob(
    args: DeleteEarthObservationJobCommandInput,
    cb: (err: any, data?: DeleteEarthObservationJobCommandOutput) => void
  ): void;
  public deleteEarthObservationJob(
    args: DeleteEarthObservationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEarthObservationJobCommandOutput) => void
  ): void;
  public deleteEarthObservationJob(
    args: DeleteEarthObservationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEarthObservationJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteEarthObservationJobCommandOutput) => void
  ): Promise<DeleteEarthObservationJobCommandOutput> | void {
    const command = new DeleteEarthObservationJobCommand(args);
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
   * <p>Use this operation to delete a Vector Enrichment job.</p>
   */
  public deleteVectorEnrichmentJob(
    args: DeleteVectorEnrichmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVectorEnrichmentJobCommandOutput>;
  public deleteVectorEnrichmentJob(
    args: DeleteVectorEnrichmentJobCommandInput,
    cb: (err: any, data?: DeleteVectorEnrichmentJobCommandOutput) => void
  ): void;
  public deleteVectorEnrichmentJob(
    args: DeleteVectorEnrichmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVectorEnrichmentJobCommandOutput) => void
  ): void;
  public deleteVectorEnrichmentJob(
    args: DeleteVectorEnrichmentJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVectorEnrichmentJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteVectorEnrichmentJobCommandOutput) => void
  ): Promise<DeleteVectorEnrichmentJobCommandOutput> | void {
    const command = new DeleteVectorEnrichmentJobCommand(args);
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
   * <p>Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an S3 location.</p>
   */
  public exportEarthObservationJob(
    args: ExportEarthObservationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportEarthObservationJobCommandOutput>;
  public exportEarthObservationJob(
    args: ExportEarthObservationJobCommandInput,
    cb: (err: any, data?: ExportEarthObservationJobCommandOutput) => void
  ): void;
  public exportEarthObservationJob(
    args: ExportEarthObservationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportEarthObservationJobCommandOutput) => void
  ): void;
  public exportEarthObservationJob(
    args: ExportEarthObservationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportEarthObservationJobCommandOutput) => void),
    cb?: (err: any, data?: ExportEarthObservationJobCommandOutput) => void
  ): Promise<ExportEarthObservationJobCommandOutput> | void {
    const command = new ExportEarthObservationJobCommand(args);
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
   * <p>Use this operation to copy results of a Vector Enrichment job to an S3 location.</p>
   */
  public exportVectorEnrichmentJob(
    args: ExportVectorEnrichmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportVectorEnrichmentJobCommandOutput>;
  public exportVectorEnrichmentJob(
    args: ExportVectorEnrichmentJobCommandInput,
    cb: (err: any, data?: ExportVectorEnrichmentJobCommandOutput) => void
  ): void;
  public exportVectorEnrichmentJob(
    args: ExportVectorEnrichmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportVectorEnrichmentJobCommandOutput) => void
  ): void;
  public exportVectorEnrichmentJob(
    args: ExportVectorEnrichmentJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportVectorEnrichmentJobCommandOutput) => void),
    cb?: (err: any, data?: ExportVectorEnrichmentJobCommandOutput) => void
  ): Promise<ExportVectorEnrichmentJobCommandOutput> | void {
    const command = new ExportVectorEnrichmentJobCommand(args);
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
   * <p>Get the details for a previously initiated Earth Observation job.</p>
   */
  public getEarthObservationJob(
    args: GetEarthObservationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEarthObservationJobCommandOutput>;
  public getEarthObservationJob(
    args: GetEarthObservationJobCommandInput,
    cb: (err: any, data?: GetEarthObservationJobCommandOutput) => void
  ): void;
  public getEarthObservationJob(
    args: GetEarthObservationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEarthObservationJobCommandOutput) => void
  ): void;
  public getEarthObservationJob(
    args: GetEarthObservationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEarthObservationJobCommandOutput) => void),
    cb?: (err: any, data?: GetEarthObservationJobCommandOutput) => void
  ): Promise<GetEarthObservationJobCommandOutput> | void {
    const command = new GetEarthObservationJobCommand(args);
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
   * <p>Use this operation to get details of a specific raster data collection.</p>
   */
  public getRasterDataCollection(
    args: GetRasterDataCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRasterDataCollectionCommandOutput>;
  public getRasterDataCollection(
    args: GetRasterDataCollectionCommandInput,
    cb: (err: any, data?: GetRasterDataCollectionCommandOutput) => void
  ): void;
  public getRasterDataCollection(
    args: GetRasterDataCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRasterDataCollectionCommandOutput) => void
  ): void;
  public getRasterDataCollection(
    args: GetRasterDataCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRasterDataCollectionCommandOutput) => void),
    cb?: (err: any, data?: GetRasterDataCollectionCommandOutput) => void
  ): Promise<GetRasterDataCollectionCommandOutput> | void {
    const command = new GetRasterDataCollectionCommand(args);
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
   * <p>Gets a web mercator tile for the given Earth Observation job.</p>
   */
  public getTile(args: GetTileCommandInput, options?: __HttpHandlerOptions): Promise<GetTileCommandOutput>;
  public getTile(args: GetTileCommandInput, cb: (err: any, data?: GetTileCommandOutput) => void): void;
  public getTile(
    args: GetTileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTileCommandOutput) => void
  ): void;
  public getTile(
    args: GetTileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTileCommandOutput) => void),
    cb?: (err: any, data?: GetTileCommandOutput) => void
  ): Promise<GetTileCommandOutput> | void {
    const command = new GetTileCommand(args);
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
   * <p>Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).</p>
   */
  public getVectorEnrichmentJob(
    args: GetVectorEnrichmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVectorEnrichmentJobCommandOutput>;
  public getVectorEnrichmentJob(
    args: GetVectorEnrichmentJobCommandInput,
    cb: (err: any, data?: GetVectorEnrichmentJobCommandOutput) => void
  ): void;
  public getVectorEnrichmentJob(
    args: GetVectorEnrichmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVectorEnrichmentJobCommandOutput) => void
  ): void;
  public getVectorEnrichmentJob(
    args: GetVectorEnrichmentJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVectorEnrichmentJobCommandOutput) => void),
    cb?: (err: any, data?: GetVectorEnrichmentJobCommandOutput) => void
  ): Promise<GetVectorEnrichmentJobCommandOutput> | void {
    const command = new GetVectorEnrichmentJobCommand(args);
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
   * <p>Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.</p>
   */
  public listEarthObservationJobs(
    args: ListEarthObservationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEarthObservationJobsCommandOutput>;
  public listEarthObservationJobs(
    args: ListEarthObservationJobsCommandInput,
    cb: (err: any, data?: ListEarthObservationJobsCommandOutput) => void
  ): void;
  public listEarthObservationJobs(
    args: ListEarthObservationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEarthObservationJobsCommandOutput) => void
  ): void;
  public listEarthObservationJobs(
    args: ListEarthObservationJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEarthObservationJobsCommandOutput) => void),
    cb?: (err: any, data?: ListEarthObservationJobsCommandOutput) => void
  ): Promise<ListEarthObservationJobsCommandOutput> | void {
    const command = new ListEarthObservationJobsCommand(args);
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
   * <p>Use this operation to get raster data collections.</p>
   */
  public listRasterDataCollections(
    args: ListRasterDataCollectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRasterDataCollectionsCommandOutput>;
  public listRasterDataCollections(
    args: ListRasterDataCollectionsCommandInput,
    cb: (err: any, data?: ListRasterDataCollectionsCommandOutput) => void
  ): void;
  public listRasterDataCollections(
    args: ListRasterDataCollectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRasterDataCollectionsCommandOutput) => void
  ): void;
  public listRasterDataCollections(
    args: ListRasterDataCollectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRasterDataCollectionsCommandOutput) => void),
    cb?: (err: any, data?: ListRasterDataCollectionsCommandOutput) => void
  ): Promise<ListRasterDataCollectionsCommandOutput> | void {
    const command = new ListRasterDataCollectionsCommand(args);
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
   * <p>Lists the tags attached to the resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Retrieves a list of vector enrichment jobs.</p>
   */
  public listVectorEnrichmentJobs(
    args: ListVectorEnrichmentJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVectorEnrichmentJobsCommandOutput>;
  public listVectorEnrichmentJobs(
    args: ListVectorEnrichmentJobsCommandInput,
    cb: (err: any, data?: ListVectorEnrichmentJobsCommandOutput) => void
  ): void;
  public listVectorEnrichmentJobs(
    args: ListVectorEnrichmentJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVectorEnrichmentJobsCommandOutput) => void
  ): void;
  public listVectorEnrichmentJobs(
    args: ListVectorEnrichmentJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVectorEnrichmentJobsCommandOutput) => void),
    cb?: (err: any, data?: ListVectorEnrichmentJobsCommandOutput) => void
  ): Promise<ListVectorEnrichmentJobsCommandOutput> | void {
    const command = new ListVectorEnrichmentJobsCommand(args);
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
   * <p>Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.</p>
   */
  public searchRasterDataCollection(
    args: SearchRasterDataCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchRasterDataCollectionCommandOutput>;
  public searchRasterDataCollection(
    args: SearchRasterDataCollectionCommandInput,
    cb: (err: any, data?: SearchRasterDataCollectionCommandOutput) => void
  ): void;
  public searchRasterDataCollection(
    args: SearchRasterDataCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchRasterDataCollectionCommandOutput) => void
  ): void;
  public searchRasterDataCollection(
    args: SearchRasterDataCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchRasterDataCollectionCommandOutput) => void),
    cb?: (err: any, data?: SearchRasterDataCollectionCommandOutput) => void
  ): Promise<SearchRasterDataCollectionCommandOutput> | void {
    const command = new SearchRasterDataCollectionCommand(args);
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
   * <p>Use this operation to create an Earth observation job.</p>
   */
  public startEarthObservationJob(
    args: StartEarthObservationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEarthObservationJobCommandOutput>;
  public startEarthObservationJob(
    args: StartEarthObservationJobCommandInput,
    cb: (err: any, data?: StartEarthObservationJobCommandOutput) => void
  ): void;
  public startEarthObservationJob(
    args: StartEarthObservationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEarthObservationJobCommandOutput) => void
  ): void;
  public startEarthObservationJob(
    args: StartEarthObservationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartEarthObservationJobCommandOutput) => void),
    cb?: (err: any, data?: StartEarthObservationJobCommandOutput) => void
  ): Promise<StartEarthObservationJobCommandOutput> | void {
    const command = new StartEarthObservationJobCommand(args);
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
   * <p>Creates a Vector Enrichment job for the supplied job type.  Currently, there are two supported job types: reverse geocoding and map matching.</p>
   */
  public startVectorEnrichmentJob(
    args: StartVectorEnrichmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVectorEnrichmentJobCommandOutput>;
  public startVectorEnrichmentJob(
    args: StartVectorEnrichmentJobCommandInput,
    cb: (err: any, data?: StartVectorEnrichmentJobCommandOutput) => void
  ): void;
  public startVectorEnrichmentJob(
    args: StartVectorEnrichmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVectorEnrichmentJobCommandOutput) => void
  ): void;
  public startVectorEnrichmentJob(
    args: StartVectorEnrichmentJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartVectorEnrichmentJobCommandOutput) => void),
    cb?: (err: any, data?: StartVectorEnrichmentJobCommandOutput) => void
  ): Promise<StartVectorEnrichmentJobCommandOutput> | void {
    const command = new StartVectorEnrichmentJobCommand(args);
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
   * <p>Use this operation to stop an existing earth observation job.</p>
   */
  public stopEarthObservationJob(
    args: StopEarthObservationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEarthObservationJobCommandOutput>;
  public stopEarthObservationJob(
    args: StopEarthObservationJobCommandInput,
    cb: (err: any, data?: StopEarthObservationJobCommandOutput) => void
  ): void;
  public stopEarthObservationJob(
    args: StopEarthObservationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEarthObservationJobCommandOutput) => void
  ): void;
  public stopEarthObservationJob(
    args: StopEarthObservationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopEarthObservationJobCommandOutput) => void),
    cb?: (err: any, data?: StopEarthObservationJobCommandOutput) => void
  ): Promise<StopEarthObservationJobCommandOutput> | void {
    const command = new StopEarthObservationJobCommand(args);
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
   * <p>Stops the  Vector Enrichment job for a given job ARN.</p>
   */
  public stopVectorEnrichmentJob(
    args: StopVectorEnrichmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopVectorEnrichmentJobCommandOutput>;
  public stopVectorEnrichmentJob(
    args: StopVectorEnrichmentJobCommandInput,
    cb: (err: any, data?: StopVectorEnrichmentJobCommandOutput) => void
  ): void;
  public stopVectorEnrichmentJob(
    args: StopVectorEnrichmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopVectorEnrichmentJobCommandOutput) => void
  ): void;
  public stopVectorEnrichmentJob(
    args: StopVectorEnrichmentJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopVectorEnrichmentJobCommandOutput) => void),
    cb?: (err: any, data?: StopVectorEnrichmentJobCommandOutput) => void
  ): Promise<StopVectorEnrichmentJobCommandOutput> | void {
    const command = new StopVectorEnrichmentJobCommand(args);
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
   * <p>The resource you want to tag.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>The resource you want to untag.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
