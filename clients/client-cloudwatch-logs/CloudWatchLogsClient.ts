import {
  AssociateKmsKeyRequest,
  CancelExportTaskRequest,
  CreateExportTaskRequest,
  CreateExportTaskResponse,
  CreateLogGroupRequest,
  CreateLogStreamRequest,
  DeleteDestinationRequest,
  DeleteLogGroupRequest,
  DeleteLogStreamRequest,
  DeleteMetricFilterRequest,
  DeleteResourcePolicyRequest,
  DeleteRetentionPolicyRequest,
  DeleteSubscriptionFilterRequest,
  DescribeDestinationsRequest,
  DescribeDestinationsResponse,
  DescribeExportTasksRequest,
  DescribeExportTasksResponse,
  DescribeLogGroupsRequest,
  DescribeLogGroupsResponse,
  DescribeLogStreamsRequest,
  DescribeLogStreamsResponse,
  DescribeMetricFiltersRequest,
  DescribeMetricFiltersResponse,
  DescribeQueriesRequest,
  DescribeQueriesResponse,
  DescribeResourcePoliciesRequest,
  DescribeResourcePoliciesResponse,
  DescribeSubscriptionFiltersRequest,
  DescribeSubscriptionFiltersResponse,
  DisassociateKmsKeyRequest,
  FilterLogEventsRequest,
  FilterLogEventsResponse,
  GetLogEventsRequest,
  GetLogEventsResponse,
  GetLogGroupFieldsRequest,
  GetLogGroupFieldsResponse,
  GetLogRecordRequest,
  GetLogRecordResponse,
  GetQueryResultsRequest,
  GetQueryResultsResponse,
  ListTagsLogGroupRequest,
  ListTagsLogGroupResponse,
  PutDestinationPolicyRequest,
  PutDestinationRequest,
  PutDestinationResponse,
  PutLogEventsRequest,
  PutLogEventsResponse,
  PutMetricFilterRequest,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutRetentionPolicyRequest,
  PutSubscriptionFilterRequest,
  StartQueryRequest,
  StartQueryResponse,
  StopQueryRequest,
  StopQueryResponse,
  TagLogGroupRequest,
  TestMetricFilterRequest,
  TestMetricFilterResponse,
  UntagLogGroupRequest
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
  | AssociateKmsKeyRequest
  | CancelExportTaskRequest
  | CreateExportTaskRequest
  | CreateLogGroupRequest
  | CreateLogStreamRequest
  | DeleteDestinationRequest
  | DeleteLogGroupRequest
  | DeleteLogStreamRequest
  | DeleteMetricFilterRequest
  | DeleteResourcePolicyRequest
  | DeleteRetentionPolicyRequest
  | DeleteSubscriptionFilterRequest
  | DescribeDestinationsRequest
  | DescribeExportTasksRequest
  | DescribeLogGroupsRequest
  | DescribeLogStreamsRequest
  | DescribeMetricFiltersRequest
  | DescribeQueriesRequest
  | DescribeResourcePoliciesRequest
  | DescribeSubscriptionFiltersRequest
  | DisassociateKmsKeyRequest
  | FilterLogEventsRequest
  | GetLogEventsRequest
  | GetLogGroupFieldsRequest
  | GetLogRecordRequest
  | GetQueryResultsRequest
  | ListTagsLogGroupRequest
  | PutDestinationPolicyRequest
  | PutDestinationRequest
  | PutLogEventsRequest
  | PutMetricFilterRequest
  | PutResourcePolicyRequest
  | PutRetentionPolicyRequest
  | PutSubscriptionFilterRequest
  | StartQueryRequest
  | StopQueryRequest
  | TagLogGroupRequest
  | TestMetricFilterRequest
  | UntagLogGroupRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | CreateExportTaskResponse
  | DescribeDestinationsResponse
  | DescribeExportTasksResponse
  | DescribeLogGroupsResponse
  | DescribeLogStreamsResponse
  | DescribeMetricFiltersResponse
  | DescribeQueriesResponse
  | DescribeResourcePoliciesResponse
  | DescribeSubscriptionFiltersResponse
  | FilterLogEventsResponse
  | GetLogEventsResponse
  | GetLogGroupFieldsResponse
  | GetLogRecordResponse
  | GetQueryResultsResponse
  | ListTagsLogGroupResponse
  | PutDestinationResponse
  | PutLogEventsResponse
  | PutResourcePolicyResponse
  | StartQueryResponse
  | StopQueryResponse
  | TestMetricFilterResponse;

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

export type CloudWatchLogsClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CloudWatchLogsClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *          <p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from
 *       Amazon EC2 instances, AWS CloudTrail, or other sources. You can then retrieve the associated
 *       log data from CloudWatch Logs using the CloudWatch console, CloudWatch Logs commands in the
 *       AWS CLI, CloudWatch Logs API, or CloudWatch Logs SDK.</p>
 *          <p>You can use CloudWatch Logs to:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Monitor logs from EC2 instances in real-time</b>: You
 *           can use CloudWatch Logs to monitor applications and systems using log data. For example,
 *           CloudWatch Logs can track the number of errors that occur in your application logs and
 *           send you a notification whenever the rate of errors exceeds a threshold that you specify.
 *           CloudWatch Logs uses your log data for monitoring; so, no code changes are required. For
 *           example, you can monitor application logs for specific literal terms (such as
 *           "NullReferenceException") or count the number of occurrences of a literal term at a
 *           particular position in log data (such as "404" status codes in an Apache access log). When
 *           the term you are searching for is found, CloudWatch Logs reports the data to a CloudWatch
 *           metric that you specify.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Monitor AWS CloudTrail logged events</b>: You can
 *           create alarms in CloudWatch and receive notifications of particular API activity as
 *           captured by CloudTrail and use the notification to perform troubleshooting.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Archive log data</b>: You can use CloudWatch Logs to
 *           store your log data in highly durable storage. You can change the log retention setting so
 *           that any log events older than this setting are automatically deleted. The CloudWatch Logs
 *           agent makes it easy to quickly send both rotated and non-rotated log data off of a host
 *           and into the log service. You can then access the raw log data when you need it.</p>
 *             </li>
 *          </ul>
 *
 */
export class CloudWatchLogsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudWatchLogsClientResolvedConfig
> {
  readonly config: CloudWatchLogsClientResolvedConfig;

  constructor(configuration: CloudWatchLogsClientConfig) {
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
