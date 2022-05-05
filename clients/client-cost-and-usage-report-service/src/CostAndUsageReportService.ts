// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { CostAndUsageReportServiceClient } from "./CostAndUsageReportServiceClient";

/**
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
export class CostAndUsageReportService extends CostAndUsageReportServiceClient {
  /**
   * <p>Deletes the specified report.</p>
   */
  public deleteReportDefinition(
    args: DeleteReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportDefinitionCommandOutput>;
  public deleteReportDefinition(
    args: DeleteReportDefinitionCommandInput,
    cb: (err: any, data?: DeleteReportDefinitionCommandOutput) => void
  ): void;
  public deleteReportDefinition(
    args: DeleteReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportDefinitionCommandOutput) => void
  ): void;
  public deleteReportDefinition(
    args: DeleteReportDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReportDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteReportDefinitionCommandOutput) => void
  ): Promise<DeleteReportDefinitionCommandOutput> | void {
    const command = new DeleteReportDefinitionCommand(args);
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
   * <p>Lists the AWS Cost and Usage reports available to this account.</p>
   */
  public describeReportDefinitions(
    args: DescribeReportDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReportDefinitionsCommandOutput>;
  public describeReportDefinitions(
    args: DescribeReportDefinitionsCommandInput,
    cb: (err: any, data?: DescribeReportDefinitionsCommandOutput) => void
  ): void;
  public describeReportDefinitions(
    args: DescribeReportDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReportDefinitionsCommandOutput) => void
  ): void;
  public describeReportDefinitions(
    args: DescribeReportDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReportDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReportDefinitionsCommandOutput) => void
  ): Promise<DescribeReportDefinitionsCommandOutput> | void {
    const command = new DescribeReportDefinitionsCommand(args);
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
   * <p>Allows you to programatically update your report preferences.</p>
   */
  public modifyReportDefinition(
    args: ModifyReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReportDefinitionCommandOutput>;
  public modifyReportDefinition(
    args: ModifyReportDefinitionCommandInput,
    cb: (err: any, data?: ModifyReportDefinitionCommandOutput) => void
  ): void;
  public modifyReportDefinition(
    args: ModifyReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReportDefinitionCommandOutput) => void
  ): void;
  public modifyReportDefinition(
    args: ModifyReportDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyReportDefinitionCommandOutput) => void),
    cb?: (err: any, data?: ModifyReportDefinitionCommandOutput) => void
  ): Promise<ModifyReportDefinitionCommandOutput> | void {
    const command = new ModifyReportDefinitionCommand(args);
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
   * <p>Creates a new report using the description that you provide.</p>
   */
  public putReportDefinition(
    args: PutReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutReportDefinitionCommandOutput>;
  public putReportDefinition(
    args: PutReportDefinitionCommandInput,
    cb: (err: any, data?: PutReportDefinitionCommandOutput) => void
  ): void;
  public putReportDefinition(
    args: PutReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutReportDefinitionCommandOutput) => void
  ): void;
  public putReportDefinition(
    args: PutReportDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutReportDefinitionCommandOutput) => void),
    cb?: (err: any, data?: PutReportDefinitionCommandOutput) => void
  ): Promise<PutReportDefinitionCommandOutput> | void {
    const command = new PutReportDefinitionCommand(args);
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
