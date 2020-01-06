import {
  AddLayerVersionPermissionRequest,
  AddLayerVersionPermissionResponse,
  AddPermissionRequest,
  AddPermissionResponse,
  AliasConfiguration,
  Concurrency,
  CreateAliasRequest,
  CreateEventSourceMappingRequest,
  CreateFunctionRequest,
  DeleteAliasRequest,
  DeleteEventSourceMappingRequest,
  DeleteFunctionConcurrencyRequest,
  DeleteFunctionEventInvokeConfigRequest,
  DeleteFunctionRequest,
  DeleteLayerVersionRequest,
  DeleteProvisionedConcurrencyConfigRequest,
  EventSourceMappingConfiguration,
  FunctionConfiguration,
  FunctionEventInvokeConfig,
  GetAccountSettingsRequest,
  GetAccountSettingsResponse,
  GetAliasRequest,
  GetEventSourceMappingRequest,
  GetFunctionConcurrencyRequest,
  GetFunctionConcurrencyResponse,
  GetFunctionConfigurationRequest,
  GetFunctionEventInvokeConfigRequest,
  GetFunctionRequest,
  GetFunctionResponse,
  GetLayerVersionByArnRequest,
  GetLayerVersionPolicyRequest,
  GetLayerVersionPolicyResponse,
  GetLayerVersionRequest,
  GetLayerVersionResponse,
  GetPolicyRequest,
  GetPolicyResponse,
  GetProvisionedConcurrencyConfigRequest,
  GetProvisionedConcurrencyConfigResponse,
  InvocationRequest,
  InvocationResponse,
  InvokeAsyncRequest,
  InvokeAsyncResponse,
  ListAliasesRequest,
  ListAliasesResponse,
  ListEventSourceMappingsRequest,
  ListEventSourceMappingsResponse,
  ListFunctionEventInvokeConfigsRequest,
  ListFunctionEventInvokeConfigsResponse,
  ListFunctionsRequest,
  ListFunctionsResponse,
  ListLayerVersionsRequest,
  ListLayerVersionsResponse,
  ListLayersRequest,
  ListLayersResponse,
  ListProvisionedConcurrencyConfigsRequest,
  ListProvisionedConcurrencyConfigsResponse,
  ListTagsRequest,
  ListTagsResponse,
  ListVersionsByFunctionRequest,
  ListVersionsByFunctionResponse,
  PublishLayerVersionRequest,
  PublishLayerVersionResponse,
  PublishVersionRequest,
  PutFunctionConcurrencyRequest,
  PutFunctionEventInvokeConfigRequest,
  PutProvisionedConcurrencyConfigRequest,
  PutProvisionedConcurrencyConfigResponse,
  RemoveLayerVersionPermissionRequest,
  RemovePermissionRequest,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateAliasRequest,
  UpdateEventSourceMappingRequest,
  UpdateFunctionCodeRequest,
  UpdateFunctionConfigurationRequest,
  UpdateFunctionEventInvokeConfigRequest
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
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddLayerVersionPermissionRequest
  | AddPermissionRequest
  | CreateAliasRequest
  | CreateEventSourceMappingRequest
  | CreateFunctionRequest
  | DeleteAliasRequest
  | DeleteEventSourceMappingRequest
  | DeleteFunctionConcurrencyRequest
  | DeleteFunctionEventInvokeConfigRequest
  | DeleteFunctionRequest
  | DeleteLayerVersionRequest
  | DeleteProvisionedConcurrencyConfigRequest
  | GetAccountSettingsRequest
  | GetAliasRequest
  | GetEventSourceMappingRequest
  | GetFunctionConcurrencyRequest
  | GetFunctionConfigurationRequest
  | GetFunctionEventInvokeConfigRequest
  | GetFunctionRequest
  | GetLayerVersionByArnRequest
  | GetLayerVersionPolicyRequest
  | GetLayerVersionRequest
  | GetPolicyRequest
  | GetProvisionedConcurrencyConfigRequest
  | InvocationRequest
  | InvokeAsyncRequest
  | ListAliasesRequest
  | ListEventSourceMappingsRequest
  | ListFunctionEventInvokeConfigsRequest
  | ListFunctionsRequest
  | ListLayerVersionsRequest
  | ListLayersRequest
  | ListProvisionedConcurrencyConfigsRequest
  | ListTagsRequest
  | ListVersionsByFunctionRequest
  | PublishLayerVersionRequest
  | PublishVersionRequest
  | PutFunctionConcurrencyRequest
  | PutFunctionEventInvokeConfigRequest
  | PutProvisionedConcurrencyConfigRequest
  | RemoveLayerVersionPermissionRequest
  | RemovePermissionRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateAliasRequest
  | UpdateEventSourceMappingRequest
  | UpdateFunctionCodeRequest
  | UpdateFunctionConfigurationRequest
  | UpdateFunctionEventInvokeConfigRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AddLayerVersionPermissionResponse
  | AddPermissionResponse
  | AliasConfiguration
  | AliasConfiguration
  | AliasConfiguration
  | Concurrency
  | EventSourceMappingConfiguration
  | EventSourceMappingConfiguration
  | EventSourceMappingConfiguration
  | EventSourceMappingConfiguration
  | FunctionConfiguration
  | FunctionConfiguration
  | FunctionConfiguration
  | FunctionConfiguration
  | FunctionConfiguration
  | FunctionEventInvokeConfig
  | FunctionEventInvokeConfig
  | FunctionEventInvokeConfig
  | GetAccountSettingsResponse
  | GetFunctionConcurrencyResponse
  | GetFunctionResponse
  | GetLayerVersionPolicyResponse
  | GetLayerVersionResponse
  | GetLayerVersionResponse
  | GetPolicyResponse
  | GetProvisionedConcurrencyConfigResponse
  | InvocationResponse
  | InvokeAsyncResponse
  | ListAliasesResponse
  | ListEventSourceMappingsResponse
  | ListFunctionEventInvokeConfigsResponse
  | ListFunctionsResponse
  | ListLayerVersionsResponse
  | ListLayersResponse
  | ListProvisionedConcurrencyConfigsResponse
  | ListTagsResponse
  | ListVersionsByFunctionResponse
  | PublishLayerVersionResponse
  | PutProvisionedConcurrencyConfigResponse;

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

export type LambdaClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type LambdaClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *
 *          <fullname>AWS Lambda</fullname>
 *          <p>
 *             <b>Overview</b>
 *          </p>
 *          <p>This is the <i>AWS Lambda API Reference</i>. The AWS Lambda Developer Guide provides additional
 *       information. For the service overview, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is
 *         AWS Lambda</a>, and for information about how the service works, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html">AWS Lambda: How it Works</a> in the <b>AWS Lambda Developer Guide</b>.</p>
 *
 */
export class LambdaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LambdaClientResolvedConfig
> {
  readonly config: LambdaClientResolvedConfig;

  constructor(configuration: LambdaClientConfig) {
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
