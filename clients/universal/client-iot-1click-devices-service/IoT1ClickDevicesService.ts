import { IoT1ClickDevicesServiceClient } from "./IoT1ClickDevicesServiceClient";
import { ClaimDevicesByClaimCodeInput } from "./types/ClaimDevicesByClaimCodeInput";
import { ClaimDevicesByClaimCodeOutput } from "./types/ClaimDevicesByClaimCodeOutput";
import { DescribeDeviceInput } from "./types/DescribeDeviceInput";
import { DescribeDeviceOutput } from "./types/DescribeDeviceOutput";
import { FinalizeDeviceClaimInput } from "./types/FinalizeDeviceClaimInput";
import { FinalizeDeviceClaimOutput } from "./types/FinalizeDeviceClaimOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { GetDeviceMethodsInput } from "./types/GetDeviceMethodsInput";
import { GetDeviceMethodsOutput } from "./types/GetDeviceMethodsOutput";
import { InitiateDeviceClaimInput } from "./types/InitiateDeviceClaimInput";
import { InitiateDeviceClaimOutput } from "./types/InitiateDeviceClaimOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { InvokeDeviceMethodInput } from "./types/InvokeDeviceMethodInput";
import { InvokeDeviceMethodOutput } from "./types/InvokeDeviceMethodOutput";
import { ListDeviceEventsInput } from "./types/ListDeviceEventsInput";
import { ListDeviceEventsOutput } from "./types/ListDeviceEventsOutput";
import { ListDevicesInput } from "./types/ListDevicesInput";
import { ListDevicesOutput } from "./types/ListDevicesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { PreconditionFailedException } from "./types/PreconditionFailedException";
import { RangeNotSatisfiableException } from "./types/RangeNotSatisfiableException";
import { ResourceConflictException } from "./types/ResourceConflictException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UnclaimDeviceInput } from "./types/UnclaimDeviceInput";
import { UnclaimDeviceOutput } from "./types/UnclaimDeviceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateDeviceStateInput } from "./types/UpdateDeviceStateInput";
import { UpdateDeviceStateOutput } from "./types/UpdateDeviceStateOutput";
import { ClaimDevicesByClaimCodeCommand } from "./commands/ClaimDevicesByClaimCodeCommand";
import { DescribeDeviceCommand } from "./commands/DescribeDeviceCommand";
import { FinalizeDeviceClaimCommand } from "./commands/FinalizeDeviceClaimCommand";
import { GetDeviceMethodsCommand } from "./commands/GetDeviceMethodsCommand";
import { InitiateDeviceClaimCommand } from "./commands/InitiateDeviceClaimCommand";
import { InvokeDeviceMethodCommand } from "./commands/InvokeDeviceMethodCommand";
import { ListDeviceEventsCommand } from "./commands/ListDeviceEventsCommand";
import { ListDevicesCommand } from "./commands/ListDevicesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UnclaimDeviceCommand } from "./commands/UnclaimDeviceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateDeviceStateCommand } from "./commands/UpdateDeviceStateCommand";

export class IoT1ClickDevicesService extends IoT1ClickDevicesServiceClient {
  /**
   * <p>Adds device(s) to your account (i.e., claim one or more devices) if and only if you
   received a claim code with the device(s).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {ForbiddenException} ForbiddenException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public claimDevicesByClaimCode(
    args: ClaimDevicesByClaimCodeInput
  ): Promise<ClaimDevicesByClaimCodeOutput>;
  public claimDevicesByClaimCode(
    args: ClaimDevicesByClaimCodeInput,
    cb: (err: any, data?: ClaimDevicesByClaimCodeOutput) => void
  ): void;
  public claimDevicesByClaimCode(
    args: ClaimDevicesByClaimCodeInput,
    cb?: (err: any, data?: ClaimDevicesByClaimCodeOutput) => void
  ): Promise<ClaimDevicesByClaimCodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ClaimDevicesByClaimCodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Given a device ID, returns a DescribeDeviceResponse object describing the
   details of the device.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDevice(
    args: DescribeDeviceInput
  ): Promise<DescribeDeviceOutput>;
  public describeDevice(
    args: DescribeDeviceInput,
    cb: (err: any, data?: DescribeDeviceOutput) => void
  ): void;
  public describeDevice(
    args: DescribeDeviceInput,
    cb?: (err: any, data?: DescribeDeviceOutput) => void
  ): Promise<DescribeDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
   <p>Claiming a device consists of initiating a claim, then publishing a device event,
   and finalizing the claim. For a device of type button, a device event can
   be published by simply clicking the device.</p>
   </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {PreconditionFailedException} PreconditionFailedException shape
   *   - {ResourceConflictException} ResourceConflictException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public finalizeDeviceClaim(
    args: FinalizeDeviceClaimInput
  ): Promise<FinalizeDeviceClaimOutput>;
  public finalizeDeviceClaim(
    args: FinalizeDeviceClaimInput,
    cb: (err: any, data?: FinalizeDeviceClaimOutput) => void
  ): void;
  public finalizeDeviceClaim(
    args: FinalizeDeviceClaimInput,
    cb?: (err: any, data?: FinalizeDeviceClaimOutput) => void
  ): Promise<FinalizeDeviceClaimOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new FinalizeDeviceClaimCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Given a device ID, returns the invokable methods associated with the device.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeviceMethods(
    args: GetDeviceMethodsInput
  ): Promise<GetDeviceMethodsOutput>;
  public getDeviceMethods(
    args: GetDeviceMethodsInput,
    cb: (err: any, data?: GetDeviceMethodsOutput) => void
  ): void;
  public getDeviceMethods(
    args: GetDeviceMethodsInput,
    cb?: (err: any, data?: GetDeviceMethodsOutput) => void
  ): Promise<GetDeviceMethodsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeviceMethodsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Given a device ID, initiates a claim request for the associated device.</p><note>
   <p>Claiming a device consists of initiating a claim, then publishing a device event,
   and finalizing the claim. For a device of type button, a device event can
   be published by simply clicking the device.</p>
   </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {ResourceConflictException} ResourceConflictException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public initiateDeviceClaim(
    args: InitiateDeviceClaimInput
  ): Promise<InitiateDeviceClaimOutput>;
  public initiateDeviceClaim(
    args: InitiateDeviceClaimInput,
    cb: (err: any, data?: InitiateDeviceClaimOutput) => void
  ): void;
  public initiateDeviceClaim(
    args: InitiateDeviceClaimInput,
    cb?: (err: any, data?: InitiateDeviceClaimOutput) => void
  ): Promise<InitiateDeviceClaimOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InitiateDeviceClaimCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Given a device ID, issues a request to invoke a named device method (with possible
   parameters). See the "Example POST" code snippet below.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {PreconditionFailedException} PreconditionFailedException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {RangeNotSatisfiableException} RangeNotSatisfiableException shape
   *   - {ResourceConflictException} ResourceConflictException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public invokeDeviceMethod(
    args: InvokeDeviceMethodInput
  ): Promise<InvokeDeviceMethodOutput>;
  public invokeDeviceMethod(
    args: InvokeDeviceMethodInput,
    cb: (err: any, data?: InvokeDeviceMethodOutput) => void
  ): void;
  public invokeDeviceMethod(
    args: InvokeDeviceMethodInput,
    cb?: (err: any, data?: InvokeDeviceMethodOutput) => void
  ): Promise<InvokeDeviceMethodOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InvokeDeviceMethodCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Using a device ID, returns a DeviceEventsResponse object containing an
   array of events for the device.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {RangeNotSatisfiableException} RangeNotSatisfiableException shape
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeviceEvents(
    args: ListDeviceEventsInput
  ): Promise<ListDeviceEventsOutput>;
  public listDeviceEvents(
    args: ListDeviceEventsInput,
    cb: (err: any, data?: ListDeviceEventsOutput) => void
  ): void;
  public listDeviceEvents(
    args: ListDeviceEventsInput,
    cb?: (err: any, data?: ListDeviceEventsOutput) => void
  ): Promise<ListDeviceEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeviceEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the 1-Click compatible devices associated with your AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RangeNotSatisfiableException} RangeNotSatisfiableException shape
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDevices(args: ListDevicesInput): Promise<ListDevicesOutput>;
  public listDevices(
    args: ListDevicesInput,
    cb: (err: any, data?: ListDevicesOutput) => void
  ): void;
  public listDevices(
    args: ListDevicesInput,
    cb?: (err: any, data?: ListDevicesOutput) => void
  ): Promise<ListDevicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDevicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags associated with the specified resource ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
   resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a device from your AWS account using its device ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unclaimDevice(args: UnclaimDeviceInput): Promise<UnclaimDeviceOutput>;
  public unclaimDevice(
    args: UnclaimDeviceInput,
    cb: (err: any, data?: UnclaimDeviceOutput) => void
  ): void;
  public unclaimDevice(
    args: UnclaimDeviceInput,
    cb?: (err: any, data?: UnclaimDeviceOutput) => void
  ): Promise<UnclaimDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnclaimDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Using tag keys, deletes the tags (key/value pairs) associated with the specified
   resource ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Using a Boolean value (true or false), this operation
   enables or disables the device given a device ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} ResourceNotFoundException shape
   *   - {InvalidRequestException} InvalidRequestException shape
   *   - {InternalFailureException} InternalFailureException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDeviceState(
    args: UpdateDeviceStateInput
  ): Promise<UpdateDeviceStateOutput>;
  public updateDeviceState(
    args: UpdateDeviceStateInput,
    cb: (err: any, data?: UpdateDeviceStateOutput) => void
  ): void;
  public updateDeviceState(
    args: UpdateDeviceStateInput,
    cb?: (err: any, data?: UpdateDeviceStateOutput) => void
  ): Promise<UpdateDeviceStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDeviceStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
