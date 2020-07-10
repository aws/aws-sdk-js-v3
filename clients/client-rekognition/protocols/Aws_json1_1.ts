import { CompareFacesCommandInput, CompareFacesCommandOutput } from "../commands/CompareFacesCommand";
import { CreateCollectionCommandInput, CreateCollectionCommandOutput } from "../commands/CreateCollectionCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import {
  CreateProjectVersionCommandInput,
  CreateProjectVersionCommandOutput,
} from "../commands/CreateProjectVersionCommand";
import {
  CreateStreamProcessorCommandInput,
  CreateStreamProcessorCommandOutput,
} from "../commands/CreateStreamProcessorCommand";
import { DeleteCollectionCommandInput, DeleteCollectionCommandOutput } from "../commands/DeleteCollectionCommand";
import { DeleteFacesCommandInput, DeleteFacesCommandOutput } from "../commands/DeleteFacesCommand";
import {
  DeleteStreamProcessorCommandInput,
  DeleteStreamProcessorCommandOutput,
} from "../commands/DeleteStreamProcessorCommand";
import { DescribeCollectionCommandInput, DescribeCollectionCommandOutput } from "../commands/DescribeCollectionCommand";
import {
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
} from "../commands/DescribeProjectVersionsCommand";
import { DescribeProjectsCommandInput, DescribeProjectsCommandOutput } from "../commands/DescribeProjectsCommand";
import {
  DescribeStreamProcessorCommandInput,
  DescribeStreamProcessorCommandOutput,
} from "../commands/DescribeStreamProcessorCommand";
import { DetectCustomLabelsCommandInput, DetectCustomLabelsCommandOutput } from "../commands/DetectCustomLabelsCommand";
import { DetectFacesCommandInput, DetectFacesCommandOutput } from "../commands/DetectFacesCommand";
import { DetectLabelsCommandInput, DetectLabelsCommandOutput } from "../commands/DetectLabelsCommand";
import {
  DetectModerationLabelsCommandInput,
  DetectModerationLabelsCommandOutput,
} from "../commands/DetectModerationLabelsCommand";
import { DetectTextCommandInput, DetectTextCommandOutput } from "../commands/DetectTextCommand";
import { GetCelebrityInfoCommandInput, GetCelebrityInfoCommandOutput } from "../commands/GetCelebrityInfoCommand";
import {
  GetCelebrityRecognitionCommandInput,
  GetCelebrityRecognitionCommandOutput,
} from "../commands/GetCelebrityRecognitionCommand";
import {
  GetContentModerationCommandInput,
  GetContentModerationCommandOutput,
} from "../commands/GetContentModerationCommand";
import { GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput } from "../commands/GetFaceDetectionCommand";
import { GetFaceSearchCommandInput, GetFaceSearchCommandOutput } from "../commands/GetFaceSearchCommand";
import { GetLabelDetectionCommandInput, GetLabelDetectionCommandOutput } from "../commands/GetLabelDetectionCommand";
import { GetPersonTrackingCommandInput, GetPersonTrackingCommandOutput } from "../commands/GetPersonTrackingCommand";
import { IndexFacesCommandInput, IndexFacesCommandOutput } from "../commands/IndexFacesCommand";
import { ListCollectionsCommandInput, ListCollectionsCommandOutput } from "../commands/ListCollectionsCommand";
import { ListFacesCommandInput, ListFacesCommandOutput } from "../commands/ListFacesCommand";
import {
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput,
} from "../commands/ListStreamProcessorsCommand";
import {
  RecognizeCelebritiesCommandInput,
  RecognizeCelebritiesCommandOutput,
} from "../commands/RecognizeCelebritiesCommand";
import { SearchFacesByImageCommandInput, SearchFacesByImageCommandOutput } from "../commands/SearchFacesByImageCommand";
import { SearchFacesCommandInput, SearchFacesCommandOutput } from "../commands/SearchFacesCommand";
import {
  StartCelebrityRecognitionCommandInput,
  StartCelebrityRecognitionCommandOutput,
} from "../commands/StartCelebrityRecognitionCommand";
import {
  StartContentModerationCommandInput,
  StartContentModerationCommandOutput,
} from "../commands/StartContentModerationCommand";
import { StartFaceDetectionCommandInput, StartFaceDetectionCommandOutput } from "../commands/StartFaceDetectionCommand";
import { StartFaceSearchCommandInput, StartFaceSearchCommandOutput } from "../commands/StartFaceSearchCommand";
import {
  StartLabelDetectionCommandInput,
  StartLabelDetectionCommandOutput,
} from "../commands/StartLabelDetectionCommand";
import {
  StartPersonTrackingCommandInput,
  StartPersonTrackingCommandOutput,
} from "../commands/StartPersonTrackingCommand";
import {
  StartProjectVersionCommandInput,
  StartProjectVersionCommandOutput,
} from "../commands/StartProjectVersionCommand";
import {
  StartStreamProcessorCommandInput,
  StartStreamProcessorCommandOutput,
} from "../commands/StartStreamProcessorCommand";
import { StopProjectVersionCommandInput, StopProjectVersionCommandOutput } from "../commands/StopProjectVersionCommand";
import {
  StopStreamProcessorCommandInput,
  StopStreamProcessorCommandOutput,
} from "../commands/StopStreamProcessorCommand";
import {
  AccessDeniedException,
  AgeRange,
  Asset,
  Attribute,
  Beard,
  BoundingBox,
  Celebrity,
  CelebrityDetail,
  CelebrityRecognition,
  CompareFacesMatch,
  CompareFacesRequest,
  CompareFacesResponse,
  ComparedFace,
  ComparedSourceImageFace,
  ContentClassifier,
  ContentModerationDetection,
  CreateCollectionRequest,
  CreateCollectionResponse,
  CreateProjectRequest,
  CreateProjectResponse,
  CreateProjectVersionRequest,
  CreateProjectVersionResponse,
  CreateStreamProcessorRequest,
  CreateStreamProcessorResponse,
  CustomLabel,
  DeleteCollectionRequest,
  DeleteCollectionResponse,
  DeleteFacesRequest,
  DeleteFacesResponse,
  DeleteStreamProcessorRequest,
  DeleteStreamProcessorResponse,
  DescribeCollectionRequest,
  DescribeCollectionResponse,
  DescribeProjectVersionsRequest,
  DescribeProjectVersionsResponse,
  DescribeProjectsRequest,
  DescribeProjectsResponse,
  DescribeStreamProcessorRequest,
  DescribeStreamProcessorResponse,
  DetectCustomLabelsRequest,
  DetectCustomLabelsResponse,
  DetectFacesRequest,
  DetectFacesResponse,
  DetectLabelsRequest,
  DetectLabelsResponse,
  DetectModerationLabelsRequest,
  DetectModerationLabelsResponse,
  DetectTextRequest,
  DetectTextResponse,
  Emotion,
  EvaluationResult,
  EyeOpen,
  Eyeglasses,
  Face,
  FaceDetail,
  FaceDetection,
  FaceMatch,
  FaceRecord,
  FaceSearchSettings,
  Gender,
  Geometry,
  GetCelebrityInfoRequest,
  GetCelebrityInfoResponse,
  GetCelebrityRecognitionRequest,
  GetCelebrityRecognitionResponse,
  GetContentModerationRequest,
  GetContentModerationResponse,
  GetFaceDetectionRequest,
  GetFaceDetectionResponse,
  GetFaceSearchRequest,
  GetFaceSearchResponse,
  GetLabelDetectionRequest,
  GetLabelDetectionResponse,
  GetPersonTrackingRequest,
  GetPersonTrackingResponse,
  GroundTruthManifest,
  HumanLoopActivationOutput,
  HumanLoopConfig,
  HumanLoopDataAttributes,
  HumanLoopQuotaExceededException,
  IdempotentParameterMismatchException,
  Image,
  ImageQuality,
  ImageTooLargeException,
  IndexFacesRequest,
  IndexFacesResponse,
  Instance,
  InternalServerError,
  InvalidImageFormatException,
  InvalidPaginationTokenException,
  InvalidParameterException,
  InvalidS3ObjectException,
  KinesisDataStream,
  KinesisVideoStream,
  Label,
  LabelDetection,
  Landmark,
  LimitExceededException,
  ListCollectionsRequest,
  ListCollectionsResponse,
  ListFacesRequest,
  ListFacesResponse,
  ListStreamProcessorsRequest,
  ListStreamProcessorsResponse,
  ModerationLabel,
  MouthOpen,
  Mustache,
  NotificationChannel,
  OutputConfig,
  Parent,
  PersonDetail,
  PersonDetection,
  PersonMatch,
  Point,
  Pose,
  ProjectDescription,
  ProjectVersionDescription,
  ProvisionedThroughputExceededException,
  Reason,
  RecognizeCelebritiesRequest,
  RecognizeCelebritiesResponse,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  S3Object,
  SearchFacesByImageRequest,
  SearchFacesByImageResponse,
  SearchFacesRequest,
  SearchFacesResponse,
  Smile,
  StartCelebrityRecognitionRequest,
  StartCelebrityRecognitionResponse,
  StartContentModerationRequest,
  StartContentModerationResponse,
  StartFaceDetectionRequest,
  StartFaceDetectionResponse,
  StartFaceSearchRequest,
  StartFaceSearchResponse,
  StartLabelDetectionRequest,
  StartLabelDetectionResponse,
  StartPersonTrackingRequest,
  StartPersonTrackingResponse,
  StartProjectVersionRequest,
  StartProjectVersionResponse,
  StartStreamProcessorRequest,
  StartStreamProcessorResponse,
  StopProjectVersionRequest,
  StopProjectVersionResponse,
  StopStreamProcessorRequest,
  StopStreamProcessorResponse,
  StreamProcessor,
  StreamProcessorInput,
  StreamProcessorOutput,
  StreamProcessorSettings,
  Summary,
  Sunglasses,
  TestingData,
  TestingDataResult,
  TextDetection,
  ThrottlingException,
  TrainingData,
  TrainingDataResult,
  UnindexedFace,
  Video,
  VideoMetadata,
  VideoTooLargeException,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { LazyJsonString as __LazyJsonString, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1CompareFacesCommand = async (
  input: CompareFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.CompareFaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CompareFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCollectionCommand = async (
  input: CreateCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.CreateCollection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.CreateProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProjectVersionCommand = async (
  input: CreateProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.CreateProjectVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStreamProcessorCommand = async (
  input: CreateStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.CreateStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCollectionCommand = async (
  input: DeleteCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DeleteCollection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFacesCommand = async (
  input: DeleteFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DeleteFaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStreamProcessorCommand = async (
  input: DeleteStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DeleteStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCollectionCommand = async (
  input: DescribeCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DescribeCollection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProjectsCommand = async (
  input: DescribeProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DescribeProjects",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProjectsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProjectVersionsCommand = async (
  input: DescribeProjectVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DescribeProjectVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProjectVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStreamProcessorCommand = async (
  input: DescribeStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DescribeStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectCustomLabelsCommand = async (
  input: DetectCustomLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DetectCustomLabels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectCustomLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectFacesCommand = async (
  input: DetectFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DetectFaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectLabelsCommand = async (
  input: DetectLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DetectLabels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectModerationLabelsCommand = async (
  input: DetectModerationLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DetectModerationLabels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectModerationLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectTextCommand = async (
  input: DetectTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.DetectText",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCelebrityInfoCommand = async (
  input: GetCelebrityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.GetCelebrityInfo",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCelebrityInfoRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCelebrityRecognitionCommand = async (
  input: GetCelebrityRecognitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.GetCelebrityRecognition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCelebrityRecognitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContentModerationCommand = async (
  input: GetContentModerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.GetContentModeration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContentModerationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetFaceDetectionCommand = async (
  input: GetFaceDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.GetFaceDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetFaceDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetFaceSearchCommand = async (
  input: GetFaceSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.GetFaceSearch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetFaceSearchRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLabelDetectionCommand = async (
  input: GetLabelDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.GetLabelDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLabelDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPersonTrackingCommand = async (
  input: GetPersonTrackingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.GetPersonTracking",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPersonTrackingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1IndexFacesCommand = async (
  input: IndexFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.IndexFaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1IndexFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCollectionsCommand = async (
  input: ListCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.ListCollections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCollectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFacesCommand = async (
  input: ListFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.ListFaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStreamProcessorsCommand = async (
  input: ListStreamProcessorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.ListStreamProcessors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStreamProcessorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RecognizeCelebritiesCommand = async (
  input: RecognizeCelebritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.RecognizeCelebrities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RecognizeCelebritiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchFacesCommand = async (
  input: SearchFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.SearchFaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchFacesByImageCommand = async (
  input: SearchFacesByImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.SearchFacesByImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchFacesByImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartCelebrityRecognitionCommand = async (
  input: StartCelebrityRecognitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.StartCelebrityRecognition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartCelebrityRecognitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartContentModerationCommand = async (
  input: StartContentModerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.StartContentModeration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartContentModerationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartFaceDetectionCommand = async (
  input: StartFaceDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.StartFaceDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartFaceDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartFaceSearchCommand = async (
  input: StartFaceSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.StartFaceSearch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartFaceSearchRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartLabelDetectionCommand = async (
  input: StartLabelDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.StartLabelDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartLabelDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartPersonTrackingCommand = async (
  input: StartPersonTrackingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.StartPersonTracking",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartPersonTrackingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartProjectVersionCommand = async (
  input: StartProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.StartProjectVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartStreamProcessorCommand = async (
  input: StartStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.StartStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopProjectVersionCommand = async (
  input: StopProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.StopProjectVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopStreamProcessorCommand = async (
  input: StopStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RekognitionService.StopStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CompareFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompareFacesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CompareFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CompareFacesResponse(data, context);
  const response: CompareFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CompareFacesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CompareFacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompareFacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCollectionResponse(data, context);
  const response: CreateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCollectionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.rekognition#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectResponse(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProjectResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectVersionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectVersionResponse(data, context);
  const response: CreateProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProjectVersionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProjectVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamProcessorCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStreamProcessorResponse(data, context);
  const response: CreateStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStreamProcessorResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStreamProcessorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamProcessorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCollectionResponse(data, context);
  const response: DeleteCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCollectionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFacesResponse(data, context);
  const response: DeleteFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFacesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamProcessorCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteStreamProcessorResponse(data, context);
  const response: DeleteStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteStreamProcessorResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteStreamProcessorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamProcessorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCollectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCollectionResponse(data, context);
  const response: DescribeCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCollectionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProjectsResponse(data, context);
  const response: DescribeProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProjectsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeProjectVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectVersionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeProjectVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProjectVersionsResponse(data, context);
  const response: DescribeProjectVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProjectVersionsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProjectVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamProcessorCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStreamProcessorResponse(data, context);
  const response: DescribeStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStreamProcessorResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStreamProcessorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamProcessorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetectCustomLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectCustomLabelsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectCustomLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectCustomLabelsResponse(data, context);
  const response: DetectCustomLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectCustomLabelsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectCustomLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectCustomLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.rekognition#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetectFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectFacesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectFacesResponse(data, context);
  const response: DetectFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectFacesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectFacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectFacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetectLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectLabelsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectLabelsResponse(data, context);
  const response: DetectLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectLabelsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetectModerationLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectModerationLabelsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectModerationLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectModerationLabelsResponse(data, context);
  const response: DetectModerationLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectModerationLabelsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectModerationLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectModerationLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HumanLoopQuotaExceededException":
    case "com.amazonaws.rekognition#HumanLoopQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetectTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectTextCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectTextResponse(data, context);
  const response: DetectTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectTextResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectTextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectTextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetCelebrityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityInfoCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCelebrityInfoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCelebrityInfoResponse(data, context);
  const response: GetCelebrityInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCelebrityInfoResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCelebrityInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetCelebrityRecognitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityRecognitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCelebrityRecognitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCelebrityRecognitionResponse(data, context);
  const response: GetCelebrityRecognitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCelebrityRecognitionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCelebrityRecognitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityRecognitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetContentModerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentModerationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetContentModerationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContentModerationResponse(data, context);
  const response: GetContentModerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetContentModerationResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContentModerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentModerationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetFaceDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceDetectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetFaceDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFaceDetectionResponse(data, context);
  const response: GetFaceDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFaceDetectionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetFaceDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetFaceSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceSearchCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetFaceSearchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFaceSearchResponse(data, context);
  const response: GetFaceSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFaceSearchResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetFaceSearchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceSearchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetLabelDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelDetectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLabelDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLabelDetectionResponse(data, context);
  const response: GetLabelDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLabelDetectionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLabelDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetPersonTrackingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonTrackingCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPersonTrackingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPersonTrackingResponse(data, context);
  const response: GetPersonTrackingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPersonTrackingResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPersonTrackingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonTrackingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1IndexFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexFacesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1IndexFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IndexFacesResponse(data, context);
  const response: IndexFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IndexFacesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1IndexFacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexFacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCollectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCollectionsResponse(data, context);
  const response: ListCollectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCollectionsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCollectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFacesResponse(data, context);
  const response: ListFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFacesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListStreamProcessorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamProcessorsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListStreamProcessorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStreamProcessorsResponse(data, context);
  const response: ListStreamProcessorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStreamProcessorsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStreamProcessorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamProcessorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RecognizeCelebritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeCelebritiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RecognizeCelebritiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RecognizeCelebritiesResponse(data, context);
  const response: RecognizeCelebritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RecognizeCelebritiesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RecognizeCelebritiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeCelebritiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SearchFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SearchFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchFacesResponse(data, context);
  const response: SearchFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchFacesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchFacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SearchFacesByImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesByImageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SearchFacesByImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchFacesByImageResponse(data, context);
  const response: SearchFacesByImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchFacesByImageResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchFacesByImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesByImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartCelebrityRecognitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCelebrityRecognitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartCelebrityRecognitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartCelebrityRecognitionResponse(data, context);
  const response: StartCelebrityRecognitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartCelebrityRecognitionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartCelebrityRecognitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCelebrityRecognitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartContentModerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentModerationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartContentModerationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartContentModerationResponse(data, context);
  const response: StartContentModerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartContentModerationResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartContentModerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentModerationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartFaceDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceDetectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartFaceDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartFaceDetectionResponse(data, context);
  const response: StartFaceDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartFaceDetectionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartFaceDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartFaceSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceSearchCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartFaceSearchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartFaceSearchResponse(data, context);
  const response: StartFaceSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartFaceSearchResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartFaceSearchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceSearchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartLabelDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLabelDetectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartLabelDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartLabelDetectionResponse(data, context);
  const response: StartLabelDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartLabelDetectionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartLabelDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLabelDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartPersonTrackingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPersonTrackingCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartPersonTrackingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartPersonTrackingResponse(data, context);
  const response: StartPersonTrackingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartPersonTrackingResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartPersonTrackingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPersonTrackingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProjectVersionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartProjectVersionResponse(data, context);
  const response: StartProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartProjectVersionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartProjectVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProjectVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamProcessorCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartStreamProcessorResponse(data, context);
  const response: StartStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartStreamProcessorResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartStreamProcessorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamProcessorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProjectVersionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopProjectVersionResponse(data, context);
  const response: StopProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopProjectVersionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopProjectVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProjectVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamProcessorCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopStreamProcessorResponse(data, context);
  const response: StopStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopStreamProcessorResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopStreamProcessorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamProcessorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HumanLoopQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HumanLoopQuotaExceededException(body, context);
  const contents: HumanLoopQuotaExceededException = {
    name: "HumanLoopQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ImageTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageTooLargeException(body, context);
  const contents: ImageTooLargeException = {
    name: "ImageTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidImageFormatExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImageFormatException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidImageFormatException(body, context);
  const contents: InvalidImageFormatException = {
    name: "InvalidImageFormatException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPaginationTokenException(body, context);
  const contents: InvalidPaginationTokenException = {
    name: "InvalidPaginationTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidS3ObjectExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3ObjectException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3ObjectException(body, context);
  const contents: InvalidS3ObjectException = {
    name: "InvalidS3ObjectException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
  const contents: ProvisionedThroughputExceededException = {
    name: "ProvisionedThroughputExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotReadyException(body, context);
  const contents: ResourceNotReadyException = {
    name: "ResourceNotReadyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1VideoTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VideoTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1VideoTooLargeException(body, context);
  const contents: VideoTooLargeException = {
    name: "VideoTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1Asset = (input: Asset, context: __SerdeContext): any => {
  return {
    ...(input.GroundTruthManifest !== undefined && {
      GroundTruthManifest: serializeAws_json1_1GroundTruthManifest(input.GroundTruthManifest, context),
    }),
  };
};

const serializeAws_json1_1Assets = (input: Asset[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Asset(entry, context));
};

const serializeAws_json1_1Attributes = (input: (Attribute | string)[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1CompareFacesRequest = (input: CompareFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.QualityFilter !== undefined && { QualityFilter: input.QualityFilter }),
    ...(input.SimilarityThreshold !== undefined && { SimilarityThreshold: input.SimilarityThreshold }),
    ...(input.SourceImage !== undefined && { SourceImage: serializeAws_json1_1Image(input.SourceImage, context) }),
    ...(input.TargetImage !== undefined && { TargetImage: serializeAws_json1_1Image(input.TargetImage, context) }),
  };
};

const serializeAws_json1_1ContentClassifiers = (
  input: (ContentClassifier | string)[],
  context: __SerdeContext
): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1CreateCollectionRequest = (input: CreateCollectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId !== undefined && { CollectionId: input.CollectionId }),
  };
};

const serializeAws_json1_1CreateProjectRequest = (input: CreateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProjectName !== undefined && { ProjectName: input.ProjectName }),
  };
};

const serializeAws_json1_1CreateProjectVersionRequest = (
  input: CreateProjectVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OutputConfig !== undefined && {
      OutputConfig: serializeAws_json1_1OutputConfig(input.OutputConfig, context),
    }),
    ...(input.ProjectArn !== undefined && { ProjectArn: input.ProjectArn }),
    ...(input.TestingData !== undefined && {
      TestingData: serializeAws_json1_1TestingData(input.TestingData, context),
    }),
    ...(input.TrainingData !== undefined && {
      TrainingData: serializeAws_json1_1TrainingData(input.TrainingData, context),
    }),
    ...(input.VersionName !== undefined && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1CreateStreamProcessorRequest = (
  input: CreateStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Input !== undefined && { Input: serializeAws_json1_1StreamProcessorInput(input.Input, context) }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Output !== undefined && { Output: serializeAws_json1_1StreamProcessorOutput(input.Output, context) }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.Settings !== undefined && {
      Settings: serializeAws_json1_1StreamProcessorSettings(input.Settings, context),
    }),
  };
};

const serializeAws_json1_1DeleteCollectionRequest = (input: DeleteCollectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId !== undefined && { CollectionId: input.CollectionId }),
  };
};

const serializeAws_json1_1DeleteFacesRequest = (input: DeleteFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId !== undefined && { CollectionId: input.CollectionId }),
    ...(input.FaceIds !== undefined && { FaceIds: serializeAws_json1_1FaceIdList(input.FaceIds, context) }),
  };
};

const serializeAws_json1_1DeleteStreamProcessorRequest = (
  input: DeleteStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeCollectionRequest = (
  input: DescribeCollectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CollectionId !== undefined && { CollectionId: input.CollectionId }),
  };
};

const serializeAws_json1_1DescribeProjectsRequest = (input: DescribeProjectsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeProjectVersionsRequest = (
  input: DescribeProjectVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ProjectArn !== undefined && { ProjectArn: input.ProjectArn }),
    ...(input.VersionNames !== undefined && {
      VersionNames: serializeAws_json1_1VersionNames(input.VersionNames, context),
    }),
  };
};

const serializeAws_json1_1DescribeStreamProcessorRequest = (
  input: DescribeStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
  };
};

const serializeAws_json1_1DetectCustomLabelsRequest = (
  input: DetectCustomLabelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Image !== undefined && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.MinConfidence !== undefined && { MinConfidence: input.MinConfidence }),
    ...(input.ProjectVersionArn !== undefined && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

const serializeAws_json1_1DetectFacesRequest = (input: DetectFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined && { Attributes: serializeAws_json1_1Attributes(input.Attributes, context) }),
    ...(input.Image !== undefined && { Image: serializeAws_json1_1Image(input.Image, context) }),
  };
};

const serializeAws_json1_1DetectLabelsRequest = (input: DetectLabelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Image !== undefined && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.MaxLabels !== undefined && { MaxLabels: input.MaxLabels }),
    ...(input.MinConfidence !== undefined && { MinConfidence: input.MinConfidence }),
  };
};

const serializeAws_json1_1DetectModerationLabelsRequest = (
  input: DetectModerationLabelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HumanLoopConfig !== undefined && {
      HumanLoopConfig: serializeAws_json1_1HumanLoopConfig(input.HumanLoopConfig, context),
    }),
    ...(input.Image !== undefined && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.MinConfidence !== undefined && { MinConfidence: input.MinConfidence }),
  };
};

const serializeAws_json1_1DetectTextRequest = (input: DetectTextRequest, context: __SerdeContext): any => {
  return {
    ...(input.Image !== undefined && { Image: serializeAws_json1_1Image(input.Image, context) }),
  };
};

const serializeAws_json1_1FaceIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1FaceSearchSettings = (input: FaceSearchSettings, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId !== undefined && { CollectionId: input.CollectionId }),
    ...(input.FaceMatchThreshold !== undefined && { FaceMatchThreshold: input.FaceMatchThreshold }),
  };
};

const serializeAws_json1_1GetCelebrityInfoRequest = (input: GetCelebrityInfoRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
  };
};

const serializeAws_json1_1GetCelebrityRecognitionRequest = (
  input: GetCelebrityRecognitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SortBy !== undefined && { SortBy: input.SortBy }),
  };
};

const serializeAws_json1_1GetContentModerationRequest = (
  input: GetContentModerationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SortBy !== undefined && { SortBy: input.SortBy }),
  };
};

const serializeAws_json1_1GetFaceDetectionRequest = (input: GetFaceDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetFaceSearchRequest = (input: GetFaceSearchRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SortBy !== undefined && { SortBy: input.SortBy }),
  };
};

const serializeAws_json1_1GetLabelDetectionRequest = (
  input: GetLabelDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SortBy !== undefined && { SortBy: input.SortBy }),
  };
};

const serializeAws_json1_1GetPersonTrackingRequest = (
  input: GetPersonTrackingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SortBy !== undefined && { SortBy: input.SortBy }),
  };
};

const serializeAws_json1_1GroundTruthManifest = (input: GroundTruthManifest, context: __SerdeContext): any => {
  return {
    ...(input.S3Object !== undefined && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const serializeAws_json1_1HumanLoopConfig = (input: HumanLoopConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataAttributes !== undefined && {
      DataAttributes: serializeAws_json1_1HumanLoopDataAttributes(input.DataAttributes, context),
    }),
    ...(input.FlowDefinitionArn !== undefined && { FlowDefinitionArn: input.FlowDefinitionArn }),
    ...(input.HumanLoopName !== undefined && { HumanLoopName: input.HumanLoopName }),
  };
};

const serializeAws_json1_1HumanLoopDataAttributes = (input: HumanLoopDataAttributes, context: __SerdeContext): any => {
  return {
    ...(input.ContentClassifiers !== undefined && {
      ContentClassifiers: serializeAws_json1_1ContentClassifiers(input.ContentClassifiers, context),
    }),
  };
};

const serializeAws_json1_1Image = (input: Image, context: __SerdeContext): any => {
  return {
    ...(input.Bytes !== undefined && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.S3Object !== undefined && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const serializeAws_json1_1IndexFacesRequest = (input: IndexFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId !== undefined && { CollectionId: input.CollectionId }),
    ...(input.DetectionAttributes !== undefined && {
      DetectionAttributes: serializeAws_json1_1Attributes(input.DetectionAttributes, context),
    }),
    ...(input.ExternalImageId !== undefined && { ExternalImageId: input.ExternalImageId }),
    ...(input.Image !== undefined && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.MaxFaces !== undefined && { MaxFaces: input.MaxFaces }),
    ...(input.QualityFilter !== undefined && { QualityFilter: input.QualityFilter }),
  };
};

const serializeAws_json1_1KinesisDataStream = (input: KinesisDataStream, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && { Arn: input.Arn }),
  };
};

const serializeAws_json1_1KinesisVideoStream = (input: KinesisVideoStream, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && { Arn: input.Arn }),
  };
};

const serializeAws_json1_1ListCollectionsRequest = (input: ListCollectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListFacesRequest = (input: ListFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId !== undefined && { CollectionId: input.CollectionId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListStreamProcessorsRequest = (
  input: ListStreamProcessorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1NotificationChannel = (input: NotificationChannel, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.SNSTopicArn !== undefined && { SNSTopicArn: input.SNSTopicArn }),
  };
};

const serializeAws_json1_1OutputConfig = (input: OutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket !== undefined && { S3Bucket: input.S3Bucket }),
    ...(input.S3KeyPrefix !== undefined && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

const serializeAws_json1_1RecognizeCelebritiesRequest = (
  input: RecognizeCelebritiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Image !== undefined && { Image: serializeAws_json1_1Image(input.Image, context) }),
  };
};

const serializeAws_json1_1S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && { Bucket: input.Bucket }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_json1_1SearchFacesByImageRequest = (
  input: SearchFacesByImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CollectionId !== undefined && { CollectionId: input.CollectionId }),
    ...(input.FaceMatchThreshold !== undefined && { FaceMatchThreshold: input.FaceMatchThreshold }),
    ...(input.Image !== undefined && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.MaxFaces !== undefined && { MaxFaces: input.MaxFaces }),
    ...(input.QualityFilter !== undefined && { QualityFilter: input.QualityFilter }),
  };
};

const serializeAws_json1_1SearchFacesRequest = (input: SearchFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId !== undefined && { CollectionId: input.CollectionId }),
    ...(input.FaceId !== undefined && { FaceId: input.FaceId }),
    ...(input.FaceMatchThreshold !== undefined && { FaceMatchThreshold: input.FaceMatchThreshold }),
    ...(input.MaxFaces !== undefined && { MaxFaces: input.MaxFaces }),
  };
};

const serializeAws_json1_1StartCelebrityRecognitionRequest = (
  input: StartCelebrityRecognitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.JobTag !== undefined && { JobTag: input.JobTag }),
    ...(input.NotificationChannel !== undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video !== undefined && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartContentModerationRequest = (
  input: StartContentModerationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.JobTag !== undefined && { JobTag: input.JobTag }),
    ...(input.MinConfidence !== undefined && { MinConfidence: input.MinConfidence }),
    ...(input.NotificationChannel !== undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video !== undefined && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartFaceDetectionRequest = (
  input: StartFaceDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.FaceAttributes !== undefined && { FaceAttributes: input.FaceAttributes }),
    ...(input.JobTag !== undefined && { JobTag: input.JobTag }),
    ...(input.NotificationChannel !== undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video !== undefined && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartFaceSearchRequest = (input: StartFaceSearchRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.CollectionId !== undefined && { CollectionId: input.CollectionId }),
    ...(input.FaceMatchThreshold !== undefined && { FaceMatchThreshold: input.FaceMatchThreshold }),
    ...(input.JobTag !== undefined && { JobTag: input.JobTag }),
    ...(input.NotificationChannel !== undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video !== undefined && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartLabelDetectionRequest = (
  input: StartLabelDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.JobTag !== undefined && { JobTag: input.JobTag }),
    ...(input.MinConfidence !== undefined && { MinConfidence: input.MinConfidence }),
    ...(input.NotificationChannel !== undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video !== undefined && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartPersonTrackingRequest = (
  input: StartPersonTrackingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.JobTag !== undefined && { JobTag: input.JobTag }),
    ...(input.NotificationChannel !== undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video !== undefined && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartProjectVersionRequest = (
  input: StartProjectVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MinInferenceUnits !== undefined && { MinInferenceUnits: input.MinInferenceUnits }),
    ...(input.ProjectVersionArn !== undefined && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

const serializeAws_json1_1StartStreamProcessorRequest = (
  input: StartStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
  };
};

const serializeAws_json1_1StopProjectVersionRequest = (
  input: StopProjectVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProjectVersionArn !== undefined && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

const serializeAws_json1_1StopStreamProcessorRequest = (
  input: StopStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
  };
};

const serializeAws_json1_1StreamProcessorInput = (input: StreamProcessorInput, context: __SerdeContext): any => {
  return {
    ...(input.KinesisVideoStream !== undefined && {
      KinesisVideoStream: serializeAws_json1_1KinesisVideoStream(input.KinesisVideoStream, context),
    }),
  };
};

const serializeAws_json1_1StreamProcessorOutput = (input: StreamProcessorOutput, context: __SerdeContext): any => {
  return {
    ...(input.KinesisDataStream !== undefined && {
      KinesisDataStream: serializeAws_json1_1KinesisDataStream(input.KinesisDataStream, context),
    }),
  };
};

const serializeAws_json1_1StreamProcessorSettings = (input: StreamProcessorSettings, context: __SerdeContext): any => {
  return {
    ...(input.FaceSearch !== undefined && {
      FaceSearch: serializeAws_json1_1FaceSearchSettings(input.FaceSearch, context),
    }),
  };
};

const serializeAws_json1_1TestingData = (input: TestingData, context: __SerdeContext): any => {
  return {
    ...(input.Assets !== undefined && { Assets: serializeAws_json1_1Assets(input.Assets, context) }),
    ...(input.AutoCreate !== undefined && { AutoCreate: input.AutoCreate }),
  };
};

const serializeAws_json1_1TrainingData = (input: TrainingData, context: __SerdeContext): any => {
  return {
    ...(input.Assets !== undefined && { Assets: serializeAws_json1_1Assets(input.Assets, context) }),
  };
};

const serializeAws_json1_1VersionNames = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Video = (input: Video, context: __SerdeContext): any => {
  return {
    ...(input.S3Object !== undefined && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1AgeRange = (output: any, context: __SerdeContext): AgeRange => {
  return {
    __type: "AgeRange",
    High: output.High !== undefined && output.High !== null ? output.High : undefined,
    Low: output.Low !== undefined && output.Low !== null ? output.Low : undefined,
  } as any;
};

const deserializeAws_json1_1Asset = (output: any, context: __SerdeContext): Asset => {
  return {
    __type: "Asset",
    GroundTruthManifest:
      output.GroundTruthManifest !== undefined && output.GroundTruthManifest !== null
        ? deserializeAws_json1_1GroundTruthManifest(output.GroundTruthManifest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Assets = (output: any, context: __SerdeContext): Asset[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Asset(entry, context));
};

const deserializeAws_json1_1Beard = (output: any, context: __SerdeContext): Beard => {
  return {
    __type: "Beard",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return {
    __type: "BoundingBox",
    Height: output.Height !== undefined && output.Height !== null ? output.Height : undefined,
    Left: output.Left !== undefined && output.Left !== null ? output.Left : undefined,
    Top: output.Top !== undefined && output.Top !== null ? output.Top : undefined,
    Width: output.Width !== undefined && output.Width !== null ? output.Width : undefined,
  } as any;
};

const deserializeAws_json1_1Celebrity = (output: any, context: __SerdeContext): Celebrity => {
  return {
    __type: "Celebrity",
    Face:
      output.Face !== undefined && output.Face !== null
        ? deserializeAws_json1_1ComparedFace(output.Face, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    MatchConfidence:
      output.MatchConfidence !== undefined && output.MatchConfidence !== null ? output.MatchConfidence : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Urls:
      output.Urls !== undefined && output.Urls !== null ? deserializeAws_json1_1Urls(output.Urls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CelebrityDetail = (output: any, context: __SerdeContext): CelebrityDetail => {
  return {
    __type: "CelebrityDetail",
    BoundingBox:
      output.BoundingBox !== undefined && output.BoundingBox !== null
        ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context)
        : undefined,
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Face:
      output.Face !== undefined && output.Face !== null
        ? deserializeAws_json1_1FaceDetail(output.Face, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Urls:
      output.Urls !== undefined && output.Urls !== null ? deserializeAws_json1_1Urls(output.Urls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CelebrityList = (output: any, context: __SerdeContext): Celebrity[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Celebrity(entry, context));
};

const deserializeAws_json1_1CelebrityRecognition = (output: any, context: __SerdeContext): CelebrityRecognition => {
  return {
    __type: "CelebrityRecognition",
    Celebrity:
      output.Celebrity !== undefined && output.Celebrity !== null
        ? deserializeAws_json1_1CelebrityDetail(output.Celebrity, context)
        : undefined,
    Timestamp: output.Timestamp !== undefined && output.Timestamp !== null ? output.Timestamp : undefined,
  } as any;
};

const deserializeAws_json1_1CelebrityRecognitions = (output: any, context: __SerdeContext): CelebrityRecognition[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1CelebrityRecognition(entry, context));
};

const deserializeAws_json1_1CollectionIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ComparedFace = (output: any, context: __SerdeContext): ComparedFace => {
  return {
    __type: "ComparedFace",
    BoundingBox:
      output.BoundingBox !== undefined && output.BoundingBox !== null
        ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context)
        : undefined,
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Landmarks:
      output.Landmarks !== undefined && output.Landmarks !== null
        ? deserializeAws_json1_1Landmarks(output.Landmarks, context)
        : undefined,
    Pose:
      output.Pose !== undefined && output.Pose !== null ? deserializeAws_json1_1Pose(output.Pose, context) : undefined,
    Quality:
      output.Quality !== undefined && output.Quality !== null
        ? deserializeAws_json1_1ImageQuality(output.Quality, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ComparedFaceList = (output: any, context: __SerdeContext): ComparedFace[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ComparedFace(entry, context));
};

const deserializeAws_json1_1ComparedSourceImageFace = (
  output: any,
  context: __SerdeContext
): ComparedSourceImageFace => {
  return {
    __type: "ComparedSourceImageFace",
    BoundingBox:
      output.BoundingBox !== undefined && output.BoundingBox !== null
        ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context)
        : undefined,
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
  } as any;
};

const deserializeAws_json1_1CompareFacesMatch = (output: any, context: __SerdeContext): CompareFacesMatch => {
  return {
    __type: "CompareFacesMatch",
    Face:
      output.Face !== undefined && output.Face !== null
        ? deserializeAws_json1_1ComparedFace(output.Face, context)
        : undefined,
    Similarity: output.Similarity !== undefined && output.Similarity !== null ? output.Similarity : undefined,
  } as any;
};

const deserializeAws_json1_1CompareFacesMatchList = (output: any, context: __SerdeContext): CompareFacesMatch[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1CompareFacesMatch(entry, context));
};

const deserializeAws_json1_1CompareFacesResponse = (output: any, context: __SerdeContext): CompareFacesResponse => {
  return {
    __type: "CompareFacesResponse",
    FaceMatches:
      output.FaceMatches !== undefined && output.FaceMatches !== null
        ? deserializeAws_json1_1CompareFacesMatchList(output.FaceMatches, context)
        : undefined,
    SourceImageFace:
      output.SourceImageFace !== undefined && output.SourceImageFace !== null
        ? deserializeAws_json1_1ComparedSourceImageFace(output.SourceImageFace, context)
        : undefined,
    SourceImageOrientationCorrection:
      output.SourceImageOrientationCorrection !== undefined && output.SourceImageOrientationCorrection !== null
        ? output.SourceImageOrientationCorrection
        : undefined,
    TargetImageOrientationCorrection:
      output.TargetImageOrientationCorrection !== undefined && output.TargetImageOrientationCorrection !== null
        ? output.TargetImageOrientationCorrection
        : undefined,
    UnmatchedFaces:
      output.UnmatchedFaces !== undefined && output.UnmatchedFaces !== null
        ? deserializeAws_json1_1CompareFacesUnmatchList(output.UnmatchedFaces, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CompareFacesUnmatchList = (output: any, context: __SerdeContext): ComparedFace[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ComparedFace(entry, context));
};

const deserializeAws_json1_1ContentModerationDetection = (
  output: any,
  context: __SerdeContext
): ContentModerationDetection => {
  return {
    __type: "ContentModerationDetection",
    ModerationLabel:
      output.ModerationLabel !== undefined && output.ModerationLabel !== null
        ? deserializeAws_json1_1ModerationLabel(output.ModerationLabel, context)
        : undefined,
    Timestamp: output.Timestamp !== undefined && output.Timestamp !== null ? output.Timestamp : undefined,
  } as any;
};

const deserializeAws_json1_1ContentModerationDetections = (
  output: any,
  context: __SerdeContext
): ContentModerationDetection[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ContentModerationDetection(entry, context));
};

const deserializeAws_json1_1CreateCollectionResponse = (
  output: any,
  context: __SerdeContext
): CreateCollectionResponse => {
  return {
    __type: "CreateCollectionResponse",
    CollectionArn:
      output.CollectionArn !== undefined && output.CollectionArn !== null ? output.CollectionArn : undefined,
    FaceModelVersion:
      output.FaceModelVersion !== undefined && output.FaceModelVersion !== null ? output.FaceModelVersion : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
  } as any;
};

const deserializeAws_json1_1CreateProjectResponse = (output: any, context: __SerdeContext): CreateProjectResponse => {
  return {
    __type: "CreateProjectResponse",
    ProjectArn: output.ProjectArn !== undefined && output.ProjectArn !== null ? output.ProjectArn : undefined,
  } as any;
};

const deserializeAws_json1_1CreateProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): CreateProjectVersionResponse => {
  return {
    __type: "CreateProjectVersionResponse",
    ProjectVersionArn:
      output.ProjectVersionArn !== undefined && output.ProjectVersionArn !== null
        ? output.ProjectVersionArn
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): CreateStreamProcessorResponse => {
  return {
    __type: "CreateStreamProcessorResponse",
    StreamProcessorArn:
      output.StreamProcessorArn !== undefined && output.StreamProcessorArn !== null
        ? output.StreamProcessorArn
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomLabel = (output: any, context: __SerdeContext): CustomLabel => {
  return {
    __type: "CustomLabel",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Geometry:
      output.Geometry !== undefined && output.Geometry !== null
        ? deserializeAws_json1_1Geometry(output.Geometry, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_json1_1CustomLabels = (output: any, context: __SerdeContext): CustomLabel[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1CustomLabel(entry, context));
};

const deserializeAws_json1_1DeleteCollectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteCollectionResponse => {
  return {
    __type: "DeleteCollectionResponse",
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteFacesResponse = (output: any, context: __SerdeContext): DeleteFacesResponse => {
  return {
    __type: "DeleteFacesResponse",
    DeletedFaces:
      output.DeletedFaces !== undefined && output.DeletedFaces !== null
        ? deserializeAws_json1_1FaceIdList(output.DeletedFaces, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): DeleteStreamProcessorResponse => {
  return {
    __type: "DeleteStreamProcessorResponse",
  } as any;
};

const deserializeAws_json1_1DescribeCollectionResponse = (
  output: any,
  context: __SerdeContext
): DescribeCollectionResponse => {
  return {
    __type: "DescribeCollectionResponse",
    CollectionARN:
      output.CollectionARN !== undefined && output.CollectionARN !== null ? output.CollectionARN : undefined,
    CreationTimestamp:
      output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
        ? new Date(Math.round(output.CreationTimestamp * 1000))
        : undefined,
    FaceCount: output.FaceCount !== undefined && output.FaceCount !== null ? output.FaceCount : undefined,
    FaceModelVersion:
      output.FaceModelVersion !== undefined && output.FaceModelVersion !== null ? output.FaceModelVersion : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProjectsResponse = (
  output: any,
  context: __SerdeContext
): DescribeProjectsResponse => {
  return {
    __type: "DescribeProjectsResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ProjectDescriptions:
      output.ProjectDescriptions !== undefined && output.ProjectDescriptions !== null
        ? deserializeAws_json1_1ProjectDescriptions(output.ProjectDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProjectVersionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeProjectVersionsResponse => {
  return {
    __type: "DescribeProjectVersionsResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ProjectVersionDescriptions:
      output.ProjectVersionDescriptions !== undefined && output.ProjectVersionDescriptions !== null
        ? deserializeAws_json1_1ProjectVersionDescriptions(output.ProjectVersionDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): DescribeStreamProcessorResponse => {
  return {
    __type: "DescribeStreamProcessorResponse",
    CreationTimestamp:
      output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
        ? new Date(Math.round(output.CreationTimestamp * 1000))
        : undefined,
    Input:
      output.Input !== undefined && output.Input !== null
        ? deserializeAws_json1_1StreamProcessorInput(output.Input, context)
        : undefined,
    LastUpdateTimestamp:
      output.LastUpdateTimestamp !== undefined && output.LastUpdateTimestamp !== null
        ? new Date(Math.round(output.LastUpdateTimestamp * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Output:
      output.Output !== undefined && output.Output !== null
        ? deserializeAws_json1_1StreamProcessorOutput(output.Output, context)
        : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    Settings:
      output.Settings !== undefined && output.Settings !== null
        ? deserializeAws_json1_1StreamProcessorSettings(output.Settings, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    StreamProcessorArn:
      output.StreamProcessorArn !== undefined && output.StreamProcessorArn !== null
        ? output.StreamProcessorArn
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectCustomLabelsResponse = (
  output: any,
  context: __SerdeContext
): DetectCustomLabelsResponse => {
  return {
    __type: "DetectCustomLabelsResponse",
    CustomLabels:
      output.CustomLabels !== undefined && output.CustomLabels !== null
        ? deserializeAws_json1_1CustomLabels(output.CustomLabels, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectFacesResponse = (output: any, context: __SerdeContext): DetectFacesResponse => {
  return {
    __type: "DetectFacesResponse",
    FaceDetails:
      output.FaceDetails !== undefined && output.FaceDetails !== null
        ? deserializeAws_json1_1FaceDetailList(output.FaceDetails, context)
        : undefined,
    OrientationCorrection:
      output.OrientationCorrection !== undefined && output.OrientationCorrection !== null
        ? output.OrientationCorrection
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectLabelsResponse = (output: any, context: __SerdeContext): DetectLabelsResponse => {
  return {
    __type: "DetectLabelsResponse",
    LabelModelVersion:
      output.LabelModelVersion !== undefined && output.LabelModelVersion !== null
        ? output.LabelModelVersion
        : undefined,
    Labels:
      output.Labels !== undefined && output.Labels !== null
        ? deserializeAws_json1_1Labels(output.Labels, context)
        : undefined,
    OrientationCorrection:
      output.OrientationCorrection !== undefined && output.OrientationCorrection !== null
        ? output.OrientationCorrection
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectModerationLabelsResponse = (
  output: any,
  context: __SerdeContext
): DetectModerationLabelsResponse => {
  return {
    __type: "DetectModerationLabelsResponse",
    HumanLoopActivationOutput:
      output.HumanLoopActivationOutput !== undefined && output.HumanLoopActivationOutput !== null
        ? deserializeAws_json1_1HumanLoopActivationOutput(output.HumanLoopActivationOutput, context)
        : undefined,
    ModerationLabels:
      output.ModerationLabels !== undefined && output.ModerationLabels !== null
        ? deserializeAws_json1_1ModerationLabels(output.ModerationLabels, context)
        : undefined,
    ModerationModelVersion:
      output.ModerationModelVersion !== undefined && output.ModerationModelVersion !== null
        ? output.ModerationModelVersion
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectTextResponse = (output: any, context: __SerdeContext): DetectTextResponse => {
  return {
    __type: "DetectTextResponse",
    TextDetections:
      output.TextDetections !== undefined && output.TextDetections !== null
        ? deserializeAws_json1_1TextDetectionList(output.TextDetections, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Emotion = (output: any, context: __SerdeContext): Emotion => {
  return {
    __type: "Emotion",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1Emotions = (output: any, context: __SerdeContext): Emotion[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Emotion(entry, context));
};

const deserializeAws_json1_1EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    __type: "EvaluationResult",
    F1Score: output.F1Score !== undefined && output.F1Score !== null ? output.F1Score : undefined,
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1Summary(output.Summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Eyeglasses = (output: any, context: __SerdeContext): Eyeglasses => {
  return {
    __type: "Eyeglasses",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1EyeOpen = (output: any, context: __SerdeContext): EyeOpen => {
  return {
    __type: "EyeOpen",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1Face = (output: any, context: __SerdeContext): Face => {
  return {
    __type: "Face",
    BoundingBox:
      output.BoundingBox !== undefined && output.BoundingBox !== null
        ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context)
        : undefined,
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    ExternalImageId:
      output.ExternalImageId !== undefined && output.ExternalImageId !== null ? output.ExternalImageId : undefined,
    FaceId: output.FaceId !== undefined && output.FaceId !== null ? output.FaceId : undefined,
    ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
  } as any;
};

const deserializeAws_json1_1FaceDetail = (output: any, context: __SerdeContext): FaceDetail => {
  return {
    __type: "FaceDetail",
    AgeRange:
      output.AgeRange !== undefined && output.AgeRange !== null
        ? deserializeAws_json1_1AgeRange(output.AgeRange, context)
        : undefined,
    Beard:
      output.Beard !== undefined && output.Beard !== null
        ? deserializeAws_json1_1Beard(output.Beard, context)
        : undefined,
    BoundingBox:
      output.BoundingBox !== undefined && output.BoundingBox !== null
        ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context)
        : undefined,
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Emotions:
      output.Emotions !== undefined && output.Emotions !== null
        ? deserializeAws_json1_1Emotions(output.Emotions, context)
        : undefined,
    Eyeglasses:
      output.Eyeglasses !== undefined && output.Eyeglasses !== null
        ? deserializeAws_json1_1Eyeglasses(output.Eyeglasses, context)
        : undefined,
    EyesOpen:
      output.EyesOpen !== undefined && output.EyesOpen !== null
        ? deserializeAws_json1_1EyeOpen(output.EyesOpen, context)
        : undefined,
    Gender:
      output.Gender !== undefined && output.Gender !== null
        ? deserializeAws_json1_1Gender(output.Gender, context)
        : undefined,
    Landmarks:
      output.Landmarks !== undefined && output.Landmarks !== null
        ? deserializeAws_json1_1Landmarks(output.Landmarks, context)
        : undefined,
    MouthOpen:
      output.MouthOpen !== undefined && output.MouthOpen !== null
        ? deserializeAws_json1_1MouthOpen(output.MouthOpen, context)
        : undefined,
    Mustache:
      output.Mustache !== undefined && output.Mustache !== null
        ? deserializeAws_json1_1Mustache(output.Mustache, context)
        : undefined,
    Pose:
      output.Pose !== undefined && output.Pose !== null ? deserializeAws_json1_1Pose(output.Pose, context) : undefined,
    Quality:
      output.Quality !== undefined && output.Quality !== null
        ? deserializeAws_json1_1ImageQuality(output.Quality, context)
        : undefined,
    Smile:
      output.Smile !== undefined && output.Smile !== null
        ? deserializeAws_json1_1Smile(output.Smile, context)
        : undefined,
    Sunglasses:
      output.Sunglasses !== undefined && output.Sunglasses !== null
        ? deserializeAws_json1_1Sunglasses(output.Sunglasses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FaceDetailList = (output: any, context: __SerdeContext): FaceDetail[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1FaceDetail(entry, context));
};

const deserializeAws_json1_1FaceDetection = (output: any, context: __SerdeContext): FaceDetection => {
  return {
    __type: "FaceDetection",
    Face:
      output.Face !== undefined && output.Face !== null
        ? deserializeAws_json1_1FaceDetail(output.Face, context)
        : undefined,
    Timestamp: output.Timestamp !== undefined && output.Timestamp !== null ? output.Timestamp : undefined,
  } as any;
};

const deserializeAws_json1_1FaceDetections = (output: any, context: __SerdeContext): FaceDetection[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1FaceDetection(entry, context));
};

const deserializeAws_json1_1FaceIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FaceList = (output: any, context: __SerdeContext): Face[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Face(entry, context));
};

const deserializeAws_json1_1FaceMatch = (output: any, context: __SerdeContext): FaceMatch => {
  return {
    __type: "FaceMatch",
    Face:
      output.Face !== undefined && output.Face !== null ? deserializeAws_json1_1Face(output.Face, context) : undefined,
    Similarity: output.Similarity !== undefined && output.Similarity !== null ? output.Similarity : undefined,
  } as any;
};

const deserializeAws_json1_1FaceMatchList = (output: any, context: __SerdeContext): FaceMatch[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1FaceMatch(entry, context));
};

const deserializeAws_json1_1FaceModelVersionList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FaceRecord = (output: any, context: __SerdeContext): FaceRecord => {
  return {
    __type: "FaceRecord",
    Face:
      output.Face !== undefined && output.Face !== null ? deserializeAws_json1_1Face(output.Face, context) : undefined,
    FaceDetail:
      output.FaceDetail !== undefined && output.FaceDetail !== null
        ? deserializeAws_json1_1FaceDetail(output.FaceDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FaceRecordList = (output: any, context: __SerdeContext): FaceRecord[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1FaceRecord(entry, context));
};

const deserializeAws_json1_1FaceSearchSettings = (output: any, context: __SerdeContext): FaceSearchSettings => {
  return {
    __type: "FaceSearchSettings",
    CollectionId: output.CollectionId !== undefined && output.CollectionId !== null ? output.CollectionId : undefined,
    FaceMatchThreshold:
      output.FaceMatchThreshold !== undefined && output.FaceMatchThreshold !== null
        ? output.FaceMatchThreshold
        : undefined,
  } as any;
};

const deserializeAws_json1_1Gender = (output: any, context: __SerdeContext): Gender => {
  return {
    __type: "Gender",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
    __type: "Geometry",
    BoundingBox:
      output.BoundingBox !== undefined && output.BoundingBox !== null
        ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context)
        : undefined,
    Polygon:
      output.Polygon !== undefined && output.Polygon !== null
        ? deserializeAws_json1_1Polygon(output.Polygon, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCelebrityInfoResponse = (
  output: any,
  context: __SerdeContext
): GetCelebrityInfoResponse => {
  return {
    __type: "GetCelebrityInfoResponse",
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Urls:
      output.Urls !== undefined && output.Urls !== null ? deserializeAws_json1_1Urls(output.Urls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetCelebrityRecognitionResponse = (
  output: any,
  context: __SerdeContext
): GetCelebrityRecognitionResponse => {
  return {
    __type: "GetCelebrityRecognitionResponse",
    Celebrities:
      output.Celebrities !== undefined && output.Celebrities !== null
        ? deserializeAws_json1_1CelebrityRecognitions(output.Celebrities, context)
        : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    VideoMetadata:
      output.VideoMetadata !== undefined && output.VideoMetadata !== null
        ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetContentModerationResponse = (
  output: any,
  context: __SerdeContext
): GetContentModerationResponse => {
  return {
    __type: "GetContentModerationResponse",
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    ModerationLabels:
      output.ModerationLabels !== undefined && output.ModerationLabels !== null
        ? deserializeAws_json1_1ContentModerationDetections(output.ModerationLabels, context)
        : undefined,
    ModerationModelVersion:
      output.ModerationModelVersion !== undefined && output.ModerationModelVersion !== null
        ? output.ModerationModelVersion
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    VideoMetadata:
      output.VideoMetadata !== undefined && output.VideoMetadata !== null
        ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetFaceDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetFaceDetectionResponse => {
  return {
    __type: "GetFaceDetectionResponse",
    Faces:
      output.Faces !== undefined && output.Faces !== null
        ? deserializeAws_json1_1FaceDetections(output.Faces, context)
        : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    VideoMetadata:
      output.VideoMetadata !== undefined && output.VideoMetadata !== null
        ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetFaceSearchResponse = (output: any, context: __SerdeContext): GetFaceSearchResponse => {
  return {
    __type: "GetFaceSearchResponse",
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Persons:
      output.Persons !== undefined && output.Persons !== null
        ? deserializeAws_json1_1PersonMatches(output.Persons, context)
        : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    VideoMetadata:
      output.VideoMetadata !== undefined && output.VideoMetadata !== null
        ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLabelDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetLabelDetectionResponse => {
  return {
    __type: "GetLabelDetectionResponse",
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    LabelModelVersion:
      output.LabelModelVersion !== undefined && output.LabelModelVersion !== null
        ? output.LabelModelVersion
        : undefined,
    Labels:
      output.Labels !== undefined && output.Labels !== null
        ? deserializeAws_json1_1LabelDetections(output.Labels, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    VideoMetadata:
      output.VideoMetadata !== undefined && output.VideoMetadata !== null
        ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPersonTrackingResponse = (
  output: any,
  context: __SerdeContext
): GetPersonTrackingResponse => {
  return {
    __type: "GetPersonTrackingResponse",
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Persons:
      output.Persons !== undefined && output.Persons !== null
        ? deserializeAws_json1_1PersonDetections(output.Persons, context)
        : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    VideoMetadata:
      output.VideoMetadata !== undefined && output.VideoMetadata !== null
        ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GroundTruthManifest = (output: any, context: __SerdeContext): GroundTruthManifest => {
  return {
    __type: "GroundTruthManifest",
    S3Object:
      output.S3Object !== undefined && output.S3Object !== null
        ? deserializeAws_json1_1S3Object(output.S3Object, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HumanLoopActivationOutput = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationOutput => {
  return {
    __type: "HumanLoopActivationOutput",
    HumanLoopActivationConditionsEvaluationResults:
      output.HumanLoopActivationConditionsEvaluationResults !== undefined &&
      output.HumanLoopActivationConditionsEvaluationResults !== null
        ? new __LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults)
        : undefined,
    HumanLoopActivationReasons:
      output.HumanLoopActivationReasons !== undefined && output.HumanLoopActivationReasons !== null
        ? deserializeAws_json1_1HumanLoopActivationReasons(output.HumanLoopActivationReasons, context)
        : undefined,
    HumanLoopArn: output.HumanLoopArn !== undefined && output.HumanLoopArn !== null ? output.HumanLoopArn : undefined,
  } as any;
};

const deserializeAws_json1_1HumanLoopActivationReasons = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1HumanLoopQuotaExceededException = (
  output: any,
  context: __SerdeContext
): HumanLoopQuotaExceededException => {
  return {
    __type: "HumanLoopQuotaExceededException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    QuotaCode: output.QuotaCode !== undefined && output.QuotaCode !== null ? output.QuotaCode : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    ServiceCode: output.ServiceCode !== undefined && output.ServiceCode !== null ? output.ServiceCode : undefined,
  } as any;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    __type: "IdempotentParameterMismatchException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ImageQuality = (output: any, context: __SerdeContext): ImageQuality => {
  return {
    __type: "ImageQuality",
    Brightness: output.Brightness !== undefined && output.Brightness !== null ? output.Brightness : undefined,
    Sharpness: output.Sharpness !== undefined && output.Sharpness !== null ? output.Sharpness : undefined,
  } as any;
};

const deserializeAws_json1_1ImageTooLargeException = (output: any, context: __SerdeContext): ImageTooLargeException => {
  return {
    __type: "ImageTooLargeException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1IndexFacesResponse = (output: any, context: __SerdeContext): IndexFacesResponse => {
  return {
    __type: "IndexFacesResponse",
    FaceModelVersion:
      output.FaceModelVersion !== undefined && output.FaceModelVersion !== null ? output.FaceModelVersion : undefined,
    FaceRecords:
      output.FaceRecords !== undefined && output.FaceRecords !== null
        ? deserializeAws_json1_1FaceRecordList(output.FaceRecords, context)
        : undefined,
    OrientationCorrection:
      output.OrientationCorrection !== undefined && output.OrientationCorrection !== null
        ? output.OrientationCorrection
        : undefined,
    UnindexedFaces:
      output.UnindexedFaces !== undefined && output.UnindexedFaces !== null
        ? deserializeAws_json1_1UnindexedFaces(output.UnindexedFaces, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    __type: "Instance",
    BoundingBox:
      output.BoundingBox !== undefined && output.BoundingBox !== null
        ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context)
        : undefined,
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
  } as any;
};

const deserializeAws_json1_1Instances = (output: any, context: __SerdeContext): Instance[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Instance(entry, context));
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    __type: "InternalServerError",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidImageFormatException = (
  output: any,
  context: __SerdeContext
): InvalidImageFormatException => {
  return {
    __type: "InvalidImageFormatException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidPaginationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidPaginationTokenException => {
  return {
    __type: "InvalidPaginationTokenException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidS3ObjectException = (
  output: any,
  context: __SerdeContext
): InvalidS3ObjectException => {
  return {
    __type: "InvalidS3ObjectException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1KinesisDataStream = (output: any, context: __SerdeContext): KinesisDataStream => {
  return {
    __type: "KinesisDataStream",
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
  } as any;
};

const deserializeAws_json1_1KinesisVideoStream = (output: any, context: __SerdeContext): KinesisVideoStream => {
  return {
    __type: "KinesisVideoStream",
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
  } as any;
};

const deserializeAws_json1_1Label = (output: any, context: __SerdeContext): Label => {
  return {
    __type: "Label",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Instances:
      output.Instances !== undefined && output.Instances !== null
        ? deserializeAws_json1_1Instances(output.Instances, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Parents:
      output.Parents !== undefined && output.Parents !== null
        ? deserializeAws_json1_1Parents(output.Parents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LabelDetection = (output: any, context: __SerdeContext): LabelDetection => {
  return {
    __type: "LabelDetection",
    Label:
      output.Label !== undefined && output.Label !== null
        ? deserializeAws_json1_1Label(output.Label, context)
        : undefined,
    Timestamp: output.Timestamp !== undefined && output.Timestamp !== null ? output.Timestamp : undefined,
  } as any;
};

const deserializeAws_json1_1LabelDetections = (output: any, context: __SerdeContext): LabelDetection[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LabelDetection(entry, context));
};

const deserializeAws_json1_1Labels = (output: any, context: __SerdeContext): Label[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Label(entry, context));
};

const deserializeAws_json1_1Landmark = (output: any, context: __SerdeContext): Landmark => {
  return {
    __type: "Landmark",
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    X: output.X !== undefined && output.X !== null ? output.X : undefined,
    Y: output.Y !== undefined && output.Y !== null ? output.Y : undefined,
  } as any;
};

const deserializeAws_json1_1Landmarks = (output: any, context: __SerdeContext): Landmark[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Landmark(entry, context));
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ListCollectionsResponse = (
  output: any,
  context: __SerdeContext
): ListCollectionsResponse => {
  return {
    __type: "ListCollectionsResponse",
    CollectionIds:
      output.CollectionIds !== undefined && output.CollectionIds !== null
        ? deserializeAws_json1_1CollectionIdList(output.CollectionIds, context)
        : undefined,
    FaceModelVersions:
      output.FaceModelVersions !== undefined && output.FaceModelVersions !== null
        ? deserializeAws_json1_1FaceModelVersionList(output.FaceModelVersions, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListFacesResponse = (output: any, context: __SerdeContext): ListFacesResponse => {
  return {
    __type: "ListFacesResponse",
    FaceModelVersion:
      output.FaceModelVersion !== undefined && output.FaceModelVersion !== null ? output.FaceModelVersion : undefined,
    Faces:
      output.Faces !== undefined && output.Faces !== null
        ? deserializeAws_json1_1FaceList(output.Faces, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListStreamProcessorsResponse = (
  output: any,
  context: __SerdeContext
): ListStreamProcessorsResponse => {
  return {
    __type: "ListStreamProcessorsResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    StreamProcessors:
      output.StreamProcessors !== undefined && output.StreamProcessors !== null
        ? deserializeAws_json1_1StreamProcessorList(output.StreamProcessors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ModerationLabel = (output: any, context: __SerdeContext): ModerationLabel => {
  return {
    __type: "ModerationLabel",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ParentName: output.ParentName !== undefined && output.ParentName !== null ? output.ParentName : undefined,
  } as any;
};

const deserializeAws_json1_1ModerationLabels = (output: any, context: __SerdeContext): ModerationLabel[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ModerationLabel(entry, context));
};

const deserializeAws_json1_1MouthOpen = (output: any, context: __SerdeContext): MouthOpen => {
  return {
    __type: "MouthOpen",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1Mustache = (output: any, context: __SerdeContext): Mustache => {
  return {
    __type: "Mustache",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1OutputConfig = (output: any, context: __SerdeContext): OutputConfig => {
  return {
    __type: "OutputConfig",
    S3Bucket: output.S3Bucket !== undefined && output.S3Bucket !== null ? output.S3Bucket : undefined,
    S3KeyPrefix: output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null ? output.S3KeyPrefix : undefined,
  } as any;
};

const deserializeAws_json1_1Parent = (output: any, context: __SerdeContext): Parent => {
  return {
    __type: "Parent",
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_json1_1Parents = (output: any, context: __SerdeContext): Parent[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Parent(entry, context));
};

const deserializeAws_json1_1PersonDetail = (output: any, context: __SerdeContext): PersonDetail => {
  return {
    __type: "PersonDetail",
    BoundingBox:
      output.BoundingBox !== undefined && output.BoundingBox !== null
        ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context)
        : undefined,
    Face:
      output.Face !== undefined && output.Face !== null
        ? deserializeAws_json1_1FaceDetail(output.Face, context)
        : undefined,
    Index: output.Index !== undefined && output.Index !== null ? output.Index : undefined,
  } as any;
};

const deserializeAws_json1_1PersonDetection = (output: any, context: __SerdeContext): PersonDetection => {
  return {
    __type: "PersonDetection",
    Person:
      output.Person !== undefined && output.Person !== null
        ? deserializeAws_json1_1PersonDetail(output.Person, context)
        : undefined,
    Timestamp: output.Timestamp !== undefined && output.Timestamp !== null ? output.Timestamp : undefined,
  } as any;
};

const deserializeAws_json1_1PersonDetections = (output: any, context: __SerdeContext): PersonDetection[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1PersonDetection(entry, context));
};

const deserializeAws_json1_1PersonMatch = (output: any, context: __SerdeContext): PersonMatch => {
  return {
    __type: "PersonMatch",
    FaceMatches:
      output.FaceMatches !== undefined && output.FaceMatches !== null
        ? deserializeAws_json1_1FaceMatchList(output.FaceMatches, context)
        : undefined,
    Person:
      output.Person !== undefined && output.Person !== null
        ? deserializeAws_json1_1PersonDetail(output.Person, context)
        : undefined,
    Timestamp: output.Timestamp !== undefined && output.Timestamp !== null ? output.Timestamp : undefined,
  } as any;
};

const deserializeAws_json1_1PersonMatches = (output: any, context: __SerdeContext): PersonMatch[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1PersonMatch(entry, context));
};

const deserializeAws_json1_1Point = (output: any, context: __SerdeContext): Point => {
  return {
    __type: "Point",
    X: output.X !== undefined && output.X !== null ? output.X : undefined,
    Y: output.Y !== undefined && output.Y !== null ? output.Y : undefined,
  } as any;
};

const deserializeAws_json1_1Polygon = (output: any, context: __SerdeContext): Point[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Point(entry, context));
};

const deserializeAws_json1_1Pose = (output: any, context: __SerdeContext): Pose => {
  return {
    __type: "Pose",
    Pitch: output.Pitch !== undefined && output.Pitch !== null ? output.Pitch : undefined,
    Roll: output.Roll !== undefined && output.Roll !== null ? output.Roll : undefined,
    Yaw: output.Yaw !== undefined && output.Yaw !== null ? output.Yaw : undefined,
  } as any;
};

const deserializeAws_json1_1ProjectDescription = (output: any, context: __SerdeContext): ProjectDescription => {
  return {
    __type: "ProjectDescription",
    CreationTimestamp:
      output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
        ? new Date(Math.round(output.CreationTimestamp * 1000))
        : undefined,
    ProjectArn: output.ProjectArn !== undefined && output.ProjectArn !== null ? output.ProjectArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1ProjectDescriptions = (output: any, context: __SerdeContext): ProjectDescription[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ProjectDescription(entry, context));
};

const deserializeAws_json1_1ProjectVersionDescription = (
  output: any,
  context: __SerdeContext
): ProjectVersionDescription => {
  return {
    __type: "ProjectVersionDescription",
    BillableTrainingTimeInSeconds:
      output.BillableTrainingTimeInSeconds !== undefined && output.BillableTrainingTimeInSeconds !== null
        ? output.BillableTrainingTimeInSeconds
        : undefined,
    CreationTimestamp:
      output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
        ? new Date(Math.round(output.CreationTimestamp * 1000))
        : undefined,
    EvaluationResult:
      output.EvaluationResult !== undefined && output.EvaluationResult !== null
        ? deserializeAws_json1_1EvaluationResult(output.EvaluationResult, context)
        : undefined,
    MinInferenceUnits:
      output.MinInferenceUnits !== undefined && output.MinInferenceUnits !== null
        ? output.MinInferenceUnits
        : undefined,
    OutputConfig:
      output.OutputConfig !== undefined && output.OutputConfig !== null
        ? deserializeAws_json1_1OutputConfig(output.OutputConfig, context)
        : undefined,
    ProjectVersionArn:
      output.ProjectVersionArn !== undefined && output.ProjectVersionArn !== null
        ? output.ProjectVersionArn
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    TestingDataResult:
      output.TestingDataResult !== undefined && output.TestingDataResult !== null
        ? deserializeAws_json1_1TestingDataResult(output.TestingDataResult, context)
        : undefined,
    TrainingDataResult:
      output.TrainingDataResult !== undefined && output.TrainingDataResult !== null
        ? deserializeAws_json1_1TrainingDataResult(output.TrainingDataResult, context)
        : undefined,
    TrainingEndTimestamp:
      output.TrainingEndTimestamp !== undefined && output.TrainingEndTimestamp !== null
        ? new Date(Math.round(output.TrainingEndTimestamp * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProjectVersionDescriptions = (
  output: any,
  context: __SerdeContext
): ProjectVersionDescription[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ProjectVersionDescription(entry, context));
};

const deserializeAws_json1_1ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    __type: "ProvisionedThroughputExceededException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1Reasons = (output: any, context: __SerdeContext): (Reason | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1RecognizeCelebritiesResponse = (
  output: any,
  context: __SerdeContext
): RecognizeCelebritiesResponse => {
  return {
    __type: "RecognizeCelebritiesResponse",
    CelebrityFaces:
      output.CelebrityFaces !== undefined && output.CelebrityFaces !== null
        ? deserializeAws_json1_1CelebrityList(output.CelebrityFaces, context)
        : undefined,
    OrientationCorrection:
      output.OrientationCorrection !== undefined && output.OrientationCorrection !== null
        ? output.OrientationCorrection
        : undefined,
    UnrecognizedFaces:
      output.UnrecognizedFaces !== undefined && output.UnrecognizedFaces !== null
        ? deserializeAws_json1_1ComparedFaceList(output.UnrecognizedFaces, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    __type: "ResourceAlreadyExistsException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    __type: "ResourceInUseException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotReadyException = (
  output: any,
  context: __SerdeContext
): ResourceNotReadyException => {
  return {
    __type: "ResourceNotReadyException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    __type: "S3Object",
    Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1SearchFacesByImageResponse = (
  output: any,
  context: __SerdeContext
): SearchFacesByImageResponse => {
  return {
    __type: "SearchFacesByImageResponse",
    FaceMatches:
      output.FaceMatches !== undefined && output.FaceMatches !== null
        ? deserializeAws_json1_1FaceMatchList(output.FaceMatches, context)
        : undefined,
    FaceModelVersion:
      output.FaceModelVersion !== undefined && output.FaceModelVersion !== null ? output.FaceModelVersion : undefined,
    SearchedFaceBoundingBox:
      output.SearchedFaceBoundingBox !== undefined && output.SearchedFaceBoundingBox !== null
        ? deserializeAws_json1_1BoundingBox(output.SearchedFaceBoundingBox, context)
        : undefined,
    SearchedFaceConfidence:
      output.SearchedFaceConfidence !== undefined && output.SearchedFaceConfidence !== null
        ? output.SearchedFaceConfidence
        : undefined,
  } as any;
};

const deserializeAws_json1_1SearchFacesResponse = (output: any, context: __SerdeContext): SearchFacesResponse => {
  return {
    __type: "SearchFacesResponse",
    FaceMatches:
      output.FaceMatches !== undefined && output.FaceMatches !== null
        ? deserializeAws_json1_1FaceMatchList(output.FaceMatches, context)
        : undefined,
    FaceModelVersion:
      output.FaceModelVersion !== undefined && output.FaceModelVersion !== null ? output.FaceModelVersion : undefined,
    SearchedFaceId:
      output.SearchedFaceId !== undefined && output.SearchedFaceId !== null ? output.SearchedFaceId : undefined,
  } as any;
};

const deserializeAws_json1_1Smile = (output: any, context: __SerdeContext): Smile => {
  return {
    __type: "Smile",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1StartCelebrityRecognitionResponse = (
  output: any,
  context: __SerdeContext
): StartCelebrityRecognitionResponse => {
  return {
    __type: "StartCelebrityRecognitionResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
  } as any;
};

const deserializeAws_json1_1StartContentModerationResponse = (
  output: any,
  context: __SerdeContext
): StartContentModerationResponse => {
  return {
    __type: "StartContentModerationResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
  } as any;
};

const deserializeAws_json1_1StartFaceDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartFaceDetectionResponse => {
  return {
    __type: "StartFaceDetectionResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
  } as any;
};

const deserializeAws_json1_1StartFaceSearchResponse = (
  output: any,
  context: __SerdeContext
): StartFaceSearchResponse => {
  return {
    __type: "StartFaceSearchResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
  } as any;
};

const deserializeAws_json1_1StartLabelDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartLabelDetectionResponse => {
  return {
    __type: "StartLabelDetectionResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
  } as any;
};

const deserializeAws_json1_1StartPersonTrackingResponse = (
  output: any,
  context: __SerdeContext
): StartPersonTrackingResponse => {
  return {
    __type: "StartPersonTrackingResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
  } as any;
};

const deserializeAws_json1_1StartProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): StartProjectVersionResponse => {
  return {
    __type: "StartProjectVersionResponse",
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1StartStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): StartStreamProcessorResponse => {
  return {
    __type: "StartStreamProcessorResponse",
  } as any;
};

const deserializeAws_json1_1StopProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): StopProjectVersionResponse => {
  return {
    __type: "StopProjectVersionResponse",
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1StopStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): StopStreamProcessorResponse => {
  return {
    __type: "StopStreamProcessorResponse",
  } as any;
};

const deserializeAws_json1_1StreamProcessor = (output: any, context: __SerdeContext): StreamProcessor => {
  return {
    __type: "StreamProcessor",
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1StreamProcessorInput = (output: any, context: __SerdeContext): StreamProcessorInput => {
  return {
    __type: "StreamProcessorInput",
    KinesisVideoStream:
      output.KinesisVideoStream !== undefined && output.KinesisVideoStream !== null
        ? deserializeAws_json1_1KinesisVideoStream(output.KinesisVideoStream, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StreamProcessorList = (output: any, context: __SerdeContext): StreamProcessor[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1StreamProcessor(entry, context));
};

const deserializeAws_json1_1StreamProcessorOutput = (output: any, context: __SerdeContext): StreamProcessorOutput => {
  return {
    __type: "StreamProcessorOutput",
    KinesisDataStream:
      output.KinesisDataStream !== undefined && output.KinesisDataStream !== null
        ? deserializeAws_json1_1KinesisDataStream(output.KinesisDataStream, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StreamProcessorSettings = (
  output: any,
  context: __SerdeContext
): StreamProcessorSettings => {
  return {
    __type: "StreamProcessorSettings",
    FaceSearch:
      output.FaceSearch !== undefined && output.FaceSearch !== null
        ? deserializeAws_json1_1FaceSearchSettings(output.FaceSearch, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Summary = (output: any, context: __SerdeContext): Summary => {
  return {
    __type: "Summary",
    S3Object:
      output.S3Object !== undefined && output.S3Object !== null
        ? deserializeAws_json1_1S3Object(output.S3Object, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Sunglasses = (output: any, context: __SerdeContext): Sunglasses => {
  return {
    __type: "Sunglasses",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TestingData = (output: any, context: __SerdeContext): TestingData => {
  return {
    __type: "TestingData",
    Assets:
      output.Assets !== undefined && output.Assets !== null
        ? deserializeAws_json1_1Assets(output.Assets, context)
        : undefined,
    AutoCreate: output.AutoCreate !== undefined && output.AutoCreate !== null ? output.AutoCreate : undefined,
  } as any;
};

const deserializeAws_json1_1TestingDataResult = (output: any, context: __SerdeContext): TestingDataResult => {
  return {
    __type: "TestingDataResult",
    Input:
      output.Input !== undefined && output.Input !== null
        ? deserializeAws_json1_1TestingData(output.Input, context)
        : undefined,
    Output:
      output.Output !== undefined && output.Output !== null
        ? deserializeAws_json1_1TestingData(output.Output, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TextDetection = (output: any, context: __SerdeContext): TextDetection => {
  return {
    __type: "TextDetection",
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    DetectedText: output.DetectedText !== undefined && output.DetectedText !== null ? output.DetectedText : undefined,
    Geometry:
      output.Geometry !== undefined && output.Geometry !== null
        ? deserializeAws_json1_1Geometry(output.Geometry, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ParentId: output.ParentId !== undefined && output.ParentId !== null ? output.ParentId : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1TextDetectionList = (output: any, context: __SerdeContext): TextDetection[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1TextDetection(entry, context));
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    __type: "ThrottlingException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1TrainingData = (output: any, context: __SerdeContext): TrainingData => {
  return {
    __type: "TrainingData",
    Assets:
      output.Assets !== undefined && output.Assets !== null
        ? deserializeAws_json1_1Assets(output.Assets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TrainingDataResult = (output: any, context: __SerdeContext): TrainingDataResult => {
  return {
    __type: "TrainingDataResult",
    Input:
      output.Input !== undefined && output.Input !== null
        ? deserializeAws_json1_1TrainingData(output.Input, context)
        : undefined,
    Output:
      output.Output !== undefined && output.Output !== null
        ? deserializeAws_json1_1TrainingData(output.Output, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UnindexedFace = (output: any, context: __SerdeContext): UnindexedFace => {
  return {
    __type: "UnindexedFace",
    FaceDetail:
      output.FaceDetail !== undefined && output.FaceDetail !== null
        ? deserializeAws_json1_1FaceDetail(output.FaceDetail, context)
        : undefined,
    Reasons:
      output.Reasons !== undefined && output.Reasons !== null
        ? deserializeAws_json1_1Reasons(output.Reasons, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UnindexedFaces = (output: any, context: __SerdeContext): UnindexedFace[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1UnindexedFace(entry, context));
};

const deserializeAws_json1_1Urls = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1VideoMetadata = (output: any, context: __SerdeContext): VideoMetadata => {
  return {
    __type: "VideoMetadata",
    Codec: output.Codec !== undefined && output.Codec !== null ? output.Codec : undefined,
    DurationMillis:
      output.DurationMillis !== undefined && output.DurationMillis !== null ? output.DurationMillis : undefined,
    Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
    FrameHeight: output.FrameHeight !== undefined && output.FrameHeight !== null ? output.FrameHeight : undefined,
    FrameRate: output.FrameRate !== undefined && output.FrameRate !== null ? output.FrameRate : undefined,
    FrameWidth: output.FrameWidth !== undefined && output.FrameWidth !== null ? output.FrameWidth : undefined,
  } as any;
};

const deserializeAws_json1_1VideoTooLargeException = (output: any, context: __SerdeContext): VideoTooLargeException => {
  return {
    __type: "VideoTooLargeException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Logref: output.Logref !== undefined && output.Logref !== null ? output.Logref : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
