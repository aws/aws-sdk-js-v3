// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type GetDeploymentConfigurationCommandInput,
  type GetDeploymentConfigurationCommandOutput,
  GetDeploymentConfigurationCommand,
} from "./commands/GetDeploymentConfigurationCommand";
import {
  type GetDeploymentConfigurationJobCommandInput,
  type GetDeploymentConfigurationJobCommandOutput,
  GetDeploymentConfigurationJobCommand,
} from "./commands/GetDeploymentConfigurationJobCommand";
import {
  type ListDeploymentConfigurationJobsCommandInput,
  type ListDeploymentConfigurationJobsCommandOutput,
  ListDeploymentConfigurationJobsCommand,
} from "./commands/ListDeploymentConfigurationJobsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutDeploymentParameterCommandInput,
  type PutDeploymentParameterCommandOutput,
  PutDeploymentParameterCommand,
} from "./commands/PutDeploymentParameterCommand";
import {
  type StartDeploymentConfigurationJobCommandInput,
  type StartDeploymentConfigurationJobCommandOutput,
  StartDeploymentConfigurationJobCommand,
} from "./commands/StartDeploymentConfigurationJobCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import { MarketplaceDeploymentClient } from "./MarketplaceDeploymentClient";
import { paginateListDeploymentConfigurationJobs } from "./pagination/ListDeploymentConfigurationJobsPaginator";

const commands = {
  GetDeploymentConfigurationCommand,
  GetDeploymentConfigurationJobCommand,
  ListDeploymentConfigurationJobsCommand,
  ListTagsForResourceCommand,
  PutDeploymentParameterCommand,
  StartDeploymentConfigurationJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListDeploymentConfigurationJobs,
};

/**
 * @public
 */
export interface MarketplaceDeploymentRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MarketplaceDeployment {
  /**
   * @see {@link GetDeploymentConfigurationCommand}
   */
  getDeploymentConfiguration(
    args: GetDeploymentConfigurationCommandInput,
    options?: MarketplaceDeploymentRequestOptions
  ): Promise<GetDeploymentConfigurationCommandOutput>;
  getDeploymentConfiguration(
    args: GetDeploymentConfigurationCommandInput,
    cb: (err: any, data?: GetDeploymentConfigurationCommandOutput) => void
  ): void;
  getDeploymentConfiguration(
    args: GetDeploymentConfigurationCommandInput,
    options: MarketplaceDeploymentRequestOptions,
    cb: (err: any, data?: GetDeploymentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentConfigurationJobCommand}
   */
  getDeploymentConfigurationJob(
    args: GetDeploymentConfigurationJobCommandInput,
    options?: MarketplaceDeploymentRequestOptions
  ): Promise<GetDeploymentConfigurationJobCommandOutput>;
  getDeploymentConfigurationJob(
    args: GetDeploymentConfigurationJobCommandInput,
    cb: (err: any, data?: GetDeploymentConfigurationJobCommandOutput) => void
  ): void;
  getDeploymentConfigurationJob(
    args: GetDeploymentConfigurationJobCommandInput,
    options: MarketplaceDeploymentRequestOptions,
    cb: (err: any, data?: GetDeploymentConfigurationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentConfigurationJobsCommand}
   */
  listDeploymentConfigurationJobs(
    args: ListDeploymentConfigurationJobsCommandInput,
    options?: MarketplaceDeploymentRequestOptions
  ): Promise<ListDeploymentConfigurationJobsCommandOutput>;
  listDeploymentConfigurationJobs(
    args: ListDeploymentConfigurationJobsCommandInput,
    cb: (err: any, data?: ListDeploymentConfigurationJobsCommandOutput) => void
  ): void;
  listDeploymentConfigurationJobs(
    args: ListDeploymentConfigurationJobsCommandInput,
    options: MarketplaceDeploymentRequestOptions,
    cb: (err: any, data?: ListDeploymentConfigurationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: MarketplaceDeploymentRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: MarketplaceDeploymentRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDeploymentParameterCommand}
   */
  putDeploymentParameter(
    args: PutDeploymentParameterCommandInput,
    options?: MarketplaceDeploymentRequestOptions
  ): Promise<PutDeploymentParameterCommandOutput>;
  putDeploymentParameter(
    args: PutDeploymentParameterCommandInput,
    cb: (err: any, data?: PutDeploymentParameterCommandOutput) => void
  ): void;
  putDeploymentParameter(
    args: PutDeploymentParameterCommandInput,
    options: MarketplaceDeploymentRequestOptions,
    cb: (err: any, data?: PutDeploymentParameterCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDeploymentConfigurationJobCommand}
   */
  startDeploymentConfigurationJob(
    args: StartDeploymentConfigurationJobCommandInput,
    options?: MarketplaceDeploymentRequestOptions
  ): Promise<StartDeploymentConfigurationJobCommandOutput>;
  startDeploymentConfigurationJob(
    args: StartDeploymentConfigurationJobCommandInput,
    cb: (err: any, data?: StartDeploymentConfigurationJobCommandOutput) => void
  ): void;
  startDeploymentConfigurationJob(
    args: StartDeploymentConfigurationJobCommandInput,
    options: MarketplaceDeploymentRequestOptions,
    cb: (err: any, data?: StartDeploymentConfigurationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: MarketplaceDeploymentRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: MarketplaceDeploymentRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: MarketplaceDeploymentRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: MarketplaceDeploymentRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentConfigurationJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentConfigurationJobsCommandOutput}.
   */
  paginateListDeploymentConfigurationJobs(
    args: ListDeploymentConfigurationJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentConfigurationJobsCommandOutput>;
}

/**
 * <p>The AWS Marketplace Deployment Service supports the Quick Launch experience, which is a deployment option for software as a service (SaaS) products. Quick Launch simplifies and reduces the time, resources, and steps required to configure, deploy, and launch a product. The AWS Marketplace Deployment Service provides sellers with a secure method for passing deployment parameters, such as API keys and external IDs, to buyers during the Quick Launch experience.</p> <p>You can also use the AWS Marketplace Deployment Service to publish deployment configurations. A deployment configuration defines how buyers access a product's delivery option after they subscribe. For example, for the Data as a Service delivery option, it specifies the seller's fulfillment URL.</p>
 * @public
 */
export class MarketplaceDeployment extends MarketplaceDeploymentClient implements MarketplaceDeployment {}
createAggregatedClient(commands, MarketplaceDeployment, { paginators });
