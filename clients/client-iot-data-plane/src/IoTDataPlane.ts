// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  DeleteConnectionCommand,
} from "./commands/DeleteConnectionCommand";
import {
  type DeleteThingShadowCommandInput,
  type DeleteThingShadowCommandOutput,
  DeleteThingShadowCommand,
} from "./commands/DeleteThingShadowCommand";
import {
  type GetConnectionCommandInput,
  type GetConnectionCommandOutput,
  GetConnectionCommand,
} from "./commands/GetConnectionCommand";
import {
  type GetRetainedMessageCommandInput,
  type GetRetainedMessageCommandOutput,
  GetRetainedMessageCommand,
} from "./commands/GetRetainedMessageCommand";
import {
  type GetThingShadowCommandInput,
  type GetThingShadowCommandOutput,
  GetThingShadowCommand,
} from "./commands/GetThingShadowCommand";
import {
  type ListNamedShadowsForThingCommandInput,
  type ListNamedShadowsForThingCommandOutput,
  ListNamedShadowsForThingCommand,
} from "./commands/ListNamedShadowsForThingCommand";
import {
  type ListRetainedMessagesCommandInput,
  type ListRetainedMessagesCommandOutput,
  ListRetainedMessagesCommand,
} from "./commands/ListRetainedMessagesCommand";
import {
  type ListSubscriptionsCommandInput,
  type ListSubscriptionsCommandOutput,
  ListSubscriptionsCommand,
} from "./commands/ListSubscriptionsCommand";
import { type PublishCommandInput, type PublishCommandOutput, PublishCommand } from "./commands/PublishCommand";
import {
  type SendDirectMessageCommandInput,
  type SendDirectMessageCommandOutput,
  SendDirectMessageCommand,
} from "./commands/SendDirectMessageCommand";
import {
  type UpdateThingShadowCommandInput,
  type UpdateThingShadowCommandOutput,
  UpdateThingShadowCommand,
} from "./commands/UpdateThingShadowCommand";
import { IoTDataPlaneClient } from "./IoTDataPlaneClient";
import { paginateListRetainedMessages } from "./pagination/ListRetainedMessagesPaginator";
import { paginateListSubscriptions } from "./pagination/ListSubscriptionsPaginator";

const commands = {
  DeleteConnectionCommand,
  DeleteThingShadowCommand,
  GetConnectionCommand,
  GetRetainedMessageCommand,
  GetThingShadowCommand,
  ListNamedShadowsForThingCommand,
  ListRetainedMessagesCommand,
  ListSubscriptionsCommand,
  PublishCommand,
  SendDirectMessageCommand,
  UpdateThingShadowCommand,
};
const paginators = {
  paginateListRetainedMessages,
  paginateListSubscriptions,
};

export interface IoTDataPlane {
  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThingShadowCommand}
   */
  deleteThingShadow(
    args: DeleteThingShadowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThingShadowCommandOutput>;
  deleteThingShadow(
    args: DeleteThingShadowCommandInput,
    cb: (err: any, data?: DeleteThingShadowCommandOutput) => void
  ): void;
  deleteThingShadow(
    args: DeleteThingShadowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThingShadowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionCommandOutput>;
  getConnection(
    args: GetConnectionCommandInput,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRetainedMessageCommand}
   */
  getRetainedMessage(
    args: GetRetainedMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRetainedMessageCommandOutput>;
  getRetainedMessage(
    args: GetRetainedMessageCommandInput,
    cb: (err: any, data?: GetRetainedMessageCommandOutput) => void
  ): void;
  getRetainedMessage(
    args: GetRetainedMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRetainedMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetThingShadowCommand}
   */
  getThingShadow(
    args: GetThingShadowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThingShadowCommandOutput>;
  getThingShadow(
    args: GetThingShadowCommandInput,
    cb: (err: any, data?: GetThingShadowCommandOutput) => void
  ): void;
  getThingShadow(
    args: GetThingShadowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThingShadowCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNamedShadowsForThingCommand}
   */
  listNamedShadowsForThing(
    args: ListNamedShadowsForThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamedShadowsForThingCommandOutput>;
  listNamedShadowsForThing(
    args: ListNamedShadowsForThingCommandInput,
    cb: (err: any, data?: ListNamedShadowsForThingCommandOutput) => void
  ): void;
  listNamedShadowsForThing(
    args: ListNamedShadowsForThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamedShadowsForThingCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRetainedMessagesCommand}
   */
  listRetainedMessages(): Promise<ListRetainedMessagesCommandOutput>;
  listRetainedMessages(
    args: ListRetainedMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRetainedMessagesCommandOutput>;
  listRetainedMessages(
    args: ListRetainedMessagesCommandInput,
    cb: (err: any, data?: ListRetainedMessagesCommandOutput) => void
  ): void;
  listRetainedMessages(
    args: ListRetainedMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRetainedMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionsCommandOutput>;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishCommand}
   */
  publish(
    args: PublishCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishCommandOutput>;
  publish(
    args: PublishCommandInput,
    cb: (err: any, data?: PublishCommandOutput) => void
  ): void;
  publish(
    args: PublishCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishCommandOutput) => void
  ): void;

  /**
   * @see {@link SendDirectMessageCommand}
   */
  sendDirectMessage(
    args: SendDirectMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDirectMessageCommandOutput>;
  sendDirectMessage(
    args: SendDirectMessageCommandInput,
    cb: (err: any, data?: SendDirectMessageCommandOutput) => void
  ): void;
  sendDirectMessage(
    args: SendDirectMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDirectMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThingShadowCommand}
   */
  updateThingShadow(
    args: UpdateThingShadowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThingShadowCommandOutput>;
  updateThingShadow(
    args: UpdateThingShadowCommandInput,
    cb: (err: any, data?: UpdateThingShadowCommandOutput) => void
  ): void;
  updateThingShadow(
    args: UpdateThingShadowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThingShadowCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRetainedMessagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRetainedMessagesCommandOutput}.
   */
  paginateListRetainedMessages(
    args?: ListRetainedMessagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRetainedMessagesCommandOutput>;

  /**
   * @see {@link ListSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscriptionsCommandOutput}.
   */
  paginateListSubscriptions(
    args: ListSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscriptionsCommandOutput>;
}

/**
 * <fullname>IoT data</fullname>
 *          <p>IoT data enables secure, bi-directional communication between Internet-connected things (such as sensors,
 *       actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. It implements a broker for applications and
 *       things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a
 *       persistent representation of your things and their state in the Amazon Web Services cloud.</p>
 *          <p>Find the endpoint address for actions in IoT data by running this CLI command:</p>
 *          <p>
 *             <code>aws iot describe-endpoint --endpoint-type iot:Data-ATS</code>
 *          </p>
 *          <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web ServicesSignature Version 4</a>
 *       to sign requests is: <i>iotdevicegateway</i>.</p>
 * @public
 */
export class IoTDataPlane extends IoTDataPlaneClient implements IoTDataPlane {}
createAggregatedClient(commands, IoTDataPlane, { paginators });
