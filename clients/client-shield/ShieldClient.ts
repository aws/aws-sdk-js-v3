import {
  AssociateDRTLogBucketCommandInput,
  AssociateDRTLogBucketCommandOutput,
} from "./commands/AssociateDRTLogBucketCommand";
import { AssociateDRTRoleCommandInput, AssociateDRTRoleCommandOutput } from "./commands/AssociateDRTRoleCommand";
import {
  AssociateHealthCheckCommandInput,
  AssociateHealthCheckCommandOutput,
} from "./commands/AssociateHealthCheckCommand";
import {
  AssociateProactiveEngagementDetailsCommandInput,
  AssociateProactiveEngagementDetailsCommandOutput,
} from "./commands/AssociateProactiveEngagementDetailsCommand";
import { CreateProtectionCommandInput, CreateProtectionCommandOutput } from "./commands/CreateProtectionCommand";
import {
  CreateProtectionGroupCommandInput,
  CreateProtectionGroupCommandOutput,
} from "./commands/CreateProtectionGroupCommand";
import { CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput } from "./commands/CreateSubscriptionCommand";
import { DeleteProtectionCommandInput, DeleteProtectionCommandOutput } from "./commands/DeleteProtectionCommand";
import {
  DeleteProtectionGroupCommandInput,
  DeleteProtectionGroupCommandOutput,
} from "./commands/DeleteProtectionGroupCommand";
import { DeleteSubscriptionCommandInput, DeleteSubscriptionCommandOutput } from "./commands/DeleteSubscriptionCommand";
import { DescribeAttackCommandInput, DescribeAttackCommandOutput } from "./commands/DescribeAttackCommand";
import {
  DescribeAttackStatisticsCommandInput,
  DescribeAttackStatisticsCommandOutput,
} from "./commands/DescribeAttackStatisticsCommand";
import { DescribeDRTAccessCommandInput, DescribeDRTAccessCommandOutput } from "./commands/DescribeDRTAccessCommand";
import {
  DescribeEmergencyContactSettingsCommandInput,
  DescribeEmergencyContactSettingsCommandOutput,
} from "./commands/DescribeEmergencyContactSettingsCommand";
import { DescribeProtectionCommandInput, DescribeProtectionCommandOutput } from "./commands/DescribeProtectionCommand";
import {
  DescribeProtectionGroupCommandInput,
  DescribeProtectionGroupCommandOutput,
} from "./commands/DescribeProtectionGroupCommand";
import {
  DescribeSubscriptionCommandInput,
  DescribeSubscriptionCommandOutput,
} from "./commands/DescribeSubscriptionCommand";
import {
  DisableProactiveEngagementCommandInput,
  DisableProactiveEngagementCommandOutput,
} from "./commands/DisableProactiveEngagementCommand";
import {
  DisassociateDRTLogBucketCommandInput,
  DisassociateDRTLogBucketCommandOutput,
} from "./commands/DisassociateDRTLogBucketCommand";
import {
  DisassociateDRTRoleCommandInput,
  DisassociateDRTRoleCommandOutput,
} from "./commands/DisassociateDRTRoleCommand";
import {
  DisassociateHealthCheckCommandInput,
  DisassociateHealthCheckCommandOutput,
} from "./commands/DisassociateHealthCheckCommand";
import {
  EnableProactiveEngagementCommandInput,
  EnableProactiveEngagementCommandOutput,
} from "./commands/EnableProactiveEngagementCommand";
import {
  GetSubscriptionStateCommandInput,
  GetSubscriptionStateCommandOutput,
} from "./commands/GetSubscriptionStateCommand";
import { ListAttacksCommandInput, ListAttacksCommandOutput } from "./commands/ListAttacksCommand";
import {
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput,
} from "./commands/ListProtectionGroupsCommand";
import { ListProtectionsCommandInput, ListProtectionsCommandOutput } from "./commands/ListProtectionsCommand";
import {
  ListResourcesInProtectionGroupCommandInput,
  ListResourcesInProtectionGroupCommandOutput,
} from "./commands/ListResourcesInProtectionGroupCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateEmergencyContactSettingsCommandInput,
  UpdateEmergencyContactSettingsCommandOutput,
} from "./commands/UpdateEmergencyContactSettingsCommand";
import {
  UpdateProtectionGroupCommandInput,
  UpdateProtectionGroupCommandOutput,
} from "./commands/UpdateProtectionGroupCommand";
import { UpdateSubscriptionCommandInput, UpdateSubscriptionCommandOutput } from "./commands/UpdateSubscriptionCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateDRTLogBucketCommandInput
  | AssociateDRTRoleCommandInput
  | AssociateHealthCheckCommandInput
  | AssociateProactiveEngagementDetailsCommandInput
  | CreateProtectionCommandInput
  | CreateProtectionGroupCommandInput
  | CreateSubscriptionCommandInput
  | DeleteProtectionCommandInput
  | DeleteProtectionGroupCommandInput
  | DeleteSubscriptionCommandInput
  | DescribeAttackCommandInput
  | DescribeAttackStatisticsCommandInput
  | DescribeDRTAccessCommandInput
  | DescribeEmergencyContactSettingsCommandInput
  | DescribeProtectionCommandInput
  | DescribeProtectionGroupCommandInput
  | DescribeSubscriptionCommandInput
  | DisableProactiveEngagementCommandInput
  | DisassociateDRTLogBucketCommandInput
  | DisassociateDRTRoleCommandInput
  | DisassociateHealthCheckCommandInput
  | EnableProactiveEngagementCommandInput
  | GetSubscriptionStateCommandInput
  | ListAttacksCommandInput
  | ListProtectionGroupsCommandInput
  | ListProtectionsCommandInput
  | ListResourcesInProtectionGroupCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEmergencyContactSettingsCommandInput
  | UpdateProtectionGroupCommandInput
  | UpdateSubscriptionCommandInput;

export type ServiceOutputTypes =
  | AssociateDRTLogBucketCommandOutput
  | AssociateDRTRoleCommandOutput
  | AssociateHealthCheckCommandOutput
  | AssociateProactiveEngagementDetailsCommandOutput
  | CreateProtectionCommandOutput
  | CreateProtectionGroupCommandOutput
  | CreateSubscriptionCommandOutput
  | DeleteProtectionCommandOutput
  | DeleteProtectionGroupCommandOutput
  | DeleteSubscriptionCommandOutput
  | DescribeAttackCommandOutput
  | DescribeAttackStatisticsCommandOutput
  | DescribeDRTAccessCommandOutput
  | DescribeEmergencyContactSettingsCommandOutput
  | DescribeProtectionCommandOutput
  | DescribeProtectionGroupCommandOutput
  | DescribeSubscriptionCommandOutput
  | DisableProactiveEngagementCommandOutput
  | DisassociateDRTLogBucketCommandOutput
  | DisassociateDRTRoleCommandOutput
  | DisassociateHealthCheckCommandOutput
  | EnableProactiveEngagementCommandOutput
  | GetSubscriptionStateCommandOutput
  | ListAttacksCommandOutput
  | ListProtectionGroupsCommandOutput
  | ListProtectionsCommandOutput
  | ListResourcesInProtectionGroupCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEmergencyContactSettingsCommandOutput
  | UpdateProtectionGroupCommandOutput
  | UpdateSubscriptionCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type ShieldClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ShieldClient class constructor that set the region, credentials and other options.
 */
export interface ShieldClientConfig extends ShieldClientConfigType {}

type ShieldClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ShieldClient class. This is resolved and normalized from the {@link ShieldClientConfig | constructor configuration interface}.
 */
export interface ShieldClientResolvedConfig extends ShieldClientResolvedConfigType {}

/**
 * <fullname>Shield Advanced</fullname>
 *          <p>This is the <i>Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the Shield Advanced API actions,
 *          data types, and errors. For detailed information about WAF and Shield Advanced features and an overview of how to use the WAF and Shield Advanced APIs, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF and Shield Developer Guide</a>.</p>
 */
export class ShieldClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ShieldClientResolvedConfig
> {
  /**
   * The resolved configuration of ShieldClient class. This is resolved and normalized from the {@link ShieldClientConfig | constructor configuration interface}.
   */
  readonly config: ShieldClientResolvedConfig;

  constructor(configuration: ShieldClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
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

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
