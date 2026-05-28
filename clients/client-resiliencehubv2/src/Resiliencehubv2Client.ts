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
  defaultResiliencehubv2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { CreateAssertionCommandInput, CreateAssertionCommandOutput } from "./commands/CreateAssertionCommand";
import type {
  CreateInputSourceCommandInput,
  CreateInputSourceCommandOutput,
} from "./commands/CreateInputSourceCommand";
import type { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import type { CreateReportCommandInput, CreateReportCommandOutput } from "./commands/CreateReportCommand";
import type { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import type {
  CreateServiceFunctionCommandInput,
  CreateServiceFunctionCommandOutput,
} from "./commands/CreateServiceFunctionCommand";
import type {
  CreateServiceFunctionResourcesCommandInput,
  CreateServiceFunctionResourcesCommandOutput,
} from "./commands/CreateServiceFunctionResourcesCommand";
import type { CreateSystemCommandInput, CreateSystemCommandOutput } from "./commands/CreateSystemCommand";
import type {
  CreateUserJourneyCommandInput,
  CreateUserJourneyCommandOutput,
} from "./commands/CreateUserJourneyCommand";
import type { DeleteAssertionCommandInput, DeleteAssertionCommandOutput } from "./commands/DeleteAssertionCommand";
import type {
  DeleteInputSourceCommandInput,
  DeleteInputSourceCommandOutput,
} from "./commands/DeleteInputSourceCommand";
import type { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import type { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import type {
  DeleteServiceFunctionCommandInput,
  DeleteServiceFunctionCommandOutput,
} from "./commands/DeleteServiceFunctionCommand";
import type {
  DeleteServiceFunctionResourcesCommandInput,
  DeleteServiceFunctionResourcesCommandOutput,
} from "./commands/DeleteServiceFunctionResourcesCommand";
import type { DeleteSystemCommandInput, DeleteSystemCommandOutput } from "./commands/DeleteSystemCommand";
import type {
  DeleteUserJourneyCommandInput,
  DeleteUserJourneyCommandOutput,
} from "./commands/DeleteUserJourneyCommand";
import type {
  GetFailureModeFindingCommandInput,
  GetFailureModeFindingCommandOutput,
} from "./commands/GetFailureModeFindingCommand";
import type { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import type { GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import type { GetSystemCommandInput, GetSystemCommandOutput } from "./commands/GetSystemCommand";
import type { GetUserJourneyCommandInput, GetUserJourneyCommandOutput } from "./commands/GetUserJourneyCommand";
import type { ImportAppCommandInput, ImportAppCommandOutput } from "./commands/ImportAppCommand";
import type { ImportPolicyCommandInput, ImportPolicyCommandOutput } from "./commands/ImportPolicyCommand";
import type { ListAssertionsCommandInput, ListAssertionsCommandOutput } from "./commands/ListAssertionsCommand";
import type { ListDependenciesCommandInput, ListDependenciesCommandOutput } from "./commands/ListDependenciesCommand";
import type {
  ListFailureModeAssessmentsCommandInput,
  ListFailureModeAssessmentsCommandOutput,
} from "./commands/ListFailureModeAssessmentsCommand";
import type {
  ListFailureModeFindingsCommandInput,
  ListFailureModeFindingsCommandOutput,
} from "./commands/ListFailureModeFindingsCommand";
import type { ListInputSourcesCommandInput, ListInputSourcesCommandOutput } from "./commands/ListInputSourcesCommand";
import type { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import type { ListReportsCommandInput, ListReportsCommandOutput } from "./commands/ListReportsCommand";
import type { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import type {
  ListServiceEventsCommandInput,
  ListServiceEventsCommandOutput,
} from "./commands/ListServiceEventsCommand";
import type {
  ListServiceFunctionsCommandInput,
  ListServiceFunctionsCommandOutput,
} from "./commands/ListServiceFunctionsCommand";
import type { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import type {
  ListServiceTopologyEdgesCommandInput,
  ListServiceTopologyEdgesCommandOutput,
} from "./commands/ListServiceTopologyEdgesCommand";
import type { ListSystemEventsCommandInput, ListSystemEventsCommandOutput } from "./commands/ListSystemEventsCommand";
import type { ListSystemsCommandInput, ListSystemsCommandOutput } from "./commands/ListSystemsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListUserJourneysCommandInput, ListUserJourneysCommandOutput } from "./commands/ListUserJourneysCommand";
import type {
  StartFailureModeAssessmentCommandInput,
  StartFailureModeAssessmentCommandOutput,
} from "./commands/StartFailureModeAssessmentCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAssertionCommandInput, UpdateAssertionCommandOutput } from "./commands/UpdateAssertionCommand";
import type { UpdateDependencyCommandInput, UpdateDependencyCommandOutput } from "./commands/UpdateDependencyCommand";
import type {
  UpdateFailureModeFindingCommandInput,
  UpdateFailureModeFindingCommandOutput,
} from "./commands/UpdateFailureModeFindingCommand";
import type { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "./commands/UpdatePolicyCommand";
import type { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
import type {
  UpdateServiceFunctionCommandInput,
  UpdateServiceFunctionCommandOutput,
} from "./commands/UpdateServiceFunctionCommand";
import type { UpdateSystemCommandInput, UpdateSystemCommandOutput } from "./commands/UpdateSystemCommand";
import type {
  UpdateUserJourneyCommandInput,
  UpdateUserJourneyCommandOutput,
} from "./commands/UpdateUserJourneyCommand";
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
  | CreateAssertionCommandInput
  | CreateInputSourceCommandInput
  | CreatePolicyCommandInput
  | CreateReportCommandInput
  | CreateServiceCommandInput
  | CreateServiceFunctionCommandInput
  | CreateServiceFunctionResourcesCommandInput
  | CreateSystemCommandInput
  | CreateUserJourneyCommandInput
  | DeleteAssertionCommandInput
  | DeleteInputSourceCommandInput
  | DeletePolicyCommandInput
  | DeleteServiceCommandInput
  | DeleteServiceFunctionCommandInput
  | DeleteServiceFunctionResourcesCommandInput
  | DeleteSystemCommandInput
  | DeleteUserJourneyCommandInput
  | GetFailureModeFindingCommandInput
  | GetPolicyCommandInput
  | GetServiceCommandInput
  | GetSystemCommandInput
  | GetUserJourneyCommandInput
  | ImportAppCommandInput
  | ImportPolicyCommandInput
  | ListAssertionsCommandInput
  | ListDependenciesCommandInput
  | ListFailureModeAssessmentsCommandInput
  | ListFailureModeFindingsCommandInput
  | ListInputSourcesCommandInput
  | ListPoliciesCommandInput
  | ListReportsCommandInput
  | ListResourcesCommandInput
  | ListServiceEventsCommandInput
  | ListServiceFunctionsCommandInput
  | ListServiceTopologyEdgesCommandInput
  | ListServicesCommandInput
  | ListSystemEventsCommandInput
  | ListSystemsCommandInput
  | ListTagsForResourceCommandInput
  | ListUserJourneysCommandInput
  | StartFailureModeAssessmentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAssertionCommandInput
  | UpdateDependencyCommandInput
  | UpdateFailureModeFindingCommandInput
  | UpdatePolicyCommandInput
  | UpdateServiceCommandInput
  | UpdateServiceFunctionCommandInput
  | UpdateSystemCommandInput
  | UpdateUserJourneyCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAssertionCommandOutput
  | CreateInputSourceCommandOutput
  | CreatePolicyCommandOutput
  | CreateReportCommandOutput
  | CreateServiceCommandOutput
  | CreateServiceFunctionCommandOutput
  | CreateServiceFunctionResourcesCommandOutput
  | CreateSystemCommandOutput
  | CreateUserJourneyCommandOutput
  | DeleteAssertionCommandOutput
  | DeleteInputSourceCommandOutput
  | DeletePolicyCommandOutput
  | DeleteServiceCommandOutput
  | DeleteServiceFunctionCommandOutput
  | DeleteServiceFunctionResourcesCommandOutput
  | DeleteSystemCommandOutput
  | DeleteUserJourneyCommandOutput
  | GetFailureModeFindingCommandOutput
  | GetPolicyCommandOutput
  | GetServiceCommandOutput
  | GetSystemCommandOutput
  | GetUserJourneyCommandOutput
  | ImportAppCommandOutput
  | ImportPolicyCommandOutput
  | ListAssertionsCommandOutput
  | ListDependenciesCommandOutput
  | ListFailureModeAssessmentsCommandOutput
  | ListFailureModeFindingsCommandOutput
  | ListInputSourcesCommandOutput
  | ListPoliciesCommandOutput
  | ListReportsCommandOutput
  | ListResourcesCommandOutput
  | ListServiceEventsCommandOutput
  | ListServiceFunctionsCommandOutput
  | ListServiceTopologyEdgesCommandOutput
  | ListServicesCommandOutput
  | ListSystemEventsCommandOutput
  | ListSystemsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUserJourneysCommandOutput
  | StartFailureModeAssessmentCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAssertionCommandOutput
  | UpdateDependencyCommandOutput
  | UpdateFailureModeFindingCommandOutput
  | UpdatePolicyCommandOutput
  | UpdateServiceCommandOutput
  | UpdateServiceFunctionCommandOutput
  | UpdateSystemCommandOutput
  | UpdateUserJourneyCommandOutput;

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
export type Resiliencehubv2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of Resiliencehubv2Client class constructor that set the region, credentials and other options.
 */
export interface Resiliencehubv2ClientConfig extends Resiliencehubv2ClientConfigType {}

/**
 * @public
 */
export type Resiliencehubv2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of Resiliencehubv2Client class. This is resolved and normalized from the {@link Resiliencehubv2ClientConfig | constructor configuration interface}.
 */
export interface Resiliencehubv2ClientResolvedConfig extends Resiliencehubv2ClientResolvedConfigType {}

/**
 * <p>The next generation of AWS Resilience Hub is the single location in AWS where you assess and improve the resilience of your critical applications. It helps Site Reliability Engineers (SREs) and development teams proactively reason about resilience at scale — identifying failure modes, discovering hidden dependencies, and report on progress across the enterprise. </p>
 * @public
 */
export class Resiliencehubv2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Resiliencehubv2ClientResolvedConfig
> {
  /**
   * The resolved configuration of Resiliencehubv2Client class. This is resolved and normalized from the {@link Resiliencehubv2ClientConfig | constructor configuration interface}.
   */
  readonly config: Resiliencehubv2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<Resiliencehubv2ClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultResiliencehubv2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: Resiliencehubv2ClientResolvedConfig) =>
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
