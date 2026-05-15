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
  defaultSecurityAgentHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AddArtifactCommandInput, AddArtifactCommandOutput } from "./commands/AddArtifactCommand";
import type {
  BatchDeleteCodeReviewsCommandInput,
  BatchDeleteCodeReviewsCommandOutput,
} from "./commands/BatchDeleteCodeReviewsCommand";
import type {
  BatchDeletePentestsCommandInput,
  BatchDeletePentestsCommandOutput,
} from "./commands/BatchDeletePentestsCommand";
import type {
  BatchGetAgentSpacesCommandInput,
  BatchGetAgentSpacesCommandOutput,
} from "./commands/BatchGetAgentSpacesCommand";
import type {
  BatchGetArtifactMetadataCommandInput,
  BatchGetArtifactMetadataCommandOutput,
} from "./commands/BatchGetArtifactMetadataCommand";
import type {
  BatchGetCodeReviewJobsCommandInput,
  BatchGetCodeReviewJobsCommandOutput,
} from "./commands/BatchGetCodeReviewJobsCommand";
import type {
  BatchGetCodeReviewJobTasksCommandInput,
  BatchGetCodeReviewJobTasksCommandOutput,
} from "./commands/BatchGetCodeReviewJobTasksCommand";
import type {
  BatchGetCodeReviewsCommandInput,
  BatchGetCodeReviewsCommandOutput,
} from "./commands/BatchGetCodeReviewsCommand";
import type { BatchGetFindingsCommandInput, BatchGetFindingsCommandOutput } from "./commands/BatchGetFindingsCommand";
import type {
  BatchGetPentestJobsCommandInput,
  BatchGetPentestJobsCommandOutput,
} from "./commands/BatchGetPentestJobsCommand";
import type {
  BatchGetPentestJobTasksCommandInput,
  BatchGetPentestJobTasksCommandOutput,
} from "./commands/BatchGetPentestJobTasksCommand";
import type { BatchGetPentestsCommandInput, BatchGetPentestsCommandOutput } from "./commands/BatchGetPentestsCommand";
import type {
  BatchGetTargetDomainsCommandInput,
  BatchGetTargetDomainsCommandOutput,
} from "./commands/BatchGetTargetDomainsCommand";
import type { CreateAgentSpaceCommandInput, CreateAgentSpaceCommandOutput } from "./commands/CreateAgentSpaceCommand";
import type {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import type { CreateCodeReviewCommandInput, CreateCodeReviewCommandOutput } from "./commands/CreateCodeReviewCommand";
import type {
  CreateIntegrationCommandInput,
  CreateIntegrationCommandOutput,
} from "./commands/CreateIntegrationCommand";
import type { CreateMembershipCommandInput, CreateMembershipCommandOutput } from "./commands/CreateMembershipCommand";
import type { CreatePentestCommandInput, CreatePentestCommandOutput } from "./commands/CreatePentestCommand";
import type {
  CreateTargetDomainCommandInput,
  CreateTargetDomainCommandOutput,
} from "./commands/CreateTargetDomainCommand";
import type { DeleteAgentSpaceCommandInput, DeleteAgentSpaceCommandOutput } from "./commands/DeleteAgentSpaceCommand";
import type {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import type { DeleteArtifactCommandInput, DeleteArtifactCommandOutput } from "./commands/DeleteArtifactCommand";
import type {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import type { DeleteMembershipCommandInput, DeleteMembershipCommandOutput } from "./commands/DeleteMembershipCommand";
import type {
  DeleteTargetDomainCommandInput,
  DeleteTargetDomainCommandOutput,
} from "./commands/DeleteTargetDomainCommand";
import type { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import type { GetArtifactCommandInput, GetArtifactCommandOutput } from "./commands/GetArtifactCommand";
import type { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import type {
  InitiateProviderRegistrationCommandInput,
  InitiateProviderRegistrationCommandOutput,
} from "./commands/InitiateProviderRegistrationCommand";
import type { ListAgentSpacesCommandInput, ListAgentSpacesCommandOutput } from "./commands/ListAgentSpacesCommand";
import type { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import type { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "./commands/ListArtifactsCommand";
import type {
  ListCodeReviewJobsForCodeReviewCommandInput,
  ListCodeReviewJobsForCodeReviewCommandOutput,
} from "./commands/ListCodeReviewJobsForCodeReviewCommand";
import type {
  ListCodeReviewJobTasksCommandInput,
  ListCodeReviewJobTasksCommandOutput,
} from "./commands/ListCodeReviewJobTasksCommand";
import type { ListCodeReviewsCommandInput, ListCodeReviewsCommandOutput } from "./commands/ListCodeReviewsCommand";
import type {
  ListDiscoveredEndpointsCommandInput,
  ListDiscoveredEndpointsCommandOutput,
} from "./commands/ListDiscoveredEndpointsCommand";
import type { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import type {
  ListIntegratedResourcesCommandInput,
  ListIntegratedResourcesCommandOutput,
} from "./commands/ListIntegratedResourcesCommand";
import type { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "./commands/ListIntegrationsCommand";
import type { ListMembershipsCommandInput, ListMembershipsCommandOutput } from "./commands/ListMembershipsCommand";
import type {
  ListPentestJobsForPentestCommandInput,
  ListPentestJobsForPentestCommandOutput,
} from "./commands/ListPentestJobsForPentestCommand";
import type {
  ListPentestJobTasksCommandInput,
  ListPentestJobTasksCommandOutput,
} from "./commands/ListPentestJobTasksCommand";
import type { ListPentestsCommandInput, ListPentestsCommandOutput } from "./commands/ListPentestsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTargetDomainsCommandInput,
  ListTargetDomainsCommandOutput,
} from "./commands/ListTargetDomainsCommand";
import type {
  StartCodeRemediationCommandInput,
  StartCodeRemediationCommandOutput,
} from "./commands/StartCodeRemediationCommand";
import type {
  StartCodeReviewJobCommandInput,
  StartCodeReviewJobCommandOutput,
} from "./commands/StartCodeReviewJobCommand";
import type { StartPentestJobCommandInput, StartPentestJobCommandOutput } from "./commands/StartPentestJobCommand";
import type {
  StopCodeReviewJobCommandInput,
  StopCodeReviewJobCommandOutput,
} from "./commands/StopCodeReviewJobCommand";
import type { StopPentestJobCommandInput, StopPentestJobCommandOutput } from "./commands/StopPentestJobCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAgentSpaceCommandInput, UpdateAgentSpaceCommandOutput } from "./commands/UpdateAgentSpaceCommand";
import type {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import type { UpdateCodeReviewCommandInput, UpdateCodeReviewCommandOutput } from "./commands/UpdateCodeReviewCommand";
import type { UpdateFindingCommandInput, UpdateFindingCommandOutput } from "./commands/UpdateFindingCommand";
import type {
  UpdateIntegratedResourcesCommandInput,
  UpdateIntegratedResourcesCommandOutput,
} from "./commands/UpdateIntegratedResourcesCommand";
import type { UpdatePentestCommandInput, UpdatePentestCommandOutput } from "./commands/UpdatePentestCommand";
import type {
  UpdateTargetDomainCommandInput,
  UpdateTargetDomainCommandOutput,
} from "./commands/UpdateTargetDomainCommand";
import type {
  VerifyTargetDomainCommandInput,
  VerifyTargetDomainCommandOutput,
} from "./commands/VerifyTargetDomainCommand";
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
  | AddArtifactCommandInput
  | BatchDeleteCodeReviewsCommandInput
  | BatchDeletePentestsCommandInput
  | BatchGetAgentSpacesCommandInput
  | BatchGetArtifactMetadataCommandInput
  | BatchGetCodeReviewJobTasksCommandInput
  | BatchGetCodeReviewJobsCommandInput
  | BatchGetCodeReviewsCommandInput
  | BatchGetFindingsCommandInput
  | BatchGetPentestJobTasksCommandInput
  | BatchGetPentestJobsCommandInput
  | BatchGetPentestsCommandInput
  | BatchGetTargetDomainsCommandInput
  | CreateAgentSpaceCommandInput
  | CreateApplicationCommandInput
  | CreateCodeReviewCommandInput
  | CreateIntegrationCommandInput
  | CreateMembershipCommandInput
  | CreatePentestCommandInput
  | CreateTargetDomainCommandInput
  | DeleteAgentSpaceCommandInput
  | DeleteApplicationCommandInput
  | DeleteArtifactCommandInput
  | DeleteIntegrationCommandInput
  | DeleteMembershipCommandInput
  | DeleteTargetDomainCommandInput
  | GetApplicationCommandInput
  | GetArtifactCommandInput
  | GetIntegrationCommandInput
  | InitiateProviderRegistrationCommandInput
  | ListAgentSpacesCommandInput
  | ListApplicationsCommandInput
  | ListArtifactsCommandInput
  | ListCodeReviewJobTasksCommandInput
  | ListCodeReviewJobsForCodeReviewCommandInput
  | ListCodeReviewsCommandInput
  | ListDiscoveredEndpointsCommandInput
  | ListFindingsCommandInput
  | ListIntegratedResourcesCommandInput
  | ListIntegrationsCommandInput
  | ListMembershipsCommandInput
  | ListPentestJobTasksCommandInput
  | ListPentestJobsForPentestCommandInput
  | ListPentestsCommandInput
  | ListTagsForResourceCommandInput
  | ListTargetDomainsCommandInput
  | StartCodeRemediationCommandInput
  | StartCodeReviewJobCommandInput
  | StartPentestJobCommandInput
  | StopCodeReviewJobCommandInput
  | StopPentestJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAgentSpaceCommandInput
  | UpdateApplicationCommandInput
  | UpdateCodeReviewCommandInput
  | UpdateFindingCommandInput
  | UpdateIntegratedResourcesCommandInput
  | UpdatePentestCommandInput
  | UpdateTargetDomainCommandInput
  | VerifyTargetDomainCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddArtifactCommandOutput
  | BatchDeleteCodeReviewsCommandOutput
  | BatchDeletePentestsCommandOutput
  | BatchGetAgentSpacesCommandOutput
  | BatchGetArtifactMetadataCommandOutput
  | BatchGetCodeReviewJobTasksCommandOutput
  | BatchGetCodeReviewJobsCommandOutput
  | BatchGetCodeReviewsCommandOutput
  | BatchGetFindingsCommandOutput
  | BatchGetPentestJobTasksCommandOutput
  | BatchGetPentestJobsCommandOutput
  | BatchGetPentestsCommandOutput
  | BatchGetTargetDomainsCommandOutput
  | CreateAgentSpaceCommandOutput
  | CreateApplicationCommandOutput
  | CreateCodeReviewCommandOutput
  | CreateIntegrationCommandOutput
  | CreateMembershipCommandOutput
  | CreatePentestCommandOutput
  | CreateTargetDomainCommandOutput
  | DeleteAgentSpaceCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteArtifactCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteMembershipCommandOutput
  | DeleteTargetDomainCommandOutput
  | GetApplicationCommandOutput
  | GetArtifactCommandOutput
  | GetIntegrationCommandOutput
  | InitiateProviderRegistrationCommandOutput
  | ListAgentSpacesCommandOutput
  | ListApplicationsCommandOutput
  | ListArtifactsCommandOutput
  | ListCodeReviewJobTasksCommandOutput
  | ListCodeReviewJobsForCodeReviewCommandOutput
  | ListCodeReviewsCommandOutput
  | ListDiscoveredEndpointsCommandOutput
  | ListFindingsCommandOutput
  | ListIntegratedResourcesCommandOutput
  | ListIntegrationsCommandOutput
  | ListMembershipsCommandOutput
  | ListPentestJobTasksCommandOutput
  | ListPentestJobsForPentestCommandOutput
  | ListPentestsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTargetDomainsCommandOutput
  | StartCodeRemediationCommandOutput
  | StartCodeReviewJobCommandOutput
  | StartPentestJobCommandOutput
  | StopCodeReviewJobCommandOutput
  | StopPentestJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentSpaceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateCodeReviewCommandOutput
  | UpdateFindingCommandOutput
  | UpdateIntegratedResourcesCommandOutput
  | UpdatePentestCommandOutput
  | UpdateTargetDomainCommandOutput
  | VerifyTargetDomainCommandOutput;

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
export type SecurityAgentClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of SecurityAgentClient class constructor that set the region, credentials and other options.
 */
export interface SecurityAgentClientConfig extends SecurityAgentClientConfigType {}

/**
 * @public
 */
export type SecurityAgentClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of SecurityAgentClient class. This is resolved and normalized from the {@link SecurityAgentClientConfig | constructor configuration interface}.
 */
export interface SecurityAgentClientResolvedConfig extends SecurityAgentClientResolvedConfigType {}

/**
 * <p>AWS Security Agent is a frontier agent that proactively secures your applications throughout the development lifecycle. It conducts automated security reviews tailored to your organizational requirements and delivers context-aware penetration testing on demand. By continuously validating security from design to deployment, AWS Security Agent helps prevent vulnerabilities early across all your environments. Key capabilities include design security review for architecture documents, code security review for pull requests in connected repositories, and on-demand penetration testing that discovers, validates, and remediates security vulnerabilities through tailored multi-step attack scenarios. For more information, see the <a href="https://docs.aws.amazon.com/securityagent/latest/userguide/what-is.html">AWS Security Agent User Guide</a>.</p>
 * @public
 */
export class SecurityAgentClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SecurityAgentClientResolvedConfig
> {
  /**
   * The resolved configuration of SecurityAgentClient class. This is resolved and normalized from the {@link SecurityAgentClientConfig | constructor configuration interface}.
   */
  readonly config: SecurityAgentClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<SecurityAgentClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultSecurityAgentHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: SecurityAgentClientResolvedConfig) =>
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
