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
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import { AssociateFacesCommandInput, AssociateFacesCommandOutput } from "./commands/AssociateFacesCommand";
import { CompareFacesCommandInput, CompareFacesCommandOutput } from "./commands/CompareFacesCommand";
import { CopyProjectVersionCommandInput, CopyProjectVersionCommandOutput } from "./commands/CopyProjectVersionCommand";
import { CreateCollectionCommandInput, CreateCollectionCommandOutput } from "./commands/CreateCollectionCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import {
  CreateFaceLivenessSessionCommandInput,
  CreateFaceLivenessSessionCommandOutput,
} from "./commands/CreateFaceLivenessSessionCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import {
  CreateProjectVersionCommandInput,
  CreateProjectVersionCommandOutput,
} from "./commands/CreateProjectVersionCommand";
import {
  CreateStreamProcessorCommandInput,
  CreateStreamProcessorCommandOutput,
} from "./commands/CreateStreamProcessorCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteCollectionCommandInput, DeleteCollectionCommandOutput } from "./commands/DeleteCollectionCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteFacesCommandInput, DeleteFacesCommandOutput } from "./commands/DeleteFacesCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import {
  DeleteProjectPolicyCommandInput,
  DeleteProjectPolicyCommandOutput,
} from "./commands/DeleteProjectPolicyCommand";
import {
  DeleteProjectVersionCommandInput,
  DeleteProjectVersionCommandOutput,
} from "./commands/DeleteProjectVersionCommand";
import {
  DeleteStreamProcessorCommandInput,
  DeleteStreamProcessorCommandOutput,
} from "./commands/DeleteStreamProcessorCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeCollectionCommandInput, DescribeCollectionCommandOutput } from "./commands/DescribeCollectionCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import { DescribeProjectsCommandInput, DescribeProjectsCommandOutput } from "./commands/DescribeProjectsCommand";
import {
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
} from "./commands/DescribeProjectVersionsCommand";
import {
  DescribeStreamProcessorCommandInput,
  DescribeStreamProcessorCommandOutput,
} from "./commands/DescribeStreamProcessorCommand";
import { DetectCustomLabelsCommandInput, DetectCustomLabelsCommandOutput } from "./commands/DetectCustomLabelsCommand";
import { DetectFacesCommandInput, DetectFacesCommandOutput } from "./commands/DetectFacesCommand";
import { DetectLabelsCommandInput, DetectLabelsCommandOutput } from "./commands/DetectLabelsCommand";
import {
  DetectModerationLabelsCommandInput,
  DetectModerationLabelsCommandOutput,
} from "./commands/DetectModerationLabelsCommand";
import {
  DetectProtectiveEquipmentCommandInput,
  DetectProtectiveEquipmentCommandOutput,
} from "./commands/DetectProtectiveEquipmentCommand";
import { DetectTextCommandInput, DetectTextCommandOutput } from "./commands/DetectTextCommand";
import { DisassociateFacesCommandInput, DisassociateFacesCommandOutput } from "./commands/DisassociateFacesCommand";
import {
  DistributeDatasetEntriesCommandInput,
  DistributeDatasetEntriesCommandOutput,
} from "./commands/DistributeDatasetEntriesCommand";
import { GetCelebrityInfoCommandInput, GetCelebrityInfoCommandOutput } from "./commands/GetCelebrityInfoCommand";
import {
  GetCelebrityRecognitionCommandInput,
  GetCelebrityRecognitionCommandOutput,
} from "./commands/GetCelebrityRecognitionCommand";
import {
  GetContentModerationCommandInput,
  GetContentModerationCommandOutput,
} from "./commands/GetContentModerationCommand";
import { GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput } from "./commands/GetFaceDetectionCommand";
import {
  GetFaceLivenessSessionResultsCommandInput,
  GetFaceLivenessSessionResultsCommandOutput,
} from "./commands/GetFaceLivenessSessionResultsCommand";
import { GetFaceSearchCommandInput, GetFaceSearchCommandOutput } from "./commands/GetFaceSearchCommand";
import { GetLabelDetectionCommandInput, GetLabelDetectionCommandOutput } from "./commands/GetLabelDetectionCommand";
import { GetPersonTrackingCommandInput, GetPersonTrackingCommandOutput } from "./commands/GetPersonTrackingCommand";
import {
  GetSegmentDetectionCommandInput,
  GetSegmentDetectionCommandOutput,
} from "./commands/GetSegmentDetectionCommand";
import { GetTextDetectionCommandInput, GetTextDetectionCommandOutput } from "./commands/GetTextDetectionCommand";
import { IndexFacesCommandInput, IndexFacesCommandOutput } from "./commands/IndexFacesCommand";
import { ListCollectionsCommandInput, ListCollectionsCommandOutput } from "./commands/ListCollectionsCommand";
import { ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput } from "./commands/ListDatasetEntriesCommand";
import { ListDatasetLabelsCommandInput, ListDatasetLabelsCommandOutput } from "./commands/ListDatasetLabelsCommand";
import { ListFacesCommandInput, ListFacesCommandOutput } from "./commands/ListFacesCommand";
import {
  ListProjectPoliciesCommandInput,
  ListProjectPoliciesCommandOutput,
} from "./commands/ListProjectPoliciesCommand";
import {
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput,
} from "./commands/ListStreamProcessorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { PutProjectPolicyCommandInput, PutProjectPolicyCommandOutput } from "./commands/PutProjectPolicyCommand";
import {
  RecognizeCelebritiesCommandInput,
  RecognizeCelebritiesCommandOutput,
} from "./commands/RecognizeCelebritiesCommand";
import { SearchFacesByImageCommandInput, SearchFacesByImageCommandOutput } from "./commands/SearchFacesByImageCommand";
import { SearchFacesCommandInput, SearchFacesCommandOutput } from "./commands/SearchFacesCommand";
import { SearchUsersByImageCommandInput, SearchUsersByImageCommandOutput } from "./commands/SearchUsersByImageCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import {
  StartCelebrityRecognitionCommandInput,
  StartCelebrityRecognitionCommandOutput,
} from "./commands/StartCelebrityRecognitionCommand";
import {
  StartContentModerationCommandInput,
  StartContentModerationCommandOutput,
} from "./commands/StartContentModerationCommand";
import { StartFaceDetectionCommandInput, StartFaceDetectionCommandOutput } from "./commands/StartFaceDetectionCommand";
import { StartFaceSearchCommandInput, StartFaceSearchCommandOutput } from "./commands/StartFaceSearchCommand";
import {
  StartLabelDetectionCommandInput,
  StartLabelDetectionCommandOutput,
} from "./commands/StartLabelDetectionCommand";
import {
  StartPersonTrackingCommandInput,
  StartPersonTrackingCommandOutput,
} from "./commands/StartPersonTrackingCommand";
import {
  StartProjectVersionCommandInput,
  StartProjectVersionCommandOutput,
} from "./commands/StartProjectVersionCommand";
import {
  StartSegmentDetectionCommandInput,
  StartSegmentDetectionCommandOutput,
} from "./commands/StartSegmentDetectionCommand";
import {
  StartStreamProcessorCommandInput,
  StartStreamProcessorCommandOutput,
} from "./commands/StartStreamProcessorCommand";
import { StartTextDetectionCommandInput, StartTextDetectionCommandOutput } from "./commands/StartTextDetectionCommand";
import { StopProjectVersionCommandInput, StopProjectVersionCommandOutput } from "./commands/StopProjectVersionCommand";
import {
  StopStreamProcessorCommandInput,
  StopStreamProcessorCommandOutput,
} from "./commands/StopStreamProcessorCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
} from "./commands/UpdateDatasetEntriesCommand";
import {
  UpdateStreamProcessorCommandInput,
  UpdateStreamProcessorCommandOutput,
} from "./commands/UpdateStreamProcessorCommand";
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
  | GetPersonTrackingCommandInput
  | GetSegmentDetectionCommandInput
  | GetTextDetectionCommandInput
  | IndexFacesCommandInput
  | ListCollectionsCommandInput
  | ListDatasetEntriesCommandInput
  | ListDatasetLabelsCommandInput
  | ListFacesCommandInput
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
  | GetPersonTrackingCommandOutput
  | GetSegmentDetectionCommandOutput
  | GetTextDetectionCommandOutput
  | IndexFacesCommandOutput
  | ListCollectionsCommandOutput
  | ListDatasetEntriesCommandOutput
  | ListDatasetLabelsCommandOutput
  | ListFacesCommandOutput
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
 *  The configuration interface of RekognitionClient class constructor that set the region, credentials and other options.
 */
export interface RekognitionClientConfig extends RekognitionClientConfigType {}

/**
 * @public
 */
export type RekognitionClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of RekognitionClient class. This is resolved and normalized from the {@link RekognitionClientConfig | constructor configuration interface}.
 */
export interface RekognitionClientResolvedConfig extends RekognitionClientResolvedConfigType {}

/**
 * @public
 * <p>This is the API Reference for <a href="https://docs.aws.amazon.com/rekognition/latest/dg/images.html">Amazon Rekognition Image</a>, <a href="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/what-is.html">Amazon Rekognition Custom Labels</a>,
 *         <a href="https://docs.aws.amazon.com/rekognition/latest/dg/video.html">Amazon Rekognition Stored
 *         Video</a>, <a href="https://docs.aws.amazon.com/rekognition/latest/dg/streaming-video.html">Amazon Rekognition Streaming Video</a>. It provides descriptions of actions, data types, common
 *       parameters, and common errors.</p>
 *          <p>
 *             <b>Amazon Rekognition Image</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_AssociateFaces.html">AssociateFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CompareFaces.html">CompareFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateCollection.html">CreateCollection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateUser.html">CreateUser</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteCollection.html">DeleteCollection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteFaces.html">DeleteFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteUser.html">DeleteUser</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeCollection.html">DescribeCollection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectFaces.html">DetectFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectLabels.html">DetectLabels</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectModerationLabels.html">DetectModerationLabels</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectProtectiveEquipment.html">DetectProtectiveEquipment</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectText.html">DetectText</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DisassociateFaces.html">DisassociateFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetCelebrityInfo.html">GetCelebrityInfo</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_IndexFaces.html">IndexFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListCollections.html">ListCollections</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListFaces.html">ListFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListFaces.html">ListUsers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_RecognizeCelebrities.html">RecognizeCelebrities</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFaces.html">SearchFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFacesByImage.html">SearchFacesByImage</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchUsers.html">SearchUsers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchUsersByImage.html">SearchUsersByImage</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon Rekognition Custom Labels</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CopyProjectVersion.html">CopyProjectVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateDataset.html">CreateDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateProject.html">CreateProject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateProjectVersion.html">CreateProjectVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteDataset.html">DeleteDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProject.html">DeleteProject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProjectPolicy.html">DeleteProjectPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProjectVersion.html">DeleteProjectVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeDataset.html">DescribeDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeProjects.html">DescribeProjects</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeProjectVersions.html">DescribeProjectVersions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectCustomLabels.html">DetectCustomLabels</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DistributeDatasetEntries.html">DistributeDatasetEntries</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListDatasetEntries.html">ListDatasetEntries</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListDatasetLabels.html">ListDatasetLabels</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListProjectPolicies.html">ListProjectPolicies</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_PutProjectPolicy.html">PutProjectPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartProjectVersion.html">StartProjectVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StopProjectVersion.html">StopProjectVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UpdateDatasetEntries.html">UpdateDatasetEntries</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon Rekognition Video Stored Video</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetCelebrityRecognition.html">GetCelebrityRecognition</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetContentModeration.html">GetContentModeration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceDetection.html">GetFaceDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceSearch.html">GetFaceSearch</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetLabelDetection.html">GetLabelDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetPersonTracking.html">GetPersonTracking</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetSegmentDetection.html">GetSegmentDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetTextDetection.html">GetTextDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartCelebrityRecognition.html">StartCelebrityRecognition</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartContentModeration.html">StartContentModeration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceDetection.html">StartFaceDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceSearch.html">StartFaceSearch</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartLabelDetection.html">StartLabelDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartPersonTracking.html">StartPersonTracking</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartSegmentDetection.html">StartSegmentDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartTextDetection.html">StartTextDetection</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon Rekognition Video Streaming Video</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor.html">CreateStreamProcessor</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteStreamProcessor.html">DeleteStreamProcessor</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeStreamProcessor.html">DescribeStreamProcessor</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListStreamProcessors.html">ListStreamProcessors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartStreamProcessor.html">StartStreamProcessor</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StopStreamProcessor.html">StopStreamProcessor</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UpdateStreamProcessor.html">UpdateStreamProcessor</a>
 *                </p>
 *             </li>
 *          </ul>
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
