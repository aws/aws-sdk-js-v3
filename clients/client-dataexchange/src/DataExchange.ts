// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptDataGrantCommand,
  AcceptDataGrantCommandInput,
  AcceptDataGrantCommandOutput,
} from "./commands/AcceptDataGrantCommand";
import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import {
  CreateDataGrantCommand,
  CreateDataGrantCommandInput,
  CreateDataGrantCommandOutput,
} from "./commands/CreateDataGrantCommand";
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
  DeleteDataGrantCommand,
  DeleteDataGrantCommandInput,
  DeleteDataGrantCommandOutput,
} from "./commands/DeleteDataGrantCommand";
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
import {
  GetDataGrantCommand,
  GetDataGrantCommandInput,
  GetDataGrantCommandOutput,
} from "./commands/GetDataGrantCommand";
import { GetDataSetCommand, GetDataSetCommandInput, GetDataSetCommandOutput } from "./commands/GetDataSetCommand";
import {
  GetEventActionCommand,
  GetEventActionCommandInput,
  GetEventActionCommandOutput,
} from "./commands/GetEventActionCommand";
import { GetJobCommand, GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import {
  GetReceivedDataGrantCommand,
  GetReceivedDataGrantCommandInput,
  GetReceivedDataGrantCommandOutput,
} from "./commands/GetReceivedDataGrantCommand";
import { GetRevisionCommand, GetRevisionCommandInput, GetRevisionCommandOutput } from "./commands/GetRevisionCommand";
import {
  ListDataGrantsCommand,
  ListDataGrantsCommandInput,
  ListDataGrantsCommandOutput,
} from "./commands/ListDataGrantsCommand";
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
  ListReceivedDataGrantsCommand,
  ListReceivedDataGrantsCommandInput,
  ListReceivedDataGrantsCommandOutput,
} from "./commands/ListReceivedDataGrantsCommand";
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
import {
  SendDataSetNotificationCommand,
  SendDataSetNotificationCommandInput,
  SendDataSetNotificationCommandOutput,
} from "./commands/SendDataSetNotificationCommand";
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

const commands = {
  AcceptDataGrantCommand,
  CancelJobCommand,
  CreateDataGrantCommand,
  CreateDataSetCommand,
  CreateEventActionCommand,
  CreateJobCommand,
  CreateRevisionCommand,
  DeleteAssetCommand,
  DeleteDataGrantCommand,
  DeleteDataSetCommand,
  DeleteEventActionCommand,
  DeleteRevisionCommand,
  GetAssetCommand,
  GetDataGrantCommand,
  GetDataSetCommand,
  GetEventActionCommand,
  GetJobCommand,
  GetReceivedDataGrantCommand,
  GetRevisionCommand,
  ListDataGrantsCommand,
  ListDataSetRevisionsCommand,
  ListDataSetsCommand,
  ListEventActionsCommand,
  ListJobsCommand,
  ListReceivedDataGrantsCommand,
  ListRevisionAssetsCommand,
  ListTagsForResourceCommand,
  RevokeRevisionCommand,
  SendApiAssetCommand,
  SendDataSetNotificationCommand,
  StartJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAssetCommand,
  UpdateDataSetCommand,
  UpdateEventActionCommand,
  UpdateRevisionCommand,
};

export interface DataExchange {
  /**
   * @see {@link AcceptDataGrantCommand}
   */
  acceptDataGrant(
    args: AcceptDataGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptDataGrantCommandOutput>;
  acceptDataGrant(
    args: AcceptDataGrantCommandInput,
    cb: (err: any, data?: AcceptDataGrantCommandOutput) => void
  ): void;
  acceptDataGrant(
    args: AcceptDataGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptDataGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(
    args: CancelJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelJobCommandOutput>;
  cancelJob(
    args: CancelJobCommandInput,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
  cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataGrantCommand}
   */
  createDataGrant(
    args: CreateDataGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataGrantCommandOutput>;
  createDataGrant(
    args: CreateDataGrantCommandInput,
    cb: (err: any, data?: CreateDataGrantCommandOutput) => void
  ): void;
  createDataGrant(
    args: CreateDataGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSetCommand}
   */
  createDataSet(
    args: CreateDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSetCommandOutput>;
  createDataSet(
    args: CreateDataSetCommandInput,
    cb: (err: any, data?: CreateDataSetCommandOutput) => void
  ): void;
  createDataSet(
    args: CreateDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventActionCommand}
   */
  createEventAction(
    args: CreateEventActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventActionCommandOutput>;
  createEventAction(
    args: CreateEventActionCommandInput,
    cb: (err: any, data?: CreateEventActionCommandOutput) => void
  ): void;
  createEventAction(
    args: CreateEventActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(
    args: CreateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobCommandOutput>;
  createJob(
    args: CreateJobCommandInput,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRevisionCommand}
   */
  createRevision(
    args: CreateRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRevisionCommandOutput>;
  createRevision(
    args: CreateRevisionCommandInput,
    cb: (err: any, data?: CreateRevisionCommandOutput) => void
  ): void;
  createRevision(
    args: CreateRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetCommand}
   */
  deleteAsset(
    args: DeleteAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetCommandOutput>;
  deleteAsset(
    args: DeleteAssetCommandInput,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;
  deleteAsset(
    args: DeleteAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataGrantCommand}
   */
  deleteDataGrant(
    args: DeleteDataGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataGrantCommandOutput>;
  deleteDataGrant(
    args: DeleteDataGrantCommandInput,
    cb: (err: any, data?: DeleteDataGrantCommandOutput) => void
  ): void;
  deleteDataGrant(
    args: DeleteDataGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSetCommand}
   */
  deleteDataSet(
    args: DeleteDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSetCommandOutput>;
  deleteDataSet(
    args: DeleteDataSetCommandInput,
    cb: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): void;
  deleteDataSet(
    args: DeleteDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventActionCommand}
   */
  deleteEventAction(
    args: DeleteEventActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventActionCommandOutput>;
  deleteEventAction(
    args: DeleteEventActionCommandInput,
    cb: (err: any, data?: DeleteEventActionCommandOutput) => void
  ): void;
  deleteEventAction(
    args: DeleteEventActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRevisionCommand}
   */
  deleteRevision(
    args: DeleteRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRevisionCommandOutput>;
  deleteRevision(
    args: DeleteRevisionCommandInput,
    cb: (err: any, data?: DeleteRevisionCommandOutput) => void
  ): void;
  deleteRevision(
    args: DeleteRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetCommand}
   */
  getAsset(
    args: GetAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetCommandOutput>;
  getAsset(
    args: GetAssetCommandInput,
    cb: (err: any, data?: GetAssetCommandOutput) => void
  ): void;
  getAsset(
    args: GetAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataGrantCommand}
   */
  getDataGrant(
    args: GetDataGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataGrantCommandOutput>;
  getDataGrant(
    args: GetDataGrantCommandInput,
    cb: (err: any, data?: GetDataGrantCommandOutput) => void
  ): void;
  getDataGrant(
    args: GetDataGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSetCommand}
   */
  getDataSet(
    args: GetDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSetCommandOutput>;
  getDataSet(
    args: GetDataSetCommandInput,
    cb: (err: any, data?: GetDataSetCommandOutput) => void
  ): void;
  getDataSet(
    args: GetDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventActionCommand}
   */
  getEventAction(
    args: GetEventActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventActionCommandOutput>;
  getEventAction(
    args: GetEventActionCommandInput,
    cb: (err: any, data?: GetEventActionCommandOutput) => void
  ): void;
  getEventAction(
    args: GetEventActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventActionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(
    args: GetJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobCommandOutput>;
  getJob(
    args: GetJobCommandInput,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReceivedDataGrantCommand}
   */
  getReceivedDataGrant(
    args: GetReceivedDataGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReceivedDataGrantCommandOutput>;
  getReceivedDataGrant(
    args: GetReceivedDataGrantCommandInput,
    cb: (err: any, data?: GetReceivedDataGrantCommandOutput) => void
  ): void;
  getReceivedDataGrant(
    args: GetReceivedDataGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReceivedDataGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRevisionCommand}
   */
  getRevision(
    args: GetRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRevisionCommandOutput>;
  getRevision(
    args: GetRevisionCommandInput,
    cb: (err: any, data?: GetRevisionCommandOutput) => void
  ): void;
  getRevision(
    args: GetRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataGrantsCommand}
   */
  listDataGrants(): Promise<ListDataGrantsCommandOutput>;
  listDataGrants(
    args: ListDataGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataGrantsCommandOutput>;
  listDataGrants(
    args: ListDataGrantsCommandInput,
    cb: (err: any, data?: ListDataGrantsCommandOutput) => void
  ): void;
  listDataGrants(
    args: ListDataGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSetRevisionsCommand}
   */
  listDataSetRevisions(
    args: ListDataSetRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSetRevisionsCommandOutput>;
  listDataSetRevisions(
    args: ListDataSetRevisionsCommandInput,
    cb: (err: any, data?: ListDataSetRevisionsCommandOutput) => void
  ): void;
  listDataSetRevisions(
    args: ListDataSetRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSetsCommand}
   */
  listDataSets(): Promise<ListDataSetsCommandOutput>;
  listDataSets(
    args: ListDataSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSetsCommandOutput>;
  listDataSets(
    args: ListDataSetsCommandInput,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;
  listDataSets(
    args: ListDataSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventActionsCommand}
   */
  listEventActions(): Promise<ListEventActionsCommandOutput>;
  listEventActions(
    args: ListEventActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventActionsCommandOutput>;
  listEventActions(
    args: ListEventActionsCommandInput,
    cb: (err: any, data?: ListEventActionsCommandOutput) => void
  ): void;
  listEventActions(
    args: ListEventActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReceivedDataGrantsCommand}
   */
  listReceivedDataGrants(): Promise<ListReceivedDataGrantsCommandOutput>;
  listReceivedDataGrants(
    args: ListReceivedDataGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceivedDataGrantsCommandOutput>;
  listReceivedDataGrants(
    args: ListReceivedDataGrantsCommandInput,
    cb: (err: any, data?: ListReceivedDataGrantsCommandOutput) => void
  ): void;
  listReceivedDataGrants(
    args: ListReceivedDataGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceivedDataGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRevisionAssetsCommand}
   */
  listRevisionAssets(
    args: ListRevisionAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRevisionAssetsCommandOutput>;
  listRevisionAssets(
    args: ListRevisionAssetsCommandInput,
    cb: (err: any, data?: ListRevisionAssetsCommandOutput) => void
  ): void;
  listRevisionAssets(
    args: ListRevisionAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRevisionAssetsCommandOutput) => void
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
   * @see {@link RevokeRevisionCommand}
   */
  revokeRevision(
    args: RevokeRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeRevisionCommandOutput>;
  revokeRevision(
    args: RevokeRevisionCommandInput,
    cb: (err: any, data?: RevokeRevisionCommandOutput) => void
  ): void;
  revokeRevision(
    args: RevokeRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link SendApiAssetCommand}
   */
  sendApiAsset(
    args: SendApiAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendApiAssetCommandOutput>;
  sendApiAsset(
    args: SendApiAssetCommandInput,
    cb: (err: any, data?: SendApiAssetCommandOutput) => void
  ): void;
  sendApiAsset(
    args: SendApiAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendApiAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link SendDataSetNotificationCommand}
   */
  sendDataSetNotification(
    args: SendDataSetNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDataSetNotificationCommandOutput>;
  sendDataSetNotification(
    args: SendDataSetNotificationCommandInput,
    cb: (err: any, data?: SendDataSetNotificationCommandOutput) => void
  ): void;
  sendDataSetNotification(
    args: SendDataSetNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDataSetNotificationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartJobCommand}
   */
  startJob(
    args: StartJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartJobCommandOutput>;
  startJob(
    args: StartJobCommandInput,
    cb: (err: any, data?: StartJobCommandOutput) => void
  ): void;
  startJob(
    args: StartJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobCommandOutput) => void
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
   * @see {@link UpdateAssetCommand}
   */
  updateAsset(
    args: UpdateAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssetCommandOutput>;
  updateAsset(
    args: UpdateAssetCommandInput,
    cb: (err: any, data?: UpdateAssetCommandOutput) => void
  ): void;
  updateAsset(
    args: UpdateAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSetCommand}
   */
  updateDataSet(
    args: UpdateDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSetCommandOutput>;
  updateDataSet(
    args: UpdateDataSetCommandInput,
    cb: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): void;
  updateDataSet(
    args: UpdateDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventActionCommand}
   */
  updateEventAction(
    args: UpdateEventActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventActionCommandOutput>;
  updateEventAction(
    args: UpdateEventActionCommandInput,
    cb: (err: any, data?: UpdateEventActionCommandOutput) => void
  ): void;
  updateEventAction(
    args: UpdateEventActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRevisionCommand}
   */
  updateRevision(
    args: UpdateRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRevisionCommandOutput>;
  updateRevision(
    args: UpdateRevisionCommandInput,
    cb: (err: any, data?: UpdateRevisionCommandOutput) => void
  ): void;
  updateRevision(
    args: UpdateRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRevisionCommandOutput) => void
  ): void;
}

/**
 * <p>AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in
 *          the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access
 *          file-based data set in the AWS Cloud.</p>
 *          <p>As a subscriber, you can view and access the data sets that you have an entitlement to
 *          through a subscription. You can use the APIs to download or copy your entitled data sets to
 *          Amazon Simple Storage Service (Amazon S3) for use across a variety of AWS analytics and
 *          machine learning services.</p>
 *          <p>As a provider, you can create and manage your data sets that you would like to publish
 *          to a product. Being able to package and provide your data sets into products requires a few
 *          steps to determine eligibility. For more information, visit the <i>AWS Data Exchange
 *             User Guide</i>.</p>
 *          <p>A data set is a collection of data that can be changed or updated over time. Data sets
 *          can be updated using revisions, which represent a new version or incremental change to a
 *          data set. A revision contains one or more assets. An asset in AWS Data Exchange is a piece
 *          of data that can be stored as an Amazon S3 object, Redshift datashare, API Gateway API, AWS
 *          Lake Formation data permission, or Amazon S3 data access. The asset can be a structured
 *          data file, an image file, or some other data file. Jobs are asynchronous import or export
 *          operations used to create or copy assets.</p>
 * @public
 */
export class DataExchange extends DataExchangeClient implements DataExchange {}
createAggregatedClient(commands, DataExchange);
