// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultWorkMailHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
  CreateIdentityCenterApplicationCommandInput,
  CreateIdentityCenterApplicationCommandOutput,
} from "./commands/CreateIdentityCenterApplicationCommand";
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
  DeleteIdentityCenterApplicationCommandInput,
  DeleteIdentityCenterApplicationCommandOutput,
} from "./commands/DeleteIdentityCenterApplicationCommand";
import {
  DeleteIdentityProviderConfigurationCommandInput,
  DeleteIdentityProviderConfigurationCommandOutput,
} from "./commands/DeleteIdentityProviderConfigurationCommand";
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
import {
  DeletePersonalAccessTokenCommandInput,
  DeletePersonalAccessTokenCommandOutput,
} from "./commands/DeletePersonalAccessTokenCommand";
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
import { DescribeEntityCommandInput, DescribeEntityCommandOutput } from "./commands/DescribeEntityCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import {
  DescribeIdentityProviderConfigurationCommandInput,
  DescribeIdentityProviderConfigurationCommandOutput,
} from "./commands/DescribeIdentityProviderConfigurationCommand";
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
  GetPersonalAccessTokenMetadataCommandInput,
  GetPersonalAccessTokenMetadataCommandOutput,
} from "./commands/GetPersonalAccessTokenMetadataCommand";
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
  ListGroupsForEntityCommandInput,
  ListGroupsForEntityCommandOutput,
} from "./commands/ListGroupsForEntityCommand";
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
  ListPersonalAccessTokensCommandInput,
  ListPersonalAccessTokensCommandOutput,
} from "./commands/ListPersonalAccessTokensCommand";
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
  PutIdentityProviderConfigurationCommandInput,
  PutIdentityProviderConfigurationCommandOutput,
} from "./commands/PutIdentityProviderConfigurationCommand";
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
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
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
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6, { client: () => this });
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
