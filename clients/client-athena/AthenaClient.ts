import { BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput } from "./commands/BatchGetNamedQueryCommand";
import {
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
} from "./commands/BatchGetQueryExecutionCommand";
import { CreateDataCatalogCommandInput, CreateDataCatalogCommandOutput } from "./commands/CreateDataCatalogCommand";
import { CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput } from "./commands/CreateNamedQueryCommand";
import { CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput } from "./commands/CreateWorkGroupCommand";
import { DeleteDataCatalogCommandInput, DeleteDataCatalogCommandOutput } from "./commands/DeleteDataCatalogCommand";
import { DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput } from "./commands/DeleteNamedQueryCommand";
import { DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput } from "./commands/DeleteWorkGroupCommand";
import { GetDataCatalogCommandInput, GetDataCatalogCommandOutput } from "./commands/GetDataCatalogCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import { GetNamedQueryCommandInput, GetNamedQueryCommandOutput } from "./commands/GetNamedQueryCommand";
import { GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput } from "./commands/GetQueryExecutionCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import { GetTableMetadataCommandInput, GetTableMetadataCommandOutput } from "./commands/GetTableMetadataCommand";
import { GetWorkGroupCommandInput, GetWorkGroupCommandOutput } from "./commands/GetWorkGroupCommand";
import { ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput } from "./commands/ListDataCatalogsCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "./commands/ListDatabasesCommand";
import { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput } from "./commands/ListNamedQueriesCommand";
import {
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "./commands/ListQueryExecutionsCommand";
import { ListTableMetadataCommandInput, ListTableMetadataCommandOutput } from "./commands/ListTableMetadataCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput } from "./commands/ListWorkGroupsCommand";
import {
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
} from "./commands/StartQueryExecutionCommand";
import { StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput } from "./commands/StopQueryExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDataCatalogCommandInput, UpdateDataCatalogCommandOutput } from "./commands/UpdateDataCatalogCommand";
import { UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput } from "./commands/UpdateWorkGroupCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchGetNamedQueryCommandInput
  | BatchGetQueryExecutionCommandInput
  | CreateDataCatalogCommandInput
  | CreateNamedQueryCommandInput
  | CreateWorkGroupCommandInput
  | DeleteDataCatalogCommandInput
  | DeleteNamedQueryCommandInput
  | DeleteWorkGroupCommandInput
  | GetDataCatalogCommandInput
  | GetDatabaseCommandInput
  | GetNamedQueryCommandInput
  | GetQueryExecutionCommandInput
  | GetQueryResultsCommandInput
  | GetTableMetadataCommandInput
  | GetWorkGroupCommandInput
  | ListDataCatalogsCommandInput
  | ListDatabasesCommandInput
  | ListNamedQueriesCommandInput
  | ListQueryExecutionsCommandInput
  | ListTableMetadataCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkGroupsCommandInput
  | StartQueryExecutionCommandInput
  | StopQueryExecutionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDataCatalogCommandInput
  | UpdateWorkGroupCommandInput;

export type ServiceOutputTypes =
  | BatchGetNamedQueryCommandOutput
  | BatchGetQueryExecutionCommandOutput
  | CreateDataCatalogCommandOutput
  | CreateNamedQueryCommandOutput
  | CreateWorkGroupCommandOutput
  | DeleteDataCatalogCommandOutput
  | DeleteNamedQueryCommandOutput
  | DeleteWorkGroupCommandOutput
  | GetDataCatalogCommandOutput
  | GetDatabaseCommandOutput
  | GetNamedQueryCommandOutput
  | GetQueryExecutionCommandOutput
  | GetQueryResultsCommandOutput
  | GetTableMetadataCommandOutput
  | GetWorkGroupCommandOutput
  | ListDataCatalogsCommandOutput
  | ListDatabasesCommandOutput
  | ListNamedQueriesCommandOutput
  | ListQueryExecutionsCommandOutput
  | ListTableMetadataCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkGroupsCommandOutput
  | StartQueryExecutionCommandOutput
  | StopQueryExecutionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDataCatalogCommandOutput
  | UpdateWorkGroupCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Default credentials provider; Not available in browser runtime.
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

export type AthenaClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type AthenaClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL to
 *             analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and
 *             run ad-hoc queries and get results in seconds. Athena is serverless, so there is no
 *             infrastructure to set up or manage. You pay only for the queries you run. Athena scales
 *             automatically—executing queries in parallel—so results are fast, even with large
 *             datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon
 *                 Athena</a> in the <i>Amazon Athena User Guide</i>.</p>
 *         <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or
 *             later with the Amazon Athena API. Earlier version drivers do not support the API. For
 *             more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing
 *                 Amazon Athena with JDBC</a>.</p>
 *         <p>For code samples using the AWS SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 */
export class AthenaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AthenaClientResolvedConfig
> {
  readonly config: AthenaClientResolvedConfig;

  constructor(configuration: AthenaClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
