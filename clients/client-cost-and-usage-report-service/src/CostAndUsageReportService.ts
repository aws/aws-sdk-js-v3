// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  ModifyReportDefinitionCommand,
  ModifyReportDefinitionCommandInput,
  ModifyReportDefinitionCommandOutput,
} from "./commands/ModifyReportDefinitionCommand";
import {
  PutReportDefinitionCommand,
  PutReportDefinitionCommandInput,
  PutReportDefinitionCommandOutput,
} from "./commands/PutReportDefinitionCommand";
import {
  CostAndUsageReportServiceClient,
  CostAndUsageReportServiceClientConfig,
} from "./CostAndUsageReportServiceClient";

const commands = {
  DeleteReportDefinitionCommand,
  DescribeReportDefinitionsCommand,
  ModifyReportDefinitionCommand,
  PutReportDefinitionCommand,
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
}

/**
 * @public
 * <p>The AWS Cost and Usage Report API enables you to programmatically create, query, and delete
 *         AWS Cost and Usage report definitions.</p>
 *          <p>AWS Cost and Usage reports track the monthly AWS costs and usage
 *    associated with your AWS account.
 *
 *         The report contains line items for each unique combination of AWS product,
 *         usage type, and operation that your AWS account uses.
 *
 *         You can configure the AWS Cost and Usage report to show only the data that you want, using the
 *         AWS Cost and Usage API.</p>
 *
 *          <p>Service Endpoint</p>
 *          <p>The AWS Cost and Usage Report API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>cur.us-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 */
export class CostAndUsageReportService extends CostAndUsageReportServiceClient implements CostAndUsageReportService {}
createAggregatedClient(commands, CostAndUsageReportService);
