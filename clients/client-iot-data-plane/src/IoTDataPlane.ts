import { IoTDataPlaneClient } from "./IoTDataPlaneClient";
import {
  DeleteThingShadowCommand,
  DeleteThingShadowCommandInput,
  DeleteThingShadowCommandOutput,
} from "./commands/DeleteThingShadowCommand";
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
import { PublishCommand, PublishCommandInput, PublishCommandOutput } from "./commands/PublishCommand";
import {
  UpdateThingShadowCommand,
  UpdateThingShadowCommandInput,
  UpdateThingShadowCommandOutput,
} from "./commands/UpdateThingShadowCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS IoT</fullname>
 *          <p>AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors,
 *       actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and
 *       things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a
 *       persistent representation of your things and their state in the AWS cloud.</p>
 *          <p>Find the endpoint address for actions in the AWS IoT data plane by running this CLI command:</p>
 *          <p>
 *             <code>aws iot describe-endpoint --endpoint-type iot:Data-ATS</code>
 *          </p>
 *          <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">AWS Signature Version 4</a>
 *       to sign requests is: <i>iotdevicegateway</i>.</p>
 */
export class IoTDataPlane extends IoTDataPlaneClient {
  /**
   * <p>Deletes the shadow for the specified thing.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the AWS IoT Developer Guide.</p>
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
   * <p>Gets the shadow for the specified thing.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the
   *         AWS IoT Developer Guide.</p>
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
   * <p>Publishes state information.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/protocols.html#http">HTTP Protocol</a> in the
   *        AWS IoT Developer Guide.</p>
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
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the
   *         AWS IoT Developer Guide.</p>
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
