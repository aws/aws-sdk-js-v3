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
  defaultCloudDirectoryHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AddFacetToObjectCommandInput, AddFacetToObjectCommandOutput } from "./commands/AddFacetToObjectCommand";
import type { ApplySchemaCommandInput, ApplySchemaCommandOutput } from "./commands/ApplySchemaCommand";
import type { AttachObjectCommandInput, AttachObjectCommandOutput } from "./commands/AttachObjectCommand";
import type { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand";
import type { AttachToIndexCommandInput, AttachToIndexCommandOutput } from "./commands/AttachToIndexCommand";
import type { AttachTypedLinkCommandInput, AttachTypedLinkCommandOutput } from "./commands/AttachTypedLinkCommand";
import type { BatchReadCommandInput, BatchReadCommandOutput } from "./commands/BatchReadCommand";
import type { BatchWriteCommandInput, BatchWriteCommandOutput } from "./commands/BatchWriteCommand";
import type { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "./commands/CreateDirectoryCommand";
import type { CreateFacetCommandInput, CreateFacetCommandOutput } from "./commands/CreateFacetCommand";
import type { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import type { CreateObjectCommandInput, CreateObjectCommandOutput } from "./commands/CreateObjectCommand";
import type { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import type {
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput,
} from "./commands/CreateTypedLinkFacetCommand";
import type { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "./commands/DeleteDirectoryCommand";
import type { DeleteFacetCommandInput, DeleteFacetCommandOutput } from "./commands/DeleteFacetCommand";
import type { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "./commands/DeleteObjectCommand";
import type { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import type {
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput,
} from "./commands/DeleteTypedLinkFacetCommand";
import type { DetachFromIndexCommandInput, DetachFromIndexCommandOutput } from "./commands/DetachFromIndexCommand";
import type { DetachObjectCommandInput, DetachObjectCommandOutput } from "./commands/DetachObjectCommand";
import type { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand";
import type { DetachTypedLinkCommandInput, DetachTypedLinkCommandOutput } from "./commands/DetachTypedLinkCommand";
import type { DisableDirectoryCommandInput, DisableDirectoryCommandOutput } from "./commands/DisableDirectoryCommand";
import type { EnableDirectoryCommandInput, EnableDirectoryCommandOutput } from "./commands/EnableDirectoryCommand";
import type {
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput,
} from "./commands/GetAppliedSchemaVersionCommand";
import type { GetDirectoryCommandInput, GetDirectoryCommandOutput } from "./commands/GetDirectoryCommand";
import type { GetFacetCommandInput, GetFacetCommandOutput } from "./commands/GetFacetCommand";
import type {
  GetLinkAttributesCommandInput,
  GetLinkAttributesCommandOutput,
} from "./commands/GetLinkAttributesCommand";
import type {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "./commands/GetObjectAttributesCommand";
import type {
  GetObjectInformationCommandInput,
  GetObjectInformationCommandOutput,
} from "./commands/GetObjectInformationCommand";
import type { GetSchemaAsJsonCommandInput, GetSchemaAsJsonCommandOutput } from "./commands/GetSchemaAsJsonCommand";
import type {
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput,
} from "./commands/GetTypedLinkFacetInformationCommand";
import type {
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "./commands/ListAppliedSchemaArnsCommand";
import type {
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "./commands/ListAttachedIndicesCommand";
import type {
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput,
} from "./commands/ListDevelopmentSchemaArnsCommand";
import type { ListDirectoriesCommandInput, ListDirectoriesCommandOutput } from "./commands/ListDirectoriesCommand";
import type {
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "./commands/ListFacetAttributesCommand";
import type { ListFacetNamesCommandInput, ListFacetNamesCommandOutput } from "./commands/ListFacetNamesCommand";
import type {
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput,
} from "./commands/ListIncomingTypedLinksCommand";
import type { ListIndexCommandInput, ListIndexCommandOutput } from "./commands/ListIndexCommand";
import type {
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "./commands/ListManagedSchemaArnsCommand";
import type {
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "./commands/ListObjectAttributesCommand";
import type {
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput,
} from "./commands/ListObjectChildrenCommand";
import type {
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "./commands/ListObjectParentPathsCommand";
import type {
  ListObjectParentsCommandInput,
  ListObjectParentsCommandOutput,
} from "./commands/ListObjectParentsCommand";
import type {
  ListObjectPoliciesCommandInput,
  ListObjectPoliciesCommandOutput,
} from "./commands/ListObjectPoliciesCommand";
import type {
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput,
} from "./commands/ListOutgoingTypedLinksCommand";
import type {
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "./commands/ListPolicyAttachmentsCommand";
import type {
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "./commands/ListPublishedSchemaArnsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
} from "./commands/ListTypedLinkFacetAttributesCommand";
import type {
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput,
} from "./commands/ListTypedLinkFacetNamesCommand";
import type { LookupPolicyCommandInput, LookupPolicyCommandOutput } from "./commands/LookupPolicyCommand";
import type { PublishSchemaCommandInput, PublishSchemaCommandOutput } from "./commands/PublishSchemaCommand";
import type {
  PutSchemaFromJsonCommandInput,
  PutSchemaFromJsonCommandOutput,
} from "./commands/PutSchemaFromJsonCommand";
import type {
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput,
} from "./commands/RemoveFacetFromObjectCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateFacetCommandInput, UpdateFacetCommandOutput } from "./commands/UpdateFacetCommand";
import type {
  UpdateLinkAttributesCommandInput,
  UpdateLinkAttributesCommandOutput,
} from "./commands/UpdateLinkAttributesCommand";
import type {
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput,
} from "./commands/UpdateObjectAttributesCommand";
import type { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "./commands/UpdateSchemaCommand";
import type {
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
} from "./commands/UpdateTypedLinkFacetCommand";
import type {
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput,
} from "./commands/UpgradeAppliedSchemaCommand";
import type {
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput,
} from "./commands/UpgradePublishedSchemaCommand";
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
  | AddFacetToObjectCommandInput
  | ApplySchemaCommandInput
  | AttachObjectCommandInput
  | AttachPolicyCommandInput
  | AttachToIndexCommandInput
  | AttachTypedLinkCommandInput
  | BatchReadCommandInput
  | BatchWriteCommandInput
  | CreateDirectoryCommandInput
  | CreateFacetCommandInput
  | CreateIndexCommandInput
  | CreateObjectCommandInput
  | CreateSchemaCommandInput
  | CreateTypedLinkFacetCommandInput
  | DeleteDirectoryCommandInput
  | DeleteFacetCommandInput
  | DeleteObjectCommandInput
  | DeleteSchemaCommandInput
  | DeleteTypedLinkFacetCommandInput
  | DetachFromIndexCommandInput
  | DetachObjectCommandInput
  | DetachPolicyCommandInput
  | DetachTypedLinkCommandInput
  | DisableDirectoryCommandInput
  | EnableDirectoryCommandInput
  | GetAppliedSchemaVersionCommandInput
  | GetDirectoryCommandInput
  | GetFacetCommandInput
  | GetLinkAttributesCommandInput
  | GetObjectAttributesCommandInput
  | GetObjectInformationCommandInput
  | GetSchemaAsJsonCommandInput
  | GetTypedLinkFacetInformationCommandInput
  | ListAppliedSchemaArnsCommandInput
  | ListAttachedIndicesCommandInput
  | ListDevelopmentSchemaArnsCommandInput
  | ListDirectoriesCommandInput
  | ListFacetAttributesCommandInput
  | ListFacetNamesCommandInput
  | ListIncomingTypedLinksCommandInput
  | ListIndexCommandInput
  | ListManagedSchemaArnsCommandInput
  | ListObjectAttributesCommandInput
  | ListObjectChildrenCommandInput
  | ListObjectParentPathsCommandInput
  | ListObjectParentsCommandInput
  | ListObjectPoliciesCommandInput
  | ListOutgoingTypedLinksCommandInput
  | ListPolicyAttachmentsCommandInput
  | ListPublishedSchemaArnsCommandInput
  | ListTagsForResourceCommandInput
  | ListTypedLinkFacetAttributesCommandInput
  | ListTypedLinkFacetNamesCommandInput
  | LookupPolicyCommandInput
  | PublishSchemaCommandInput
  | PutSchemaFromJsonCommandInput
  | RemoveFacetFromObjectCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateFacetCommandInput
  | UpdateLinkAttributesCommandInput
  | UpdateObjectAttributesCommandInput
  | UpdateSchemaCommandInput
  | UpdateTypedLinkFacetCommandInput
  | UpgradeAppliedSchemaCommandInput
  | UpgradePublishedSchemaCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddFacetToObjectCommandOutput
  | ApplySchemaCommandOutput
  | AttachObjectCommandOutput
  | AttachPolicyCommandOutput
  | AttachToIndexCommandOutput
  | AttachTypedLinkCommandOutput
  | BatchReadCommandOutput
  | BatchWriteCommandOutput
  | CreateDirectoryCommandOutput
  | CreateFacetCommandOutput
  | CreateIndexCommandOutput
  | CreateObjectCommandOutput
  | CreateSchemaCommandOutput
  | CreateTypedLinkFacetCommandOutput
  | DeleteDirectoryCommandOutput
  | DeleteFacetCommandOutput
  | DeleteObjectCommandOutput
  | DeleteSchemaCommandOutput
  | DeleteTypedLinkFacetCommandOutput
  | DetachFromIndexCommandOutput
  | DetachObjectCommandOutput
  | DetachPolicyCommandOutput
  | DetachTypedLinkCommandOutput
  | DisableDirectoryCommandOutput
  | EnableDirectoryCommandOutput
  | GetAppliedSchemaVersionCommandOutput
  | GetDirectoryCommandOutput
  | GetFacetCommandOutput
  | GetLinkAttributesCommandOutput
  | GetObjectAttributesCommandOutput
  | GetObjectInformationCommandOutput
  | GetSchemaAsJsonCommandOutput
  | GetTypedLinkFacetInformationCommandOutput
  | ListAppliedSchemaArnsCommandOutput
  | ListAttachedIndicesCommandOutput
  | ListDevelopmentSchemaArnsCommandOutput
  | ListDirectoriesCommandOutput
  | ListFacetAttributesCommandOutput
  | ListFacetNamesCommandOutput
  | ListIncomingTypedLinksCommandOutput
  | ListIndexCommandOutput
  | ListManagedSchemaArnsCommandOutput
  | ListObjectAttributesCommandOutput
  | ListObjectChildrenCommandOutput
  | ListObjectParentPathsCommandOutput
  | ListObjectParentsCommandOutput
  | ListObjectPoliciesCommandOutput
  | ListOutgoingTypedLinksCommandOutput
  | ListPolicyAttachmentsCommandOutput
  | ListPublishedSchemaArnsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTypedLinkFacetAttributesCommandOutput
  | ListTypedLinkFacetNamesCommandOutput
  | LookupPolicyCommandOutput
  | PublishSchemaCommandOutput
  | PutSchemaFromJsonCommandOutput
  | RemoveFacetFromObjectCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFacetCommandOutput
  | UpdateLinkAttributesCommandOutput
  | UpdateObjectAttributesCommandOutput
  | UpdateSchemaCommandOutput
  | UpdateTypedLinkFacetCommandOutput
  | UpgradeAppliedSchemaCommandOutput
  | UpgradePublishedSchemaCommandOutput;

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
export type CloudDirectoryClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CloudDirectoryClient class constructor that set the region, credentials and other options.
 */
export interface CloudDirectoryClientConfig extends CloudDirectoryClientConfigType {}

/**
 * @public
 */
export type CloudDirectoryClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CloudDirectoryClient class. This is resolved and normalized from the {@link CloudDirectoryClientConfig | constructor configuration interface}.
 */
export interface CloudDirectoryClientResolvedConfig extends CloudDirectoryClientResolvedConfigType {}

/**
 * <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 * @public
 */
export class CloudDirectoryClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudDirectoryClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudDirectoryClient class. This is resolved and normalized from the {@link CloudDirectoryClientConfig | constructor configuration interface}.
   */
  readonly config: CloudDirectoryClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CloudDirectoryClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultCloudDirectoryHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CloudDirectoryClientResolvedConfig) =>
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
