import {
  ActivateEventSourceRequest,
  CreateEventBusRequest,
  CreateEventBusResponse,
  CreatePartnerEventSourceRequest,
  CreatePartnerEventSourceResponse,
  DeactivateEventSourceRequest,
  DeleteEventBusRequest,
  DeletePartnerEventSourceRequest,
  DeleteRuleRequest,
  DescribeEventBusRequest,
  DescribeEventBusResponse,
  DescribeEventSourceRequest,
  DescribeEventSourceResponse,
  DescribePartnerEventSourceRequest,
  DescribePartnerEventSourceResponse,
  DescribeRuleRequest,
  DescribeRuleResponse,
  DisableRuleRequest,
  EnableRuleRequest,
  ListEventBusesRequest,
  ListEventBusesResponse,
  ListEventSourcesRequest,
  ListEventSourcesResponse,
  ListPartnerEventSourceAccountsRequest,
  ListPartnerEventSourceAccountsResponse,
  ListPartnerEventSourcesRequest,
  ListPartnerEventSourcesResponse,
  ListRuleNamesByTargetRequest,
  ListRuleNamesByTargetResponse,
  ListRulesRequest,
  ListRulesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTargetsByRuleRequest,
  ListTargetsByRuleResponse,
  PutEventsRequest,
  PutEventsResponse,
  PutPartnerEventsRequest,
  PutPartnerEventsResponse,
  PutPermissionRequest,
  PutRuleRequest,
  PutRuleResponse,
  PutTargetsRequest,
  PutTargetsResponse,
  RemovePermissionRequest,
  RemoveTargetsRequest,
  RemoveTargetsResponse,
  TagResourceRequest,
  TagResourceResponse,
  TestEventPatternRequest,
  TestEventPatternResponse,
  UntagResourceRequest,
  UntagResourceResponse
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
  | ActivateEventSourceRequest
  | CreateEventBusRequest
  | CreatePartnerEventSourceRequest
  | DeactivateEventSourceRequest
  | DeleteEventBusRequest
  | DeletePartnerEventSourceRequest
  | DeleteRuleRequest
  | DescribeEventBusRequest
  | DescribeEventSourceRequest
  | DescribePartnerEventSourceRequest
  | DescribeRuleRequest
  | DisableRuleRequest
  | EnableRuleRequest
  | ListEventBusesRequest
  | ListEventSourcesRequest
  | ListPartnerEventSourceAccountsRequest
  | ListPartnerEventSourcesRequest
  | ListRuleNamesByTargetRequest
  | ListRulesRequest
  | ListTagsForResourceRequest
  | ListTargetsByRuleRequest
  | PutEventsRequest
  | PutPartnerEventsRequest
  | PutPermissionRequest
  | PutRuleRequest
  | PutTargetsRequest
  | RemovePermissionRequest
  | RemoveTargetsRequest
  | TagResourceRequest
  | TestEventPatternRequest
  | UntagResourceRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | CreateEventBusResponse
  | CreatePartnerEventSourceResponse
  | DescribeEventBusResponse
  | DescribeEventSourceResponse
  | DescribePartnerEventSourceResponse
  | DescribeRuleResponse
  | ListEventBusesResponse
  | ListEventSourcesResponse
  | ListPartnerEventSourceAccountsResponse
  | ListPartnerEventSourcesResponse
  | ListRuleNamesByTargetResponse
  | ListRulesResponse
  | ListTagsForResourceResponse
  | ListTargetsByRuleResponse
  | PutEventsResponse
  | PutPartnerEventsResponse
  | PutRuleResponse
  | PutTargetsResponse
  | RemoveTargetsResponse
  | TagResourceResponse
  | TestEventPatternResponse
  | UntagResourceResponse;

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

export type CloudWatchEventsClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CloudWatchEventsClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *         <p>Amazon EventBridge helps you to respond to state changes in your AWS
 *             resources. When your resources change state, they automatically send events into an
 *             event stream. You can create rules that match selected events in the stream and route
 *             them to targets to take action. You can also use rules to take action on a predetermined
 *             schedule. For example, you can configure rules to:</p>
 *         <ul>
 *             <li>
 *                <p>Automatically invoke an AWS Lambda function to update DNS entries when an event notifies
 *                     you that Amazon EC2 instance enters the running state</p>
 *             </li>
 *             <li>
 *                <p>Direct specific API records from AWS CloudTrail to an Amazon Kinesis data stream for
 *                     detailed analysis of potential security or availability risks</p>
 *             </li>
 *             <li>
 *                <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS
 *                     volume</p>
 *             </li>
 *          </ul>
 *         <p>For more information about the features of Amazon EventBridge, see the
 *             <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/">Amazon EventBridge User Guide</a>.</p>
 *
 */
export class CloudWatchEventsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudWatchEventsClientResolvedConfig
> {
  readonly config: CloudWatchEventsClientResolvedConfig;

  constructor(configuration: CloudWatchEventsClientConfig) {
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
