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
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
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

import { CopyImageSetCommandInput, CopyImageSetCommandOutput } from "./commands/CopyImageSetCommand";
import { CreateDatastoreCommandInput, CreateDatastoreCommandOutput } from "./commands/CreateDatastoreCommand";
import { DeleteDatastoreCommandInput, DeleteDatastoreCommandOutput } from "./commands/DeleteDatastoreCommand";
import { DeleteImageSetCommandInput, DeleteImageSetCommandOutput } from "./commands/DeleteImageSetCommand";
import { GetDatastoreCommandInput, GetDatastoreCommandOutput } from "./commands/GetDatastoreCommand";
import { GetDICOMImportJobCommandInput, GetDICOMImportJobCommandOutput } from "./commands/GetDICOMImportJobCommand";
import { GetImageFrameCommandInput, GetImageFrameCommandOutput } from "./commands/GetImageFrameCommand";
import { GetImageSetCommandInput, GetImageSetCommandOutput } from "./commands/GetImageSetCommand";
import {
  GetImageSetMetadataCommandInput,
  GetImageSetMetadataCommandOutput,
} from "./commands/GetImageSetMetadataCommand";
import { ListDatastoresCommandInput, ListDatastoresCommandOutput } from "./commands/ListDatastoresCommand";
import {
  ListDICOMImportJobsCommandInput,
  ListDICOMImportJobsCommandOutput,
} from "./commands/ListDICOMImportJobsCommand";
import {
  ListImageSetVersionsCommandInput,
  ListImageSetVersionsCommandOutput,
} from "./commands/ListImageSetVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { SearchImageSetsCommandInput, SearchImageSetsCommandOutput } from "./commands/SearchImageSetsCommand";
import {
  StartDICOMImportJobCommandInput,
  StartDICOMImportJobCommandOutput,
} from "./commands/StartDICOMImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateImageSetMetadataCommandInput,
  UpdateImageSetMetadataCommandOutput,
} from "./commands/UpdateImageSetMetadataCommand";
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
  | CopyImageSetCommandInput
  | CreateDatastoreCommandInput
  | DeleteDatastoreCommandInput
  | DeleteImageSetCommandInput
  | GetDICOMImportJobCommandInput
  | GetDatastoreCommandInput
  | GetImageFrameCommandInput
  | GetImageSetCommandInput
  | GetImageSetMetadataCommandInput
  | ListDICOMImportJobsCommandInput
  | ListDatastoresCommandInput
  | ListImageSetVersionsCommandInput
  | ListTagsForResourceCommandInput
  | SearchImageSetsCommandInput
  | StartDICOMImportJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateImageSetMetadataCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CopyImageSetCommandOutput
  | CreateDatastoreCommandOutput
  | DeleteDatastoreCommandOutput
  | DeleteImageSetCommandOutput
  | GetDICOMImportJobCommandOutput
  | GetDatastoreCommandOutput
  | GetImageFrameCommandOutput
  | GetImageSetCommandOutput
  | GetImageSetMetadataCommandOutput
  | ListDICOMImportJobsCommandOutput
  | ListDatastoresCommandOutput
  | ListImageSetVersionsCommandOutput
  | ListTagsForResourceCommandOutput
  | SearchImageSetsCommandOutput
  | StartDICOMImportJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateImageSetMetadataCommandOutput;

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
export type MedicalImagingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of MedicalImagingClient class constructor that set the region, credentials and other options.
 */
export interface MedicalImagingClientConfig extends MedicalImagingClientConfigType {}

/**
 * @public
 */
export type MedicalImagingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of MedicalImagingClient class. This is resolved and normalized from the {@link MedicalImagingClientConfig | constructor configuration interface}.
 */
export interface MedicalImagingClientResolvedConfig extends MedicalImagingClientResolvedConfigType {}

/**
 * @public
 * <p>This is the <i>AWS HealthImaging API Reference</i>. AWS HealthImaging is an AWS service for storing, accessing,
 *             and analyzing medical images. For an introduction to the service, see the <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide">
 *                <i>AWS HealthImaging Developer Guide</i>
 *             </a>.</p>
 *          <note>
 *             <p>We recommend using one of the AWS Software Development Kits (SDKs) for your programming language, as
 *                     they take care of request authentication, serialization, and connection management. For more information,
 *                     see <a href="http://aws.amazon.com/developer/tools">Tools to build on AWS</a>.</p>
 *             <p>For information about using AWS HealthImaging API actions in one of the language-specific AWS SDKs, refer to the
 *                     <i>See Also</i> link at the end of each section that describes an API action or data type.</p>
 *          </note>
 *          <p>The following sections list AWS HealthImaging API actions categorized according to functionality. Links are
 *              provided to actions within this Reference, along with links back to corresponding sections in the
 *              <i>AWS HealthImaging Developer Guide</i> so you can view console procedures and CLI/SDK code examples.</p>
 *          <p class="title">
 *             <b>Data store actions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_CreateDatastore.html">CreateDatastore</a>
 *                        – See
 *                        <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/create-data-store.html">Creating a data store</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_GetDatastore.html">GetDatastore</a>
 *                        – See
 *                        <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/get-data-store.html">Getting data store properties</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_ListDatastores.html">ListDatastores</a>
 *                        – See
 *                        <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/list-data-stores.html">Listing data stores</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_DeleteDatastore.html">DeleteDatastore</a>
 *                        – See
 *                        <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/delete-data-store.html">Deleting a data store</a>.</p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Import job actions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_StartDICOMImportJob.html">StartDICOMImportJob</a>
 *                        – See
 *                        <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/start-dicom-import-job.html">Starting an import job</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_GetDICOMImportJob.html">GetDICOMImportJob</a>
 *                        – See
 *                        <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/get-dicom-import-job.html">Getting import job properties</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_ListDICOMImportJobs.html">ListDICOMImportJobs</a>
 *                        – See
 *                        <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/list-dicom-import-jobs.html">Listing import jobs</a>.</p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Image set access actions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_SearchImageSets.html">SearchImageSets</a>
 *                         – See
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/search-image-sets.html">Searching image sets</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_GetImageSet.html">GetImageSet</a>
 *                        – See
 *                        <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/get-image-set-properties.html">Getting image set properties</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_GetImageSetMetadata.html">GetImageSetMetadata</a>
 *                         – See
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/get-image-set-metadata.html">Getting image set metadata</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_GetImageFrame.html">GetImageFrame</a>
 *                         – See
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/get-image-frame.html">Getting image set pixel data</a>.</p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Image set modification actions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_ListImageSetVersions.html">ListImageSetVersions</a>
 *                         – See
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/list-image-set-versions.html">Listing image set versions</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_UpdateImageSetMetadata.html">UpdateImageSetMetadata</a>
 *                         – See
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/update-image-set-metadata.html">Updating image set metadata</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_CopyImageSet.html">CopyImageSet</a>
 *                         – See
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/copy-image-set.html">Copying an image set</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_DeleteImageSet.html">DeleteImageSet</a>
 *                         – See
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/delete-image-set.html">Deleting an image set</a>.</p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Tagging actions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_TagResource.html">TagResource</a>
 *                         – See
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-data-store.html">Tagging a data store</a> and
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-image-set.html">Tagging an image set</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>
 *                         – See
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-data-store.html">Tagging a data store</a> and
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-image-set.html">Tagging an image set</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_UntagResource.html">UntagResource</a>
 *                         – See
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-data-store.html">Tagging a data store</a> and
 *                         <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-image-set.html">Tagging an image set</a>.</p>
 *             </li>
 *          </ul>
 */
export class MedicalImagingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MedicalImagingClientResolvedConfig
> {
  /**
   * The resolved configuration of MedicalImagingClient class. This is resolved and normalized from the {@link MedicalImagingClientConfig | constructor configuration interface}.
   */
  readonly config: MedicalImagingClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<MedicalImagingClientConfig>) {
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
