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
  defaultMailManagerHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateAddonInstanceCommandInput,
  CreateAddonInstanceCommandOutput,
} from "./commands/CreateAddonInstanceCommand";
import type {
  CreateAddonSubscriptionCommandInput,
  CreateAddonSubscriptionCommandOutput,
} from "./commands/CreateAddonSubscriptionCommand";
import type {
  CreateAddressListCommandInput,
  CreateAddressListCommandOutput,
} from "./commands/CreateAddressListCommand";
import type {
  CreateAddressListImportJobCommandInput,
  CreateAddressListImportJobCommandOutput,
} from "./commands/CreateAddressListImportJobCommand";
import type { CreateArchiveCommandInput, CreateArchiveCommandOutput } from "./commands/CreateArchiveCommand";
import type {
  CreateIngressPointCommandInput,
  CreateIngressPointCommandOutput,
} from "./commands/CreateIngressPointCommand";
import type { CreateRelayCommandInput, CreateRelayCommandOutput } from "./commands/CreateRelayCommand";
import type { CreateRuleSetCommandInput, CreateRuleSetCommandOutput } from "./commands/CreateRuleSetCommand";
import type {
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "./commands/CreateTrafficPolicyCommand";
import type {
  DeleteAddonInstanceCommandInput,
  DeleteAddonInstanceCommandOutput,
} from "./commands/DeleteAddonInstanceCommand";
import type {
  DeleteAddonSubscriptionCommandInput,
  DeleteAddonSubscriptionCommandOutput,
} from "./commands/DeleteAddonSubscriptionCommand";
import type {
  DeleteAddressListCommandInput,
  DeleteAddressListCommandOutput,
} from "./commands/DeleteAddressListCommand";
import type { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "./commands/DeleteArchiveCommand";
import type {
  DeleteIngressPointCommandInput,
  DeleteIngressPointCommandOutput,
} from "./commands/DeleteIngressPointCommand";
import type { DeleteRelayCommandInput, DeleteRelayCommandOutput } from "./commands/DeleteRelayCommand";
import type { DeleteRuleSetCommandInput, DeleteRuleSetCommandOutput } from "./commands/DeleteRuleSetCommand";
import type {
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "./commands/DeleteTrafficPolicyCommand";
import type {
  DeregisterMemberFromAddressListCommandInput,
  DeregisterMemberFromAddressListCommandOutput,
} from "./commands/DeregisterMemberFromAddressListCommand";
import type { GetAddonInstanceCommandInput, GetAddonInstanceCommandOutput } from "./commands/GetAddonInstanceCommand";
import type {
  GetAddonSubscriptionCommandInput,
  GetAddonSubscriptionCommandOutput,
} from "./commands/GetAddonSubscriptionCommand";
import type { GetAddressListCommandInput, GetAddressListCommandOutput } from "./commands/GetAddressListCommand";
import type {
  GetAddressListImportJobCommandInput,
  GetAddressListImportJobCommandOutput,
} from "./commands/GetAddressListImportJobCommand";
import type { GetArchiveCommandInput, GetArchiveCommandOutput } from "./commands/GetArchiveCommand";
import type { GetArchiveExportCommandInput, GetArchiveExportCommandOutput } from "./commands/GetArchiveExportCommand";
import type {
  GetArchiveMessageCommandInput,
  GetArchiveMessageCommandOutput,
} from "./commands/GetArchiveMessageCommand";
import type {
  GetArchiveMessageContentCommandInput,
  GetArchiveMessageContentCommandOutput,
} from "./commands/GetArchiveMessageContentCommand";
import type { GetArchiveSearchCommandInput, GetArchiveSearchCommandOutput } from "./commands/GetArchiveSearchCommand";
import type {
  GetArchiveSearchResultsCommandInput,
  GetArchiveSearchResultsCommandOutput,
} from "./commands/GetArchiveSearchResultsCommand";
import type { GetIngressPointCommandInput, GetIngressPointCommandOutput } from "./commands/GetIngressPointCommand";
import type {
  GetMemberOfAddressListCommandInput,
  GetMemberOfAddressListCommandOutput,
} from "./commands/GetMemberOfAddressListCommand";
import type { GetRelayCommandInput, GetRelayCommandOutput } from "./commands/GetRelayCommand";
import type { GetRuleSetCommandInput, GetRuleSetCommandOutput } from "./commands/GetRuleSetCommand";
import type { GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput } from "./commands/GetTrafficPolicyCommand";
import type {
  ListAddonInstancesCommandInput,
  ListAddonInstancesCommandOutput,
} from "./commands/ListAddonInstancesCommand";
import type {
  ListAddonSubscriptionsCommandInput,
  ListAddonSubscriptionsCommandOutput,
} from "./commands/ListAddonSubscriptionsCommand";
import type {
  ListAddressListImportJobsCommandInput,
  ListAddressListImportJobsCommandOutput,
} from "./commands/ListAddressListImportJobsCommand";
import type { ListAddressListsCommandInput, ListAddressListsCommandOutput } from "./commands/ListAddressListsCommand";
import type {
  ListArchiveExportsCommandInput,
  ListArchiveExportsCommandOutput,
} from "./commands/ListArchiveExportsCommand";
import type { ListArchivesCommandInput, ListArchivesCommandOutput } from "./commands/ListArchivesCommand";
import type {
  ListArchiveSearchesCommandInput,
  ListArchiveSearchesCommandOutput,
} from "./commands/ListArchiveSearchesCommand";
import type {
  ListIngressPointsCommandInput,
  ListIngressPointsCommandOutput,
} from "./commands/ListIngressPointsCommand";
import type {
  ListMembersOfAddressListCommandInput,
  ListMembersOfAddressListCommandOutput,
} from "./commands/ListMembersOfAddressListCommand";
import type { ListRelaysCommandInput, ListRelaysCommandOutput } from "./commands/ListRelaysCommand";
import type { ListRuleSetsCommandInput, ListRuleSetsCommandOutput } from "./commands/ListRuleSetsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "./commands/ListTrafficPoliciesCommand";
import type {
  RegisterMemberToAddressListCommandInput,
  RegisterMemberToAddressListCommandOutput,
} from "./commands/RegisterMemberToAddressListCommand";
import type {
  StartAddressListImportJobCommandInput,
  StartAddressListImportJobCommandOutput,
} from "./commands/StartAddressListImportJobCommand";
import type {
  StartArchiveExportCommandInput,
  StartArchiveExportCommandOutput,
} from "./commands/StartArchiveExportCommand";
import type {
  StartArchiveSearchCommandInput,
  StartArchiveSearchCommandOutput,
} from "./commands/StartArchiveSearchCommand";
import type {
  StopAddressListImportJobCommandInput,
  StopAddressListImportJobCommandOutput,
} from "./commands/StopAddressListImportJobCommand";
import type {
  StopArchiveExportCommandInput,
  StopArchiveExportCommandOutput,
} from "./commands/StopArchiveExportCommand";
import type {
  StopArchiveSearchCommandInput,
  StopArchiveSearchCommandOutput,
} from "./commands/StopArchiveSearchCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateArchiveCommandInput, UpdateArchiveCommandOutput } from "./commands/UpdateArchiveCommand";
import type {
  UpdateIngressPointCommandInput,
  UpdateIngressPointCommandOutput,
} from "./commands/UpdateIngressPointCommand";
import type { UpdateRelayCommandInput, UpdateRelayCommandOutput } from "./commands/UpdateRelayCommand";
import type { UpdateRuleSetCommandInput, UpdateRuleSetCommandOutput } from "./commands/UpdateRuleSetCommand";
import type {
  UpdateTrafficPolicyCommandInput,
  UpdateTrafficPolicyCommandOutput,
} from "./commands/UpdateTrafficPolicyCommand";
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
  | CreateAddonInstanceCommandInput
  | CreateAddonSubscriptionCommandInput
  | CreateAddressListCommandInput
  | CreateAddressListImportJobCommandInput
  | CreateArchiveCommandInput
  | CreateIngressPointCommandInput
  | CreateRelayCommandInput
  | CreateRuleSetCommandInput
  | CreateTrafficPolicyCommandInput
  | DeleteAddonInstanceCommandInput
  | DeleteAddonSubscriptionCommandInput
  | DeleteAddressListCommandInput
  | DeleteArchiveCommandInput
  | DeleteIngressPointCommandInput
  | DeleteRelayCommandInput
  | DeleteRuleSetCommandInput
  | DeleteTrafficPolicyCommandInput
  | DeregisterMemberFromAddressListCommandInput
  | GetAddonInstanceCommandInput
  | GetAddonSubscriptionCommandInput
  | GetAddressListCommandInput
  | GetAddressListImportJobCommandInput
  | GetArchiveCommandInput
  | GetArchiveExportCommandInput
  | GetArchiveMessageCommandInput
  | GetArchiveMessageContentCommandInput
  | GetArchiveSearchCommandInput
  | GetArchiveSearchResultsCommandInput
  | GetIngressPointCommandInput
  | GetMemberOfAddressListCommandInput
  | GetRelayCommandInput
  | GetRuleSetCommandInput
  | GetTrafficPolicyCommandInput
  | ListAddonInstancesCommandInput
  | ListAddonSubscriptionsCommandInput
  | ListAddressListImportJobsCommandInput
  | ListAddressListsCommandInput
  | ListArchiveExportsCommandInput
  | ListArchiveSearchesCommandInput
  | ListArchivesCommandInput
  | ListIngressPointsCommandInput
  | ListMembersOfAddressListCommandInput
  | ListRelaysCommandInput
  | ListRuleSetsCommandInput
  | ListTagsForResourceCommandInput
  | ListTrafficPoliciesCommandInput
  | RegisterMemberToAddressListCommandInput
  | StartAddressListImportJobCommandInput
  | StartArchiveExportCommandInput
  | StartArchiveSearchCommandInput
  | StopAddressListImportJobCommandInput
  | StopArchiveExportCommandInput
  | StopArchiveSearchCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateArchiveCommandInput
  | UpdateIngressPointCommandInput
  | UpdateRelayCommandInput
  | UpdateRuleSetCommandInput
  | UpdateTrafficPolicyCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAddonInstanceCommandOutput
  | CreateAddonSubscriptionCommandOutput
  | CreateAddressListCommandOutput
  | CreateAddressListImportJobCommandOutput
  | CreateArchiveCommandOutput
  | CreateIngressPointCommandOutput
  | CreateRelayCommandOutput
  | CreateRuleSetCommandOutput
  | CreateTrafficPolicyCommandOutput
  | DeleteAddonInstanceCommandOutput
  | DeleteAddonSubscriptionCommandOutput
  | DeleteAddressListCommandOutput
  | DeleteArchiveCommandOutput
  | DeleteIngressPointCommandOutput
  | DeleteRelayCommandOutput
  | DeleteRuleSetCommandOutput
  | DeleteTrafficPolicyCommandOutput
  | DeregisterMemberFromAddressListCommandOutput
  | GetAddonInstanceCommandOutput
  | GetAddonSubscriptionCommandOutput
  | GetAddressListCommandOutput
  | GetAddressListImportJobCommandOutput
  | GetArchiveCommandOutput
  | GetArchiveExportCommandOutput
  | GetArchiveMessageCommandOutput
  | GetArchiveMessageContentCommandOutput
  | GetArchiveSearchCommandOutput
  | GetArchiveSearchResultsCommandOutput
  | GetIngressPointCommandOutput
  | GetMemberOfAddressListCommandOutput
  | GetRelayCommandOutput
  | GetRuleSetCommandOutput
  | GetTrafficPolicyCommandOutput
  | ListAddonInstancesCommandOutput
  | ListAddonSubscriptionsCommandOutput
  | ListAddressListImportJobsCommandOutput
  | ListAddressListsCommandOutput
  | ListArchiveExportsCommandOutput
  | ListArchiveSearchesCommandOutput
  | ListArchivesCommandOutput
  | ListIngressPointsCommandOutput
  | ListMembersOfAddressListCommandOutput
  | ListRelaysCommandOutput
  | ListRuleSetsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrafficPoliciesCommandOutput
  | RegisterMemberToAddressListCommandOutput
  | StartAddressListImportJobCommandOutput
  | StartArchiveExportCommandOutput
  | StartArchiveSearchCommandOutput
  | StopAddressListImportJobCommandOutput
  | StopArchiveExportCommandOutput
  | StopArchiveSearchCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateArchiveCommandOutput
  | UpdateIngressPointCommandOutput
  | UpdateRelayCommandOutput
  | UpdateRuleSetCommandOutput
  | UpdateTrafficPolicyCommandOutput;

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
export type MailManagerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of MailManagerClient class constructor that set the region, credentials and other options.
 */
export interface MailManagerClientConfig extends MailManagerClientConfigType {}

/**
 * @public
 */
export type MailManagerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of MailManagerClient class. This is resolved and normalized from the {@link MailManagerClientConfig | constructor configuration interface}.
 */
export interface MailManagerClientResolvedConfig extends MailManagerClientResolvedConfigType {}

/**
 * <fullname>Amazon SES Mail Manager API</fullname> <p>The Amazon SES Mail Manager API contains operations and data types that comprise the Mail Manager feature of <a href="http://aws.amazon.com/ses">Amazon Simple Email Service (SES)</a>.</p> <p>Mail Manager is a set of Amazon SES email gateway features designed to help you strengthen your organization's email infrastructure, simplify email workflow management, and streamline email compliance control. To learn more, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/eb.html">Mail Manager chapter</a> in the <i>Amazon SES Developer Guide</i>.</p>
 * @public
 */
export class MailManagerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MailManagerClientResolvedConfig
> {
  /**
   * The resolved configuration of MailManagerClient class. This is resolved and normalized from the {@link MailManagerClientConfig | constructor configuration interface}.
   */
  readonly config: MailManagerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<MailManagerClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultMailManagerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: MailManagerClientResolvedConfig) =>
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
