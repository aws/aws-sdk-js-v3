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
  defaultARCZonalShiftHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CancelZonalShiftCommandInput, CancelZonalShiftCommandOutput } from "./commands/CancelZonalShiftCommand";
import {
  CreatePracticeRunConfigurationCommandInput,
  CreatePracticeRunConfigurationCommandOutput,
} from "./commands/CreatePracticeRunConfigurationCommand";
import {
  DeletePracticeRunConfigurationCommandInput,
  DeletePracticeRunConfigurationCommandOutput,
} from "./commands/DeletePracticeRunConfigurationCommand";
import {
  GetAutoshiftObserverNotificationStatusCommandInput,
  GetAutoshiftObserverNotificationStatusCommandOutput,
} from "./commands/GetAutoshiftObserverNotificationStatusCommand";
import { GetManagedResourceCommandInput, GetManagedResourceCommandOutput } from "./commands/GetManagedResourceCommand";
import { ListAutoshiftsCommandInput, ListAutoshiftsCommandOutput } from "./commands/ListAutoshiftsCommand";
import {
  ListManagedResourcesCommandInput,
  ListManagedResourcesCommandOutput,
} from "./commands/ListManagedResourcesCommand";
import { ListZonalShiftsCommandInput, ListZonalShiftsCommandOutput } from "./commands/ListZonalShiftsCommand";
import { StartZonalShiftCommandInput, StartZonalShiftCommandOutput } from "./commands/StartZonalShiftCommand";
import {
  UpdateAutoshiftObserverNotificationStatusCommandInput,
  UpdateAutoshiftObserverNotificationStatusCommandOutput,
} from "./commands/UpdateAutoshiftObserverNotificationStatusCommand";
import {
  UpdatePracticeRunConfigurationCommandInput,
  UpdatePracticeRunConfigurationCommandOutput,
} from "./commands/UpdatePracticeRunConfigurationCommand";
import {
  UpdateZonalAutoshiftConfigurationCommandInput,
  UpdateZonalAutoshiftConfigurationCommandOutput,
} from "./commands/UpdateZonalAutoshiftConfigurationCommand";
import { UpdateZonalShiftCommandInput, UpdateZonalShiftCommandOutput } from "./commands/UpdateZonalShiftCommand";
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
  | CancelZonalShiftCommandInput
  | CreatePracticeRunConfigurationCommandInput
  | DeletePracticeRunConfigurationCommandInput
  | GetAutoshiftObserverNotificationStatusCommandInput
  | GetManagedResourceCommandInput
  | ListAutoshiftsCommandInput
  | ListManagedResourcesCommandInput
  | ListZonalShiftsCommandInput
  | StartZonalShiftCommandInput
  | UpdateAutoshiftObserverNotificationStatusCommandInput
  | UpdatePracticeRunConfigurationCommandInput
  | UpdateZonalAutoshiftConfigurationCommandInput
  | UpdateZonalShiftCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CancelZonalShiftCommandOutput
  | CreatePracticeRunConfigurationCommandOutput
  | DeletePracticeRunConfigurationCommandOutput
  | GetAutoshiftObserverNotificationStatusCommandOutput
  | GetManagedResourceCommandOutput
  | ListAutoshiftsCommandOutput
  | ListManagedResourcesCommandOutput
  | ListZonalShiftsCommandOutput
  | StartZonalShiftCommandOutput
  | UpdateAutoshiftObserverNotificationStatusCommandOutput
  | UpdatePracticeRunConfigurationCommandOutput
  | UpdateZonalAutoshiftConfigurationCommandOutput
  | UpdateZonalShiftCommandOutput;

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
export type ARCZonalShiftClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ARCZonalShiftClient class constructor that set the region, credentials and other options.
 */
export interface ARCZonalShiftClientConfig extends ARCZonalShiftClientConfigType {}

/**
 * @public
 */
export type ARCZonalShiftClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ARCZonalShiftClient class. This is resolved and normalized from the {@link ARCZonalShiftClientConfig | constructor configuration interface}.
 */
export interface ARCZonalShiftClientResolvedConfig extends ARCZonalShiftClientResolvedConfigType {}

/**
 * <p>Welcome to the API Reference Guide for zonal shift and zonal autoshift in Amazon Route 53 Application Recovery Controller (Route 53 ARC).</p>
 *          <p>You can start a zonal shift to move traffic for a load balancer resource away from an Availability Zone to
 * 			help your application recover quickly from an impairment in an Availability Zone. For example,
 * 			you can recover your application from a developer's bad code deployment or from an
 * 			Amazon Web Services infrastructure failure in a single Availability Zone.</p>
 *          <p>You can also configure zonal autoshift for supported load balancer resources. Zonal autoshift
 * 			is a capability in Route 53 ARC where you authorize Amazon Web Services to shift away application resource
 * 			traffic from an Availability Zone during events, on your behalf, to help reduce your time to recovery.
 * 			Amazon Web Services starts an autoshift when internal telemetry indicates that there is an Availability
 * 			Zone impairment that could potentially impact customers.</p>
 *          <p>To help make sure that zonal autoshift is safe for your application, you must
 * 			also configure practice runs when you enable zonal autoshift for a resource. Practice runs start
 * 			weekly zonal shifts for a resource, to shift traffic for the resource away from an Availability Zone.
 * 			Practice runs help you to make sure, on a regular basis, that you have enough capacity in all the
 * 			Availability Zones in an Amazon Web Services Region for your application to continue to operate normally
 * 			when traffic for a resource is shifted away from one Availability Zone.</p>
 *          <important>
 *             <p>Before you configure practice runs or enable zonal autoshift, we strongly recommend
 * 			that you prescale your application resource capacity in all Availability Zones in the Region where
 * 			your application resources are deployed. You should not rely on scaling on demand when an
 * 			autoshift or practice run starts. Zonal autoshift, including practice runs, works independently,
 * 			and does not wait for auto scaling actions to complete. Relying on auto scaling, instead of
 * 			pre-scaling, can result in loss of availability.</p>
 *             <p>If you use auto scaling to handle regular cycles of traffic, we strongly recommend that you configure
 * 				the minimum capacity of your auto scaling to continue operating normally with the loss of an
 * 				Availability Zone. </p>
 *          </important>
 *          <p>Be aware that Route 53 ARC does not inspect the health of individual resources. Amazon Web Services only starts an
 * 			autoshift when Amazon Web Services telemetry detects that there is an Availability Zone impairment that could
 * 			potentially impact customers. In some cases, resources might be shifted away that are not experiencing
 * 			impact.</p>
 *          <p>For more information about using zonal shift and zonal autoshift, see the
 * 			<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html">Amazon Route 53 Application Recovery Controller
 * 				Developer Guide</a>.</p>
 * @public
 */
export class ARCZonalShiftClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ARCZonalShiftClientResolvedConfig
> {
  /**
   * The resolved configuration of ARCZonalShiftClient class. This is resolved and normalized from the {@link ARCZonalShiftClientConfig | constructor configuration interface}.
   */
  readonly config: ARCZonalShiftClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ARCZonalShiftClientConfig>) {
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
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultARCZonalShiftHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ARCZonalShiftClientResolvedConfig) =>
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
