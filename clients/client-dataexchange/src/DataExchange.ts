// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import {
  CreateDataSetCommand,
  CreateDataSetCommandInput,
  CreateDataSetCommandOutput,
} from "./commands/CreateDataSetCommand";
import {
  CreateEventActionCommand,
  CreateEventActionCommandInput,
  CreateEventActionCommandOutput,
} from "./commands/CreateEventActionCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateRevisionCommand,
  CreateRevisionCommandInput,
  CreateRevisionCommandOutput,
} from "./commands/CreateRevisionCommand";
import { DeleteAssetCommand, DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import {
  DeleteDataSetCommand,
  DeleteDataSetCommandInput,
  DeleteDataSetCommandOutput,
} from "./commands/DeleteDataSetCommand";
import {
  DeleteEventActionCommand,
  DeleteEventActionCommandInput,
  DeleteEventActionCommandOutput,
} from "./commands/DeleteEventActionCommand";
import {
  DeleteRevisionCommand,
  DeleteRevisionCommandInput,
  DeleteRevisionCommandOutput,
} from "./commands/DeleteRevisionCommand";
import { GetAssetCommand, GetAssetCommandInput, GetAssetCommandOutput } from "./commands/GetAssetCommand";
import { GetDataSetCommand, GetDataSetCommandInput, GetDataSetCommandOutput } from "./commands/GetDataSetCommand";
import {
  GetEventActionCommand,
  GetEventActionCommandInput,
  GetEventActionCommandOutput,
} from "./commands/GetEventActionCommand";
import { GetJobCommand, GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetRevisionCommand, GetRevisionCommandInput, GetRevisionCommandOutput } from "./commands/GetRevisionCommand";
import {
  ListDataSetRevisionsCommand,
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput,
} from "./commands/ListDataSetRevisionsCommand";
import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
} from "./commands/ListDataSetsCommand";
import {
  ListEventActionsCommand,
  ListEventActionsCommandInput,
  ListEventActionsCommandOutput,
} from "./commands/ListEventActionsCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListRevisionAssetsCommand,
  ListRevisionAssetsCommandInput,
  ListRevisionAssetsCommandOutput,
} from "./commands/ListRevisionAssetsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RevokeRevisionCommand,
  RevokeRevisionCommandInput,
  RevokeRevisionCommandOutput,
} from "./commands/RevokeRevisionCommand";
import {
  SendApiAssetCommand,
  SendApiAssetCommandInput,
  SendApiAssetCommandOutput,
} from "./commands/SendApiAssetCommand";
import { StartJobCommand, StartJobCommandInput, StartJobCommandOutput } from "./commands/StartJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAssetCommand, UpdateAssetCommandInput, UpdateAssetCommandOutput } from "./commands/UpdateAssetCommand";
import {
  UpdateDataSetCommand,
  UpdateDataSetCommandInput,
  UpdateDataSetCommandOutput,
} from "./commands/UpdateDataSetCommand";
import {
  UpdateEventActionCommand,
  UpdateEventActionCommandInput,
  UpdateEventActionCommandOutput,
} from "./commands/UpdateEventActionCommand";
import {
  UpdateRevisionCommand,
  UpdateRevisionCommandInput,
  UpdateRevisionCommandOutput,
} from "./commands/UpdateRevisionCommand";
import { DataExchangeClient } from "./DataExchangeClient";

/**
 * <p>AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access file-based data set in the AWS Cloud.</p>
 *          <p>As a subscriber, you can view and access the data sets that you have an entitlement to through
 *          a subscription. You can use the APIs to download or copy your entitled data sets to Amazon
 *          Simple Storage Service (Amazon S3) for use across a variety of AWS analytics and machine
 *          learning services.</p>
 *          <p>As a provider, you can create and manage your data sets that you would like to publish to a
 *          product. Being able to package and provide your data sets into products requires a few
 *          steps to determine eligibility. For more information, visit the <i>AWS Data Exchange
 *             User Guide</i>.</p>
 *          <p>A data set is a collection of data that can be changed or updated over time. Data sets can be
 *          updated using revisions, which represent a new version or incremental change to a data set.
 *          A revision contains one or more assets. An asset in AWS Data Exchange is a piece of data
 *          that can be stored as an Amazon S3 object, Redshift datashare, API Gateway API, AWS Lake
 *          Formation data permission, or Amazon S3 data access. The asset can be a structured data
 *          file, an image file, or some other data file. Jobs are asynchronous import or export
 *          operations used to create or copy assets.</p>
 */
export class DataExchange extends DataExchangeClient {
  /**
   * <p>This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.</p>
   */
  public cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  public cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  public cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
  public cancelJob(
    args: CancelJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelJobCommandOutput) => void),
    cb?: (err: any, data?: CancelJobCommandOutput) => void
  ): Promise<CancelJobCommandOutput> | void {
    const command = new CancelJobCommand(args);
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
   * <p>This operation creates a data set.</p>
   */
  public createDataSet(
    args: CreateDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSetCommandOutput>;
  public createDataSet(
    args: CreateDataSetCommandInput,
    cb: (err: any, data?: CreateDataSetCommandOutput) => void
  ): void;
  public createDataSet(
    args: CreateDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSetCommandOutput) => void
  ): void;
  public createDataSet(
    args: CreateDataSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataSetCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSetCommandOutput) => void
  ): Promise<CreateDataSetCommandOutput> | void {
    const command = new CreateDataSetCommand(args);
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
   * <p>This operation creates an event action.</p>
   */
  public createEventAction(
    args: CreateEventActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventActionCommandOutput>;
  public createEventAction(
    args: CreateEventActionCommandInput,
    cb: (err: any, data?: CreateEventActionCommandOutput) => void
  ): void;
  public createEventAction(
    args: CreateEventActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventActionCommandOutput) => void
  ): void;
  public createEventAction(
    args: CreateEventActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEventActionCommandOutput) => void),
    cb?: (err: any, data?: CreateEventActionCommandOutput) => void
  ): Promise<CreateEventActionCommandOutput> | void {
    const command = new CreateEventActionCommand(args);
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
   * <p>This operation creates a job.</p>
   */
  public createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  public createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
  public createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  public createJob(
    args: CreateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobCommandOutput) => void),
    cb?: (err: any, data?: CreateJobCommandOutput) => void
  ): Promise<CreateJobCommandOutput> | void {
    const command = new CreateJobCommand(args);
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
   * <p>This operation creates a revision for a data set.</p>
   */
  public createRevision(
    args: CreateRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRevisionCommandOutput>;
  public createRevision(
    args: CreateRevisionCommandInput,
    cb: (err: any, data?: CreateRevisionCommandOutput) => void
  ): void;
  public createRevision(
    args: CreateRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRevisionCommandOutput) => void
  ): void;
  public createRevision(
    args: CreateRevisionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRevisionCommandOutput) => void),
    cb?: (err: any, data?: CreateRevisionCommandOutput) => void
  ): Promise<CreateRevisionCommandOutput> | void {
    const command = new CreateRevisionCommand(args);
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
   * <p>This operation deletes an asset.</p>
   */
  public deleteAsset(args: DeleteAssetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssetCommandOutput>;
  public deleteAsset(args: DeleteAssetCommandInput, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
  public deleteAsset(
    args: DeleteAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;
  public deleteAsset(
    args: DeleteAssetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssetCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssetCommandOutput) => void
  ): Promise<DeleteAssetCommandOutput> | void {
    const command = new DeleteAssetCommand(args);
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
   * <p>This operation deletes a data set.</p>
   */
  public deleteDataSet(
    args: DeleteDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSetCommandOutput>;
  public deleteDataSet(
    args: DeleteDataSetCommandInput,
    cb: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): void;
  public deleteDataSet(
    args: DeleteDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): void;
  public deleteDataSet(
    args: DeleteDataSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): Promise<DeleteDataSetCommandOutput> | void {
    const command = new DeleteDataSetCommand(args);
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
   * <p>This operation deletes the event action.</p>
   */
  public deleteEventAction(
    args: DeleteEventActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventActionCommandOutput>;
  public deleteEventAction(
    args: DeleteEventActionCommandInput,
    cb: (err: any, data?: DeleteEventActionCommandOutput) => void
  ): void;
  public deleteEventAction(
    args: DeleteEventActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventActionCommandOutput) => void
  ): void;
  public deleteEventAction(
    args: DeleteEventActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventActionCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventActionCommandOutput) => void
  ): Promise<DeleteEventActionCommandOutput> | void {
    const command = new DeleteEventActionCommand(args);
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
   * <p>This operation deletes a revision.</p>
   */
  public deleteRevision(
    args: DeleteRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRevisionCommandOutput>;
  public deleteRevision(
    args: DeleteRevisionCommandInput,
    cb: (err: any, data?: DeleteRevisionCommandOutput) => void
  ): void;
  public deleteRevision(
    args: DeleteRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRevisionCommandOutput) => void
  ): void;
  public deleteRevision(
    args: DeleteRevisionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRevisionCommandOutput) => void),
    cb?: (err: any, data?: DeleteRevisionCommandOutput) => void
  ): Promise<DeleteRevisionCommandOutput> | void {
    const command = new DeleteRevisionCommand(args);
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
   * <p>This operation returns information about an asset.</p>
   */
  public getAsset(args: GetAssetCommandInput, options?: __HttpHandlerOptions): Promise<GetAssetCommandOutput>;
  public getAsset(args: GetAssetCommandInput, cb: (err: any, data?: GetAssetCommandOutput) => void): void;
  public getAsset(
    args: GetAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetCommandOutput) => void
  ): void;
  public getAsset(
    args: GetAssetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssetCommandOutput) => void),
    cb?: (err: any, data?: GetAssetCommandOutput) => void
  ): Promise<GetAssetCommandOutput> | void {
    const command = new GetAssetCommand(args);
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
   * <p>This operation returns information about a data set.</p>
   */
  public getDataSet(args: GetDataSetCommandInput, options?: __HttpHandlerOptions): Promise<GetDataSetCommandOutput>;
  public getDataSet(args: GetDataSetCommandInput, cb: (err: any, data?: GetDataSetCommandOutput) => void): void;
  public getDataSet(
    args: GetDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSetCommandOutput) => void
  ): void;
  public getDataSet(
    args: GetDataSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataSetCommandOutput) => void),
    cb?: (err: any, data?: GetDataSetCommandOutput) => void
  ): Promise<GetDataSetCommandOutput> | void {
    const command = new GetDataSetCommand(args);
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
   * <p>This operation retrieves information about an event action.</p>
   */
  public getEventAction(
    args: GetEventActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventActionCommandOutput>;
  public getEventAction(
    args: GetEventActionCommandInput,
    cb: (err: any, data?: GetEventActionCommandOutput) => void
  ): void;
  public getEventAction(
    args: GetEventActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventActionCommandOutput) => void
  ): void;
  public getEventAction(
    args: GetEventActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEventActionCommandOutput) => void),
    cb?: (err: any, data?: GetEventActionCommandOutput) => void
  ): Promise<GetEventActionCommandOutput> | void {
    const command = new GetEventActionCommand(args);
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
   * <p>This operation returns information about a job.</p>
   */
  public getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  public getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  public getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  public getJob(
    args: GetJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobCommandOutput) => void),
    cb?: (err: any, data?: GetJobCommandOutput) => void
  ): Promise<GetJobCommandOutput> | void {
    const command = new GetJobCommand(args);
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
   * <p>This operation returns information about a revision.</p>
   */
  public getRevision(args: GetRevisionCommandInput, options?: __HttpHandlerOptions): Promise<GetRevisionCommandOutput>;
  public getRevision(args: GetRevisionCommandInput, cb: (err: any, data?: GetRevisionCommandOutput) => void): void;
  public getRevision(
    args: GetRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRevisionCommandOutput) => void
  ): void;
  public getRevision(
    args: GetRevisionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRevisionCommandOutput) => void),
    cb?: (err: any, data?: GetRevisionCommandOutput) => void
  ): Promise<GetRevisionCommandOutput> | void {
    const command = new GetRevisionCommand(args);
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
   * <p>This operation lists a data set's revisions sorted by CreatedAt in descending order.</p>
   */
  public listDataSetRevisions(
    args: ListDataSetRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSetRevisionsCommandOutput>;
  public listDataSetRevisions(
    args: ListDataSetRevisionsCommandInput,
    cb: (err: any, data?: ListDataSetRevisionsCommandOutput) => void
  ): void;
  public listDataSetRevisions(
    args: ListDataSetRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetRevisionsCommandOutput) => void
  ): void;
  public listDataSetRevisions(
    args: ListDataSetRevisionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataSetRevisionsCommandOutput) => void),
    cb?: (err: any, data?: ListDataSetRevisionsCommandOutput) => void
  ): Promise<ListDataSetRevisionsCommandOutput> | void {
    const command = new ListDataSetRevisionsCommand(args);
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
   * <p>This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order and the maxResults parameter is ignored.</p>
   */
  public listDataSets(
    args: ListDataSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSetsCommandOutput>;
  public listDataSets(args: ListDataSetsCommandInput, cb: (err: any, data?: ListDataSetsCommandOutput) => void): void;
  public listDataSets(
    args: ListDataSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;
  public listDataSets(
    args: ListDataSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataSetsCommandOutput) => void),
    cb?: (err: any, data?: ListDataSetsCommandOutput) => void
  ): Promise<ListDataSetsCommandOutput> | void {
    const command = new ListDataSetsCommand(args);
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
   * <p>This operation lists your event actions.</p>
   */
  public listEventActions(
    args: ListEventActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventActionsCommandOutput>;
  public listEventActions(
    args: ListEventActionsCommandInput,
    cb: (err: any, data?: ListEventActionsCommandOutput) => void
  ): void;
  public listEventActions(
    args: ListEventActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventActionsCommandOutput) => void
  ): void;
  public listEventActions(
    args: ListEventActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventActionsCommandOutput) => void),
    cb?: (err: any, data?: ListEventActionsCommandOutput) => void
  ): Promise<ListEventActionsCommandOutput> | void {
    const command = new ListEventActionsCommand(args);
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
   * <p>This operation lists your jobs sorted by CreatedAt in descending order.</p>
   */
  public listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  public listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
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
   * <p>This operation lists a revision's assets sorted alphabetically in descending order.</p>
   */
  public listRevisionAssets(
    args: ListRevisionAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRevisionAssetsCommandOutput>;
  public listRevisionAssets(
    args: ListRevisionAssetsCommandInput,
    cb: (err: any, data?: ListRevisionAssetsCommandOutput) => void
  ): void;
  public listRevisionAssets(
    args: ListRevisionAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRevisionAssetsCommandOutput) => void
  ): void;
  public listRevisionAssets(
    args: ListRevisionAssetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRevisionAssetsCommandOutput) => void),
    cb?: (err: any, data?: ListRevisionAssetsCommandOutput) => void
  ): Promise<ListRevisionAssetsCommandOutput> | void {
    const command = new ListRevisionAssetsCommand(args);
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
   * <p>This operation lists the tags on the resource.</p>
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
   * <p>This operation revokes subscribers' access to a revision.</p>
   */
  public revokeRevision(
    args: RevokeRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeRevisionCommandOutput>;
  public revokeRevision(
    args: RevokeRevisionCommandInput,
    cb: (err: any, data?: RevokeRevisionCommandOutput) => void
  ): void;
  public revokeRevision(
    args: RevokeRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeRevisionCommandOutput) => void
  ): void;
  public revokeRevision(
    args: RevokeRevisionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeRevisionCommandOutput) => void),
    cb?: (err: any, data?: RevokeRevisionCommandOutput) => void
  ): Promise<RevokeRevisionCommandOutput> | void {
    const command = new RevokeRevisionCommand(args);
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
   * <p>This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.</p>
   */
  public sendApiAsset(
    args: SendApiAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendApiAssetCommandOutput>;
  public sendApiAsset(args: SendApiAssetCommandInput, cb: (err: any, data?: SendApiAssetCommandOutput) => void): void;
  public sendApiAsset(
    args: SendApiAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendApiAssetCommandOutput) => void
  ): void;
  public sendApiAsset(
    args: SendApiAssetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendApiAssetCommandOutput) => void),
    cb?: (err: any, data?: SendApiAssetCommandOutput) => void
  ): Promise<SendApiAssetCommandOutput> | void {
    const command = new SendApiAssetCommand(args);
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
   * <p>This operation starts a job.</p>
   */
  public startJob(args: StartJobCommandInput, options?: __HttpHandlerOptions): Promise<StartJobCommandOutput>;
  public startJob(args: StartJobCommandInput, cb: (err: any, data?: StartJobCommandOutput) => void): void;
  public startJob(
    args: StartJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobCommandOutput) => void
  ): void;
  public startJob(
    args: StartJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartJobCommandOutput) => void),
    cb?: (err: any, data?: StartJobCommandOutput) => void
  ): Promise<StartJobCommandOutput> | void {
    const command = new StartJobCommand(args);
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
   * <p>This operation tags a resource.</p>
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
   * <p>This operation removes one or more tags from a resource.</p>
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

  /**
   * <p>This operation updates an asset.</p>
   */
  public updateAsset(args: UpdateAssetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssetCommandOutput>;
  public updateAsset(args: UpdateAssetCommandInput, cb: (err: any, data?: UpdateAssetCommandOutput) => void): void;
  public updateAsset(
    args: UpdateAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssetCommandOutput) => void
  ): void;
  public updateAsset(
    args: UpdateAssetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssetCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssetCommandOutput) => void
  ): Promise<UpdateAssetCommandOutput> | void {
    const command = new UpdateAssetCommand(args);
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
   * <p>This operation updates a data set.</p>
   */
  public updateDataSet(
    args: UpdateDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSetCommandOutput>;
  public updateDataSet(
    args: UpdateDataSetCommandInput,
    cb: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): void;
  public updateDataSet(
    args: UpdateDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): void;
  public updateDataSet(
    args: UpdateDataSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): Promise<UpdateDataSetCommandOutput> | void {
    const command = new UpdateDataSetCommand(args);
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
   * <p>This operation updates the event action.</p>
   */
  public updateEventAction(
    args: UpdateEventActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventActionCommandOutput>;
  public updateEventAction(
    args: UpdateEventActionCommandInput,
    cb: (err: any, data?: UpdateEventActionCommandOutput) => void
  ): void;
  public updateEventAction(
    args: UpdateEventActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventActionCommandOutput) => void
  ): void;
  public updateEventAction(
    args: UpdateEventActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEventActionCommandOutput) => void),
    cb?: (err: any, data?: UpdateEventActionCommandOutput) => void
  ): Promise<UpdateEventActionCommandOutput> | void {
    const command = new UpdateEventActionCommand(args);
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
   * <p>This operation updates a revision.</p>
   */
  public updateRevision(
    args: UpdateRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRevisionCommandOutput>;
  public updateRevision(
    args: UpdateRevisionCommandInput,
    cb: (err: any, data?: UpdateRevisionCommandOutput) => void
  ): void;
  public updateRevision(
    args: UpdateRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRevisionCommandOutput) => void
  ): void;
  public updateRevision(
    args: UpdateRevisionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRevisionCommandOutput) => void),
    cb?: (err: any, data?: UpdateRevisionCommandOutput) => void
  ): Promise<UpdateRevisionCommandOutput> | void {
    const command = new UpdateRevisionCommand(args);
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
