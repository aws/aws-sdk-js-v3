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
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
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
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  AbortMultipartReadSetUploadCommandInput,
  AbortMultipartReadSetUploadCommandOutput,
} from "./commands/AbortMultipartReadSetUploadCommand";
import { AcceptShareCommandInput, AcceptShareCommandOutput } from "./commands/AcceptShareCommand";
import { BatchDeleteReadSetCommandInput, BatchDeleteReadSetCommandOutput } from "./commands/BatchDeleteReadSetCommand";
import {
  CancelAnnotationImportJobCommandInput,
  CancelAnnotationImportJobCommandOutput,
} from "./commands/CancelAnnotationImportJobCommand";
import { CancelRunCommandInput, CancelRunCommandOutput } from "./commands/CancelRunCommand";
import {
  CancelVariantImportJobCommandInput,
  CancelVariantImportJobCommandOutput,
} from "./commands/CancelVariantImportJobCommand";
import {
  CompleteMultipartReadSetUploadCommandInput,
  CompleteMultipartReadSetUploadCommandOutput,
} from "./commands/CompleteMultipartReadSetUploadCommand";
import {
  CreateAnnotationStoreCommandInput,
  CreateAnnotationStoreCommandOutput,
} from "./commands/CreateAnnotationStoreCommand";
import {
  CreateAnnotationStoreVersionCommandInput,
  CreateAnnotationStoreVersionCommandOutput,
} from "./commands/CreateAnnotationStoreVersionCommand";
import {
  CreateMultipartReadSetUploadCommandInput,
  CreateMultipartReadSetUploadCommandOutput,
} from "./commands/CreateMultipartReadSetUploadCommand";
import {
  CreateReferenceStoreCommandInput,
  CreateReferenceStoreCommandOutput,
} from "./commands/CreateReferenceStoreCommand";
import { CreateRunGroupCommandInput, CreateRunGroupCommandOutput } from "./commands/CreateRunGroupCommand";
import {
  CreateSequenceStoreCommandInput,
  CreateSequenceStoreCommandOutput,
} from "./commands/CreateSequenceStoreCommand";
import { CreateShareCommandInput, CreateShareCommandOutput } from "./commands/CreateShareCommand";
import { CreateVariantStoreCommandInput, CreateVariantStoreCommandOutput } from "./commands/CreateVariantStoreCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import {
  DeleteAnnotationStoreCommandInput,
  DeleteAnnotationStoreCommandOutput,
} from "./commands/DeleteAnnotationStoreCommand";
import {
  DeleteAnnotationStoreVersionsCommandInput,
  DeleteAnnotationStoreVersionsCommandOutput,
} from "./commands/DeleteAnnotationStoreVersionsCommand";
import { DeleteReferenceCommandInput, DeleteReferenceCommandOutput } from "./commands/DeleteReferenceCommand";
import {
  DeleteReferenceStoreCommandInput,
  DeleteReferenceStoreCommandOutput,
} from "./commands/DeleteReferenceStoreCommand";
import { DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand";
import { DeleteRunGroupCommandInput, DeleteRunGroupCommandOutput } from "./commands/DeleteRunGroupCommand";
import {
  DeleteSequenceStoreCommandInput,
  DeleteSequenceStoreCommandOutput,
} from "./commands/DeleteSequenceStoreCommand";
import { DeleteShareCommandInput, DeleteShareCommandOutput } from "./commands/DeleteShareCommand";
import { DeleteVariantStoreCommandInput, DeleteVariantStoreCommandOutput } from "./commands/DeleteVariantStoreCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import {
  GetAnnotationImportJobCommandInput,
  GetAnnotationImportJobCommandOutput,
} from "./commands/GetAnnotationImportJobCommand";
import { GetAnnotationStoreCommandInput, GetAnnotationStoreCommandOutput } from "./commands/GetAnnotationStoreCommand";
import {
  GetAnnotationStoreVersionCommandInput,
  GetAnnotationStoreVersionCommandOutput,
} from "./commands/GetAnnotationStoreVersionCommand";
import {
  GetReadSetActivationJobCommandInput,
  GetReadSetActivationJobCommandOutput,
} from "./commands/GetReadSetActivationJobCommand";
import { GetReadSetCommandInput, GetReadSetCommandOutput } from "./commands/GetReadSetCommand";
import {
  GetReadSetExportJobCommandInput,
  GetReadSetExportJobCommandOutput,
} from "./commands/GetReadSetExportJobCommand";
import {
  GetReadSetImportJobCommandInput,
  GetReadSetImportJobCommandOutput,
} from "./commands/GetReadSetImportJobCommand";
import { GetReadSetMetadataCommandInput, GetReadSetMetadataCommandOutput } from "./commands/GetReadSetMetadataCommand";
import { GetReferenceCommandInput, GetReferenceCommandOutput } from "./commands/GetReferenceCommand";
import {
  GetReferenceImportJobCommandInput,
  GetReferenceImportJobCommandOutput,
} from "./commands/GetReferenceImportJobCommand";
import {
  GetReferenceMetadataCommandInput,
  GetReferenceMetadataCommandOutput,
} from "./commands/GetReferenceMetadataCommand";
import { GetReferenceStoreCommandInput, GetReferenceStoreCommandOutput } from "./commands/GetReferenceStoreCommand";
import { GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand";
import { GetRunGroupCommandInput, GetRunGroupCommandOutput } from "./commands/GetRunGroupCommand";
import { GetRunTaskCommandInput, GetRunTaskCommandOutput } from "./commands/GetRunTaskCommand";
import { GetSequenceStoreCommandInput, GetSequenceStoreCommandOutput } from "./commands/GetSequenceStoreCommand";
import { GetShareCommandInput, GetShareCommandOutput } from "./commands/GetShareCommand";
import {
  GetVariantImportJobCommandInput,
  GetVariantImportJobCommandOutput,
} from "./commands/GetVariantImportJobCommand";
import { GetVariantStoreCommandInput, GetVariantStoreCommandOutput } from "./commands/GetVariantStoreCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  ListAnnotationImportJobsCommandInput,
  ListAnnotationImportJobsCommandOutput,
} from "./commands/ListAnnotationImportJobsCommand";
import {
  ListAnnotationStoresCommandInput,
  ListAnnotationStoresCommandOutput,
} from "./commands/ListAnnotationStoresCommand";
import {
  ListAnnotationStoreVersionsCommandInput,
  ListAnnotationStoreVersionsCommandOutput,
} from "./commands/ListAnnotationStoreVersionsCommand";
import {
  ListMultipartReadSetUploadsCommandInput,
  ListMultipartReadSetUploadsCommandOutput,
} from "./commands/ListMultipartReadSetUploadsCommand";
import {
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput,
} from "./commands/ListReadSetActivationJobsCommand";
import {
  ListReadSetExportJobsCommandInput,
  ListReadSetExportJobsCommandOutput,
} from "./commands/ListReadSetExportJobsCommand";
import {
  ListReadSetImportJobsCommandInput,
  ListReadSetImportJobsCommandOutput,
} from "./commands/ListReadSetImportJobsCommand";
import { ListReadSetsCommandInput, ListReadSetsCommandOutput } from "./commands/ListReadSetsCommand";
import {
  ListReadSetUploadPartsCommandInput,
  ListReadSetUploadPartsCommandOutput,
} from "./commands/ListReadSetUploadPartsCommand";
import {
  ListReferenceImportJobsCommandInput,
  ListReferenceImportJobsCommandOutput,
} from "./commands/ListReferenceImportJobsCommand";
import { ListReferencesCommandInput, ListReferencesCommandOutput } from "./commands/ListReferencesCommand";
import {
  ListReferenceStoresCommandInput,
  ListReferenceStoresCommandOutput,
} from "./commands/ListReferenceStoresCommand";
import { ListRunGroupsCommandInput, ListRunGroupsCommandOutput } from "./commands/ListRunGroupsCommand";
import { ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand";
import { ListRunTasksCommandInput, ListRunTasksCommandOutput } from "./commands/ListRunTasksCommand";
import { ListSequenceStoresCommandInput, ListSequenceStoresCommandOutput } from "./commands/ListSequenceStoresCommand";
import { ListSharesCommandInput, ListSharesCommandOutput } from "./commands/ListSharesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVariantImportJobsCommandInput,
  ListVariantImportJobsCommandOutput,
} from "./commands/ListVariantImportJobsCommand";
import { ListVariantStoresCommandInput, ListVariantStoresCommandOutput } from "./commands/ListVariantStoresCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import {
  StartAnnotationImportJobCommandInput,
  StartAnnotationImportJobCommandOutput,
} from "./commands/StartAnnotationImportJobCommand";
import {
  StartReadSetActivationJobCommandInput,
  StartReadSetActivationJobCommandOutput,
} from "./commands/StartReadSetActivationJobCommand";
import {
  StartReadSetExportJobCommandInput,
  StartReadSetExportJobCommandOutput,
} from "./commands/StartReadSetExportJobCommand";
import {
  StartReadSetImportJobCommandInput,
  StartReadSetImportJobCommandOutput,
} from "./commands/StartReadSetImportJobCommand";
import {
  StartReferenceImportJobCommandInput,
  StartReferenceImportJobCommandOutput,
} from "./commands/StartReferenceImportJobCommand";
import { StartRunCommandInput, StartRunCommandOutput } from "./commands/StartRunCommand";
import {
  StartVariantImportJobCommandInput,
  StartVariantImportJobCommandOutput,
} from "./commands/StartVariantImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAnnotationStoreCommandInput,
  UpdateAnnotationStoreCommandOutput,
} from "./commands/UpdateAnnotationStoreCommand";
import {
  UpdateAnnotationStoreVersionCommandInput,
  UpdateAnnotationStoreVersionCommandOutput,
} from "./commands/UpdateAnnotationStoreVersionCommand";
import { UpdateRunGroupCommandInput, UpdateRunGroupCommandOutput } from "./commands/UpdateRunGroupCommand";
import { UpdateVariantStoreCommandInput, UpdateVariantStoreCommandOutput } from "./commands/UpdateVariantStoreCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "./commands/UpdateWorkflowCommand";
import { UploadReadSetPartCommandInput, UploadReadSetPartCommandOutput } from "./commands/UploadReadSetPartCommand";
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
  | AbortMultipartReadSetUploadCommandInput
  | AcceptShareCommandInput
  | BatchDeleteReadSetCommandInput
  | CancelAnnotationImportJobCommandInput
  | CancelRunCommandInput
  | CancelVariantImportJobCommandInput
  | CompleteMultipartReadSetUploadCommandInput
  | CreateAnnotationStoreCommandInput
  | CreateAnnotationStoreVersionCommandInput
  | CreateMultipartReadSetUploadCommandInput
  | CreateReferenceStoreCommandInput
  | CreateRunGroupCommandInput
  | CreateSequenceStoreCommandInput
  | CreateShareCommandInput
  | CreateVariantStoreCommandInput
  | CreateWorkflowCommandInput
  | DeleteAnnotationStoreCommandInput
  | DeleteAnnotationStoreVersionsCommandInput
  | DeleteReferenceCommandInput
  | DeleteReferenceStoreCommandInput
  | DeleteRunCommandInput
  | DeleteRunGroupCommandInput
  | DeleteSequenceStoreCommandInput
  | DeleteShareCommandInput
  | DeleteVariantStoreCommandInput
  | DeleteWorkflowCommandInput
  | GetAnnotationImportJobCommandInput
  | GetAnnotationStoreCommandInput
  | GetAnnotationStoreVersionCommandInput
  | GetReadSetActivationJobCommandInput
  | GetReadSetCommandInput
  | GetReadSetExportJobCommandInput
  | GetReadSetImportJobCommandInput
  | GetReadSetMetadataCommandInput
  | GetReferenceCommandInput
  | GetReferenceImportJobCommandInput
  | GetReferenceMetadataCommandInput
  | GetReferenceStoreCommandInput
  | GetRunCommandInput
  | GetRunGroupCommandInput
  | GetRunTaskCommandInput
  | GetSequenceStoreCommandInput
  | GetShareCommandInput
  | GetVariantImportJobCommandInput
  | GetVariantStoreCommandInput
  | GetWorkflowCommandInput
  | ListAnnotationImportJobsCommandInput
  | ListAnnotationStoreVersionsCommandInput
  | ListAnnotationStoresCommandInput
  | ListMultipartReadSetUploadsCommandInput
  | ListReadSetActivationJobsCommandInput
  | ListReadSetExportJobsCommandInput
  | ListReadSetImportJobsCommandInput
  | ListReadSetUploadPartsCommandInput
  | ListReadSetsCommandInput
  | ListReferenceImportJobsCommandInput
  | ListReferenceStoresCommandInput
  | ListReferencesCommandInput
  | ListRunGroupsCommandInput
  | ListRunTasksCommandInput
  | ListRunsCommandInput
  | ListSequenceStoresCommandInput
  | ListSharesCommandInput
  | ListTagsForResourceCommandInput
  | ListVariantImportJobsCommandInput
  | ListVariantStoresCommandInput
  | ListWorkflowsCommandInput
  | StartAnnotationImportJobCommandInput
  | StartReadSetActivationJobCommandInput
  | StartReadSetExportJobCommandInput
  | StartReadSetImportJobCommandInput
  | StartReferenceImportJobCommandInput
  | StartRunCommandInput
  | StartVariantImportJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAnnotationStoreCommandInput
  | UpdateAnnotationStoreVersionCommandInput
  | UpdateRunGroupCommandInput
  | UpdateVariantStoreCommandInput
  | UpdateWorkflowCommandInput
  | UploadReadSetPartCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AbortMultipartReadSetUploadCommandOutput
  | AcceptShareCommandOutput
  | BatchDeleteReadSetCommandOutput
  | CancelAnnotationImportJobCommandOutput
  | CancelRunCommandOutput
  | CancelVariantImportJobCommandOutput
  | CompleteMultipartReadSetUploadCommandOutput
  | CreateAnnotationStoreCommandOutput
  | CreateAnnotationStoreVersionCommandOutput
  | CreateMultipartReadSetUploadCommandOutput
  | CreateReferenceStoreCommandOutput
  | CreateRunGroupCommandOutput
  | CreateSequenceStoreCommandOutput
  | CreateShareCommandOutput
  | CreateVariantStoreCommandOutput
  | CreateWorkflowCommandOutput
  | DeleteAnnotationStoreCommandOutput
  | DeleteAnnotationStoreVersionsCommandOutput
  | DeleteReferenceCommandOutput
  | DeleteReferenceStoreCommandOutput
  | DeleteRunCommandOutput
  | DeleteRunGroupCommandOutput
  | DeleteSequenceStoreCommandOutput
  | DeleteShareCommandOutput
  | DeleteVariantStoreCommandOutput
  | DeleteWorkflowCommandOutput
  | GetAnnotationImportJobCommandOutput
  | GetAnnotationStoreCommandOutput
  | GetAnnotationStoreVersionCommandOutput
  | GetReadSetActivationJobCommandOutput
  | GetReadSetCommandOutput
  | GetReadSetExportJobCommandOutput
  | GetReadSetImportJobCommandOutput
  | GetReadSetMetadataCommandOutput
  | GetReferenceCommandOutput
  | GetReferenceImportJobCommandOutput
  | GetReferenceMetadataCommandOutput
  | GetReferenceStoreCommandOutput
  | GetRunCommandOutput
  | GetRunGroupCommandOutput
  | GetRunTaskCommandOutput
  | GetSequenceStoreCommandOutput
  | GetShareCommandOutput
  | GetVariantImportJobCommandOutput
  | GetVariantStoreCommandOutput
  | GetWorkflowCommandOutput
  | ListAnnotationImportJobsCommandOutput
  | ListAnnotationStoreVersionsCommandOutput
  | ListAnnotationStoresCommandOutput
  | ListMultipartReadSetUploadsCommandOutput
  | ListReadSetActivationJobsCommandOutput
  | ListReadSetExportJobsCommandOutput
  | ListReadSetImportJobsCommandOutput
  | ListReadSetUploadPartsCommandOutput
  | ListReadSetsCommandOutput
  | ListReferenceImportJobsCommandOutput
  | ListReferenceStoresCommandOutput
  | ListReferencesCommandOutput
  | ListRunGroupsCommandOutput
  | ListRunTasksCommandOutput
  | ListRunsCommandOutput
  | ListSequenceStoresCommandOutput
  | ListSharesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVariantImportJobsCommandOutput
  | ListVariantStoresCommandOutput
  | ListWorkflowsCommandOutput
  | StartAnnotationImportJobCommandOutput
  | StartReadSetActivationJobCommandOutput
  | StartReadSetExportJobCommandOutput
  | StartReadSetImportJobCommandOutput
  | StartReferenceImportJobCommandOutput
  | StartRunCommandOutput
  | StartVariantImportJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnnotationStoreCommandOutput
  | UpdateAnnotationStoreVersionCommandOutput
  | UpdateRunGroupCommandOutput
  | UpdateVariantStoreCommandOutput
  | UpdateWorkflowCommandOutput
  | UploadReadSetPartCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
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
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of OmicsClient class. This is resolved and normalized from the {@link OmicsClientConfig | constructor configuration interface}.
 */
export interface OmicsClientResolvedConfig extends OmicsClientResolvedConfigType {}

/**
 * @public
 * <p>This is the <i>AWS HealthOmics API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/">What is AWS HealthOmics?</a> in the
 *       <i>AWS HealthOmics User Guide</i>.</p>
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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
