// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  defaultControlTowerHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateLandingZoneCommandInput,
  CreateLandingZoneCommandOutput,
} from "./commands/CreateLandingZoneCommand";
import type {
  DeleteLandingZoneCommandInput,
  DeleteLandingZoneCommandOutput,
} from "./commands/DeleteLandingZoneCommand";
import type { DisableBaselineCommandInput, DisableBaselineCommandOutput } from "./commands/DisableBaselineCommand";
import type { DisableControlCommandInput, DisableControlCommandOutput } from "./commands/DisableControlCommand";
import type { EnableBaselineCommandInput, EnableBaselineCommandOutput } from "./commands/EnableBaselineCommand";
import type { EnableControlCommandInput, EnableControlCommandOutput } from "./commands/EnableControlCommand";
import type { GetBaselineCommandInput, GetBaselineCommandOutput } from "./commands/GetBaselineCommand";
import type {
  GetBaselineOperationCommandInput,
  GetBaselineOperationCommandOutput,
} from "./commands/GetBaselineOperationCommand";
import type {
  GetControlOperationCommandInput,
  GetControlOperationCommandOutput,
} from "./commands/GetControlOperationCommand";
import type {
  GetEnabledBaselineCommandInput,
  GetEnabledBaselineCommandOutput,
} from "./commands/GetEnabledBaselineCommand";
import type {
  GetEnabledControlCommandInput,
  GetEnabledControlCommandOutput,
} from "./commands/GetEnabledControlCommand";
import type { GetLandingZoneCommandInput, GetLandingZoneCommandOutput } from "./commands/GetLandingZoneCommand";
import type {
  GetLandingZoneOperationCommandInput,
  GetLandingZoneOperationCommandOutput,
} from "./commands/GetLandingZoneOperationCommand";
import type { ListBaselinesCommandInput, ListBaselinesCommandOutput } from "./commands/ListBaselinesCommand";
import type {
  ListControlOperationsCommandInput,
  ListControlOperationsCommandOutput,
} from "./commands/ListControlOperationsCommand";
import type {
  ListEnabledBaselinesCommandInput,
  ListEnabledBaselinesCommandOutput,
} from "./commands/ListEnabledBaselinesCommand";
import type {
  ListEnabledControlsCommandInput,
  ListEnabledControlsCommandOutput,
} from "./commands/ListEnabledControlsCommand";
import type {
  ListLandingZoneOperationsCommandInput,
  ListLandingZoneOperationsCommandOutput,
} from "./commands/ListLandingZoneOperationsCommand";
import type { ListLandingZonesCommandInput, ListLandingZonesCommandOutput } from "./commands/ListLandingZonesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ResetEnabledBaselineCommandInput,
  ResetEnabledBaselineCommandOutput,
} from "./commands/ResetEnabledBaselineCommand";
import type {
  ResetEnabledControlCommandInput,
  ResetEnabledControlCommandOutput,
} from "./commands/ResetEnabledControlCommand";
import type { ResetLandingZoneCommandInput, ResetLandingZoneCommandOutput } from "./commands/ResetLandingZoneCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateEnabledBaselineCommandInput,
  UpdateEnabledBaselineCommandOutput,
} from "./commands/UpdateEnabledBaselineCommand";
import type {
  UpdateEnabledControlCommandInput,
  UpdateEnabledControlCommandOutput,
} from "./commands/UpdateEnabledControlCommand";
import type {
  UpdateLandingZoneCommandInput,
  UpdateLandingZoneCommandOutput,
} from "./commands/UpdateLandingZoneCommand";
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
  | ListControlOperationsCommandInput
  | ListEnabledBaselinesCommandInput
  | ListEnabledControlsCommandInput
  | ListLandingZoneOperationsCommandInput
  | ListLandingZonesCommandInput
  | ListTagsForResourceCommandInput
  | ResetEnabledBaselineCommandInput
  | ResetEnabledControlCommandInput
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
  | ListControlOperationsCommandOutput
  | ListEnabledBaselinesCommandOutput
  | ListEnabledControlsCommandOutput
  | ListLandingZoneOperationsCommandOutput
  | ListLandingZonesCommandOutput
  | ListTagsForResourceCommandOutput
  | ResetEnabledBaselineCommandOutput
  | ResetEnabledControlCommandOutput
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
   * Accepted values are "standard" and "adaptive".
   * @see https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html
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
 *  The configuration interface of ControlTowerClient class constructor that set the region, credentials and other options.
 */
export interface ControlTowerClientConfig extends ControlTowerClientConfigType {}

/**
 * @public
 */
export type ControlTowerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ControlTowerClient class. This is resolved and normalized from the {@link ControlTowerClientConfig | constructor configuration interface}.
 */
export interface ControlTowerClientResolvedConfig extends ControlTowerClientResolvedConfigType {}

/**
 * Amazon Web Services Control Tower offers application programming interface (API) operations that support programmatic interaction with these types of resources:
 *
 * - [*Controls*](https://docs.aws.amazon.com/controltower/latest/userguide/controls.html)
 *
 *   - [DisableControl](https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableControl.html)
 *   - [EnableControl](https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableControl.html)
 *   - [GetEnabledControl](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledControl.html)
 *   - [GetControlOperation](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetControlOperation.html)
 *   - [ListControlOperations](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListControlOperations.html)
 *   - [ListEnabledControls](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledControls.html)
 *   - [ResetEnabledControl](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetEnabledControl.html)
 *   - [UpdateEnabledControl](https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledControl.html)
 * - [*Landing zones*](https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch.html)
 *
 *   - [CreateLandingZone](https://docs.aws.amazon.com/controltower/latest/APIReference/API_CreateLandingZone.html)
 *   - [DeleteLandingZone](https://docs.aws.amazon.com/controltower/latest/APIReference/API_DeleteLandingZone.html)
 *   - [GetLandingZone](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZone.html)
 *   - [GetLandingZoneOperation](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZoneOperation.html)
 *   - [ListLandingZones](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZones.html)
 *   - [ListLandingZoneOperations](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZoneOperations.html)
 *   - [ResetLandingZone](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetLandingZone.html)
 *   - [UpdateLandingZone](https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateLandingZone.html)
 * - [*Baselines*](https://docs.aws.amazon.com/controltower/latest/userguide/types-of-baselines.html)
 *
 *   - [DisableBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableBaseline.html)
 *   - [EnableBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableBaseline.html)
 *   - [GetBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaseline.html)
 *   - [GetBaselineOperation](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaselineOperation.html)
 *   - [GetEnabledBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledBaseline.html)
 *   - [ListBaselines](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListBaselines.html)
 *   - [ListEnabledBaselines](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledBaselines.html)
 *   - [ResetEnabledBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetEnabledBaseline.html)
 *   - [UpdateEnabledBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledBaseline.html)
 * - [*Tagging*](https://docs.aws.amazon.com/controltower/latest/controlreference/tagging.html)
 *
 *   - [ListTagsForResource](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListTagsForResource.html)
 *   - [TagResource](https://docs.aws.amazon.com/controltower/latest/APIReference/API_TagResource.html)
 *   - [UntagResource](https://docs.aws.amazon.com/controltower/latest/APIReference/API_UntagResource.html)
 *
 * For more information about these types of resources, see the [*Amazon Web Services Control Tower User Guide*](https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html).
 *
 * **About control APIs**
 *
 * These interfaces allow you to apply the Amazon Web Services library of pre-defined *controls* to your organizational units, programmatically. In Amazon Web Services Control Tower, the terms "control" and "guardrail" are synonyms.
 *
 * To call these APIs, you'll need to know:
 *
 * - the `controlIdentifier` for the control--or guardrail--you are targeting.
 * - the ARN associated with the target organizational unit (OU), which we call the `targetIdentifier`.
 * - the ARN associated with a resource that you wish to tag or untag.
 *
 * **To get the `controlIdentifier` for your Amazon Web Services Control Tower control:**
 *
 * The `controlIdentifier` is an ARN that is specified for each control. You can view the `controlIdentifier` in the console on the **Control details** page, as well as in the documentation.
 *
 * **About identifiers for Amazon Web Services Control Tower**
 *
 * The Amazon Web Services Control Tower `controlIdentifier` is unique in each Amazon Web Services Region for each control. You can find the `controlIdentifier` for each Region and control in the [Tables of control metadata](https://docs.aws.amazon.com/controltower/latest/controlreference/control-metadata-tables.html) or the [Control availability by Region tables](https://docs.aws.amazon.com/controltower/latest/controlreference/control-region-tables.html) in the *Amazon Web Services Control Tower Controls Reference Guide*.
 *
 * A quick-reference list of control identifers for the Amazon Web Services Control Tower legacy *Strongly recommended* and *Elective* controls is given in [Resource identifiers for APIs and controls](https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html.html) in the [*Amazon Web Services Control Tower Controls Reference Guide*](https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html). Remember that *Mandatory* controls cannot be added or removed.
 *
 * > **Note:**
 * >
 * > **Some controls have two identifiers**
 * >
 * > - **ARN format for Amazon Web Services Control Tower:** `arn:aws:controltower:\{REGION\}::control/\{CONTROL_TOWER_OPAQUE_ID\}`
 * >
 * >   **Example:**
 * >
 * >   `arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED`
 * > - **ARN format for Amazon Web Services Control Catalog:** `arn:\{PARTITION\}:controlcatalog:::control/\{CONTROL_CATALOG_OPAQUE_ID\}`
 * >
 * > You can find the `\{CONTROL_CATALOG_OPAQUE_ID\}` in the [*Amazon Web Services Control Tower Controls Reference Guide*](https://docs.aws.amazon.com/controltower/latest/controlreference/all-global-identifiers.html), or in the Amazon Web Services Control Tower console, on the **Control details** page.
 * >
 * > The Amazon Web Services Control Tower APIs for enabled controls, such as `GetEnabledControl` and `ListEnabledControls` always return an ARN of the same type given when the control was enabled.
 *
 * **To get the `targetIdentifier`:**
 *
 * The `targetIdentifier` is the ARN for an OU.
 *
 * In the Amazon Web Services Organizations console, you can find the ARN for the OU on the **Organizational unit details** page associated with that OU.
 *
 * > **Note:**
 * >
 * > **OU ARN format:**
 * >
 * > `arn:$\{Partition\}:organizations::$\{MasterAccountId\}:ou/o-$\{OrganizationId\}/ou-$\{OrganizationalUnitId\}`
 *
 * **About landing zone APIs**
 *
 * You can configure and launch an Amazon Web Services Control Tower landing zone with APIs. For an introduction and steps, see [Getting started with Amazon Web Services Control Tower using APIs](https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-apis.html).
 *
 * For an overview of landing zone API operations, see [Amazon Web Services Control Tower supports landing zone APIs](https://docs.aws.amazon.com/controltower/latest/userguide/2023-all.html#landing-zone-apis). The individual API operations for landing zones are detailed in this document, the [API reference manual](https://docs.aws.amazon.com/controltower/latest/APIReference/API_Operations.html), in the "Actions" section.
 *
 * **About baseline APIs**
 *
 * You can apply the `AWSControlTowerBaseline` baseline to an organizational unit (OU) as a way to register the OU with Amazon Web Services Control Tower, programmatically. For a general overview of this capability, see [Amazon Web Services Control Tower supports APIs for OU registration and configuration with baselines](https://docs.aws.amazon.com/controltower/latest/userguide/2024-all.html#baseline-apis).
 *
 * You can call the baseline API operations to view the baselines that Amazon Web Services Control Tower enables for your landing zone, on your behalf, when setting up the landing zone. These baselines are read-only baselines.
 *
 * The individual API operations for baselines are detailed in this document, the [API reference manual](https://docs.aws.amazon.com/controltower/latest/APIReference/API_Operations.html), in the "Actions" section. For usage examples, see [Baseline API input and output examples with CLI](https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html).
 *
 * **About Amazon Web Services Control Catalog identifiers**
 *
 * - The `EnableControl` and `DisableControl` API operations can be called by specifying either the Amazon Web Services Control Tower identifer or the Amazon Web Services Control Catalog identifier. The API response returns the same type of identifier that you specified when calling the API.
 * - If you use an Amazon Web Services Control Tower identifier to call the `EnableControl` API, and then call `EnableControl` again with an Amazon Web Services Control Catalog identifier, Amazon Web Services Control Tower returns an error message stating that the control is already enabled. Similar behavior applies to the `DisableControl` API operation.
 * - Mandatory controls and the landing-zone-level Region deny control have Amazon Web Services Control Tower identifiers only.
 *
 * **Details and examples**
 *
 * - [Control API input and output examples with CLI](https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html)
 * - [Baseline API input and output examples with CLI](https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html)
 * - [Enable controls with CloudFormation](https://docs.aws.amazon.com/controltower/latest/controlreference/enable-controls.html)
 * - [Launch a landing zone with CloudFormation](https://docs.aws.amazon.com/controltower/latest/userguide/lz-apis-cfn-setup.html)
 * - [Control metadata tables (large page)](https://docs.aws.amazon.com/controltower/latest/controlreference/control-metadata-tables.html)
 * - [Control availability by Region tables (large page)](https://docs.aws.amazon.com/controltower/latest/controlreference/control-region-tables.html)
 * - [List of identifiers for legacy controls](https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html)
 * - [Controls reference guide](https://docs.aws.amazon.com/controltower/latest/controlreference/controls.html)
 * - [Controls library groupings](https://docs.aws.amazon.com/controltower/latest/controlreference/controls-reference.html)
 * - [Creating Amazon Web Services Control Tower resources with Amazon Web Services CloudFormation](https://docs.aws.amazon.com/controltower/latest/userguide/creating-resources-with-cloudformation.html)
 *
 * To view the open source resource repository on GitHub, see [aws-cloudformation/aws-cloudformation-resource-providers-controltower](https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-controltower)
 *
 * **Recording API Requests**
 *
 * Amazon Web Services Control Tower supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine which requests the Amazon Web Services Control Tower service received, who made the request and when, and so on. For more about Amazon Web Services Control Tower and its support for CloudTrail, see [Logging Amazon Web Services Control Tower Actions with Amazon Web Services CloudTrail](https://docs.aws.amazon.com/controltower/latest/userguide/logging-using-cloudtrail.html) in the Amazon Web Services Control Tower User Guide. To learn more about CloudTrail, including how to turn it on and find your log files, see the Amazon Web Services CloudTrail User Guide.
 *
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
        httpAuthSchemeParametersProvider: defaultControlTowerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ControlTowerClientResolvedConfig) =>
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
