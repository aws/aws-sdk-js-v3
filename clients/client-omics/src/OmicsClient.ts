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
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultOmicsHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AbortMultipartReadSetUploadCommandInput,
  AbortMultipartReadSetUploadCommandOutput,
} from "./commands/AbortMultipartReadSetUploadCommand";
import type { AcceptShareCommandInput, AcceptShareCommandOutput } from "./commands/AcceptShareCommand";
import type {
  BatchDeleteReadSetCommandInput,
  BatchDeleteReadSetCommandOutput,
} from "./commands/BatchDeleteReadSetCommand";
import type {
  CancelAnnotationImportJobCommandInput,
  CancelAnnotationImportJobCommandOutput,
} from "./commands/CancelAnnotationImportJobCommand";
import type { CancelRunBatchCommandInput, CancelRunBatchCommandOutput } from "./commands/CancelRunBatchCommand";
import type { CancelRunCommandInput, CancelRunCommandOutput } from "./commands/CancelRunCommand";
import type {
  CancelVariantImportJobCommandInput,
  CancelVariantImportJobCommandOutput,
} from "./commands/CancelVariantImportJobCommand";
import type {
  CompleteMultipartReadSetUploadCommandInput,
  CompleteMultipartReadSetUploadCommandOutput,
} from "./commands/CompleteMultipartReadSetUploadCommand";
import type {
  CreateAnnotationStoreCommandInput,
  CreateAnnotationStoreCommandOutput,
} from "./commands/CreateAnnotationStoreCommand";
import type {
  CreateAnnotationStoreVersionCommandInput,
  CreateAnnotationStoreVersionCommandOutput,
} from "./commands/CreateAnnotationStoreVersionCommand";
import type {
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
} from "./commands/CreateConfigurationCommand";
import type {
  CreateMultipartReadSetUploadCommandInput,
  CreateMultipartReadSetUploadCommandOutput,
} from "./commands/CreateMultipartReadSetUploadCommand";
import type {
  CreateReferenceStoreCommandInput,
  CreateReferenceStoreCommandOutput,
} from "./commands/CreateReferenceStoreCommand";
import type { CreateRunCacheCommandInput, CreateRunCacheCommandOutput } from "./commands/CreateRunCacheCommand";
import type { CreateRunGroupCommandInput, CreateRunGroupCommandOutput } from "./commands/CreateRunGroupCommand";
import type {
  CreateSequenceStoreCommandInput,
  CreateSequenceStoreCommandOutput,
} from "./commands/CreateSequenceStoreCommand";
import type { CreateShareCommandInput, CreateShareCommandOutput } from "./commands/CreateShareCommand";
import type {
  CreateVariantStoreCommandInput,
  CreateVariantStoreCommandOutput,
} from "./commands/CreateVariantStoreCommand";
import type { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import type {
  CreateWorkflowVersionCommandInput,
  CreateWorkflowVersionCommandOutput,
} from "./commands/CreateWorkflowVersionCommand";
import type {
  DeleteAnnotationStoreCommandInput,
  DeleteAnnotationStoreCommandOutput,
} from "./commands/DeleteAnnotationStoreCommand";
import type {
  DeleteAnnotationStoreVersionsCommandInput,
  DeleteAnnotationStoreVersionsCommandOutput,
} from "./commands/DeleteAnnotationStoreVersionsCommand";
import type { DeleteBatchCommandInput, DeleteBatchCommandOutput } from "./commands/DeleteBatchCommand";
import type {
  DeleteConfigurationCommandInput,
  DeleteConfigurationCommandOutput,
} from "./commands/DeleteConfigurationCommand";
import type { DeleteReferenceCommandInput, DeleteReferenceCommandOutput } from "./commands/DeleteReferenceCommand";
import type {
  DeleteReferenceStoreCommandInput,
  DeleteReferenceStoreCommandOutput,
} from "./commands/DeleteReferenceStoreCommand";
import type { DeleteRunBatchCommandInput, DeleteRunBatchCommandOutput } from "./commands/DeleteRunBatchCommand";
import type { DeleteRunCacheCommandInput, DeleteRunCacheCommandOutput } from "./commands/DeleteRunCacheCommand";
import type { DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand";
import type { DeleteRunGroupCommandInput, DeleteRunGroupCommandOutput } from "./commands/DeleteRunGroupCommand";
import type {
  DeleteS3AccessPolicyCommandInput,
  DeleteS3AccessPolicyCommandOutput,
} from "./commands/DeleteS3AccessPolicyCommand";
import type {
  DeleteSequenceStoreCommandInput,
  DeleteSequenceStoreCommandOutput,
} from "./commands/DeleteSequenceStoreCommand";
import type { DeleteShareCommandInput, DeleteShareCommandOutput } from "./commands/DeleteShareCommand";
import type {
  DeleteVariantStoreCommandInput,
  DeleteVariantStoreCommandOutput,
} from "./commands/DeleteVariantStoreCommand";
import type { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import type {
  DeleteWorkflowVersionCommandInput,
  DeleteWorkflowVersionCommandOutput,
} from "./commands/DeleteWorkflowVersionCommand";
import type {
  GetAnnotationImportJobCommandInput,
  GetAnnotationImportJobCommandOutput,
} from "./commands/GetAnnotationImportJobCommand";
import type {
  GetAnnotationStoreCommandInput,
  GetAnnotationStoreCommandOutput,
} from "./commands/GetAnnotationStoreCommand";
import type {
  GetAnnotationStoreVersionCommandInput,
  GetAnnotationStoreVersionCommandOutput,
} from "./commands/GetAnnotationStoreVersionCommand";
import type { GetBatchCommandInput, GetBatchCommandOutput } from "./commands/GetBatchCommand";
import type { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "./commands/GetConfigurationCommand";
import type {
  GetReadSetActivationJobCommandInput,
  GetReadSetActivationJobCommandOutput,
} from "./commands/GetReadSetActivationJobCommand";
import type { GetReadSetCommandInput, GetReadSetCommandOutput } from "./commands/GetReadSetCommand";
import type {
  GetReadSetExportJobCommandInput,
  GetReadSetExportJobCommandOutput,
} from "./commands/GetReadSetExportJobCommand";
import type {
  GetReadSetImportJobCommandInput,
  GetReadSetImportJobCommandOutput,
} from "./commands/GetReadSetImportJobCommand";
import type {
  GetReadSetMetadataCommandInput,
  GetReadSetMetadataCommandOutput,
} from "./commands/GetReadSetMetadataCommand";
import type { GetReferenceCommandInput, GetReferenceCommandOutput } from "./commands/GetReferenceCommand";
import type {
  GetReferenceImportJobCommandInput,
  GetReferenceImportJobCommandOutput,
} from "./commands/GetReferenceImportJobCommand";
import type {
  GetReferenceMetadataCommandInput,
  GetReferenceMetadataCommandOutput,
} from "./commands/GetReferenceMetadataCommand";
import type {
  GetReferenceStoreCommandInput,
  GetReferenceStoreCommandOutput,
} from "./commands/GetReferenceStoreCommand";
import type { GetRunCacheCommandInput, GetRunCacheCommandOutput } from "./commands/GetRunCacheCommand";
import type { GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand";
import type { GetRunGroupCommandInput, GetRunGroupCommandOutput } from "./commands/GetRunGroupCommand";
import type { GetRunTaskCommandInput, GetRunTaskCommandOutput } from "./commands/GetRunTaskCommand";
import type {
  GetS3AccessPolicyCommandInput,
  GetS3AccessPolicyCommandOutput,
} from "./commands/GetS3AccessPolicyCommand";
import type { GetSequenceStoreCommandInput, GetSequenceStoreCommandOutput } from "./commands/GetSequenceStoreCommand";
import type { GetShareCommandInput, GetShareCommandOutput } from "./commands/GetShareCommand";
import type {
  GetVariantImportJobCommandInput,
  GetVariantImportJobCommandOutput,
} from "./commands/GetVariantImportJobCommand";
import type { GetVariantStoreCommandInput, GetVariantStoreCommandOutput } from "./commands/GetVariantStoreCommand";
import type { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import type {
  GetWorkflowVersionCommandInput,
  GetWorkflowVersionCommandOutput,
} from "./commands/GetWorkflowVersionCommand";
import type {
  ListAnnotationImportJobsCommandInput,
  ListAnnotationImportJobsCommandOutput,
} from "./commands/ListAnnotationImportJobsCommand";
import type {
  ListAnnotationStoresCommandInput,
  ListAnnotationStoresCommandOutput,
} from "./commands/ListAnnotationStoresCommand";
import type {
  ListAnnotationStoreVersionsCommandInput,
  ListAnnotationStoreVersionsCommandOutput,
} from "./commands/ListAnnotationStoreVersionsCommand";
import type { ListBatchCommandInput, ListBatchCommandOutput } from "./commands/ListBatchCommand";
import type {
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "./commands/ListConfigurationsCommand";
import type {
  ListMultipartReadSetUploadsCommandInput,
  ListMultipartReadSetUploadsCommandOutput,
} from "./commands/ListMultipartReadSetUploadsCommand";
import type {
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput,
} from "./commands/ListReadSetActivationJobsCommand";
import type {
  ListReadSetExportJobsCommandInput,
  ListReadSetExportJobsCommandOutput,
} from "./commands/ListReadSetExportJobsCommand";
import type {
  ListReadSetImportJobsCommandInput,
  ListReadSetImportJobsCommandOutput,
} from "./commands/ListReadSetImportJobsCommand";
import type { ListReadSetsCommandInput, ListReadSetsCommandOutput } from "./commands/ListReadSetsCommand";
import type {
  ListReadSetUploadPartsCommandInput,
  ListReadSetUploadPartsCommandOutput,
} from "./commands/ListReadSetUploadPartsCommand";
import type {
  ListReferenceImportJobsCommandInput,
  ListReferenceImportJobsCommandOutput,
} from "./commands/ListReferenceImportJobsCommand";
import type { ListReferencesCommandInput, ListReferencesCommandOutput } from "./commands/ListReferencesCommand";
import type {
  ListReferenceStoresCommandInput,
  ListReferenceStoresCommandOutput,
} from "./commands/ListReferenceStoresCommand";
import type { ListRunCachesCommandInput, ListRunCachesCommandOutput } from "./commands/ListRunCachesCommand";
import type { ListRunGroupsCommandInput, ListRunGroupsCommandOutput } from "./commands/ListRunGroupsCommand";
import type { ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand";
import type { ListRunsInBatchCommandInput, ListRunsInBatchCommandOutput } from "./commands/ListRunsInBatchCommand";
import type { ListRunTasksCommandInput, ListRunTasksCommandOutput } from "./commands/ListRunTasksCommand";
import type {
  ListSequenceStoresCommandInput,
  ListSequenceStoresCommandOutput,
} from "./commands/ListSequenceStoresCommand";
import type { ListSharesCommandInput, ListSharesCommandOutput } from "./commands/ListSharesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListVariantImportJobsCommandInput,
  ListVariantImportJobsCommandOutput,
} from "./commands/ListVariantImportJobsCommand";
import type {
  ListVariantStoresCommandInput,
  ListVariantStoresCommandOutput,
} from "./commands/ListVariantStoresCommand";
import type { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import type {
  ListWorkflowVersionsCommandInput,
  ListWorkflowVersionsCommandOutput,
} from "./commands/ListWorkflowVersionsCommand";
import type {
  PutS3AccessPolicyCommandInput,
  PutS3AccessPolicyCommandOutput,
} from "./commands/PutS3AccessPolicyCommand";
import type {
  StartAnnotationImportJobCommandInput,
  StartAnnotationImportJobCommandOutput,
} from "./commands/StartAnnotationImportJobCommand";
import type {
  StartReadSetActivationJobCommandInput,
  StartReadSetActivationJobCommandOutput,
} from "./commands/StartReadSetActivationJobCommand";
import type {
  StartReadSetExportJobCommandInput,
  StartReadSetExportJobCommandOutput,
} from "./commands/StartReadSetExportJobCommand";
import type {
  StartReadSetImportJobCommandInput,
  StartReadSetImportJobCommandOutput,
} from "./commands/StartReadSetImportJobCommand";
import type {
  StartReferenceImportJobCommandInput,
  StartReferenceImportJobCommandOutput,
} from "./commands/StartReferenceImportJobCommand";
import type { StartRunBatchCommandInput, StartRunBatchCommandOutput } from "./commands/StartRunBatchCommand";
import type { StartRunCommandInput, StartRunCommandOutput } from "./commands/StartRunCommand";
import type {
  StartVariantImportJobCommandInput,
  StartVariantImportJobCommandOutput,
} from "./commands/StartVariantImportJobCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAnnotationStoreCommandInput,
  UpdateAnnotationStoreCommandOutput,
} from "./commands/UpdateAnnotationStoreCommand";
import type {
  UpdateAnnotationStoreVersionCommandInput,
  UpdateAnnotationStoreVersionCommandOutput,
} from "./commands/UpdateAnnotationStoreVersionCommand";
import type { UpdateRunCacheCommandInput, UpdateRunCacheCommandOutput } from "./commands/UpdateRunCacheCommand";
import type { UpdateRunGroupCommandInput, UpdateRunGroupCommandOutput } from "./commands/UpdateRunGroupCommand";
import type {
  UpdateSequenceStoreCommandInput,
  UpdateSequenceStoreCommandOutput,
} from "./commands/UpdateSequenceStoreCommand";
import type {
  UpdateVariantStoreCommandInput,
  UpdateVariantStoreCommandOutput,
} from "./commands/UpdateVariantStoreCommand";
import type { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "./commands/UpdateWorkflowCommand";
import type {
  UpdateWorkflowVersionCommandInput,
  UpdateWorkflowVersionCommandOutput,
} from "./commands/UpdateWorkflowVersionCommand";
import type {
  UploadReadSetPartCommandInput,
  UploadReadSetPartCommandOutput,
} from "./commands/UploadReadSetPartCommand";
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
  | AbortMultipartReadSetUploadCommandInput
  | AcceptShareCommandInput
  | BatchDeleteReadSetCommandInput
  | CancelAnnotationImportJobCommandInput
  | CancelRunBatchCommandInput
  | CancelRunCommandInput
  | CancelVariantImportJobCommandInput
  | CompleteMultipartReadSetUploadCommandInput
  | CreateAnnotationStoreCommandInput
  | CreateAnnotationStoreVersionCommandInput
  | CreateConfigurationCommandInput
  | CreateMultipartReadSetUploadCommandInput
  | CreateReferenceStoreCommandInput
  | CreateRunCacheCommandInput
  | CreateRunGroupCommandInput
  | CreateSequenceStoreCommandInput
  | CreateShareCommandInput
  | CreateVariantStoreCommandInput
  | CreateWorkflowCommandInput
  | CreateWorkflowVersionCommandInput
  | DeleteAnnotationStoreCommandInput
  | DeleteAnnotationStoreVersionsCommandInput
  | DeleteBatchCommandInput
  | DeleteConfigurationCommandInput
  | DeleteReferenceCommandInput
  | DeleteReferenceStoreCommandInput
  | DeleteRunBatchCommandInput
  | DeleteRunCacheCommandInput
  | DeleteRunCommandInput
  | DeleteRunGroupCommandInput
  | DeleteS3AccessPolicyCommandInput
  | DeleteSequenceStoreCommandInput
  | DeleteShareCommandInput
  | DeleteVariantStoreCommandInput
  | DeleteWorkflowCommandInput
  | DeleteWorkflowVersionCommandInput
  | GetAnnotationImportJobCommandInput
  | GetAnnotationStoreCommandInput
  | GetAnnotationStoreVersionCommandInput
  | GetBatchCommandInput
  | GetConfigurationCommandInput
  | GetReadSetActivationJobCommandInput
  | GetReadSetCommandInput
  | GetReadSetExportJobCommandInput
  | GetReadSetImportJobCommandInput
  | GetReadSetMetadataCommandInput
  | GetReferenceCommandInput
  | GetReferenceImportJobCommandInput
  | GetReferenceMetadataCommandInput
  | GetReferenceStoreCommandInput
  | GetRunCacheCommandInput
  | GetRunCommandInput
  | GetRunGroupCommandInput
  | GetRunTaskCommandInput
  | GetS3AccessPolicyCommandInput
  | GetSequenceStoreCommandInput
  | GetShareCommandInput
  | GetVariantImportJobCommandInput
  | GetVariantStoreCommandInput
  | GetWorkflowCommandInput
  | GetWorkflowVersionCommandInput
  | ListAnnotationImportJobsCommandInput
  | ListAnnotationStoreVersionsCommandInput
  | ListAnnotationStoresCommandInput
  | ListBatchCommandInput
  | ListConfigurationsCommandInput
  | ListMultipartReadSetUploadsCommandInput
  | ListReadSetActivationJobsCommandInput
  | ListReadSetExportJobsCommandInput
  | ListReadSetImportJobsCommandInput
  | ListReadSetUploadPartsCommandInput
  | ListReadSetsCommandInput
  | ListReferenceImportJobsCommandInput
  | ListReferenceStoresCommandInput
  | ListReferencesCommandInput
  | ListRunCachesCommandInput
  | ListRunGroupsCommandInput
  | ListRunTasksCommandInput
  | ListRunsCommandInput
  | ListRunsInBatchCommandInput
  | ListSequenceStoresCommandInput
  | ListSharesCommandInput
  | ListTagsForResourceCommandInput
  | ListVariantImportJobsCommandInput
  | ListVariantStoresCommandInput
  | ListWorkflowVersionsCommandInput
  | ListWorkflowsCommandInput
  | PutS3AccessPolicyCommandInput
  | StartAnnotationImportJobCommandInput
  | StartReadSetActivationJobCommandInput
  | StartReadSetExportJobCommandInput
  | StartReadSetImportJobCommandInput
  | StartReferenceImportJobCommandInput
  | StartRunBatchCommandInput
  | StartRunCommandInput
  | StartVariantImportJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAnnotationStoreCommandInput
  | UpdateAnnotationStoreVersionCommandInput
  | UpdateRunCacheCommandInput
  | UpdateRunGroupCommandInput
  | UpdateSequenceStoreCommandInput
  | UpdateVariantStoreCommandInput
  | UpdateWorkflowCommandInput
  | UpdateWorkflowVersionCommandInput
  | UploadReadSetPartCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AbortMultipartReadSetUploadCommandOutput
  | AcceptShareCommandOutput
  | BatchDeleteReadSetCommandOutput
  | CancelAnnotationImportJobCommandOutput
  | CancelRunBatchCommandOutput
  | CancelRunCommandOutput
  | CancelVariantImportJobCommandOutput
  | CompleteMultipartReadSetUploadCommandOutput
  | CreateAnnotationStoreCommandOutput
  | CreateAnnotationStoreVersionCommandOutput
  | CreateConfigurationCommandOutput
  | CreateMultipartReadSetUploadCommandOutput
  | CreateReferenceStoreCommandOutput
  | CreateRunCacheCommandOutput
  | CreateRunGroupCommandOutput
  | CreateSequenceStoreCommandOutput
  | CreateShareCommandOutput
  | CreateVariantStoreCommandOutput
  | CreateWorkflowCommandOutput
  | CreateWorkflowVersionCommandOutput
  | DeleteAnnotationStoreCommandOutput
  | DeleteAnnotationStoreVersionsCommandOutput
  | DeleteBatchCommandOutput
  | DeleteConfigurationCommandOutput
  | DeleteReferenceCommandOutput
  | DeleteReferenceStoreCommandOutput
  | DeleteRunBatchCommandOutput
  | DeleteRunCacheCommandOutput
  | DeleteRunCommandOutput
  | DeleteRunGroupCommandOutput
  | DeleteS3AccessPolicyCommandOutput
  | DeleteSequenceStoreCommandOutput
  | DeleteShareCommandOutput
  | DeleteVariantStoreCommandOutput
  | DeleteWorkflowCommandOutput
  | DeleteWorkflowVersionCommandOutput
  | GetAnnotationImportJobCommandOutput
  | GetAnnotationStoreCommandOutput
  | GetAnnotationStoreVersionCommandOutput
  | GetBatchCommandOutput
  | GetConfigurationCommandOutput
  | GetReadSetActivationJobCommandOutput
  | GetReadSetCommandOutput
  | GetReadSetExportJobCommandOutput
  | GetReadSetImportJobCommandOutput
  | GetReadSetMetadataCommandOutput
  | GetReferenceCommandOutput
  | GetReferenceImportJobCommandOutput
  | GetReferenceMetadataCommandOutput
  | GetReferenceStoreCommandOutput
  | GetRunCacheCommandOutput
  | GetRunCommandOutput
  | GetRunGroupCommandOutput
  | GetRunTaskCommandOutput
  | GetS3AccessPolicyCommandOutput
  | GetSequenceStoreCommandOutput
  | GetShareCommandOutput
  | GetVariantImportJobCommandOutput
  | GetVariantStoreCommandOutput
  | GetWorkflowCommandOutput
  | GetWorkflowVersionCommandOutput
  | ListAnnotationImportJobsCommandOutput
  | ListAnnotationStoreVersionsCommandOutput
  | ListAnnotationStoresCommandOutput
  | ListBatchCommandOutput
  | ListConfigurationsCommandOutput
  | ListMultipartReadSetUploadsCommandOutput
  | ListReadSetActivationJobsCommandOutput
  | ListReadSetExportJobsCommandOutput
  | ListReadSetImportJobsCommandOutput
  | ListReadSetUploadPartsCommandOutput
  | ListReadSetsCommandOutput
  | ListReferenceImportJobsCommandOutput
  | ListReferenceStoresCommandOutput
  | ListReferencesCommandOutput
  | ListRunCachesCommandOutput
  | ListRunGroupsCommandOutput
  | ListRunTasksCommandOutput
  | ListRunsCommandOutput
  | ListRunsInBatchCommandOutput
  | ListSequenceStoresCommandOutput
  | ListSharesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVariantImportJobsCommandOutput
  | ListVariantStoresCommandOutput
  | ListWorkflowVersionsCommandOutput
  | ListWorkflowsCommandOutput
  | PutS3AccessPolicyCommandOutput
  | StartAnnotationImportJobCommandOutput
  | StartReadSetActivationJobCommandOutput
  | StartReadSetExportJobCommandOutput
  | StartReadSetImportJobCommandOutput
  | StartReferenceImportJobCommandOutput
  | StartRunBatchCommandOutput
  | StartRunCommandOutput
  | StartVariantImportJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnnotationStoreCommandOutput
  | UpdateAnnotationStoreVersionCommandOutput
  | UpdateRunCacheCommandOutput
  | UpdateRunGroupCommandOutput
  | UpdateSequenceStoreCommandOutput
  | UpdateVariantStoreCommandOutput
  | UpdateWorkflowCommandOutput
  | UpdateWorkflowVersionCommandOutput
  | UploadReadSetPartCommandOutput;

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
  /**
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;

}

/**
 * @public
 */
export type OmicsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of OmicsClient class constructor that set the region, credentials and other options.
 */
export interface OmicsClientConfig extends OmicsClientConfigType {}

/**
 * @public
 */
export type OmicsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of OmicsClient class. This is resolved and normalized from the {@link OmicsClientConfig | constructor configuration interface}.
 */
export interface OmicsClientResolvedConfig extends OmicsClientResolvedConfigType {}

/**
 * <p>Amazon Web Services HealthOmics is a service that helps users such as bioinformaticians, researchers, and scientists to store, query, analyze, and generate insights from genomics and other biological data. It simplifies and accelerates the process of storing and analyzing genomic information for Amazon Web Services.</p> <p>For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/what-is-healthomics.html">What is Amazon Web Services HealthOmics?</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @public
 */
export class OmicsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OmicsClientResolvedConfig
> {
  /**
   * The resolved configuration of OmicsClient class. This is resolved and normalized from the {@link OmicsClientConfig | constructor configuration interface}.
   */
  readonly config: OmicsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<OmicsClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultOmicsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: OmicsClientResolvedConfig) =>
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
