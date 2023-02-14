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

import {
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput,
} from "./commands/AssociateDelegateToResourceCommand";
import {
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput,
} from "./commands/AssociateMemberToGroupCommand";
import {
  AssumeImpersonationRoleCommandInput,
  AssumeImpersonationRoleCommandOutput,
} from "./commands/AssumeImpersonationRoleCommand";
import {
  CancelMailboxExportJobCommandInput,
  CancelMailboxExportJobCommandOutput,
} from "./commands/CancelMailboxExportJobCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import {
  CreateAvailabilityConfigurationCommandInput,
  CreateAvailabilityConfigurationCommandOutput,
} from "./commands/CreateAvailabilityConfigurationCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateImpersonationRoleCommandInput,
  CreateImpersonationRoleCommandOutput,
} from "./commands/CreateImpersonationRoleCommand";
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
import {
  DeleteAvailabilityConfigurationCommandInput,
  DeleteAvailabilityConfigurationCommandOutput,
} from "./commands/DeleteAvailabilityConfigurationCommand";
import {
  DeleteEmailMonitoringConfigurationCommandInput,
  DeleteEmailMonitoringConfigurationCommandOutput,
} from "./commands/DeleteEmailMonitoringConfigurationCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteImpersonationRoleCommandInput,
  DeleteImpersonationRoleCommandOutput,
} from "./commands/DeleteImpersonationRoleCommand";
import {
  DeleteMailboxPermissionsCommandInput,
  DeleteMailboxPermissionsCommandOutput,
} from "./commands/DeleteMailboxPermissionsCommand";
import {
  DeleteMobileDeviceAccessOverrideCommandInput,
  DeleteMobileDeviceAccessOverrideCommandOutput,
} from "./commands/DeleteMobileDeviceAccessOverrideCommand";
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
import {
  DeregisterMailDomainCommandInput,
  DeregisterMailDomainCommandOutput,
} from "./commands/DeregisterMailDomainCommand";
import {
  DescribeEmailMonitoringConfigurationCommandInput,
  DescribeEmailMonitoringConfigurationCommandOutput,
} from "./commands/DescribeEmailMonitoringConfigurationCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import {
  DescribeInboundDmarcSettingsCommandInput,
  DescribeInboundDmarcSettingsCommandOutput,
} from "./commands/DescribeInboundDmarcSettingsCommand";
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
import {
  GetImpersonationRoleCommandInput,
  GetImpersonationRoleCommandOutput,
} from "./commands/GetImpersonationRoleCommand";
import {
  GetImpersonationRoleEffectCommandInput,
  GetImpersonationRoleEffectCommandOutput,
} from "./commands/GetImpersonationRoleEffectCommand";
import { GetMailboxDetailsCommandInput, GetMailboxDetailsCommandOutput } from "./commands/GetMailboxDetailsCommand";
import { GetMailDomainCommandInput, GetMailDomainCommandOutput } from "./commands/GetMailDomainCommand";
import {
  GetMobileDeviceAccessEffectCommandInput,
  GetMobileDeviceAccessEffectCommandOutput,
} from "./commands/GetMobileDeviceAccessEffectCommand";
import {
  GetMobileDeviceAccessOverrideCommandInput,
  GetMobileDeviceAccessOverrideCommandOutput,
} from "./commands/GetMobileDeviceAccessOverrideCommand";
import {
  ListAccessControlRulesCommandInput,
  ListAccessControlRulesCommandOutput,
} from "./commands/ListAccessControlRulesCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import {
  ListAvailabilityConfigurationsCommandInput,
  ListAvailabilityConfigurationsCommandOutput,
} from "./commands/ListAvailabilityConfigurationsCommand";
import { ListGroupMembersCommandInput, ListGroupMembersCommandOutput } from "./commands/ListGroupMembersCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListImpersonationRolesCommandInput,
  ListImpersonationRolesCommandOutput,
} from "./commands/ListImpersonationRolesCommand";
import {
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput,
} from "./commands/ListMailboxExportJobsCommand";
import {
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
} from "./commands/ListMailboxPermissionsCommand";
import { ListMailDomainsCommandInput, ListMailDomainsCommandOutput } from "./commands/ListMailDomainsCommand";
import {
  ListMobileDeviceAccessOverridesCommandInput,
  ListMobileDeviceAccessOverridesCommandOutput,
} from "./commands/ListMobileDeviceAccessOverridesCommand";
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
  PutEmailMonitoringConfigurationCommandInput,
  PutEmailMonitoringConfigurationCommandOutput,
} from "./commands/PutEmailMonitoringConfigurationCommand";
import {
  PutInboundDmarcSettingsCommandInput,
  PutInboundDmarcSettingsCommandOutput,
} from "./commands/PutInboundDmarcSettingsCommand";
import {
  PutMailboxPermissionsCommandInput,
  PutMailboxPermissionsCommandOutput,
} from "./commands/PutMailboxPermissionsCommand";
import {
  PutMobileDeviceAccessOverrideCommandInput,
  PutMobileDeviceAccessOverrideCommandOutput,
} from "./commands/PutMobileDeviceAccessOverrideCommand";
import { PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput } from "./commands/PutRetentionPolicyCommand";
import { RegisterMailDomainCommandInput, RegisterMailDomainCommandOutput } from "./commands/RegisterMailDomainCommand";
import { RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput } from "./commands/RegisterToWorkMailCommand";
import { ResetPasswordCommandInput, ResetPasswordCommandOutput } from "./commands/ResetPasswordCommand";
import {
  StartMailboxExportJobCommandInput,
  StartMailboxExportJobCommandOutput,
} from "./commands/StartMailboxExportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestAvailabilityConfigurationCommandInput,
  TestAvailabilityConfigurationCommandOutput,
} from "./commands/TestAvailabilityConfigurationCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAvailabilityConfigurationCommandInput,
  UpdateAvailabilityConfigurationCommandOutput,
} from "./commands/UpdateAvailabilityConfigurationCommand";
import {
  UpdateDefaultMailDomainCommandInput,
  UpdateDefaultMailDomainCommandOutput,
} from "./commands/UpdateDefaultMailDomainCommand";
import {
  UpdateImpersonationRoleCommandInput,
  UpdateImpersonationRoleCommandOutput,
} from "./commands/UpdateImpersonationRoleCommand";
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
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateDelegateToResourceCommandInput
  | AssociateMemberToGroupCommandInput
  | AssumeImpersonationRoleCommandInput
  | CancelMailboxExportJobCommandInput
  | CreateAliasCommandInput
  | CreateAvailabilityConfigurationCommandInput
  | CreateGroupCommandInput
  | CreateImpersonationRoleCommandInput
  | CreateMobileDeviceAccessRuleCommandInput
  | CreateOrganizationCommandInput
  | CreateResourceCommandInput
  | CreateUserCommandInput
  | DeleteAccessControlRuleCommandInput
  | DeleteAliasCommandInput
  | DeleteAvailabilityConfigurationCommandInput
  | DeleteEmailMonitoringConfigurationCommandInput
  | DeleteGroupCommandInput
  | DeleteImpersonationRoleCommandInput
  | DeleteMailboxPermissionsCommandInput
  | DeleteMobileDeviceAccessOverrideCommandInput
  | DeleteMobileDeviceAccessRuleCommandInput
  | DeleteOrganizationCommandInput
  | DeleteResourceCommandInput
  | DeleteRetentionPolicyCommandInput
  | DeleteUserCommandInput
  | DeregisterFromWorkMailCommandInput
  | DeregisterMailDomainCommandInput
  | DescribeEmailMonitoringConfigurationCommandInput
  | DescribeGroupCommandInput
  | DescribeInboundDmarcSettingsCommandInput
  | DescribeMailboxExportJobCommandInput
  | DescribeOrganizationCommandInput
  | DescribeResourceCommandInput
  | DescribeUserCommandInput
  | DisassociateDelegateFromResourceCommandInput
  | DisassociateMemberFromGroupCommandInput
  | GetAccessControlEffectCommandInput
  | GetDefaultRetentionPolicyCommandInput
  | GetImpersonationRoleCommandInput
  | GetImpersonationRoleEffectCommandInput
  | GetMailDomainCommandInput
  | GetMailboxDetailsCommandInput
  | GetMobileDeviceAccessEffectCommandInput
  | GetMobileDeviceAccessOverrideCommandInput
  | ListAccessControlRulesCommandInput
  | ListAliasesCommandInput
  | ListAvailabilityConfigurationsCommandInput
  | ListGroupMembersCommandInput
  | ListGroupsCommandInput
  | ListImpersonationRolesCommandInput
  | ListMailDomainsCommandInput
  | ListMailboxExportJobsCommandInput
  | ListMailboxPermissionsCommandInput
  | ListMobileDeviceAccessOverridesCommandInput
  | ListMobileDeviceAccessRulesCommandInput
  | ListOrganizationsCommandInput
  | ListResourceDelegatesCommandInput
  | ListResourcesCommandInput
  | ListTagsForResourceCommandInput
  | ListUsersCommandInput
  | PutAccessControlRuleCommandInput
  | PutEmailMonitoringConfigurationCommandInput
  | PutInboundDmarcSettingsCommandInput
  | PutMailboxPermissionsCommandInput
  | PutMobileDeviceAccessOverrideCommandInput
  | PutRetentionPolicyCommandInput
  | RegisterMailDomainCommandInput
  | RegisterToWorkMailCommandInput
  | ResetPasswordCommandInput
  | StartMailboxExportJobCommandInput
  | TagResourceCommandInput
  | TestAvailabilityConfigurationCommandInput
  | UntagResourceCommandInput
  | UpdateAvailabilityConfigurationCommandInput
  | UpdateDefaultMailDomainCommandInput
  | UpdateImpersonationRoleCommandInput
  | UpdateMailboxQuotaCommandInput
  | UpdateMobileDeviceAccessRuleCommandInput
  | UpdatePrimaryEmailAddressCommandInput
  | UpdateResourceCommandInput;

export type ServiceOutputTypes =
  | AssociateDelegateToResourceCommandOutput
  | AssociateMemberToGroupCommandOutput
  | AssumeImpersonationRoleCommandOutput
  | CancelMailboxExportJobCommandOutput
  | CreateAliasCommandOutput
  | CreateAvailabilityConfigurationCommandOutput
  | CreateGroupCommandOutput
  | CreateImpersonationRoleCommandOutput
  | CreateMobileDeviceAccessRuleCommandOutput
  | CreateOrganizationCommandOutput
  | CreateResourceCommandOutput
  | CreateUserCommandOutput
  | DeleteAccessControlRuleCommandOutput
  | DeleteAliasCommandOutput
  | DeleteAvailabilityConfigurationCommandOutput
  | DeleteEmailMonitoringConfigurationCommandOutput
  | DeleteGroupCommandOutput
  | DeleteImpersonationRoleCommandOutput
  | DeleteMailboxPermissionsCommandOutput
  | DeleteMobileDeviceAccessOverrideCommandOutput
  | DeleteMobileDeviceAccessRuleCommandOutput
  | DeleteOrganizationCommandOutput
  | DeleteResourceCommandOutput
  | DeleteRetentionPolicyCommandOutput
  | DeleteUserCommandOutput
  | DeregisterFromWorkMailCommandOutput
  | DeregisterMailDomainCommandOutput
  | DescribeEmailMonitoringConfigurationCommandOutput
  | DescribeGroupCommandOutput
  | DescribeInboundDmarcSettingsCommandOutput
  | DescribeMailboxExportJobCommandOutput
  | DescribeOrganizationCommandOutput
  | DescribeResourceCommandOutput
  | DescribeUserCommandOutput
  | DisassociateDelegateFromResourceCommandOutput
  | DisassociateMemberFromGroupCommandOutput
  | GetAccessControlEffectCommandOutput
  | GetDefaultRetentionPolicyCommandOutput
  | GetImpersonationRoleCommandOutput
  | GetImpersonationRoleEffectCommandOutput
  | GetMailDomainCommandOutput
  | GetMailboxDetailsCommandOutput
  | GetMobileDeviceAccessEffectCommandOutput
  | GetMobileDeviceAccessOverrideCommandOutput
  | ListAccessControlRulesCommandOutput
  | ListAliasesCommandOutput
  | ListAvailabilityConfigurationsCommandOutput
  | ListGroupMembersCommandOutput
  | ListGroupsCommandOutput
  | ListImpersonationRolesCommandOutput
  | ListMailDomainsCommandOutput
  | ListMailboxExportJobsCommandOutput
  | ListMailboxPermissionsCommandOutput
  | ListMobileDeviceAccessOverridesCommandOutput
  | ListMobileDeviceAccessRulesCommandOutput
  | ListOrganizationsCommandOutput
  | ListResourceDelegatesCommandOutput
  | ListResourcesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsersCommandOutput
  | PutAccessControlRuleCommandOutput
  | PutEmailMonitoringConfigurationCommandOutput
  | PutInboundDmarcSettingsCommandOutput
  | PutMailboxPermissionsCommandOutput
  | PutMobileDeviceAccessOverrideCommandOutput
  | PutRetentionPolicyCommandOutput
  | RegisterMailDomainCommandOutput
  | RegisterToWorkMailCommandOutput
  | ResetPasswordCommandOutput
  | StartMailboxExportJobCommandOutput
  | TagResourceCommandOutput
  | TestAvailabilityConfigurationCommandOutput
  | UntagResourceCommandOutput
  | UpdateAvailabilityConfigurationCommandOutput
  | UpdateDefaultMailDomainCommandOutput
  | UpdateImpersonationRoleCommandOutput
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

type WorkMailClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of WorkMailClient class constructor that set the region, credentials and other options.
 */
export interface WorkMailClientConfig extends WorkMailClientConfigType {}

type WorkMailClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of WorkMailClient class. This is resolved and normalized from the {@link WorkMailClientConfig | constructor configuration interface}.
 */
export interface WorkMailClientResolvedConfig extends WorkMailClientResolvedConfigType {}

/**
 * <p>WorkMail is a secure, managed business email and calendaring service with support for
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
