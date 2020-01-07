import { IoT1ClickDevicesServiceClient } from "./IoT1ClickDevicesServiceClient";
import { ClaimDevicesByClaimCodeCommandInput, ClaimDevicesByClaimCodeCommandOutput } from "./commands/ClaimDevicesByClaimCodeCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "./commands/DescribeDeviceCommand";
import { FinalizeDeviceClaimCommandInput, FinalizeDeviceClaimCommandOutput } from "./commands/FinalizeDeviceClaimCommand";
import { GetDeviceMethodsCommandInput, GetDeviceMethodsCommandOutput } from "./commands/GetDeviceMethodsCommand";
import { InitiateDeviceClaimCommandInput, InitiateDeviceClaimCommandOutput } from "./commands/InitiateDeviceClaimCommand";
import { InvokeDeviceMethodCommandInput, InvokeDeviceMethodCommandOutput } from "./commands/InvokeDeviceMethodCommand";
import { ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput } from "./commands/ListDeviceEventsCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnclaimDeviceCommandInput, UnclaimDeviceCommandOutput } from "./commands/UnclaimDeviceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDeviceStateCommandInput, UpdateDeviceStateCommandOutput } from "./commands/UpdateDeviceStateCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Describes all of the AWS IoT 1-Click device-related API operations for the service.
 *  Also provides sample requests, responses, and errors for the supported web services
 *  protocols.</p>
 */
export declare class IoT1ClickDevicesService extends IoT1ClickDevicesServiceClient {
    /**
     * <p>Adds device(s) to your account (i.e., claim one or more devices) if and only if you
     *  received a claim code with the device(s).</p>
     */
    claimDevicesByClaimCode(args: ClaimDevicesByClaimCodeCommandInput, options?: __HttpHandlerOptions): Promise<ClaimDevicesByClaimCodeCommandOutput>;
    claimDevicesByClaimCode(args: ClaimDevicesByClaimCodeCommandInput, cb: (err: any, data?: ClaimDevicesByClaimCodeCommandOutput) => void): void;
    claimDevicesByClaimCode(args: ClaimDevicesByClaimCodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ClaimDevicesByClaimCodeCommandOutput) => void): void;
    /**
     * <p>Given a device ID, returns a DescribeDeviceResponse object describing the
     *  details of the device.</p>
     */
    describeDevice(args: DescribeDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDeviceCommandOutput>;
    describeDevice(args: DescribeDeviceCommandInput, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
    describeDevice(args: DescribeDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
    /**
     * <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
     *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
     *  and finalizing the claim. For a device of type button, a device event can
     *  be published by simply clicking the device.</p>
     *  </note>
     */
    finalizeDeviceClaim(args: FinalizeDeviceClaimCommandInput, options?: __HttpHandlerOptions): Promise<FinalizeDeviceClaimCommandOutput>;
    finalizeDeviceClaim(args: FinalizeDeviceClaimCommandInput, cb: (err: any, data?: FinalizeDeviceClaimCommandOutput) => void): void;
    finalizeDeviceClaim(args: FinalizeDeviceClaimCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: FinalizeDeviceClaimCommandOutput) => void): void;
    /**
     * <p>Given a device ID, returns the invokable methods associated with the device.</p>
     */
    getDeviceMethods(args: GetDeviceMethodsCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceMethodsCommandOutput>;
    getDeviceMethods(args: GetDeviceMethodsCommandInput, cb: (err: any, data?: GetDeviceMethodsCommandOutput) => void): void;
    getDeviceMethods(args: GetDeviceMethodsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeviceMethodsCommandOutput) => void): void;
    /**
     * <p>Given a device ID, initiates a claim request for the associated device.</p><note>
     *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
     *  and finalizing the claim. For a device of type button, a device event can
     *  be published by simply clicking the device.</p>
     *  </note>
     */
    initiateDeviceClaim(args: InitiateDeviceClaimCommandInput, options?: __HttpHandlerOptions): Promise<InitiateDeviceClaimCommandOutput>;
    initiateDeviceClaim(args: InitiateDeviceClaimCommandInput, cb: (err: any, data?: InitiateDeviceClaimCommandOutput) => void): void;
    initiateDeviceClaim(args: InitiateDeviceClaimCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InitiateDeviceClaimCommandOutput) => void): void;
    /**
     * <p>Given a device ID, issues a request to invoke a named device method (with possible
     *  parameters). See the "Example POST" code snippet below.</p>
     */
    invokeDeviceMethod(args: InvokeDeviceMethodCommandInput, options?: __HttpHandlerOptions): Promise<InvokeDeviceMethodCommandOutput>;
    invokeDeviceMethod(args: InvokeDeviceMethodCommandInput, cb: (err: any, data?: InvokeDeviceMethodCommandOutput) => void): void;
    invokeDeviceMethod(args: InvokeDeviceMethodCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InvokeDeviceMethodCommandOutput) => void): void;
    /**
     * <p>Using a device ID, returns a DeviceEventsResponse object containing an
     *  array of events for the device.</p>
     */
    listDeviceEvents(args: ListDeviceEventsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeviceEventsCommandOutput>;
    listDeviceEvents(args: ListDeviceEventsCommandInput, cb: (err: any, data?: ListDeviceEventsCommandOutput) => void): void;
    listDeviceEvents(args: ListDeviceEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeviceEventsCommandOutput) => void): void;
    /**
     * <p>Lists the 1-Click compatible devices associated with your AWS account.</p>
     */
    listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
    listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
    listDevices(args: ListDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
    /**
     * <p>Lists the tags associated with the specified resource ARN.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
     *  resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Disassociates a device from your AWS account using its device ID.</p>
     */
    unclaimDevice(args: UnclaimDeviceCommandInput, options?: __HttpHandlerOptions): Promise<UnclaimDeviceCommandOutput>;
    unclaimDevice(args: UnclaimDeviceCommandInput, cb: (err: any, data?: UnclaimDeviceCommandOutput) => void): void;
    unclaimDevice(args: UnclaimDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnclaimDeviceCommandOutput) => void): void;
    /**
     * <p>Using tag keys, deletes the tags (key/value pairs) associated with the specified
     *  resource ARN.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Using a Boolean value (true or false), this operation
     *  enables or disables the device given a device ID.</p>
     */
    updateDeviceState(args: UpdateDeviceStateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeviceStateCommandOutput>;
    updateDeviceState(args: UpdateDeviceStateCommandInput, cb: (err: any, data?: UpdateDeviceStateCommandOutput) => void): void;
    updateDeviceState(args: UpdateDeviceStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDeviceStateCommandOutput) => void): void;
}
