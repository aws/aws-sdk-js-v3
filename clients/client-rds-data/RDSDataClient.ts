import {
  BatchExecuteStatementRequest,
  BatchExecuteStatementResponse,
  BeginTransactionRequest,
  BeginTransactionResponse,
  CommitTransactionRequest,
  CommitTransactionResponse,
  ExecuteSqlRequest,
  ExecuteSqlResponse,
  ExecuteStatementRequest,
  ExecuteStatementResponse,
  RollbackTransactionRequest,
  RollbackTransactionResponse
} from "./models/index";
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
  | BatchExecuteStatementRequest
  | BeginTransactionRequest
  | CommitTransactionRequest
  | ExecuteSqlRequest
  | ExecuteStatementRequest
  | RollbackTransactionRequest;

export type ServiceOutputTypes =
  | BatchExecuteStatementResponse
  | BeginTransactionResponse
  | CommitTransactionResponse
  | ExecuteSqlResponse
  | ExecuteStatementResponse
  | RollbackTransactionResponse;

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
   * The function that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

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
}

export type RDSDataClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  AwsAuthInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  UserAgentInputConfig;

export type RDSDataClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  AwsAuthResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <fullname>Amazon RDS Data Service</fullname>
 *         <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora
 *             Serverless DB cluster. To run these statements, you work with the Data Service
 *             API.</p>
 *         <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora
 *                 Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *         <note>
 *             <p>If you have questions or comments related to the Data API, send email to
 *                 <a href="mailto:Rds-data-api-feedback@amazon.com">Rds-data-api-feedback@amazon.com</a>.</p>
 *         </note>
 */
export class RDSDataClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RDSDataClientResolvedConfig
> {
  readonly config: RDSDataClientResolvedConfig;

  constructor(configuration: RDSDataClientConfig) {
    let _config_0 = {
      service: "rds-data", //TODO: remove this
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveAwsAuthConfig(_config_1);
    let _config_3 = resolveEndpointsConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    super(_config_5);
    this.config = _config_5;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
  }

  destroy(): void {}
}
