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
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultSSOAdminHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput,
} from "./commands/AttachCustomerManagedPolicyReferenceToPermissionSetCommand";
import {
  AttachManagedPolicyToPermissionSetCommandInput,
  AttachManagedPolicyToPermissionSetCommandOutput,
} from "./commands/AttachManagedPolicyToPermissionSetCommand";
import {
  CreateAccountAssignmentCommandInput,
  CreateAccountAssignmentCommandOutput,
} from "./commands/CreateAccountAssignmentCommand";
import {
  CreateApplicationAssignmentCommandInput,
  CreateApplicationAssignmentCommandOutput,
} from "./commands/CreateApplicationAssignmentCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import {
  CreateInstanceAccessControlAttributeConfigurationCommandInput,
  CreateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/CreateInstanceAccessControlAttributeConfigurationCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "./commands/CreateInstanceCommand";
import {
  CreatePermissionSetCommandInput,
  CreatePermissionSetCommandOutput,
} from "./commands/CreatePermissionSetCommand";
import {
  CreateTrustedTokenIssuerCommandInput,
  CreateTrustedTokenIssuerCommandOutput,
} from "./commands/CreateTrustedTokenIssuerCommand";
import {
  DeleteAccountAssignmentCommandInput,
  DeleteAccountAssignmentCommandOutput,
} from "./commands/DeleteAccountAssignmentCommand";
import {
  DeleteApplicationAccessScopeCommandInput,
  DeleteApplicationAccessScopeCommandOutput,
} from "./commands/DeleteApplicationAccessScopeCommand";
import {
  DeleteApplicationAssignmentCommandInput,
  DeleteApplicationAssignmentCommandOutput,
} from "./commands/DeleteApplicationAssignmentCommand";
import {
  DeleteApplicationAuthenticationMethodCommandInput,
  DeleteApplicationAuthenticationMethodCommandOutput,
} from "./commands/DeleteApplicationAuthenticationMethodCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import {
  DeleteApplicationGrantCommandInput,
  DeleteApplicationGrantCommandOutput,
} from "./commands/DeleteApplicationGrantCommand";
import {
  DeleteInlinePolicyFromPermissionSetCommandInput,
  DeleteInlinePolicyFromPermissionSetCommandOutput,
} from "./commands/DeleteInlinePolicyFromPermissionSetCommand";
import {
  DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  DeleteInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/DeleteInstanceAccessControlAttributeConfigurationCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import {
  DeletePermissionsBoundaryFromPermissionSetCommandInput,
  DeletePermissionsBoundaryFromPermissionSetCommandOutput,
} from "./commands/DeletePermissionsBoundaryFromPermissionSetCommand";
import {
  DeletePermissionSetCommandInput,
  DeletePermissionSetCommandOutput,
} from "./commands/DeletePermissionSetCommand";
import {
  DeleteTrustedTokenIssuerCommandInput,
  DeleteTrustedTokenIssuerCommandOutput,
} from "./commands/DeleteTrustedTokenIssuerCommand";
import {
  DescribeAccountAssignmentCreationStatusCommandInput,
  DescribeAccountAssignmentCreationStatusCommandOutput,
} from "./commands/DescribeAccountAssignmentCreationStatusCommand";
import {
  DescribeAccountAssignmentDeletionStatusCommandInput,
  DescribeAccountAssignmentDeletionStatusCommandOutput,
} from "./commands/DescribeAccountAssignmentDeletionStatusCommand";
import {
  DescribeApplicationAssignmentCommandInput,
  DescribeApplicationAssignmentCommandOutput,
} from "./commands/DescribeApplicationAssignmentCommand";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "./commands/DescribeApplicationCommand";
import {
  DescribeApplicationProviderCommandInput,
  DescribeApplicationProviderCommandOutput,
} from "./commands/DescribeApplicationProviderCommand";
import {
  DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/DescribeInstanceAccessControlAttributeConfigurationCommand";
import { DescribeInstanceCommandInput, DescribeInstanceCommandOutput } from "./commands/DescribeInstanceCommand";
import {
  DescribePermissionSetCommandInput,
  DescribePermissionSetCommandOutput,
} from "./commands/DescribePermissionSetCommand";
import {
  DescribePermissionSetProvisioningStatusCommandInput,
  DescribePermissionSetProvisioningStatusCommandOutput,
} from "./commands/DescribePermissionSetProvisioningStatusCommand";
import {
  DescribeTrustedTokenIssuerCommandInput,
  DescribeTrustedTokenIssuerCommandOutput,
} from "./commands/DescribeTrustedTokenIssuerCommand";
import {
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput,
} from "./commands/DetachCustomerManagedPolicyReferenceFromPermissionSetCommand";
import {
  DetachManagedPolicyFromPermissionSetCommandInput,
  DetachManagedPolicyFromPermissionSetCommandOutput,
} from "./commands/DetachManagedPolicyFromPermissionSetCommand";
import {
  GetApplicationAccessScopeCommandInput,
  GetApplicationAccessScopeCommandOutput,
} from "./commands/GetApplicationAccessScopeCommand";
import {
  GetApplicationAssignmentConfigurationCommandInput,
  GetApplicationAssignmentConfigurationCommandOutput,
} from "./commands/GetApplicationAssignmentConfigurationCommand";
import {
  GetApplicationAuthenticationMethodCommandInput,
  GetApplicationAuthenticationMethodCommandOutput,
} from "./commands/GetApplicationAuthenticationMethodCommand";
import {
  GetApplicationGrantCommandInput,
  GetApplicationGrantCommandOutput,
} from "./commands/GetApplicationGrantCommand";
import {
  GetApplicationSessionConfigurationCommandInput,
  GetApplicationSessionConfigurationCommandOutput,
} from "./commands/GetApplicationSessionConfigurationCommand";
import {
  GetInlinePolicyForPermissionSetCommandInput,
  GetInlinePolicyForPermissionSetCommandOutput,
} from "./commands/GetInlinePolicyForPermissionSetCommand";
import {
  GetPermissionsBoundaryForPermissionSetCommandInput,
  GetPermissionsBoundaryForPermissionSetCommandOutput,
} from "./commands/GetPermissionsBoundaryForPermissionSetCommand";
import {
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput,
} from "./commands/ListAccountAssignmentCreationStatusCommand";
import {
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput,
} from "./commands/ListAccountAssignmentDeletionStatusCommand";
import {
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
} from "./commands/ListAccountAssignmentsCommand";
import {
  ListAccountAssignmentsForPrincipalCommandInput,
  ListAccountAssignmentsForPrincipalCommandOutput,
} from "./commands/ListAccountAssignmentsForPrincipalCommand";
import {
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput,
} from "./commands/ListAccountsForProvisionedPermissionSetCommand";
import {
  ListApplicationAccessScopesCommandInput,
  ListApplicationAccessScopesCommandOutput,
} from "./commands/ListApplicationAccessScopesCommand";
import {
  ListApplicationAssignmentsCommandInput,
  ListApplicationAssignmentsCommandOutput,
} from "./commands/ListApplicationAssignmentsCommand";
import {
  ListApplicationAssignmentsForPrincipalCommandInput,
  ListApplicationAssignmentsForPrincipalCommandOutput,
} from "./commands/ListApplicationAssignmentsForPrincipalCommand";
import {
  ListApplicationAuthenticationMethodsCommandInput,
  ListApplicationAuthenticationMethodsCommandOutput,
} from "./commands/ListApplicationAuthenticationMethodsCommand";
import {
  ListApplicationGrantsCommandInput,
  ListApplicationGrantsCommandOutput,
} from "./commands/ListApplicationGrantsCommand";
import {
  ListApplicationProvidersCommandInput,
  ListApplicationProvidersCommandOutput,
} from "./commands/ListApplicationProvidersCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import {
  ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
} from "./commands/ListCustomerManagedPolicyReferencesInPermissionSetCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import {
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput,
} from "./commands/ListManagedPoliciesInPermissionSetCommand";
import {
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
} from "./commands/ListPermissionSetProvisioningStatusCommand";
import { ListPermissionSetsCommandInput, ListPermissionSetsCommandOutput } from "./commands/ListPermissionSetsCommand";
import {
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
} from "./commands/ListPermissionSetsProvisionedToAccountCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrustedTokenIssuersCommandInput,
  ListTrustedTokenIssuersCommandOutput,
} from "./commands/ListTrustedTokenIssuersCommand";
import {
  ProvisionPermissionSetCommandInput,
  ProvisionPermissionSetCommandOutput,
} from "./commands/ProvisionPermissionSetCommand";
import {
  PutApplicationAccessScopeCommandInput,
  PutApplicationAccessScopeCommandOutput,
} from "./commands/PutApplicationAccessScopeCommand";
import {
  PutApplicationAssignmentConfigurationCommandInput,
  PutApplicationAssignmentConfigurationCommandOutput,
} from "./commands/PutApplicationAssignmentConfigurationCommand";
import {
  PutApplicationAuthenticationMethodCommandInput,
  PutApplicationAuthenticationMethodCommandOutput,
} from "./commands/PutApplicationAuthenticationMethodCommand";
import {
  PutApplicationGrantCommandInput,
  PutApplicationGrantCommandOutput,
} from "./commands/PutApplicationGrantCommand";
import {
  PutApplicationSessionConfigurationCommandInput,
  PutApplicationSessionConfigurationCommandOutput,
} from "./commands/PutApplicationSessionConfigurationCommand";
import {
  PutInlinePolicyToPermissionSetCommandInput,
  PutInlinePolicyToPermissionSetCommandOutput,
} from "./commands/PutInlinePolicyToPermissionSetCommand";
import {
  PutPermissionsBoundaryToPermissionSetCommandInput,
  PutPermissionsBoundaryToPermissionSetCommandOutput,
} from "./commands/PutPermissionsBoundaryToPermissionSetCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import {
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/UpdateInstanceAccessControlAttributeConfigurationCommand";
import { UpdateInstanceCommandInput, UpdateInstanceCommandOutput } from "./commands/UpdateInstanceCommand";
import {
  UpdatePermissionSetCommandInput,
  UpdatePermissionSetCommandOutput,
} from "./commands/UpdatePermissionSetCommand";
import {
  UpdateTrustedTokenIssuerCommandInput,
  UpdateTrustedTokenIssuerCommandOutput,
} from "./commands/UpdateTrustedTokenIssuerCommand";
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
  | AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput
  | AttachManagedPolicyToPermissionSetCommandInput
  | CreateAccountAssignmentCommandInput
  | CreateApplicationAssignmentCommandInput
  | CreateApplicationCommandInput
  | CreateInstanceAccessControlAttributeConfigurationCommandInput
  | CreateInstanceCommandInput
  | CreatePermissionSetCommandInput
  | CreateTrustedTokenIssuerCommandInput
  | DeleteAccountAssignmentCommandInput
  | DeleteApplicationAccessScopeCommandInput
  | DeleteApplicationAssignmentCommandInput
  | DeleteApplicationAuthenticationMethodCommandInput
  | DeleteApplicationCommandInput
  | DeleteApplicationGrantCommandInput
  | DeleteInlinePolicyFromPermissionSetCommandInput
  | DeleteInstanceAccessControlAttributeConfigurationCommandInput
  | DeleteInstanceCommandInput
  | DeletePermissionSetCommandInput
  | DeletePermissionsBoundaryFromPermissionSetCommandInput
  | DeleteTrustedTokenIssuerCommandInput
  | DescribeAccountAssignmentCreationStatusCommandInput
  | DescribeAccountAssignmentDeletionStatusCommandInput
  | DescribeApplicationAssignmentCommandInput
  | DescribeApplicationCommandInput
  | DescribeApplicationProviderCommandInput
  | DescribeInstanceAccessControlAttributeConfigurationCommandInput
  | DescribeInstanceCommandInput
  | DescribePermissionSetCommandInput
  | DescribePermissionSetProvisioningStatusCommandInput
  | DescribeTrustedTokenIssuerCommandInput
  | DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput
  | DetachManagedPolicyFromPermissionSetCommandInput
  | GetApplicationAccessScopeCommandInput
  | GetApplicationAssignmentConfigurationCommandInput
  | GetApplicationAuthenticationMethodCommandInput
  | GetApplicationGrantCommandInput
  | GetApplicationSessionConfigurationCommandInput
  | GetInlinePolicyForPermissionSetCommandInput
  | GetPermissionsBoundaryForPermissionSetCommandInput
  | ListAccountAssignmentCreationStatusCommandInput
  | ListAccountAssignmentDeletionStatusCommandInput
  | ListAccountAssignmentsCommandInput
  | ListAccountAssignmentsForPrincipalCommandInput
  | ListAccountsForProvisionedPermissionSetCommandInput
  | ListApplicationAccessScopesCommandInput
  | ListApplicationAssignmentsCommandInput
  | ListApplicationAssignmentsForPrincipalCommandInput
  | ListApplicationAuthenticationMethodsCommandInput
  | ListApplicationGrantsCommandInput
  | ListApplicationProvidersCommandInput
  | ListApplicationsCommandInput
  | ListCustomerManagedPolicyReferencesInPermissionSetCommandInput
  | ListInstancesCommandInput
  | ListManagedPoliciesInPermissionSetCommandInput
  | ListPermissionSetProvisioningStatusCommandInput
  | ListPermissionSetsCommandInput
  | ListPermissionSetsProvisionedToAccountCommandInput
  | ListTagsForResourceCommandInput
  | ListTrustedTokenIssuersCommandInput
  | ProvisionPermissionSetCommandInput
  | PutApplicationAccessScopeCommandInput
  | PutApplicationAssignmentConfigurationCommandInput
  | PutApplicationAuthenticationMethodCommandInput
  | PutApplicationGrantCommandInput
  | PutApplicationSessionConfigurationCommandInput
  | PutInlinePolicyToPermissionSetCommandInput
  | PutPermissionsBoundaryToPermissionSetCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateInstanceAccessControlAttributeConfigurationCommandInput
  | UpdateInstanceCommandInput
  | UpdatePermissionSetCommandInput
  | UpdateTrustedTokenIssuerCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput
  | AttachManagedPolicyToPermissionSetCommandOutput
  | CreateAccountAssignmentCommandOutput
  | CreateApplicationAssignmentCommandOutput
  | CreateApplicationCommandOutput
  | CreateInstanceAccessControlAttributeConfigurationCommandOutput
  | CreateInstanceCommandOutput
  | CreatePermissionSetCommandOutput
  | CreateTrustedTokenIssuerCommandOutput
  | DeleteAccountAssignmentCommandOutput
  | DeleteApplicationAccessScopeCommandOutput
  | DeleteApplicationAssignmentCommandOutput
  | DeleteApplicationAuthenticationMethodCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteApplicationGrantCommandOutput
  | DeleteInlinePolicyFromPermissionSetCommandOutput
  | DeleteInstanceAccessControlAttributeConfigurationCommandOutput
  | DeleteInstanceCommandOutput
  | DeletePermissionSetCommandOutput
  | DeletePermissionsBoundaryFromPermissionSetCommandOutput
  | DeleteTrustedTokenIssuerCommandOutput
  | DescribeAccountAssignmentCreationStatusCommandOutput
  | DescribeAccountAssignmentDeletionStatusCommandOutput
  | DescribeApplicationAssignmentCommandOutput
  | DescribeApplicationCommandOutput
  | DescribeApplicationProviderCommandOutput
  | DescribeInstanceAccessControlAttributeConfigurationCommandOutput
  | DescribeInstanceCommandOutput
  | DescribePermissionSetCommandOutput
  | DescribePermissionSetProvisioningStatusCommandOutput
  | DescribeTrustedTokenIssuerCommandOutput
  | DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput
  | DetachManagedPolicyFromPermissionSetCommandOutput
  | GetApplicationAccessScopeCommandOutput
  | GetApplicationAssignmentConfigurationCommandOutput
  | GetApplicationAuthenticationMethodCommandOutput
  | GetApplicationGrantCommandOutput
  | GetApplicationSessionConfigurationCommandOutput
  | GetInlinePolicyForPermissionSetCommandOutput
  | GetPermissionsBoundaryForPermissionSetCommandOutput
  | ListAccountAssignmentCreationStatusCommandOutput
  | ListAccountAssignmentDeletionStatusCommandOutput
  | ListAccountAssignmentsCommandOutput
  | ListAccountAssignmentsForPrincipalCommandOutput
  | ListAccountsForProvisionedPermissionSetCommandOutput
  | ListApplicationAccessScopesCommandOutput
  | ListApplicationAssignmentsCommandOutput
  | ListApplicationAssignmentsForPrincipalCommandOutput
  | ListApplicationAuthenticationMethodsCommandOutput
  | ListApplicationGrantsCommandOutput
  | ListApplicationProvidersCommandOutput
  | ListApplicationsCommandOutput
  | ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput
  | ListInstancesCommandOutput
  | ListManagedPoliciesInPermissionSetCommandOutput
  | ListPermissionSetProvisioningStatusCommandOutput
  | ListPermissionSetsCommandOutput
  | ListPermissionSetsProvisionedToAccountCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrustedTokenIssuersCommandOutput
  | ProvisionPermissionSetCommandOutput
  | PutApplicationAccessScopeCommandOutput
  | PutApplicationAssignmentConfigurationCommandOutput
  | PutApplicationAuthenticationMethodCommandOutput
  | PutApplicationGrantCommandOutput
  | PutApplicationSessionConfigurationCommandOutput
  | PutInlinePolicyToPermissionSetCommandOutput
  | PutPermissionsBoundaryToPermissionSetCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateInstanceAccessControlAttributeConfigurationCommandOutput
  | UpdateInstanceCommandOutput
  | UpdatePermissionSetCommandOutput
  | UpdateTrustedTokenIssuerCommandOutput;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type SSOAdminClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of SSOAdminClient class constructor that set the region, credentials and other options.
 */
export interface SSOAdminClientConfig extends SSOAdminClientConfigType {}

/**
 * @public
 */
export type SSOAdminClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of SSOAdminClient class. This is resolved and normalized from the {@link SSOAdminClientConfig | constructor configuration interface}.
 */
export interface SSOAdminClientResolvedConfig extends SSOAdminClientResolvedConfigType {}

/**
 * <p>IAM Identity Center is the Amazon Web Services solution for connecting your workforce users to Amazon Web Services managed applications and other Amazon Web Services resources. You can connect your existing identity provider and synchronize users and groups from your directory, or create and manage your users directly in IAM Identity Center. You can then use IAM Identity Center for either or both of the following:</p> <ul> <li> <p>User access to applications</p> </li> <li> <p>User access to Amazon Web Services accounts</p> </li> </ul> <p>This guide provides information about single sign-on operations that you can use for access to applications and Amazon Web Services accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <note> <p>IAM Identity Center uses the <code>sso</code> and <code>identitystore</code> API namespaces.</p> </note> <p>Many API operations for IAM Identity Center rely on identifiers for users and groups, known as principals. For more information about how to work with principals and principal IDs in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API Reference</a>.</p> <note> <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>
 * @public
 */
export class SSOAdminClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOAdminClientResolvedConfig
> {
  /**
   * The resolved configuration of SSOAdminClient class. This is resolved and normalized from the {@link SSOAdminClientConfig | constructor configuration interface}.
   */
  readonly config: SSOAdminClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<SSOAdminClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultSSOAdminHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: SSOAdminClientResolvedConfig) =>
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
