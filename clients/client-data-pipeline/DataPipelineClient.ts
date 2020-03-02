import {
  ActivatePipelineCommandInput,
  ActivatePipelineCommandOutput
} from "./commands/ActivatePipelineCommand";
import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "./commands/AddTagsCommand";
import {
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput
} from "./commands/CreatePipelineCommand";
import {
  DeactivatePipelineCommandInput,
  DeactivatePipelineCommandOutput
} from "./commands/DeactivatePipelineCommand";
import {
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput
} from "./commands/DeletePipelineCommand";
import {
  DescribeObjectsCommandInput,
  DescribeObjectsCommandOutput
} from "./commands/DescribeObjectsCommand";
import {
  DescribePipelinesCommandInput,
  DescribePipelinesCommandOutput
} from "./commands/DescribePipelinesCommand";
import {
  EvaluateExpressionCommandInput,
  EvaluateExpressionCommandOutput
} from "./commands/EvaluateExpressionCommand";
import {
  GetPipelineDefinitionCommandInput,
  GetPipelineDefinitionCommandOutput
} from "./commands/GetPipelineDefinitionCommand";
import {
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput
} from "./commands/ListPipelinesCommand";
import {
  PollForTaskCommandInput,
  PollForTaskCommandOutput
} from "./commands/PollForTaskCommand";
import {
  PutPipelineDefinitionCommandInput,
  PutPipelineDefinitionCommandOutput
} from "./commands/PutPipelineDefinitionCommand";
import {
  QueryObjectsCommandInput,
  QueryObjectsCommandOutput
} from "./commands/QueryObjectsCommand";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "./commands/RemoveTagsCommand";
import {
  ReportTaskProgressCommandInput,
  ReportTaskProgressCommandOutput
} from "./commands/ReportTaskProgressCommand";
import {
  ReportTaskRunnerHeartbeatCommandInput,
  ReportTaskRunnerHeartbeatCommandOutput
} from "./commands/ReportTaskRunnerHeartbeatCommand";
import {
  SetStatusCommandInput,
  SetStatusCommandOutput
} from "./commands/SetStatusCommand";
import {
  SetTaskStatusCommandInput,
  SetTaskStatusCommandOutput
} from "./commands/SetTaskStatusCommand";
import {
  ValidatePipelineDefinitionCommandInput,
  ValidatePipelineDefinitionCommandOutput
} from "./commands/ValidatePipelineDefinitionCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | ActivatePipelineCommandInput
  | AddTagsCommandInput
  | CreatePipelineCommandInput
  | DeactivatePipelineCommandInput
  | DeletePipelineCommandInput
  | DescribeObjectsCommandInput
  | DescribePipelinesCommandInput
  | EvaluateExpressionCommandInput
  | GetPipelineDefinitionCommandInput
  | ListPipelinesCommandInput
  | PollForTaskCommandInput
  | PutPipelineDefinitionCommandInput
  | QueryObjectsCommandInput
  | RemoveTagsCommandInput
  | ReportTaskProgressCommandInput
  | ReportTaskRunnerHeartbeatCommandInput
  | SetStatusCommandInput
  | SetTaskStatusCommandInput
  | ValidatePipelineDefinitionCommandInput;

export type ServiceOutputTypes =
  | ActivatePipelineCommandOutput
  | AddTagsCommandOutput
  | CreatePipelineCommandOutput
  | DeactivatePipelineCommandOutput
  | DeletePipelineCommandOutput
  | DescribeObjectsCommandOutput
  | DescribePipelinesCommandOutput
  | EvaluateExpressionCommandOutput
  | GetPipelineDefinitionCommandOutput
  | ListPipelinesCommandOutput
  | PollForTaskCommandOutput
  | PutPipelineDefinitionCommandOutput
  | QueryObjectsCommandOutput
  | RemoveTagsCommandOutput
  | ReportTaskProgressCommandOutput
  | ReportTaskRunnerHeartbeatCommandOutput
  | SetStatusCommandOutput
  | SetTaskStatusCommandOutput
  | ValidatePipelineDefinitionCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type DataPipelineClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type DataPipelineClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data.</p>
 *
 *         <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management.</p>
 *
 *         <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service.</p>
 */
export class DataPipelineClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataPipelineClientResolvedConfig
> {
  readonly config: DataPipelineClientResolvedConfig;

  constructor(configuration: DataPipelineClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
