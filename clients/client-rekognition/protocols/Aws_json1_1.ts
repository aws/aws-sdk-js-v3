import {
  CompareFacesCommandInput,
  CompareFacesCommandOutput
} from "../commands/CompareFacesCommand";
import {
  CreateCollectionCommandInput,
  CreateCollectionCommandOutput
} from "../commands/CreateCollectionCommand";
import {
  CreateProjectCommandInput,
  CreateProjectCommandOutput
} from "../commands/CreateProjectCommand";
import {
  CreateProjectVersionCommandInput,
  CreateProjectVersionCommandOutput
} from "../commands/CreateProjectVersionCommand";
import {
  CreateStreamProcessorCommandInput,
  CreateStreamProcessorCommandOutput
} from "../commands/CreateStreamProcessorCommand";
import {
  DeleteCollectionCommandInput,
  DeleteCollectionCommandOutput
} from "../commands/DeleteCollectionCommand";
import {
  DeleteFacesCommandInput,
  DeleteFacesCommandOutput
} from "../commands/DeleteFacesCommand";
import {
  DeleteStreamProcessorCommandInput,
  DeleteStreamProcessorCommandOutput
} from "../commands/DeleteStreamProcessorCommand";
import {
  DescribeCollectionCommandInput,
  DescribeCollectionCommandOutput
} from "../commands/DescribeCollectionCommand";
import {
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput
} from "../commands/DescribeProjectVersionsCommand";
import {
  DescribeProjectsCommandInput,
  DescribeProjectsCommandOutput
} from "../commands/DescribeProjectsCommand";
import {
  DescribeStreamProcessorCommandInput,
  DescribeStreamProcessorCommandOutput
} from "../commands/DescribeStreamProcessorCommand";
import {
  DetectCustomLabelsCommandInput,
  DetectCustomLabelsCommandOutput
} from "../commands/DetectCustomLabelsCommand";
import {
  DetectFacesCommandInput,
  DetectFacesCommandOutput
} from "../commands/DetectFacesCommand";
import {
  DetectLabelsCommandInput,
  DetectLabelsCommandOutput
} from "../commands/DetectLabelsCommand";
import {
  DetectModerationLabelsCommandInput,
  DetectModerationLabelsCommandOutput
} from "../commands/DetectModerationLabelsCommand";
import {
  DetectTextCommandInput,
  DetectTextCommandOutput
} from "../commands/DetectTextCommand";
import {
  GetCelebrityInfoCommandInput,
  GetCelebrityInfoCommandOutput
} from "../commands/GetCelebrityInfoCommand";
import {
  GetCelebrityRecognitionCommandInput,
  GetCelebrityRecognitionCommandOutput
} from "../commands/GetCelebrityRecognitionCommand";
import {
  GetContentModerationCommandInput,
  GetContentModerationCommandOutput
} from "../commands/GetContentModerationCommand";
import {
  GetFaceDetectionCommandInput,
  GetFaceDetectionCommandOutput
} from "../commands/GetFaceDetectionCommand";
import {
  GetFaceSearchCommandInput,
  GetFaceSearchCommandOutput
} from "../commands/GetFaceSearchCommand";
import {
  GetLabelDetectionCommandInput,
  GetLabelDetectionCommandOutput
} from "../commands/GetLabelDetectionCommand";
import {
  GetPersonTrackingCommandInput,
  GetPersonTrackingCommandOutput
} from "../commands/GetPersonTrackingCommand";
import {
  IndexFacesCommandInput,
  IndexFacesCommandOutput
} from "../commands/IndexFacesCommand";
import {
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput
} from "../commands/ListCollectionsCommand";
import {
  ListFacesCommandInput,
  ListFacesCommandOutput
} from "../commands/ListFacesCommand";
import {
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput
} from "../commands/ListStreamProcessorsCommand";
import {
  RecognizeCelebritiesCommandInput,
  RecognizeCelebritiesCommandOutput
} from "../commands/RecognizeCelebritiesCommand";
import {
  SearchFacesByImageCommandInput,
  SearchFacesByImageCommandOutput
} from "../commands/SearchFacesByImageCommand";
import {
  SearchFacesCommandInput,
  SearchFacesCommandOutput
} from "../commands/SearchFacesCommand";
import {
  StartCelebrityRecognitionCommandInput,
  StartCelebrityRecognitionCommandOutput
} from "../commands/StartCelebrityRecognitionCommand";
import {
  StartContentModerationCommandInput,
  StartContentModerationCommandOutput
} from "../commands/StartContentModerationCommand";
import {
  StartFaceDetectionCommandInput,
  StartFaceDetectionCommandOutput
} from "../commands/StartFaceDetectionCommand";
import {
  StartFaceSearchCommandInput,
  StartFaceSearchCommandOutput
} from "../commands/StartFaceSearchCommand";
import {
  StartLabelDetectionCommandInput,
  StartLabelDetectionCommandOutput
} from "../commands/StartLabelDetectionCommand";
import {
  StartPersonTrackingCommandInput,
  StartPersonTrackingCommandOutput
} from "../commands/StartPersonTrackingCommand";
import {
  StartProjectVersionCommandInput,
  StartProjectVersionCommandOutput
} from "../commands/StartProjectVersionCommand";
import {
  StartStreamProcessorCommandInput,
  StartStreamProcessorCommandOutput
} from "../commands/StartStreamProcessorCommand";
import {
  StopProjectVersionCommandInput,
  StopProjectVersionCommandOutput
} from "../commands/StopProjectVersionCommand";
import {
  StopStreamProcessorCommandInput,
  StopStreamProcessorCommandOutput
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
  VideoTooLargeException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CompareFacesCommand(
  input: CompareFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.CompareFaces";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CompareFacesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateCollectionCommand(
  input: CreateCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.CreateCollection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCollectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateProjectCommand(
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.CreateProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateProjectVersionCommand(
  input: CreateProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.CreateProjectVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateProjectVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateStreamProcessorCommand(
  input: CreateStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.CreateStreamProcessor";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateStreamProcessorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteCollectionCommand(
  input: DeleteCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DeleteCollection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteCollectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteFacesCommand(
  input: DeleteFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DeleteFaces";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteStreamProcessorCommand(
  input: DeleteStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DeleteStreamProcessor";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteStreamProcessorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeCollectionCommand(
  input: DescribeCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DescribeCollection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCollectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeProjectVersionsCommand(
  input: DescribeProjectVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DescribeProjectVersions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeProjectVersionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeProjectsCommand(
  input: DescribeProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DescribeProjects";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeProjectsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeStreamProcessorCommand(
  input: DescribeStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DescribeStreamProcessor";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeStreamProcessorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DetectCustomLabelsCommand(
  input: DetectCustomLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DetectCustomLabels";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DetectCustomLabelsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DetectFacesCommand(
  input: DetectFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DetectFaces";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DetectLabelsCommand(
  input: DetectLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DetectLabels";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DetectLabelsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DetectModerationLabelsCommand(
  input: DetectModerationLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DetectModerationLabels";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DetectModerationLabelsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DetectTextCommand(
  input: DetectTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.DetectText";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetCelebrityInfoCommand(
  input: GetCelebrityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.GetCelebrityInfo";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCelebrityInfoRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetCelebrityRecognitionCommand(
  input: GetCelebrityRecognitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.GetCelebrityRecognition";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCelebrityRecognitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetContentModerationCommand(
  input: GetContentModerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.GetContentModeration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetContentModerationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetFaceDetectionCommand(
  input: GetFaceDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.GetFaceDetection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetFaceDetectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetFaceSearchCommand(
  input: GetFaceSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.GetFaceSearch";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetFaceSearchRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetLabelDetectionCommand(
  input: GetLabelDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.GetLabelDetection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLabelDetectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetPersonTrackingCommand(
  input: GetPersonTrackingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.GetPersonTracking";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetPersonTrackingRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1IndexFacesCommand(
  input: IndexFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.IndexFaces";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1IndexFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListCollectionsCommand(
  input: ListCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.ListCollections";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCollectionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListFacesCommand(
  input: ListFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.ListFaces";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListStreamProcessorsCommand(
  input: ListStreamProcessorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.ListStreamProcessors";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListStreamProcessorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RecognizeCelebritiesCommand(
  input: RecognizeCelebritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.RecognizeCelebrities";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RecognizeCelebritiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SearchFacesCommand(
  input: SearchFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.SearchFaces";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SearchFacesByImageCommand(
  input: SearchFacesByImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.SearchFacesByImage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SearchFacesByImageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartCelebrityRecognitionCommand(
  input: StartCelebrityRecognitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.StartCelebrityRecognition";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartCelebrityRecognitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartContentModerationCommand(
  input: StartContentModerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.StartContentModeration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartContentModerationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartFaceDetectionCommand(
  input: StartFaceDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.StartFaceDetection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartFaceDetectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartFaceSearchCommand(
  input: StartFaceSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.StartFaceSearch";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartFaceSearchRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartLabelDetectionCommand(
  input: StartLabelDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.StartLabelDetection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartLabelDetectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartPersonTrackingCommand(
  input: StartPersonTrackingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.StartPersonTracking";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartPersonTrackingRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartProjectVersionCommand(
  input: StartProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.StartProjectVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartProjectVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartStreamProcessorCommand(
  input: StartStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.StartStreamProcessor";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartStreamProcessorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopProjectVersionCommand(
  input: StopProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.StopProjectVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopProjectVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopStreamProcessorCommand(
  input: StopStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "RekognitionService.StopStreamProcessor";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopStreamProcessorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CompareFacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompareFacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CompareFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CompareFacesResponse(data, context);
  const response: CompareFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CompareFacesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CompareFacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompareFacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognitionservice#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateCollectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCollectionResponse(data, context);
  const response: CreateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCollectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCollectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.rekognitionservice#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectResponse(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProjectResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognitionservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateProjectVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateProjectVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectVersionResponse(data, context);
  const response: CreateProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProjectVersionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateProjectVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognitionservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateStreamProcessorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamProcessorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateStreamProcessorCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStreamProcessorResponse(data, context);
  const response: CreateStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStreamProcessorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateStreamProcessorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamProcessorCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognitionservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteCollectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCollectionResponse(data, context);
  const response: DeleteCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCollectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteCollectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteFacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFacesResponse(data, context);
  const response: DeleteFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFacesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteFacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteStreamProcessorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamProcessorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteStreamProcessorCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteStreamProcessorResponse(data, context);
  const response: DeleteStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteStreamProcessorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteStreamProcessorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamProcessorCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognitionservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeCollectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCollectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCollectionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCollectionResponse(data, context);
  const response: DescribeCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCollectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCollectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCollectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeProjectVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectVersionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeProjectVersionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProjectVersionsResponse(
    data,
    context
  );
  const response: DescribeProjectVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProjectVersionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeProjectVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectVersionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeProjectsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProjectsResponse(data, context);
  const response: DescribeProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProjectsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeProjectsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeStreamProcessorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamProcessorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeStreamProcessorCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStreamProcessorResponse(
    data,
    context
  );
  const response: DescribeStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStreamProcessorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeStreamProcessorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamProcessorCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DetectCustomLabelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectCustomLabelsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectCustomLabelsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectCustomLabelsResponse(data, context);
  const response: DetectCustomLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectCustomLabelsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DetectCustomLabelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectCustomLabelsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognitionservice#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.rekognitionservice#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotReadyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DetectFacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectFacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectFacesResponse(data, context);
  const response: DetectFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectFacesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DetectFacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectFacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognitionservice#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DetectLabelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectLabelsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectLabelsResponse(data, context);
  const response: DetectLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectLabelsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DetectLabelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectLabelsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognitionservice#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DetectModerationLabelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectModerationLabelsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectModerationLabelsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectModerationLabelsResponse(
    data,
    context
  );
  const response: DetectModerationLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectModerationLabelsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DetectModerationLabelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectModerationLabelsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HumanLoopQuotaExceededException":
    case "com.amazonaws.rekognitionservice#HumanLoopQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognitionservice#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DetectTextCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectTextCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectTextResponse(data, context);
  const response: DetectTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectTextResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DetectTextCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectTextCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognitionservice#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetCelebrityInfoCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityInfoCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCelebrityInfoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCelebrityInfoResponse(data, context);
  const response: GetCelebrityInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCelebrityInfoResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCelebrityInfoCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityInfoCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetCelebrityRecognitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityRecognitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCelebrityRecognitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCelebrityRecognitionResponse(
    data,
    context
  );
  const response: GetCelebrityRecognitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCelebrityRecognitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCelebrityRecognitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityRecognitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetContentModerationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentModerationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetContentModerationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContentModerationResponse(data, context);
  const response: GetContentModerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetContentModerationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetContentModerationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentModerationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetFaceDetectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceDetectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetFaceDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFaceDetectionResponse(data, context);
  const response: GetFaceDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFaceDetectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetFaceDetectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceDetectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetFaceSearchCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceSearchCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetFaceSearchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFaceSearchResponse(data, context);
  const response: GetFaceSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFaceSearchResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetFaceSearchCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceSearchCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetLabelDetectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelDetectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLabelDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLabelDetectionResponse(data, context);
  const response: GetLabelDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLabelDetectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetLabelDetectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelDetectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetPersonTrackingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonTrackingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPersonTrackingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPersonTrackingResponse(data, context);
  const response: GetPersonTrackingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPersonTrackingResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetPersonTrackingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonTrackingCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1IndexFacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexFacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1IndexFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IndexFacesResponse(data, context);
  const response: IndexFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IndexFacesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1IndexFacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexFacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognitionservice#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListCollectionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCollectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCollectionsResponse(data, context);
  const response: ListCollectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCollectionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListCollectionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListFacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFacesResponse(data, context);
  const response: ListFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFacesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListFacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListStreamProcessorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamProcessorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListStreamProcessorsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStreamProcessorsResponse(data, context);
  const response: ListStreamProcessorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStreamProcessorsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListStreamProcessorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamProcessorsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1RecognizeCelebritiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeCelebritiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RecognizeCelebritiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RecognizeCelebritiesResponse(data, context);
  const response: RecognizeCelebritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RecognizeCelebritiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RecognizeCelebritiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeCelebritiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognitionservice#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SearchFacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SearchFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchFacesResponse(data, context);
  const response: SearchFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchFacesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SearchFacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SearchFacesByImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesByImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SearchFacesByImageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchFacesByImageResponse(data, context);
  const response: SearchFacesByImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchFacesByImageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SearchFacesByImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesByImageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ImageTooLargeException":
    case "com.amazonaws.rekognitionservice#ImageTooLargeException":
      response = {
        ...(await deserializeAws_json1_1ImageTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
      response = {
        ...(await deserializeAws_json1_1InvalidImageFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartCelebrityRecognitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCelebrityRecognitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartCelebrityRecognitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartCelebrityRecognitionResponse(
    data,
    context
  );
  const response: StartCelebrityRecognitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartCelebrityRecognitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartCelebrityRecognitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCelebrityRecognitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognitionservice#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartContentModerationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentModerationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartContentModerationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartContentModerationResponse(
    data,
    context
  );
  const response: StartContentModerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartContentModerationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartContentModerationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentModerationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognitionservice#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartFaceDetectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceDetectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartFaceDetectionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartFaceDetectionResponse(data, context);
  const response: StartFaceDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartFaceDetectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartFaceDetectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceDetectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognitionservice#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartFaceSearchCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceSearchCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartFaceSearchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartFaceSearchResponse(data, context);
  const response: StartFaceSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartFaceSearchResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartFaceSearchCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceSearchCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognitionservice#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartLabelDetectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLabelDetectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartLabelDetectionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartLabelDetectionResponse(data, context);
  const response: StartLabelDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartLabelDetectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartLabelDetectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLabelDetectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognitionservice#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartPersonTrackingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPersonTrackingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartPersonTrackingCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartPersonTrackingResponse(data, context);
  const response: StartPersonTrackingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartPersonTrackingResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartPersonTrackingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPersonTrackingCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VideoTooLargeException":
    case "com.amazonaws.rekognitionservice#VideoTooLargeException":
      response = {
        ...(await deserializeAws_json1_1VideoTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartProjectVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProjectVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartProjectVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartProjectVersionResponse(data, context);
  const response: StartProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartProjectVersionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartProjectVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProjectVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.rekognitionservice#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognitionservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartStreamProcessorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamProcessorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartStreamProcessorCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartStreamProcessorResponse(data, context);
  const response: StartStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartStreamProcessorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartStreamProcessorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamProcessorCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognitionservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StopProjectVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProjectVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopProjectVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopProjectVersionResponse(data, context);
  const response: StopProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopProjectVersionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopProjectVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProjectVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognitionservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StopStreamProcessorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamProcessorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopStreamProcessorCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopStreamProcessorResponse(data, context);
  const response: StopStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopStreamProcessorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopStreamProcessorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamProcessorCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.rekognitionservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.rekognitionservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.rekognitionservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.rekognitionservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HumanLoopQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HumanLoopQuotaExceededException(
    body,
    context
  );
  const contents: HumanLoopQuotaExceededException = {
    name: "HumanLoopQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(
    body,
    context
  );
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ImageTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageTooLargeException(
    body,
    context
  );
  const contents: ImageTooLargeException = {
    name: "ImageTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(
    body,
    context
  );
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidImageFormatExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImageFormatException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidImageFormatException(
    body,
    context
  );
  const contents: InvalidImageFormatException = {
    name: "InvalidImageFormatException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPaginationTokenException(
    body,
    context
  );
  const contents: InvalidPaginationTokenException = {
    name: "InvalidPaginationTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidS3ObjectExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3ObjectException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3ObjectException(
    body,
    context
  );
  const contents: InvalidS3ObjectException = {
    name: "InvalidS3ObjectException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProvisionedThroughputExceededException(
    body,
    context
  );
  const contents: ProvisionedThroughputExceededException = {
    name: "ProvisionedThroughputExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotReadyException(
    body,
    context
  );
  const contents: ResourceNotReadyException = {
    name: "ResourceNotReadyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    body,
    context
  );
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1VideoTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VideoTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1VideoTooLargeException(
    body,
    context
  );
  const contents: VideoTooLargeException = {
    name: "VideoTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1Asset = (
  input: Asset,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroundTruthManifest !== undefined) {
    bodyParams["GroundTruthManifest"] = serializeAws_json1_1GroundTruthManifest(
      input.GroundTruthManifest,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Assets = (
  input: Array<Asset>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Asset(entry, context));
  }
  return contents;
};

const serializeAws_json1_1Attributes = (
  input: Array<Attribute | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1CompareFacesRequest = (
  input: CompareFacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QualityFilter !== undefined) {
    bodyParams["QualityFilter"] = input.QualityFilter;
  }
  if (input.SimilarityThreshold !== undefined) {
    bodyParams["SimilarityThreshold"] = input.SimilarityThreshold;
  }
  if (input.SourceImage !== undefined) {
    bodyParams["SourceImage"] = serializeAws_json1_1Image(
      input.SourceImage,
      context
    );
  }
  if (input.TargetImage !== undefined) {
    bodyParams["TargetImage"] = serializeAws_json1_1Image(
      input.TargetImage,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ContentClassifiers = (
  input: Array<ContentClassifier | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1CreateCollectionRequest = (
  input: CreateCollectionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CollectionId !== undefined) {
    bodyParams["CollectionId"] = input.CollectionId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateProjectRequest = (
  input: CreateProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProjectName !== undefined) {
    bodyParams["ProjectName"] = input.ProjectName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateProjectVersionRequest = (
  input: CreateProjectVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OutputConfig !== undefined) {
    bodyParams["OutputConfig"] = serializeAws_json1_1OutputConfig(
      input.OutputConfig,
      context
    );
  }
  if (input.ProjectArn !== undefined) {
    bodyParams["ProjectArn"] = input.ProjectArn;
  }
  if (input.TestingData !== undefined) {
    bodyParams["TestingData"] = serializeAws_json1_1TestingData(
      input.TestingData,
      context
    );
  }
  if (input.TrainingData !== undefined) {
    bodyParams["TrainingData"] = serializeAws_json1_1TrainingData(
      input.TrainingData,
      context
    );
  }
  if (input.VersionName !== undefined) {
    bodyParams["VersionName"] = input.VersionName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateStreamProcessorRequest = (
  input: CreateStreamProcessorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Input !== undefined) {
    bodyParams["Input"] = serializeAws_json1_1StreamProcessorInput(
      input.Input,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Output !== undefined) {
    bodyParams["Output"] = serializeAws_json1_1StreamProcessorOutput(
      input.Output,
      context
    );
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.Settings !== undefined) {
    bodyParams["Settings"] = serializeAws_json1_1StreamProcessorSettings(
      input.Settings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteCollectionRequest = (
  input: DeleteCollectionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CollectionId !== undefined) {
    bodyParams["CollectionId"] = input.CollectionId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteFacesRequest = (
  input: DeleteFacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CollectionId !== undefined) {
    bodyParams["CollectionId"] = input.CollectionId;
  }
  if (input.FaceIds !== undefined) {
    bodyParams["FaceIds"] = serializeAws_json1_1FaceIdList(
      input.FaceIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteStreamProcessorRequest = (
  input: DeleteStreamProcessorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCollectionRequest = (
  input: DescribeCollectionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CollectionId !== undefined) {
    bodyParams["CollectionId"] = input.CollectionId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeProjectVersionsRequest = (
  input: DescribeProjectVersionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ProjectArn !== undefined) {
    bodyParams["ProjectArn"] = input.ProjectArn;
  }
  if (input.VersionNames !== undefined) {
    bodyParams["VersionNames"] = serializeAws_json1_1VersionNames(
      input.VersionNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeProjectsRequest = (
  input: DescribeProjectsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeStreamProcessorRequest = (
  input: DescribeStreamProcessorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DetectCustomLabelsRequest = (
  input: DetectCustomLabelsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Image !== undefined) {
    bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.MinConfidence !== undefined) {
    bodyParams["MinConfidence"] = input.MinConfidence;
  }
  if (input.ProjectVersionArn !== undefined) {
    bodyParams["ProjectVersionArn"] = input.ProjectVersionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DetectFacesRequest = (
  input: DetectFacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams["Attributes"] = serializeAws_json1_1Attributes(
      input.Attributes,
      context
    );
  }
  if (input.Image !== undefined) {
    bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DetectLabelsRequest = (
  input: DetectLabelsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Image !== undefined) {
    bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
  }
  if (input.MaxLabels !== undefined) {
    bodyParams["MaxLabels"] = input.MaxLabels;
  }
  if (input.MinConfidence !== undefined) {
    bodyParams["MinConfidence"] = input.MinConfidence;
  }
  return bodyParams;
};

const serializeAws_json1_1DetectModerationLabelsRequest = (
  input: DetectModerationLabelsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HumanLoopConfig !== undefined) {
    bodyParams["HumanLoopConfig"] = serializeAws_json1_1HumanLoopConfig(
      input.HumanLoopConfig,
      context
    );
  }
  if (input.Image !== undefined) {
    bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
  }
  if (input.MinConfidence !== undefined) {
    bodyParams["MinConfidence"] = input.MinConfidence;
  }
  return bodyParams;
};

const serializeAws_json1_1DetectTextRequest = (
  input: DetectTextRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Image !== undefined) {
    bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
  }
  return bodyParams;
};

const serializeAws_json1_1FaceIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1FaceSearchSettings = (
  input: FaceSearchSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CollectionId !== undefined) {
    bodyParams["CollectionId"] = input.CollectionId;
  }
  if (input.FaceMatchThreshold !== undefined) {
    bodyParams["FaceMatchThreshold"] = input.FaceMatchThreshold;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCelebrityInfoRequest = (
  input: GetCelebrityInfoRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCelebrityRecognitionRequest = (
  input: GetCelebrityRecognitionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SortBy !== undefined) {
    bodyParams["SortBy"] = input.SortBy;
  }
  return bodyParams;
};

const serializeAws_json1_1GetContentModerationRequest = (
  input: GetContentModerationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SortBy !== undefined) {
    bodyParams["SortBy"] = input.SortBy;
  }
  return bodyParams;
};

const serializeAws_json1_1GetFaceDetectionRequest = (
  input: GetFaceDetectionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetFaceSearchRequest = (
  input: GetFaceSearchRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SortBy !== undefined) {
    bodyParams["SortBy"] = input.SortBy;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLabelDetectionRequest = (
  input: GetLabelDetectionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SortBy !== undefined) {
    bodyParams["SortBy"] = input.SortBy;
  }
  return bodyParams;
};

const serializeAws_json1_1GetPersonTrackingRequest = (
  input: GetPersonTrackingRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SortBy !== undefined) {
    bodyParams["SortBy"] = input.SortBy;
  }
  return bodyParams;
};

const serializeAws_json1_1GroundTruthManifest = (
  input: GroundTruthManifest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Object !== undefined) {
    bodyParams["S3Object"] = serializeAws_json1_1S3Object(
      input.S3Object,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1HumanLoopConfig = (
  input: HumanLoopConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DataAttributes !== undefined) {
    bodyParams["DataAttributes"] = serializeAws_json1_1HumanLoopDataAttributes(
      input.DataAttributes,
      context
    );
  }
  if (input.FlowDefinitionArn !== undefined) {
    bodyParams["FlowDefinitionArn"] = input.FlowDefinitionArn;
  }
  if (input.HumanLoopName !== undefined) {
    bodyParams["HumanLoopName"] = input.HumanLoopName;
  }
  return bodyParams;
};

const serializeAws_json1_1HumanLoopDataAttributes = (
  input: HumanLoopDataAttributes,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ContentClassifiers !== undefined) {
    bodyParams["ContentClassifiers"] = serializeAws_json1_1ContentClassifiers(
      input.ContentClassifiers,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Image = (
  input: Image,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bytes !== undefined) {
    bodyParams["Bytes"] = context.base64Encoder(input.Bytes);
  }
  if (input.S3Object !== undefined) {
    bodyParams["S3Object"] = serializeAws_json1_1S3Object(
      input.S3Object,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1IndexFacesRequest = (
  input: IndexFacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CollectionId !== undefined) {
    bodyParams["CollectionId"] = input.CollectionId;
  }
  if (input.DetectionAttributes !== undefined) {
    bodyParams["DetectionAttributes"] = serializeAws_json1_1Attributes(
      input.DetectionAttributes,
      context
    );
  }
  if (input.ExternalImageId !== undefined) {
    bodyParams["ExternalImageId"] = input.ExternalImageId;
  }
  if (input.Image !== undefined) {
    bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
  }
  if (input.MaxFaces !== undefined) {
    bodyParams["MaxFaces"] = input.MaxFaces;
  }
  if (input.QualityFilter !== undefined) {
    bodyParams["QualityFilter"] = input.QualityFilter;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisDataStream = (
  input: KinesisDataStream,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisVideoStream = (
  input: KinesisVideoStream,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListCollectionsRequest = (
  input: ListCollectionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListFacesRequest = (
  input: ListFacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CollectionId !== undefined) {
    bodyParams["CollectionId"] = input.CollectionId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListStreamProcessorsRequest = (
  input: ListStreamProcessorsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1NotificationChannel = (
  input: NotificationChannel,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.SNSTopicArn !== undefined) {
    bodyParams["SNSTopicArn"] = input.SNSTopicArn;
  }
  return bodyParams;
};

const serializeAws_json1_1OutputConfig = (
  input: OutputConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Bucket !== undefined) {
    bodyParams["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3KeyPrefix !== undefined) {
    bodyParams["S3KeyPrefix"] = input.S3KeyPrefix;
  }
  return bodyParams;
};

const serializeAws_json1_1RecognizeCelebritiesRequest = (
  input: RecognizeCelebritiesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Image !== undefined) {
    bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
  }
  return bodyParams;
};

const serializeAws_json1_1S3Object = (
  input: S3Object,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bucket !== undefined) {
    bodyParams["Bucket"] = input.Bucket;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Version !== undefined) {
    bodyParams["Version"] = input.Version;
  }
  return bodyParams;
};

const serializeAws_json1_1SearchFacesByImageRequest = (
  input: SearchFacesByImageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CollectionId !== undefined) {
    bodyParams["CollectionId"] = input.CollectionId;
  }
  if (input.FaceMatchThreshold !== undefined) {
    bodyParams["FaceMatchThreshold"] = input.FaceMatchThreshold;
  }
  if (input.Image !== undefined) {
    bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
  }
  if (input.MaxFaces !== undefined) {
    bodyParams["MaxFaces"] = input.MaxFaces;
  }
  if (input.QualityFilter !== undefined) {
    bodyParams["QualityFilter"] = input.QualityFilter;
  }
  return bodyParams;
};

const serializeAws_json1_1SearchFacesRequest = (
  input: SearchFacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CollectionId !== undefined) {
    bodyParams["CollectionId"] = input.CollectionId;
  }
  if (input.FaceId !== undefined) {
    bodyParams["FaceId"] = input.FaceId;
  }
  if (input.FaceMatchThreshold !== undefined) {
    bodyParams["FaceMatchThreshold"] = input.FaceMatchThreshold;
  }
  if (input.MaxFaces !== undefined) {
    bodyParams["MaxFaces"] = input.MaxFaces;
  }
  return bodyParams;
};

const serializeAws_json1_1StartCelebrityRecognitionRequest = (
  input: StartCelebrityRecognitionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.JobTag !== undefined) {
    bodyParams["JobTag"] = input.JobTag;
  }
  if (input.NotificationChannel !== undefined) {
    bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(
      input.NotificationChannel,
      context
    );
  }
  if (input.Video !== undefined) {
    bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
  }
  return bodyParams;
};

const serializeAws_json1_1StartContentModerationRequest = (
  input: StartContentModerationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.JobTag !== undefined) {
    bodyParams["JobTag"] = input.JobTag;
  }
  if (input.MinConfidence !== undefined) {
    bodyParams["MinConfidence"] = input.MinConfidence;
  }
  if (input.NotificationChannel !== undefined) {
    bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(
      input.NotificationChannel,
      context
    );
  }
  if (input.Video !== undefined) {
    bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
  }
  return bodyParams;
};

const serializeAws_json1_1StartFaceDetectionRequest = (
  input: StartFaceDetectionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.FaceAttributes !== undefined) {
    bodyParams["FaceAttributes"] = input.FaceAttributes;
  }
  if (input.JobTag !== undefined) {
    bodyParams["JobTag"] = input.JobTag;
  }
  if (input.NotificationChannel !== undefined) {
    bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(
      input.NotificationChannel,
      context
    );
  }
  if (input.Video !== undefined) {
    bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
  }
  return bodyParams;
};

const serializeAws_json1_1StartFaceSearchRequest = (
  input: StartFaceSearchRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.CollectionId !== undefined) {
    bodyParams["CollectionId"] = input.CollectionId;
  }
  if (input.FaceMatchThreshold !== undefined) {
    bodyParams["FaceMatchThreshold"] = input.FaceMatchThreshold;
  }
  if (input.JobTag !== undefined) {
    bodyParams["JobTag"] = input.JobTag;
  }
  if (input.NotificationChannel !== undefined) {
    bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(
      input.NotificationChannel,
      context
    );
  }
  if (input.Video !== undefined) {
    bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
  }
  return bodyParams;
};

const serializeAws_json1_1StartLabelDetectionRequest = (
  input: StartLabelDetectionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.JobTag !== undefined) {
    bodyParams["JobTag"] = input.JobTag;
  }
  if (input.MinConfidence !== undefined) {
    bodyParams["MinConfidence"] = input.MinConfidence;
  }
  if (input.NotificationChannel !== undefined) {
    bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(
      input.NotificationChannel,
      context
    );
  }
  if (input.Video !== undefined) {
    bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
  }
  return bodyParams;
};

const serializeAws_json1_1StartPersonTrackingRequest = (
  input: StartPersonTrackingRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.JobTag !== undefined) {
    bodyParams["JobTag"] = input.JobTag;
  }
  if (input.NotificationChannel !== undefined) {
    bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(
      input.NotificationChannel,
      context
    );
  }
  if (input.Video !== undefined) {
    bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
  }
  return bodyParams;
};

const serializeAws_json1_1StartProjectVersionRequest = (
  input: StartProjectVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MinInferenceUnits !== undefined) {
    bodyParams["MinInferenceUnits"] = input.MinInferenceUnits;
  }
  if (input.ProjectVersionArn !== undefined) {
    bodyParams["ProjectVersionArn"] = input.ProjectVersionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1StartStreamProcessorRequest = (
  input: StartStreamProcessorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1StopProjectVersionRequest = (
  input: StopProjectVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProjectVersionArn !== undefined) {
    bodyParams["ProjectVersionArn"] = input.ProjectVersionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1StopStreamProcessorRequest = (
  input: StopStreamProcessorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1StreamProcessorInput = (
  input: StreamProcessorInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KinesisVideoStream !== undefined) {
    bodyParams["KinesisVideoStream"] = serializeAws_json1_1KinesisVideoStream(
      input.KinesisVideoStream,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1StreamProcessorOutput = (
  input: StreamProcessorOutput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KinesisDataStream !== undefined) {
    bodyParams["KinesisDataStream"] = serializeAws_json1_1KinesisDataStream(
      input.KinesisDataStream,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1StreamProcessorSettings = (
  input: StreamProcessorSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FaceSearch !== undefined) {
    bodyParams["FaceSearch"] = serializeAws_json1_1FaceSearchSettings(
      input.FaceSearch,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TestingData = (
  input: TestingData,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Assets !== undefined) {
    bodyParams["Assets"] = serializeAws_json1_1Assets(input.Assets, context);
  }
  if (input.AutoCreate !== undefined) {
    bodyParams["AutoCreate"] = input.AutoCreate;
  }
  return bodyParams;
};

const serializeAws_json1_1TrainingData = (
  input: TrainingData,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Assets !== undefined) {
    bodyParams["Assets"] = serializeAws_json1_1Assets(input.Assets, context);
  }
  return bodyParams;
};

const serializeAws_json1_1VersionNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Video = (
  input: Video,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Object !== undefined) {
    bodyParams["S3Object"] = serializeAws_json1_1S3Object(
      input.S3Object,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AgeRange = (
  output: any,
  context: __SerdeContext
): AgeRange => {
  let contents: any = {
    __type: "AgeRange",
    High: undefined,
    Low: undefined
  };
  if (output.High !== undefined && output.High !== null) {
    contents.High = output.High;
  }
  if (output.Low !== undefined && output.Low !== null) {
    contents.Low = output.Low;
  }
  return contents;
};

const deserializeAws_json1_1Asset = (
  output: any,
  context: __SerdeContext
): Asset => {
  let contents: any = {
    __type: "Asset",
    GroundTruthManifest: undefined
  };
  if (
    output.GroundTruthManifest !== undefined &&
    output.GroundTruthManifest !== null
  ) {
    contents.GroundTruthManifest = deserializeAws_json1_1GroundTruthManifest(
      output.GroundTruthManifest,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Assets = (
  output: any,
  context: __SerdeContext
): Array<Asset> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Asset(entry, context)
  );
};

const deserializeAws_json1_1Beard = (
  output: any,
  context: __SerdeContext
): Beard => {
  let contents: any = {
    __type: "Beard",
    Confidence: undefined,
    Value: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1BoundingBox = (
  output: any,
  context: __SerdeContext
): BoundingBox => {
  let contents: any = {
    __type: "BoundingBox",
    Height: undefined,
    Left: undefined,
    Top: undefined,
    Width: undefined
  };
  if (output.Height !== undefined && output.Height !== null) {
    contents.Height = output.Height;
  }
  if (output.Left !== undefined && output.Left !== null) {
    contents.Left = output.Left;
  }
  if (output.Top !== undefined && output.Top !== null) {
    contents.Top = output.Top;
  }
  if (output.Width !== undefined && output.Width !== null) {
    contents.Width = output.Width;
  }
  return contents;
};

const deserializeAws_json1_1Celebrity = (
  output: any,
  context: __SerdeContext
): Celebrity => {
  let contents: any = {
    __type: "Celebrity",
    Face: undefined,
    Id: undefined,
    MatchConfidence: undefined,
    Name: undefined,
    Urls: undefined
  };
  if (output.Face !== undefined && output.Face !== null) {
    contents.Face = deserializeAws_json1_1ComparedFace(output.Face, context);
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.MatchConfidence !== undefined && output.MatchConfidence !== null) {
    contents.MatchConfidence = output.MatchConfidence;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Urls !== undefined && output.Urls !== null) {
    contents.Urls = deserializeAws_json1_1Urls(output.Urls, context);
  }
  return contents;
};

const deserializeAws_json1_1CelebrityDetail = (
  output: any,
  context: __SerdeContext
): CelebrityDetail => {
  let contents: any = {
    __type: "CelebrityDetail",
    BoundingBox: undefined,
    Confidence: undefined,
    Face: undefined,
    Id: undefined,
    Name: undefined,
    Urls: undefined
  };
  if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
    contents.BoundingBox = deserializeAws_json1_1BoundingBox(
      output.BoundingBox,
      context
    );
  }
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Face !== undefined && output.Face !== null) {
    contents.Face = deserializeAws_json1_1FaceDetail(output.Face, context);
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Urls !== undefined && output.Urls !== null) {
    contents.Urls = deserializeAws_json1_1Urls(output.Urls, context);
  }
  return contents;
};

const deserializeAws_json1_1CelebrityList = (
  output: any,
  context: __SerdeContext
): Array<Celebrity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Celebrity(entry, context)
  );
};

const deserializeAws_json1_1CelebrityRecognition = (
  output: any,
  context: __SerdeContext
): CelebrityRecognition => {
  let contents: any = {
    __type: "CelebrityRecognition",
    Celebrity: undefined,
    Timestamp: undefined
  };
  if (output.Celebrity !== undefined && output.Celebrity !== null) {
    contents.Celebrity = deserializeAws_json1_1CelebrityDetail(
      output.Celebrity,
      context
    );
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = output.Timestamp;
  }
  return contents;
};

const deserializeAws_json1_1CelebrityRecognitions = (
  output: any,
  context: __SerdeContext
): Array<CelebrityRecognition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CelebrityRecognition(entry, context)
  );
};

const deserializeAws_json1_1CollectionIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CompareFacesMatch = (
  output: any,
  context: __SerdeContext
): CompareFacesMatch => {
  let contents: any = {
    __type: "CompareFacesMatch",
    Face: undefined,
    Similarity: undefined
  };
  if (output.Face !== undefined && output.Face !== null) {
    contents.Face = deserializeAws_json1_1ComparedFace(output.Face, context);
  }
  if (output.Similarity !== undefined && output.Similarity !== null) {
    contents.Similarity = output.Similarity;
  }
  return contents;
};

const deserializeAws_json1_1CompareFacesMatchList = (
  output: any,
  context: __SerdeContext
): Array<CompareFacesMatch> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CompareFacesMatch(entry, context)
  );
};

const deserializeAws_json1_1CompareFacesResponse = (
  output: any,
  context: __SerdeContext
): CompareFacesResponse => {
  let contents: any = {
    __type: "CompareFacesResponse",
    FaceMatches: undefined,
    SourceImageFace: undefined,
    SourceImageOrientationCorrection: undefined,
    TargetImageOrientationCorrection: undefined,
    UnmatchedFaces: undefined
  };
  if (output.FaceMatches !== undefined && output.FaceMatches !== null) {
    contents.FaceMatches = deserializeAws_json1_1CompareFacesMatchList(
      output.FaceMatches,
      context
    );
  }
  if (output.SourceImageFace !== undefined && output.SourceImageFace !== null) {
    contents.SourceImageFace = deserializeAws_json1_1ComparedSourceImageFace(
      output.SourceImageFace,
      context
    );
  }
  if (
    output.SourceImageOrientationCorrection !== undefined &&
    output.SourceImageOrientationCorrection !== null
  ) {
    contents.SourceImageOrientationCorrection =
      output.SourceImageOrientationCorrection;
  }
  if (
    output.TargetImageOrientationCorrection !== undefined &&
    output.TargetImageOrientationCorrection !== null
  ) {
    contents.TargetImageOrientationCorrection =
      output.TargetImageOrientationCorrection;
  }
  if (output.UnmatchedFaces !== undefined && output.UnmatchedFaces !== null) {
    contents.UnmatchedFaces = deserializeAws_json1_1CompareFacesUnmatchList(
      output.UnmatchedFaces,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CompareFacesUnmatchList = (
  output: any,
  context: __SerdeContext
): Array<ComparedFace> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ComparedFace(entry, context)
  );
};

const deserializeAws_json1_1ComparedFace = (
  output: any,
  context: __SerdeContext
): ComparedFace => {
  let contents: any = {
    __type: "ComparedFace",
    BoundingBox: undefined,
    Confidence: undefined,
    Landmarks: undefined,
    Pose: undefined,
    Quality: undefined
  };
  if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
    contents.BoundingBox = deserializeAws_json1_1BoundingBox(
      output.BoundingBox,
      context
    );
  }
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Landmarks !== undefined && output.Landmarks !== null) {
    contents.Landmarks = deserializeAws_json1_1Landmarks(
      output.Landmarks,
      context
    );
  }
  if (output.Pose !== undefined && output.Pose !== null) {
    contents.Pose = deserializeAws_json1_1Pose(output.Pose, context);
  }
  if (output.Quality !== undefined && output.Quality !== null) {
    contents.Quality = deserializeAws_json1_1ImageQuality(
      output.Quality,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ComparedFaceList = (
  output: any,
  context: __SerdeContext
): Array<ComparedFace> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ComparedFace(entry, context)
  );
};

const deserializeAws_json1_1ComparedSourceImageFace = (
  output: any,
  context: __SerdeContext
): ComparedSourceImageFace => {
  let contents: any = {
    __type: "ComparedSourceImageFace",
    BoundingBox: undefined,
    Confidence: undefined
  };
  if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
    contents.BoundingBox = deserializeAws_json1_1BoundingBox(
      output.BoundingBox,
      context
    );
  }
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  return contents;
};

const deserializeAws_json1_1ContentModerationDetection = (
  output: any,
  context: __SerdeContext
): ContentModerationDetection => {
  let contents: any = {
    __type: "ContentModerationDetection",
    ModerationLabel: undefined,
    Timestamp: undefined
  };
  if (output.ModerationLabel !== undefined && output.ModerationLabel !== null) {
    contents.ModerationLabel = deserializeAws_json1_1ModerationLabel(
      output.ModerationLabel,
      context
    );
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = output.Timestamp;
  }
  return contents;
};

const deserializeAws_json1_1ContentModerationDetections = (
  output: any,
  context: __SerdeContext
): Array<ContentModerationDetection> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContentModerationDetection(entry, context)
  );
};

const deserializeAws_json1_1CreateCollectionResponse = (
  output: any,
  context: __SerdeContext
): CreateCollectionResponse => {
  let contents: any = {
    __type: "CreateCollectionResponse",
    CollectionArn: undefined,
    FaceModelVersion: undefined,
    StatusCode: undefined
  };
  if (output.CollectionArn !== undefined && output.CollectionArn !== null) {
    contents.CollectionArn = output.CollectionArn;
  }
  if (
    output.FaceModelVersion !== undefined &&
    output.FaceModelVersion !== null
  ) {
    contents.FaceModelVersion = output.FaceModelVersion;
  }
  if (output.StatusCode !== undefined && output.StatusCode !== null) {
    contents.StatusCode = output.StatusCode;
  }
  return contents;
};

const deserializeAws_json1_1CreateProjectResponse = (
  output: any,
  context: __SerdeContext
): CreateProjectResponse => {
  let contents: any = {
    __type: "CreateProjectResponse",
    ProjectArn: undefined
  };
  if (output.ProjectArn !== undefined && output.ProjectArn !== null) {
    contents.ProjectArn = output.ProjectArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): CreateProjectVersionResponse => {
  let contents: any = {
    __type: "CreateProjectVersionResponse",
    ProjectVersionArn: undefined
  };
  if (
    output.ProjectVersionArn !== undefined &&
    output.ProjectVersionArn !== null
  ) {
    contents.ProjectVersionArn = output.ProjectVersionArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): CreateStreamProcessorResponse => {
  let contents: any = {
    __type: "CreateStreamProcessorResponse",
    StreamProcessorArn: undefined
  };
  if (
    output.StreamProcessorArn !== undefined &&
    output.StreamProcessorArn !== null
  ) {
    contents.StreamProcessorArn = output.StreamProcessorArn;
  }
  return contents;
};

const deserializeAws_json1_1CustomLabel = (
  output: any,
  context: __SerdeContext
): CustomLabel => {
  let contents: any = {
    __type: "CustomLabel",
    Confidence: undefined,
    Geometry: undefined,
    Name: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Geometry !== undefined && output.Geometry !== null) {
    contents.Geometry = deserializeAws_json1_1Geometry(
      output.Geometry,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1CustomLabels = (
  output: any,
  context: __SerdeContext
): Array<CustomLabel> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CustomLabel(entry, context)
  );
};

const deserializeAws_json1_1DeleteCollectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteCollectionResponse => {
  let contents: any = {
    __type: "DeleteCollectionResponse",
    StatusCode: undefined
  };
  if (output.StatusCode !== undefined && output.StatusCode !== null) {
    contents.StatusCode = output.StatusCode;
  }
  return contents;
};

const deserializeAws_json1_1DeleteFacesResponse = (
  output: any,
  context: __SerdeContext
): DeleteFacesResponse => {
  let contents: any = {
    __type: "DeleteFacesResponse",
    DeletedFaces: undefined
  };
  if (output.DeletedFaces !== undefined && output.DeletedFaces !== null) {
    contents.DeletedFaces = deserializeAws_json1_1FaceIdList(
      output.DeletedFaces,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): DeleteStreamProcessorResponse => {
  let contents: any = {
    __type: "DeleteStreamProcessorResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeCollectionResponse = (
  output: any,
  context: __SerdeContext
): DescribeCollectionResponse => {
  let contents: any = {
    __type: "DescribeCollectionResponse",
    CollectionARN: undefined,
    CreationTimestamp: undefined,
    FaceCount: undefined,
    FaceModelVersion: undefined
  };
  if (output.CollectionARN !== undefined && output.CollectionARN !== null) {
    contents.CollectionARN = output.CollectionARN;
  }
  if (
    output.CreationTimestamp !== undefined &&
    output.CreationTimestamp !== null
  ) {
    contents.CreationTimestamp = new Date(
      Math.round(output.CreationTimestamp * 1000)
    );
  }
  if (output.FaceCount !== undefined && output.FaceCount !== null) {
    contents.FaceCount = output.FaceCount;
  }
  if (
    output.FaceModelVersion !== undefined &&
    output.FaceModelVersion !== null
  ) {
    contents.FaceModelVersion = output.FaceModelVersion;
  }
  return contents;
};

const deserializeAws_json1_1DescribeProjectVersionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeProjectVersionsResponse => {
  let contents: any = {
    __type: "DescribeProjectVersionsResponse",
    NextToken: undefined,
    ProjectVersionDescriptions: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ProjectVersionDescriptions !== undefined &&
    output.ProjectVersionDescriptions !== null
  ) {
    contents.ProjectVersionDescriptions = deserializeAws_json1_1ProjectVersionDescriptions(
      output.ProjectVersionDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeProjectsResponse = (
  output: any,
  context: __SerdeContext
): DescribeProjectsResponse => {
  let contents: any = {
    __type: "DescribeProjectsResponse",
    NextToken: undefined,
    ProjectDescriptions: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ProjectDescriptions !== undefined &&
    output.ProjectDescriptions !== null
  ) {
    contents.ProjectDescriptions = deserializeAws_json1_1ProjectDescriptions(
      output.ProjectDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): DescribeStreamProcessorResponse => {
  let contents: any = {
    __type: "DescribeStreamProcessorResponse",
    CreationTimestamp: undefined,
    Input: undefined,
    LastUpdateTimestamp: undefined,
    Name: undefined,
    Output: undefined,
    RoleArn: undefined,
    Settings: undefined,
    Status: undefined,
    StatusMessage: undefined,
    StreamProcessorArn: undefined
  };
  if (
    output.CreationTimestamp !== undefined &&
    output.CreationTimestamp !== null
  ) {
    contents.CreationTimestamp = new Date(
      Math.round(output.CreationTimestamp * 1000)
    );
  }
  if (output.Input !== undefined && output.Input !== null) {
    contents.Input = deserializeAws_json1_1StreamProcessorInput(
      output.Input,
      context
    );
  }
  if (
    output.LastUpdateTimestamp !== undefined &&
    output.LastUpdateTimestamp !== null
  ) {
    contents.LastUpdateTimestamp = new Date(
      Math.round(output.LastUpdateTimestamp * 1000)
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Output !== undefined && output.Output !== null) {
    contents.Output = deserializeAws_json1_1StreamProcessorOutput(
      output.Output,
      context
    );
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
    contents.RoleArn = output.RoleArn;
  }
  if (output.Settings !== undefined && output.Settings !== null) {
    contents.Settings = deserializeAws_json1_1StreamProcessorSettings(
      output.Settings,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (
    output.StreamProcessorArn !== undefined &&
    output.StreamProcessorArn !== null
  ) {
    contents.StreamProcessorArn = output.StreamProcessorArn;
  }
  return contents;
};

const deserializeAws_json1_1DetectCustomLabelsResponse = (
  output: any,
  context: __SerdeContext
): DetectCustomLabelsResponse => {
  let contents: any = {
    __type: "DetectCustomLabelsResponse",
    CustomLabels: undefined
  };
  if (output.CustomLabels !== undefined && output.CustomLabels !== null) {
    contents.CustomLabels = deserializeAws_json1_1CustomLabels(
      output.CustomLabels,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DetectFacesResponse = (
  output: any,
  context: __SerdeContext
): DetectFacesResponse => {
  let contents: any = {
    __type: "DetectFacesResponse",
    FaceDetails: undefined,
    OrientationCorrection: undefined
  };
  if (output.FaceDetails !== undefined && output.FaceDetails !== null) {
    contents.FaceDetails = deserializeAws_json1_1FaceDetailList(
      output.FaceDetails,
      context
    );
  }
  if (
    output.OrientationCorrection !== undefined &&
    output.OrientationCorrection !== null
  ) {
    contents.OrientationCorrection = output.OrientationCorrection;
  }
  return contents;
};

const deserializeAws_json1_1DetectLabelsResponse = (
  output: any,
  context: __SerdeContext
): DetectLabelsResponse => {
  let contents: any = {
    __type: "DetectLabelsResponse",
    LabelModelVersion: undefined,
    Labels: undefined,
    OrientationCorrection: undefined
  };
  if (
    output.LabelModelVersion !== undefined &&
    output.LabelModelVersion !== null
  ) {
    contents.LabelModelVersion = output.LabelModelVersion;
  }
  if (output.Labels !== undefined && output.Labels !== null) {
    contents.Labels = deserializeAws_json1_1Labels(output.Labels, context);
  }
  if (
    output.OrientationCorrection !== undefined &&
    output.OrientationCorrection !== null
  ) {
    contents.OrientationCorrection = output.OrientationCorrection;
  }
  return contents;
};

const deserializeAws_json1_1DetectModerationLabelsResponse = (
  output: any,
  context: __SerdeContext
): DetectModerationLabelsResponse => {
  let contents: any = {
    __type: "DetectModerationLabelsResponse",
    HumanLoopActivationOutput: undefined,
    ModerationLabels: undefined,
    ModerationModelVersion: undefined
  };
  if (
    output.HumanLoopActivationOutput !== undefined &&
    output.HumanLoopActivationOutput !== null
  ) {
    contents.HumanLoopActivationOutput = deserializeAws_json1_1HumanLoopActivationOutput(
      output.HumanLoopActivationOutput,
      context
    );
  }
  if (
    output.ModerationLabels !== undefined &&
    output.ModerationLabels !== null
  ) {
    contents.ModerationLabels = deserializeAws_json1_1ModerationLabels(
      output.ModerationLabels,
      context
    );
  }
  if (
    output.ModerationModelVersion !== undefined &&
    output.ModerationModelVersion !== null
  ) {
    contents.ModerationModelVersion = output.ModerationModelVersion;
  }
  return contents;
};

const deserializeAws_json1_1DetectTextResponse = (
  output: any,
  context: __SerdeContext
): DetectTextResponse => {
  let contents: any = {
    __type: "DetectTextResponse",
    TextDetections: undefined
  };
  if (output.TextDetections !== undefined && output.TextDetections !== null) {
    contents.TextDetections = deserializeAws_json1_1TextDetectionList(
      output.TextDetections,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Emotion = (
  output: any,
  context: __SerdeContext
): Emotion => {
  let contents: any = {
    __type: "Emotion",
    Confidence: undefined,
    Type: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1Emotions = (
  output: any,
  context: __SerdeContext
): Array<Emotion> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Emotion(entry, context)
  );
};

const deserializeAws_json1_1EvaluationResult = (
  output: any,
  context: __SerdeContext
): EvaluationResult => {
  let contents: any = {
    __type: "EvaluationResult",
    F1Score: undefined,
    Summary: undefined
  };
  if (output.F1Score !== undefined && output.F1Score !== null) {
    contents.F1Score = output.F1Score;
  }
  if (output.Summary !== undefined && output.Summary !== null) {
    contents.Summary = deserializeAws_json1_1Summary(output.Summary, context);
  }
  return contents;
};

const deserializeAws_json1_1EyeOpen = (
  output: any,
  context: __SerdeContext
): EyeOpen => {
  let contents: any = {
    __type: "EyeOpen",
    Confidence: undefined,
    Value: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Eyeglasses = (
  output: any,
  context: __SerdeContext
): Eyeglasses => {
  let contents: any = {
    __type: "Eyeglasses",
    Confidence: undefined,
    Value: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Face = (
  output: any,
  context: __SerdeContext
): Face => {
  let contents: any = {
    __type: "Face",
    BoundingBox: undefined,
    Confidence: undefined,
    ExternalImageId: undefined,
    FaceId: undefined,
    ImageId: undefined
  };
  if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
    contents.BoundingBox = deserializeAws_json1_1BoundingBox(
      output.BoundingBox,
      context
    );
  }
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.ExternalImageId !== undefined && output.ExternalImageId !== null) {
    contents.ExternalImageId = output.ExternalImageId;
  }
  if (output.FaceId !== undefined && output.FaceId !== null) {
    contents.FaceId = output.FaceId;
  }
  if (output.ImageId !== undefined && output.ImageId !== null) {
    contents.ImageId = output.ImageId;
  }
  return contents;
};

const deserializeAws_json1_1FaceDetail = (
  output: any,
  context: __SerdeContext
): FaceDetail => {
  let contents: any = {
    __type: "FaceDetail",
    AgeRange: undefined,
    Beard: undefined,
    BoundingBox: undefined,
    Confidence: undefined,
    Emotions: undefined,
    Eyeglasses: undefined,
    EyesOpen: undefined,
    Gender: undefined,
    Landmarks: undefined,
    MouthOpen: undefined,
    Mustache: undefined,
    Pose: undefined,
    Quality: undefined,
    Smile: undefined,
    Sunglasses: undefined
  };
  if (output.AgeRange !== undefined && output.AgeRange !== null) {
    contents.AgeRange = deserializeAws_json1_1AgeRange(
      output.AgeRange,
      context
    );
  }
  if (output.Beard !== undefined && output.Beard !== null) {
    contents.Beard = deserializeAws_json1_1Beard(output.Beard, context);
  }
  if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
    contents.BoundingBox = deserializeAws_json1_1BoundingBox(
      output.BoundingBox,
      context
    );
  }
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Emotions !== undefined && output.Emotions !== null) {
    contents.Emotions = deserializeAws_json1_1Emotions(
      output.Emotions,
      context
    );
  }
  if (output.Eyeglasses !== undefined && output.Eyeglasses !== null) {
    contents.Eyeglasses = deserializeAws_json1_1Eyeglasses(
      output.Eyeglasses,
      context
    );
  }
  if (output.EyesOpen !== undefined && output.EyesOpen !== null) {
    contents.EyesOpen = deserializeAws_json1_1EyeOpen(output.EyesOpen, context);
  }
  if (output.Gender !== undefined && output.Gender !== null) {
    contents.Gender = deserializeAws_json1_1Gender(output.Gender, context);
  }
  if (output.Landmarks !== undefined && output.Landmarks !== null) {
    contents.Landmarks = deserializeAws_json1_1Landmarks(
      output.Landmarks,
      context
    );
  }
  if (output.MouthOpen !== undefined && output.MouthOpen !== null) {
    contents.MouthOpen = deserializeAws_json1_1MouthOpen(
      output.MouthOpen,
      context
    );
  }
  if (output.Mustache !== undefined && output.Mustache !== null) {
    contents.Mustache = deserializeAws_json1_1Mustache(
      output.Mustache,
      context
    );
  }
  if (output.Pose !== undefined && output.Pose !== null) {
    contents.Pose = deserializeAws_json1_1Pose(output.Pose, context);
  }
  if (output.Quality !== undefined && output.Quality !== null) {
    contents.Quality = deserializeAws_json1_1ImageQuality(
      output.Quality,
      context
    );
  }
  if (output.Smile !== undefined && output.Smile !== null) {
    contents.Smile = deserializeAws_json1_1Smile(output.Smile, context);
  }
  if (output.Sunglasses !== undefined && output.Sunglasses !== null) {
    contents.Sunglasses = deserializeAws_json1_1Sunglasses(
      output.Sunglasses,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FaceDetailList = (
  output: any,
  context: __SerdeContext
): Array<FaceDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FaceDetail(entry, context)
  );
};

const deserializeAws_json1_1FaceDetection = (
  output: any,
  context: __SerdeContext
): FaceDetection => {
  let contents: any = {
    __type: "FaceDetection",
    Face: undefined,
    Timestamp: undefined
  };
  if (output.Face !== undefined && output.Face !== null) {
    contents.Face = deserializeAws_json1_1FaceDetail(output.Face, context);
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = output.Timestamp;
  }
  return contents;
};

const deserializeAws_json1_1FaceDetections = (
  output: any,
  context: __SerdeContext
): Array<FaceDetection> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FaceDetection(entry, context)
  );
};

const deserializeAws_json1_1FaceIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FaceList = (
  output: any,
  context: __SerdeContext
): Array<Face> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Face(entry, context)
  );
};

const deserializeAws_json1_1FaceMatch = (
  output: any,
  context: __SerdeContext
): FaceMatch => {
  let contents: any = {
    __type: "FaceMatch",
    Face: undefined,
    Similarity: undefined
  };
  if (output.Face !== undefined && output.Face !== null) {
    contents.Face = deserializeAws_json1_1Face(output.Face, context);
  }
  if (output.Similarity !== undefined && output.Similarity !== null) {
    contents.Similarity = output.Similarity;
  }
  return contents;
};

const deserializeAws_json1_1FaceMatchList = (
  output: any,
  context: __SerdeContext
): Array<FaceMatch> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FaceMatch(entry, context)
  );
};

const deserializeAws_json1_1FaceModelVersionList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FaceRecord = (
  output: any,
  context: __SerdeContext
): FaceRecord => {
  let contents: any = {
    __type: "FaceRecord",
    Face: undefined,
    FaceDetail: undefined
  };
  if (output.Face !== undefined && output.Face !== null) {
    contents.Face = deserializeAws_json1_1Face(output.Face, context);
  }
  if (output.FaceDetail !== undefined && output.FaceDetail !== null) {
    contents.FaceDetail = deserializeAws_json1_1FaceDetail(
      output.FaceDetail,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FaceRecordList = (
  output: any,
  context: __SerdeContext
): Array<FaceRecord> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FaceRecord(entry, context)
  );
};

const deserializeAws_json1_1FaceSearchSettings = (
  output: any,
  context: __SerdeContext
): FaceSearchSettings => {
  let contents: any = {
    __type: "FaceSearchSettings",
    CollectionId: undefined,
    FaceMatchThreshold: undefined
  };
  if (output.CollectionId !== undefined && output.CollectionId !== null) {
    contents.CollectionId = output.CollectionId;
  }
  if (
    output.FaceMatchThreshold !== undefined &&
    output.FaceMatchThreshold !== null
  ) {
    contents.FaceMatchThreshold = output.FaceMatchThreshold;
  }
  return contents;
};

const deserializeAws_json1_1Gender = (
  output: any,
  context: __SerdeContext
): Gender => {
  let contents: any = {
    __type: "Gender",
    Confidence: undefined,
    Value: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Geometry = (
  output: any,
  context: __SerdeContext
): Geometry => {
  let contents: any = {
    __type: "Geometry",
    BoundingBox: undefined,
    Polygon: undefined
  };
  if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
    contents.BoundingBox = deserializeAws_json1_1BoundingBox(
      output.BoundingBox,
      context
    );
  }
  if (output.Polygon !== undefined && output.Polygon !== null) {
    contents.Polygon = deserializeAws_json1_1Polygon(output.Polygon, context);
  }
  return contents;
};

const deserializeAws_json1_1GetCelebrityInfoResponse = (
  output: any,
  context: __SerdeContext
): GetCelebrityInfoResponse => {
  let contents: any = {
    __type: "GetCelebrityInfoResponse",
    Name: undefined,
    Urls: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Urls !== undefined && output.Urls !== null) {
    contents.Urls = deserializeAws_json1_1Urls(output.Urls, context);
  }
  return contents;
};

const deserializeAws_json1_1GetCelebrityRecognitionResponse = (
  output: any,
  context: __SerdeContext
): GetCelebrityRecognitionResponse => {
  let contents: any = {
    __type: "GetCelebrityRecognitionResponse",
    Celebrities: undefined,
    JobStatus: undefined,
    NextToken: undefined,
    StatusMessage: undefined,
    VideoMetadata: undefined
  };
  if (output.Celebrities !== undefined && output.Celebrities !== null) {
    contents.Celebrities = deserializeAws_json1_1CelebrityRecognitions(
      output.Celebrities,
      context
    );
  }
  if (output.JobStatus !== undefined && output.JobStatus !== null) {
    contents.JobStatus = output.JobStatus;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
    contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(
      output.VideoMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetContentModerationResponse = (
  output: any,
  context: __SerdeContext
): GetContentModerationResponse => {
  let contents: any = {
    __type: "GetContentModerationResponse",
    JobStatus: undefined,
    ModerationLabels: undefined,
    ModerationModelVersion: undefined,
    NextToken: undefined,
    StatusMessage: undefined,
    VideoMetadata: undefined
  };
  if (output.JobStatus !== undefined && output.JobStatus !== null) {
    contents.JobStatus = output.JobStatus;
  }
  if (
    output.ModerationLabels !== undefined &&
    output.ModerationLabels !== null
  ) {
    contents.ModerationLabels = deserializeAws_json1_1ContentModerationDetections(
      output.ModerationLabels,
      context
    );
  }
  if (
    output.ModerationModelVersion !== undefined &&
    output.ModerationModelVersion !== null
  ) {
    contents.ModerationModelVersion = output.ModerationModelVersion;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
    contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(
      output.VideoMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetFaceDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetFaceDetectionResponse => {
  let contents: any = {
    __type: "GetFaceDetectionResponse",
    Faces: undefined,
    JobStatus: undefined,
    NextToken: undefined,
    StatusMessage: undefined,
    VideoMetadata: undefined
  };
  if (output.Faces !== undefined && output.Faces !== null) {
    contents.Faces = deserializeAws_json1_1FaceDetections(
      output.Faces,
      context
    );
  }
  if (output.JobStatus !== undefined && output.JobStatus !== null) {
    contents.JobStatus = output.JobStatus;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
    contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(
      output.VideoMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetFaceSearchResponse = (
  output: any,
  context: __SerdeContext
): GetFaceSearchResponse => {
  let contents: any = {
    __type: "GetFaceSearchResponse",
    JobStatus: undefined,
    NextToken: undefined,
    Persons: undefined,
    StatusMessage: undefined,
    VideoMetadata: undefined
  };
  if (output.JobStatus !== undefined && output.JobStatus !== null) {
    contents.JobStatus = output.JobStatus;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Persons !== undefined && output.Persons !== null) {
    contents.Persons = deserializeAws_json1_1PersonMatches(
      output.Persons,
      context
    );
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
    contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(
      output.VideoMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetLabelDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetLabelDetectionResponse => {
  let contents: any = {
    __type: "GetLabelDetectionResponse",
    JobStatus: undefined,
    LabelModelVersion: undefined,
    Labels: undefined,
    NextToken: undefined,
    StatusMessage: undefined,
    VideoMetadata: undefined
  };
  if (output.JobStatus !== undefined && output.JobStatus !== null) {
    contents.JobStatus = output.JobStatus;
  }
  if (
    output.LabelModelVersion !== undefined &&
    output.LabelModelVersion !== null
  ) {
    contents.LabelModelVersion = output.LabelModelVersion;
  }
  if (output.Labels !== undefined && output.Labels !== null) {
    contents.Labels = deserializeAws_json1_1LabelDetections(
      output.Labels,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
    contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(
      output.VideoMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetPersonTrackingResponse = (
  output: any,
  context: __SerdeContext
): GetPersonTrackingResponse => {
  let contents: any = {
    __type: "GetPersonTrackingResponse",
    JobStatus: undefined,
    NextToken: undefined,
    Persons: undefined,
    StatusMessage: undefined,
    VideoMetadata: undefined
  };
  if (output.JobStatus !== undefined && output.JobStatus !== null) {
    contents.JobStatus = output.JobStatus;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Persons !== undefined && output.Persons !== null) {
    contents.Persons = deserializeAws_json1_1PersonDetections(
      output.Persons,
      context
    );
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
    contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(
      output.VideoMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GroundTruthManifest = (
  output: any,
  context: __SerdeContext
): GroundTruthManifest => {
  let contents: any = {
    __type: "GroundTruthManifest",
    S3Object: undefined
  };
  if (output.S3Object !== undefined && output.S3Object !== null) {
    contents.S3Object = deserializeAws_json1_1S3Object(
      output.S3Object,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1HumanLoopActivationOutput = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationOutput => {
  let contents: any = {
    __type: "HumanLoopActivationOutput",
    HumanLoopActivationConditionsEvaluationResults: undefined,
    HumanLoopActivationReasons: undefined,
    HumanLoopArn: undefined
  };
  if (
    output.HumanLoopActivationConditionsEvaluationResults !== undefined &&
    output.HumanLoopActivationConditionsEvaluationResults !== null
  ) {
    contents.HumanLoopActivationConditionsEvaluationResults = new __LazyJsonString(
      output.HumanLoopActivationConditionsEvaluationResults
    );
  }
  if (
    output.HumanLoopActivationReasons !== undefined &&
    output.HumanLoopActivationReasons !== null
  ) {
    contents.HumanLoopActivationReasons = deserializeAws_json1_1HumanLoopActivationReasons(
      output.HumanLoopActivationReasons,
      context
    );
  }
  if (output.HumanLoopArn !== undefined && output.HumanLoopArn !== null) {
    contents.HumanLoopArn = output.HumanLoopArn;
  }
  return contents;
};

const deserializeAws_json1_1HumanLoopActivationReasons = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1HumanLoopQuotaExceededException = (
  output: any,
  context: __SerdeContext
): HumanLoopQuotaExceededException => {
  let contents: any = {
    __type: "HumanLoopQuotaExceededException",
    Code: undefined,
    Logref: undefined,
    Message: undefined,
    QuotaCode: undefined,
    ResourceType: undefined,
    ServiceCode: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.QuotaCode !== undefined && output.QuotaCode !== null) {
    contents.QuotaCode = output.QuotaCode;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
    contents.ServiceCode = output.ServiceCode;
  }
  return contents;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  let contents: any = {
    __type: "IdempotentParameterMismatchException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ImageQuality = (
  output: any,
  context: __SerdeContext
): ImageQuality => {
  let contents: any = {
    __type: "ImageQuality",
    Brightness: undefined,
    Sharpness: undefined
  };
  if (output.Brightness !== undefined && output.Brightness !== null) {
    contents.Brightness = output.Brightness;
  }
  if (output.Sharpness !== undefined && output.Sharpness !== null) {
    contents.Sharpness = output.Sharpness;
  }
  return contents;
};

const deserializeAws_json1_1ImageTooLargeException = (
  output: any,
  context: __SerdeContext
): ImageTooLargeException => {
  let contents: any = {
    __type: "ImageTooLargeException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1IndexFacesResponse = (
  output: any,
  context: __SerdeContext
): IndexFacesResponse => {
  let contents: any = {
    __type: "IndexFacesResponse",
    FaceModelVersion: undefined,
    FaceRecords: undefined,
    OrientationCorrection: undefined,
    UnindexedFaces: undefined
  };
  if (
    output.FaceModelVersion !== undefined &&
    output.FaceModelVersion !== null
  ) {
    contents.FaceModelVersion = output.FaceModelVersion;
  }
  if (output.FaceRecords !== undefined && output.FaceRecords !== null) {
    contents.FaceRecords = deserializeAws_json1_1FaceRecordList(
      output.FaceRecords,
      context
    );
  }
  if (
    output.OrientationCorrection !== undefined &&
    output.OrientationCorrection !== null
  ) {
    contents.OrientationCorrection = output.OrientationCorrection;
  }
  if (output.UnindexedFaces !== undefined && output.UnindexedFaces !== null) {
    contents.UnindexedFaces = deserializeAws_json1_1UnindexedFaces(
      output.UnindexedFaces,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Instance = (
  output: any,
  context: __SerdeContext
): Instance => {
  let contents: any = {
    __type: "Instance",
    BoundingBox: undefined,
    Confidence: undefined
  };
  if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
    contents.BoundingBox = deserializeAws_json1_1BoundingBox(
      output.BoundingBox,
      context
    );
  }
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  return contents;
};

const deserializeAws_json1_1Instances = (
  output: any,
  context: __SerdeContext
): Array<Instance> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Instance(entry, context)
  );
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidImageFormatException = (
  output: any,
  context: __SerdeContext
): InvalidImageFormatException => {
  let contents: any = {
    __type: "InvalidImageFormatException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidPaginationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidPaginationTokenException => {
  let contents: any = {
    __type: "InvalidPaginationTokenException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidS3ObjectException = (
  output: any,
  context: __SerdeContext
): InvalidS3ObjectException => {
  let contents: any = {
    __type: "InvalidS3ObjectException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1KinesisDataStream = (
  output: any,
  context: __SerdeContext
): KinesisDataStream => {
  let contents: any = {
    __type: "KinesisDataStream",
    Arn: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  return contents;
};

const deserializeAws_json1_1KinesisVideoStream = (
  output: any,
  context: __SerdeContext
): KinesisVideoStream => {
  let contents: any = {
    __type: "KinesisVideoStream",
    Arn: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  return contents;
};

const deserializeAws_json1_1Label = (
  output: any,
  context: __SerdeContext
): Label => {
  let contents: any = {
    __type: "Label",
    Confidence: undefined,
    Instances: undefined,
    Name: undefined,
    Parents: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Instances !== undefined && output.Instances !== null) {
    contents.Instances = deserializeAws_json1_1Instances(
      output.Instances,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Parents !== undefined && output.Parents !== null) {
    contents.Parents = deserializeAws_json1_1Parents(output.Parents, context);
  }
  return contents;
};

const deserializeAws_json1_1LabelDetection = (
  output: any,
  context: __SerdeContext
): LabelDetection => {
  let contents: any = {
    __type: "LabelDetection",
    Label: undefined,
    Timestamp: undefined
  };
  if (output.Label !== undefined && output.Label !== null) {
    contents.Label = deserializeAws_json1_1Label(output.Label, context);
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = output.Timestamp;
  }
  return contents;
};

const deserializeAws_json1_1LabelDetections = (
  output: any,
  context: __SerdeContext
): Array<LabelDetection> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LabelDetection(entry, context)
  );
};

const deserializeAws_json1_1Labels = (
  output: any,
  context: __SerdeContext
): Array<Label> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Label(entry, context)
  );
};

const deserializeAws_json1_1Landmark = (
  output: any,
  context: __SerdeContext
): Landmark => {
  let contents: any = {
    __type: "Landmark",
    Type: undefined,
    X: undefined,
    Y: undefined
  };
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.X !== undefined && output.X !== null) {
    contents.X = output.X;
  }
  if (output.Y !== undefined && output.Y !== null) {
    contents.Y = output.Y;
  }
  return contents;
};

const deserializeAws_json1_1Landmarks = (
  output: any,
  context: __SerdeContext
): Array<Landmark> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Landmark(entry, context)
  );
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListCollectionsResponse = (
  output: any,
  context: __SerdeContext
): ListCollectionsResponse => {
  let contents: any = {
    __type: "ListCollectionsResponse",
    CollectionIds: undefined,
    FaceModelVersions: undefined,
    NextToken: undefined
  };
  if (output.CollectionIds !== undefined && output.CollectionIds !== null) {
    contents.CollectionIds = deserializeAws_json1_1CollectionIdList(
      output.CollectionIds,
      context
    );
  }
  if (
    output.FaceModelVersions !== undefined &&
    output.FaceModelVersions !== null
  ) {
    contents.FaceModelVersions = deserializeAws_json1_1FaceModelVersionList(
      output.FaceModelVersions,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListFacesResponse = (
  output: any,
  context: __SerdeContext
): ListFacesResponse => {
  let contents: any = {
    __type: "ListFacesResponse",
    FaceModelVersion: undefined,
    Faces: undefined,
    NextToken: undefined
  };
  if (
    output.FaceModelVersion !== undefined &&
    output.FaceModelVersion !== null
  ) {
    contents.FaceModelVersion = output.FaceModelVersion;
  }
  if (output.Faces !== undefined && output.Faces !== null) {
    contents.Faces = deserializeAws_json1_1FaceList(output.Faces, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListStreamProcessorsResponse = (
  output: any,
  context: __SerdeContext
): ListStreamProcessorsResponse => {
  let contents: any = {
    __type: "ListStreamProcessorsResponse",
    NextToken: undefined,
    StreamProcessors: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.StreamProcessors !== undefined &&
    output.StreamProcessors !== null
  ) {
    contents.StreamProcessors = deserializeAws_json1_1StreamProcessorList(
      output.StreamProcessors,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ModerationLabel = (
  output: any,
  context: __SerdeContext
): ModerationLabel => {
  let contents: any = {
    __type: "ModerationLabel",
    Confidence: undefined,
    Name: undefined,
    ParentName: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ParentName !== undefined && output.ParentName !== null) {
    contents.ParentName = output.ParentName;
  }
  return contents;
};

const deserializeAws_json1_1ModerationLabels = (
  output: any,
  context: __SerdeContext
): Array<ModerationLabel> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModerationLabel(entry, context)
  );
};

const deserializeAws_json1_1MouthOpen = (
  output: any,
  context: __SerdeContext
): MouthOpen => {
  let contents: any = {
    __type: "MouthOpen",
    Confidence: undefined,
    Value: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Mustache = (
  output: any,
  context: __SerdeContext
): Mustache => {
  let contents: any = {
    __type: "Mustache",
    Confidence: undefined,
    Value: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1OutputConfig = (
  output: any,
  context: __SerdeContext
): OutputConfig => {
  let contents: any = {
    __type: "OutputConfig",
    S3Bucket: undefined,
    S3KeyPrefix: undefined
  };
  if (output.S3Bucket !== undefined && output.S3Bucket !== null) {
    contents.S3Bucket = output.S3Bucket;
  }
  if (output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null) {
    contents.S3KeyPrefix = output.S3KeyPrefix;
  }
  return contents;
};

const deserializeAws_json1_1Parent = (
  output: any,
  context: __SerdeContext
): Parent => {
  let contents: any = {
    __type: "Parent",
    Name: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1Parents = (
  output: any,
  context: __SerdeContext
): Array<Parent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Parent(entry, context)
  );
};

const deserializeAws_json1_1PersonDetail = (
  output: any,
  context: __SerdeContext
): PersonDetail => {
  let contents: any = {
    __type: "PersonDetail",
    BoundingBox: undefined,
    Face: undefined,
    Index: undefined
  };
  if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
    contents.BoundingBox = deserializeAws_json1_1BoundingBox(
      output.BoundingBox,
      context
    );
  }
  if (output.Face !== undefined && output.Face !== null) {
    contents.Face = deserializeAws_json1_1FaceDetail(output.Face, context);
  }
  if (output.Index !== undefined && output.Index !== null) {
    contents.Index = output.Index;
  }
  return contents;
};

const deserializeAws_json1_1PersonDetection = (
  output: any,
  context: __SerdeContext
): PersonDetection => {
  let contents: any = {
    __type: "PersonDetection",
    Person: undefined,
    Timestamp: undefined
  };
  if (output.Person !== undefined && output.Person !== null) {
    contents.Person = deserializeAws_json1_1PersonDetail(
      output.Person,
      context
    );
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = output.Timestamp;
  }
  return contents;
};

const deserializeAws_json1_1PersonDetections = (
  output: any,
  context: __SerdeContext
): Array<PersonDetection> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PersonDetection(entry, context)
  );
};

const deserializeAws_json1_1PersonMatch = (
  output: any,
  context: __SerdeContext
): PersonMatch => {
  let contents: any = {
    __type: "PersonMatch",
    FaceMatches: undefined,
    Person: undefined,
    Timestamp: undefined
  };
  if (output.FaceMatches !== undefined && output.FaceMatches !== null) {
    contents.FaceMatches = deserializeAws_json1_1FaceMatchList(
      output.FaceMatches,
      context
    );
  }
  if (output.Person !== undefined && output.Person !== null) {
    contents.Person = deserializeAws_json1_1PersonDetail(
      output.Person,
      context
    );
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = output.Timestamp;
  }
  return contents;
};

const deserializeAws_json1_1PersonMatches = (
  output: any,
  context: __SerdeContext
): Array<PersonMatch> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PersonMatch(entry, context)
  );
};

const deserializeAws_json1_1Point = (
  output: any,
  context: __SerdeContext
): Point => {
  let contents: any = {
    __type: "Point",
    X: undefined,
    Y: undefined
  };
  if (output.X !== undefined && output.X !== null) {
    contents.X = output.X;
  }
  if (output.Y !== undefined && output.Y !== null) {
    contents.Y = output.Y;
  }
  return contents;
};

const deserializeAws_json1_1Polygon = (
  output: any,
  context: __SerdeContext
): Array<Point> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Point(entry, context)
  );
};

const deserializeAws_json1_1Pose = (
  output: any,
  context: __SerdeContext
): Pose => {
  let contents: any = {
    __type: "Pose",
    Pitch: undefined,
    Roll: undefined,
    Yaw: undefined
  };
  if (output.Pitch !== undefined && output.Pitch !== null) {
    contents.Pitch = output.Pitch;
  }
  if (output.Roll !== undefined && output.Roll !== null) {
    contents.Roll = output.Roll;
  }
  if (output.Yaw !== undefined && output.Yaw !== null) {
    contents.Yaw = output.Yaw;
  }
  return contents;
};

const deserializeAws_json1_1ProjectDescription = (
  output: any,
  context: __SerdeContext
): ProjectDescription => {
  let contents: any = {
    __type: "ProjectDescription",
    CreationTimestamp: undefined,
    ProjectArn: undefined,
    Status: undefined
  };
  if (
    output.CreationTimestamp !== undefined &&
    output.CreationTimestamp !== null
  ) {
    contents.CreationTimestamp = new Date(
      Math.round(output.CreationTimestamp * 1000)
    );
  }
  if (output.ProjectArn !== undefined && output.ProjectArn !== null) {
    contents.ProjectArn = output.ProjectArn;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1ProjectDescriptions = (
  output: any,
  context: __SerdeContext
): Array<ProjectDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProjectDescription(entry, context)
  );
};

const deserializeAws_json1_1ProjectVersionDescription = (
  output: any,
  context: __SerdeContext
): ProjectVersionDescription => {
  let contents: any = {
    __type: "ProjectVersionDescription",
    BillableTrainingTimeInSeconds: undefined,
    CreationTimestamp: undefined,
    EvaluationResult: undefined,
    MinInferenceUnits: undefined,
    OutputConfig: undefined,
    ProjectVersionArn: undefined,
    Status: undefined,
    StatusMessage: undefined,
    TestingDataResult: undefined,
    TrainingDataResult: undefined,
    TrainingEndTimestamp: undefined
  };
  if (
    output.BillableTrainingTimeInSeconds !== undefined &&
    output.BillableTrainingTimeInSeconds !== null
  ) {
    contents.BillableTrainingTimeInSeconds =
      output.BillableTrainingTimeInSeconds;
  }
  if (
    output.CreationTimestamp !== undefined &&
    output.CreationTimestamp !== null
  ) {
    contents.CreationTimestamp = new Date(
      Math.round(output.CreationTimestamp * 1000)
    );
  }
  if (
    output.EvaluationResult !== undefined &&
    output.EvaluationResult !== null
  ) {
    contents.EvaluationResult = deserializeAws_json1_1EvaluationResult(
      output.EvaluationResult,
      context
    );
  }
  if (
    output.MinInferenceUnits !== undefined &&
    output.MinInferenceUnits !== null
  ) {
    contents.MinInferenceUnits = output.MinInferenceUnits;
  }
  if (output.OutputConfig !== undefined && output.OutputConfig !== null) {
    contents.OutputConfig = deserializeAws_json1_1OutputConfig(
      output.OutputConfig,
      context
    );
  }
  if (
    output.ProjectVersionArn !== undefined &&
    output.ProjectVersionArn !== null
  ) {
    contents.ProjectVersionArn = output.ProjectVersionArn;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (
    output.TestingDataResult !== undefined &&
    output.TestingDataResult !== null
  ) {
    contents.TestingDataResult = deserializeAws_json1_1TestingDataResult(
      output.TestingDataResult,
      context
    );
  }
  if (
    output.TrainingDataResult !== undefined &&
    output.TrainingDataResult !== null
  ) {
    contents.TrainingDataResult = deserializeAws_json1_1TrainingDataResult(
      output.TrainingDataResult,
      context
    );
  }
  if (
    output.TrainingEndTimestamp !== undefined &&
    output.TrainingEndTimestamp !== null
  ) {
    contents.TrainingEndTimestamp = new Date(
      Math.round(output.TrainingEndTimestamp * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1ProjectVersionDescriptions = (
  output: any,
  context: __SerdeContext
): Array<ProjectVersionDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProjectVersionDescription(entry, context)
  );
};

const deserializeAws_json1_1ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  let contents: any = {
    __type: "ProvisionedThroughputExceededException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Reasons = (
  output: any,
  context: __SerdeContext
): Array<Reason | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1RecognizeCelebritiesResponse = (
  output: any,
  context: __SerdeContext
): RecognizeCelebritiesResponse => {
  let contents: any = {
    __type: "RecognizeCelebritiesResponse",
    CelebrityFaces: undefined,
    OrientationCorrection: undefined,
    UnrecognizedFaces: undefined
  };
  if (output.CelebrityFaces !== undefined && output.CelebrityFaces !== null) {
    contents.CelebrityFaces = deserializeAws_json1_1CelebrityList(
      output.CelebrityFaces,
      context
    );
  }
  if (
    output.OrientationCorrection !== undefined &&
    output.OrientationCorrection !== null
  ) {
    contents.OrientationCorrection = output.OrientationCorrection;
  }
  if (
    output.UnrecognizedFaces !== undefined &&
    output.UnrecognizedFaces !== null
  ) {
    contents.UnrecognizedFaces = deserializeAws_json1_1ComparedFaceList(
      output.UnrecognizedFaces,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotReadyException = (
  output: any,
  context: __SerdeContext
): ResourceNotReadyException => {
  let contents: any = {
    __type: "ResourceNotReadyException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1S3Object = (
  output: any,
  context: __SerdeContext
): S3Object => {
  let contents: any = {
    __type: "S3Object",
    Bucket: undefined,
    Name: undefined,
    Version: undefined
  };
  if (output.Bucket !== undefined && output.Bucket !== null) {
    contents.Bucket = output.Bucket;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Version !== undefined && output.Version !== null) {
    contents.Version = output.Version;
  }
  return contents;
};

const deserializeAws_json1_1SearchFacesByImageResponse = (
  output: any,
  context: __SerdeContext
): SearchFacesByImageResponse => {
  let contents: any = {
    __type: "SearchFacesByImageResponse",
    FaceMatches: undefined,
    FaceModelVersion: undefined,
    SearchedFaceBoundingBox: undefined,
    SearchedFaceConfidence: undefined
  };
  if (output.FaceMatches !== undefined && output.FaceMatches !== null) {
    contents.FaceMatches = deserializeAws_json1_1FaceMatchList(
      output.FaceMatches,
      context
    );
  }
  if (
    output.FaceModelVersion !== undefined &&
    output.FaceModelVersion !== null
  ) {
    contents.FaceModelVersion = output.FaceModelVersion;
  }
  if (
    output.SearchedFaceBoundingBox !== undefined &&
    output.SearchedFaceBoundingBox !== null
  ) {
    contents.SearchedFaceBoundingBox = deserializeAws_json1_1BoundingBox(
      output.SearchedFaceBoundingBox,
      context
    );
  }
  if (
    output.SearchedFaceConfidence !== undefined &&
    output.SearchedFaceConfidence !== null
  ) {
    contents.SearchedFaceConfidence = output.SearchedFaceConfidence;
  }
  return contents;
};

const deserializeAws_json1_1SearchFacesResponse = (
  output: any,
  context: __SerdeContext
): SearchFacesResponse => {
  let contents: any = {
    __type: "SearchFacesResponse",
    FaceMatches: undefined,
    FaceModelVersion: undefined,
    SearchedFaceId: undefined
  };
  if (output.FaceMatches !== undefined && output.FaceMatches !== null) {
    contents.FaceMatches = deserializeAws_json1_1FaceMatchList(
      output.FaceMatches,
      context
    );
  }
  if (
    output.FaceModelVersion !== undefined &&
    output.FaceModelVersion !== null
  ) {
    contents.FaceModelVersion = output.FaceModelVersion;
  }
  if (output.SearchedFaceId !== undefined && output.SearchedFaceId !== null) {
    contents.SearchedFaceId = output.SearchedFaceId;
  }
  return contents;
};

const deserializeAws_json1_1Smile = (
  output: any,
  context: __SerdeContext
): Smile => {
  let contents: any = {
    __type: "Smile",
    Confidence: undefined,
    Value: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1StartCelebrityRecognitionResponse = (
  output: any,
  context: __SerdeContext
): StartCelebrityRecognitionResponse => {
  let contents: any = {
    __type: "StartCelebrityRecognitionResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1StartContentModerationResponse = (
  output: any,
  context: __SerdeContext
): StartContentModerationResponse => {
  let contents: any = {
    __type: "StartContentModerationResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1StartFaceDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartFaceDetectionResponse => {
  let contents: any = {
    __type: "StartFaceDetectionResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1StartFaceSearchResponse = (
  output: any,
  context: __SerdeContext
): StartFaceSearchResponse => {
  let contents: any = {
    __type: "StartFaceSearchResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1StartLabelDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartLabelDetectionResponse => {
  let contents: any = {
    __type: "StartLabelDetectionResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1StartPersonTrackingResponse = (
  output: any,
  context: __SerdeContext
): StartPersonTrackingResponse => {
  let contents: any = {
    __type: "StartPersonTrackingResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1StartProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): StartProjectVersionResponse => {
  let contents: any = {
    __type: "StartProjectVersionResponse",
    Status: undefined
  };
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1StartStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): StartStreamProcessorResponse => {
  let contents: any = {
    __type: "StartStreamProcessorResponse"
  };
  return contents;
};

const deserializeAws_json1_1StopProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): StopProjectVersionResponse => {
  let contents: any = {
    __type: "StopProjectVersionResponse",
    Status: undefined
  };
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1StopStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): StopStreamProcessorResponse => {
  let contents: any = {
    __type: "StopStreamProcessorResponse"
  };
  return contents;
};

const deserializeAws_json1_1StreamProcessor = (
  output: any,
  context: __SerdeContext
): StreamProcessor => {
  let contents: any = {
    __type: "StreamProcessor",
    Name: undefined,
    Status: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1StreamProcessorInput = (
  output: any,
  context: __SerdeContext
): StreamProcessorInput => {
  let contents: any = {
    __type: "StreamProcessorInput",
    KinesisVideoStream: undefined
  };
  if (
    output.KinesisVideoStream !== undefined &&
    output.KinesisVideoStream !== null
  ) {
    contents.KinesisVideoStream = deserializeAws_json1_1KinesisVideoStream(
      output.KinesisVideoStream,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StreamProcessorList = (
  output: any,
  context: __SerdeContext
): Array<StreamProcessor> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StreamProcessor(entry, context)
  );
};

const deserializeAws_json1_1StreamProcessorOutput = (
  output: any,
  context: __SerdeContext
): StreamProcessorOutput => {
  let contents: any = {
    __type: "StreamProcessorOutput",
    KinesisDataStream: undefined
  };
  if (
    output.KinesisDataStream !== undefined &&
    output.KinesisDataStream !== null
  ) {
    contents.KinesisDataStream = deserializeAws_json1_1KinesisDataStream(
      output.KinesisDataStream,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StreamProcessorSettings = (
  output: any,
  context: __SerdeContext
): StreamProcessorSettings => {
  let contents: any = {
    __type: "StreamProcessorSettings",
    FaceSearch: undefined
  };
  if (output.FaceSearch !== undefined && output.FaceSearch !== null) {
    contents.FaceSearch = deserializeAws_json1_1FaceSearchSettings(
      output.FaceSearch,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Summary = (
  output: any,
  context: __SerdeContext
): Summary => {
  let contents: any = {
    __type: "Summary",
    S3Object: undefined
  };
  if (output.S3Object !== undefined && output.S3Object !== null) {
    contents.S3Object = deserializeAws_json1_1S3Object(
      output.S3Object,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Sunglasses = (
  output: any,
  context: __SerdeContext
): Sunglasses => {
  let contents: any = {
    __type: "Sunglasses",
    Confidence: undefined,
    Value: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TestingData = (
  output: any,
  context: __SerdeContext
): TestingData => {
  let contents: any = {
    __type: "TestingData",
    Assets: undefined,
    AutoCreate: undefined
  };
  if (output.Assets !== undefined && output.Assets !== null) {
    contents.Assets = deserializeAws_json1_1Assets(output.Assets, context);
  }
  if (output.AutoCreate !== undefined && output.AutoCreate !== null) {
    contents.AutoCreate = output.AutoCreate;
  }
  return contents;
};

const deserializeAws_json1_1TestingDataResult = (
  output: any,
  context: __SerdeContext
): TestingDataResult => {
  let contents: any = {
    __type: "TestingDataResult",
    Input: undefined,
    Output: undefined
  };
  if (output.Input !== undefined && output.Input !== null) {
    contents.Input = deserializeAws_json1_1TestingData(output.Input, context);
  }
  if (output.Output !== undefined && output.Output !== null) {
    contents.Output = deserializeAws_json1_1TestingData(output.Output, context);
  }
  return contents;
};

const deserializeAws_json1_1TextDetection = (
  output: any,
  context: __SerdeContext
): TextDetection => {
  let contents: any = {
    __type: "TextDetection",
    Confidence: undefined,
    DetectedText: undefined,
    Geometry: undefined,
    Id: undefined,
    ParentId: undefined,
    Type: undefined
  };
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.DetectedText !== undefined && output.DetectedText !== null) {
    contents.DetectedText = output.DetectedText;
  }
  if (output.Geometry !== undefined && output.Geometry !== null) {
    contents.Geometry = deserializeAws_json1_1Geometry(
      output.Geometry,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.ParentId !== undefined && output.ParentId !== null) {
    contents.ParentId = output.ParentId;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1TextDetectionList = (
  output: any,
  context: __SerdeContext
): Array<TextDetection> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TextDetection(entry, context)
  );
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TrainingData = (
  output: any,
  context: __SerdeContext
): TrainingData => {
  let contents: any = {
    __type: "TrainingData",
    Assets: undefined
  };
  if (output.Assets !== undefined && output.Assets !== null) {
    contents.Assets = deserializeAws_json1_1Assets(output.Assets, context);
  }
  return contents;
};

const deserializeAws_json1_1TrainingDataResult = (
  output: any,
  context: __SerdeContext
): TrainingDataResult => {
  let contents: any = {
    __type: "TrainingDataResult",
    Input: undefined,
    Output: undefined
  };
  if (output.Input !== undefined && output.Input !== null) {
    contents.Input = deserializeAws_json1_1TrainingData(output.Input, context);
  }
  if (output.Output !== undefined && output.Output !== null) {
    contents.Output = deserializeAws_json1_1TrainingData(
      output.Output,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UnindexedFace = (
  output: any,
  context: __SerdeContext
): UnindexedFace => {
  let contents: any = {
    __type: "UnindexedFace",
    FaceDetail: undefined,
    Reasons: undefined
  };
  if (output.FaceDetail !== undefined && output.FaceDetail !== null) {
    contents.FaceDetail = deserializeAws_json1_1FaceDetail(
      output.FaceDetail,
      context
    );
  }
  if (output.Reasons !== undefined && output.Reasons !== null) {
    contents.Reasons = deserializeAws_json1_1Reasons(output.Reasons, context);
  }
  return contents;
};

const deserializeAws_json1_1UnindexedFaces = (
  output: any,
  context: __SerdeContext
): Array<UnindexedFace> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UnindexedFace(entry, context)
  );
};

const deserializeAws_json1_1Urls = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1VideoMetadata = (
  output: any,
  context: __SerdeContext
): VideoMetadata => {
  let contents: any = {
    __type: "VideoMetadata",
    Codec: undefined,
    DurationMillis: undefined,
    Format: undefined,
    FrameHeight: undefined,
    FrameRate: undefined,
    FrameWidth: undefined
  };
  if (output.Codec !== undefined && output.Codec !== null) {
    contents.Codec = output.Codec;
  }
  if (output.DurationMillis !== undefined && output.DurationMillis !== null) {
    contents.DurationMillis = output.DurationMillis;
  }
  if (output.Format !== undefined && output.Format !== null) {
    contents.Format = output.Format;
  }
  if (output.FrameHeight !== undefined && output.FrameHeight !== null) {
    contents.FrameHeight = output.FrameHeight;
  }
  if (output.FrameRate !== undefined && output.FrameRate !== null) {
    contents.FrameRate = output.FrameRate;
  }
  if (output.FrameWidth !== undefined && output.FrameWidth !== null) {
    contents.FrameWidth = output.FrameWidth;
  }
  return contents;
};

const deserializeAws_json1_1VideoTooLargeException = (
  output: any,
  context: __SerdeContext
): VideoTooLargeException => {
  let contents: any = {
    __type: "VideoTooLargeException",
    Code: undefined,
    Logref: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Logref !== undefined && output.Logref !== null) {
    contents.Logref = output.Logref;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
