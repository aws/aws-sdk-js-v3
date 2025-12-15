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
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
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
  defaultNeptuneHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput } from "./commands/AddRoleToDBClusterCommand";
import {
  AddSourceIdentifierToSubscriptionCommandInput,
  AddSourceIdentifierToSubscriptionCommandOutput,
} from "./commands/AddSourceIdentifierToSubscriptionCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  CopyDBClusterParameterGroupCommandInput,
  CopyDBClusterParameterGroupCommandOutput,
} from "./commands/CopyDBClusterParameterGroupCommand";
import {
  CopyDBClusterSnapshotCommandInput,
  CopyDBClusterSnapshotCommandOutput,
} from "./commands/CopyDBClusterSnapshotCommand";
import {
  CopyDBParameterGroupCommandInput,
  CopyDBParameterGroupCommandOutput,
} from "./commands/CopyDBParameterGroupCommand";
import { CreateDBClusterCommandInput, CreateDBClusterCommandOutput } from "./commands/CreateDBClusterCommand";
import {
  CreateDBClusterEndpointCommandInput,
  CreateDBClusterEndpointCommandOutput,
} from "./commands/CreateDBClusterEndpointCommand";
import {
  CreateDBClusterParameterGroupCommandInput,
  CreateDBClusterParameterGroupCommandOutput,
} from "./commands/CreateDBClusterParameterGroupCommand";
import {
  CreateDBClusterSnapshotCommandInput,
  CreateDBClusterSnapshotCommandOutput,
} from "./commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput } from "./commands/CreateDBInstanceCommand";
import {
  CreateDBParameterGroupCommandInput,
  CreateDBParameterGroupCommandOutput,
} from "./commands/CreateDBParameterGroupCommand";
import {
  CreateDBSubnetGroupCommandInput,
  CreateDBSubnetGroupCommandOutput,
} from "./commands/CreateDBSubnetGroupCommand";
import {
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateGlobalClusterCommandInput,
  CreateGlobalClusterCommandOutput,
} from "./commands/CreateGlobalClusterCommand";
import { DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput } from "./commands/DeleteDBClusterCommand";
import {
  DeleteDBClusterEndpointCommandInput,
  DeleteDBClusterEndpointCommandOutput,
} from "./commands/DeleteDBClusterEndpointCommand";
import {
  DeleteDBClusterParameterGroupCommandInput,
  DeleteDBClusterParameterGroupCommandOutput,
} from "./commands/DeleteDBClusterParameterGroupCommand";
import {
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput,
} from "./commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput } from "./commands/DeleteDBInstanceCommand";
import {
  DeleteDBParameterGroupCommandInput,
  DeleteDBParameterGroupCommandOutput,
} from "./commands/DeleteDBParameterGroupCommand";
import {
  DeleteDBSubnetGroupCommandInput,
  DeleteDBSubnetGroupCommandOutput,
} from "./commands/DeleteDBSubnetGroupCommand";
import {
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteGlobalClusterCommandInput,
  DeleteGlobalClusterCommandOutput,
} from "./commands/DeleteGlobalClusterCommand";
import {
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
} from "./commands/DescribeDBClusterEndpointsCommand";
import {
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
} from "./commands/DescribeDBClusterParameterGroupsCommand";
import {
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "./commands/DescribeDBClusterParametersCommand";
import { DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput } from "./commands/DescribeDBClustersCommand";
import {
  DescribeDBClusterSnapshotAttributesCommandInput,
  DescribeDBClusterSnapshotAttributesCommandOutput,
} from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import {
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "./commands/DescribeDBClusterSnapshotsCommand";
import {
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "./commands/DescribeDBEngineVersionsCommand";
import {
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "./commands/DescribeDBInstancesCommand";
import {
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "./commands/DescribeDBParameterGroupsCommand";
import {
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
} from "./commands/DescribeDBParametersCommand";
import {
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "./commands/DescribeDBSubnetGroupsCommand";
import {
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput,
} from "./commands/DescribeEngineDefaultClusterParametersCommand";
import {
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "./commands/DescribeEngineDefaultParametersCommand";
import {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "./commands/DescribeGlobalClustersCommand";
import {
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import {
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
} from "./commands/DescribeValidDBInstanceModificationsCommand";
import { FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput } from "./commands/FailoverDBClusterCommand";
import {
  FailoverGlobalClusterCommandInput,
  FailoverGlobalClusterCommandOutput,
} from "./commands/FailoverGlobalClusterCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput } from "./commands/ModifyDBClusterCommand";
import {
  ModifyDBClusterEndpointCommandInput,
  ModifyDBClusterEndpointCommandOutput,
} from "./commands/ModifyDBClusterEndpointCommand";
import {
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
} from "./commands/ModifyDBClusterParameterGroupCommand";
import {
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
} from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput } from "./commands/ModifyDBInstanceCommand";
import {
  ModifyDBParameterGroupCommandInput,
  ModifyDBParameterGroupCommandOutput,
} from "./commands/ModifyDBParameterGroupCommand";
import {
  ModifyDBSubnetGroupCommandInput,
  ModifyDBSubnetGroupCommandOutput,
} from "./commands/ModifyDBSubnetGroupCommand";
import {
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyGlobalClusterCommandInput,
  ModifyGlobalClusterCommandOutput,
} from "./commands/ModifyGlobalClusterCommand";
import {
  PromoteReadReplicaDBClusterCommandInput,
  PromoteReadReplicaDBClusterCommandOutput,
} from "./commands/PromoteReadReplicaDBClusterCommand";
import { RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput } from "./commands/RebootDBInstanceCommand";
import {
  RemoveFromGlobalClusterCommandInput,
  RemoveFromGlobalClusterCommandOutput,
} from "./commands/RemoveFromGlobalClusterCommand";
import {
  RemoveRoleFromDBClusterCommandInput,
  RemoveRoleFromDBClusterCommandOutput,
} from "./commands/RemoveRoleFromDBClusterCommand";
import {
  RemoveSourceIdentifierFromSubscriptionCommandInput,
  RemoveSourceIdentifierFromSubscriptionCommandOutput,
} from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetDBClusterParameterGroupCommandInput,
  ResetDBClusterParameterGroupCommandOutput,
} from "./commands/ResetDBClusterParameterGroupCommand";
import {
  ResetDBParameterGroupCommandInput,
  ResetDBParameterGroupCommandOutput,
} from "./commands/ResetDBParameterGroupCommand";
import {
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
} from "./commands/RestoreDBClusterFromSnapshotCommand";
import {
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
} from "./commands/RestoreDBClusterToPointInTimeCommand";
import { StartDBClusterCommandInput, StartDBClusterCommandOutput } from "./commands/StartDBClusterCommand";
import { StopDBClusterCommandInput, StopDBClusterCommandOutput } from "./commands/StopDBClusterCommand";
import {
  SwitchoverGlobalClusterCommandInput,
  SwitchoverGlobalClusterCommandOutput,
} from "./commands/SwitchoverGlobalClusterCommand";
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
  | AddRoleToDBClusterCommandInput
  | AddSourceIdentifierToSubscriptionCommandInput
  | AddTagsToResourceCommandInput
  | ApplyPendingMaintenanceActionCommandInput
  | CopyDBClusterParameterGroupCommandInput
  | CopyDBClusterSnapshotCommandInput
  | CopyDBParameterGroupCommandInput
  | CreateDBClusterCommandInput
  | CreateDBClusterEndpointCommandInput
  | CreateDBClusterParameterGroupCommandInput
  | CreateDBClusterSnapshotCommandInput
  | CreateDBInstanceCommandInput
  | CreateDBParameterGroupCommandInput
  | CreateDBSubnetGroupCommandInput
  | CreateEventSubscriptionCommandInput
  | CreateGlobalClusterCommandInput
  | DeleteDBClusterCommandInput
  | DeleteDBClusterEndpointCommandInput
  | DeleteDBClusterParameterGroupCommandInput
  | DeleteDBClusterSnapshotCommandInput
  | DeleteDBInstanceCommandInput
  | DeleteDBParameterGroupCommandInput
  | DeleteDBSubnetGroupCommandInput
  | DeleteEventSubscriptionCommandInput
  | DeleteGlobalClusterCommandInput
  | DescribeDBClusterEndpointsCommandInput
  | DescribeDBClusterParameterGroupsCommandInput
  | DescribeDBClusterParametersCommandInput
  | DescribeDBClusterSnapshotAttributesCommandInput
  | DescribeDBClusterSnapshotsCommandInput
  | DescribeDBClustersCommandInput
  | DescribeDBEngineVersionsCommandInput
  | DescribeDBInstancesCommandInput
  | DescribeDBParameterGroupsCommandInput
  | DescribeDBParametersCommandInput
  | DescribeDBSubnetGroupsCommandInput
  | DescribeEngineDefaultClusterParametersCommandInput
  | DescribeEngineDefaultParametersCommandInput
  | DescribeEventCategoriesCommandInput
  | DescribeEventSubscriptionsCommandInput
  | DescribeEventsCommandInput
  | DescribeGlobalClustersCommandInput
  | DescribeOrderableDBInstanceOptionsCommandInput
  | DescribePendingMaintenanceActionsCommandInput
  | DescribeValidDBInstanceModificationsCommandInput
  | FailoverDBClusterCommandInput
  | FailoverGlobalClusterCommandInput
  | ListTagsForResourceCommandInput
  | ModifyDBClusterCommandInput
  | ModifyDBClusterEndpointCommandInput
  | ModifyDBClusterParameterGroupCommandInput
  | ModifyDBClusterSnapshotAttributeCommandInput
  | ModifyDBInstanceCommandInput
  | ModifyDBParameterGroupCommandInput
  | ModifyDBSubnetGroupCommandInput
  | ModifyEventSubscriptionCommandInput
  | ModifyGlobalClusterCommandInput
  | PromoteReadReplicaDBClusterCommandInput
  | RebootDBInstanceCommandInput
  | RemoveFromGlobalClusterCommandInput
  | RemoveRoleFromDBClusterCommandInput
  | RemoveSourceIdentifierFromSubscriptionCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetDBClusterParameterGroupCommandInput
  | ResetDBParameterGroupCommandInput
  | RestoreDBClusterFromSnapshotCommandInput
  | RestoreDBClusterToPointInTimeCommandInput
  | StartDBClusterCommandInput
  | StopDBClusterCommandInput
  | SwitchoverGlobalClusterCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddRoleToDBClusterCommandOutput
  | AddSourceIdentifierToSubscriptionCommandOutput
  | AddTagsToResourceCommandOutput
  | ApplyPendingMaintenanceActionCommandOutput
  | CopyDBClusterParameterGroupCommandOutput
  | CopyDBClusterSnapshotCommandOutput
  | CopyDBParameterGroupCommandOutput
  | CreateDBClusterCommandOutput
  | CreateDBClusterEndpointCommandOutput
  | CreateDBClusterParameterGroupCommandOutput
  | CreateDBClusterSnapshotCommandOutput
  | CreateDBInstanceCommandOutput
  | CreateDBParameterGroupCommandOutput
  | CreateDBSubnetGroupCommandOutput
  | CreateEventSubscriptionCommandOutput
  | CreateGlobalClusterCommandOutput
  | DeleteDBClusterCommandOutput
  | DeleteDBClusterEndpointCommandOutput
  | DeleteDBClusterParameterGroupCommandOutput
  | DeleteDBClusterSnapshotCommandOutput
  | DeleteDBInstanceCommandOutput
  | DeleteDBParameterGroupCommandOutput
  | DeleteDBSubnetGroupCommandOutput
  | DeleteEventSubscriptionCommandOutput
  | DeleteGlobalClusterCommandOutput
  | DescribeDBClusterEndpointsCommandOutput
  | DescribeDBClusterParameterGroupsCommandOutput
  | DescribeDBClusterParametersCommandOutput
  | DescribeDBClusterSnapshotAttributesCommandOutput
  | DescribeDBClusterSnapshotsCommandOutput
  | DescribeDBClustersCommandOutput
  | DescribeDBEngineVersionsCommandOutput
  | DescribeDBInstancesCommandOutput
  | DescribeDBParameterGroupsCommandOutput
  | DescribeDBParametersCommandOutput
  | DescribeDBSubnetGroupsCommandOutput
  | DescribeEngineDefaultClusterParametersCommandOutput
  | DescribeEngineDefaultParametersCommandOutput
  | DescribeEventCategoriesCommandOutput
  | DescribeEventSubscriptionsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeGlobalClustersCommandOutput
  | DescribeOrderableDBInstanceOptionsCommandOutput
  | DescribePendingMaintenanceActionsCommandOutput
  | DescribeValidDBInstanceModificationsCommandOutput
  | FailoverDBClusterCommandOutput
  | FailoverGlobalClusterCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyDBClusterCommandOutput
  | ModifyDBClusterEndpointCommandOutput
  | ModifyDBClusterParameterGroupCommandOutput
  | ModifyDBClusterSnapshotAttributeCommandOutput
  | ModifyDBInstanceCommandOutput
  | ModifyDBParameterGroupCommandOutput
  | ModifyDBSubnetGroupCommandOutput
  | ModifyEventSubscriptionCommandOutput
  | ModifyGlobalClusterCommandOutput
  | PromoteReadReplicaDBClusterCommandOutput
  | RebootDBInstanceCommandOutput
  | RemoveFromGlobalClusterCommandOutput
  | RemoveRoleFromDBClusterCommandOutput
  | RemoveSourceIdentifierFromSubscriptionCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetDBClusterParameterGroupCommandOutput
  | ResetDBParameterGroupCommandOutput
  | RestoreDBClusterFromSnapshotCommandOutput
  | RestoreDBClusterToPointInTimeCommandOutput
  | StartDBClusterCommandOutput
  | StopDBClusterCommandOutput
  | SwitchoverGlobalClusterCommandOutput;

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
export type NeptuneClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of NeptuneClient class constructor that set the region, credentials and other options.
 */
export interface NeptuneClientConfig extends NeptuneClientConfigType {}

/**
 * @public
 */
export type NeptuneClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of NeptuneClient class. This is resolved and normalized from the {@link NeptuneClientConfig | constructor configuration interface}.
 */
export interface NeptuneClientResolvedConfig extends NeptuneClientResolvedConfigType {}

/**
 * <fullname>Amazon Neptune</fullname>
 *          <p>Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it
 *       easy to build and run applications that work with highly connected datasets. The core of
 *       Amazon Neptune is a purpose-built, high-performance graph database engine optimized for
 *       storing billions of relationships and querying the graph with milliseconds latency. Amazon
 *       Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query
 *       languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that
 *       efficiently navigate highly connected datasets. Neptune powers graph use cases such as
 *       recommendation engines, fraud detection, knowledge graphs, drug discovery, and network
 *       security.</p>
 *          <p>This interface reference for Amazon Neptune contains documentation for a programming or
 *       command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is
 *       asynchronous, which means that some interfaces might require techniques such as polling or
 *       callback functions to determine when a command has been applied. In this reference, the
 *       parameter descriptions indicate whether a command is applied immediately, on the next instance
 *       reboot, or during the maintenance window. The reference structure is as follows, and we list
 *       following some related topics from the user guide.</p>
 * @public
 */
export class NeptuneClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  NeptuneClientResolvedConfig
> {
  /**
   * The resolved configuration of NeptuneClient class. This is resolved and normalized from the {@link NeptuneClientConfig | constructor configuration interface}.
   */
  readonly config: NeptuneClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<NeptuneClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultNeptuneHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: NeptuneClientResolvedConfig) =>
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
