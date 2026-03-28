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
  defaultBCMPricingCalculatorHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchCreateBillScenarioCommitmentModificationCommandInput,
  BatchCreateBillScenarioCommitmentModificationCommandOutput,
} from "./commands/BatchCreateBillScenarioCommitmentModificationCommand";
import type {
  BatchCreateBillScenarioUsageModificationCommandInput,
  BatchCreateBillScenarioUsageModificationCommandOutput,
} from "./commands/BatchCreateBillScenarioUsageModificationCommand";
import type {
  BatchCreateWorkloadEstimateUsageCommandInput,
  BatchCreateWorkloadEstimateUsageCommandOutput,
} from "./commands/BatchCreateWorkloadEstimateUsageCommand";
import type {
  BatchDeleteBillScenarioCommitmentModificationCommandInput,
  BatchDeleteBillScenarioCommitmentModificationCommandOutput,
} from "./commands/BatchDeleteBillScenarioCommitmentModificationCommand";
import type {
  BatchDeleteBillScenarioUsageModificationCommandInput,
  BatchDeleteBillScenarioUsageModificationCommandOutput,
} from "./commands/BatchDeleteBillScenarioUsageModificationCommand";
import type {
  BatchDeleteWorkloadEstimateUsageCommandInput,
  BatchDeleteWorkloadEstimateUsageCommandOutput,
} from "./commands/BatchDeleteWorkloadEstimateUsageCommand";
import type {
  BatchUpdateBillScenarioCommitmentModificationCommandInput,
  BatchUpdateBillScenarioCommitmentModificationCommandOutput,
} from "./commands/BatchUpdateBillScenarioCommitmentModificationCommand";
import type {
  BatchUpdateBillScenarioUsageModificationCommandInput,
  BatchUpdateBillScenarioUsageModificationCommandOutput,
} from "./commands/BatchUpdateBillScenarioUsageModificationCommand";
import type {
  BatchUpdateWorkloadEstimateUsageCommandInput,
  BatchUpdateWorkloadEstimateUsageCommandOutput,
} from "./commands/BatchUpdateWorkloadEstimateUsageCommand";
import type {
  CreateBillEstimateCommandInput,
  CreateBillEstimateCommandOutput,
} from "./commands/CreateBillEstimateCommand";
import type {
  CreateBillScenarioCommandInput,
  CreateBillScenarioCommandOutput,
} from "./commands/CreateBillScenarioCommand";
import type {
  CreateWorkloadEstimateCommandInput,
  CreateWorkloadEstimateCommandOutput,
} from "./commands/CreateWorkloadEstimateCommand";
import type {
  DeleteBillEstimateCommandInput,
  DeleteBillEstimateCommandOutput,
} from "./commands/DeleteBillEstimateCommand";
import type {
  DeleteBillScenarioCommandInput,
  DeleteBillScenarioCommandOutput,
} from "./commands/DeleteBillScenarioCommand";
import type {
  DeleteWorkloadEstimateCommandInput,
  DeleteWorkloadEstimateCommandOutput,
} from "./commands/DeleteWorkloadEstimateCommand";
import type { GetBillEstimateCommandInput, GetBillEstimateCommandOutput } from "./commands/GetBillEstimateCommand";
import type { GetBillScenarioCommandInput, GetBillScenarioCommandOutput } from "./commands/GetBillScenarioCommand";
import type { GetPreferencesCommandInput, GetPreferencesCommandOutput } from "./commands/GetPreferencesCommand";
import type {
  GetWorkloadEstimateCommandInput,
  GetWorkloadEstimateCommandOutput,
} from "./commands/GetWorkloadEstimateCommand";
import type {
  ListBillEstimateCommitmentsCommandInput,
  ListBillEstimateCommitmentsCommandOutput,
} from "./commands/ListBillEstimateCommitmentsCommand";
import type {
  ListBillEstimateInputCommitmentModificationsCommandInput,
  ListBillEstimateInputCommitmentModificationsCommandOutput,
} from "./commands/ListBillEstimateInputCommitmentModificationsCommand";
import type {
  ListBillEstimateInputUsageModificationsCommandInput,
  ListBillEstimateInputUsageModificationsCommandOutput,
} from "./commands/ListBillEstimateInputUsageModificationsCommand";
import type {
  ListBillEstimateLineItemsCommandInput,
  ListBillEstimateLineItemsCommandOutput,
} from "./commands/ListBillEstimateLineItemsCommand";
import type {
  ListBillEstimatesCommandInput,
  ListBillEstimatesCommandOutput,
} from "./commands/ListBillEstimatesCommand";
import type {
  ListBillScenarioCommitmentModificationsCommandInput,
  ListBillScenarioCommitmentModificationsCommandOutput,
} from "./commands/ListBillScenarioCommitmentModificationsCommand";
import type {
  ListBillScenariosCommandInput,
  ListBillScenariosCommandOutput,
} from "./commands/ListBillScenariosCommand";
import type {
  ListBillScenarioUsageModificationsCommandInput,
  ListBillScenarioUsageModificationsCommandOutput,
} from "./commands/ListBillScenarioUsageModificationsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListWorkloadEstimatesCommandInput,
  ListWorkloadEstimatesCommandOutput,
} from "./commands/ListWorkloadEstimatesCommand";
import type {
  ListWorkloadEstimateUsageCommandInput,
  ListWorkloadEstimateUsageCommandOutput,
} from "./commands/ListWorkloadEstimateUsageCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateBillEstimateCommandInput,
  UpdateBillEstimateCommandOutput,
} from "./commands/UpdateBillEstimateCommand";
import type {
  UpdateBillScenarioCommandInput,
  UpdateBillScenarioCommandOutput,
} from "./commands/UpdateBillScenarioCommand";
import type {
  UpdatePreferencesCommandInput,
  UpdatePreferencesCommandOutput,
} from "./commands/UpdatePreferencesCommand";
import type {
  UpdateWorkloadEstimateCommandInput,
  UpdateWorkloadEstimateCommandOutput,
} from "./commands/UpdateWorkloadEstimateCommand";
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
  | BatchCreateBillScenarioCommitmentModificationCommandInput
  | BatchCreateBillScenarioUsageModificationCommandInput
  | BatchCreateWorkloadEstimateUsageCommandInput
  | BatchDeleteBillScenarioCommitmentModificationCommandInput
  | BatchDeleteBillScenarioUsageModificationCommandInput
  | BatchDeleteWorkloadEstimateUsageCommandInput
  | BatchUpdateBillScenarioCommitmentModificationCommandInput
  | BatchUpdateBillScenarioUsageModificationCommandInput
  | BatchUpdateWorkloadEstimateUsageCommandInput
  | CreateBillEstimateCommandInput
  | CreateBillScenarioCommandInput
  | CreateWorkloadEstimateCommandInput
  | DeleteBillEstimateCommandInput
  | DeleteBillScenarioCommandInput
  | DeleteWorkloadEstimateCommandInput
  | GetBillEstimateCommandInput
  | GetBillScenarioCommandInput
  | GetPreferencesCommandInput
  | GetWorkloadEstimateCommandInput
  | ListBillEstimateCommitmentsCommandInput
  | ListBillEstimateInputCommitmentModificationsCommandInput
  | ListBillEstimateInputUsageModificationsCommandInput
  | ListBillEstimateLineItemsCommandInput
  | ListBillEstimatesCommandInput
  | ListBillScenarioCommitmentModificationsCommandInput
  | ListBillScenarioUsageModificationsCommandInput
  | ListBillScenariosCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkloadEstimateUsageCommandInput
  | ListWorkloadEstimatesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBillEstimateCommandInput
  | UpdateBillScenarioCommandInput
  | UpdatePreferencesCommandInput
  | UpdateWorkloadEstimateCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchCreateBillScenarioCommitmentModificationCommandOutput
  | BatchCreateBillScenarioUsageModificationCommandOutput
  | BatchCreateWorkloadEstimateUsageCommandOutput
  | BatchDeleteBillScenarioCommitmentModificationCommandOutput
  | BatchDeleteBillScenarioUsageModificationCommandOutput
  | BatchDeleteWorkloadEstimateUsageCommandOutput
  | BatchUpdateBillScenarioCommitmentModificationCommandOutput
  | BatchUpdateBillScenarioUsageModificationCommandOutput
  | BatchUpdateWorkloadEstimateUsageCommandOutput
  | CreateBillEstimateCommandOutput
  | CreateBillScenarioCommandOutput
  | CreateWorkloadEstimateCommandOutput
  | DeleteBillEstimateCommandOutput
  | DeleteBillScenarioCommandOutput
  | DeleteWorkloadEstimateCommandOutput
  | GetBillEstimateCommandOutput
  | GetBillScenarioCommandOutput
  | GetPreferencesCommandOutput
  | GetWorkloadEstimateCommandOutput
  | ListBillEstimateCommitmentsCommandOutput
  | ListBillEstimateInputCommitmentModificationsCommandOutput
  | ListBillEstimateInputUsageModificationsCommandOutput
  | ListBillEstimateLineItemsCommandOutput
  | ListBillEstimatesCommandOutput
  | ListBillScenarioCommitmentModificationsCommandOutput
  | ListBillScenarioUsageModificationsCommandOutput
  | ListBillScenariosCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkloadEstimateUsageCommandOutput
  | ListWorkloadEstimatesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBillEstimateCommandOutput
  | UpdateBillScenarioCommandOutput
  | UpdatePreferencesCommandOutput
  | UpdateWorkloadEstimateCommandOutput;

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
export type BCMPricingCalculatorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of BCMPricingCalculatorClient class constructor that set the region, credentials and other options.
 */
export interface BCMPricingCalculatorClientConfig extends BCMPricingCalculatorClientConfigType {}

/**
 * @public
 */
export type BCMPricingCalculatorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of BCMPricingCalculatorClient class. This is resolved and normalized from the {@link BCMPricingCalculatorClientConfig | constructor configuration interface}.
 */
export interface BCMPricingCalculatorClientResolvedConfig extends BCMPricingCalculatorClientResolvedConfigType {}

/**
 * <p> You can use the Pricing Calculator API to programmatically create estimates for your planned cloud use. You can model usage and commitments such as Savings Plans and Reserved Instances, and generate estimated costs using your discounts and benefit sharing preferences. </p> <p>The Pricing Calculator API provides the following endpoint:</p> <ul> <li> <p> <code>https://bcm-pricing-calculator.us-east-1.api.aws</code> </p> </li> </ul>
 * @public
 */
export class BCMPricingCalculatorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BCMPricingCalculatorClientResolvedConfig
> {
  /**
   * The resolved configuration of BCMPricingCalculatorClient class. This is resolved and normalized from the {@link BCMPricingCalculatorClientConfig | constructor configuration interface}.
   */
  readonly config: BCMPricingCalculatorClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BCMPricingCalculatorClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultBCMPricingCalculatorHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BCMPricingCalculatorClientResolvedConfig) =>
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
