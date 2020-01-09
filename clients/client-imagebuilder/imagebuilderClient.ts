import {
  CancelImageCreationRequest,
  CancelImageCreationResponse,
  CreateComponentRequest,
  CreateComponentResponse,
  CreateDistributionConfigurationRequest,
  CreateDistributionConfigurationResponse,
  CreateImagePipelineRequest,
  CreateImagePipelineResponse,
  CreateImageRecipeRequest,
  CreateImageRecipeResponse,
  CreateImageRequest,
  CreateImageResponse,
  CreateInfrastructureConfigurationRequest,
  CreateInfrastructureConfigurationResponse,
  DeleteComponentRequest,
  DeleteComponentResponse,
  DeleteDistributionConfigurationRequest,
  DeleteDistributionConfigurationResponse,
  DeleteImagePipelineRequest,
  DeleteImagePipelineResponse,
  DeleteImageRecipeRequest,
  DeleteImageRecipeResponse,
  DeleteImageRequest,
  DeleteImageResponse,
  DeleteInfrastructureConfigurationRequest,
  DeleteInfrastructureConfigurationResponse,
  GetComponentPolicyRequest,
  GetComponentPolicyResponse,
  GetComponentRequest,
  GetComponentResponse,
  GetDistributionConfigurationRequest,
  GetDistributionConfigurationResponse,
  GetImagePipelineRequest,
  GetImagePipelineResponse,
  GetImagePolicyRequest,
  GetImagePolicyResponse,
  GetImageRecipePolicyRequest,
  GetImageRecipePolicyResponse,
  GetImageRecipeRequest,
  GetImageRecipeResponse,
  GetImageRequest,
  GetImageResponse,
  GetInfrastructureConfigurationRequest,
  GetInfrastructureConfigurationResponse,
  ImportComponentRequest,
  ImportComponentResponse,
  ListComponentBuildVersionsRequest,
  ListComponentBuildVersionsResponse,
  ListComponentsRequest,
  ListComponentsResponse,
  ListDistributionConfigurationsRequest,
  ListDistributionConfigurationsResponse,
  ListImageBuildVersionsRequest,
  ListImageBuildVersionsResponse,
  ListImagePipelineImagesRequest,
  ListImagePipelineImagesResponse,
  ListImagePipelinesRequest,
  ListImagePipelinesResponse,
  ListImageRecipesRequest,
  ListImageRecipesResponse,
  ListImagesRequest,
  ListImagesResponse,
  ListInfrastructureConfigurationsRequest,
  ListInfrastructureConfigurationsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PutComponentPolicyRequest,
  PutComponentPolicyResponse,
  PutImagePolicyRequest,
  PutImagePolicyResponse,
  PutImageRecipePolicyRequest,
  PutImageRecipePolicyResponse,
  StartImagePipelineExecutionRequest,
  StartImagePipelineExecutionResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDistributionConfigurationRequest,
  UpdateDistributionConfigurationResponse,
  UpdateImagePipelineRequest,
  UpdateImagePipelineResponse,
  UpdateInfrastructureConfigurationRequest,
  UpdateInfrastructureConfigurationResponse,
} from "./models/index";
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
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
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
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CancelImageCreationRequest
  | CreateComponentRequest
  | CreateDistributionConfigurationRequest
  | CreateImagePipelineRequest
  | CreateImageRecipeRequest
  | CreateImageRequest
  | CreateInfrastructureConfigurationRequest
  | DeleteComponentRequest
  | DeleteDistributionConfigurationRequest
  | DeleteImagePipelineRequest
  | DeleteImageRecipeRequest
  | DeleteImageRequest
  | DeleteInfrastructureConfigurationRequest
  | GetComponentPolicyRequest
  | GetComponentRequest
  | GetDistributionConfigurationRequest
  | GetImagePipelineRequest
  | GetImagePolicyRequest
  | GetImageRecipePolicyRequest
  | GetImageRecipeRequest
  | GetImageRequest
  | GetInfrastructureConfigurationRequest
  | ImportComponentRequest
  | ListComponentBuildVersionsRequest
  | ListComponentsRequest
  | ListDistributionConfigurationsRequest
  | ListImageBuildVersionsRequest
  | ListImagePipelineImagesRequest
  | ListImagePipelinesRequest
  | ListImageRecipesRequest
  | ListImagesRequest
  | ListInfrastructureConfigurationsRequest
  | ListTagsForResourceRequest
  | PutComponentPolicyRequest
  | PutImagePolicyRequest
  | PutImageRecipePolicyRequest
  | StartImagePipelineExecutionRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateDistributionConfigurationRequest
  | UpdateImagePipelineRequest
  | UpdateInfrastructureConfigurationRequest;

export type ServiceOutputTypes =
  | CancelImageCreationResponse
  | CreateComponentResponse
  | CreateDistributionConfigurationResponse
  | CreateImagePipelineResponse
  | CreateImageRecipeResponse
  | CreateImageResponse
  | CreateInfrastructureConfigurationResponse
  | DeleteComponentResponse
  | DeleteDistributionConfigurationResponse
  | DeleteImagePipelineResponse
  | DeleteImageRecipeResponse
  | DeleteImageResponse
  | DeleteInfrastructureConfigurationResponse
  | GetComponentPolicyResponse
  | GetComponentResponse
  | GetDistributionConfigurationResponse
  | GetImagePipelineResponse
  | GetImagePolicyResponse
  | GetImageRecipePolicyResponse
  | GetImageRecipeResponse
  | GetImageResponse
  | GetInfrastructureConfigurationResponse
  | ImportComponentResponse
  | ListComponentBuildVersionsResponse
  | ListComponentsResponse
  | ListDistributionConfigurationsResponse
  | ListImageBuildVersionsResponse
  | ListImagePipelineImagesResponse
  | ListImagePipelinesResponse
  | ListImageRecipesResponse
  | ListImagesResponse
  | ListInfrastructureConfigurationsResponse
  | ListTagsForResourceResponse
  | PutComponentPolicyResponse
  | PutImagePolicyResponse
  | PutImageRecipePolicyResponse
  | StartImagePipelineExecutionResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateDistributionConfigurationResponse
  | UpdateImagePipelineResponse
  | UpdateInfrastructureConfigurationResponse;

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

export type imagebuilderClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type imagebuilderClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 *          <p> Amazon Elastic Compute Cloud Image Builder provides a one-stop-shop to automate the image management processes. You configure an automated pipeline that
 *     creates images for use on AWS. As software updates become available, Image Builder automatically produces a new image
 *     based on a customizable schedule and distributes it to stipulated AWS Regions after running tests on it. With the Image Builder, organizations
 *     can capture their internal or industry-specific compliance policies as a vetted template that can be consistently applied to every new image.
 *     Built-in integration with AWS Organizations provides customers with a centralized way to enforce image distribution and access
 *     policies across their AWS accounts and Regions. Image Builder supports multiple image format AMIs on AWS.</p>
 *
 */
export class imagebuilderClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  imagebuilderClientResolvedConfig
> {
  readonly config: imagebuilderClientResolvedConfig;

  constructor(configuration: imagebuilderClientConfig) {
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

  destroy(): void {
  }
}
