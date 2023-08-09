// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AppflowClient, AppflowClientConfig } from "./AppflowClient";
import {
  CancelFlowExecutionsCommand,
  CancelFlowExecutionsCommandInput,
  CancelFlowExecutionsCommandOutput,
} from "./commands/CancelFlowExecutionsCommand";
import {
  CreateConnectorProfileCommand,
  CreateConnectorProfileCommandInput,
  CreateConnectorProfileCommandOutput,
} from "./commands/CreateConnectorProfileCommand";
import { CreateFlowCommand, CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import {
  DeleteConnectorProfileCommand,
  DeleteConnectorProfileCommandInput,
  DeleteConnectorProfileCommandOutput,
} from "./commands/DeleteConnectorProfileCommand";
import { DeleteFlowCommand, DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import {
  DescribeConnectorCommand,
  DescribeConnectorCommandInput,
  DescribeConnectorCommandOutput,
} from "./commands/DescribeConnectorCommand";
import {
  DescribeConnectorEntityCommand,
  DescribeConnectorEntityCommandInput,
  DescribeConnectorEntityCommandOutput,
} from "./commands/DescribeConnectorEntityCommand";
import {
  DescribeConnectorProfilesCommand,
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "./commands/DescribeConnectorProfilesCommand";
import {
  DescribeConnectorsCommand,
  DescribeConnectorsCommandInput,
  DescribeConnectorsCommandOutput,
} from "./commands/DescribeConnectorsCommand";
import {
  DescribeFlowCommand,
  DescribeFlowCommandInput,
  DescribeFlowCommandOutput,
} from "./commands/DescribeFlowCommand";
import {
  DescribeFlowExecutionRecordsCommand,
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
} from "./commands/DescribeFlowExecutionRecordsCommand";
import {
  ListConnectorEntitiesCommand,
  ListConnectorEntitiesCommandInput,
  ListConnectorEntitiesCommandOutput,
} from "./commands/ListConnectorEntitiesCommand";
import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "./commands/ListConnectorsCommand";
import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterConnectorCommand,
  RegisterConnectorCommandInput,
  RegisterConnectorCommandOutput,
} from "./commands/RegisterConnectorCommand";
import {
  ResetConnectorMetadataCacheCommand,
  ResetConnectorMetadataCacheCommandInput,
  ResetConnectorMetadataCacheCommandOutput,
} from "./commands/ResetConnectorMetadataCacheCommand";
import { StartFlowCommand, StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand";
import { StopFlowCommand, StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UnregisterConnectorCommand,
  UnregisterConnectorCommandInput,
  UnregisterConnectorCommandOutput,
} from "./commands/UnregisterConnectorCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConnectorProfileCommand,
  UpdateConnectorProfileCommandInput,
  UpdateConnectorProfileCommandOutput,
} from "./commands/UpdateConnectorProfileCommand";
import {
  UpdateConnectorRegistrationCommand,
  UpdateConnectorRegistrationCommandInput,
  UpdateConnectorRegistrationCommandOutput,
} from "./commands/UpdateConnectorRegistrationCommand";
import { UpdateFlowCommand, UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand";

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

export interface Appflow {
  /**
   * @see {@link CancelFlowExecutionsCommand}
   */
  cancelFlowExecutions(
    args: CancelFlowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelFlowExecutionsCommandOutput>;
  cancelFlowExecutions(
    args: CancelFlowExecutionsCommandInput,
    cb: (err: any, data?: CancelFlowExecutionsCommandOutput) => void
  ): void;
  cancelFlowExecutions(
    args: CancelFlowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelFlowExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectorProfileCommand}
   */
  createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorProfileCommandOutput>;
  createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    cb: (err: any, data?: CreateConnectorProfileCommandOutput) => void
  ): void;
  createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlowCommand}
   */
  createFlow(args: CreateFlowCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowCommandOutput>;
  createFlow(args: CreateFlowCommandInput, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
  createFlow(
    args: CreateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectorProfileCommand}
   */
  deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorProfileCommandOutput>;
  deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    cb: (err: any, data?: DeleteConnectorProfileCommandOutput) => void
  ): void;
  deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlowCommand}
   */
  deleteFlow(args: DeleteFlowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowCommandOutput>;
  deleteFlow(args: DeleteFlowCommandInput, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
  deleteFlow(
    args: DeleteFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorCommand}
   */
  describeConnector(
    args: DescribeConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorCommandOutput>;
  describeConnector(
    args: DescribeConnectorCommandInput,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  describeConnector(
    args: DescribeConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorEntityCommand}
   */
  describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorEntityCommandOutput>;
  describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    cb: (err: any, data?: DescribeConnectorEntityCommandOutput) => void
  ): void;
  describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorProfilesCommand}
   */
  describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorProfilesCommandOutput>;
  describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    cb: (err: any, data?: DescribeConnectorProfilesCommandOutput) => void
  ): void;
  describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorsCommand}
   */
  describeConnectors(
    args: DescribeConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorsCommandOutput>;
  describeConnectors(
    args: DescribeConnectorsCommandInput,
    cb: (err: any, data?: DescribeConnectorsCommandOutput) => void
  ): void;
  describeConnectors(
    args: DescribeConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowCommand}
   */
  describeFlow(args: DescribeFlowCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFlowCommandOutput>;
  describeFlow(args: DescribeFlowCommandInput, cb: (err: any, data?: DescribeFlowCommandOutput) => void): void;
  describeFlow(
    args: DescribeFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowExecutionRecordsCommand}
   */
  describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowExecutionRecordsCommandOutput>;
  describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    cb: (err: any, data?: DescribeFlowExecutionRecordsCommandOutput) => void
  ): void;
  describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowExecutionRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorEntitiesCommand}
   */
  listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorEntitiesCommandOutput>;
  listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    cb: (err: any, data?: ListConnectorEntitiesCommandOutput) => void
  ): void;
  listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorsCommand}
   */
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  listConnectors(args: ListConnectorsCommandInput, cb: (err: any, data?: ListConnectorsCommandOutput) => void): void;
  listConnectors(
    args: ListConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowsCommand}
   */
  listFlows(args: ListFlowsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowsCommandOutput>;
  listFlows(args: ListFlowsCommandInput, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
  listFlows(
    args: ListFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
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
   * @see {@link RegisterConnectorCommand}
   */
  registerConnector(
    args: RegisterConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterConnectorCommandOutput>;
  registerConnector(
    args: RegisterConnectorCommandInput,
    cb: (err: any, data?: RegisterConnectorCommandOutput) => void
  ): void;
  registerConnector(
    args: RegisterConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetConnectorMetadataCacheCommand}
   */
  resetConnectorMetadataCache(
    args: ResetConnectorMetadataCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetConnectorMetadataCacheCommandOutput>;
  resetConnectorMetadataCache(
    args: ResetConnectorMetadataCacheCommandInput,
    cb: (err: any, data?: ResetConnectorMetadataCacheCommandOutput) => void
  ): void;
  resetConnectorMetadataCache(
    args: ResetConnectorMetadataCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetConnectorMetadataCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFlowCommand}
   */
  startFlow(args: StartFlowCommandInput, options?: __HttpHandlerOptions): Promise<StartFlowCommandOutput>;
  startFlow(args: StartFlowCommandInput, cb: (err: any, data?: StartFlowCommandOutput) => void): void;
  startFlow(
    args: StartFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link StopFlowCommand}
   */
  stopFlow(args: StopFlowCommandInput, options?: __HttpHandlerOptions): Promise<StopFlowCommandOutput>;
  stopFlow(args: StopFlowCommandInput, cb: (err: any, data?: StopFlowCommandOutput) => void): void;
  stopFlow(
    args: StopFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFlowCommandOutput) => void
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
   * @see {@link UnregisterConnectorCommand}
   */
  unregisterConnector(
    args: UnregisterConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnregisterConnectorCommandOutput>;
  unregisterConnector(
    args: UnregisterConnectorCommandInput,
    cb: (err: any, data?: UnregisterConnectorCommandOutput) => void
  ): void;
  unregisterConnector(
    args: UnregisterConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnregisterConnectorCommandOutput) => void
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
   * @see {@link UpdateConnectorProfileCommand}
   */
  updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorProfileCommandOutput>;
  updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    cb: (err: any, data?: UpdateConnectorProfileCommandOutput) => void
  ): void;
  updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectorRegistrationCommand}
   */
  updateConnectorRegistration(
    args: UpdateConnectorRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorRegistrationCommandOutput>;
  updateConnectorRegistration(
    args: UpdateConnectorRegistrationCommandInput,
    cb: (err: any, data?: UpdateConnectorRegistrationCommandOutput) => void
  ): void;
  updateConnectorRegistration(
    args: UpdateConnectorRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowCommand}
   */
  updateFlow(args: UpdateFlowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowCommandOutput>;
  updateFlow(args: UpdateFlowCommandInput, cb: (err: any, data?: UpdateFlowCommandOutput) => void): void;
  updateFlow(
    args: UpdateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class Appflow extends AppflowClient implements Appflow {}
createAggregatedClient(commands, Appflow);
