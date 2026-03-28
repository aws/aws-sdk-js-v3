// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultWorkMailHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput,
} from "./commands/AssociateDelegateToResourceCommand";
import type {
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput,
} from "./commands/AssociateMemberToGroupCommand";
import type {
  AssumeImpersonationRoleCommandInput,
  AssumeImpersonationRoleCommandOutput,
} from "./commands/AssumeImpersonationRoleCommand";
import type {
  CancelMailboxExportJobCommandInput,
  CancelMailboxExportJobCommandOutput,
} from "./commands/CancelMailboxExportJobCommand";
import type { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import type {
  CreateAvailabilityConfigurationCommandInput,
  CreateAvailabilityConfigurationCommandOutput,
} from "./commands/CreateAvailabilityConfigurationCommand";
import type { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import type {
  CreateIdentityCenterApplicationCommandInput,
  CreateIdentityCenterApplicationCommandOutput,
} from "./commands/CreateIdentityCenterApplicationCommand";
import type {
  CreateImpersonationRoleCommandInput,
  CreateImpersonationRoleCommandOutput,
} from "./commands/CreateImpersonationRoleCommand";
import type {
  CreateMobileDeviceAccessRuleCommandInput,
  CreateMobileDeviceAccessRuleCommandOutput,
} from "./commands/CreateMobileDeviceAccessRuleCommand";
import type {
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
} from "./commands/CreateOrganizationCommand";
import type { CreateResourceCommandInput, CreateResourceCommandOutput } from "./commands/CreateResourceCommand";
import type { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import type {
  DeleteAccessControlRuleCommandInput,
  DeleteAccessControlRuleCommandOutput,
} from "./commands/DeleteAccessControlRuleCommand";
import type { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import type {
  DeleteAvailabilityConfigurationCommandInput,
  DeleteAvailabilityConfigurationCommandOutput,
} from "./commands/DeleteAvailabilityConfigurationCommand";
import type {
  DeleteEmailMonitoringConfigurationCommandInput,
  DeleteEmailMonitoringConfigurationCommandOutput,
} from "./commands/DeleteEmailMonitoringConfigurationCommand";
import type { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import type {
  DeleteIdentityCenterApplicationCommandInput,
  DeleteIdentityCenterApplicationCommandOutput,
} from "./commands/DeleteIdentityCenterApplicationCommand";
import type {
  DeleteIdentityProviderConfigurationCommandInput,
  DeleteIdentityProviderConfigurationCommandOutput,
} from "./commands/DeleteIdentityProviderConfigurationCommand";
import type {
  DeleteImpersonationRoleCommandInput,
  DeleteImpersonationRoleCommandOutput,
} from "./commands/DeleteImpersonationRoleCommand";
import type {
  DeleteMailboxPermissionsCommandInput,
  DeleteMailboxPermissionsCommandOutput,
} from "./commands/DeleteMailboxPermissionsCommand";
import type {
  DeleteMobileDeviceAccessOverrideCommandInput,
  DeleteMobileDeviceAccessOverrideCommandOutput,
} from "./commands/DeleteMobileDeviceAccessOverrideCommand";
import type {
  DeleteMobileDeviceAccessRuleCommandInput,
  DeleteMobileDeviceAccessRuleCommandOutput,
} from "./commands/DeleteMobileDeviceAccessRuleCommand";
import type {
  DeleteOrganizationCommandInput,
  DeleteOrganizationCommandOutput,
} from "./commands/DeleteOrganizationCommand";
import type {
  DeletePersonalAccessTokenCommandInput,
  DeletePersonalAccessTokenCommandOutput,
} from "./commands/DeletePersonalAccessTokenCommand";
import type { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "./commands/DeleteResourceCommand";
import type {
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "./commands/DeleteRetentionPolicyCommand";
import type { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import type {
  DeregisterFromWorkMailCommandInput,
  DeregisterFromWorkMailCommandOutput,
} from "./commands/DeregisterFromWorkMailCommand";
import type {
  DeregisterMailDomainCommandInput,
  DeregisterMailDomainCommandOutput,
} from "./commands/DeregisterMailDomainCommand";
import type {
  DescribeEmailMonitoringConfigurationCommandInput,
  DescribeEmailMonitoringConfigurationCommandOutput,
} from "./commands/DescribeEmailMonitoringConfigurationCommand";
import type { DescribeEntityCommandInput, DescribeEntityCommandOutput } from "./commands/DescribeEntityCommand";
import type { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import type {
  DescribeIdentityProviderConfigurationCommandInput,
  DescribeIdentityProviderConfigurationCommandOutput,
} from "./commands/DescribeIdentityProviderConfigurationCommand";
import type {
  DescribeInboundDmarcSettingsCommandInput,
  DescribeInboundDmarcSettingsCommandOutput,
} from "./commands/DescribeInboundDmarcSettingsCommand";
import type {
  DescribeMailboxExportJobCommandInput,
  DescribeMailboxExportJobCommandOutput,
} from "./commands/DescribeMailboxExportJobCommand";
import type {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand";
import type { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand";
import type { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import type {
  DisassociateDelegateFromResourceCommandInput,
  DisassociateDelegateFromResourceCommandOutput,
} from "./commands/DisassociateDelegateFromResourceCommand";
import type {
  DisassociateMemberFromGroupCommandInput,
  DisassociateMemberFromGroupCommandOutput,
} from "./commands/DisassociateMemberFromGroupCommand";
import type {
  GetAccessControlEffectCommandInput,
  GetAccessControlEffectCommandOutput,
} from "./commands/GetAccessControlEffectCommand";
import type {
  GetDefaultRetentionPolicyCommandInput,
  GetDefaultRetentionPolicyCommandOutput,
} from "./commands/GetDefaultRetentionPolicyCommand";
import type {
  GetImpersonationRoleCommandInput,
  GetImpersonationRoleCommandOutput,
} from "./commands/GetImpersonationRoleCommand";
import type {
  GetImpersonationRoleEffectCommandInput,
  GetImpersonationRoleEffectCommandOutput,
} from "./commands/GetImpersonationRoleEffectCommand";
import type {
  GetMailboxDetailsCommandInput,
  GetMailboxDetailsCommandOutput,
} from "./commands/GetMailboxDetailsCommand";
import type { GetMailDomainCommandInput, GetMailDomainCommandOutput } from "./commands/GetMailDomainCommand";
import type {
  GetMobileDeviceAccessEffectCommandInput,
  GetMobileDeviceAccessEffectCommandOutput,
} from "./commands/GetMobileDeviceAccessEffectCommand";
import type {
  GetMobileDeviceAccessOverrideCommandInput,
  GetMobileDeviceAccessOverrideCommandOutput,
} from "./commands/GetMobileDeviceAccessOverrideCommand";
import type {
  GetPersonalAccessTokenMetadataCommandInput,
  GetPersonalAccessTokenMetadataCommandOutput,
} from "./commands/GetPersonalAccessTokenMetadataCommand";
import type {
  ListAccessControlRulesCommandInput,
  ListAccessControlRulesCommandOutput,
} from "./commands/ListAccessControlRulesCommand";
import type { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import type {
  ListAvailabilityConfigurationsCommandInput,
  ListAvailabilityConfigurationsCommandOutput,
} from "./commands/ListAvailabilityConfigurationsCommand";
import type { ListGroupMembersCommandInput, ListGroupMembersCommandOutput } from "./commands/ListGroupMembersCommand";
import type { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import type {
  ListGroupsForEntityCommandInput,
  ListGroupsForEntityCommandOutput,
} from "./commands/ListGroupsForEntityCommand";
import type {
  ListImpersonationRolesCommandInput,
  ListImpersonationRolesCommandOutput,
} from "./commands/ListImpersonationRolesCommand";
import type {
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput,
} from "./commands/ListMailboxExportJobsCommand";
import type {
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
} from "./commands/ListMailboxPermissionsCommand";
import type { ListMailDomainsCommandInput, ListMailDomainsCommandOutput } from "./commands/ListMailDomainsCommand";
import type {
  ListMobileDeviceAccessOverridesCommandInput,
  ListMobileDeviceAccessOverridesCommandOutput,
} from "./commands/ListMobileDeviceAccessOverridesCommand";
import type {
  ListMobileDeviceAccessRulesCommandInput,
  ListMobileDeviceAccessRulesCommandOutput,
} from "./commands/ListMobileDeviceAccessRulesCommand";
import type {
  ListOrganizationsCommandInput,
  ListOrganizationsCommandOutput,
} from "./commands/ListOrganizationsCommand";
import type {
  ListPersonalAccessTokensCommandInput,
  ListPersonalAccessTokensCommandOutput,
} from "./commands/ListPersonalAccessTokensCommand";
import type {
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput,
} from "./commands/ListResourceDelegatesCommand";
import type { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import type {
  PutAccessControlRuleCommandInput,
  PutAccessControlRuleCommandOutput,
} from "./commands/PutAccessControlRuleCommand";
import type {
  PutEmailMonitoringConfigurationCommandInput,
  PutEmailMonitoringConfigurationCommandOutput,
} from "./commands/PutEmailMonitoringConfigurationCommand";
import type {
  PutIdentityProviderConfigurationCommandInput,
  PutIdentityProviderConfigurationCommandOutput,
} from "./commands/PutIdentityProviderConfigurationCommand";
import type {
  PutInboundDmarcSettingsCommandInput,
  PutInboundDmarcSettingsCommandOutput,
} from "./commands/PutInboundDmarcSettingsCommand";
import type {
  PutMailboxPermissionsCommandInput,
  PutMailboxPermissionsCommandOutput,
} from "./commands/PutMailboxPermissionsCommand";
import type {
  PutMobileDeviceAccessOverrideCommandInput,
  PutMobileDeviceAccessOverrideCommandOutput,
} from "./commands/PutMobileDeviceAccessOverrideCommand";
import type {
  PutRetentionPolicyCommandInput,
  PutRetentionPolicyCommandOutput,
} from "./commands/PutRetentionPolicyCommand";
import type {
  RegisterMailDomainCommandInput,
  RegisterMailDomainCommandOutput,
} from "./commands/RegisterMailDomainCommand";
import type {
  RegisterToWorkMailCommandInput,
  RegisterToWorkMailCommandOutput,
} from "./commands/RegisterToWorkMailCommand";
import type { ResetPasswordCommandInput, ResetPasswordCommandOutput } from "./commands/ResetPasswordCommand";
import type {
  StartMailboxExportJobCommandInput,
  StartMailboxExportJobCommandOutput,
} from "./commands/StartMailboxExportJobCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type {
  TestAvailabilityConfigurationCommandInput,
  TestAvailabilityConfigurationCommandOutput,
} from "./commands/TestAvailabilityConfigurationCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAvailabilityConfigurationCommandInput,
  UpdateAvailabilityConfigurationCommandOutput,
} from "./commands/UpdateAvailabilityConfigurationCommand";
import type {
  UpdateDefaultMailDomainCommandInput,
  UpdateDefaultMailDomainCommandOutput,
} from "./commands/UpdateDefaultMailDomainCommand";
import type { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import type {
  UpdateImpersonationRoleCommandInput,
  UpdateImpersonationRoleCommandOutput,
} from "./commands/UpdateImpersonationRoleCommand";
import type {
  UpdateMailboxQuotaCommandInput,
  UpdateMailboxQuotaCommandOutput,
} from "./commands/UpdateMailboxQuotaCommand";
import type {
  UpdateMobileDeviceAccessRuleCommandInput,
  UpdateMobileDeviceAccessRuleCommandOutput,
} from "./commands/UpdateMobileDeviceAccessRuleCommand";
import type {
  UpdatePrimaryEmailAddressCommandInput,
  UpdatePrimaryEmailAddressCommandOutput,
} from "./commands/UpdatePrimaryEmailAddressCommand";
import type { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import type { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateDelegateToResourceCommandInput
  | AssociateMemberToGroupCommandInput
  | AssumeImpersonationRoleCommandInput
  | CancelMailboxExportJobCommandInput
  | CreateAliasCommandInput
  | CreateAvailabilityConfigurationCommandInput
  | CreateGroupCommandInput
  | CreateIdentityCenterApplicationCommandInput
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
  | DeleteIdentityCenterApplicationCommandInput
  | DeleteIdentityProviderConfigurationCommandInput
  | DeleteImpersonationRoleCommandInput
  | DeleteMailboxPermissionsCommandInput
  | DeleteMobileDeviceAccessOverrideCommandInput
  | DeleteMobileDeviceAccessRuleCommandInput
  | DeleteOrganizationCommandInput
  | DeletePersonalAccessTokenCommandInput
  | DeleteResourceCommandInput
  | DeleteRetentionPolicyCommandInput
  | DeleteUserCommandInput
  | DeregisterFromWorkMailCommandInput
  | DeregisterMailDomainCommandInput
  | DescribeEmailMonitoringConfigurationCommandInput
  | DescribeEntityCommandInput
  | DescribeGroupCommandInput
  | DescribeIdentityProviderConfigurationCommandInput
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
  | GetPersonalAccessTokenMetadataCommandInput
  | ListAccessControlRulesCommandInput
  | ListAliasesCommandInput
  | ListAvailabilityConfigurationsCommandInput
  | ListGroupMembersCommandInput
  | ListGroupsCommandInput
  | ListGroupsForEntityCommandInput
  | ListImpersonationRolesCommandInput
  | ListMailDomainsCommandInput
  | ListMailboxExportJobsCommandInput
  | ListMailboxPermissionsCommandInput
  | ListMobileDeviceAccessOverridesCommandInput
  | ListMobileDeviceAccessRulesCommandInput
  | ListOrganizationsCommandInput
  | ListPersonalAccessTokensCommandInput
  | ListResourceDelegatesCommandInput
  | ListResourcesCommandInput
  | ListTagsForResourceCommandInput
  | ListUsersCommandInput
  | PutAccessControlRuleCommandInput
  | PutEmailMonitoringConfigurationCommandInput
  | PutIdentityProviderConfigurationCommandInput
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
  | UpdateGroupCommandInput
  | UpdateImpersonationRoleCommandInput
  | UpdateMailboxQuotaCommandInput
  | UpdateMobileDeviceAccessRuleCommandInput
  | UpdatePrimaryEmailAddressCommandInput
  | UpdateResourceCommandInput
  | UpdateUserCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateDelegateToResourceCommandOutput
  | AssociateMemberToGroupCommandOutput
  | AssumeImpersonationRoleCommandOutput
  | CancelMailboxExportJobCommandOutput
  | CreateAliasCommandOutput
  | CreateAvailabilityConfigurationCommandOutput
  | CreateGroupCommandOutput
  | CreateIdentityCenterApplicationCommandOutput
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
  | DeleteIdentityCenterApplicationCommandOutput
  | DeleteIdentityProviderConfigurationCommandOutput
  | DeleteImpersonationRoleCommandOutput
  | DeleteMailboxPermissionsCommandOutput
  | DeleteMobileDeviceAccessOverrideCommandOutput
  | DeleteMobileDeviceAccessRuleCommandOutput
  | DeleteOrganizationCommandOutput
  | DeletePersonalAccessTokenCommandOutput
  | DeleteResourceCommandOutput
  | DeleteRetentionPolicyCommandOutput
  | DeleteUserCommandOutput
  | DeregisterFromWorkMailCommandOutput
  | DeregisterMailDomainCommandOutput
  | DescribeEmailMonitoringConfigurationCommandOutput
  | DescribeEntityCommandOutput
  | DescribeGroupCommandOutput
  | DescribeIdentityProviderConfigurationCommandOutput
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
  | GetPersonalAccessTokenMetadataCommandOutput
  | ListAccessControlRulesCommandOutput
  | ListAliasesCommandOutput
  | ListAvailabilityConfigurationsCommandOutput
  | ListGroupMembersCommandOutput
  | ListGroupsCommandOutput
  | ListGroupsForEntityCommandOutput
  | ListImpersonationRolesCommandOutput
  | ListMailDomainsCommandOutput
  | ListMailboxExportJobsCommandOutput
  | ListMailboxPermissionsCommandOutput
  | ListMobileDeviceAccessOverridesCommandOutput
  | ListMobileDeviceAccessRulesCommandOutput
  | ListOrganizationsCommandOutput
  | ListPersonalAccessTokensCommandOutput
  | ListResourceDelegatesCommandOutput
  | ListResourcesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsersCommandOutput
  | PutAccessControlRuleCommandOutput
  | PutEmailMonitoringConfigurationCommandOutput
  | PutIdentityProviderConfigurationCommandOutput
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
  | UpdateGroupCommandOutput
  | UpdateImpersonationRoleCommandOutput
  | UpdateMailboxQuotaCommandOutput
  | UpdateMobileDeviceAccessRuleCommandOutput
  | UpdatePrimaryEmailAddressCommandOutput
  | UpdateResourceCommandOutput
  | UpdateUserCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type WorkMailClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of WorkMailClient class constructor that set the region, credentials and other options.
 */
export interface WorkMailClientConfig extends WorkMailClientConfigType {}

/**
 * @public
 */
export type WorkMailClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of WorkMailClient class. This is resolved and normalized from the {@link WorkMailClientConfig | constructor configuration interface}.
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
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<WorkMailClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultWorkMailHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: WorkMailClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
