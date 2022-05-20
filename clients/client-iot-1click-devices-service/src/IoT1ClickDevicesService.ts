// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  ClaimDevicesByClaimCodeCommand,
  ClaimDevicesByClaimCodeCommandInput,
  ClaimDevicesByClaimCodeCommandOutput,
} from "./commands/ClaimDevicesByClaimCodeCommand";
import {
  DescribeDeviceCommand,
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput,
} from "./commands/DescribeDeviceCommand";
import {
  FinalizeDeviceClaimCommand,
  FinalizeDeviceClaimCommandInput,
  FinalizeDeviceClaimCommandOutput,
} from "./commands/FinalizeDeviceClaimCommand";
import {
  GetDeviceMethodsCommand,
  GetDeviceMethodsCommandInput,
  GetDeviceMethodsCommandOutput,
} from "./commands/GetDeviceMethodsCommand";
import {
  InitiateDeviceClaimCommand,
  InitiateDeviceClaimCommandInput,
  InitiateDeviceClaimCommandOutput,
} from "./commands/InitiateDeviceClaimCommand";
import {
  InvokeDeviceMethodCommand,
  InvokeDeviceMethodCommandInput,
  InvokeDeviceMethodCommandOutput,
} from "./commands/InvokeDeviceMethodCommand";
import {
  ListDeviceEventsCommand,
  ListDeviceEventsCommandInput,
  ListDeviceEventsCommandOutput,
} from "./commands/ListDeviceEventsCommand";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UnclaimDeviceCommand,
  UnclaimDeviceCommandInput,
  UnclaimDeviceCommandOutput,
} from "./commands/UnclaimDeviceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDeviceStateCommand,
  UpdateDeviceStateCommandInput,
  UpdateDeviceStateCommandOutput,
} from "./commands/UpdateDeviceStateCommand";
import { IoT1ClickDevicesServiceClient } from "./IoT1ClickDevicesServiceClient";

/**
 * <p>Describes all of the AWS IoT 1-Click device-related API operations for the service.
 *  Also provides sample requests, responses, and errors for the supported web services
 *  protocols.</p>
 */
export class IoT1ClickDevicesService extends IoT1ClickDevicesServiceClient {
  /**
   * <p>Adds device(s) to your account (i.e., claim one or more devices) if and only if you
   *  received a claim code with the device(s).</p>
   */
  public claimDevicesByClaimCode(
    args: ClaimDevicesByClaimCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ClaimDevicesByClaimCodeCommandOutput>;
  public claimDevicesByClaimCode(
    args: ClaimDevicesByClaimCodeCommandInput,
    cb: (err: any, data?: ClaimDevicesByClaimCodeCommandOutput) => void
  ): void;
  public claimDevicesByClaimCode(
    args: ClaimDevicesByClaimCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ClaimDevicesByClaimCodeCommandOutput) => void
  ): void;
  public claimDevicesByClaimCode(
    args: ClaimDevicesByClaimCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ClaimDevicesByClaimCodeCommandOutput) => void),
    cb?: (err: any, data?: ClaimDevicesByClaimCodeCommandOutput) => void
  ): Promise<ClaimDevicesByClaimCodeCommandOutput> | void {
    const command = new ClaimDevicesByClaimCodeCommand(args);
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
   * <p>Given a device ID, returns a DescribeDeviceResponse object describing the
   *  details of the device.</p>
   */
  public describeDevice(
    args: DescribeDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceCommandOutput>;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDeviceCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): Promise<DescribeDeviceCommandOutput> | void {
    const command = new DescribeDeviceCommand(args);
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
   * <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
   *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
   *  and finalizing the claim. For a device of type button, a device event can
   *  be published by simply clicking the device.</p>
   *  </note>
   */
  public finalizeDeviceClaim(
    args: FinalizeDeviceClaimCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FinalizeDeviceClaimCommandOutput>;
  public finalizeDeviceClaim(
    args: FinalizeDeviceClaimCommandInput,
    cb: (err: any, data?: FinalizeDeviceClaimCommandOutput) => void
  ): void;
  public finalizeDeviceClaim(
    args: FinalizeDeviceClaimCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FinalizeDeviceClaimCommandOutput) => void
  ): void;
  public finalizeDeviceClaim(
    args: FinalizeDeviceClaimCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FinalizeDeviceClaimCommandOutput) => void),
    cb?: (err: any, data?: FinalizeDeviceClaimCommandOutput) => void
  ): Promise<FinalizeDeviceClaimCommandOutput> | void {
    const command = new FinalizeDeviceClaimCommand(args);
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
   * <p>Given a device ID, returns the invokable methods associated with the device.</p>
   */
  public getDeviceMethods(
    args: GetDeviceMethodsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceMethodsCommandOutput>;
  public getDeviceMethods(
    args: GetDeviceMethodsCommandInput,
    cb: (err: any, data?: GetDeviceMethodsCommandOutput) => void
  ): void;
  public getDeviceMethods(
    args: GetDeviceMethodsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceMethodsCommandOutput) => void
  ): void;
  public getDeviceMethods(
    args: GetDeviceMethodsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceMethodsCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceMethodsCommandOutput) => void
  ): Promise<GetDeviceMethodsCommandOutput> | void {
    const command = new GetDeviceMethodsCommand(args);
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
   * <p>Given a device ID, initiates a claim request for the associated device.</p><note>
   *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
   *  and finalizing the claim. For a device of type button, a device event can
   *  be published by simply clicking the device.</p>
   *  </note>
   */
  public initiateDeviceClaim(
    args: InitiateDeviceClaimCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateDeviceClaimCommandOutput>;
  public initiateDeviceClaim(
    args: InitiateDeviceClaimCommandInput,
    cb: (err: any, data?: InitiateDeviceClaimCommandOutput) => void
  ): void;
  public initiateDeviceClaim(
    args: InitiateDeviceClaimCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateDeviceClaimCommandOutput) => void
  ): void;
  public initiateDeviceClaim(
    args: InitiateDeviceClaimCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InitiateDeviceClaimCommandOutput) => void),
    cb?: (err: any, data?: InitiateDeviceClaimCommandOutput) => void
  ): Promise<InitiateDeviceClaimCommandOutput> | void {
    const command = new InitiateDeviceClaimCommand(args);
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
   * <p>Given a device ID, issues a request to invoke a named device method (with possible
   *  parameters). See the "Example POST" code snippet below.</p>
   */
  public invokeDeviceMethod(
    args: InvokeDeviceMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeDeviceMethodCommandOutput>;
  public invokeDeviceMethod(
    args: InvokeDeviceMethodCommandInput,
    cb: (err: any, data?: InvokeDeviceMethodCommandOutput) => void
  ): void;
  public invokeDeviceMethod(
    args: InvokeDeviceMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeDeviceMethodCommandOutput) => void
  ): void;
  public invokeDeviceMethod(
    args: InvokeDeviceMethodCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InvokeDeviceMethodCommandOutput) => void),
    cb?: (err: any, data?: InvokeDeviceMethodCommandOutput) => void
  ): Promise<InvokeDeviceMethodCommandOutput> | void {
    const command = new InvokeDeviceMethodCommand(args);
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
   * <p>Using a device ID, returns a DeviceEventsResponse object containing an
   *  array of events for the device.</p>
   */
  public listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceEventsCommandOutput>;
  public listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    cb: (err: any, data?: ListDeviceEventsCommandOutput) => void
  ): void;
  public listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceEventsCommandOutput) => void
  ): void;
  public listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeviceEventsCommandOutput) => void),
    cb?: (err: any, data?: ListDeviceEventsCommandOutput) => void
  ): Promise<ListDeviceEventsCommandOutput> | void {
    const command = new ListDeviceEventsCommand(args);
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
   * <p>Lists the 1-Click compatible devices associated with your AWS account.</p>
   */
  public listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  public listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  public listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;
  public listDevices(
    args: ListDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevicesCommandOutput) => void),
    cb?: (err: any, data?: ListDevicesCommandOutput) => void
  ): Promise<ListDevicesCommandOutput> | void {
    const command = new ListDevicesCommand(args);
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
   * <p>Lists the tags associated with the specified resource ARN.</p>
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
   * <p>Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
   *  resource.</p>
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
   * <p>Disassociates a device from your AWS account using its device ID.</p>
   */
  public unclaimDevice(
    args: UnclaimDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnclaimDeviceCommandOutput>;
  public unclaimDevice(
    args: UnclaimDeviceCommandInput,
    cb: (err: any, data?: UnclaimDeviceCommandOutput) => void
  ): void;
  public unclaimDevice(
    args: UnclaimDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnclaimDeviceCommandOutput) => void
  ): void;
  public unclaimDevice(
    args: UnclaimDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnclaimDeviceCommandOutput) => void),
    cb?: (err: any, data?: UnclaimDeviceCommandOutput) => void
  ): Promise<UnclaimDeviceCommandOutput> | void {
    const command = new UnclaimDeviceCommand(args);
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
   * <p>Using tag keys, deletes the tags (key/value pairs) associated with the specified
   *  resource ARN.</p>
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
   * <p>Using a Boolean value (true or false), this operation
   *  enables or disables the device given a device ID.</p>
   */
  public updateDeviceState(
    args: UpdateDeviceStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceStateCommandOutput>;
  public updateDeviceState(
    args: UpdateDeviceStateCommandInput,
    cb: (err: any, data?: UpdateDeviceStateCommandOutput) => void
  ): void;
  public updateDeviceState(
    args: UpdateDeviceStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceStateCommandOutput) => void
  ): void;
  public updateDeviceState(
    args: UpdateDeviceStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeviceStateCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeviceStateCommandOutput) => void
  ): Promise<UpdateDeviceStateCommandOutput> | void {
    const command = new UpdateDeviceStateCommand(args);
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
