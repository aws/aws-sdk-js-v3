// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteThingShadowCommand,
  DeleteThingShadowCommandInput,
  DeleteThingShadowCommandOutput,
} from "./commands/DeleteThingShadowCommand";
import {
  GetRetainedMessageCommand,
  GetRetainedMessageCommandInput,
  GetRetainedMessageCommandOutput,
} from "./commands/GetRetainedMessageCommand";
import {
  GetThingShadowCommand,
  GetThingShadowCommandInput,
  GetThingShadowCommandOutput,
} from "./commands/GetThingShadowCommand";
import {
  ListNamedShadowsForThingCommand,
  ListNamedShadowsForThingCommandInput,
  ListNamedShadowsForThingCommandOutput,
} from "./commands/ListNamedShadowsForThingCommand";
import {
  ListRetainedMessagesCommand,
  ListRetainedMessagesCommandInput,
  ListRetainedMessagesCommandOutput,
} from "./commands/ListRetainedMessagesCommand";
import { PublishCommand, PublishCommandInput, PublishCommandOutput } from "./commands/PublishCommand";
import {
  UpdateThingShadowCommand,
  UpdateThingShadowCommandInput,
  UpdateThingShadowCommandOutput,
} from "./commands/UpdateThingShadowCommand";
import { IoTDataPlaneClient, IoTDataPlaneClientConfig } from "./IoTDataPlaneClient";

const commands = {
  DeleteThingShadowCommand,
  GetRetainedMessageCommand,
  GetThingShadowCommand,
  ListNamedShadowsForThingCommand,
  ListRetainedMessagesCommand,
  PublishCommand,
  UpdateThingShadowCommand,
};

export interface IoTDataPlane {
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
  getThingShadow(args: GetThingShadowCommandInput, cb: (err: any, data?: GetThingShadowCommandOutput) => void): void;
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
   * @see {@link PublishCommand}
   */
  publish(args: PublishCommandInput, options?: __HttpHandlerOptions): Promise<PublishCommandOutput>;
  publish(args: PublishCommandInput, cb: (err: any, data?: PublishCommandOutput) => void): void;
  publish(
    args: PublishCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishCommandOutput) => void
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
}

/**
 * @public
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
 */
export class IoTDataPlane extends IoTDataPlaneClient implements IoTDataPlane {}
createAggregatedClient(commands, IoTDataPlane);
