import { XRayClient } from "./XRayClient";
import { BatchGetTracesInput } from "./types/BatchGetTracesInput";
import { BatchGetTracesOutput } from "./types/BatchGetTracesOutput";
import { CreateGroupInput } from "./types/CreateGroupInput";
import { CreateGroupOutput } from "./types/CreateGroupOutput";
import { CreateSamplingRuleInput } from "./types/CreateSamplingRuleInput";
import { CreateSamplingRuleOutput } from "./types/CreateSamplingRuleOutput";
import { DeleteGroupInput } from "./types/DeleteGroupInput";
import { DeleteGroupOutput } from "./types/DeleteGroupOutput";
import { DeleteSamplingRuleInput } from "./types/DeleteSamplingRuleInput";
import { DeleteSamplingRuleOutput } from "./types/DeleteSamplingRuleOutput";
import { GetEncryptionConfigInput } from "./types/GetEncryptionConfigInput";
import { GetEncryptionConfigOutput } from "./types/GetEncryptionConfigOutput";
import { GetGroupInput } from "./types/GetGroupInput";
import { GetGroupOutput } from "./types/GetGroupOutput";
import { GetGroupsInput } from "./types/GetGroupsInput";
import { GetGroupsOutput } from "./types/GetGroupsOutput";
import { GetSamplingRulesInput } from "./types/GetSamplingRulesInput";
import { GetSamplingRulesOutput } from "./types/GetSamplingRulesOutput";
import { GetSamplingStatisticSummariesInput } from "./types/GetSamplingStatisticSummariesInput";
import { GetSamplingStatisticSummariesOutput } from "./types/GetSamplingStatisticSummariesOutput";
import { GetSamplingTargetsInput } from "./types/GetSamplingTargetsInput";
import { GetSamplingTargetsOutput } from "./types/GetSamplingTargetsOutput";
import { GetServiceGraphInput } from "./types/GetServiceGraphInput";
import { GetServiceGraphOutput } from "./types/GetServiceGraphOutput";
import { GetTimeSeriesServiceStatisticsInput } from "./types/GetTimeSeriesServiceStatisticsInput";
import { GetTimeSeriesServiceStatisticsOutput } from "./types/GetTimeSeriesServiceStatisticsOutput";
import { GetTraceGraphInput } from "./types/GetTraceGraphInput";
import { GetTraceGraphOutput } from "./types/GetTraceGraphOutput";
import { GetTraceSummariesInput } from "./types/GetTraceSummariesInput";
import { GetTraceSummariesOutput } from "./types/GetTraceSummariesOutput";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { PutEncryptionConfigInput } from "./types/PutEncryptionConfigInput";
import { PutEncryptionConfigOutput } from "./types/PutEncryptionConfigOutput";
import { PutTelemetryRecordsInput } from "./types/PutTelemetryRecordsInput";
import { PutTelemetryRecordsOutput } from "./types/PutTelemetryRecordsOutput";
import { PutTraceSegmentsInput } from "./types/PutTraceSegmentsInput";
import { PutTraceSegmentsOutput } from "./types/PutTraceSegmentsOutput";
import { RuleLimitExceededException } from "./types/RuleLimitExceededException";
import { ThrottledException } from "./types/ThrottledException";
import { UpdateGroupInput } from "./types/UpdateGroupInput";
import { UpdateGroupOutput } from "./types/UpdateGroupOutput";
import { UpdateSamplingRuleInput } from "./types/UpdateSamplingRuleInput";
import { UpdateSamplingRuleOutput } from "./types/UpdateSamplingRuleOutput";
import { BatchGetTracesCommand } from "./commands/BatchGetTracesCommand";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { CreateSamplingRuleCommand } from "./commands/CreateSamplingRuleCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { DeleteSamplingRuleCommand } from "./commands/DeleteSamplingRuleCommand";
import { GetEncryptionConfigCommand } from "./commands/GetEncryptionConfigCommand";
import { GetGroupCommand } from "./commands/GetGroupCommand";
import { GetGroupsCommand } from "./commands/GetGroupsCommand";
import { GetSamplingRulesCommand } from "./commands/GetSamplingRulesCommand";
import { GetSamplingStatisticSummariesCommand } from "./commands/GetSamplingStatisticSummariesCommand";
import { GetSamplingTargetsCommand } from "./commands/GetSamplingTargetsCommand";
import { GetServiceGraphCommand } from "./commands/GetServiceGraphCommand";
import { GetTimeSeriesServiceStatisticsCommand } from "./commands/GetTimeSeriesServiceStatisticsCommand";
import { GetTraceGraphCommand } from "./commands/GetTraceGraphCommand";
import { GetTraceSummariesCommand } from "./commands/GetTraceSummariesCommand";
import { PutEncryptionConfigCommand } from "./commands/PutEncryptionConfigCommand";
import { PutTelemetryRecordsCommand } from "./commands/PutTelemetryRecordsCommand";
import { PutTraceSegmentsCommand } from "./commands/PutTraceSegmentsCommand";
import { UpdateGroupCommand } from "./commands/UpdateGroupCommand";
import { UpdateSamplingRuleCommand } from "./commands/UpdateSamplingRuleCommand";

export class XRay extends XRayClient {
  /**
   * <p>Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetTraces(
    args: BatchGetTracesInput
  ): Promise<BatchGetTracesOutput>;
  public batchGetTraces(
    args: BatchGetTracesInput,
    cb: (err: any, data?: BatchGetTracesOutput) => void
  ): void;
  public batchGetTraces(
    args: BatchGetTracesInput,
    cb?: (err: any, data?: BatchGetTracesOutput) => void
  ): Promise<BatchGetTracesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetTracesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a group resource with a name and a filter expression. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGroup(args: CreateGroupInput): Promise<CreateGroupOutput>;
  public createGroup(
    args: CreateGroupInput,
    cb: (err: any, data?: CreateGroupOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupInput,
    cb?: (err: any, data?: CreateGroupOutput) => void
  ): Promise<CreateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a>GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a>GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {RuleLimitExceededException} <p>You have reached the maximum number of sampling rules.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSamplingRule(
    args: CreateSamplingRuleInput
  ): Promise<CreateSamplingRuleOutput>;
  public createSamplingRule(
    args: CreateSamplingRuleInput,
    cb: (err: any, data?: CreateSamplingRuleOutput) => void
  ): void;
  public createSamplingRule(
    args: CreateSamplingRuleInput,
    cb?: (err: any, data?: CreateSamplingRuleOutput) => void
  ): Promise<CreateSamplingRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSamplingRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a group resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGroup(args: DeleteGroupInput): Promise<DeleteGroupOutput>;
  public deleteGroup(
    args: DeleteGroupInput,
    cb: (err: any, data?: DeleteGroupOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupInput,
    cb?: (err: any, data?: DeleteGroupOutput) => void
  ): Promise<DeleteGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a sampling rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSamplingRule(
    args: DeleteSamplingRuleInput
  ): Promise<DeleteSamplingRuleOutput>;
  public deleteSamplingRule(
    args: DeleteSamplingRuleInput,
    cb: (err: any, data?: DeleteSamplingRuleOutput) => void
  ): void;
  public deleteSamplingRule(
    args: DeleteSamplingRuleInput,
    cb?: (err: any, data?: DeleteSamplingRuleOutput) => void
  ): Promise<DeleteSamplingRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSamplingRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the current encryption configuration for X-Ray data.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEncryptionConfig(
    args: GetEncryptionConfigInput
  ): Promise<GetEncryptionConfigOutput>;
  public getEncryptionConfig(
    args: GetEncryptionConfigInput,
    cb: (err: any, data?: GetEncryptionConfigOutput) => void
  ): void;
  public getEncryptionConfig(
    args: GetEncryptionConfigInput,
    cb?: (err: any, data?: GetEncryptionConfigOutput) => void
  ): Promise<GetEncryptionConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEncryptionConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves group resource details.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroup(args: GetGroupInput): Promise<GetGroupOutput>;
  public getGroup(
    args: GetGroupInput,
    cb: (err: any, data?: GetGroupOutput) => void
  ): void;
  public getGroup(
    args: GetGroupInput,
    cb?: (err: any, data?: GetGroupOutput) => void
  ): Promise<GetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves all active group details.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroups(args: GetGroupsInput): Promise<GetGroupsOutput>;
  public getGroups(
    args: GetGroupsInput,
    cb: (err: any, data?: GetGroupsOutput) => void
  ): void;
  public getGroups(
    args: GetGroupsInput,
    cb?: (err: any, data?: GetGroupsOutput) => void
  ): Promise<GetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves all sampling rules.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSamplingRules(
    args: GetSamplingRulesInput
  ): Promise<GetSamplingRulesOutput>;
  public getSamplingRules(
    args: GetSamplingRulesInput,
    cb: (err: any, data?: GetSamplingRulesOutput) => void
  ): void;
  public getSamplingRules(
    args: GetSamplingRulesInput,
    cb?: (err: any, data?: GetSamplingRulesOutput) => void
  ): Promise<GetSamplingRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSamplingRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about recent sampling results for all sampling rules.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesInput
  ): Promise<GetSamplingStatisticSummariesOutput>;
  public getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesInput,
    cb: (err: any, data?: GetSamplingStatisticSummariesOutput) => void
  ): void;
  public getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesInput,
    cb?: (err: any, data?: GetSamplingStatisticSummariesOutput) => void
  ): Promise<GetSamplingStatisticSummariesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSamplingStatisticSummariesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a sampling quota for rules that the service is using to sample requests. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSamplingTargets(
    args: GetSamplingTargetsInput
  ): Promise<GetSamplingTargetsOutput>;
  public getSamplingTargets(
    args: GetSamplingTargetsInput,
    cb: (err: any, data?: GetSamplingTargetsOutput) => void
  ): void;
  public getSamplingTargets(
    args: GetSamplingTargetsInput,
    cb?: (err: any, data?: GetSamplingTargetsOutput) => void
  ): Promise<GetSamplingTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSamplingTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the AWS X-Ray SDK. Downstream services can be other applications, AWS resources, HTTP web APIs, or SQL databases.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServiceGraph(
    args: GetServiceGraphInput
  ): Promise<GetServiceGraphOutput>;
  public getServiceGraph(
    args: GetServiceGraphInput,
    cb: (err: any, data?: GetServiceGraphOutput) => void
  ): void;
  public getServiceGraph(
    args: GetServiceGraphInput,
    cb?: (err: any, data?: GetServiceGraphOutput) => void
  ): Promise<GetServiceGraphOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServiceGraphCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get an aggregation of service statistics defined by a specific time range.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsInput
  ): Promise<GetTimeSeriesServiceStatisticsOutput>;
  public getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsInput,
    cb: (err: any, data?: GetTimeSeriesServiceStatisticsOutput) => void
  ): void;
  public getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsInput,
    cb?: (err: any, data?: GetTimeSeriesServiceStatisticsOutput) => void
  ): Promise<GetTimeSeriesServiceStatisticsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTimeSeriesServiceStatisticsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a service graph for one or more specific trace IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTraceGraph(args: GetTraceGraphInput): Promise<GetTraceGraphOutput>;
  public getTraceGraph(
    args: GetTraceGraphInput,
    cb: (err: any, data?: GetTraceGraphOutput) => void
  ): void;
  public getTraceGraph(
    args: GetTraceGraphInput,
    cb?: (err: any, data?: GetTraceGraphOutput) => void
  ): Promise<GetTraceGraphOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTraceGraphCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves IDs and metadata for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTraceSummaries(
    args: GetTraceSummariesInput
  ): Promise<GetTraceSummariesOutput>;
  public getTraceSummaries(
    args: GetTraceSummariesInput,
    cb: (err: any, data?: GetTraceSummariesOutput) => void
  ): void;
  public getTraceSummaries(
    args: GetTraceSummariesInput,
    cb?: (err: any, data?: GetTraceSummariesOutput) => void
  ): Promise<GetTraceSummariesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTraceSummariesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the encryption configuration for X-Ray data.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEncryptionConfig(
    args: PutEncryptionConfigInput
  ): Promise<PutEncryptionConfigOutput>;
  public putEncryptionConfig(
    args: PutEncryptionConfigInput,
    cb: (err: any, data?: PutEncryptionConfigOutput) => void
  ): void;
  public putEncryptionConfig(
    args: PutEncryptionConfigInput,
    cb?: (err: any, data?: PutEncryptionConfigOutput) => void
  ): Promise<PutEncryptionConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEncryptionConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by the AWS X-Ray daemon to upload telemetry.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putTelemetryRecords(
    args: PutTelemetryRecordsInput
  ): Promise<PutTelemetryRecordsOutput>;
  public putTelemetryRecords(
    args: PutTelemetryRecordsInput,
    cb: (err: any, data?: PutTelemetryRecordsOutput) => void
  ): void;
  public putTelemetryRecords(
    args: PutTelemetryRecordsInput,
    cb?: (err: any, data?: PutTelemetryRecordsOutput) => void
  ): Promise<PutTelemetryRecordsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutTelemetryRecordsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads segment documents to AWS X-Ray. The X-Ray SDK generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray Segment Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required Segment Document Fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in progress segment when your application receives a request that will take a long time to serve, to trace the fact that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, i.e. <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putTraceSegments(
    args: PutTraceSegmentsInput
  ): Promise<PutTraceSegmentsOutput>;
  public putTraceSegments(
    args: PutTraceSegmentsInput,
    cb: (err: any, data?: PutTraceSegmentsOutput) => void
  ): void;
  public putTraceSegments(
    args: PutTraceSegmentsInput,
    cb?: (err: any, data?: PutTraceSegmentsOutput) => void
  ): Promise<PutTraceSegmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutTraceSegmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a group resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGroup(args: UpdateGroupInput): Promise<UpdateGroupOutput>;
  public updateGroup(
    args: UpdateGroupInput,
    cb: (err: any, data?: UpdateGroupOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupInput,
    cb?: (err: any, data?: UpdateGroupOutput) => void
  ): Promise<UpdateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a sampling rule's configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is missing required parameters or has invalid parameters.</p>
   *   - {ThrottledException} <p>The request exceeds the maximum number of requests per second.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSamplingRule(
    args: UpdateSamplingRuleInput
  ): Promise<UpdateSamplingRuleOutput>;
  public updateSamplingRule(
    args: UpdateSamplingRuleInput,
    cb: (err: any, data?: UpdateSamplingRuleOutput) => void
  ): void;
  public updateSamplingRule(
    args: UpdateSamplingRuleInput,
    cb?: (err: any, data?: UpdateSamplingRuleOutput) => void
  ): Promise<UpdateSamplingRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSamplingRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
