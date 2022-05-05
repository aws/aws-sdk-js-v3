// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ApplicationCostProfilerClient } from "./ApplicationCostProfilerClient";
import {
  DeleteReportDefinitionCommand,
  DeleteReportDefinitionCommandInput,
  DeleteReportDefinitionCommandOutput,
} from "./commands/DeleteReportDefinitionCommand";
import {
  GetReportDefinitionCommand,
  GetReportDefinitionCommandInput,
  GetReportDefinitionCommandOutput,
} from "./commands/GetReportDefinitionCommand";
import {
  ImportApplicationUsageCommand,
  ImportApplicationUsageCommandInput,
  ImportApplicationUsageCommandOutput,
} from "./commands/ImportApplicationUsageCommand";
import {
  ListReportDefinitionsCommand,
  ListReportDefinitionsCommandInput,
  ListReportDefinitionsCommandOutput,
} from "./commands/ListReportDefinitionsCommand";
import {
  PutReportDefinitionCommand,
  PutReportDefinitionCommandInput,
  PutReportDefinitionCommandOutput,
} from "./commands/PutReportDefinitionCommand";
import {
  UpdateReportDefinitionCommand,
  UpdateReportDefinitionCommandInput,
  UpdateReportDefinitionCommandOutput,
} from "./commands/UpdateReportDefinitionCommand";

/**
 * <p>This reference provides descriptions of the AWS Application Cost Profiler API.</p>
 *          <p>The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete
 *       application cost report definitions, as well as to import your usage data into the Application Cost Profiler
 *       service.</p>
 *          <p>For more information about using this service, see the <a href="https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html">AWS Application Cost
 *         Profiler User Guide</a>.</p>
 */
export class ApplicationCostProfiler extends ApplicationCostProfilerClient {
  /**
   * <p>Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being
   *       generated.</p>
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
   * <p>Retrieves the definition of a report already configured in AWS Application Cost Profiler.</p>
   */
  public getReportDefinition(
    args: GetReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReportDefinitionCommandOutput>;
  public getReportDefinition(
    args: GetReportDefinitionCommandInput,
    cb: (err: any, data?: GetReportDefinitionCommandOutput) => void
  ): void;
  public getReportDefinition(
    args: GetReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReportDefinitionCommandOutput) => void
  ): void;
  public getReportDefinition(
    args: GetReportDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReportDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetReportDefinitionCommandOutput) => void
  ): Promise<GetReportDefinitionCommandOutput> | void {
    const command = new GetReportDefinitionCommand(args);
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
   * <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p>
   *          <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler
   *       copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing
   *       asynchronously.</p>
   */
  public importApplicationUsage(
    args: ImportApplicationUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportApplicationUsageCommandOutput>;
  public importApplicationUsage(
    args: ImportApplicationUsageCommandInput,
    cb: (err: any, data?: ImportApplicationUsageCommandOutput) => void
  ): void;
  public importApplicationUsage(
    args: ImportApplicationUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApplicationUsageCommandOutput) => void
  ): void;
  public importApplicationUsage(
    args: ImportApplicationUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportApplicationUsageCommandOutput) => void),
    cb?: (err: any, data?: ImportApplicationUsageCommandOutput) => void
  ): Promise<ImportApplicationUsageCommandOutput> | void {
    const command = new ImportApplicationUsageCommand(args);
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
   * <p>Retrieves a list of all reports and their configurations for your AWS account.</p>
   *          <p>The maximum number of reports is one.</p>
   */
  public listReportDefinitions(
    args: ListReportDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportDefinitionsCommandOutput>;
  public listReportDefinitions(
    args: ListReportDefinitionsCommandInput,
    cb: (err: any, data?: ListReportDefinitionsCommandOutput) => void
  ): void;
  public listReportDefinitions(
    args: ListReportDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportDefinitionsCommandOutput) => void
  ): void;
  public listReportDefinitions(
    args: ListReportDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReportDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListReportDefinitionsCommandOutput) => void
  ): Promise<ListReportDefinitionsCommandOutput> | void {
    const command = new ListReportDefinitionsCommand(args);
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
   * <p>Creates the report definition for a report in Application Cost Profiler.</p>
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

  /**
   * <p>Updates existing report in AWS Application Cost Profiler.</p>
   */
  public updateReportDefinition(
    args: UpdateReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReportDefinitionCommandOutput>;
  public updateReportDefinition(
    args: UpdateReportDefinitionCommandInput,
    cb: (err: any, data?: UpdateReportDefinitionCommandOutput) => void
  ): void;
  public updateReportDefinition(
    args: UpdateReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReportDefinitionCommandOutput) => void
  ): void;
  public updateReportDefinition(
    args: UpdateReportDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateReportDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateReportDefinitionCommandOutput) => void
  ): Promise<UpdateReportDefinitionCommandOutput> | void {
    const command = new UpdateReportDefinitionCommand(args);
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
