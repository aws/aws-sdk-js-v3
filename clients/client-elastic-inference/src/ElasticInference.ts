// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { ElasticInferenceClient, ElasticInferenceClientConfig } from "./ElasticInferenceClient";

const commands = {
  DescribeAcceleratorOfferingsCommand,
  DescribeAcceleratorsCommand,
  DescribeAcceleratorTypesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface ElasticInference {
  /**
   * @see {@link DescribeAcceleratorOfferingsCommand}
   */
  describeAcceleratorOfferings(
    args: DescribeAcceleratorOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcceleratorOfferingsCommandOutput>;
  describeAcceleratorOfferings(
    args: DescribeAcceleratorOfferingsCommandInput,
    cb: (err: any, data?: DescribeAcceleratorOfferingsCommandOutput) => void
  ): void;
  describeAcceleratorOfferings(
    args: DescribeAcceleratorOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcceleratorOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAcceleratorsCommand}
   */
  describeAccelerators(
    args: DescribeAcceleratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcceleratorsCommandOutput>;
  describeAccelerators(
    args: DescribeAcceleratorsCommandInput,
    cb: (err: any, data?: DescribeAcceleratorsCommandOutput) => void
  ): void;
  describeAccelerators(
    args: DescribeAcceleratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcceleratorsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAcceleratorTypesCommand}
   */
  describeAcceleratorTypes(
    args: DescribeAcceleratorTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcceleratorTypesCommandOutput>;
  describeAcceleratorTypes(
    args: DescribeAcceleratorTypesCommandInput,
    cb: (err: any, data?: DescribeAcceleratorTypesCommandOutput) => void
  ): void;
  describeAcceleratorTypes(
    args: DescribeAcceleratorTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcceleratorTypesCommandOutput) => void
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
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>
 *             Elastic Inference public APIs.
 *         </p>
 *          <p>
 *             February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance.
 *             After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2.
 *             However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service.
 *         </p>
 */
export class ElasticInference extends ElasticInferenceClient implements ElasticInference {}
createAggregatedClient(commands, ElasticInference);
