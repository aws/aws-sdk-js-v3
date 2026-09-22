// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { AppflowClient } from "./AppflowClient";
import {
  type CancelFlowExecutionsCommandInput,
  type CancelFlowExecutionsCommandOutput,
  CancelFlowExecutionsCommand,
} from "./commands/CancelFlowExecutionsCommand";
import {
  type CreateConnectorProfileCommandInput,
  type CreateConnectorProfileCommandOutput,
  CreateConnectorProfileCommand,
} from "./commands/CreateConnectorProfileCommand";
import {
  type CreateFlowCommandInput,
  type CreateFlowCommandOutput,
  CreateFlowCommand,
} from "./commands/CreateFlowCommand";
import {
  type DeleteConnectorProfileCommandInput,
  type DeleteConnectorProfileCommandOutput,
  DeleteConnectorProfileCommand,
} from "./commands/DeleteConnectorProfileCommand";
import {
  type DeleteFlowCommandInput,
  type DeleteFlowCommandOutput,
  DeleteFlowCommand,
} from "./commands/DeleteFlowCommand";
import {
  type DescribeConnectorCommandInput,
  type DescribeConnectorCommandOutput,
  DescribeConnectorCommand,
} from "./commands/DescribeConnectorCommand";
import {
  type DescribeConnectorEntityCommandInput,
  type DescribeConnectorEntityCommandOutput,
  DescribeConnectorEntityCommand,
} from "./commands/DescribeConnectorEntityCommand";
import {
  type DescribeConnectorProfilesCommandInput,
  type DescribeConnectorProfilesCommandOutput,
  DescribeConnectorProfilesCommand,
} from "./commands/DescribeConnectorProfilesCommand";
import {
  type DescribeConnectorsCommandInput,
  type DescribeConnectorsCommandOutput,
  DescribeConnectorsCommand,
} from "./commands/DescribeConnectorsCommand";
import {
  type DescribeFlowCommandInput,
  type DescribeFlowCommandOutput,
  DescribeFlowCommand,
} from "./commands/DescribeFlowCommand";
import {
  type DescribeFlowExecutionRecordsCommandInput,
  type DescribeFlowExecutionRecordsCommandOutput,
  DescribeFlowExecutionRecordsCommand,
} from "./commands/DescribeFlowExecutionRecordsCommand";
import {
  type ListConnectorEntitiesCommandInput,
  type ListConnectorEntitiesCommandOutput,
  ListConnectorEntitiesCommand,
} from "./commands/ListConnectorEntitiesCommand";
import {
  type ListConnectorsCommandInput,
  type ListConnectorsCommandOutput,
  ListConnectorsCommand,
} from "./commands/ListConnectorsCommand";
import { type ListFlowsCommandInput, type ListFlowsCommandOutput, ListFlowsCommand } from "./commands/ListFlowsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RegisterConnectorCommandInput,
  type RegisterConnectorCommandOutput,
  RegisterConnectorCommand,
} from "./commands/RegisterConnectorCommand";
import {
  type ResetConnectorMetadataCacheCommandInput,
  type ResetConnectorMetadataCacheCommandOutput,
  ResetConnectorMetadataCacheCommand,
} from "./commands/ResetConnectorMetadataCacheCommand";
import { type StartFlowCommandInput, type StartFlowCommandOutput, StartFlowCommand } from "./commands/StartFlowCommand";
import { type StopFlowCommandInput, type StopFlowCommandOutput, StopFlowCommand } from "./commands/StopFlowCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UnregisterConnectorCommandInput,
  type UnregisterConnectorCommandOutput,
  UnregisterConnectorCommand,
} from "./commands/UnregisterConnectorCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateConnectorProfileCommandInput,
  type UpdateConnectorProfileCommandOutput,
  UpdateConnectorProfileCommand,
} from "./commands/UpdateConnectorProfileCommand";
import {
  type UpdateConnectorRegistrationCommandInput,
  type UpdateConnectorRegistrationCommandOutput,
  UpdateConnectorRegistrationCommand,
} from "./commands/UpdateConnectorRegistrationCommand";
import {
  type UpdateFlowCommandInput,
  type UpdateFlowCommandOutput,
  UpdateFlowCommand,
} from "./commands/UpdateFlowCommand";
import { paginateDescribeConnectorProfiles } from "./pagination/DescribeConnectorProfilesPaginator";
import { paginateDescribeConnectors } from "./pagination/DescribeConnectorsPaginator";
import { paginateDescribeFlowExecutionRecords } from "./pagination/DescribeFlowExecutionRecordsPaginator";
import { paginateListConnectors } from "./pagination/ListConnectorsPaginator";
import { paginateListFlows } from "./pagination/ListFlowsPaginator";

const commands = {
  CancelFlowExecutionsCommand,
  CreateConnectorProfileCommand,
  CreateFlowCommand,
  DeleteConnectorProfileCommand,
  DeleteFlowCommand,
  DescribeConnectorCommand,
  DescribeConnectorEntityCommand,
  DescribeConnectorProfilesCommand,
  DescribeConnectorsCommand,
  DescribeFlowCommand,
  DescribeFlowExecutionRecordsCommand,
  ListConnectorEntitiesCommand,
  ListConnectorsCommand,
  ListFlowsCommand,
  ListTagsForResourceCommand,
  RegisterConnectorCommand,
  ResetConnectorMetadataCacheCommand,
  StartFlowCommand,
  StopFlowCommand,
  TagResourceCommand,
  UnregisterConnectorCommand,
  UntagResourceCommand,
  UpdateConnectorProfileCommand,
  UpdateConnectorRegistrationCommand,
  UpdateFlowCommand,
};
const paginators = {
  paginateDescribeConnectorProfiles,
  paginateDescribeConnectors,
  paginateDescribeFlowExecutionRecords,
  paginateListConnectors,
  paginateListFlows,
};

/**
 * @public
 */
export interface AppflowRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Appflow {
  /**
   * @see {@link CancelFlowExecutionsCommand}
   */
  cancelFlowExecutions(
    args: CancelFlowExecutionsCommandInput,
    options?: AppflowRequestOptions
  ): Promise<CancelFlowExecutionsCommandOutput>;
  cancelFlowExecutions(
    args: CancelFlowExecutionsCommandInput,
    cb: (err: any, data?: CancelFlowExecutionsCommandOutput) => void
  ): void;
  cancelFlowExecutions(
    args: CancelFlowExecutionsCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: CancelFlowExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectorProfileCommand}
   */
  createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    options?: AppflowRequestOptions
  ): Promise<CreateConnectorProfileCommandOutput>;
  createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    cb: (err: any, data?: CreateConnectorProfileCommandOutput) => void
  ): void;
  createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: CreateConnectorProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlowCommand}
   */
  createFlow(
    args: CreateFlowCommandInput,
    options?: AppflowRequestOptions
  ): Promise<CreateFlowCommandOutput>;
  createFlow(
    args: CreateFlowCommandInput,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;
  createFlow(
    args: CreateFlowCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectorProfileCommand}
   */
  deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    options?: AppflowRequestOptions
  ): Promise<DeleteConnectorProfileCommandOutput>;
  deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    cb: (err: any, data?: DeleteConnectorProfileCommandOutput) => void
  ): void;
  deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: DeleteConnectorProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlowCommand}
   */
  deleteFlow(
    args: DeleteFlowCommandInput,
    options?: AppflowRequestOptions
  ): Promise<DeleteFlowCommandOutput>;
  deleteFlow(
    args: DeleteFlowCommandInput,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;
  deleteFlow(
    args: DeleteFlowCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorCommand}
   */
  describeConnector(
    args: DescribeConnectorCommandInput,
    options?: AppflowRequestOptions
  ): Promise<DescribeConnectorCommandOutput>;
  describeConnector(
    args: DescribeConnectorCommandInput,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  describeConnector(
    args: DescribeConnectorCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorEntityCommand}
   */
  describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    options?: AppflowRequestOptions
  ): Promise<DescribeConnectorEntityCommandOutput>;
  describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    cb: (err: any, data?: DescribeConnectorEntityCommandOutput) => void
  ): void;
  describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: DescribeConnectorEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorProfilesCommand}
   */
  describeConnectorProfiles(): Promise<DescribeConnectorProfilesCommandOutput>;
  describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    options?: AppflowRequestOptions
  ): Promise<DescribeConnectorProfilesCommandOutput>;
  describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    cb: (err: any, data?: DescribeConnectorProfilesCommandOutput) => void
  ): void;
  describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: DescribeConnectorProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorsCommand}
   */
  describeConnectors(): Promise<DescribeConnectorsCommandOutput>;
  describeConnectors(
    args: DescribeConnectorsCommandInput,
    options?: AppflowRequestOptions
  ): Promise<DescribeConnectorsCommandOutput>;
  describeConnectors(
    args: DescribeConnectorsCommandInput,
    cb: (err: any, data?: DescribeConnectorsCommandOutput) => void
  ): void;
  describeConnectors(
    args: DescribeConnectorsCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: DescribeConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowCommand}
   */
  describeFlow(
    args: DescribeFlowCommandInput,
    options?: AppflowRequestOptions
  ): Promise<DescribeFlowCommandOutput>;
  describeFlow(
    args: DescribeFlowCommandInput,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;
  describeFlow(
    args: DescribeFlowCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowExecutionRecordsCommand}
   */
  describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    options?: AppflowRequestOptions
  ): Promise<DescribeFlowExecutionRecordsCommandOutput>;
  describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    cb: (err: any, data?: DescribeFlowExecutionRecordsCommandOutput) => void
  ): void;
  describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: DescribeFlowExecutionRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorEntitiesCommand}
   */
  listConnectorEntities(): Promise<ListConnectorEntitiesCommandOutput>;
  listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    options?: AppflowRequestOptions
  ): Promise<ListConnectorEntitiesCommandOutput>;
  listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    cb: (err: any, data?: ListConnectorEntitiesCommandOutput) => void
  ): void;
  listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: ListConnectorEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorsCommand}
   */
  listConnectors(): Promise<ListConnectorsCommandOutput>;
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: AppflowRequestOptions
  ): Promise<ListConnectorsCommandOutput>;
  listConnectors(
    args: ListConnectorsCommandInput,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;
  listConnectors(
    args: ListConnectorsCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowsCommand}
   */
  listFlows(): Promise<ListFlowsCommandOutput>;
  listFlows(
    args: ListFlowsCommandInput,
    options?: AppflowRequestOptions
  ): Promise<ListFlowsCommandOutput>;
  listFlows(
    args: ListFlowsCommandInput,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;
  listFlows(
    args: ListFlowsCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: AppflowRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterConnectorCommand}
   */
  registerConnector(): Promise<RegisterConnectorCommandOutput>;
  registerConnector(
    args: RegisterConnectorCommandInput,
    options?: AppflowRequestOptions
  ): Promise<RegisterConnectorCommandOutput>;
  registerConnector(
    args: RegisterConnectorCommandInput,
    cb: (err: any, data?: RegisterConnectorCommandOutput) => void
  ): void;
  registerConnector(
    args: RegisterConnectorCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: RegisterConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetConnectorMetadataCacheCommand}
   */
  resetConnectorMetadataCache(): Promise<ResetConnectorMetadataCacheCommandOutput>;
  resetConnectorMetadataCache(
    args: ResetConnectorMetadataCacheCommandInput,
    options?: AppflowRequestOptions
  ): Promise<ResetConnectorMetadataCacheCommandOutput>;
  resetConnectorMetadataCache(
    args: ResetConnectorMetadataCacheCommandInput,
    cb: (err: any, data?: ResetConnectorMetadataCacheCommandOutput) => void
  ): void;
  resetConnectorMetadataCache(
    args: ResetConnectorMetadataCacheCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: ResetConnectorMetadataCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFlowCommand}
   */
  startFlow(
    args: StartFlowCommandInput,
    options?: AppflowRequestOptions
  ): Promise<StartFlowCommandOutput>;
  startFlow(
    args: StartFlowCommandInput,
    cb: (err: any, data?: StartFlowCommandOutput) => void
  ): void;
  startFlow(
    args: StartFlowCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: StartFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link StopFlowCommand}
   */
  stopFlow(
    args: StopFlowCommandInput,
    options?: AppflowRequestOptions
  ): Promise<StopFlowCommandOutput>;
  stopFlow(
    args: StopFlowCommandInput,
    cb: (err: any, data?: StopFlowCommandOutput) => void
  ): void;
  stopFlow(
    args: StopFlowCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: StopFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: AppflowRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UnregisterConnectorCommand}
   */
  unregisterConnector(
    args: UnregisterConnectorCommandInput,
    options?: AppflowRequestOptions
  ): Promise<UnregisterConnectorCommandOutput>;
  unregisterConnector(
    args: UnregisterConnectorCommandInput,
    cb: (err: any, data?: UnregisterConnectorCommandOutput) => void
  ): void;
  unregisterConnector(
    args: UnregisterConnectorCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: UnregisterConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: AppflowRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectorProfileCommand}
   */
  updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    options?: AppflowRequestOptions
  ): Promise<UpdateConnectorProfileCommandOutput>;
  updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    cb: (err: any, data?: UpdateConnectorProfileCommandOutput) => void
  ): void;
  updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: UpdateConnectorProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectorRegistrationCommand}
   */
  updateConnectorRegistration(
    args: UpdateConnectorRegistrationCommandInput,
    options?: AppflowRequestOptions
  ): Promise<UpdateConnectorRegistrationCommandOutput>;
  updateConnectorRegistration(
    args: UpdateConnectorRegistrationCommandInput,
    cb: (err: any, data?: UpdateConnectorRegistrationCommandOutput) => void
  ): void;
  updateConnectorRegistration(
    args: UpdateConnectorRegistrationCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: UpdateConnectorRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowCommand}
   */
  updateFlow(
    args: UpdateFlowCommandInput,
    options?: AppflowRequestOptions
  ): Promise<UpdateFlowCommandOutput>;
  updateFlow(
    args: UpdateFlowCommandInput,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;
  updateFlow(
    args: UpdateFlowCommandInput,
    options: AppflowRequestOptions,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeConnectorProfilesCommandOutput}.
   */
  paginateDescribeConnectorProfiles(
    args?: DescribeConnectorProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeConnectorProfilesCommandOutput>;

  /**
   * @see {@link DescribeConnectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeConnectorsCommandOutput}.
   */
  paginateDescribeConnectors(
    args?: DescribeConnectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeConnectorsCommandOutput>;

  /**
   * @see {@link DescribeFlowExecutionRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeFlowExecutionRecordsCommandOutput}.
   */
  paginateDescribeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeFlowExecutionRecordsCommandOutput>;

  /**
   * @see {@link ListConnectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectorsCommandOutput}.
   */
  paginateListConnectors(
    args?: ListConnectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectorsCommandOutput>;

  /**
   * @see {@link ListFlowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFlowsCommandOutput}.
   */
  paginateListFlows(
    args?: ListFlowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFlowsCommandOutput>;
}

/**
 * <p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need
 *       detailed information about the Amazon AppFlow API operations, data types, and errors. </p>
 *          <p>Amazon AppFlow is a fully managed integration service that enables you to securely
 *       transfer data between software as a service (SaaS) applications like Salesforce, Marketo,
 *       Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift. </p>
 *          <p>Use the following links to get started on the Amazon AppFlow API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data
 *             types</a>: An alphabetical list of all Amazon AppFlow data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common
 *             errors</a>: Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *          <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow
 *         User Guide</a>.</p>
 *          <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include
 *       applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with
 *       the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector
 *       profile using Amazon AppFlow API operations. For example, Salesforce users can refer to
 *       the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm">
 *                <i>Authorize Apps with OAuth</i>
 *             </a> documentation.</p>
 * @public
 */
export class Appflow extends AppflowClient implements Appflow {}
createAggregatedClient(commands, Appflow, { paginators });
