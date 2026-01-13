// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutDeploymentParameterCommand,
  PutDeploymentParameterCommandInput,
  PutDeploymentParameterCommandOutput,
} from "./commands/PutDeploymentParameterCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { MarketplaceDeploymentClient } from "./MarketplaceDeploymentClient";

const commands = {
  ListTagsForResourceCommand,
  PutDeploymentParameterCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface MarketplaceDeployment {
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
   * @see {@link PutDeploymentParameterCommand}
   */
  putDeploymentParameter(
    args: PutDeploymentParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeploymentParameterCommandOutput>;
  putDeploymentParameter(
    args: PutDeploymentParameterCommandInput,
    cb: (err: any, data?: PutDeploymentParameterCommandOutput) => void
  ): void;
  putDeploymentParameter(
    args: PutDeploymentParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeploymentParameterCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * <p>The AWS Marketplace Deployment Service supports the Quick Launch experience, which is a deployment option for software as a service (SaaS) products.
 *       Quick Launch simplifies and reduces the time, resources, and steps required to configure, deploy, and launch a products.
 *       The AWS Marketplace Deployment Service provides sellers with a secure method for passing deployment parameters, such as
 *       API keys and external IDs, to buyers during the Quick Launch experience.</p>
 * @public
 */
export class MarketplaceDeployment extends MarketplaceDeploymentClient implements MarketplaceDeployment {}
createAggregatedClient(commands, MarketplaceDeployment);
