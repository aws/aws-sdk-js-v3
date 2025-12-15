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
  defaultS3TablesHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "./commands/CreateNamespaceCommand";
import { CreateTableBucketCommandInput, CreateTableBucketCommandOutput } from "./commands/CreateTableBucketCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import { DeleteTableBucketCommandInput, DeleteTableBucketCommandOutput } from "./commands/DeleteTableBucketCommand";
import {
  DeleteTableBucketEncryptionCommandInput,
  DeleteTableBucketEncryptionCommandOutput,
} from "./commands/DeleteTableBucketEncryptionCommand";
import {
  DeleteTableBucketMetricsConfigurationCommandInput,
  DeleteTableBucketMetricsConfigurationCommandOutput,
} from "./commands/DeleteTableBucketMetricsConfigurationCommand";
import {
  DeleteTableBucketPolicyCommandInput,
  DeleteTableBucketPolicyCommandOutput,
} from "./commands/DeleteTableBucketPolicyCommand";
import {
  DeleteTableBucketReplicationCommandInput,
  DeleteTableBucketReplicationCommandOutput,
} from "./commands/DeleteTableBucketReplicationCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import { DeleteTablePolicyCommandInput, DeleteTablePolicyCommandOutput } from "./commands/DeleteTablePolicyCommand";
import {
  DeleteTableReplicationCommandInput,
  DeleteTableReplicationCommandOutput,
} from "./commands/DeleteTableReplicationCommand";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "./commands/GetNamespaceCommand";
import { GetTableBucketCommandInput, GetTableBucketCommandOutput } from "./commands/GetTableBucketCommand";
import {
  GetTableBucketEncryptionCommandInput,
  GetTableBucketEncryptionCommandOutput,
} from "./commands/GetTableBucketEncryptionCommand";
import {
  GetTableBucketMaintenanceConfigurationCommandInput,
  GetTableBucketMaintenanceConfigurationCommandOutput,
} from "./commands/GetTableBucketMaintenanceConfigurationCommand";
import {
  GetTableBucketMetricsConfigurationCommandInput,
  GetTableBucketMetricsConfigurationCommandOutput,
} from "./commands/GetTableBucketMetricsConfigurationCommand";
import {
  GetTableBucketPolicyCommandInput,
  GetTableBucketPolicyCommandOutput,
} from "./commands/GetTableBucketPolicyCommand";
import {
  GetTableBucketReplicationCommandInput,
  GetTableBucketReplicationCommandOutput,
} from "./commands/GetTableBucketReplicationCommand";
import {
  GetTableBucketStorageClassCommandInput,
  GetTableBucketStorageClassCommandOutput,
} from "./commands/GetTableBucketStorageClassCommand";
import { GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import { GetTableEncryptionCommandInput, GetTableEncryptionCommandOutput } from "./commands/GetTableEncryptionCommand";
import {
  GetTableMaintenanceConfigurationCommandInput,
  GetTableMaintenanceConfigurationCommandOutput,
} from "./commands/GetTableMaintenanceConfigurationCommand";
import {
  GetTableMaintenanceJobStatusCommandInput,
  GetTableMaintenanceJobStatusCommandOutput,
} from "./commands/GetTableMaintenanceJobStatusCommand";
import {
  GetTableMetadataLocationCommandInput,
  GetTableMetadataLocationCommandOutput,
} from "./commands/GetTableMetadataLocationCommand";
import { GetTablePolicyCommandInput, GetTablePolicyCommandOutput } from "./commands/GetTablePolicyCommand";
import {
  GetTableRecordExpirationConfigurationCommandInput,
  GetTableRecordExpirationConfigurationCommandOutput,
} from "./commands/GetTableRecordExpirationConfigurationCommand";
import {
  GetTableRecordExpirationJobStatusCommandInput,
  GetTableRecordExpirationJobStatusCommandOutput,
} from "./commands/GetTableRecordExpirationJobStatusCommand";
import {
  GetTableReplicationCommandInput,
  GetTableReplicationCommandOutput,
} from "./commands/GetTableReplicationCommand";
import {
  GetTableReplicationStatusCommandInput,
  GetTableReplicationStatusCommandOutput,
} from "./commands/GetTableReplicationStatusCommand";
import {
  GetTableStorageClassCommandInput,
  GetTableStorageClassCommandOutput,
} from "./commands/GetTableStorageClassCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
import { ListTableBucketsCommandInput, ListTableBucketsCommandOutput } from "./commands/ListTableBucketsCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutTableBucketEncryptionCommandInput,
  PutTableBucketEncryptionCommandOutput,
} from "./commands/PutTableBucketEncryptionCommand";
import {
  PutTableBucketMaintenanceConfigurationCommandInput,
  PutTableBucketMaintenanceConfigurationCommandOutput,
} from "./commands/PutTableBucketMaintenanceConfigurationCommand";
import {
  PutTableBucketMetricsConfigurationCommandInput,
  PutTableBucketMetricsConfigurationCommandOutput,
} from "./commands/PutTableBucketMetricsConfigurationCommand";
import {
  PutTableBucketPolicyCommandInput,
  PutTableBucketPolicyCommandOutput,
} from "./commands/PutTableBucketPolicyCommand";
import {
  PutTableBucketReplicationCommandInput,
  PutTableBucketReplicationCommandOutput,
} from "./commands/PutTableBucketReplicationCommand";
import {
  PutTableBucketStorageClassCommandInput,
  PutTableBucketStorageClassCommandOutput,
} from "./commands/PutTableBucketStorageClassCommand";
import {
  PutTableMaintenanceConfigurationCommandInput,
  PutTableMaintenanceConfigurationCommandOutput,
} from "./commands/PutTableMaintenanceConfigurationCommand";
import { PutTablePolicyCommandInput, PutTablePolicyCommandOutput } from "./commands/PutTablePolicyCommand";
import {
  PutTableRecordExpirationConfigurationCommandInput,
  PutTableRecordExpirationConfigurationCommandOutput,
} from "./commands/PutTableRecordExpirationConfigurationCommand";
import {
  PutTableReplicationCommandInput,
  PutTableReplicationCommandOutput,
} from "./commands/PutTableReplicationCommand";
import { RenameTableCommandInput, RenameTableCommandOutput } from "./commands/RenameTableCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateTableMetadataLocationCommandInput,
  UpdateTableMetadataLocationCommandOutput,
} from "./commands/UpdateTableMetadataLocationCommand";
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
  | CreateNamespaceCommandInput
  | CreateTableBucketCommandInput
  | CreateTableCommandInput
  | DeleteNamespaceCommandInput
  | DeleteTableBucketCommandInput
  | DeleteTableBucketEncryptionCommandInput
  | DeleteTableBucketMetricsConfigurationCommandInput
  | DeleteTableBucketPolicyCommandInput
  | DeleteTableBucketReplicationCommandInput
  | DeleteTableCommandInput
  | DeleteTablePolicyCommandInput
  | DeleteTableReplicationCommandInput
  | GetNamespaceCommandInput
  | GetTableBucketCommandInput
  | GetTableBucketEncryptionCommandInput
  | GetTableBucketMaintenanceConfigurationCommandInput
  | GetTableBucketMetricsConfigurationCommandInput
  | GetTableBucketPolicyCommandInput
  | GetTableBucketReplicationCommandInput
  | GetTableBucketStorageClassCommandInput
  | GetTableCommandInput
  | GetTableEncryptionCommandInput
  | GetTableMaintenanceConfigurationCommandInput
  | GetTableMaintenanceJobStatusCommandInput
  | GetTableMetadataLocationCommandInput
  | GetTablePolicyCommandInput
  | GetTableRecordExpirationConfigurationCommandInput
  | GetTableRecordExpirationJobStatusCommandInput
  | GetTableReplicationCommandInput
  | GetTableReplicationStatusCommandInput
  | GetTableStorageClassCommandInput
  | ListNamespacesCommandInput
  | ListTableBucketsCommandInput
  | ListTablesCommandInput
  | ListTagsForResourceCommandInput
  | PutTableBucketEncryptionCommandInput
  | PutTableBucketMaintenanceConfigurationCommandInput
  | PutTableBucketMetricsConfigurationCommandInput
  | PutTableBucketPolicyCommandInput
  | PutTableBucketReplicationCommandInput
  | PutTableBucketStorageClassCommandInput
  | PutTableMaintenanceConfigurationCommandInput
  | PutTablePolicyCommandInput
  | PutTableRecordExpirationConfigurationCommandInput
  | PutTableReplicationCommandInput
  | RenameTableCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateTableMetadataLocationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateNamespaceCommandOutput
  | CreateTableBucketCommandOutput
  | CreateTableCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteTableBucketCommandOutput
  | DeleteTableBucketEncryptionCommandOutput
  | DeleteTableBucketMetricsConfigurationCommandOutput
  | DeleteTableBucketPolicyCommandOutput
  | DeleteTableBucketReplicationCommandOutput
  | DeleteTableCommandOutput
  | DeleteTablePolicyCommandOutput
  | DeleteTableReplicationCommandOutput
  | GetNamespaceCommandOutput
  | GetTableBucketCommandOutput
  | GetTableBucketEncryptionCommandOutput
  | GetTableBucketMaintenanceConfigurationCommandOutput
  | GetTableBucketMetricsConfigurationCommandOutput
  | GetTableBucketPolicyCommandOutput
  | GetTableBucketReplicationCommandOutput
  | GetTableBucketStorageClassCommandOutput
  | GetTableCommandOutput
  | GetTableEncryptionCommandOutput
  | GetTableMaintenanceConfigurationCommandOutput
  | GetTableMaintenanceJobStatusCommandOutput
  | GetTableMetadataLocationCommandOutput
  | GetTablePolicyCommandOutput
  | GetTableRecordExpirationConfigurationCommandOutput
  | GetTableRecordExpirationJobStatusCommandOutput
  | GetTableReplicationCommandOutput
  | GetTableReplicationStatusCommandOutput
  | GetTableStorageClassCommandOutput
  | ListNamespacesCommandOutput
  | ListTableBucketsCommandOutput
  | ListTablesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutTableBucketEncryptionCommandOutput
  | PutTableBucketMaintenanceConfigurationCommandOutput
  | PutTableBucketMetricsConfigurationCommandOutput
  | PutTableBucketPolicyCommandOutput
  | PutTableBucketReplicationCommandOutput
  | PutTableBucketStorageClassCommandOutput
  | PutTableMaintenanceConfigurationCommandOutput
  | PutTablePolicyCommandOutput
  | PutTableRecordExpirationConfigurationCommandOutput
  | PutTableReplicationCommandOutput
  | RenameTableCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateTableMetadataLocationCommandOutput;

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
export type S3TablesClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of S3TablesClient class constructor that set the region, credentials and other options.
 */
export interface S3TablesClientConfig extends S3TablesClientConfigType {}

/**
 * @public
 */
export type S3TablesClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of S3TablesClient class. This is resolved and normalized from the {@link S3TablesClientConfig | constructor configuration interface}.
 */
export interface S3TablesClientResolvedConfig extends S3TablesClientResolvedConfigType {}

/**
 * <p>An Amazon S3 table represents a structured dataset consisting of tabular data in <a href="https://parquet.apache.org/docs/">Apache Parquet</a> format and related metadata. This data is stored inside an S3 table as a subresource. All tables in a table bucket are stored in the <a href="https://iceberg.apache.org/docs/latest/">Apache Iceberg</a> table format. Through integration with the <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html">Amazon Web Services Glue Data Catalog</a> you can interact with your tables using Amazon Web Services analytics services, such as <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/athena/">Amazon Athena</a> and <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/redshift/">Amazon Redshift</a>. Amazon S3 manages maintenance of your tables through automatic file compaction and snapshot management. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets.html">Amazon S3 table buckets</a>.</p>
 * @public
 */
export class S3TablesClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3TablesClientResolvedConfig
> {
  /**
   * The resolved configuration of S3TablesClient class. This is resolved and normalized from the {@link S3TablesClientConfig | constructor configuration interface}.
   */
  readonly config: S3TablesClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<S3TablesClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultS3TablesHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: S3TablesClientResolvedConfig) =>
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
