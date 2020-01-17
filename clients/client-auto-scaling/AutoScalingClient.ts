import {
  ActivitiesType,
  ActivityType,
  AttachInstancesQuery,
  AttachLoadBalancerTargetGroupsResultType,
  AttachLoadBalancerTargetGroupsType,
  AttachLoadBalancersResultType,
  AttachLoadBalancersType,
  AutoScalingGroupNamesType,
  AutoScalingGroupsType,
  AutoScalingInstancesType,
  BatchDeleteScheduledActionAnswer,
  BatchDeleteScheduledActionType,
  BatchPutScheduledUpdateGroupActionAnswer,
  BatchPutScheduledUpdateGroupActionType,
  CompleteLifecycleActionAnswer,
  CompleteLifecycleActionType,
  CreateAutoScalingGroupType,
  CreateLaunchConfigurationType,
  CreateOrUpdateTagsType,
  DeleteAutoScalingGroupType,
  DeleteLifecycleHookAnswer,
  DeleteLifecycleHookType,
  DeleteNotificationConfigurationType,
  DeletePolicyType,
  DeleteScheduledActionType,
  DeleteTagsType,
  DescribeAccountLimitsAnswer,
  DescribeAdjustmentTypesAnswer,
  DescribeAutoScalingInstancesType,
  DescribeAutoScalingNotificationTypesAnswer,
  DescribeLifecycleHookTypesAnswer,
  DescribeLifecycleHooksAnswer,
  DescribeLifecycleHooksType,
  DescribeLoadBalancerTargetGroupsRequest,
  DescribeLoadBalancerTargetGroupsResponse,
  DescribeLoadBalancersRequest,
  DescribeLoadBalancersResponse,
  DescribeMetricCollectionTypesAnswer,
  DescribeNotificationConfigurationsAnswer,
  DescribeNotificationConfigurationsType,
  DescribePoliciesType,
  DescribeScalingActivitiesType,
  DescribeScheduledActionsType,
  DescribeTagsType,
  DescribeTerminationPolicyTypesAnswer,
  DetachInstancesAnswer,
  DetachInstancesQuery,
  DetachLoadBalancerTargetGroupsResultType,
  DetachLoadBalancerTargetGroupsType,
  DetachLoadBalancersResultType,
  DetachLoadBalancersType,
  DisableMetricsCollectionQuery,
  EnableMetricsCollectionQuery,
  EnterStandbyAnswer,
  EnterStandbyQuery,
  ExecutePolicyType,
  ExitStandbyAnswer,
  ExitStandbyQuery,
  LaunchConfigurationNameType,
  LaunchConfigurationNamesType,
  LaunchConfigurationsType,
  PoliciesType,
  PolicyARNType,
  ProcessesType,
  PutLifecycleHookAnswer,
  PutLifecycleHookType,
  PutNotificationConfigurationType,
  PutScalingPolicyType,
  PutScheduledUpdateGroupActionType,
  RecordLifecycleActionHeartbeatAnswer,
  RecordLifecycleActionHeartbeatType,
  ScalingProcessQuery,
  ScheduledActionsType,
  SetDesiredCapacityType,
  SetInstanceHealthQuery,
  SetInstanceProtectionAnswer,
  SetInstanceProtectionQuery,
  TagsType,
  TerminateInstanceInAutoScalingGroupType,
  UpdateAutoScalingGroupType
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
  | {}
  | AttachInstancesQuery
  | AttachLoadBalancerTargetGroupsType
  | AttachLoadBalancersType
  | AutoScalingGroupNamesType
  | BatchDeleteScheduledActionType
  | BatchPutScheduledUpdateGroupActionType
  | CompleteLifecycleActionType
  | CreateAutoScalingGroupType
  | CreateLaunchConfigurationType
  | CreateOrUpdateTagsType
  | DeleteAutoScalingGroupType
  | DeleteLifecycleHookType
  | DeleteNotificationConfigurationType
  | DeletePolicyType
  | DeleteScheduledActionType
  | DeleteTagsType
  | DescribeAutoScalingInstancesType
  | DescribeLifecycleHooksType
  | DescribeLoadBalancerTargetGroupsRequest
  | DescribeLoadBalancersRequest
  | DescribeNotificationConfigurationsType
  | DescribePoliciesType
  | DescribeScalingActivitiesType
  | DescribeScheduledActionsType
  | DescribeTagsType
  | DetachInstancesQuery
  | DetachLoadBalancerTargetGroupsType
  | DetachLoadBalancersType
  | DisableMetricsCollectionQuery
  | EnableMetricsCollectionQuery
  | EnterStandbyQuery
  | ExecutePolicyType
  | ExitStandbyQuery
  | LaunchConfigurationNameType
  | LaunchConfigurationNamesType
  | PutLifecycleHookType
  | PutNotificationConfigurationType
  | PutScalingPolicyType
  | PutScheduledUpdateGroupActionType
  | RecordLifecycleActionHeartbeatType
  | ScalingProcessQuery
  | ScalingProcessQuery
  | SetDesiredCapacityType
  | SetInstanceHealthQuery
  | SetInstanceProtectionQuery
  | TerminateInstanceInAutoScalingGroupType
  | UpdateAutoScalingGroupType;

export type ServiceOutputTypes =
  | __MetadataBearer
  | ActivitiesType
  | ActivityType
  | AttachLoadBalancerTargetGroupsResultType
  | AttachLoadBalancersResultType
  | AutoScalingGroupsType
  | AutoScalingInstancesType
  | BatchDeleteScheduledActionAnswer
  | BatchPutScheduledUpdateGroupActionAnswer
  | CompleteLifecycleActionAnswer
  | DeleteLifecycleHookAnswer
  | DescribeAccountLimitsAnswer
  | DescribeAdjustmentTypesAnswer
  | DescribeAutoScalingNotificationTypesAnswer
  | DescribeLifecycleHookTypesAnswer
  | DescribeLifecycleHooksAnswer
  | DescribeLoadBalancerTargetGroupsResponse
  | DescribeLoadBalancersResponse
  | DescribeMetricCollectionTypesAnswer
  | DescribeNotificationConfigurationsAnswer
  | DescribeTerminationPolicyTypesAnswer
  | DetachInstancesAnswer
  | DetachLoadBalancerTargetGroupsResultType
  | DetachLoadBalancersResultType
  | EnterStandbyAnswer
  | ExitStandbyAnswer
  | LaunchConfigurationsType
  | PoliciesType
  | PolicyARNType
  | ProcessesType
  | PutLifecycleHookAnswer
  | RecordLifecycleActionHeartbeatAnswer
  | ScheduledActionsType
  | SetInstanceProtectionAnswer
  | TagsType;

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

export type AutoScalingClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type AutoScalingClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *         <fullname>Amazon EC2 Auto Scaling</fullname>
 *
 *         <p>Amazon EC2 Auto Scaling is designed to automatically launch or terminate EC2 instances based on
 *             user-defined scaling policies, scheduled actions, and health checks. Use this service
 *             with AWS Auto Scaling, Amazon CloudWatch, and Elastic Load Balancing.</p>
 *         <p>For more information, including information about granting IAM users required
 *             permissions for Amazon EC2 Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">Amazon EC2 Auto Scaling User Guide</a>.</p>
 *
 */
export class AutoScalingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AutoScalingClientResolvedConfig
> {
  readonly config: AutoScalingClientResolvedConfig;

  constructor(configuration: AutoScalingClientConfig) {
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
