// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ApplicationCostProfilerClient, ApplicationCostProfilerClientConfig } from "./ApplicationCostProfilerClient";
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

const commands = {
  DeleteReportDefinitionCommand,
  GetReportDefinitionCommand,
  ImportApplicationUsageCommand,
  ListReportDefinitionsCommand,
  PutReportDefinitionCommand,
  UpdateReportDefinitionCommand,
};

export interface ApplicationCostProfiler {
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
   * @see {@link GetReportDefinitionCommand}
   */
  getReportDefinition(
    args: GetReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReportDefinitionCommandOutput>;
  getReportDefinition(
    args: GetReportDefinitionCommandInput,
    cb: (err: any, data?: GetReportDefinitionCommandOutput) => void
  ): void;
  getReportDefinition(
    args: GetReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReportDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportApplicationUsageCommand}
   */
  importApplicationUsage(
    args: ImportApplicationUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportApplicationUsageCommandOutput>;
  importApplicationUsage(
    args: ImportApplicationUsageCommandInput,
    cb: (err: any, data?: ImportApplicationUsageCommandOutput) => void
  ): void;
  importApplicationUsage(
    args: ImportApplicationUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApplicationUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportDefinitionsCommand}
   */
  listReportDefinitions(
    args: ListReportDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportDefinitionsCommandOutput>;
  listReportDefinitions(
    args: ListReportDefinitionsCommandInput,
    cb: (err: any, data?: ListReportDefinitionsCommandOutput) => void
  ): void;
  listReportDefinitions(
    args: ListReportDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportDefinitionsCommandOutput) => void
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
   * @see {@link UpdateReportDefinitionCommand}
   */
  updateReportDefinition(
    args: UpdateReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReportDefinitionCommandOutput>;
  updateReportDefinition(
    args: UpdateReportDefinitionCommandInput,
    cb: (err: any, data?: UpdateReportDefinitionCommandOutput) => void
  ): void;
  updateReportDefinition(
    args: UpdateReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReportDefinitionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This reference provides descriptions of the AWS Application Cost Profiler API.</p>
 *          <p>The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete
 *       application cost report definitions, as well as to import your usage data into the Application Cost Profiler
 *       service.</p>
 *          <p>For more information about using this service, see the <a href="https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html">AWS Application Cost
 *         Profiler User Guide</a>.</p>
 */
export class ApplicationCostProfiler extends ApplicationCostProfilerClient implements ApplicationCostProfiler {}
createAggregatedClient(commands, ApplicationCostProfiler);
