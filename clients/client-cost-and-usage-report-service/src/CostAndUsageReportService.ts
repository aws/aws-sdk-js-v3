// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteReportDefinitionCommand,
  DeleteReportDefinitionCommandInput,
  DeleteReportDefinitionCommandOutput,
} from "./commands/DeleteReportDefinitionCommand";
import {
  DescribeReportDefinitionsCommand,
  DescribeReportDefinitionsCommandInput,
  DescribeReportDefinitionsCommandOutput,
} from "./commands/DescribeReportDefinitionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyReportDefinitionCommand,
  ModifyReportDefinitionCommandInput,
  ModifyReportDefinitionCommandOutput,
} from "./commands/ModifyReportDefinitionCommand";
import {
  PutReportDefinitionCommand,
  PutReportDefinitionCommandInput,
  PutReportDefinitionCommandOutput,
} from "./commands/PutReportDefinitionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { CostAndUsageReportServiceClient } from "./CostAndUsageReportServiceClient";

const commands = {
  DeleteReportDefinitionCommand,
  DescribeReportDefinitionsCommand,
  ListTagsForResourceCommand,
  ModifyReportDefinitionCommand,
  PutReportDefinitionCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface CostAndUsageReportService {
  /**
   * @see {@link DeleteReportDefinitionCommand}
   */
  deleteReportDefinition(
    args: DeleteReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportDefinitionCommandOutput>;
  deleteReportDefinition(
    args: DeleteReportDefinitionCommandInput,
    cb: (err: any, data?: DeleteReportDefinitionCommandOutput) => void
  ): void;
  deleteReportDefinition(
    args: DeleteReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReportDefinitionsCommand}
   */
  describeReportDefinitions(): Promise<DescribeReportDefinitionsCommandOutput>;
  describeReportDefinitions(
    args: DescribeReportDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReportDefinitionsCommandOutput>;
  describeReportDefinitions(
    args: DescribeReportDefinitionsCommandInput,
    cb: (err: any, data?: DescribeReportDefinitionsCommandOutput) => void
  ): void;
  describeReportDefinitions(
    args: DescribeReportDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReportDefinitionsCommandOutput) => void
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
   * @see {@link ModifyReportDefinitionCommand}
   */
  modifyReportDefinition(
    args: ModifyReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReportDefinitionCommandOutput>;
  modifyReportDefinition(
    args: ModifyReportDefinitionCommandInput,
    cb: (err: any, data?: ModifyReportDefinitionCommandOutput) => void
  ): void;
  modifyReportDefinition(
    args: ModifyReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReportDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutReportDefinitionCommand}
   */
  putReportDefinition(
    args: PutReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutReportDefinitionCommandOutput>;
  putReportDefinition(
    args: PutReportDefinitionCommandInput,
    cb: (err: any, data?: PutReportDefinitionCommandOutput) => void
  ): void;
  putReportDefinition(
    args: PutReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutReportDefinitionCommandOutput) => void
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
 * <p>You can use the Amazon Web Services Cost and Usage Report API to programmatically create, query, and delete
 *       Amazon Web Services Cost and Usage Report definitions.</p>
 *          <p>Amazon Web Services Cost and Usage Report track the monthly Amazon Web Services costs and usage
 *       associated with your Amazon Web Services account.
 *
 *         The report contains line items for each unique combination of Amazon Web Services product,
 *         usage type, and operation that your Amazon Web Services account uses.
 *
 *         You can configure the Amazon Web Services Cost and Usage Report to show only the data that you want, using the
 *       Amazon Web Services Cost and Usage Report API.</p>
 *          <p>Service Endpoint</p>
 *          <p>The Amazon Web Services Cost and Usage Report API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>cur.us-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 * @public
 */
export class CostAndUsageReportService extends CostAndUsageReportServiceClient implements CostAndUsageReportService {}
createAggregatedClient(commands, CostAndUsageReportService);
