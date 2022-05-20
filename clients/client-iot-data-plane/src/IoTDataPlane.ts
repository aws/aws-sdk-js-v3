// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { IoTDataPlaneClient } from "./IoTDataPlaneClient";

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
 */
export class IoTDataPlane extends IoTDataPlaneClient {
  /**
   * <p>Deletes the shadow for the specified thing.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingShadow</a> action.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the IoT Developer Guide.</p>
   */
  public deleteThingShadow(
    args: DeleteThingShadowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThingShadowCommandOutput>;
  public deleteThingShadow(
    args: DeleteThingShadowCommandInput,
    cb: (err: any, data?: DeleteThingShadowCommandOutput) => void
  ): void;
  public deleteThingShadow(
    args: DeleteThingShadowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThingShadowCommandOutput) => void
  ): void;
  public deleteThingShadow(
    args: DeleteThingShadowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteThingShadowCommandOutput) => void),
    cb?: (err: any, data?: DeleteThingShadowCommandOutput) => void
  ): Promise<DeleteThingShadowCommandOutput> | void {
    const command = new DeleteThingShadowCommand(args);
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
   * <p>Gets the details of a single retained message for the specified topic.</p>
   *          <p>This action returns the message payload of the retained message, which can
   *       incur messaging costs. To list only the topic names of the retained messages, call
   *       <a href="/iot/latest/developerguide/API_iotdata_ListRetainedMessages.html">ListRetainedMessages</a>.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">GetRetainedMessage</a> action.</p>
   *          <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core
   *       pricing - Messaging</a>.</p>
   */
  public getRetainedMessage(
    args: GetRetainedMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRetainedMessageCommandOutput>;
  public getRetainedMessage(
    args: GetRetainedMessageCommandInput,
    cb: (err: any, data?: GetRetainedMessageCommandOutput) => void
  ): void;
  public getRetainedMessage(
    args: GetRetainedMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRetainedMessageCommandOutput) => void
  ): void;
  public getRetainedMessage(
    args: GetRetainedMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRetainedMessageCommandOutput) => void),
    cb?: (err: any, data?: GetRetainedMessageCommandOutput) => void
  ): Promise<GetRetainedMessageCommandOutput> | void {
    const command = new GetRetainedMessageCommand(args);
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
   * <p>Gets the shadow for the specified thing.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetThingShadow</a> action.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the
   *         IoT Developer Guide.</p>
   */
  public getThingShadow(
    args: GetThingShadowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThingShadowCommandOutput>;
  public getThingShadow(
    args: GetThingShadowCommandInput,
    cb: (err: any, data?: GetThingShadowCommandOutput) => void
  ): void;
  public getThingShadow(
    args: GetThingShadowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThingShadowCommandOutput) => void
  ): void;
  public getThingShadow(
    args: GetThingShadowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetThingShadowCommandOutput) => void),
    cb?: (err: any, data?: GetThingShadowCommandOutput) => void
  ): Promise<GetThingShadowCommandOutput> | void {
    const command = new GetThingShadowCommand(args);
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
   * <p>Lists the shadows for the specified thing.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListNamedShadowsForThing</a> action.</p>
   */
  public listNamedShadowsForThing(
    args: ListNamedShadowsForThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamedShadowsForThingCommandOutput>;
  public listNamedShadowsForThing(
    args: ListNamedShadowsForThingCommandInput,
    cb: (err: any, data?: ListNamedShadowsForThingCommandOutput) => void
  ): void;
  public listNamedShadowsForThing(
    args: ListNamedShadowsForThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamedShadowsForThingCommandOutput) => void
  ): void;
  public listNamedShadowsForThing(
    args: ListNamedShadowsForThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNamedShadowsForThingCommandOutput) => void),
    cb?: (err: any, data?: ListNamedShadowsForThingCommandOutput) => void
  ): Promise<ListNamedShadowsForThingCommandOutput> | void {
    const command = new ListNamedShadowsForThingCommand(args);
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
   * <p>Lists summary information about the retained messages stored for the account.</p>
   *          <p>This action returns only the topic names of the retained messages. It doesn't
   *       return any message payloads. Although this action doesn't return a message payload,
   *       it can still incur messaging costs.</p>
   *          <p>To get the message payload of a retained message, call
   *       <a href="https://docs.aws.amazon.com/iot/latest/developerguide/API_iotdata_GetRetainedMessage.html">GetRetainedMessage</a>
   *       with the topic name of the retained message.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">ListRetainedMessages</a> action.</p>
   *          <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core
   *       pricing - Messaging</a>.</p>
   */
  public listRetainedMessages(
    args: ListRetainedMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRetainedMessagesCommandOutput>;
  public listRetainedMessages(
    args: ListRetainedMessagesCommandInput,
    cb: (err: any, data?: ListRetainedMessagesCommandOutput) => void
  ): void;
  public listRetainedMessages(
    args: ListRetainedMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRetainedMessagesCommandOutput) => void
  ): void;
  public listRetainedMessages(
    args: ListRetainedMessagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRetainedMessagesCommandOutput) => void),
    cb?: (err: any, data?: ListRetainedMessagesCommandOutput) => void
  ): Promise<ListRetainedMessagesCommandOutput> | void {
    const command = new ListRetainedMessagesCommand(args);
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
   * <p>Publishes an MQTT message.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">Publish</a> action.</p>
   *          <p>For more information about MQTT messages, see
   *       <a href="http://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html">MQTT Protocol</a> in the
   *        IoT Developer Guide.</p>
   *          <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core
   *       pricing - Messaging</a>.</p>
   */
  public publish(args: PublishCommandInput, options?: __HttpHandlerOptions): Promise<PublishCommandOutput>;
  public publish(args: PublishCommandInput, cb: (err: any, data?: PublishCommandOutput) => void): void;
  public publish(
    args: PublishCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishCommandOutput) => void
  ): void;
  public publish(
    args: PublishCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PublishCommandOutput) => void),
    cb?: (err: any, data?: PublishCommandOutput) => void
  ): Promise<PublishCommandOutput> | void {
    const command = new PublishCommand(args);
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
   * <p>Updates the shadow for the specified thing.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingShadow</a> action.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the
   *         IoT Developer Guide.</p>
   */
  public updateThingShadow(
    args: UpdateThingShadowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThingShadowCommandOutput>;
  public updateThingShadow(
    args: UpdateThingShadowCommandInput,
    cb: (err: any, data?: UpdateThingShadowCommandOutput) => void
  ): void;
  public updateThingShadow(
    args: UpdateThingShadowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThingShadowCommandOutput) => void
  ): void;
  public updateThingShadow(
    args: UpdateThingShadowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThingShadowCommandOutput) => void),
    cb?: (err: any, data?: UpdateThingShadowCommandOutput) => void
  ): Promise<UpdateThingShadowCommandOutput> | void {
    const command = new UpdateThingShadowCommand(args);
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
