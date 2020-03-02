import {
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput
} from "./commands/CancelTaskExecutionCommand";
import {
  CreateAgentCommandInput,
  CreateAgentCommandOutput
} from "./commands/CreateAgentCommand";
import {
  CreateLocationEfsCommandInput,
  CreateLocationEfsCommandOutput
} from "./commands/CreateLocationEfsCommand";
import {
  CreateLocationNfsCommandInput,
  CreateLocationNfsCommandOutput
} from "./commands/CreateLocationNfsCommand";
import {
  CreateLocationS3CommandInput,
  CreateLocationS3CommandOutput
} from "./commands/CreateLocationS3Command";
import {
  CreateLocationSmbCommandInput,
  CreateLocationSmbCommandOutput
} from "./commands/CreateLocationSmbCommand";
import {
  CreateTaskCommandInput,
  CreateTaskCommandOutput
} from "./commands/CreateTaskCommand";
import {
  DeleteAgentCommandInput,
  DeleteAgentCommandOutput
} from "./commands/DeleteAgentCommand";
import {
  DeleteLocationCommandInput,
  DeleteLocationCommandOutput
} from "./commands/DeleteLocationCommand";
import {
  DeleteTaskCommandInput,
  DeleteTaskCommandOutput
} from "./commands/DeleteTaskCommand";
import {
  DescribeAgentCommandInput,
  DescribeAgentCommandOutput
} from "./commands/DescribeAgentCommand";
import {
  DescribeLocationEfsCommandInput,
  DescribeLocationEfsCommandOutput
} from "./commands/DescribeLocationEfsCommand";
import {
  DescribeLocationNfsCommandInput,
  DescribeLocationNfsCommandOutput
} from "./commands/DescribeLocationNfsCommand";
import {
  DescribeLocationS3CommandInput,
  DescribeLocationS3CommandOutput
} from "./commands/DescribeLocationS3Command";
import {
  DescribeLocationSmbCommandInput,
  DescribeLocationSmbCommandOutput
} from "./commands/DescribeLocationSmbCommand";
import {
  DescribeTaskCommandInput,
  DescribeTaskCommandOutput
} from "./commands/DescribeTaskCommand";
import {
  DescribeTaskExecutionCommandInput,
  DescribeTaskExecutionCommandOutput
} from "./commands/DescribeTaskExecutionCommand";
import {
  ListAgentsCommandInput,
  ListAgentsCommandOutput
} from "./commands/ListAgentsCommand";
import {
  ListLocationsCommandInput,
  ListLocationsCommandOutput
} from "./commands/ListLocationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListTaskExecutionsCommandInput,
  ListTaskExecutionsCommandOutput
} from "./commands/ListTaskExecutionsCommand";
import {
  ListTasksCommandInput,
  ListTasksCommandOutput
} from "./commands/ListTasksCommand";
import {
  StartTaskExecutionCommandInput,
  StartTaskExecutionCommandOutput
} from "./commands/StartTaskExecutionCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateAgentCommandInput,
  UpdateAgentCommandOutput
} from "./commands/UpdateAgentCommand";
import {
  UpdateTaskCommandInput,
  UpdateTaskCommandOutput
} from "./commands/UpdateTaskCommand";
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
  | CancelTaskExecutionCommandInput
  | CreateAgentCommandInput
  | CreateLocationEfsCommandInput
  | CreateLocationNfsCommandInput
  | CreateLocationS3CommandInput
  | CreateLocationSmbCommandInput
  | CreateTaskCommandInput
  | DeleteAgentCommandInput
  | DeleteLocationCommandInput
  | DeleteTaskCommandInput
  | DescribeAgentCommandInput
  | DescribeLocationEfsCommandInput
  | DescribeLocationNfsCommandInput
  | DescribeLocationS3CommandInput
  | DescribeLocationSmbCommandInput
  | DescribeTaskCommandInput
  | DescribeTaskExecutionCommandInput
  | ListAgentsCommandInput
  | ListLocationsCommandInput
  | ListTagsForResourceCommandInput
  | ListTaskExecutionsCommandInput
  | ListTasksCommandInput
  | StartTaskExecutionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAgentCommandInput
  | UpdateTaskCommandInput;

export type ServiceOutputTypes =
  | CancelTaskExecutionCommandOutput
  | CreateAgentCommandOutput
  | CreateLocationEfsCommandOutput
  | CreateLocationNfsCommandOutput
  | CreateLocationS3CommandOutput
  | CreateLocationSmbCommandOutput
  | CreateTaskCommandOutput
  | DeleteAgentCommandOutput
  | DeleteLocationCommandOutput
  | DeleteTaskCommandOutput
  | DescribeAgentCommandOutput
  | DescribeLocationEfsCommandOutput
  | DescribeLocationNfsCommandOutput
  | DescribeLocationS3CommandOutput
  | DescribeLocationSmbCommandOutput
  | DescribeTaskCommandOutput
  | DescribeTaskExecutionCommandOutput
  | ListAgentsCommandOutput
  | ListLocationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTaskExecutionsCommandOutput
  | ListTasksCommandOutput
  | StartTaskExecutionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentCommandOutput
  | UpdateTaskCommandOutput;

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

export type DataSyncClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type DataSyncClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <fullname>AWS DataSync</fullname>
 *
 *          <p>AWS DataSync is a managed data transfer service that makes it simpler for you to
 *       automate moving data between on-premises storage and Amazon Simple Storage Service (Amazon S3)
 *       or Amazon Elastic File System (Amazon EFS). </p>
 *          <p>This API interface reference for AWS DataSync contains documentation for a
 *       programming interface that you can use to manage AWS DataSync.</p>
 */
export class DataSyncClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataSyncClientResolvedConfig
> {
  readonly config: DataSyncClientResolvedConfig;

  constructor(configuration: DataSyncClientConfig) {
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
