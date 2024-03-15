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
  defaultControlTowerHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateLandingZoneCommandInput, CreateLandingZoneCommandOutput } from "./commands/CreateLandingZoneCommand";
import { DeleteLandingZoneCommandInput, DeleteLandingZoneCommandOutput } from "./commands/DeleteLandingZoneCommand";
import { DisableBaselineCommandInput, DisableBaselineCommandOutput } from "./commands/DisableBaselineCommand";
import { DisableControlCommandInput, DisableControlCommandOutput } from "./commands/DisableControlCommand";
import { EnableBaselineCommandInput, EnableBaselineCommandOutput } from "./commands/EnableBaselineCommand";
import { EnableControlCommandInput, EnableControlCommandOutput } from "./commands/EnableControlCommand";
import { GetBaselineCommandInput, GetBaselineCommandOutput } from "./commands/GetBaselineCommand";
import {
  GetBaselineOperationCommandInput,
  GetBaselineOperationCommandOutput,
} from "./commands/GetBaselineOperationCommand";
import {
  GetControlOperationCommandInput,
  GetControlOperationCommandOutput,
} from "./commands/GetControlOperationCommand";
import { GetEnabledBaselineCommandInput, GetEnabledBaselineCommandOutput } from "./commands/GetEnabledBaselineCommand";
import { GetEnabledControlCommandInput, GetEnabledControlCommandOutput } from "./commands/GetEnabledControlCommand";
import { GetLandingZoneCommandInput, GetLandingZoneCommandOutput } from "./commands/GetLandingZoneCommand";
import {
  GetLandingZoneOperationCommandInput,
  GetLandingZoneOperationCommandOutput,
} from "./commands/GetLandingZoneOperationCommand";
import { ListBaselinesCommandInput, ListBaselinesCommandOutput } from "./commands/ListBaselinesCommand";
import {
  ListEnabledBaselinesCommandInput,
  ListEnabledBaselinesCommandOutput,
} from "./commands/ListEnabledBaselinesCommand";
import {
  ListEnabledControlsCommandInput,
  ListEnabledControlsCommandOutput,
} from "./commands/ListEnabledControlsCommand";
import { ListLandingZonesCommandInput, ListLandingZonesCommandOutput } from "./commands/ListLandingZonesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ResetEnabledBaselineCommandInput,
  ResetEnabledBaselineCommandOutput,
} from "./commands/ResetEnabledBaselineCommand";
import { ResetLandingZoneCommandInput, ResetLandingZoneCommandOutput } from "./commands/ResetLandingZoneCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateEnabledBaselineCommandInput,
  UpdateEnabledBaselineCommandOutput,
} from "./commands/UpdateEnabledBaselineCommand";
import {
  UpdateEnabledControlCommandInput,
  UpdateEnabledControlCommandOutput,
} from "./commands/UpdateEnabledControlCommand";
import { UpdateLandingZoneCommandInput, UpdateLandingZoneCommandOutput } from "./commands/UpdateLandingZoneCommand";
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
  | CreateLandingZoneCommandInput
  | DeleteLandingZoneCommandInput
  | DisableBaselineCommandInput
  | DisableControlCommandInput
  | EnableBaselineCommandInput
  | EnableControlCommandInput
  | GetBaselineCommandInput
  | GetBaselineOperationCommandInput
  | GetControlOperationCommandInput
  | GetEnabledBaselineCommandInput
  | GetEnabledControlCommandInput
  | GetLandingZoneCommandInput
  | GetLandingZoneOperationCommandInput
  | ListBaselinesCommandInput
  | ListEnabledBaselinesCommandInput
  | ListEnabledControlsCommandInput
  | ListLandingZonesCommandInput
  | ListTagsForResourceCommandInput
  | ResetEnabledBaselineCommandInput
  | ResetLandingZoneCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEnabledBaselineCommandInput
  | UpdateEnabledControlCommandInput
  | UpdateLandingZoneCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateLandingZoneCommandOutput
  | DeleteLandingZoneCommandOutput
  | DisableBaselineCommandOutput
  | DisableControlCommandOutput
  | EnableBaselineCommandOutput
  | EnableControlCommandOutput
  | GetBaselineCommandOutput
  | GetBaselineOperationCommandOutput
  | GetControlOperationCommandOutput
  | GetEnabledBaselineCommandOutput
  | GetEnabledControlCommandOutput
  | GetLandingZoneCommandOutput
  | GetLandingZoneOperationCommandOutput
  | ListBaselinesCommandOutput
  | ListEnabledBaselinesCommandOutput
  | ListEnabledControlsCommandOutput
  | ListLandingZonesCommandOutput
  | ListTagsForResourceCommandOutput
  | ResetEnabledBaselineCommandOutput
  | ResetLandingZoneCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEnabledBaselineCommandOutput
  | UpdateEnabledControlCommandOutput
  | UpdateLandingZoneCommandOutput;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

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
export type ControlTowerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of ControlTowerClient class constructor that set the region, credentials and other options.
 */
export interface ControlTowerClientConfig extends ControlTowerClientConfigType {}

/**
 * @public
 */
export type ControlTowerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of ControlTowerClient class. This is resolved and normalized from the {@link ControlTowerClientConfig | constructor configuration interface}.
 */
export interface ControlTowerClientResolvedConfig extends ControlTowerClientResolvedConfigType {}

/**
 * <p>These interfaces allow you to apply the Amazon Web Services library of pre-defined
 *          <i>controls</i> to your organizational units, programmatically. In Amazon Web Services Control Tower, the terms "control" and "guardrail" are synonyms.</p>
 *          <p>To call these APIs, you'll need to know:</p>
 *          <ul>
 *             <li>
 *                <p>the <code>controlIdentifier</code> for the control--or guardrail--you are targeting.</p>
 *             </li>
 *             <li>
 *                <p>the ARN associated with the target organizational unit (OU), which we call the <code>targetIdentifier</code>.</p>
 *             </li>
 *             <li>
 *                <p>the ARN associated with a resource that you wish to tag or untag.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>To get the <code>controlIdentifier</code> for your Amazon Web Services Control Tower
 *          control:</b>
 *          </p>
 *          <p>The <code>controlIdentifier</code> is an ARN that is specified for each
 *          control. You can view the <code>controlIdentifier</code> in the console on the <b>Control details</b> page, as well as in the documentation.</p>
 *          <p>The <code>controlIdentifier</code> is unique in each Amazon Web Services Region for each control. You can
 *          find the <code>controlIdentifier</code> for each Region and control in the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-metadata-tables.html">Tables of control metadata</a> in the <i>Amazon Web Services Control Tower User Guide.</i>
 *          </p>
 *          <p>A quick-reference list of control identifers for the Amazon Web Services Control Tower legacy <i>Strongly recommended</i> and
 *          <i>Elective</i> controls is given in <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html.html">Resource identifiers for
 *             APIs and controls</a> in the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html">Controls reference guide section</a>
 *          of the <i>Amazon Web Services Control Tower User Guide</i>. Remember that <i>Mandatory</i> controls
 *          cannot be added or removed.</p>
 *          <note>
 *             <p>
 *                <b>ARN format:</b>
 *                <code>arn:aws:controltower:\{REGION\}::control/\{CONTROL_NAME\}</code>
 *             </p>
 *             <p>
 *                <b>Example:</b>
 *             </p>
 *             <p>
 *                <code>arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED</code>
 *             </p>
 *          </note>
 *          <p>
 *             <b>To get the <code>targetIdentifier</code>:</b>
 *          </p>
 *          <p>The <code>targetIdentifier</code> is the ARN for an OU.</p>
 *          <p>In the Amazon Web Services Organizations console, you can find the ARN for the OU on the <b>Organizational unit details</b> page associated with that OU.</p>
 *          <note>
 *             <p>
 *                <b>OU ARN format:</b>
 *             </p>
 *             <p>
 *                <code>arn:$\{Partition\}:organizations::$\{MasterAccountId\}:ou/o-$\{OrganizationId\}/ou-$\{OrganizationalUnitId\}</code>
 *             </p>
 *          </note>
 *          <p class="title">
 *             <b>Details and examples</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-api-examples-short.html">Control API input and output examples with CLI</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls.html">Enable controls with CloudFormation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-metadata-tables.html">Control metadata tables</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html">List of identifiers for legacy controls</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/controls.html">Controls reference guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/controls-reference.html">Controls library groupings</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/creating-resources-with-cloudformation.html">Creating Amazon Web Services Control Tower resources with Amazon Web Services CloudFormation</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>To view the open source resource repository on GitHub, see <a href="https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-controltower">aws-cloudformation/aws-cloudformation-resource-providers-controltower</a>
 *          </p>
 *          <p>
 *             <b>Recording API Requests</b>
 *          </p>
 *          <p>Amazon Web Services Control Tower supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your
 *          Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected by
 *          CloudTrail, you can determine which requests the Amazon Web Services Control Tower service received, who made
 *          the request and when, and so on. For more about Amazon Web Services Control Tower and its support for
 *          CloudTrail, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/logging-using-cloudtrail.html">Logging Amazon Web Services Control Tower
 *             Actions with Amazon Web Services CloudTrail</a> in the Amazon Web Services Control Tower User Guide. To learn more about
 *          CloudTrail, including how to turn it on and find your log files, see the Amazon Web Services CloudTrail User
 *          Guide.</p>
 * @public
 */
export class ControlTowerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ControlTowerClientResolvedConfig
> {
  /**
   * The resolved configuration of ControlTowerClient class. This is resolved and normalized from the {@link ControlTowerClientConfig | constructor configuration interface}.
   */
  readonly config: ControlTowerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ControlTowerClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
    return defaultControlTowerHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: ControlTowerClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
