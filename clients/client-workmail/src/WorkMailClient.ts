import {
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput,
} from "./commands/AssociateDelegateToResourceCommand";
import {
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput,
} from "./commands/AssociateMemberToGroupCommand";
import {
  CancelMailboxExportJobCommandInput,
  CancelMailboxExportJobCommandOutput,
} from "./commands/CancelMailboxExportJobCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateMobileDeviceAccessRuleCommandInput,
  CreateMobileDeviceAccessRuleCommandOutput,
} from "./commands/CreateMobileDeviceAccessRuleCommand";
import { CreateOrganizationCommandInput, CreateOrganizationCommandOutput } from "./commands/CreateOrganizationCommand";
import { CreateResourceCommandInput, CreateResourceCommandOutput } from "./commands/CreateResourceCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteAccessControlRuleCommandInput,
  DeleteAccessControlRuleCommandOutput,
} from "./commands/DeleteAccessControlRuleCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteMailboxPermissionsCommandInput,
  DeleteMailboxPermissionsCommandOutput,
} from "./commands/DeleteMailboxPermissionsCommand";
import {
  DeleteMobileDeviceAccessRuleCommandInput,
  DeleteMobileDeviceAccessRuleCommandOutput,
} from "./commands/DeleteMobileDeviceAccessRuleCommand";
import { DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput } from "./commands/DeleteOrganizationCommand";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "./commands/DeleteResourceCommand";
import {
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "./commands/DeleteRetentionPolicyCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeregisterFromWorkMailCommandInput,
  DeregisterFromWorkMailCommandOutput,
} from "./commands/DeregisterFromWorkMailCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import {
  DescribeMailboxExportJobCommandInput,
  DescribeMailboxExportJobCommandOutput,
} from "./commands/DescribeMailboxExportJobCommand";
import {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import {
  DisassociateDelegateFromResourceCommandInput,
  DisassociateDelegateFromResourceCommandOutput,
} from "./commands/DisassociateDelegateFromResourceCommand";
import {
  DisassociateMemberFromGroupCommandInput,
  DisassociateMemberFromGroupCommandOutput,
} from "./commands/DisassociateMemberFromGroupCommand";
import {
  GetAccessControlEffectCommandInput,
  GetAccessControlEffectCommandOutput,
} from "./commands/GetAccessControlEffectCommand";
import {
  GetDefaultRetentionPolicyCommandInput,
  GetDefaultRetentionPolicyCommandOutput,
} from "./commands/GetDefaultRetentionPolicyCommand";
import { GetMailboxDetailsCommandInput, GetMailboxDetailsCommandOutput } from "./commands/GetMailboxDetailsCommand";
import {
  GetMobileDeviceAccessEffectCommandInput,
  GetMobileDeviceAccessEffectCommandOutput,
} from "./commands/GetMobileDeviceAccessEffectCommand";
import {
  ListAccessControlRulesCommandInput,
  ListAccessControlRulesCommandOutput,
} from "./commands/ListAccessControlRulesCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListGroupMembersCommandInput, ListGroupMembersCommandOutput } from "./commands/ListGroupMembersCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput,
} from "./commands/ListMailboxExportJobsCommand";
import {
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
} from "./commands/ListMailboxPermissionsCommand";
import {
  ListMobileDeviceAccessRulesCommandInput,
  ListMobileDeviceAccessRulesCommandOutput,
} from "./commands/ListMobileDeviceAccessRulesCommand";
import { ListOrganizationsCommandInput, ListOrganizationsCommandOutput } from "./commands/ListOrganizationsCommand";
import {
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput,
} from "./commands/ListResourceDelegatesCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  PutAccessControlRuleCommandInput,
  PutAccessControlRuleCommandOutput,
} from "./commands/PutAccessControlRuleCommand";
import {
  PutMailboxPermissionsCommandInput,
  PutMailboxPermissionsCommandOutput,
} from "./commands/PutMailboxPermissionsCommand";
import { PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput } from "./commands/PutRetentionPolicyCommand";
import { RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput } from "./commands/RegisterToWorkMailCommand";
import { ResetPasswordCommandInput, ResetPasswordCommandOutput } from "./commands/ResetPasswordCommand";
import {
  StartMailboxExportJobCommandInput,
  StartMailboxExportJobCommandOutput,
} from "./commands/StartMailboxExportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateMailboxQuotaCommandInput, UpdateMailboxQuotaCommandOutput } from "./commands/UpdateMailboxQuotaCommand";
import {
  UpdateMobileDeviceAccessRuleCommandInput,
  UpdateMobileDeviceAccessRuleCommandOutput,
} from "./commands/UpdateMobileDeviceAccessRuleCommand";
import {
  UpdatePrimaryEmailAddressCommandInput,
  UpdatePrimaryEmailAddressCommandOutput,
} from "./commands/UpdatePrimaryEmailAddressCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
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
  | AssociateDelegateToResourceCommandInput
  | AssociateMemberToGroupCommandInput
  | CancelMailboxExportJobCommandInput
  | CreateAliasCommandInput
  | CreateGroupCommandInput
  | CreateMobileDeviceAccessRuleCommandInput
  | CreateOrganizationCommandInput
  | CreateResourceCommandInput
  | CreateUserCommandInput
  | DeleteAccessControlRuleCommandInput
  | DeleteAliasCommandInput
  | DeleteGroupCommandInput
  | DeleteMailboxPermissionsCommandInput
  | DeleteMobileDeviceAccessRuleCommandInput
  | DeleteOrganizationCommandInput
  | DeleteResourceCommandInput
  | DeleteRetentionPolicyCommandInput
  | DeleteUserCommandInput
  | DeregisterFromWorkMailCommandInput
  | DescribeGroupCommandInput
  | DescribeMailboxExportJobCommandInput
  | DescribeOrganizationCommandInput
  | DescribeResourceCommandInput
  | DescribeUserCommandInput
  | DisassociateDelegateFromResourceCommandInput
  | DisassociateMemberFromGroupCommandInput
  | GetAccessControlEffectCommandInput
  | GetDefaultRetentionPolicyCommandInput
  | GetMailboxDetailsCommandInput
  | GetMobileDeviceAccessEffectCommandInput
  | ListAccessControlRulesCommandInput
  | ListAliasesCommandInput
  | ListGroupMembersCommandInput
  | ListGroupsCommandInput
  | ListMailboxExportJobsCommandInput
  | ListMailboxPermissionsCommandInput
  | ListMobileDeviceAccessRulesCommandInput
  | ListOrganizationsCommandInput
  | ListResourceDelegatesCommandInput
  | ListResourcesCommandInput
  | ListTagsForResourceCommandInput
  | ListUsersCommandInput
  | PutAccessControlRuleCommandInput
  | PutMailboxPermissionsCommandInput
  | PutRetentionPolicyCommandInput
  | RegisterToWorkMailCommandInput
  | ResetPasswordCommandInput
  | StartMailboxExportJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateMailboxQuotaCommandInput
  | UpdateMobileDeviceAccessRuleCommandInput
  | UpdatePrimaryEmailAddressCommandInput
  | UpdateResourceCommandInput;

export type ServiceOutputTypes =
  | AssociateDelegateToResourceCommandOutput
  | AssociateMemberToGroupCommandOutput
  | CancelMailboxExportJobCommandOutput
  | CreateAliasCommandOutput
  | CreateGroupCommandOutput
  | CreateMobileDeviceAccessRuleCommandOutput
  | CreateOrganizationCommandOutput
  | CreateResourceCommandOutput
  | CreateUserCommandOutput
  | DeleteAccessControlRuleCommandOutput
  | DeleteAliasCommandOutput
  | DeleteGroupCommandOutput
  | DeleteMailboxPermissionsCommandOutput
  | DeleteMobileDeviceAccessRuleCommandOutput
  | DeleteOrganizationCommandOutput
  | DeleteResourceCommandOutput
  | DeleteRetentionPolicyCommandOutput
  | DeleteUserCommandOutput
  | DeregisterFromWorkMailCommandOutput
  | DescribeGroupCommandOutput
  | DescribeMailboxExportJobCommandOutput
  | DescribeOrganizationCommandOutput
  | DescribeResourceCommandOutput
  | DescribeUserCommandOutput
  | DisassociateDelegateFromResourceCommandOutput
  | DisassociateMemberFromGroupCommandOutput
  | GetAccessControlEffectCommandOutput
  | GetDefaultRetentionPolicyCommandOutput
  | GetMailboxDetailsCommandOutput
  | GetMobileDeviceAccessEffectCommandOutput
  | ListAccessControlRulesCommandOutput
  | ListAliasesCommandOutput
  | ListGroupMembersCommandOutput
  | ListGroupsCommandOutput
  | ListMailboxExportJobsCommandOutput
  | ListMailboxPermissionsCommandOutput
  | ListMobileDeviceAccessRulesCommandOutput
  | ListOrganizationsCommandOutput
  | ListResourceDelegatesCommandOutput
  | ListResourcesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsersCommandOutput
  | PutAccessControlRuleCommandOutput
  | PutMailboxPermissionsCommandOutput
  | PutRetentionPolicyCommandOutput
  | RegisterToWorkMailCommandOutput
  | ResetPasswordCommandOutput
  | StartMailboxExportJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateMailboxQuotaCommandOutput
  | UpdateMobileDeviceAccessRuleCommandOutput
  | UpdatePrimaryEmailAddressCommandOutput
  | UpdateResourceCommandOutput;

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

type WorkMailClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of WorkMailClient class constructor that set the region, credentials and other options.
 */
export interface WorkMailClientConfig extends WorkMailClientConfigType {}

type WorkMailClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of WorkMailClient class. This is resolved and normalized from the {@link WorkMailClientConfig | constructor configuration interface}.
 */
export interface WorkMailClientResolvedConfig extends WorkMailClientResolvedConfigType {}

/**
 * <p>Amazon WorkMail is a secure, managed business email and calendaring service with support for
 *          existing desktop and mobile email clients. You can access your email, contacts, and
 *          calendars using Microsoft Outlook, your browser, or other native iOS and Android email
 *          applications. You can integrate WorkMail with your existing corporate directory and control
 *          both the keys that encrypt your data and the location in which your data is
 *          stored.</p>
 *          <p>The WorkMail API is designed for the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>Listing and describing organizations</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing users</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing groups</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing resources</p>
 *             </li>
 *          </ul>
 *          <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not
 *          only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management
 *          users and roles to help facilitate access, trust, and permission policies. By creating a
 *          role and allowing an IAM user to access the WorkMail site, the IAM user gains full
 *          administrative visibility into the entire WorkMail organization (or as set in the IAM
 *          policy). This includes, but is not limited to, the ability to create, update, and delete
 *          users, groups, and resources. This allows developers to perform the scenarios listed above,
 *          as well as give users the ability to grant access on a selective basis using the IAM
 *          model.</p>
 */
export class WorkMailClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkMailClientResolvedConfig
> {
  /**
   * The resolved configuration of WorkMailClient class. This is resolved and normalized from the {@link WorkMailClientConfig | constructor configuration interface}.
   */
  readonly config: WorkMailClientResolvedConfig;

  constructor(configuration: WorkMailClientConfig) {
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
