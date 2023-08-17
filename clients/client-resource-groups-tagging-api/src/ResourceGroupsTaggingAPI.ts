// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { ResourceGroupsTaggingAPIClient, ResourceGroupsTaggingAPIClientConfig } from "./ResourceGroupsTaggingAPIClient";

const commands = {
  DescribeReportCreationCommand,
  GetComplianceSummaryCommand,
  GetResourcesCommand,
  GetTagKeysCommand,
  GetTagValuesCommand,
  StartReportCreationCommand,
  TagResourcesCommand,
  UntagResourcesCommand,
};

export interface ResourceGroupsTaggingAPI {
  /**
   * @see {@link DescribeReportCreationCommand}
   */
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
  getResources(args: GetResourcesCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcesCommandOutput>;
  getResources(args: GetResourcesCommandInput, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
  getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagKeysCommand}
   */
  getTagKeys(args: GetTagKeysCommandInput, options?: __HttpHandlerOptions): Promise<GetTagKeysCommandOutput>;
  getTagKeys(args: GetTagKeysCommandInput, cb: (err: any, data?: GetTagKeysCommandOutput) => void): void;
  getTagKeys(
    args: GetTagKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagValuesCommand}
   */
  getTagValues(args: GetTagValuesCommandInput, options?: __HttpHandlerOptions): Promise<GetTagValuesCommandOutput>;
  getTagValues(args: GetTagValuesCommandInput, cb: (err: any, data?: GetTagValuesCommandOutput) => void): void;
  getTagValues(
    args: GetTagValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagValuesCommandOutput) => void
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
  tagResources(args: TagResourcesCommandInput, options?: __HttpHandlerOptions): Promise<TagResourcesCommandOutput>;
  tagResources(args: TagResourcesCommandInput, cb: (err: any, data?: TagResourcesCommandOutput) => void): void;
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
  untagResources(args: UntagResourcesCommandInput, cb: (err: any, data?: UntagResourcesCommandOutput) => void): void;
  untagResources(
    args: UntagResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourcesCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Resource Groups Tagging API</fullname>
 */
export class ResourceGroupsTaggingAPI extends ResourceGroupsTaggingAPIClient implements ResourceGroupsTaggingAPI {}
createAggregatedClient(commands, ResourceGroupsTaggingAPI);
