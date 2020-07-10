import { CompareFacesCommandInput, CompareFacesCommandOutput } from "./commands/CompareFacesCommand";
import { CreateCollectionCommandInput, CreateCollectionCommandOutput } from "./commands/CreateCollectionCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import {
  CreateProjectVersionCommandInput,
  CreateProjectVersionCommandOutput,
} from "./commands/CreateProjectVersionCommand";
import {
  CreateStreamProcessorCommandInput,
  CreateStreamProcessorCommandOutput,
} from "./commands/CreateStreamProcessorCommand";
import { DeleteCollectionCommandInput, DeleteCollectionCommandOutput } from "./commands/DeleteCollectionCommand";
import { DeleteFacesCommandInput, DeleteFacesCommandOutput } from "./commands/DeleteFacesCommand";
import {
  DeleteStreamProcessorCommandInput,
  DeleteStreamProcessorCommandOutput,
} from "./commands/DeleteStreamProcessorCommand";
import { DescribeCollectionCommandInput, DescribeCollectionCommandOutput } from "./commands/DescribeCollectionCommand";
import {
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
} from "./commands/DescribeProjectVersionsCommand";
import { DescribeProjectsCommandInput, DescribeProjectsCommandOutput } from "./commands/DescribeProjectsCommand";
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
import { DetectTextCommandInput, DetectTextCommandOutput } from "./commands/DetectTextCommand";
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
import { GetFaceSearchCommandInput, GetFaceSearchCommandOutput } from "./commands/GetFaceSearchCommand";
import { GetLabelDetectionCommandInput, GetLabelDetectionCommandOutput } from "./commands/GetLabelDetectionCommand";
import { GetPersonTrackingCommandInput, GetPersonTrackingCommandOutput } from "./commands/GetPersonTrackingCommand";
import { IndexFacesCommandInput, IndexFacesCommandOutput } from "./commands/IndexFacesCommand";
import { ListCollectionsCommandInput, ListCollectionsCommandOutput } from "./commands/ListCollectionsCommand";
import { ListFacesCommandInput, ListFacesCommandOutput } from "./commands/ListFacesCommand";
import {
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput,
} from "./commands/ListStreamProcessorsCommand";
import {
  RecognizeCelebritiesCommandInput,
  RecognizeCelebritiesCommandOutput,
} from "./commands/RecognizeCelebritiesCommand";
import { SearchFacesByImageCommandInput, SearchFacesByImageCommandOutput } from "./commands/SearchFacesByImageCommand";
import { SearchFacesCommandInput, SearchFacesCommandOutput } from "./commands/SearchFacesCommand";
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
  StartStreamProcessorCommandInput,
  StartStreamProcessorCommandOutput,
} from "./commands/StartStreamProcessorCommand";
import { StopProjectVersionCommandInput, StopProjectVersionCommandOutput } from "./commands/StopProjectVersionCommand";
import {
  StopStreamProcessorCommandInput,
  StopStreamProcessorCommandOutput,
} from "./commands/StopStreamProcessorCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CompareFacesCommandInput
  | CreateCollectionCommandInput
  | CreateProjectCommandInput
  | CreateProjectVersionCommandInput
  | CreateStreamProcessorCommandInput
  | DeleteCollectionCommandInput
  | DeleteFacesCommandInput
  | DeleteStreamProcessorCommandInput
  | DescribeCollectionCommandInput
  | DescribeProjectVersionsCommandInput
  | DescribeProjectsCommandInput
  | DescribeStreamProcessorCommandInput
  | DetectCustomLabelsCommandInput
  | DetectFacesCommandInput
  | DetectLabelsCommandInput
  | DetectModerationLabelsCommandInput
  | DetectTextCommandInput
  | GetCelebrityInfoCommandInput
  | GetCelebrityRecognitionCommandInput
  | GetContentModerationCommandInput
  | GetFaceDetectionCommandInput
  | GetFaceSearchCommandInput
  | GetLabelDetectionCommandInput
  | GetPersonTrackingCommandInput
  | IndexFacesCommandInput
  | ListCollectionsCommandInput
  | ListFacesCommandInput
  | ListStreamProcessorsCommandInput
  | RecognizeCelebritiesCommandInput
  | SearchFacesByImageCommandInput
  | SearchFacesCommandInput
  | StartCelebrityRecognitionCommandInput
  | StartContentModerationCommandInput
  | StartFaceDetectionCommandInput
  | StartFaceSearchCommandInput
  | StartLabelDetectionCommandInput
  | StartPersonTrackingCommandInput
  | StartProjectVersionCommandInput
  | StartStreamProcessorCommandInput
  | StopProjectVersionCommandInput
  | StopStreamProcessorCommandInput;

export type ServiceOutputTypes =
  | CompareFacesCommandOutput
  | CreateCollectionCommandOutput
  | CreateProjectCommandOutput
  | CreateProjectVersionCommandOutput
  | CreateStreamProcessorCommandOutput
  | DeleteCollectionCommandOutput
  | DeleteFacesCommandOutput
  | DeleteStreamProcessorCommandOutput
  | DescribeCollectionCommandOutput
  | DescribeProjectVersionsCommandOutput
  | DescribeProjectsCommandOutput
  | DescribeStreamProcessorCommandOutput
  | DetectCustomLabelsCommandOutput
  | DetectFacesCommandOutput
  | DetectLabelsCommandOutput
  | DetectModerationLabelsCommandOutput
  | DetectTextCommandOutput
  | GetCelebrityInfoCommandOutput
  | GetCelebrityRecognitionCommandOutput
  | GetContentModerationCommandOutput
  | GetFaceDetectionCommandOutput
  | GetFaceSearchCommandOutput
  | GetLabelDetectionCommandOutput
  | GetPersonTrackingCommandOutput
  | IndexFacesCommandOutput
  | ListCollectionsCommandOutput
  | ListFacesCommandOutput
  | ListStreamProcessorsCommandOutput
  | RecognizeCelebritiesCommandOutput
  | SearchFacesByImageCommandOutput
  | SearchFacesCommandOutput
  | StartCelebrityRecognitionCommandOutput
  | StartContentModerationCommandOutput
  | StartFaceDetectionCommandOutput
  | StartFaceSearchCommandOutput
  | StartLabelDetectionCommandOutput
  | StartPersonTrackingCommandOutput
  | StartProjectVersionCommandOutput
  | StartStreamProcessorCommandOutput
  | StopProjectVersionCommandOutput
  | StopStreamProcessorCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type RekognitionClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type RekognitionClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>This is the Amazon Rekognition API reference.</p>
 */
export class RekognitionClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RekognitionClientResolvedConfig
> {
  readonly config: RekognitionClientResolvedConfig;

  constructor(configuration: RekognitionClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
