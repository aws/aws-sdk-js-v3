// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  DescribeAcceleratorOfferingsCommand,
  DescribeAcceleratorOfferingsCommandInput,
  DescribeAcceleratorOfferingsCommandOutput,
} from "./commands/DescribeAcceleratorOfferingsCommand";
import {
  DescribeAcceleratorsCommand,
  DescribeAcceleratorsCommandInput,
  DescribeAcceleratorsCommandOutput,
} from "./commands/DescribeAcceleratorsCommand";
import {
  DescribeAcceleratorTypesCommand,
  DescribeAcceleratorTypesCommandInput,
  DescribeAcceleratorTypesCommandOutput,
} from "./commands/DescribeAcceleratorTypesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { ElasticInferenceClient } from "./ElasticInferenceClient";

/**
 * <p>
 *             Elastic Inference public APIs.
 *         </p>
 */
export class ElasticInference extends ElasticInferenceClient {
  /**
   * <p>
   *             Describes the locations in which a given accelerator type or set of types is present in a given region.
   *         </p>
   */
  public describeAcceleratorOfferings(
    args: DescribeAcceleratorOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcceleratorOfferingsCommandOutput>;
  public describeAcceleratorOfferings(
    args: DescribeAcceleratorOfferingsCommandInput,
    cb: (err: any, data?: DescribeAcceleratorOfferingsCommandOutput) => void
  ): void;
  public describeAcceleratorOfferings(
    args: DescribeAcceleratorOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcceleratorOfferingsCommandOutput) => void
  ): void;
  public describeAcceleratorOfferings(
    args: DescribeAcceleratorOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAcceleratorOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAcceleratorOfferingsCommandOutput) => void
  ): Promise<DescribeAcceleratorOfferingsCommandOutput> | void {
    const command = new DescribeAcceleratorOfferingsCommand(args);
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
   * <p>
   *             Describes information over a provided set of accelerators belonging to an account.
   *         </p>
   */
  public describeAccelerators(
    args: DescribeAcceleratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcceleratorsCommandOutput>;
  public describeAccelerators(
    args: DescribeAcceleratorsCommandInput,
    cb: (err: any, data?: DescribeAcceleratorsCommandOutput) => void
  ): void;
  public describeAccelerators(
    args: DescribeAcceleratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcceleratorsCommandOutput) => void
  ): void;
  public describeAccelerators(
    args: DescribeAcceleratorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAcceleratorsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAcceleratorsCommandOutput) => void
  ): Promise<DescribeAcceleratorsCommandOutput> | void {
    const command = new DescribeAcceleratorsCommand(args);
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
   * <p>
   *             Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
   *         </p>
   */
  public describeAcceleratorTypes(
    args: DescribeAcceleratorTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcceleratorTypesCommandOutput>;
  public describeAcceleratorTypes(
    args: DescribeAcceleratorTypesCommandInput,
    cb: (err: any, data?: DescribeAcceleratorTypesCommandOutput) => void
  ): void;
  public describeAcceleratorTypes(
    args: DescribeAcceleratorTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcceleratorTypesCommandOutput) => void
  ): void;
  public describeAcceleratorTypes(
    args: DescribeAcceleratorTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAcceleratorTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAcceleratorTypesCommandOutput) => void
  ): Promise<DescribeAcceleratorTypesCommandOutput> | void {
    const command = new DescribeAcceleratorTypesCommand(args);
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
   * <p>
   *             Returns all tags of an Elastic Inference Accelerator.
   *         </p>
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
   * <p>
   *             Adds the specified tags to an Elastic Inference Accelerator.
   *         </p>
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
   * <p>
   *             Removes the specified tags from an Elastic Inference Accelerator.
   *         </p>
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
}
