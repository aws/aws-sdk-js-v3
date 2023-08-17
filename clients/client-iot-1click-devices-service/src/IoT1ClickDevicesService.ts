// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { IoT1ClickDevicesServiceClient, IoT1ClickDevicesServiceClientConfig } from "./IoT1ClickDevicesServiceClient";

const commands = {
  ClaimDevicesByClaimCodeCommand,
  DescribeDeviceCommand,
  FinalizeDeviceClaimCommand,
  GetDeviceMethodsCommand,
  InitiateDeviceClaimCommand,
  InvokeDeviceMethodCommand,
  ListDeviceEventsCommand,
  ListDevicesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UnclaimDeviceCommand,
  UntagResourceCommand,
  UpdateDeviceStateCommand,
};

export interface IoT1ClickDevicesService {
  /**
   * @see {@link ClaimDevicesByClaimCodeCommand}
   */
  claimDevicesByClaimCode(
    args: ClaimDevicesByClaimCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ClaimDevicesByClaimCodeCommandOutput>;
  claimDevicesByClaimCode(
    args: ClaimDevicesByClaimCodeCommandInput,
    cb: (err: any, data?: ClaimDevicesByClaimCodeCommandOutput) => void
  ): void;
  claimDevicesByClaimCode(
    args: ClaimDevicesByClaimCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ClaimDevicesByClaimCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeviceCommand}
   */
  describeDevice(
    args: DescribeDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceCommandOutput>;
  describeDevice(args: DescribeDeviceCommandInput, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
  describeDevice(
    args: DescribeDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link FinalizeDeviceClaimCommand}
   */
  finalizeDeviceClaim(
    args: FinalizeDeviceClaimCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FinalizeDeviceClaimCommandOutput>;
  finalizeDeviceClaim(
    args: FinalizeDeviceClaimCommandInput,
    cb: (err: any, data?: FinalizeDeviceClaimCommandOutput) => void
  ): void;
  finalizeDeviceClaim(
    args: FinalizeDeviceClaimCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FinalizeDeviceClaimCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceMethodsCommand}
   */
  getDeviceMethods(
    args: GetDeviceMethodsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceMethodsCommandOutput>;
  getDeviceMethods(
    args: GetDeviceMethodsCommandInput,
    cb: (err: any, data?: GetDeviceMethodsCommandOutput) => void
  ): void;
  getDeviceMethods(
    args: GetDeviceMethodsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceMethodsCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateDeviceClaimCommand}
   */
  initiateDeviceClaim(
    args: InitiateDeviceClaimCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateDeviceClaimCommandOutput>;
  initiateDeviceClaim(
    args: InitiateDeviceClaimCommandInput,
    cb: (err: any, data?: InitiateDeviceClaimCommandOutput) => void
  ): void;
  initiateDeviceClaim(
    args: InitiateDeviceClaimCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateDeviceClaimCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeDeviceMethodCommand}
   */
  invokeDeviceMethod(
    args: InvokeDeviceMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeDeviceMethodCommandOutput>;
  invokeDeviceMethod(
    args: InvokeDeviceMethodCommandInput,
    cb: (err: any, data?: InvokeDeviceMethodCommandOutput) => void
  ): void;
  invokeDeviceMethod(
    args: InvokeDeviceMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeDeviceMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeviceEventsCommand}
   */
  listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceEventsCommandOutput>;
  listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    cb: (err: any, data?: ListDeviceEventsCommandOutput) => void
  ): void;
  listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
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
   * @see {@link UnclaimDeviceCommand}
   */
  unclaimDevice(args: UnclaimDeviceCommandInput, options?: __HttpHandlerOptions): Promise<UnclaimDeviceCommandOutput>;
  unclaimDevice(args: UnclaimDeviceCommandInput, cb: (err: any, data?: UnclaimDeviceCommandOutput) => void): void;
  unclaimDevice(
    args: UnclaimDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnclaimDeviceCommandOutput) => void
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
   * @see {@link UpdateDeviceStateCommand}
   */
  updateDeviceState(
    args: UpdateDeviceStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceStateCommandOutput>;
  updateDeviceState(
    args: UpdateDeviceStateCommandInput,
    cb: (err: any, data?: UpdateDeviceStateCommandOutput) => void
  ): void;
  updateDeviceState(
    args: UpdateDeviceStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceStateCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Describes all of the AWS IoT 1-Click device-related API operations for the service.
 *  Also provides sample requests, responses, and errors for the supported web services
 *  protocols.</p>
 */
export class IoT1ClickDevicesService extends IoT1ClickDevicesServiceClient implements IoT1ClickDevicesService {}
createAggregatedClient(commands, IoT1ClickDevicesService);
