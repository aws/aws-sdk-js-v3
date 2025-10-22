// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AcceptLinkCommand, AcceptLinkCommandInput, AcceptLinkCommandOutput } from "./commands/AcceptLinkCommand";
import {
  CreateInboundExternalLinkCommand,
  CreateInboundExternalLinkCommandInput,
  CreateInboundExternalLinkCommandOutput,
} from "./commands/CreateInboundExternalLinkCommand";
import { CreateLinkCommand, CreateLinkCommandInput, CreateLinkCommandOutput } from "./commands/CreateLinkCommand";
import {
  CreateOutboundExternalLinkCommand,
  CreateOutboundExternalLinkCommandInput,
  CreateOutboundExternalLinkCommandOutput,
} from "./commands/CreateOutboundExternalLinkCommand";
import {
  CreateRequesterGatewayCommand,
  CreateRequesterGatewayCommandInput,
  CreateRequesterGatewayCommandOutput,
} from "./commands/CreateRequesterGatewayCommand";
import {
  CreateResponderGatewayCommand,
  CreateResponderGatewayCommandInput,
  CreateResponderGatewayCommandOutput,
} from "./commands/CreateResponderGatewayCommand";
import {
  DeleteInboundExternalLinkCommand,
  DeleteInboundExternalLinkCommandInput,
  DeleteInboundExternalLinkCommandOutput,
} from "./commands/DeleteInboundExternalLinkCommand";
import { DeleteLinkCommand, DeleteLinkCommandInput, DeleteLinkCommandOutput } from "./commands/DeleteLinkCommand";
import {
  DeleteOutboundExternalLinkCommand,
  DeleteOutboundExternalLinkCommandInput,
  DeleteOutboundExternalLinkCommandOutput,
} from "./commands/DeleteOutboundExternalLinkCommand";
import {
  DeleteRequesterGatewayCommand,
  DeleteRequesterGatewayCommandInput,
  DeleteRequesterGatewayCommandOutput,
} from "./commands/DeleteRequesterGatewayCommand";
import {
  DeleteResponderGatewayCommand,
  DeleteResponderGatewayCommandInput,
  DeleteResponderGatewayCommandOutput,
} from "./commands/DeleteResponderGatewayCommand";
import {
  GetInboundExternalLinkCommand,
  GetInboundExternalLinkCommandInput,
  GetInboundExternalLinkCommandOutput,
} from "./commands/GetInboundExternalLinkCommand";
import { GetLinkCommand, GetLinkCommandInput, GetLinkCommandOutput } from "./commands/GetLinkCommand";
import {
  GetOutboundExternalLinkCommand,
  GetOutboundExternalLinkCommandInput,
  GetOutboundExternalLinkCommandOutput,
} from "./commands/GetOutboundExternalLinkCommand";
import {
  GetRequesterGatewayCommand,
  GetRequesterGatewayCommandInput,
  GetRequesterGatewayCommandOutput,
} from "./commands/GetRequesterGatewayCommand";
import {
  GetResponderGatewayCommand,
  GetResponderGatewayCommandInput,
  GetResponderGatewayCommandOutput,
} from "./commands/GetResponderGatewayCommand";
import { ListLinksCommand, ListLinksCommandInput, ListLinksCommandOutput } from "./commands/ListLinksCommand";
import {
  ListRequesterGatewaysCommand,
  ListRequesterGatewaysCommandInput,
  ListRequesterGatewaysCommandOutput,
} from "./commands/ListRequesterGatewaysCommand";
import {
  ListResponderGatewaysCommand,
  ListResponderGatewaysCommandInput,
  ListResponderGatewaysCommandOutput,
} from "./commands/ListResponderGatewaysCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RejectLinkCommand, RejectLinkCommandInput, RejectLinkCommandOutput } from "./commands/RejectLinkCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateLinkCommand, UpdateLinkCommandInput, UpdateLinkCommandOutput } from "./commands/UpdateLinkCommand";
import {
  UpdateLinkModuleFlowCommand,
  UpdateLinkModuleFlowCommandInput,
  UpdateLinkModuleFlowCommandOutput,
} from "./commands/UpdateLinkModuleFlowCommand";
import {
  UpdateRequesterGatewayCommand,
  UpdateRequesterGatewayCommandInput,
  UpdateRequesterGatewayCommandOutput,
} from "./commands/UpdateRequesterGatewayCommand";
import {
  UpdateResponderGatewayCommand,
  UpdateResponderGatewayCommandInput,
  UpdateResponderGatewayCommandOutput,
} from "./commands/UpdateResponderGatewayCommand";
import { RTBFabricClient, RTBFabricClientConfig } from "./RTBFabricClient";

const commands = {
  AcceptLinkCommand,
  CreateInboundExternalLinkCommand,
  CreateLinkCommand,
  CreateOutboundExternalLinkCommand,
  CreateRequesterGatewayCommand,
  CreateResponderGatewayCommand,
  DeleteInboundExternalLinkCommand,
  DeleteLinkCommand,
  DeleteOutboundExternalLinkCommand,
  DeleteRequesterGatewayCommand,
  DeleteResponderGatewayCommand,
  GetInboundExternalLinkCommand,
  GetLinkCommand,
  GetOutboundExternalLinkCommand,
  GetRequesterGatewayCommand,
  GetResponderGatewayCommand,
  ListLinksCommand,
  ListRequesterGatewaysCommand,
  ListResponderGatewaysCommand,
  ListTagsForResourceCommand,
  RejectLinkCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLinkCommand,
  UpdateLinkModuleFlowCommand,
  UpdateRequesterGatewayCommand,
  UpdateResponderGatewayCommand,
};

export interface RTBFabric {
  /**
   * @see {@link AcceptLinkCommand}
   */
  acceptLink(args: AcceptLinkCommandInput, options?: __HttpHandlerOptions): Promise<AcceptLinkCommandOutput>;
  acceptLink(args: AcceptLinkCommandInput, cb: (err: any, data?: AcceptLinkCommandOutput) => void): void;
  acceptLink(
    args: AcceptLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInboundExternalLinkCommand}
   */
  createInboundExternalLink(
    args: CreateInboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInboundExternalLinkCommandOutput>;
  createInboundExternalLink(
    args: CreateInboundExternalLinkCommandInput,
    cb: (err: any, data?: CreateInboundExternalLinkCommandOutput) => void
  ): void;
  createInboundExternalLink(
    args: CreateInboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLinkCommand}
   */
  createLink(args: CreateLinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateLinkCommandOutput>;
  createLink(args: CreateLinkCommandInput, cb: (err: any, data?: CreateLinkCommandOutput) => void): void;
  createLink(
    args: CreateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOutboundExternalLinkCommand}
   */
  createOutboundExternalLink(
    args: CreateOutboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOutboundExternalLinkCommandOutput>;
  createOutboundExternalLink(
    args: CreateOutboundExternalLinkCommandInput,
    cb: (err: any, data?: CreateOutboundExternalLinkCommandOutput) => void
  ): void;
  createOutboundExternalLink(
    args: CreateOutboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOutboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRequesterGatewayCommand}
   */
  createRequesterGateway(
    args: CreateRequesterGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRequesterGatewayCommandOutput>;
  createRequesterGateway(
    args: CreateRequesterGatewayCommandInput,
    cb: (err: any, data?: CreateRequesterGatewayCommandOutput) => void
  ): void;
  createRequesterGateway(
    args: CreateRequesterGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRequesterGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResponderGatewayCommand}
   */
  createResponderGateway(
    args: CreateResponderGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResponderGatewayCommandOutput>;
  createResponderGateway(
    args: CreateResponderGatewayCommandInput,
    cb: (err: any, data?: CreateResponderGatewayCommandOutput) => void
  ): void;
  createResponderGateway(
    args: CreateResponderGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResponderGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInboundExternalLinkCommand}
   */
  deleteInboundExternalLink(
    args: DeleteInboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInboundExternalLinkCommandOutput>;
  deleteInboundExternalLink(
    args: DeleteInboundExternalLinkCommandInput,
    cb: (err: any, data?: DeleteInboundExternalLinkCommandOutput) => void
  ): void;
  deleteInboundExternalLink(
    args: DeleteInboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLinkCommand}
   */
  deleteLink(args: DeleteLinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLinkCommandOutput>;
  deleteLink(args: DeleteLinkCommandInput, cb: (err: any, data?: DeleteLinkCommandOutput) => void): void;
  deleteLink(
    args: DeleteLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOutboundExternalLinkCommand}
   */
  deleteOutboundExternalLink(
    args: DeleteOutboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOutboundExternalLinkCommandOutput>;
  deleteOutboundExternalLink(
    args: DeleteOutboundExternalLinkCommandInput,
    cb: (err: any, data?: DeleteOutboundExternalLinkCommandOutput) => void
  ): void;
  deleteOutboundExternalLink(
    args: DeleteOutboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOutboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRequesterGatewayCommand}
   */
  deleteRequesterGateway(
    args: DeleteRequesterGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRequesterGatewayCommandOutput>;
  deleteRequesterGateway(
    args: DeleteRequesterGatewayCommandInput,
    cb: (err: any, data?: DeleteRequesterGatewayCommandOutput) => void
  ): void;
  deleteRequesterGateway(
    args: DeleteRequesterGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRequesterGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResponderGatewayCommand}
   */
  deleteResponderGateway(
    args: DeleteResponderGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResponderGatewayCommandOutput>;
  deleteResponderGateway(
    args: DeleteResponderGatewayCommandInput,
    cb: (err: any, data?: DeleteResponderGatewayCommandOutput) => void
  ): void;
  deleteResponderGateway(
    args: DeleteResponderGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResponderGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInboundExternalLinkCommand}
   */
  getInboundExternalLink(
    args: GetInboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInboundExternalLinkCommandOutput>;
  getInboundExternalLink(
    args: GetInboundExternalLinkCommandInput,
    cb: (err: any, data?: GetInboundExternalLinkCommandOutput) => void
  ): void;
  getInboundExternalLink(
    args: GetInboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkCommand}
   */
  getLink(args: GetLinkCommandInput, options?: __HttpHandlerOptions): Promise<GetLinkCommandOutput>;
  getLink(args: GetLinkCommandInput, cb: (err: any, data?: GetLinkCommandOutput) => void): void;
  getLink(
    args: GetLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOutboundExternalLinkCommand}
   */
  getOutboundExternalLink(
    args: GetOutboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOutboundExternalLinkCommandOutput>;
  getOutboundExternalLink(
    args: GetOutboundExternalLinkCommandInput,
    cb: (err: any, data?: GetOutboundExternalLinkCommandOutput) => void
  ): void;
  getOutboundExternalLink(
    args: GetOutboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRequesterGatewayCommand}
   */
  getRequesterGateway(
    args: GetRequesterGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequesterGatewayCommandOutput>;
  getRequesterGateway(
    args: GetRequesterGatewayCommandInput,
    cb: (err: any, data?: GetRequesterGatewayCommandOutput) => void
  ): void;
  getRequesterGateway(
    args: GetRequesterGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequesterGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResponderGatewayCommand}
   */
  getResponderGateway(
    args: GetResponderGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResponderGatewayCommandOutput>;
  getResponderGateway(
    args: GetResponderGatewayCommandInput,
    cb: (err: any, data?: GetResponderGatewayCommandOutput) => void
  ): void;
  getResponderGateway(
    args: GetResponderGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResponderGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinksCommand}
   */
  listLinks(args: ListLinksCommandInput, options?: __HttpHandlerOptions): Promise<ListLinksCommandOutput>;
  listLinks(args: ListLinksCommandInput, cb: (err: any, data?: ListLinksCommandOutput) => void): void;
  listLinks(
    args: ListLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRequesterGatewaysCommand}
   */
  listRequesterGateways(): Promise<ListRequesterGatewaysCommandOutput>;
  listRequesterGateways(
    args: ListRequesterGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRequesterGatewaysCommandOutput>;
  listRequesterGateways(
    args: ListRequesterGatewaysCommandInput,
    cb: (err: any, data?: ListRequesterGatewaysCommandOutput) => void
  ): void;
  listRequesterGateways(
    args: ListRequesterGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRequesterGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResponderGatewaysCommand}
   */
  listResponderGateways(): Promise<ListResponderGatewaysCommandOutput>;
  listResponderGateways(
    args: ListResponderGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResponderGatewaysCommandOutput>;
  listResponderGateways(
    args: ListResponderGatewaysCommandInput,
    cb: (err: any, data?: ListResponderGatewaysCommandOutput) => void
  ): void;
  listResponderGateways(
    args: ListResponderGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResponderGatewaysCommandOutput) => void
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
   * @see {@link RejectLinkCommand}
   */
  rejectLink(args: RejectLinkCommandInput, options?: __HttpHandlerOptions): Promise<RejectLinkCommandOutput>;
  rejectLink(args: RejectLinkCommandInput, cb: (err: any, data?: RejectLinkCommandOutput) => void): void;
  rejectLink(
    args: RejectLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectLinkCommandOutput) => void
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
   * @see {@link UpdateLinkCommand}
   */
  updateLink(args: UpdateLinkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLinkCommandOutput>;
  updateLink(args: UpdateLinkCommandInput, cb: (err: any, data?: UpdateLinkCommandOutput) => void): void;
  updateLink(
    args: UpdateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLinkModuleFlowCommand}
   */
  updateLinkModuleFlow(
    args: UpdateLinkModuleFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLinkModuleFlowCommandOutput>;
  updateLinkModuleFlow(
    args: UpdateLinkModuleFlowCommandInput,
    cb: (err: any, data?: UpdateLinkModuleFlowCommandOutput) => void
  ): void;
  updateLinkModuleFlow(
    args: UpdateLinkModuleFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkModuleFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRequesterGatewayCommand}
   */
  updateRequesterGateway(
    args: UpdateRequesterGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRequesterGatewayCommandOutput>;
  updateRequesterGateway(
    args: UpdateRequesterGatewayCommandInput,
    cb: (err: any, data?: UpdateRequesterGatewayCommandOutput) => void
  ): void;
  updateRequesterGateway(
    args: UpdateRequesterGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRequesterGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResponderGatewayCommand}
   */
  updateResponderGateway(
    args: UpdateResponderGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResponderGatewayCommandOutput>;
  updateResponderGateway(
    args: UpdateResponderGatewayCommandInput,
    cb: (err: any, data?: UpdateResponderGatewayCommandOutput) => void
  ): void;
  updateResponderGateway(
    args: UpdateResponderGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResponderGatewayCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Web Services RTB Fabric provides secure, low-latency infrastructure for connecting real-time bidding (RTB) applications. Rather than hosting applications directly, RTB Fabric acts as the connecting fabric that enables your applications to communicate efficiently over private networks instead of the public internet. You maintain complete control over your applications, data, and bidding decisions, while RTB Fabric provides the underlying infrastructure for secure, reliable connectivity.</p> <p>You can use these APIs to complete RTB Fabric tasks, such as setting up audit log ingestions or viewing user access. For more information about RTB Fabric, including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/rtb-fabric/latest/userguide/">Amazon Web Services RTB Fabric User Guide</a>.</p>
 * @public
 */
export class RTBFabric extends RTBFabricClient implements RTBFabric {}
createAggregatedClient(commands, RTBFabric);
