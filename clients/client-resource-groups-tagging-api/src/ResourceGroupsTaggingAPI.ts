// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  DescribeReportCreationCommand,
  DescribeReportCreationCommandInput,
  DescribeReportCreationCommandOutput,
} from "./commands/DescribeReportCreationCommand";
import {
  GetComplianceSummaryCommand,
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput,
} from "./commands/GetComplianceSummaryCommand";
import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "./commands/GetResourcesCommand";
import { GetTagKeysCommand, GetTagKeysCommandInput, GetTagKeysCommandOutput } from "./commands/GetTagKeysCommand";
import {
  GetTagValuesCommand,
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput,
} from "./commands/GetTagValuesCommand";
import {
  ListRequiredTagsCommand,
  ListRequiredTagsCommandInput,
  ListRequiredTagsCommandOutput,
} from "./commands/ListRequiredTagsCommand";
import {
  StartReportCreationCommand,
  StartReportCreationCommandInput,
  StartReportCreationCommandOutput,
} from "./commands/StartReportCreationCommand";
import {
  TagResourcesCommand,
  TagResourcesCommandInput,
  TagResourcesCommandOutput,
} from "./commands/TagResourcesCommand";
import {
  UntagResourcesCommand,
  UntagResourcesCommandInput,
  UntagResourcesCommandOutput,
} from "./commands/UntagResourcesCommand";
import { paginateGetComplianceSummary } from "./pagination/GetComplianceSummaryPaginator";
import { paginateGetResources } from "./pagination/GetResourcesPaginator";
import { paginateGetTagKeys } from "./pagination/GetTagKeysPaginator";
import { paginateGetTagValues } from "./pagination/GetTagValuesPaginator";
import { paginateListRequiredTags } from "./pagination/ListRequiredTagsPaginator";
import { ResourceGroupsTaggingAPIClient } from "./ResourceGroupsTaggingAPIClient";

const commands = {
  DescribeReportCreationCommand,
  GetComplianceSummaryCommand,
  GetResourcesCommand,
  GetTagKeysCommand,
  GetTagValuesCommand,
  ListRequiredTagsCommand,
  StartReportCreationCommand,
  TagResourcesCommand,
  UntagResourcesCommand,
};
const paginators = {
  paginateGetComplianceSummary,
  paginateGetResources,
  paginateGetTagKeys,
  paginateGetTagValues,
  paginateListRequiredTags,
};

export interface ResourceGroupsTaggingAPI {
  /**
   * @see {@link DescribeReportCreationCommand}
   */
  describeReportCreation(): Promise<DescribeReportCreationCommandOutput>;
  describeReportCreation(
    args: DescribeReportCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReportCreationCommandOutput>;
  describeReportCreation(
    args: DescribeReportCreationCommandInput,
    cb: (err: any, data?: DescribeReportCreationCommandOutput) => void
  ): void;
  describeReportCreation(
    args: DescribeReportCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReportCreationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComplianceSummaryCommand}
   */
  getComplianceSummary(): Promise<GetComplianceSummaryCommandOutput>;
  getComplianceSummary(
    args: GetComplianceSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceSummaryCommandOutput>;
  getComplianceSummary(
    args: GetComplianceSummaryCommandInput,
    cb: (err: any, data?: GetComplianceSummaryCommandOutput) => void
  ): void;
  getComplianceSummary(
    args: GetComplianceSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcesCommand}
   */
  getResources(): Promise<GetResourcesCommandOutput>;
  getResources(
    args: GetResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcesCommandOutput>;
  getResources(
    args: GetResourcesCommandInput,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;
  getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagKeysCommand}
   */
  getTagKeys(): Promise<GetTagKeysCommandOutput>;
  getTagKeys(
    args: GetTagKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTagKeysCommandOutput>;
  getTagKeys(
    args: GetTagKeysCommandInput,
    cb: (err: any, data?: GetTagKeysCommandOutput) => void
  ): void;
  getTagKeys(
    args: GetTagKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagValuesCommand}
   */
  getTagValues(
    args: GetTagValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTagValuesCommandOutput>;
  getTagValues(
    args: GetTagValuesCommandInput,
    cb: (err: any, data?: GetTagValuesCommandOutput) => void
  ): void;
  getTagValues(
    args: GetTagValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRequiredTagsCommand}
   */
  listRequiredTags(): Promise<ListRequiredTagsCommandOutput>;
  listRequiredTags(
    args: ListRequiredTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRequiredTagsCommandOutput>;
  listRequiredTags(
    args: ListRequiredTagsCommandInput,
    cb: (err: any, data?: ListRequiredTagsCommandOutput) => void
  ): void;
  listRequiredTags(
    args: ListRequiredTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRequiredTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReportCreationCommand}
   */
  startReportCreation(
    args: StartReportCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReportCreationCommandOutput>;
  startReportCreation(
    args: StartReportCreationCommandInput,
    cb: (err: any, data?: StartReportCreationCommandOutput) => void
  ): void;
  startReportCreation(
    args: StartReportCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReportCreationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourcesCommand}
   */
  tagResources(
    args: TagResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourcesCommandOutput>;
  tagResources(
    args: TagResourcesCommandInput,
    cb: (err: any, data?: TagResourcesCommandOutput) => void
  ): void;
  tagResources(
    args: TagResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourcesCommand}
   */
  untagResources(
    args: UntagResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourcesCommandOutput>;
  untagResources(
    args: UntagResourcesCommandInput,
    cb: (err: any, data?: UntagResourcesCommandOutput) => void
  ): void;
  untagResources(
    args: UntagResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComplianceSummaryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetComplianceSummaryCommandOutput}.
   */
  paginateGetComplianceSummary(
    args?: GetComplianceSummaryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetComplianceSummaryCommandOutput>;

  /**
   * @see {@link GetResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetResourcesCommandOutput}.
   */
  paginateGetResources(
    args?: GetResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetResourcesCommandOutput>;

  /**
   * @see {@link GetTagKeysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTagKeysCommandOutput}.
   */
  paginateGetTagKeys(
    args?: GetTagKeysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTagKeysCommandOutput>;

  /**
   * @see {@link GetTagValuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTagValuesCommandOutput}.
   */
  paginateGetTagValues(
    args: GetTagValuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTagValuesCommandOutput>;

  /**
   * @see {@link ListRequiredTagsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRequiredTagsCommandOutput}.
   */
  paginateListRequiredTags(
    args?: ListRequiredTagsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRequiredTagsCommandOutput>;
}

/**
 * <fullname>Resource Groups Tagging API</fullname>
 * @public
 */
export class ResourceGroupsTaggingAPI extends ResourceGroupsTaggingAPIClient implements ResourceGroupsTaggingAPI {}
createAggregatedClient(commands, ResourceGroupsTaggingAPI, { paginators });
