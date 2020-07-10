import { XRayClient } from "./XRayClient";
import {
  BatchGetTracesCommand,
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput,
} from "./commands/BatchGetTracesCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateSamplingRuleCommand,
  CreateSamplingRuleCommandInput,
  CreateSamplingRuleCommandOutput,
} from "./commands/CreateSamplingRuleCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteSamplingRuleCommand,
  DeleteSamplingRuleCommandInput,
  DeleteSamplingRuleCommandOutput,
} from "./commands/DeleteSamplingRuleCommand";
import {
  GetEncryptionConfigCommand,
  GetEncryptionConfigCommandInput,
  GetEncryptionConfigCommandOutput,
} from "./commands/GetEncryptionConfigCommand";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetGroupsCommand, GetGroupsCommandInput, GetGroupsCommandOutput } from "./commands/GetGroupsCommand";
import {
  GetSamplingRulesCommand,
  GetSamplingRulesCommandInput,
  GetSamplingRulesCommandOutput,
} from "./commands/GetSamplingRulesCommand";
import {
  GetSamplingStatisticSummariesCommand,
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput,
} from "./commands/GetSamplingStatisticSummariesCommand";
import {
  GetSamplingTargetsCommand,
  GetSamplingTargetsCommandInput,
  GetSamplingTargetsCommandOutput,
} from "./commands/GetSamplingTargetsCommand";
import {
  GetServiceGraphCommand,
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput,
} from "./commands/GetServiceGraphCommand";
import {
  GetTimeSeriesServiceStatisticsCommand,
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
} from "./commands/GetTimeSeriesServiceStatisticsCommand";
import {
  GetTraceGraphCommand,
  GetTraceGraphCommandInput,
  GetTraceGraphCommandOutput,
} from "./commands/GetTraceGraphCommand";
import {
  GetTraceSummariesCommand,
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput,
} from "./commands/GetTraceSummariesCommand";
import {
  PutEncryptionConfigCommand,
  PutEncryptionConfigCommandInput,
  PutEncryptionConfigCommandOutput,
} from "./commands/PutEncryptionConfigCommand";
import {
  PutTelemetryRecordsCommand,
  PutTelemetryRecordsCommandInput,
  PutTelemetryRecordsCommandOutput,
} from "./commands/PutTelemetryRecordsCommand";
import {
  PutTraceSegmentsCommand,
  PutTraceSegmentsCommandInput,
  PutTraceSegmentsCommandOutput,
} from "./commands/PutTraceSegmentsCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateSamplingRuleCommand,
  UpdateSamplingRuleCommandInput,
  UpdateSamplingRuleCommandOutput,
} from "./commands/UpdateSamplingRuleCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS X-Ray provides APIs for managing debug traces and retrieving service maps
 *       and other data created by processing those traces.</p>
 */
export class XRay extends XRayClient {
  /**
   * <p>Retrieves a list of traces specified by ID. Each trace is a collection of segment
   *       documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a
   *       list of trace IDs.</p>
   */
  public batchGetTraces(
    args: BatchGetTracesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetTracesCommandOutput>;
  public batchGetTraces(
    args: BatchGetTracesCommandInput,
    cb: (err: any, data?: BatchGetTracesCommandOutput) => void
  ): void;
  public batchGetTraces(
    args: BatchGetTracesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetTracesCommandOutput) => void
  ): void;
  public batchGetTraces(
    args: BatchGetTracesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetTracesCommandOutput) => void),
    cb?: (err: any, data?: BatchGetTracesCommandOutput) => void
  ): Promise<BatchGetTracesCommandOutput> | void {
    const command = new BatchGetTracesCommand(args);
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
   * <p>Creates a group resource with a name and a filter expression. </p>
   */
  public createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  public createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  public createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupCommandOutput) => void
  ): Promise<CreateGroupCommandOutput> | void {
    const command = new CreateGroupCommand(args);
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
   * <p>Creates a rule to control sampling behavior for instrumented applications. Services
   *          retrieve rules with <a>GetSamplingRules</a>, and evaluate each rule in ascending
   *          order of <i>priority</i> for each request. If a rule matches, the service
   *          records a trace, borrowing it from the reservoir size. After 10 seconds, the service
   *          reports back to X-Ray with <a>GetSamplingTargets</a> to get updated versions of
   *          each in-use rule. The updated rule contains a trace quota that the service can use instead
   *          of borrowing from the reservoir.</p>
   */
  public createSamplingRule(
    args: CreateSamplingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSamplingRuleCommandOutput>;
  public createSamplingRule(
    args: CreateSamplingRuleCommandInput,
    cb: (err: any, data?: CreateSamplingRuleCommandOutput) => void
  ): void;
  public createSamplingRule(
    args: CreateSamplingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSamplingRuleCommandOutput) => void
  ): void;
  public createSamplingRule(
    args: CreateSamplingRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSamplingRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateSamplingRuleCommandOutput) => void
  ): Promise<CreateSamplingRuleCommandOutput> | void {
    const command = new CreateSamplingRuleCommand(args);
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
   * <p>Deletes a group resource.</p>
   */
  public deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  public deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupCommandOutput) => void
  ): Promise<DeleteGroupCommandOutput> | void {
    const command = new DeleteGroupCommand(args);
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
   * <p>Deletes a sampling rule.</p>
   */
  public deleteSamplingRule(
    args: DeleteSamplingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSamplingRuleCommandOutput>;
  public deleteSamplingRule(
    args: DeleteSamplingRuleCommandInput,
    cb: (err: any, data?: DeleteSamplingRuleCommandOutput) => void
  ): void;
  public deleteSamplingRule(
    args: DeleteSamplingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSamplingRuleCommandOutput) => void
  ): void;
  public deleteSamplingRule(
    args: DeleteSamplingRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSamplingRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteSamplingRuleCommandOutput) => void
  ): Promise<DeleteSamplingRuleCommandOutput> | void {
    const command = new DeleteSamplingRuleCommand(args);
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
   * <p>Retrieves the current encryption configuration for X-Ray data.</p>
   */
  public getEncryptionConfig(
    args: GetEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEncryptionConfigCommandOutput>;
  public getEncryptionConfig(
    args: GetEncryptionConfigCommandInput,
    cb: (err: any, data?: GetEncryptionConfigCommandOutput) => void
  ): void;
  public getEncryptionConfig(
    args: GetEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEncryptionConfigCommandOutput) => void
  ): void;
  public getEncryptionConfig(
    args: GetEncryptionConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEncryptionConfigCommandOutput) => void),
    cb?: (err: any, data?: GetEncryptionConfigCommandOutput) => void
  ): Promise<GetEncryptionConfigCommandOutput> | void {
    const command = new GetEncryptionConfigCommand(args);
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
   * <p>Retrieves group resource details.</p>
   */
  public getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
  public getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
  public getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  public getGroup(
    args: GetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupCommandOutput) => void),
    cb?: (err: any, data?: GetGroupCommandOutput) => void
  ): Promise<GetGroupCommandOutput> | void {
    const command = new GetGroupCommand(args);
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
   * <p>Retrieves all active group details.</p>
   */
  public getGroups(args: GetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupsCommandOutput>;
  public getGroups(args: GetGroupsCommandInput, cb: (err: any, data?: GetGroupsCommandOutput) => void): void;
  public getGroups(
    args: GetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupsCommandOutput) => void
  ): void;
  public getGroups(
    args: GetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupsCommandOutput) => void),
    cb?: (err: any, data?: GetGroupsCommandOutput) => void
  ): Promise<GetGroupsCommandOutput> | void {
    const command = new GetGroupsCommand(args);
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
   * <p>Retrieves all sampling rules.</p>
   */
  public getSamplingRules(
    args: GetSamplingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSamplingRulesCommandOutput>;
  public getSamplingRules(
    args: GetSamplingRulesCommandInput,
    cb: (err: any, data?: GetSamplingRulesCommandOutput) => void
  ): void;
  public getSamplingRules(
    args: GetSamplingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSamplingRulesCommandOutput) => void
  ): void;
  public getSamplingRules(
    args: GetSamplingRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSamplingRulesCommandOutput) => void),
    cb?: (err: any, data?: GetSamplingRulesCommandOutput) => void
  ): Promise<GetSamplingRulesCommandOutput> | void {
    const command = new GetSamplingRulesCommand(args);
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
   * <p>Retrieves information about recent sampling results for all sampling rules.</p>
   */
  public getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSamplingStatisticSummariesCommandOutput>;
  public getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesCommandInput,
    cb: (err: any, data?: GetSamplingStatisticSummariesCommandOutput) => void
  ): void;
  public getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSamplingStatisticSummariesCommandOutput) => void
  ): void;
  public getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSamplingStatisticSummariesCommandOutput) => void),
    cb?: (err: any, data?: GetSamplingStatisticSummariesCommandOutput) => void
  ): Promise<GetSamplingStatisticSummariesCommandOutput> | void {
    const command = new GetSamplingStatisticSummariesCommand(args);
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
   * <p>Requests a sampling quota for rules that the service is using to sample requests.
   *       </p>
   */
  public getSamplingTargets(
    args: GetSamplingTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSamplingTargetsCommandOutput>;
  public getSamplingTargets(
    args: GetSamplingTargetsCommandInput,
    cb: (err: any, data?: GetSamplingTargetsCommandOutput) => void
  ): void;
  public getSamplingTargets(
    args: GetSamplingTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSamplingTargetsCommandOutput) => void
  ): void;
  public getSamplingTargets(
    args: GetSamplingTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSamplingTargetsCommandOutput) => void),
    cb?: (err: any, data?: GetSamplingTargetsCommandOutput) => void
  ): Promise<GetSamplingTargetsCommandOutput> | void {
    const command = new GetSamplingTargetsCommand(args);
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
   * <p>Retrieves a document that describes services that process incoming requests, and
   *       downstream services that they call as a result. Root services process incoming requests and
   *       make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">AWS X-Ray SDK</a>.
   *       Downstream services can be other applications, AWS resources, HTTP web APIs, or SQL
   *       databases.</p>
   */
  public getServiceGraph(
    args: GetServiceGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceGraphCommandOutput>;
  public getServiceGraph(
    args: GetServiceGraphCommandInput,
    cb: (err: any, data?: GetServiceGraphCommandOutput) => void
  ): void;
  public getServiceGraph(
    args: GetServiceGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceGraphCommandOutput) => void
  ): void;
  public getServiceGraph(
    args: GetServiceGraphCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceGraphCommandOutput) => void),
    cb?: (err: any, data?: GetServiceGraphCommandOutput) => void
  ): Promise<GetServiceGraphCommandOutput> | void {
    const command = new GetServiceGraphCommand(args);
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
   * <p>Get an aggregation of service statistics defined by a specific time
   *             range.</p>
   */
  public getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTimeSeriesServiceStatisticsCommandOutput>;
  public getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    cb: (err: any, data?: GetTimeSeriesServiceStatisticsCommandOutput) => void
  ): void;
  public getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTimeSeriesServiceStatisticsCommandOutput) => void
  ): void;
  public getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTimeSeriesServiceStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetTimeSeriesServiceStatisticsCommandOutput) => void
  ): Promise<GetTimeSeriesServiceStatisticsCommandOutput> | void {
    const command = new GetTimeSeriesServiceStatisticsCommand(args);
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
   * <p>Retrieves a service graph for one or more specific trace IDs.</p>
   */
  public getTraceGraph(
    args: GetTraceGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTraceGraphCommandOutput>;
  public getTraceGraph(
    args: GetTraceGraphCommandInput,
    cb: (err: any, data?: GetTraceGraphCommandOutput) => void
  ): void;
  public getTraceGraph(
    args: GetTraceGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTraceGraphCommandOutput) => void
  ): void;
  public getTraceGraph(
    args: GetTraceGraphCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTraceGraphCommandOutput) => void),
    cb?: (err: any, data?: GetTraceGraphCommandOutput) => void
  ): Promise<GetTraceGraphCommandOutput> | void {
    const command = new GetTraceGraphCommand(args);
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
   * <p>Retrieves IDs and annotations for traces available for a specified time frame using an
   *       optional filter. To get the full traces, pass the trace IDs to
   *       <code>BatchGetTraces</code>.</p>
   *          <p>A filter expression can target traced requests that hit specific service nodes or
   *       edges, have errors, or come from a known user. For example, the following filter expression
   *       targets traces that pass through <code>api.example.com</code>:</p>
   *          <p>
   *             <code>service("api.example.com")</code>
   *          </p>
   *          <p>This filter expression finds traces that have an annotation named <code>account</code>
   *       with the value <code>12345</code>:</p>
   *          <p>
   *             <code>annotation.account = "12345"</code>
   *          </p>
   *          <p>For a full list of indexed fields and keywords that you can use in filter expressions,
   *       see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter
   *         Expressions</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
   */
  public getTraceSummaries(
    args: GetTraceSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTraceSummariesCommandOutput>;
  public getTraceSummaries(
    args: GetTraceSummariesCommandInput,
    cb: (err: any, data?: GetTraceSummariesCommandOutput) => void
  ): void;
  public getTraceSummaries(
    args: GetTraceSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTraceSummariesCommandOutput) => void
  ): void;
  public getTraceSummaries(
    args: GetTraceSummariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTraceSummariesCommandOutput) => void),
    cb?: (err: any, data?: GetTraceSummariesCommandOutput) => void
  ): Promise<GetTraceSummariesCommandOutput> | void {
    const command = new GetTraceSummariesCommand(args);
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
   * <p>Updates the encryption configuration for X-Ray data.</p>
   */
  public putEncryptionConfig(
    args: PutEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEncryptionConfigCommandOutput>;
  public putEncryptionConfig(
    args: PutEncryptionConfigCommandInput,
    cb: (err: any, data?: PutEncryptionConfigCommandOutput) => void
  ): void;
  public putEncryptionConfig(
    args: PutEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEncryptionConfigCommandOutput) => void
  ): void;
  public putEncryptionConfig(
    args: PutEncryptionConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEncryptionConfigCommandOutput) => void),
    cb?: (err: any, data?: PutEncryptionConfigCommandOutput) => void
  ): Promise<PutEncryptionConfigCommandOutput> | void {
    const command = new PutEncryptionConfigCommand(args);
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
   * <p>Used by the AWS X-Ray daemon to upload telemetry.</p>
   */
  public putTelemetryRecords(
    args: PutTelemetryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTelemetryRecordsCommandOutput>;
  public putTelemetryRecords(
    args: PutTelemetryRecordsCommandInput,
    cb: (err: any, data?: PutTelemetryRecordsCommandOutput) => void
  ): void;
  public putTelemetryRecords(
    args: PutTelemetryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTelemetryRecordsCommandOutput) => void
  ): void;
  public putTelemetryRecords(
    args: PutTelemetryRecordsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutTelemetryRecordsCommandOutput) => void),
    cb?: (err: any, data?: PutTelemetryRecordsCommandOutput) => void
  ): Promise<PutTelemetryRecordsCommandOutput> | void {
    const command = new PutTelemetryRecordsCommand(args);
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
   * <p>Uploads segment documents to AWS X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and
   *       sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a
   *       completed segment, an in-progress segment, or an array of subsegments.</p>
   *          <p>Segments must include the following fields. For the full segment document schema, see
   *         <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray
   *         Segment Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
   *          <p class="title">
   *             <b>Required Segment Document Fields</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the service that handled the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>id</code> - A 64-bit identifier for the segment, unique among segments in the
   *           same trace, in 16 hexadecimal digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>trace_id</code> - A unique identifier that connects all segments and
   *           subsegments originating from a single client request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start_time</code> - Time the segment or subsegment was created, in floating
   *           point seconds in epoch time, accurate to milliseconds. For example,
   *             <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end_time</code> - Time the segment or subsegment was closed. For example,
   *             <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an
   *             <code>end_time</code> or <code>in_progress</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>in_progress</code> - Set to <code>true</code> instead of specifying an
   *             <code>end_time</code> to record that a segment has been started, but is not complete.
   *           Send an in progress segment when your application receives a request that will take a long
   *           time to serve, to trace the fact that the request was received. When the response is sent,
   *           send the complete segment to overwrite the in-progress segment.</p>
   *             </li>
   *          </ul>
   *          <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example,
   *       1-58406520-a006649127e371903a2de979. This includes:</p>
   *          <p class="title">
   *             <b>Trace ID Format</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>The version number, i.e. <code>1</code>.</p>
   *             </li>
   *             <li>
   *                <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For
   *           example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds,
   *           or <code>58406520</code> in hexadecimal.</p>
   *             </li>
   *             <li>
   *                <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal
   *           digits.</p>
   *             </li>
   *          </ul>
   */
  public putTraceSegments(
    args: PutTraceSegmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTraceSegmentsCommandOutput>;
  public putTraceSegments(
    args: PutTraceSegmentsCommandInput,
    cb: (err: any, data?: PutTraceSegmentsCommandOutput) => void
  ): void;
  public putTraceSegments(
    args: PutTraceSegmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTraceSegmentsCommandOutput) => void
  ): void;
  public putTraceSegments(
    args: PutTraceSegmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutTraceSegmentsCommandOutput) => void),
    cb?: (err: any, data?: PutTraceSegmentsCommandOutput) => void
  ): Promise<PutTraceSegmentsCommandOutput> | void {
    const command = new PutTraceSegmentsCommand(args);
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
   * <p>Updates a group resource.</p>
   */
  public updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  public updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupCommandOutput) => void
  ): Promise<UpdateGroupCommandOutput> | void {
    const command = new UpdateGroupCommand(args);
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
   * <p>Modifies a sampling rule's configuration.</p>
   */
  public updateSamplingRule(
    args: UpdateSamplingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSamplingRuleCommandOutput>;
  public updateSamplingRule(
    args: UpdateSamplingRuleCommandInput,
    cb: (err: any, data?: UpdateSamplingRuleCommandOutput) => void
  ): void;
  public updateSamplingRule(
    args: UpdateSamplingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSamplingRuleCommandOutput) => void
  ): void;
  public updateSamplingRule(
    args: UpdateSamplingRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSamplingRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateSamplingRuleCommandOutput) => void
  ): Promise<UpdateSamplingRuleCommandOutput> | void {
    const command = new UpdateSamplingRuleCommand(args);
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
