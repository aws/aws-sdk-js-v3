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
  defaultMailManagerHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  CreateAddonInstanceCommandInput,
  CreateAddonInstanceCommandOutput,
} from "./commands/CreateAddonInstanceCommand";
import {
  CreateAddonSubscriptionCommandInput,
  CreateAddonSubscriptionCommandOutput,
} from "./commands/CreateAddonSubscriptionCommand";
import { CreateArchiveCommandInput, CreateArchiveCommandOutput } from "./commands/CreateArchiveCommand";
import { CreateIngressPointCommandInput, CreateIngressPointCommandOutput } from "./commands/CreateIngressPointCommand";
import { CreateRelayCommandInput, CreateRelayCommandOutput } from "./commands/CreateRelayCommand";
import { CreateRuleSetCommandInput, CreateRuleSetCommandOutput } from "./commands/CreateRuleSetCommand";
import {
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "./commands/CreateTrafficPolicyCommand";
import {
  DeleteAddonInstanceCommandInput,
  DeleteAddonInstanceCommandOutput,
} from "./commands/DeleteAddonInstanceCommand";
import {
  DeleteAddonSubscriptionCommandInput,
  DeleteAddonSubscriptionCommandOutput,
} from "./commands/DeleteAddonSubscriptionCommand";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "./commands/DeleteArchiveCommand";
import { DeleteIngressPointCommandInput, DeleteIngressPointCommandOutput } from "./commands/DeleteIngressPointCommand";
import { DeleteRelayCommandInput, DeleteRelayCommandOutput } from "./commands/DeleteRelayCommand";
import { DeleteRuleSetCommandInput, DeleteRuleSetCommandOutput } from "./commands/DeleteRuleSetCommand";
import {
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "./commands/DeleteTrafficPolicyCommand";
import { GetAddonInstanceCommandInput, GetAddonInstanceCommandOutput } from "./commands/GetAddonInstanceCommand";
import {
  GetAddonSubscriptionCommandInput,
  GetAddonSubscriptionCommandOutput,
} from "./commands/GetAddonSubscriptionCommand";
import { GetArchiveCommandInput, GetArchiveCommandOutput } from "./commands/GetArchiveCommand";
import { GetArchiveExportCommandInput, GetArchiveExportCommandOutput } from "./commands/GetArchiveExportCommand";
import { GetArchiveMessageCommandInput, GetArchiveMessageCommandOutput } from "./commands/GetArchiveMessageCommand";
import {
  GetArchiveMessageContentCommandInput,
  GetArchiveMessageContentCommandOutput,
} from "./commands/GetArchiveMessageContentCommand";
import { GetArchiveSearchCommandInput, GetArchiveSearchCommandOutput } from "./commands/GetArchiveSearchCommand";
import {
  GetArchiveSearchResultsCommandInput,
  GetArchiveSearchResultsCommandOutput,
} from "./commands/GetArchiveSearchResultsCommand";
import { GetIngressPointCommandInput, GetIngressPointCommandOutput } from "./commands/GetIngressPointCommand";
import { GetRelayCommandInput, GetRelayCommandOutput } from "./commands/GetRelayCommand";
import { GetRuleSetCommandInput, GetRuleSetCommandOutput } from "./commands/GetRuleSetCommand";
import { GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput } from "./commands/GetTrafficPolicyCommand";
import { ListAddonInstancesCommandInput, ListAddonInstancesCommandOutput } from "./commands/ListAddonInstancesCommand";
import {
  ListAddonSubscriptionsCommandInput,
  ListAddonSubscriptionsCommandOutput,
} from "./commands/ListAddonSubscriptionsCommand";
import { ListArchiveExportsCommandInput, ListArchiveExportsCommandOutput } from "./commands/ListArchiveExportsCommand";
import { ListArchivesCommandInput, ListArchivesCommandOutput } from "./commands/ListArchivesCommand";
import {
  ListArchiveSearchesCommandInput,
  ListArchiveSearchesCommandOutput,
} from "./commands/ListArchiveSearchesCommand";
import { ListIngressPointsCommandInput, ListIngressPointsCommandOutput } from "./commands/ListIngressPointsCommand";
import { ListRelaysCommandInput, ListRelaysCommandOutput } from "./commands/ListRelaysCommand";
import { ListRuleSetsCommandInput, ListRuleSetsCommandOutput } from "./commands/ListRuleSetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "./commands/ListTrafficPoliciesCommand";
import { StartArchiveExportCommandInput, StartArchiveExportCommandOutput } from "./commands/StartArchiveExportCommand";
import { StartArchiveSearchCommandInput, StartArchiveSearchCommandOutput } from "./commands/StartArchiveSearchCommand";
import { StopArchiveExportCommandInput, StopArchiveExportCommandOutput } from "./commands/StopArchiveExportCommand";
import { StopArchiveSearchCommandInput, StopArchiveSearchCommandOutput } from "./commands/StopArchiveSearchCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateArchiveCommandInput, UpdateArchiveCommandOutput } from "./commands/UpdateArchiveCommand";
import { UpdateIngressPointCommandInput, UpdateIngressPointCommandOutput } from "./commands/UpdateIngressPointCommand";
import { UpdateRelayCommandInput, UpdateRelayCommandOutput } from "./commands/UpdateRelayCommand";
import { UpdateRuleSetCommandInput, UpdateRuleSetCommandOutput } from "./commands/UpdateRuleSetCommand";
import {
  UpdateTrafficPolicyCommandInput,
  UpdateTrafficPolicyCommandOutput,
} from "./commands/UpdateTrafficPolicyCommand";
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
  | CreateAddonInstanceCommandInput
  | CreateAddonSubscriptionCommandInput
  | CreateArchiveCommandInput
  | CreateIngressPointCommandInput
  | CreateRelayCommandInput
  | CreateRuleSetCommandInput
  | CreateTrafficPolicyCommandInput
  | DeleteAddonInstanceCommandInput
  | DeleteAddonSubscriptionCommandInput
  | DeleteArchiveCommandInput
  | DeleteIngressPointCommandInput
  | DeleteRelayCommandInput
  | DeleteRuleSetCommandInput
  | DeleteTrafficPolicyCommandInput
  | GetAddonInstanceCommandInput
  | GetAddonSubscriptionCommandInput
  | GetArchiveCommandInput
  | GetArchiveExportCommandInput
  | GetArchiveMessageCommandInput
  | GetArchiveMessageContentCommandInput
  | GetArchiveSearchCommandInput
  | GetArchiveSearchResultsCommandInput
  | GetIngressPointCommandInput
  | GetRelayCommandInput
  | GetRuleSetCommandInput
  | GetTrafficPolicyCommandInput
  | ListAddonInstancesCommandInput
  | ListAddonSubscriptionsCommandInput
  | ListArchiveExportsCommandInput
  | ListArchiveSearchesCommandInput
  | ListArchivesCommandInput
  | ListIngressPointsCommandInput
  | ListRelaysCommandInput
  | ListRuleSetsCommandInput
  | ListTagsForResourceCommandInput
  | ListTrafficPoliciesCommandInput
  | StartArchiveExportCommandInput
  | StartArchiveSearchCommandInput
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
  | CreateArchiveCommandOutput
  | CreateIngressPointCommandOutput
  | CreateRelayCommandOutput
  | CreateRuleSetCommandOutput
  | CreateTrafficPolicyCommandOutput
  | DeleteAddonInstanceCommandOutput
  | DeleteAddonSubscriptionCommandOutput
  | DeleteArchiveCommandOutput
  | DeleteIngressPointCommandOutput
  | DeleteRelayCommandOutput
  | DeleteRuleSetCommandOutput
  | DeleteTrafficPolicyCommandOutput
  | GetAddonInstanceCommandOutput
  | GetAddonSubscriptionCommandOutput
  | GetArchiveCommandOutput
  | GetArchiveExportCommandOutput
  | GetArchiveMessageCommandOutput
  | GetArchiveMessageContentCommandOutput
  | GetArchiveSearchCommandOutput
  | GetArchiveSearchResultsCommandOutput
  | GetIngressPointCommandOutput
  | GetRelayCommandOutput
  | GetRuleSetCommandOutput
  | GetTrafficPolicyCommandOutput
  | ListAddonInstancesCommandOutput
  | ListAddonSubscriptionsCommandOutput
  | ListArchiveExportsCommandOutput
  | ListArchiveSearchesCommandOutput
  | ListArchivesCommandOutput
  | ListIngressPointsCommandOutput
  | ListRelaysCommandOutput
  | ListRuleSetsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrafficPoliciesCommandOutput
  | StartArchiveExportCommandOutput
  | StartArchiveSearchCommandOutput
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
export type MailManagerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  RetryInputConfig &
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
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of MailManagerClient class. This is resolved and normalized from the {@link MailManagerClientConfig | constructor configuration interface}.
 */
export interface MailManagerClientResolvedConfig extends MailManagerClientResolvedConfigType {}

/**
 * <fullname>AWS SES Mail Manager API</fullname>
 *          <p>
 *             <a href="http://aws.amazon.com/ses">AWS SES Mail Manager API</a> contains operations and data types
 *          that comprise the Mail Manager feature of Amazon Simple Email Service.</p>
 *          <p>Mail Manager is a set of Amazon SES email gateway features designed to help you strengthen
 *          your organization's email infrastructure, simplify email workflow management, and
 *          streamline email compliance control. To learn more, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/eb.html">Mail Manager chapter</a> in the Amazon SES Developer
 *          Guide.</p>
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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveUserAgentConfig(_config_4);
    const _config_6 = resolveRetryConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
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
  private getDefaultHttpAuthSchemeParametersProvider() {
    return defaultMailManagerHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: MailManagerClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
