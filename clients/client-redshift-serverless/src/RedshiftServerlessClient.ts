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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultRedshiftServerlessHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  ConvertRecoveryPointToSnapshotCommandInput,
  ConvertRecoveryPointToSnapshotCommandOutput,
} from "./commands/ConvertRecoveryPointToSnapshotCommand";
import {
  CreateCustomDomainAssociationCommandInput,
  CreateCustomDomainAssociationCommandOutput,
} from "./commands/CreateCustomDomainAssociationCommand";
import {
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "./commands/CreateEndpointAccessCommand";
import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "./commands/CreateNamespaceCommand";
import { CreateReservationCommandInput, CreateReservationCommandOutput } from "./commands/CreateReservationCommand";
import {
  CreateScheduledActionCommandInput,
  CreateScheduledActionCommandOutput,
} from "./commands/CreateScheduledActionCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import {
  CreateSnapshotCopyConfigurationCommandInput,
  CreateSnapshotCopyConfigurationCommandOutput,
} from "./commands/CreateSnapshotCopyConfigurationCommand";
import { CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput } from "./commands/CreateUsageLimitCommand";
import { CreateWorkgroupCommandInput, CreateWorkgroupCommandOutput } from "./commands/CreateWorkgroupCommand";
import {
  DeleteCustomDomainAssociationCommandInput,
  DeleteCustomDomainAssociationCommandOutput,
} from "./commands/DeleteCustomDomainAssociationCommand";
import {
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "./commands/DeleteEndpointAccessCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import {
  DeleteSnapshotCopyConfigurationCommandInput,
  DeleteSnapshotCopyConfigurationCommandOutput,
} from "./commands/DeleteSnapshotCopyConfigurationCommand";
import { DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput } from "./commands/DeleteUsageLimitCommand";
import { DeleteWorkgroupCommandInput, DeleteWorkgroupCommandOutput } from "./commands/DeleteWorkgroupCommand";
import { GetCredentialsCommandInput, GetCredentialsCommandOutput } from "./commands/GetCredentialsCommand";
import {
  GetCustomDomainAssociationCommandInput,
  GetCustomDomainAssociationCommandOutput,
} from "./commands/GetCustomDomainAssociationCommand";
import { GetEndpointAccessCommandInput, GetEndpointAccessCommandOutput } from "./commands/GetEndpointAccessCommand";
import {
  GetIdentityCenterAuthTokenCommandInput,
  GetIdentityCenterAuthTokenCommandOutput,
} from "./commands/GetIdentityCenterAuthTokenCommand";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "./commands/GetNamespaceCommand";
import { GetRecoveryPointCommandInput, GetRecoveryPointCommandOutput } from "./commands/GetRecoveryPointCommand";
import { GetReservationCommandInput, GetReservationCommandOutput } from "./commands/GetReservationCommand";
import {
  GetReservationOfferingCommandInput,
  GetReservationOfferingCommandOutput,
} from "./commands/GetReservationOfferingCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { GetScheduledActionCommandInput, GetScheduledActionCommandOutput } from "./commands/GetScheduledActionCommand";
import { GetSnapshotCommandInput, GetSnapshotCommandOutput } from "./commands/GetSnapshotCommand";
import {
  GetTableRestoreStatusCommandInput,
  GetTableRestoreStatusCommandOutput,
} from "./commands/GetTableRestoreStatusCommand";
import { GetTrackCommandInput, GetTrackCommandOutput } from "./commands/GetTrackCommand";
import { GetUsageLimitCommandInput, GetUsageLimitCommandOutput } from "./commands/GetUsageLimitCommand";
import { GetWorkgroupCommandInput, GetWorkgroupCommandOutput } from "./commands/GetWorkgroupCommand";
import {
  ListCustomDomainAssociationsCommandInput,
  ListCustomDomainAssociationsCommandOutput,
} from "./commands/ListCustomDomainAssociationsCommand";
import { ListEndpointAccessCommandInput, ListEndpointAccessCommandOutput } from "./commands/ListEndpointAccessCommand";
import {
  ListManagedWorkgroupsCommandInput,
  ListManagedWorkgroupsCommandOutput,
} from "./commands/ListManagedWorkgroupsCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
import { ListRecoveryPointsCommandInput, ListRecoveryPointsCommandOutput } from "./commands/ListRecoveryPointsCommand";
import {
  ListReservationOfferingsCommandInput,
  ListReservationOfferingsCommandOutput,
} from "./commands/ListReservationOfferingsCommand";
import { ListReservationsCommandInput, ListReservationsCommandOutput } from "./commands/ListReservationsCommand";
import {
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput,
} from "./commands/ListScheduledActionsCommand";
import {
  ListSnapshotCopyConfigurationsCommandInput,
  ListSnapshotCopyConfigurationsCommandOutput,
} from "./commands/ListSnapshotCopyConfigurationsCommand";
import { ListSnapshotsCommandInput, ListSnapshotsCommandOutput } from "./commands/ListSnapshotsCommand";
import {
  ListTableRestoreStatusCommandInput,
  ListTableRestoreStatusCommandOutput,
} from "./commands/ListTableRestoreStatusCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTracksCommandInput, ListTracksCommandOutput } from "./commands/ListTracksCommand";
import { ListUsageLimitsCommandInput, ListUsageLimitsCommandOutput } from "./commands/ListUsageLimitsCommand";
import { ListWorkgroupsCommandInput, ListWorkgroupsCommandOutput } from "./commands/ListWorkgroupsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  RestoreFromRecoveryPointCommandInput,
  RestoreFromRecoveryPointCommandOutput,
} from "./commands/RestoreFromRecoveryPointCommand";
import {
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand";
import {
  RestoreTableFromRecoveryPointCommandInput,
  RestoreTableFromRecoveryPointCommandOutput,
} from "./commands/RestoreTableFromRecoveryPointCommand";
import {
  RestoreTableFromSnapshotCommandInput,
  RestoreTableFromSnapshotCommandOutput,
} from "./commands/RestoreTableFromSnapshotCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateCustomDomainAssociationCommandInput,
  UpdateCustomDomainAssociationCommandOutput,
} from "./commands/UpdateCustomDomainAssociationCommand";
import {
  UpdateEndpointAccessCommandInput,
  UpdateEndpointAccessCommandOutput,
} from "./commands/UpdateEndpointAccessCommand";
import {
  UpdateLakehouseConfigurationCommandInput,
  UpdateLakehouseConfigurationCommandOutput,
} from "./commands/UpdateLakehouseConfigurationCommand";
import { UpdateNamespaceCommandInput, UpdateNamespaceCommandOutput } from "./commands/UpdateNamespaceCommand";
import {
  UpdateScheduledActionCommandInput,
  UpdateScheduledActionCommandOutput,
} from "./commands/UpdateScheduledActionCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "./commands/UpdateSnapshotCommand";
import {
  UpdateSnapshotCopyConfigurationCommandInput,
  UpdateSnapshotCopyConfigurationCommandOutput,
} from "./commands/UpdateSnapshotCopyConfigurationCommand";
import { UpdateUsageLimitCommandInput, UpdateUsageLimitCommandOutput } from "./commands/UpdateUsageLimitCommand";
import { UpdateWorkgroupCommandInput, UpdateWorkgroupCommandOutput } from "./commands/UpdateWorkgroupCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | ConvertRecoveryPointToSnapshotCommandInput
  | CreateCustomDomainAssociationCommandInput
  | CreateEndpointAccessCommandInput
  | CreateNamespaceCommandInput
  | CreateReservationCommandInput
  | CreateScheduledActionCommandInput
  | CreateSnapshotCommandInput
  | CreateSnapshotCopyConfigurationCommandInput
  | CreateUsageLimitCommandInput
  | CreateWorkgroupCommandInput
  | DeleteCustomDomainAssociationCommandInput
  | DeleteEndpointAccessCommandInput
  | DeleteNamespaceCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteScheduledActionCommandInput
  | DeleteSnapshotCommandInput
  | DeleteSnapshotCopyConfigurationCommandInput
  | DeleteUsageLimitCommandInput
  | DeleteWorkgroupCommandInput
  | GetCredentialsCommandInput
  | GetCustomDomainAssociationCommandInput
  | GetEndpointAccessCommandInput
  | GetIdentityCenterAuthTokenCommandInput
  | GetNamespaceCommandInput
  | GetRecoveryPointCommandInput
  | GetReservationCommandInput
  | GetReservationOfferingCommandInput
  | GetResourcePolicyCommandInput
  | GetScheduledActionCommandInput
  | GetSnapshotCommandInput
  | GetTableRestoreStatusCommandInput
  | GetTrackCommandInput
  | GetUsageLimitCommandInput
  | GetWorkgroupCommandInput
  | ListCustomDomainAssociationsCommandInput
  | ListEndpointAccessCommandInput
  | ListManagedWorkgroupsCommandInput
  | ListNamespacesCommandInput
  | ListRecoveryPointsCommandInput
  | ListReservationOfferingsCommandInput
  | ListReservationsCommandInput
  | ListScheduledActionsCommandInput
  | ListSnapshotCopyConfigurationsCommandInput
  | ListSnapshotsCommandInput
  | ListTableRestoreStatusCommandInput
  | ListTagsForResourceCommandInput
  | ListTracksCommandInput
  | ListUsageLimitsCommandInput
  | ListWorkgroupsCommandInput
  | PutResourcePolicyCommandInput
  | RestoreFromRecoveryPointCommandInput
  | RestoreFromSnapshotCommandInput
  | RestoreTableFromRecoveryPointCommandInput
  | RestoreTableFromSnapshotCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCustomDomainAssociationCommandInput
  | UpdateEndpointAccessCommandInput
  | UpdateLakehouseConfigurationCommandInput
  | UpdateNamespaceCommandInput
  | UpdateScheduledActionCommandInput
  | UpdateSnapshotCommandInput
  | UpdateSnapshotCopyConfigurationCommandInput
  | UpdateUsageLimitCommandInput
  | UpdateWorkgroupCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | ConvertRecoveryPointToSnapshotCommandOutput
  | CreateCustomDomainAssociationCommandOutput
  | CreateEndpointAccessCommandOutput
  | CreateNamespaceCommandOutput
  | CreateReservationCommandOutput
  | CreateScheduledActionCommandOutput
  | CreateSnapshotCommandOutput
  | CreateSnapshotCopyConfigurationCommandOutput
  | CreateUsageLimitCommandOutput
  | CreateWorkgroupCommandOutput
  | DeleteCustomDomainAssociationCommandOutput
  | DeleteEndpointAccessCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteScheduledActionCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteSnapshotCopyConfigurationCommandOutput
  | DeleteUsageLimitCommandOutput
  | DeleteWorkgroupCommandOutput
  | GetCredentialsCommandOutput
  | GetCustomDomainAssociationCommandOutput
  | GetEndpointAccessCommandOutput
  | GetIdentityCenterAuthTokenCommandOutput
  | GetNamespaceCommandOutput
  | GetRecoveryPointCommandOutput
  | GetReservationCommandOutput
  | GetReservationOfferingCommandOutput
  | GetResourcePolicyCommandOutput
  | GetScheduledActionCommandOutput
  | GetSnapshotCommandOutput
  | GetTableRestoreStatusCommandOutput
  | GetTrackCommandOutput
  | GetUsageLimitCommandOutput
  | GetWorkgroupCommandOutput
  | ListCustomDomainAssociationsCommandOutput
  | ListEndpointAccessCommandOutput
  | ListManagedWorkgroupsCommandOutput
  | ListNamespacesCommandOutput
  | ListRecoveryPointsCommandOutput
  | ListReservationOfferingsCommandOutput
  | ListReservationsCommandOutput
  | ListScheduledActionsCommandOutput
  | ListSnapshotCopyConfigurationsCommandOutput
  | ListSnapshotsCommandOutput
  | ListTableRestoreStatusCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTracksCommandOutput
  | ListUsageLimitsCommandOutput
  | ListWorkgroupsCommandOutput
  | PutResourcePolicyCommandOutput
  | RestoreFromRecoveryPointCommandOutput
  | RestoreFromSnapshotCommandOutput
  | RestoreTableFromRecoveryPointCommandOutput
  | RestoreTableFromSnapshotCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCustomDomainAssociationCommandOutput
  | UpdateEndpointAccessCommandOutput
  | UpdateLakehouseConfigurationCommandOutput
  | UpdateNamespaceCommandOutput
  | UpdateScheduledActionCommandOutput
  | UpdateSnapshotCommandOutput
  | UpdateSnapshotCopyConfigurationCommandOutput
  | UpdateUsageLimitCommandOutput
  | UpdateWorkgroupCommandOutput;

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
export type RedshiftServerlessClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of RedshiftServerlessClient class constructor that set the region, credentials and other options.
 */
export interface RedshiftServerlessClientConfig extends RedshiftServerlessClientConfigType {}

/**
 * @public
 */
export type RedshiftServerlessClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of RedshiftServerlessClient class. This is resolved and normalized from the {@link RedshiftServerlessClientConfig | constructor configuration interface}.
 */
export interface RedshiftServerlessClientResolvedConfig extends RedshiftServerlessClientResolvedConfigType {}

/**
 * <p>This is an interface reference for Amazon Redshift Serverless. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless. </p> <p>Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you focus on using your data to acquire new insights for your business and customers. </p> <p> To learn more about Amazon Redshift Serverless, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html">What is Amazon Redshift Serverless?</a>.</p>
 * @public
 */
export class RedshiftServerlessClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RedshiftServerlessClientResolvedConfig
> {
  /**
   * The resolved configuration of RedshiftServerlessClient class. This is resolved and normalized from the {@link RedshiftServerlessClientConfig | constructor configuration interface}.
   */
  readonly config: RedshiftServerlessClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<RedshiftServerlessClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultRedshiftServerlessHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: RedshiftServerlessClientResolvedConfig) =>
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
