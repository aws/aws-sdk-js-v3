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
  defaultRekognitionHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AssociateFacesCommandInput, AssociateFacesCommandOutput } from "./commands/AssociateFacesCommand";
import type { CompareFacesCommandInput, CompareFacesCommandOutput } from "./commands/CompareFacesCommand";
import type {
  CopyProjectVersionCommandInput,
  CopyProjectVersionCommandOutput,
} from "./commands/CopyProjectVersionCommand";
import type { CreateCollectionCommandInput, CreateCollectionCommandOutput } from "./commands/CreateCollectionCommand";
import type { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import type {
  CreateFaceLivenessSessionCommandInput,
  CreateFaceLivenessSessionCommandOutput,
} from "./commands/CreateFaceLivenessSessionCommand";
import type { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import type {
  CreateProjectVersionCommandInput,
  CreateProjectVersionCommandOutput,
} from "./commands/CreateProjectVersionCommand";
import type {
  CreateStreamProcessorCommandInput,
  CreateStreamProcessorCommandOutput,
} from "./commands/CreateStreamProcessorCommand";
import type { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import type { DeleteCollectionCommandInput, DeleteCollectionCommandOutput } from "./commands/DeleteCollectionCommand";
import type { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import type { DeleteFacesCommandInput, DeleteFacesCommandOutput } from "./commands/DeleteFacesCommand";
import type { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import type {
  DeleteProjectPolicyCommandInput,
  DeleteProjectPolicyCommandOutput,
} from "./commands/DeleteProjectPolicyCommand";
import type {
  DeleteProjectVersionCommandInput,
  DeleteProjectVersionCommandOutput,
} from "./commands/DeleteProjectVersionCommand";
import type {
  DeleteStreamProcessorCommandInput,
  DeleteStreamProcessorCommandOutput,
} from "./commands/DeleteStreamProcessorCommand";
import type { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import type {
  DescribeCollectionCommandInput,
  DescribeCollectionCommandOutput,
} from "./commands/DescribeCollectionCommand";
import type { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import type { DescribeProjectsCommandInput, DescribeProjectsCommandOutput } from "./commands/DescribeProjectsCommand";
import type {
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
} from "./commands/DescribeProjectVersionsCommand";
import type {
  DescribeStreamProcessorCommandInput,
  DescribeStreamProcessorCommandOutput,
} from "./commands/DescribeStreamProcessorCommand";
import type {
  DetectCustomLabelsCommandInput,
  DetectCustomLabelsCommandOutput,
} from "./commands/DetectCustomLabelsCommand";
import type { DetectFacesCommandInput, DetectFacesCommandOutput } from "./commands/DetectFacesCommand";
import type { DetectLabelsCommandInput, DetectLabelsCommandOutput } from "./commands/DetectLabelsCommand";
import type {
  DetectModerationLabelsCommandInput,
  DetectModerationLabelsCommandOutput,
} from "./commands/DetectModerationLabelsCommand";
import type {
  DetectProtectiveEquipmentCommandInput,
  DetectProtectiveEquipmentCommandOutput,
} from "./commands/DetectProtectiveEquipmentCommand";
import type { DetectTextCommandInput, DetectTextCommandOutput } from "./commands/DetectTextCommand";
import type {
  DisassociateFacesCommandInput,
  DisassociateFacesCommandOutput,
} from "./commands/DisassociateFacesCommand";
import type {
  DistributeDatasetEntriesCommandInput,
  DistributeDatasetEntriesCommandOutput,
} from "./commands/DistributeDatasetEntriesCommand";
import type { GetCelebrityInfoCommandInput, GetCelebrityInfoCommandOutput } from "./commands/GetCelebrityInfoCommand";
import type {
  GetCelebrityRecognitionCommandInput,
  GetCelebrityRecognitionCommandOutput,
} from "./commands/GetCelebrityRecognitionCommand";
import type {
  GetContentModerationCommandInput,
  GetContentModerationCommandOutput,
} from "./commands/GetContentModerationCommand";
import type { GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput } from "./commands/GetFaceDetectionCommand";
import type {
  GetFaceLivenessSessionResultsCommandInput,
  GetFaceLivenessSessionResultsCommandOutput,
} from "./commands/GetFaceLivenessSessionResultsCommand";
import type { GetFaceSearchCommandInput, GetFaceSearchCommandOutput } from "./commands/GetFaceSearchCommand";
import type {
  GetLabelDetectionCommandInput,
  GetLabelDetectionCommandOutput,
} from "./commands/GetLabelDetectionCommand";
import type {
  GetMediaAnalysisJobCommandInput,
  GetMediaAnalysisJobCommandOutput,
} from "./commands/GetMediaAnalysisJobCommand";
import type {
  GetPersonTrackingCommandInput,
  GetPersonTrackingCommandOutput,
} from "./commands/GetPersonTrackingCommand";
import type {
  GetSegmentDetectionCommandInput,
  GetSegmentDetectionCommandOutput,
} from "./commands/GetSegmentDetectionCommand";
import type { GetTextDetectionCommandInput, GetTextDetectionCommandOutput } from "./commands/GetTextDetectionCommand";
import type { IndexFacesCommandInput, IndexFacesCommandOutput } from "./commands/IndexFacesCommand";
import type { ListCollectionsCommandInput, ListCollectionsCommandOutput } from "./commands/ListCollectionsCommand";
import type {
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput,
} from "./commands/ListDatasetEntriesCommand";
import type {
  ListDatasetLabelsCommandInput,
  ListDatasetLabelsCommandOutput,
} from "./commands/ListDatasetLabelsCommand";
import type { ListFacesCommandInput, ListFacesCommandOutput } from "./commands/ListFacesCommand";
import type {
  ListMediaAnalysisJobsCommandInput,
  ListMediaAnalysisJobsCommandOutput,
} from "./commands/ListMediaAnalysisJobsCommand";
import type {
  ListProjectPoliciesCommandInput,
  ListProjectPoliciesCommandOutput,
} from "./commands/ListProjectPoliciesCommand";
import type {
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput,
} from "./commands/ListStreamProcessorsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import type { PutProjectPolicyCommandInput, PutProjectPolicyCommandOutput } from "./commands/PutProjectPolicyCommand";
import type {
  RecognizeCelebritiesCommandInput,
  RecognizeCelebritiesCommandOutput,
} from "./commands/RecognizeCelebritiesCommand";
import type {
  SearchFacesByImageCommandInput,
  SearchFacesByImageCommandOutput,
} from "./commands/SearchFacesByImageCommand";
import type { SearchFacesCommandInput, SearchFacesCommandOutput } from "./commands/SearchFacesCommand";
import type {
  SearchUsersByImageCommandInput,
  SearchUsersByImageCommandOutput,
} from "./commands/SearchUsersByImageCommand";
import type { SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import type {
  StartCelebrityRecognitionCommandInput,
  StartCelebrityRecognitionCommandOutput,
} from "./commands/StartCelebrityRecognitionCommand";
import type {
  StartContentModerationCommandInput,
  StartContentModerationCommandOutput,
} from "./commands/StartContentModerationCommand";
import type {
  StartFaceDetectionCommandInput,
  StartFaceDetectionCommandOutput,
} from "./commands/StartFaceDetectionCommand";
import type { StartFaceSearchCommandInput, StartFaceSearchCommandOutput } from "./commands/StartFaceSearchCommand";
import type {
  StartLabelDetectionCommandInput,
  StartLabelDetectionCommandOutput,
} from "./commands/StartLabelDetectionCommand";
import type {
  StartMediaAnalysisJobCommandInput,
  StartMediaAnalysisJobCommandOutput,
} from "./commands/StartMediaAnalysisJobCommand";
import type {
  StartPersonTrackingCommandInput,
  StartPersonTrackingCommandOutput,
} from "./commands/StartPersonTrackingCommand";
import type {
  StartProjectVersionCommandInput,
  StartProjectVersionCommandOutput,
} from "./commands/StartProjectVersionCommand";
import type {
  StartSegmentDetectionCommandInput,
  StartSegmentDetectionCommandOutput,
} from "./commands/StartSegmentDetectionCommand";
import type {
  StartStreamProcessorCommandInput,
  StartStreamProcessorCommandOutput,
} from "./commands/StartStreamProcessorCommand";
import type {
  StartTextDetectionCommandInput,
  StartTextDetectionCommandOutput,
} from "./commands/StartTextDetectionCommand";
import type {
  StopProjectVersionCommandInput,
  StopProjectVersionCommandOutput,
} from "./commands/StopProjectVersionCommand";
import type {
  StopStreamProcessorCommandInput,
  StopStreamProcessorCommandOutput,
} from "./commands/StopStreamProcessorCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
} from "./commands/UpdateDatasetEntriesCommand";
import type {
  UpdateStreamProcessorCommandInput,
  UpdateStreamProcessorCommandOutput,
} from "./commands/UpdateStreamProcessorCommand";
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
  | AssociateFacesCommandInput
  | CompareFacesCommandInput
  | CopyProjectVersionCommandInput
  | CreateCollectionCommandInput
  | CreateDatasetCommandInput
  | CreateFaceLivenessSessionCommandInput
  | CreateProjectCommandInput
  | CreateProjectVersionCommandInput
  | CreateStreamProcessorCommandInput
  | CreateUserCommandInput
  | DeleteCollectionCommandInput
  | DeleteDatasetCommandInput
  | DeleteFacesCommandInput
  | DeleteProjectCommandInput
  | DeleteProjectPolicyCommandInput
  | DeleteProjectVersionCommandInput
  | DeleteStreamProcessorCommandInput
  | DeleteUserCommandInput
  | DescribeCollectionCommandInput
  | DescribeDatasetCommandInput
  | DescribeProjectVersionsCommandInput
  | DescribeProjectsCommandInput
  | DescribeStreamProcessorCommandInput
  | DetectCustomLabelsCommandInput
  | DetectFacesCommandInput
  | DetectLabelsCommandInput
  | DetectModerationLabelsCommandInput
  | DetectProtectiveEquipmentCommandInput
  | DetectTextCommandInput
  | DisassociateFacesCommandInput
  | DistributeDatasetEntriesCommandInput
  | GetCelebrityInfoCommandInput
  | GetCelebrityRecognitionCommandInput
  | GetContentModerationCommandInput
  | GetFaceDetectionCommandInput
  | GetFaceLivenessSessionResultsCommandInput
  | GetFaceSearchCommandInput
  | GetLabelDetectionCommandInput
  | GetMediaAnalysisJobCommandInput
  | GetPersonTrackingCommandInput
  | GetSegmentDetectionCommandInput
  | GetTextDetectionCommandInput
  | IndexFacesCommandInput
  | ListCollectionsCommandInput
  | ListDatasetEntriesCommandInput
  | ListDatasetLabelsCommandInput
  | ListFacesCommandInput
  | ListMediaAnalysisJobsCommandInput
  | ListProjectPoliciesCommandInput
  | ListStreamProcessorsCommandInput
  | ListTagsForResourceCommandInput
  | ListUsersCommandInput
  | PutProjectPolicyCommandInput
  | RecognizeCelebritiesCommandInput
  | SearchFacesByImageCommandInput
  | SearchFacesCommandInput
  | SearchUsersByImageCommandInput
  | SearchUsersCommandInput
  | StartCelebrityRecognitionCommandInput
  | StartContentModerationCommandInput
  | StartFaceDetectionCommandInput
  | StartFaceSearchCommandInput
  | StartLabelDetectionCommandInput
  | StartMediaAnalysisJobCommandInput
  | StartPersonTrackingCommandInput
  | StartProjectVersionCommandInput
  | StartSegmentDetectionCommandInput
  | StartStreamProcessorCommandInput
  | StartTextDetectionCommandInput
  | StopProjectVersionCommandInput
  | StopStreamProcessorCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDatasetEntriesCommandInput
  | UpdateStreamProcessorCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateFacesCommandOutput
  | CompareFacesCommandOutput
  | CopyProjectVersionCommandOutput
  | CreateCollectionCommandOutput
  | CreateDatasetCommandOutput
  | CreateFaceLivenessSessionCommandOutput
  | CreateProjectCommandOutput
  | CreateProjectVersionCommandOutput
  | CreateStreamProcessorCommandOutput
  | CreateUserCommandOutput
  | DeleteCollectionCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteFacesCommandOutput
  | DeleteProjectCommandOutput
  | DeleteProjectPolicyCommandOutput
  | DeleteProjectVersionCommandOutput
  | DeleteStreamProcessorCommandOutput
  | DeleteUserCommandOutput
  | DescribeCollectionCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeProjectVersionsCommandOutput
  | DescribeProjectsCommandOutput
  | DescribeStreamProcessorCommandOutput
  | DetectCustomLabelsCommandOutput
  | DetectFacesCommandOutput
  | DetectLabelsCommandOutput
  | DetectModerationLabelsCommandOutput
  | DetectProtectiveEquipmentCommandOutput
  | DetectTextCommandOutput
  | DisassociateFacesCommandOutput
  | DistributeDatasetEntriesCommandOutput
  | GetCelebrityInfoCommandOutput
  | GetCelebrityRecognitionCommandOutput
  | GetContentModerationCommandOutput
  | GetFaceDetectionCommandOutput
  | GetFaceLivenessSessionResultsCommandOutput
  | GetFaceSearchCommandOutput
  | GetLabelDetectionCommandOutput
  | GetMediaAnalysisJobCommandOutput
  | GetPersonTrackingCommandOutput
  | GetSegmentDetectionCommandOutput
  | GetTextDetectionCommandOutput
  | IndexFacesCommandOutput
  | ListCollectionsCommandOutput
  | ListDatasetEntriesCommandOutput
  | ListDatasetLabelsCommandOutput
  | ListFacesCommandOutput
  | ListMediaAnalysisJobsCommandOutput
  | ListProjectPoliciesCommandOutput
  | ListStreamProcessorsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsersCommandOutput
  | PutProjectPolicyCommandOutput
  | RecognizeCelebritiesCommandOutput
  | SearchFacesByImageCommandOutput
  | SearchFacesCommandOutput
  | SearchUsersByImageCommandOutput
  | SearchUsersCommandOutput
  | StartCelebrityRecognitionCommandOutput
  | StartContentModerationCommandOutput
  | StartFaceDetectionCommandOutput
  | StartFaceSearchCommandOutput
  | StartLabelDetectionCommandOutput
  | StartMediaAnalysisJobCommandOutput
  | StartPersonTrackingCommandOutput
  | StartProjectVersionCommandOutput
  | StartSegmentDetectionCommandOutput
  | StartStreamProcessorCommandOutput
  | StartTextDetectionCommandOutput
  | StopProjectVersionCommandOutput
  | StopStreamProcessorCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDatasetEntriesCommandOutput
  | UpdateStreamProcessorCommandOutput;

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
   * Accepted values are "standard" and "adaptive".
   * @see https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html
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
export type RekognitionClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of RekognitionClient class constructor that set the region, credentials and other options.
 */
export interface RekognitionClientConfig extends RekognitionClientConfigType {}

/**
 * @public
 */
export type RekognitionClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of RekognitionClient class. This is resolved and normalized from the {@link RekognitionClientConfig | constructor configuration interface}.
 */
export interface RekognitionClientResolvedConfig extends RekognitionClientResolvedConfigType {}

/**
 * This is the API Reference for [Amazon Rekognition Image](https://docs.aws.amazon.com/rekognition/latest/dg/images.html), [Amazon Rekognition Bulk Image Analysis](https://docs.aws.amazon.com/rekognition/latest/dg/bulk-analysis.html), [Amazon Rekognition Custom Labels](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/what-is.html), [Amazon Rekognition Stored Video](https://docs.aws.amazon.com/rekognition/latest/dg/video.html), [Amazon Rekognition Face Liveness](https://docs.aws.amazon.com/rekognition/latest/dg/face-liveness.html), [Amazon Rekognition Streaming Video](https://docs.aws.amazon.com/rekognition/latest/dg/streaming-video.html). It provides descriptions of actions, data types, common parameters, and common errors.
 *
 * **Amazon Rekognition Image**
 *
 * - [AssociateFaces](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_AssociateFaces.html)
 * - [CompareFaces](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CompareFaces.html)
 * - [CreateCollection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateCollection.html)
 * - [CreateUser](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateUser.html)
 * - [DeleteCollection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteCollection.html)
 * - [DeleteFaces](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteFaces.html)
 * - [DeleteUser](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteUser.html)
 * - [DescribeCollection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeCollection.html)
 * - [DetectFaces](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectFaces.html)
 * - [DetectLabels](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectLabels.html)
 * - [DetectModerationLabels](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectModerationLabels.html)
 * - [DetectProtectiveEquipment](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectProtectiveEquipment.html)
 * - [DetectText](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectText.html)
 * - [DisassociateFaces](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DisassociateFaces.html)
 * - [GetCelebrityInfo](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetCelebrityInfo.html)
 * - [IndexFaces](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_IndexFaces.html)
 * - [ListCollections](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListCollections.html)
 * - [ListFaces](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListFaces.html)
 * - [ListUsers](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListFaces.html)
 * - [RecognizeCelebrities](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_RecognizeCelebrities.html)
 * - [SearchFaces](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFaces.html)
 * - [SearchFacesByImage](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFacesByImage.html)
 * - [SearchUsers](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchUsers.html)
 * - [SearchUsersByImage](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchUsersByImage.html)
 *
 * **Amazon Rekognition Bulk Image Analysis**
 *
 * - [GetMediaAnalysisJob](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetMediaAnalysisJob.html)
 * - [ListMediaAnalysisJob](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListMediaAnalysisJob.html)
 * - [StartMediaAnalysisJob](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartMediaAnalysisJob.html)
 *
 * **Amazon Rekognition Custom Labels**
 *
 * - [CopyProjectVersion](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CopyProjectVersion.html)
 * - [CreateDataset](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateDataset.html)
 * - [CreateProject](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateProject.html)
 * - [CreateProjectVersion](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateProjectVersion.html)
 * - [DeleteDataset](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteDataset.html)
 * - [DeleteProject](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProject.html)
 * - [DeleteProjectPolicy](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProjectPolicy.html)
 * - [DeleteProjectVersion](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProjectVersion.html)
 * - [DescribeDataset](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeDataset.html)
 * - [DescribeProjects](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeProjects.html)
 * - [DescribeProjectVersions](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeProjectVersions.html)
 * - [DetectCustomLabels](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectCustomLabels.html)
 * - [DistributeDatasetEntries](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DistributeDatasetEntries.html)
 * - [ListDatasetEntries](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListDatasetEntries.html)
 * - [ListDatasetLabels](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListDatasetLabels.html)
 * - [ListProjectPolicies](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListProjectPolicies.html)
 * - [PutProjectPolicy](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_PutProjectPolicy.html)
 * - [StartProjectVersion](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartProjectVersion.html)
 * - [StopProjectVersion](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StopProjectVersion.html)
 * - [UpdateDatasetEntries](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UpdateDatasetEntries.html)
 *
 * **Amazon Rekognition Stored Video**
 *
 * - [GetCelebrityRecognition](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetCelebrityRecognition.html)
 * - [GetContentModeration](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetContentModeration.html)
 * - [GetFaceDetection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceDetection.html)
 * - [GetFaceSearch](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceSearch.html)
 * - [GetLabelDetection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetLabelDetection.html)
 * - [GetPersonTracking](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetPersonTracking.html)
 * - [GetSegmentDetection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetSegmentDetection.html)
 * - [GetTextDetection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetTextDetection.html)
 * - [StartCelebrityRecognition](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartCelebrityRecognition.html)
 * - [StartContentModeration](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartContentModeration.html)
 * - [StartFaceDetection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceDetection.html)
 * - [StartFaceSearch](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceSearch.html)
 * - [StartLabelDetection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartLabelDetection.html)
 * - [StartPersonTracking](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartPersonTracking.html)
 * - [StartSegmentDetection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartSegmentDetection.html)
 * - [StartTextDetection](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartTextDetection.html)
 *
 * **Amazon Rekognition Face Liveness**
 *
 * - [CreateFaceLivenessSession](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateFaceLivenessSession.html)
 * - [GetFaceLivenessSessionResults](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceLivenessSessionResults.html)
 * - [StartFaceLivenessSession](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_rekognitionstreaming_StartFaceLivenessSession.html)
 *
 * **Amazon Rekognition Streaming Video**
 *
 * - [CreateStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor.html)
 * - [DeleteStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteStreamProcessor.html)
 * - [DescribeStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeStreamProcessor.html)
 * - [ListStreamProcessors](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListStreamProcessors.html)
 * - [StartStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartStreamProcessor.html)
 * - [StopStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StopStreamProcessor.html)
 * - [UpdateStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UpdateStreamProcessor.html)
 *
 * @public
 */
export class RekognitionClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RekognitionClientResolvedConfig
> {
  /**
   * The resolved configuration of RekognitionClient class. This is resolved and normalized from the {@link RekognitionClientConfig | constructor configuration interface}.
   */
  readonly config: RekognitionClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<RekognitionClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultRekognitionHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: RekognitionClientResolvedConfig) =>
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
