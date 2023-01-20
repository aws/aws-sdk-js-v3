// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AttachInstancesCommandInput, AttachInstancesCommandOutput } from "./commands/AttachInstancesCommand";
import {
  AttachLoadBalancersCommandInput,
  AttachLoadBalancersCommandOutput,
} from "./commands/AttachLoadBalancersCommand";
import {
  AttachLoadBalancerTargetGroupsCommandInput,
  AttachLoadBalancerTargetGroupsCommandOutput,
} from "./commands/AttachLoadBalancerTargetGroupsCommand";
import {
  AttachTrafficSourcesCommandInput,
  AttachTrafficSourcesCommandOutput,
} from "./commands/AttachTrafficSourcesCommand";
import {
  BatchDeleteScheduledActionCommandInput,
  BatchDeleteScheduledActionCommandOutput,
} from "./commands/BatchDeleteScheduledActionCommand";
import {
  BatchPutScheduledUpdateGroupActionCommandInput,
  BatchPutScheduledUpdateGroupActionCommandOutput,
} from "./commands/BatchPutScheduledUpdateGroupActionCommand";
import {
  CancelInstanceRefreshCommandInput,
  CancelInstanceRefreshCommandOutput,
} from "./commands/CancelInstanceRefreshCommand";
import {
  CompleteLifecycleActionCommandInput,
  CompleteLifecycleActionCommandOutput,
} from "./commands/CompleteLifecycleActionCommand";
import {
  CreateAutoScalingGroupCommandInput,
  CreateAutoScalingGroupCommandOutput,
} from "./commands/CreateAutoScalingGroupCommand";
import {
  CreateLaunchConfigurationCommandInput,
  CreateLaunchConfigurationCommandOutput,
} from "./commands/CreateLaunchConfigurationCommand";
import { CreateOrUpdateTagsCommandInput, CreateOrUpdateTagsCommandOutput } from "./commands/CreateOrUpdateTagsCommand";
import {
  DeleteAutoScalingGroupCommandInput,
  DeleteAutoScalingGroupCommandOutput,
} from "./commands/DeleteAutoScalingGroupCommand";
import {
  DeleteLaunchConfigurationCommandInput,
  DeleteLaunchConfigurationCommandOutput,
} from "./commands/DeleteLaunchConfigurationCommand";
import {
  DeleteLifecycleHookCommandInput,
  DeleteLifecycleHookCommandOutput,
} from "./commands/DeleteLifecycleHookCommand";
import {
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "./commands/DeleteNotificationConfigurationCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DeleteWarmPoolCommandInput, DeleteWarmPoolCommandOutput } from "./commands/DeleteWarmPoolCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeAdjustmentTypesCommandInput,
  DescribeAdjustmentTypesCommandOutput,
} from "./commands/DescribeAdjustmentTypesCommand";
import {
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput,
} from "./commands/DescribeAutoScalingGroupsCommand";
import {
  DescribeAutoScalingInstancesCommandInput,
  DescribeAutoScalingInstancesCommandOutput,
} from "./commands/DescribeAutoScalingInstancesCommand";
import {
  DescribeAutoScalingNotificationTypesCommandInput,
  DescribeAutoScalingNotificationTypesCommandOutput,
} from "./commands/DescribeAutoScalingNotificationTypesCommand";
import {
  DescribeInstanceRefreshesCommandInput,
  DescribeInstanceRefreshesCommandOutput,
} from "./commands/DescribeInstanceRefreshesCommand";
import {
  DescribeLaunchConfigurationsCommandInput,
  DescribeLaunchConfigurationsCommandOutput,
} from "./commands/DescribeLaunchConfigurationsCommand";
import {
  DescribeLifecycleHooksCommandInput,
  DescribeLifecycleHooksCommandOutput,
} from "./commands/DescribeLifecycleHooksCommand";
import {
  DescribeLifecycleHookTypesCommandInput,
  DescribeLifecycleHookTypesCommandOutput,
} from "./commands/DescribeLifecycleHookTypesCommand";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "./commands/DescribeLoadBalancersCommand";
import {
  DescribeLoadBalancerTargetGroupsCommandInput,
  DescribeLoadBalancerTargetGroupsCommandOutput,
} from "./commands/DescribeLoadBalancerTargetGroupsCommand";
import {
  DescribeMetricCollectionTypesCommandInput,
  DescribeMetricCollectionTypesCommandOutput,
} from "./commands/DescribeMetricCollectionTypesCommand";
import {
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
} from "./commands/DescribeNotificationConfigurationsCommand";
import { DescribePoliciesCommandInput, DescribePoliciesCommandOutput } from "./commands/DescribePoliciesCommand";
import {
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "./commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingProcessTypesCommandInput,
  DescribeScalingProcessTypesCommandOutput,
} from "./commands/DescribeScalingProcessTypesCommand";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import {
  DescribeTerminationPolicyTypesCommandInput,
  DescribeTerminationPolicyTypesCommandOutput,
} from "./commands/DescribeTerminationPolicyTypesCommand";
import {
  DescribeTrafficSourcesCommandInput,
  DescribeTrafficSourcesCommandOutput,
} from "./commands/DescribeTrafficSourcesCommand";
import { DescribeWarmPoolCommandInput, DescribeWarmPoolCommandOutput } from "./commands/DescribeWarmPoolCommand";
import { DetachInstancesCommandInput, DetachInstancesCommandOutput } from "./commands/DetachInstancesCommand";
import {
  DetachLoadBalancersCommandInput,
  DetachLoadBalancersCommandOutput,
} from "./commands/DetachLoadBalancersCommand";
import {
  DetachLoadBalancerTargetGroupsCommandInput,
  DetachLoadBalancerTargetGroupsCommandOutput,
} from "./commands/DetachLoadBalancerTargetGroupsCommand";
import {
  DetachTrafficSourcesCommandInput,
  DetachTrafficSourcesCommandOutput,
} from "./commands/DetachTrafficSourcesCommand";
import {
  DisableMetricsCollectionCommandInput,
  DisableMetricsCollectionCommandOutput,
} from "./commands/DisableMetricsCollectionCommand";
import {
  EnableMetricsCollectionCommandInput,
  EnableMetricsCollectionCommandOutput,
} from "./commands/EnableMetricsCollectionCommand";
import { EnterStandbyCommandInput, EnterStandbyCommandOutput } from "./commands/EnterStandbyCommand";
import { ExecutePolicyCommandInput, ExecutePolicyCommandOutput } from "./commands/ExecutePolicyCommand";
import { ExitStandbyCommandInput, ExitStandbyCommandOutput } from "./commands/ExitStandbyCommand";
import {
  GetPredictiveScalingForecastCommandInput,
  GetPredictiveScalingForecastCommandOutput,
} from "./commands/GetPredictiveScalingForecastCommand";
import { PutLifecycleHookCommandInput, PutLifecycleHookCommandOutput } from "./commands/PutLifecycleHookCommand";
import {
  PutNotificationConfigurationCommandInput,
  PutNotificationConfigurationCommandOutput,
} from "./commands/PutNotificationConfigurationCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "./commands/PutScalingPolicyCommand";
import {
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput,
} from "./commands/PutScheduledUpdateGroupActionCommand";
import { PutWarmPoolCommandInput, PutWarmPoolCommandOutput } from "./commands/PutWarmPoolCommand";
import {
  RecordLifecycleActionHeartbeatCommandInput,
  RecordLifecycleActionHeartbeatCommandOutput,
} from "./commands/RecordLifecycleActionHeartbeatCommand";
import { ResumeProcessesCommandInput, ResumeProcessesCommandOutput } from "./commands/ResumeProcessesCommand";
import { SetDesiredCapacityCommandInput, SetDesiredCapacityCommandOutput } from "./commands/SetDesiredCapacityCommand";
import { SetInstanceHealthCommandInput, SetInstanceHealthCommandOutput } from "./commands/SetInstanceHealthCommand";
import {
  SetInstanceProtectionCommandInput,
  SetInstanceProtectionCommandOutput,
} from "./commands/SetInstanceProtectionCommand";
import {
  StartInstanceRefreshCommandInput,
  StartInstanceRefreshCommandOutput,
} from "./commands/StartInstanceRefreshCommand";
import { SuspendProcessesCommandInput, SuspendProcessesCommandOutput } from "./commands/SuspendProcessesCommand";
import {
  TerminateInstanceInAutoScalingGroupCommandInput,
  TerminateInstanceInAutoScalingGroupCommandOutput,
} from "./commands/TerminateInstanceInAutoScalingGroupCommand";
import {
  UpdateAutoScalingGroupCommandInput,
  UpdateAutoScalingGroupCommandOutput,
} from "./commands/UpdateAutoScalingGroupCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AttachInstancesCommandInput
  | AttachLoadBalancerTargetGroupsCommandInput
  | AttachLoadBalancersCommandInput
  | AttachTrafficSourcesCommandInput
  | BatchDeleteScheduledActionCommandInput
  | BatchPutScheduledUpdateGroupActionCommandInput
  | CancelInstanceRefreshCommandInput
  | CompleteLifecycleActionCommandInput
  | CreateAutoScalingGroupCommandInput
  | CreateLaunchConfigurationCommandInput
  | CreateOrUpdateTagsCommandInput
  | DeleteAutoScalingGroupCommandInput
  | DeleteLaunchConfigurationCommandInput
  | DeleteLifecycleHookCommandInput
  | DeleteNotificationConfigurationCommandInput
  | DeletePolicyCommandInput
  | DeleteScheduledActionCommandInput
  | DeleteTagsCommandInput
  | DeleteWarmPoolCommandInput
  | DescribeAccountLimitsCommandInput
  | DescribeAdjustmentTypesCommandInput
  | DescribeAutoScalingGroupsCommandInput
  | DescribeAutoScalingInstancesCommandInput
  | DescribeAutoScalingNotificationTypesCommandInput
  | DescribeInstanceRefreshesCommandInput
  | DescribeLaunchConfigurationsCommandInput
  | DescribeLifecycleHookTypesCommandInput
  | DescribeLifecycleHooksCommandInput
  | DescribeLoadBalancerTargetGroupsCommandInput
  | DescribeLoadBalancersCommandInput
  | DescribeMetricCollectionTypesCommandInput
  | DescribeNotificationConfigurationsCommandInput
  | DescribePoliciesCommandInput
  | DescribeScalingActivitiesCommandInput
  | DescribeScalingProcessTypesCommandInput
  | DescribeScheduledActionsCommandInput
  | DescribeTagsCommandInput
  | DescribeTerminationPolicyTypesCommandInput
  | DescribeTrafficSourcesCommandInput
  | DescribeWarmPoolCommandInput
  | DetachInstancesCommandInput
  | DetachLoadBalancerTargetGroupsCommandInput
  | DetachLoadBalancersCommandInput
  | DetachTrafficSourcesCommandInput
  | DisableMetricsCollectionCommandInput
  | EnableMetricsCollectionCommandInput
  | EnterStandbyCommandInput
  | ExecutePolicyCommandInput
  | ExitStandbyCommandInput
  | GetPredictiveScalingForecastCommandInput
  | PutLifecycleHookCommandInput
  | PutNotificationConfigurationCommandInput
  | PutScalingPolicyCommandInput
  | PutScheduledUpdateGroupActionCommandInput
  | PutWarmPoolCommandInput
  | RecordLifecycleActionHeartbeatCommandInput
  | ResumeProcessesCommandInput
  | SetDesiredCapacityCommandInput
  | SetInstanceHealthCommandInput
  | SetInstanceProtectionCommandInput
  | StartInstanceRefreshCommandInput
  | SuspendProcessesCommandInput
  | TerminateInstanceInAutoScalingGroupCommandInput
  | UpdateAutoScalingGroupCommandInput;

export type ServiceOutputTypes =
  | AttachInstancesCommandOutput
  | AttachLoadBalancerTargetGroupsCommandOutput
  | AttachLoadBalancersCommandOutput
  | AttachTrafficSourcesCommandOutput
  | BatchDeleteScheduledActionCommandOutput
  | BatchPutScheduledUpdateGroupActionCommandOutput
  | CancelInstanceRefreshCommandOutput
  | CompleteLifecycleActionCommandOutput
  | CreateAutoScalingGroupCommandOutput
  | CreateLaunchConfigurationCommandOutput
  | CreateOrUpdateTagsCommandOutput
  | DeleteAutoScalingGroupCommandOutput
  | DeleteLaunchConfigurationCommandOutput
  | DeleteLifecycleHookCommandOutput
  | DeleteNotificationConfigurationCommandOutput
  | DeletePolicyCommandOutput
  | DeleteScheduledActionCommandOutput
  | DeleteTagsCommandOutput
  | DeleteWarmPoolCommandOutput
  | DescribeAccountLimitsCommandOutput
  | DescribeAdjustmentTypesCommandOutput
  | DescribeAutoScalingGroupsCommandOutput
  | DescribeAutoScalingInstancesCommandOutput
  | DescribeAutoScalingNotificationTypesCommandOutput
  | DescribeInstanceRefreshesCommandOutput
  | DescribeLaunchConfigurationsCommandOutput
  | DescribeLifecycleHookTypesCommandOutput
  | DescribeLifecycleHooksCommandOutput
  | DescribeLoadBalancerTargetGroupsCommandOutput
  | DescribeLoadBalancersCommandOutput
  | DescribeMetricCollectionTypesCommandOutput
  | DescribeNotificationConfigurationsCommandOutput
  | DescribePoliciesCommandOutput
  | DescribeScalingActivitiesCommandOutput
  | DescribeScalingProcessTypesCommandOutput
  | DescribeScheduledActionsCommandOutput
  | DescribeTagsCommandOutput
  | DescribeTerminationPolicyTypesCommandOutput
  | DescribeTrafficSourcesCommandOutput
  | DescribeWarmPoolCommandOutput
  | DetachInstancesCommandOutput
  | DetachLoadBalancerTargetGroupsCommandOutput
  | DetachLoadBalancersCommandOutput
  | DetachTrafficSourcesCommandOutput
  | DisableMetricsCollectionCommandOutput
  | EnableMetricsCollectionCommandOutput
  | EnterStandbyCommandOutput
  | ExecutePolicyCommandOutput
  | ExitStandbyCommandOutput
  | GetPredictiveScalingForecastCommandOutput
  | PutLifecycleHookCommandOutput
  | PutNotificationConfigurationCommandOutput
  | PutScalingPolicyCommandOutput
  | PutScheduledUpdateGroupActionCommandOutput
  | PutWarmPoolCommandOutput
  | RecordLifecycleActionHeartbeatCommandOutput
  | ResumeProcessesCommandOutput
  | SetDesiredCapacityCommandOutput
  | SetInstanceHealthCommandOutput
  | SetInstanceProtectionCommandOutput
  | StartInstanceRefreshCommandOutput
  | SuspendProcessesCommandOutput
  | TerminateInstanceInAutoScalingGroupCommandOutput
  | UpdateAutoScalingGroupCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

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
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type AutoScalingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of AutoScalingClient class constructor that set the region, credentials and other options.
 */
export interface AutoScalingClientConfig extends AutoScalingClientConfigType {}

type AutoScalingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of AutoScalingClient class. This is resolved and normalized from the {@link AutoScalingClientConfig | constructor configuration interface}.
 */
export interface AutoScalingClientResolvedConfig extends AutoScalingClientResolvedConfigType {}

/**
 * <fullname>Amazon EC2 Auto Scaling</fullname>
 *          <p>Amazon EC2 Auto Scaling is designed to automatically launch and terminate EC2 instances
 *             based on user-defined scaling policies, scheduled actions, and health checks.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/">Amazon EC2 Auto Scaling User Guide</a> and the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html">Amazon EC2 Auto Scaling API Reference</a>.</p>
 */
export class AutoScalingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AutoScalingClientResolvedConfig
> {
  /**
   * The resolved configuration of AutoScalingClient class. This is resolved and normalized from the {@link AutoScalingClientConfig | constructor configuration interface}.
   */
  readonly config: AutoScalingClientResolvedConfig;

  constructor(configuration: AutoScalingClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
