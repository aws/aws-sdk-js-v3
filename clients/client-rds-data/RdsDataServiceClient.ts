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
import { RDSRuntimeConfiguration } from "./runtimeConfig";
import {
  Credentials,
  Provider,
  HashConstructor,
  UrlParser,
  StreamCollector,
  Decoder,
  Encoder
} from "@aws-sdk/types";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  resolveEndpointsConfig,
  destroyRequestHandlerConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  resolveUserAgentConfig,
  getUserAgentPlugin
} from "@aws-sdk/middleware-user-agent";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  resolveRetryConfig,
  getRetryPlugin
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  resolveAwsAuthConfig,
  getAwsAuthPlugin
} from "@aws-sdk/middleware-signing";
import { HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as SmithyClient,
  SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

export type ServiceInputTypes =
  | RollbackTransactionRequest
  | CommitTransactionRequest
  | ExecuteSqlRequest
  | BeginTransactionRequest
  | ExecuteStatementRequest
  | BatchExecuteStatementRequest;

export type ServiceOutputTypes =
  | RollbackTransactionResponse
  | CommitTransactionResponse
  | ExecuteSqlResponse
  | BeginTransactionResponse
  | ExecuteStatementResponse
  | BatchExecuteStatementResponse;

export interface RDSDataRuntimeDependencies {
  /**
   * The function that will be used to populate serializing protocol
   */
  protocol: string;

  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs
   */
  requestHandler?: HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface that computes the SHA-256 HMAC or checksum of a string or binary buffer
   */
  sha256?: HashConstructor;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => Provider<Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => Provider<string>;

  /**
   * The function that will be used to convert strings into HTTP endpoints
   */
  urlParser?: UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: Encoder;

  /**
   * The function that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * The service name with which to construct endpoints.
   */
  service?: string;
}

export type RdsDataServiceConfig = RDSDataRuntimeDependencies &
  AwsAuthInputConfig &
  RegionInputConfig &
  RetryInputConfig &
  EndpointsInputConfig &
  UserAgentInputConfig;

export type RdsDataServiceResolvedConfig = SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<RDSDataRuntimeDependencies> &
  AwsAuthResolvedConfig &
  RegionResolvedConfig &
  RetryResolvedConfig &
  EndpointsResolvedConfig &
  UserAgentResolvedConfig;

export class RdsDataService extends SmithyClient<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RdsDataServiceResolvedConfig
> {
  readonly config: RdsDataServiceResolvedConfig;

  constructor(configuration: RdsDataServiceConfig) {
    const _config_0 = {
      ...RDSRuntimeConfiguration,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveAwsAuthConfig(_config_1);
    let _config_3 = resolveEndpointsConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    super(_config_5);
    this.config = _config_5;
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  destroy(): void {
    destroyRequestHandlerConfig(this.config);
  }
}
