import {
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "./commands/CreateUserCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "./commands/DeleteUserCommand";
import {
  DescribeUserCommandInput,
  DescribeUserCommandOutput
} from "./commands/DescribeUserCommand";
import {
  DescribeUserHierarchyGroupCommandInput,
  DescribeUserHierarchyGroupCommandOutput
} from "./commands/DescribeUserHierarchyGroupCommand";
import {
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput
} from "./commands/DescribeUserHierarchyStructureCommand";
import {
  GetContactAttributesCommandInput,
  GetContactAttributesCommandOutput
} from "./commands/GetContactAttributesCommand";
import {
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput
} from "./commands/GetCurrentMetricDataCommand";
import {
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput
} from "./commands/GetFederationTokenCommand";
import {
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput
} from "./commands/GetMetricDataCommand";
import {
  ListContactFlowsCommandInput,
  ListContactFlowsCommandOutput
} from "./commands/ListContactFlowsCommand";
import {
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput
} from "./commands/ListHoursOfOperationsCommand";
import {
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput
} from "./commands/ListPhoneNumbersCommand";
import {
  ListQueuesCommandInput,
  ListQueuesCommandOutput
} from "./commands/ListQueuesCommand";
import {
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput
} from "./commands/ListRoutingProfilesCommand";
import {
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput
} from "./commands/ListSecurityProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput
} from "./commands/ListUserHierarchyGroupsCommand";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "./commands/ListUsersCommand";
import {
  StartChatContactCommandInput,
  StartChatContactCommandOutput
} from "./commands/StartChatContactCommand";
import {
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput
} from "./commands/StartOutboundVoiceContactCommand";
import {
  StopContactCommandInput,
  StopContactCommandOutput
} from "./commands/StopContactCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput
} from "./commands/UpdateContactAttributesCommand";
import {
  UpdateUserHierarchyCommandInput,
  UpdateUserHierarchyCommandOutput
} from "./commands/UpdateUserHierarchyCommand";
import {
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput
} from "./commands/UpdateUserIdentityInfoCommand";
import {
  UpdateUserPhoneConfigCommandInput,
  UpdateUserPhoneConfigCommandOutput
} from "./commands/UpdateUserPhoneConfigCommand";
import {
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput
} from "./commands/UpdateUserRoutingProfileCommand";
import {
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput
} from "./commands/UpdateUserSecurityProfilesCommand";
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
  | CreateUserCommandInput
  | DeleteUserCommandInput
  | DescribeUserCommandInput
  | DescribeUserHierarchyGroupCommandInput
  | DescribeUserHierarchyStructureCommandInput
  | GetContactAttributesCommandInput
  | GetCurrentMetricDataCommandInput
  | GetFederationTokenCommandInput
  | GetMetricDataCommandInput
  | ListContactFlowsCommandInput
  | ListHoursOfOperationsCommandInput
  | ListPhoneNumbersCommandInput
  | ListQueuesCommandInput
  | ListRoutingProfilesCommandInput
  | ListSecurityProfilesCommandInput
  | ListTagsForResourceCommandInput
  | ListUserHierarchyGroupsCommandInput
  | ListUsersCommandInput
  | StartChatContactCommandInput
  | StartOutboundVoiceContactCommandInput
  | StopContactCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateContactAttributesCommandInput
  | UpdateUserHierarchyCommandInput
  | UpdateUserIdentityInfoCommandInput
  | UpdateUserPhoneConfigCommandInput
  | UpdateUserRoutingProfileCommandInput
  | UpdateUserSecurityProfilesCommandInput;

export type ServiceOutputTypes =
  | CreateUserCommandOutput
  | DeleteUserCommandOutput
  | DescribeUserCommandOutput
  | DescribeUserHierarchyGroupCommandOutput
  | DescribeUserHierarchyStructureCommandOutput
  | GetContactAttributesCommandOutput
  | GetCurrentMetricDataCommandOutput
  | GetFederationTokenCommandOutput
  | GetMetricDataCommandOutput
  | ListContactFlowsCommandOutput
  | ListHoursOfOperationsCommandOutput
  | ListPhoneNumbersCommandOutput
  | ListQueuesCommandOutput
  | ListRoutingProfilesCommandOutput
  | ListSecurityProfilesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUserHierarchyGroupsCommandOutput
  | ListUsersCommandOutput
  | StartChatContactCommandOutput
  | StartOutboundVoiceContactCommandOutput
  | StopContactCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateContactAttributesCommandOutput
  | UpdateUserHierarchyCommandOutput
  | UpdateUserIdentityInfoCommandOutput
  | UpdateUserPhoneConfigCommandOutput
  | UpdateUserRoutingProfileCommandOutput
  | UpdateUserSecurityProfilesCommandOutput;

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

export type ConnectClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ConnectClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage a
 *    customer contact center and provide reliable customer engagement at any scale.</p>
 *          <p>Amazon Connect provides rich metrics and real-time reporting that allow you to optimize contact
 *    routing. You can also resolve customer issues more efficiently by putting customers in touch with
 *    the right agents.</p>
 *          <p>There are limits to the number of Amazon Connect resources that you can create and limits to the
 *    number of requests that you can make per second. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect
 *     Service Limits</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 */
export class ConnectClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ConnectClientResolvedConfig
> {
  readonly config: ConnectClientResolvedConfig;

  constructor(configuration: ConnectClientConfig) {
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
