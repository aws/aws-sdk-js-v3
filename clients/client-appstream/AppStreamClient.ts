import {
  AssociateFleetRequest,
  AssociateFleetResult,
  BatchAssociateUserStackRequest,
  BatchAssociateUserStackResult,
  BatchDisassociateUserStackRequest,
  BatchDisassociateUserStackResult,
  CopyImageRequest,
  CopyImageResponse,
  CreateDirectoryConfigRequest,
  CreateDirectoryConfigResult,
  CreateFleetRequest,
  CreateFleetResult,
  CreateImageBuilderRequest,
  CreateImageBuilderResult,
  CreateImageBuilderStreamingURLRequest,
  CreateImageBuilderStreamingURLResult,
  CreateStackRequest,
  CreateStackResult,
  CreateStreamingURLRequest,
  CreateStreamingURLResult,
  CreateUsageReportSubscriptionRequest,
  CreateUsageReportSubscriptionResult,
  CreateUserRequest,
  CreateUserResult,
  DeleteDirectoryConfigRequest,
  DeleteDirectoryConfigResult,
  DeleteFleetRequest,
  DeleteFleetResult,
  DeleteImageBuilderRequest,
  DeleteImageBuilderResult,
  DeleteImagePermissionsRequest,
  DeleteImagePermissionsResult,
  DeleteImageRequest,
  DeleteImageResult,
  DeleteStackRequest,
  DeleteStackResult,
  DeleteUsageReportSubscriptionRequest,
  DeleteUsageReportSubscriptionResult,
  DeleteUserRequest,
  DeleteUserResult,
  DescribeDirectoryConfigsRequest,
  DescribeDirectoryConfigsResult,
  DescribeFleetsRequest,
  DescribeFleetsResult,
  DescribeImageBuildersRequest,
  DescribeImageBuildersResult,
  DescribeImagePermissionsRequest,
  DescribeImagePermissionsResult,
  DescribeImagesRequest,
  DescribeImagesResult,
  DescribeSessionsRequest,
  DescribeSessionsResult,
  DescribeStacksRequest,
  DescribeStacksResult,
  DescribeUsageReportSubscriptionsRequest,
  DescribeUsageReportSubscriptionsResult,
  DescribeUserStackAssociationsRequest,
  DescribeUserStackAssociationsResult,
  DescribeUsersRequest,
  DescribeUsersResult,
  DisableUserRequest,
  DisableUserResult,
  DisassociateFleetRequest,
  DisassociateFleetResult,
  EnableUserRequest,
  EnableUserResult,
  ExpireSessionRequest,
  ExpireSessionResult,
  ListAssociatedFleetsRequest,
  ListAssociatedFleetsResult,
  ListAssociatedStacksRequest,
  ListAssociatedStacksResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  StartFleetRequest,
  StartFleetResult,
  StartImageBuilderRequest,
  StartImageBuilderResult,
  StopFleetRequest,
  StopFleetResult,
  StopImageBuilderRequest,
  StopImageBuilderResult,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDirectoryConfigRequest,
  UpdateDirectoryConfigResult,
  UpdateFleetRequest,
  UpdateFleetResult,
  UpdateImagePermissionsRequest,
  UpdateImagePermissionsResult,
  UpdateStackRequest,
  UpdateStackResult
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
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateFleetRequest
  | BatchAssociateUserStackRequest
  | BatchDisassociateUserStackRequest
  | CopyImageRequest
  | CreateDirectoryConfigRequest
  | CreateFleetRequest
  | CreateImageBuilderRequest
  | CreateImageBuilderStreamingURLRequest
  | CreateStackRequest
  | CreateStreamingURLRequest
  | CreateUsageReportSubscriptionRequest
  | CreateUserRequest
  | DeleteDirectoryConfigRequest
  | DeleteFleetRequest
  | DeleteImageBuilderRequest
  | DeleteImagePermissionsRequest
  | DeleteImageRequest
  | DeleteStackRequest
  | DeleteUsageReportSubscriptionRequest
  | DeleteUserRequest
  | DescribeDirectoryConfigsRequest
  | DescribeFleetsRequest
  | DescribeImageBuildersRequest
  | DescribeImagePermissionsRequest
  | DescribeImagesRequest
  | DescribeSessionsRequest
  | DescribeStacksRequest
  | DescribeUsageReportSubscriptionsRequest
  | DescribeUserStackAssociationsRequest
  | DescribeUsersRequest
  | DisableUserRequest
  | DisassociateFleetRequest
  | EnableUserRequest
  | ExpireSessionRequest
  | ListAssociatedFleetsRequest
  | ListAssociatedStacksRequest
  | ListTagsForResourceRequest
  | StartFleetRequest
  | StartImageBuilderRequest
  | StopFleetRequest
  | StopImageBuilderRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateDirectoryConfigRequest
  | UpdateFleetRequest
  | UpdateImagePermissionsRequest
  | UpdateStackRequest;

export type ServiceOutputTypes =
  | AssociateFleetResult
  | BatchAssociateUserStackResult
  | BatchDisassociateUserStackResult
  | CopyImageResponse
  | CreateDirectoryConfigResult
  | CreateFleetResult
  | CreateImageBuilderResult
  | CreateImageBuilderStreamingURLResult
  | CreateStackResult
  | CreateStreamingURLResult
  | CreateUsageReportSubscriptionResult
  | CreateUserResult
  | DeleteDirectoryConfigResult
  | DeleteFleetResult
  | DeleteImageBuilderResult
  | DeleteImagePermissionsResult
  | DeleteImageResult
  | DeleteStackResult
  | DeleteUsageReportSubscriptionResult
  | DeleteUserResult
  | DescribeDirectoryConfigsResult
  | DescribeFleetsResult
  | DescribeImageBuildersResult
  | DescribeImagePermissionsResult
  | DescribeImagesResult
  | DescribeSessionsResult
  | DescribeStacksResult
  | DescribeUsageReportSubscriptionsResult
  | DescribeUserStackAssociationsResult
  | DescribeUsersResult
  | DisableUserResult
  | DisassociateFleetResult
  | EnableUserResult
  | ExpireSessionResult
  | ListAssociatedFleetsResult
  | ListAssociatedStacksResult
  | ListTagsForResourceResponse
  | StartFleetResult
  | StartImageBuilderResult
  | StopFleetResult
  | StopImageBuilderResult
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateDirectoryConfigResult
  | UpdateFleetResult
  | UpdateImagePermissionsResult
  | UpdateStackResult;

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

export type AppStreamClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type AppStreamClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *         <fullname>Amazon AppStream 2.0</fullname>
 *         <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p>
 *
 *         <note>
 *             <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 *          </note>
 *
 *         <p>To learn more about AppStream 2.0, see the following resources:</p>
 *
 *             <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 *
 */
export class AppStreamClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppStreamClientResolvedConfig
> {
  readonly config: AppStreamClientResolvedConfig;

  constructor(configuration: AppStreamClientConfig) {
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
