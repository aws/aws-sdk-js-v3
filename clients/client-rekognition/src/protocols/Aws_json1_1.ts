// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CompareFacesCommandInput, CompareFacesCommandOutput } from "../commands/CompareFacesCommand";
import { CopyProjectVersionCommandInput, CopyProjectVersionCommandOutput } from "../commands/CopyProjectVersionCommand";
import { CreateCollectionCommandInput, CreateCollectionCommandOutput } from "../commands/CreateCollectionCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
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
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DeleteFacesCommandInput, DeleteFacesCommandOutput } from "../commands/DeleteFacesCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import {
  DeleteProjectPolicyCommandInput,
  DeleteProjectPolicyCommandOutput,
} from "../commands/DeleteProjectPolicyCommand";
import {
  DeleteProjectVersionCommandInput,
  DeleteProjectVersionCommandOutput,
} from "../commands/DeleteProjectVersionCommand";
import {
  DeleteStreamProcessorCommandInput,
  DeleteStreamProcessorCommandOutput,
} from "../commands/DeleteStreamProcessorCommand";
import { DescribeCollectionCommandInput, DescribeCollectionCommandOutput } from "../commands/DescribeCollectionCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import { DescribeProjectsCommandInput, DescribeProjectsCommandOutput } from "../commands/DescribeProjectsCommand";
import {
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
} from "../commands/DescribeProjectVersionsCommand";
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
import {
  DetectProtectiveEquipmentCommandInput,
  DetectProtectiveEquipmentCommandOutput,
} from "../commands/DetectProtectiveEquipmentCommand";
import { DetectTextCommandInput, DetectTextCommandOutput } from "../commands/DetectTextCommand";
import {
  DistributeDatasetEntriesCommandInput,
  DistributeDatasetEntriesCommandOutput,
} from "../commands/DistributeDatasetEntriesCommand";
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
import {
  GetSegmentDetectionCommandInput,
  GetSegmentDetectionCommandOutput,
} from "../commands/GetSegmentDetectionCommand";
import { GetTextDetectionCommandInput, GetTextDetectionCommandOutput } from "../commands/GetTextDetectionCommand";
import { IndexFacesCommandInput, IndexFacesCommandOutput } from "../commands/IndexFacesCommand";
import { ListCollectionsCommandInput, ListCollectionsCommandOutput } from "../commands/ListCollectionsCommand";
import { ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput } from "../commands/ListDatasetEntriesCommand";
import { ListDatasetLabelsCommandInput, ListDatasetLabelsCommandOutput } from "../commands/ListDatasetLabelsCommand";
import { ListFacesCommandInput, ListFacesCommandOutput } from "../commands/ListFacesCommand";
import {
  ListProjectPoliciesCommandInput,
  ListProjectPoliciesCommandOutput,
} from "../commands/ListProjectPoliciesCommand";
import {
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput,
} from "../commands/ListStreamProcessorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutProjectPolicyCommandInput, PutProjectPolicyCommandOutput } from "../commands/PutProjectPolicyCommand";
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
  StartSegmentDetectionCommandInput,
  StartSegmentDetectionCommandOutput,
} from "../commands/StartSegmentDetectionCommand";
import {
  StartStreamProcessorCommandInput,
  StartStreamProcessorCommandOutput,
} from "../commands/StartStreamProcessorCommand";
import { StartTextDetectionCommandInput, StartTextDetectionCommandOutput } from "../commands/StartTextDetectionCommand";
import { StopProjectVersionCommandInput, StopProjectVersionCommandOutput } from "../commands/StopProjectVersionCommand";
import {
  StopStreamProcessorCommandInput,
  StopStreamProcessorCommandOutput,
} from "../commands/StopStreamProcessorCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
} from "../commands/UpdateDatasetEntriesCommand";
import {
  UpdateStreamProcessorCommandInput,
  UpdateStreamProcessorCommandOutput,
} from "../commands/UpdateStreamProcessorCommand";
import {
  AccessDeniedException,
  AgeRange,
  Asset,
  Attribute,
  AudioMetadata,
  Beard,
  BlackFrame,
  BoundingBox,
  Celebrity,
  CelebrityDetail,
  CelebrityRecognition,
  ComparedFace,
  ComparedSourceImageFace,
  CompareFacesMatch,
  CompareFacesRequest,
  CompareFacesResponse,
  ConnectedHomeSettings,
  ConnectedHomeSettingsForUpdate,
  ContentClassifier,
  ContentModerationDetection,
  CopyProjectVersionRequest,
  CopyProjectVersionResponse,
  CoversBodyPart,
  CreateCollectionRequest,
  CreateCollectionResponse,
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateProjectRequest,
  CreateProjectResponse,
  CreateProjectVersionRequest,
  CreateProjectVersionResponse,
  CreateStreamProcessorRequest,
  CreateStreamProcessorResponse,
  CustomLabel,
  DatasetChanges,
  DatasetDescription,
  DatasetLabelDescription,
  DatasetLabelStats,
  DatasetMetadata,
  DatasetSource,
  DatasetStats,
  DeleteCollectionRequest,
  DeleteCollectionResponse,
  DeleteDatasetRequest,
  DeleteDatasetResponse,
  DeleteFacesRequest,
  DeleteFacesResponse,
  DeleteProjectPolicyRequest,
  DeleteProjectPolicyResponse,
  DeleteProjectRequest,
  DeleteProjectResponse,
  DeleteProjectVersionRequest,
  DeleteProjectVersionResponse,
  DeleteStreamProcessorRequest,
  DeleteStreamProcessorResponse,
  DescribeCollectionRequest,
  DescribeCollectionResponse,
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeProjectsRequest,
  DescribeProjectsResponse,
  DescribeProjectVersionsRequest,
  DescribeProjectVersionsResponse,
  DescribeStreamProcessorRequest,
  DescribeStreamProcessorResponse,
  DetectCustomLabelsRequest,
  DetectCustomLabelsResponse,
  DetectFacesRequest,
  DetectFacesResponse,
  DetectionFilter,
  DetectLabelsFeatureName,
  DetectLabelsImageBackground,
  DetectLabelsImageForeground,
  DetectLabelsImageProperties,
  DetectLabelsImagePropertiesSettings,
  DetectLabelsImageQuality,
  DetectLabelsRequest,
  DetectLabelsResponse,
  DetectLabelsSettings,
  DetectModerationLabelsRequest,
  DetectModerationLabelsResponse,
  DetectProtectiveEquipmentRequest,
  DetectProtectiveEquipmentResponse,
  DetectTextFilters,
  DetectTextRequest,
  DetectTextResponse,
  DistributeDataset,
  DistributeDatasetEntriesRequest,
  DistributeDatasetEntriesResponse,
  DominantColor,
  Emotion,
  EquipmentDetection,
  EvaluationResult,
  Eyeglasses,
  EyeOpen,
  Face,
  FaceDetail,
  FaceDetection,
  FaceMatch,
  FaceRecord,
  FaceSearchSettings,
  Gender,
  GeneralLabelsSettings,
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
  GetSegmentDetectionRequest,
  GetSegmentDetectionResponse,
  GetTextDetectionRequest,
  GetTextDetectionResponse,
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
  InvalidPolicyRevisionIdException,
  InvalidS3ObjectException,
  KinesisDataStream,
  KinesisVideoStream,
  KinesisVideoStreamStartSelector,
  KnownGender,
  Label,
  LabelAlias,
  LabelCategory,
  LabelDetection,
  LabelDetectionFeatureName,
  LabelDetectionSettings,
  Landmark,
  LimitExceededException,
  ListCollectionsRequest,
  ListCollectionsResponse,
  ListDatasetEntriesRequest,
  ListDatasetEntriesResponse,
  ListDatasetLabelsRequest,
  ListDatasetLabelsResponse,
  ListFacesRequest,
  ListFacesResponse,
  ListProjectPoliciesRequest,
  ListProjectPoliciesResponse,
  ListStreamProcessorsRequest,
  ListStreamProcessorsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MalformedPolicyDocumentException,
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
  ProjectPolicy,
  ProjectVersionDescription,
  ProtectiveEquipmentBodyPart,
  ProtectiveEquipmentPerson,
  ProtectiveEquipmentSummarizationAttributes,
  ProtectiveEquipmentSummary,
  ProtectiveEquipmentType,
  ProvisionedThroughputExceededException,
  PutProjectPolicyRequest,
  PutProjectPolicyResponse,
  Reason,
  RecognizeCelebritiesRequest,
  RecognizeCelebritiesResponse,
  RegionOfInterest,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  S3Destination,
  S3Object,
  SearchFacesByImageRequest,
  SearchFacesByImageResponse,
  SearchFacesRequest,
  SearchFacesResponse,
  SegmentDetection,
  SegmentType,
  SegmentTypeInfo,
  ServiceQuotaExceededException,
  ShotSegment,
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
  StartSegmentDetectionFilters,
  StartSegmentDetectionRequest,
  StartSegmentDetectionResponse,
  StartShotDetectionFilter,
  StartStreamProcessorRequest,
  StartStreamProcessorResponse,
  StartTechnicalCueDetectionFilter,
  StartTextDetectionFilters,
  StartTextDetectionRequest,
  StartTextDetectionResponse,
  StopProjectVersionRequest,
  StopProjectVersionResponse,
  StopStreamProcessorRequest,
  StopStreamProcessorResponse,
  StreamProcessingStartSelector,
  StreamProcessingStopSelector,
  StreamProcessor,
  StreamProcessorDataSharingPreference,
  StreamProcessorInput,
  StreamProcessorNotificationChannel,
  StreamProcessorOutput,
  StreamProcessorParameterToDelete,
  StreamProcessorSettings,
  StreamProcessorSettingsForUpdate,
  Summary,
  Sunglasses,
  TagResourceRequest,
  TagResourceResponse,
  TechnicalCueSegment,
  TestingData,
  TestingDataResult,
  TextDetection,
  TextDetectionResult,
  ThrottlingException,
  TrainingData,
  TrainingDataResult,
  UnindexedFace,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDatasetEntriesRequest,
  UpdateDatasetEntriesResponse,
  UpdateStreamProcessorRequest,
  UpdateStreamProcessorResponse,
  ValidationData,
  Video,
  VideoMetadata,
  VideoTooLargeException,
} from "../models/models_0";
import { RekognitionServiceException as __BaseException } from "../models/RekognitionServiceException";

export const serializeAws_json1_1CompareFacesCommand = async (
  input: CompareFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CompareFaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CompareFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CopyProjectVersionCommand = async (
  input: CopyProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CopyProjectVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopyProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCollectionCommand = async (
  input: CreateCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateCollection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateProject",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateProjectVersion",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateStreamProcessor",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteCollection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFacesCommand = async (
  input: DeleteFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteFaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProjectPolicyCommand = async (
  input: DeleteProjectPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteProjectPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProjectPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProjectVersionCommand = async (
  input: DeleteProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteProjectVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStreamProcessorCommand = async (
  input: DeleteStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteStreamProcessor",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DescribeCollection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DescribeDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProjectsCommand = async (
  input: DescribeProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DescribeProjects",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DescribeProjectVersions",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DescribeStreamProcessor",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectCustomLabels",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectFaces",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectLabels",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectModerationLabels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectModerationLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectProtectiveEquipmentCommand = async (
  input: DetectProtectiveEquipmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectProtectiveEquipment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectProtectiveEquipmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectTextCommand = async (
  input: DetectTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectText",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DistributeDatasetEntriesCommand = async (
  input: DistributeDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DistributeDatasetEntries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DistributeDatasetEntriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCelebrityInfoCommand = async (
  input: GetCelebrityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetCelebrityInfo",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetCelebrityRecognition",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetContentModeration",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetFaceDetection",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetFaceSearch",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetLabelDetection",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetPersonTracking",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPersonTrackingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSegmentDetectionCommand = async (
  input: GetSegmentDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetSegmentDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSegmentDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTextDetectionCommand = async (
  input: GetTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetTextDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTextDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1IndexFacesCommand = async (
  input: IndexFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.IndexFaces",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListCollections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCollectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetEntriesCommand = async (
  input: ListDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListDatasetEntries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatasetEntriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetLabelsCommand = async (
  input: ListDatasetLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListDatasetLabels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatasetLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFacesCommand = async (
  input: ListFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListFaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProjectPoliciesCommand = async (
  input: ListProjectPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListProjectPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProjectPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStreamProcessorsCommand = async (
  input: ListStreamProcessorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListStreamProcessors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStreamProcessorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutProjectPolicyCommand = async (
  input: PutProjectPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.PutProjectPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutProjectPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RecognizeCelebritiesCommand = async (
  input: RecognizeCelebritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.RecognizeCelebrities",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.SearchFaces",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.SearchFacesByImage",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartCelebrityRecognition",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartContentModeration",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartFaceDetection",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartFaceSearch",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartLabelDetection",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartPersonTracking",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartProjectVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartSegmentDetectionCommand = async (
  input: StartSegmentDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartSegmentDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartSegmentDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartStreamProcessorCommand = async (
  input: StartStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTextDetectionCommand = async (
  input: StartTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartTextDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTextDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopProjectVersionCommand = async (
  input: StopProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StopProjectVersion",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StopStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDatasetEntriesCommand = async (
  input: UpdateDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.UpdateDatasetEntries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDatasetEntriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateStreamProcessorCommand = async (
  input: UpdateStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.UpdateStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CompareFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompareFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CompareFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CompareFacesResponse(data, context);
  const response: CompareFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CopyProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyProjectVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CopyProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyProjectVersionResponse(data, context);
  const response: CopyProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopyProjectVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyProjectVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCollectionResponse(data, context);
  const response: CreateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.rekognition#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.rekognition#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectResponse(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectVersionResponse(data, context);
  const response: CreateProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStreamProcessorResponse(data, context);
  const response: CreateStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCollectionResponse(data, context);
  const response: DeleteCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDatasetResponse(data, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFacesResponse(data, context);
  const response: DeleteFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProjectResponse(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteProjectPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProjectPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProjectPolicyResponse(data, context);
  const response: DeleteProjectPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProjectPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidPolicyRevisionIdException":
    case "com.amazonaws.rekognition#InvalidPolicyRevisionIdException":
      throw await deserializeAws_json1_1InvalidPolicyRevisionIdExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProjectVersionResponse(data, context);
  const response: DeleteProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProjectVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteStreamProcessorResponse(data, context);
  const response: DeleteStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCollectionResponse(data, context);
  const response: DescribeCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProjectsResponse(data, context);
  const response: DescribeProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeProjectVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProjectVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProjectVersionsResponse(data, context);
  const response: DescribeProjectVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStreamProcessorResponse(data, context);
  const response: DescribeStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectCustomLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectCustomLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectCustomLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectCustomLabelsResponse(data, context);
  const response: DetectCustomLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.rekognition#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectFacesResponse(data, context);
  const response: DetectFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectLabelsResponse(data, context);
  const response: DetectLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectModerationLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectModerationLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectModerationLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectModerationLabelsResponse(data, context);
  const response: DetectModerationLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "HumanLoopQuotaExceededException":
    case "com.amazonaws.rekognition#HumanLoopQuotaExceededException":
      throw await deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectProtectiveEquipmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectProtectiveEquipmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectProtectiveEquipmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectProtectiveEquipmentResponse(data, context);
  const response: DetectProtectiveEquipmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectProtectiveEquipmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectProtectiveEquipmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectTextCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectTextResponse(data, context);
  const response: DetectTextCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DistributeDatasetEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DistributeDatasetEntriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DistributeDatasetEntriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DistributeDatasetEntriesResponse(data, context);
  const response: DistributeDatasetEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DistributeDatasetEntriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DistributeDatasetEntriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.rekognition#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetCelebrityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityInfoCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCelebrityInfoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCelebrityInfoResponse(data, context);
  const response: GetCelebrityInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetCelebrityRecognitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityRecognitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCelebrityRecognitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCelebrityRecognitionResponse(data, context);
  const response: GetCelebrityRecognitionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetContentModerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentModerationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContentModerationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContentModerationResponse(data, context);
  const response: GetContentModerationCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetFaceDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetFaceDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFaceDetectionResponse(data, context);
  const response: GetFaceDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetFaceSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceSearchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetFaceSearchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFaceSearchResponse(data, context);
  const response: GetFaceSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetLabelDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLabelDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLabelDetectionResponse(data, context);
  const response: GetLabelDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetPersonTrackingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonTrackingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPersonTrackingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPersonTrackingResponse(data, context);
  const response: GetPersonTrackingCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetSegmentDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSegmentDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSegmentDetectionResponse(data, context);
  const response: GetSegmentDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSegmentDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetTextDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTextDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTextDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTextDetectionResponse(data, context);
  const response: GetTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTextDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTextDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1IndexFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1IndexFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IndexFacesResponse(data, context);
  const response: IndexFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCollectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCollectionsResponse(data, context);
  const response: ListCollectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDatasetEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetEntriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatasetEntriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetEntriesResponse(data, context);
  const response: ListDatasetEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetEntriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetEntriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.rekognition#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDatasetLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatasetLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetLabelsResponse(data, context);
  const response: ListDatasetLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.rekognition#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFacesResponse(data, context);
  const response: ListFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListProjectPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProjectPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProjectPoliciesResponse(data, context);
  const response: ListProjectPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProjectPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListStreamProcessorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamProcessorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStreamProcessorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStreamProcessorsResponse(data, context);
  const response: ListStreamProcessorsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1PutProjectPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProjectPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutProjectPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutProjectPolicyResponse(data, context);
  const response: PutProjectPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutProjectPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProjectPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidPolicyRevisionIdException":
    case "com.amazonaws.rekognition#InvalidPolicyRevisionIdException":
      throw await deserializeAws_json1_1InvalidPolicyRevisionIdExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.rekognition#MalformedPolicyDocumentException":
      throw await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.rekognition#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1RecognizeCelebritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeCelebritiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RecognizeCelebritiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RecognizeCelebritiesResponse(data, context);
  const response: RecognizeCelebritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1SearchFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchFacesResponse(data, context);
  const response: SearchFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1SearchFacesByImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesByImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchFacesByImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchFacesByImageResponse(data, context);
  const response: SearchFacesByImageCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartCelebrityRecognitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCelebrityRecognitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartCelebrityRecognitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartCelebrityRecognitionResponse(data, context);
  const response: StartCelebrityRecognitionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartContentModerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentModerationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartContentModerationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartContentModerationResponse(data, context);
  const response: StartContentModerationCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartFaceDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartFaceDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartFaceDetectionResponse(data, context);
  const response: StartFaceDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartFaceSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceSearchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartFaceSearchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartFaceSearchResponse(data, context);
  const response: StartFaceSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartLabelDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLabelDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartLabelDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartLabelDetectionResponse(data, context);
  const response: StartLabelDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartPersonTrackingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPersonTrackingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartPersonTrackingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartPersonTrackingResponse(data, context);
  const response: StartPersonTrackingCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProjectVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartProjectVersionResponse(data, context);
  const response: StartProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartSegmentDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSegmentDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartSegmentDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSegmentDetectionResponse(data, context);
  const response: StartSegmentDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartSegmentDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSegmentDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartStreamProcessorResponse(data, context);
  const response: StartStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartTextDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartTextDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTextDetectionResponse(data, context);
  const response: StartTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTextDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProjectVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopProjectVersionResponse(data, context);
  const response: StopProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopStreamProcessorResponse(data, context);
  const response: StopStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateDatasetEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetEntriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDatasetEntriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDatasetEntriesResponse(data, context);
  const response: UpdateDatasetEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDatasetEntriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetEntriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateStreamProcessorResponse(data, context);
  const response: UpdateStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateStreamProcessorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamProcessorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HumanLoopQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HumanLoopQuotaExceededException(body, context);
  const exception = new HumanLoopQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ImageTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageTooLargeException(body, context);
  const exception = new ImageTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidImageFormatExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImageFormatException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidImageFormatException(body, context);
  const exception = new InvalidImageFormatException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPaginationTokenException(body, context);
  const exception = new InvalidPaginationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPolicyRevisionIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyRevisionIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPolicyRevisionIdException(body, context);
  const exception = new InvalidPolicyRevisionIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidS3ObjectExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3ObjectException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3ObjectException(body, context);
  const exception = new InvalidS3ObjectException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotReadyException(body, context);
  const exception = new ResourceNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1VideoTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VideoTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1VideoTooLargeException(body, context);
  const exception = new VideoTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1Asset = (input: Asset, context: __SerdeContext): any => {
  return {
    ...(input.GroundTruthManifest != null && {
      GroundTruthManifest: serializeAws_json1_1GroundTruthManifest(input.GroundTruthManifest, context),
    }),
  };
};

const serializeAws_json1_1Assets = (input: Asset[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Asset(entry, context);
    });
};

const serializeAws_json1_1Attributes = (input: (Attribute | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1BlackFrame = (input: BlackFrame, context: __SerdeContext): any => {
  return {
    ...(input.MaxPixelThreshold != null && { MaxPixelThreshold: __serializeFloat(input.MaxPixelThreshold) }),
    ...(input.MinCoveragePercentage != null && {
      MinCoveragePercentage: __serializeFloat(input.MinCoveragePercentage),
    }),
  };
};

const serializeAws_json1_1BoundingBox = (input: BoundingBox, context: __SerdeContext): any => {
  return {
    ...(input.Height != null && { Height: __serializeFloat(input.Height) }),
    ...(input.Left != null && { Left: __serializeFloat(input.Left) }),
    ...(input.Top != null && { Top: __serializeFloat(input.Top) }),
    ...(input.Width != null && { Width: __serializeFloat(input.Width) }),
  };
};

const serializeAws_json1_1CompareFacesRequest = (input: CompareFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.QualityFilter != null && { QualityFilter: input.QualityFilter }),
    ...(input.SimilarityThreshold != null && { SimilarityThreshold: __serializeFloat(input.SimilarityThreshold) }),
    ...(input.SourceImage != null && { SourceImage: serializeAws_json1_1Image(input.SourceImage, context) }),
    ...(input.TargetImage != null && { TargetImage: serializeAws_json1_1Image(input.TargetImage, context) }),
  };
};

const serializeAws_json1_1ConnectedHomeLabels = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConnectedHomeSettings = (input: ConnectedHomeSettings, context: __SerdeContext): any => {
  return {
    ...(input.Labels != null && { Labels: serializeAws_json1_1ConnectedHomeLabels(input.Labels, context) }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
  };
};

const serializeAws_json1_1ConnectedHomeSettingsForUpdate = (
  input: ConnectedHomeSettingsForUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Labels != null && { Labels: serializeAws_json1_1ConnectedHomeLabels(input.Labels, context) }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
  };
};

const serializeAws_json1_1ContentClassifiers = (
  input: (ContentClassifier | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CopyProjectVersionRequest = (
  input: CopyProjectVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationProjectArn != null && { DestinationProjectArn: input.DestinationProjectArn }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.OutputConfig != null && { OutputConfig: serializeAws_json1_1OutputConfig(input.OutputConfig, context) }),
    ...(input.SourceProjectArn != null && { SourceProjectArn: input.SourceProjectArn }),
    ...(input.SourceProjectVersionArn != null && { SourceProjectVersionArn: input.SourceProjectVersionArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagMap(input.Tags, context) }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1CreateCollectionRequest = (input: CreateCollectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetSource != null && {
      DatasetSource: serializeAws_json1_1DatasetSource(input.DatasetSource, context),
    }),
    ...(input.DatasetType != null && { DatasetType: input.DatasetType }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
  };
};

const serializeAws_json1_1CreateProjectRequest = (input: CreateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProjectName != null && { ProjectName: input.ProjectName }),
  };
};

const serializeAws_json1_1CreateProjectVersionRequest = (
  input: CreateProjectVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.OutputConfig != null && { OutputConfig: serializeAws_json1_1OutputConfig(input.OutputConfig, context) }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagMap(input.Tags, context) }),
    ...(input.TestingData != null && { TestingData: serializeAws_json1_1TestingData(input.TestingData, context) }),
    ...(input.TrainingData != null && { TrainingData: serializeAws_json1_1TrainingData(input.TrainingData, context) }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1CreateStreamProcessorRequest = (
  input: CreateStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSharingPreference != null && {
      DataSharingPreference: serializeAws_json1_1StreamProcessorDataSharingPreference(
        input.DataSharingPreference,
        context
      ),
    }),
    ...(input.Input != null && { Input: serializeAws_json1_1StreamProcessorInput(input.Input, context) }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: serializeAws_json1_1StreamProcessorNotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Output != null && { Output: serializeAws_json1_1StreamProcessorOutput(input.Output, context) }),
    ...(input.RegionsOfInterest != null && {
      RegionsOfInterest: serializeAws_json1_1RegionsOfInterest(input.RegionsOfInterest, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Settings != null && { Settings: serializeAws_json1_1StreamProcessorSettings(input.Settings, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1DatasetChanges = (input: DatasetChanges, context: __SerdeContext): any => {
  return {
    ...(input.GroundTruth != null && { GroundTruth: context.base64Encoder(input.GroundTruth) }),
  };
};

const serializeAws_json1_1DatasetLabels = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DatasetSource = (input: DatasetSource, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
    ...(input.GroundTruthManifest != null && {
      GroundTruthManifest: serializeAws_json1_1GroundTruthManifest(input.GroundTruthManifest, context),
    }),
  };
};

const serializeAws_json1_1DeleteCollectionRequest = (input: DeleteCollectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
  };
};

const serializeAws_json1_1DeleteDatasetRequest = (input: DeleteDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
  };
};

const serializeAws_json1_1DeleteFacesRequest = (input: DeleteFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.FaceIds != null && { FaceIds: serializeAws_json1_1FaceIdList(input.FaceIds, context) }),
  };
};

const serializeAws_json1_1DeleteProjectPolicyRequest = (
  input: DeleteProjectPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.PolicyRevisionId != null && { PolicyRevisionId: input.PolicyRevisionId }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
  };
};

const serializeAws_json1_1DeleteProjectRequest = (input: DeleteProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
  };
};

const serializeAws_json1_1DeleteProjectVersionRequest = (
  input: DeleteProjectVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProjectVersionArn != null && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

const serializeAws_json1_1DeleteStreamProcessorRequest = (
  input: DeleteStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeCollectionRequest = (
  input: DescribeCollectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
  };
};

const serializeAws_json1_1DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
  };
};

const serializeAws_json1_1DescribeProjectsRequest = (input: DescribeProjectsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProjectNames != null && { ProjectNames: serializeAws_json1_1ProjectNames(input.ProjectNames, context) }),
  };
};

const serializeAws_json1_1DescribeProjectVersionsRequest = (
  input: DescribeProjectVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
    ...(input.VersionNames != null && { VersionNames: serializeAws_json1_1VersionNames(input.VersionNames, context) }),
  };
};

const serializeAws_json1_1DescribeStreamProcessorRequest = (
  input: DescribeStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DetectCustomLabelsRequest = (
  input: DetectCustomLabelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Image != null && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
    ...(input.ProjectVersionArn != null && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

const serializeAws_json1_1DetectFacesRequest = (input: DetectFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: serializeAws_json1_1Attributes(input.Attributes, context) }),
    ...(input.Image != null && { Image: serializeAws_json1_1Image(input.Image, context) }),
  };
};

const serializeAws_json1_1DetectionFilter = (input: DetectionFilter, context: __SerdeContext): any => {
  return {
    ...(input.MinBoundingBoxHeight != null && { MinBoundingBoxHeight: __serializeFloat(input.MinBoundingBoxHeight) }),
    ...(input.MinBoundingBoxWidth != null && { MinBoundingBoxWidth: __serializeFloat(input.MinBoundingBoxWidth) }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
  };
};

const serializeAws_json1_1DetectLabelsFeatureList = (
  input: (DetectLabelsFeatureName | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DetectLabelsImagePropertiesSettings = (
  input: DetectLabelsImagePropertiesSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxDominantColors != null && { MaxDominantColors: input.MaxDominantColors }),
  };
};

const serializeAws_json1_1DetectLabelsRequest = (input: DetectLabelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Features != null && { Features: serializeAws_json1_1DetectLabelsFeatureList(input.Features, context) }),
    ...(input.Image != null && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.MaxLabels != null && { MaxLabels: input.MaxLabels }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
    ...(input.Settings != null && { Settings: serializeAws_json1_1DetectLabelsSettings(input.Settings, context) }),
  };
};

const serializeAws_json1_1DetectLabelsSettings = (input: DetectLabelsSettings, context: __SerdeContext): any => {
  return {
    ...(input.GeneralLabels != null && {
      GeneralLabels: serializeAws_json1_1GeneralLabelsSettings(input.GeneralLabels, context),
    }),
    ...(input.ImageProperties != null && {
      ImageProperties: serializeAws_json1_1DetectLabelsImagePropertiesSettings(input.ImageProperties, context),
    }),
  };
};

const serializeAws_json1_1DetectModerationLabelsRequest = (
  input: DetectModerationLabelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HumanLoopConfig != null && {
      HumanLoopConfig: serializeAws_json1_1HumanLoopConfig(input.HumanLoopConfig, context),
    }),
    ...(input.Image != null && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
  };
};

const serializeAws_json1_1DetectProtectiveEquipmentRequest = (
  input: DetectProtectiveEquipmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Image != null && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.SummarizationAttributes != null && {
      SummarizationAttributes: serializeAws_json1_1ProtectiveEquipmentSummarizationAttributes(
        input.SummarizationAttributes,
        context
      ),
    }),
  };
};

const serializeAws_json1_1DetectTextFilters = (input: DetectTextFilters, context: __SerdeContext): any => {
  return {
    ...(input.RegionsOfInterest != null && {
      RegionsOfInterest: serializeAws_json1_1RegionsOfInterest(input.RegionsOfInterest, context),
    }),
    ...(input.WordFilter != null && { WordFilter: serializeAws_json1_1DetectionFilter(input.WordFilter, context) }),
  };
};

const serializeAws_json1_1DetectTextRequest = (input: DetectTextRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1DetectTextFilters(input.Filters, context) }),
    ...(input.Image != null && { Image: serializeAws_json1_1Image(input.Image, context) }),
  };
};

const serializeAws_json1_1DistributeDataset = (input: DistributeDataset, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

const serializeAws_json1_1DistributeDatasetEntriesRequest = (
  input: DistributeDatasetEntriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Datasets != null && {
      Datasets: serializeAws_json1_1DistributeDatasetMetadataList(input.Datasets, context),
    }),
  };
};

const serializeAws_json1_1DistributeDatasetMetadataList = (
  input: DistributeDataset[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DistributeDataset(entry, context);
    });
};

const serializeAws_json1_1FaceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1FaceSearchSettings = (input: FaceSearchSettings, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.FaceMatchThreshold != null && { FaceMatchThreshold: __serializeFloat(input.FaceMatchThreshold) }),
  };
};

const serializeAws_json1_1GeneralLabelsFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GeneralLabelsSettings = (input: GeneralLabelsSettings, context: __SerdeContext): any => {
  return {
    ...(input.LabelCategoryExclusionFilters != null && {
      LabelCategoryExclusionFilters: serializeAws_json1_1GeneralLabelsFilterList(
        input.LabelCategoryExclusionFilters,
        context
      ),
    }),
    ...(input.LabelCategoryInclusionFilters != null && {
      LabelCategoryInclusionFilters: serializeAws_json1_1GeneralLabelsFilterList(
        input.LabelCategoryInclusionFilters,
        context
      ),
    }),
    ...(input.LabelExclusionFilters != null && {
      LabelExclusionFilters: serializeAws_json1_1GeneralLabelsFilterList(input.LabelExclusionFilters, context),
    }),
    ...(input.LabelInclusionFilters != null && {
      LabelInclusionFilters: serializeAws_json1_1GeneralLabelsFilterList(input.LabelInclusionFilters, context),
    }),
  };
};

const serializeAws_json1_1GetCelebrityInfoRequest = (input: GetCelebrityInfoRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1GetCelebrityRecognitionRequest = (
  input: GetCelebrityRecognitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
  };
};

const serializeAws_json1_1GetContentModerationRequest = (
  input: GetContentModerationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
  };
};

const serializeAws_json1_1GetFaceDetectionRequest = (input: GetFaceDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetFaceSearchRequest = (input: GetFaceSearchRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
  };
};

const serializeAws_json1_1GetLabelDetectionRequest = (
  input: GetLabelDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AggregateBy != null && { AggregateBy: input.AggregateBy }),
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
  };
};

const serializeAws_json1_1GetPersonTrackingRequest = (
  input: GetPersonTrackingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
  };
};

const serializeAws_json1_1GetSegmentDetectionRequest = (
  input: GetSegmentDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetTextDetectionRequest = (input: GetTextDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GroundTruthManifest = (input: GroundTruthManifest, context: __SerdeContext): any => {
  return {
    ...(input.S3Object != null && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const serializeAws_json1_1HumanLoopConfig = (input: HumanLoopConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataAttributes != null && {
      DataAttributes: serializeAws_json1_1HumanLoopDataAttributes(input.DataAttributes, context),
    }),
    ...(input.FlowDefinitionArn != null && { FlowDefinitionArn: input.FlowDefinitionArn }),
    ...(input.HumanLoopName != null && { HumanLoopName: input.HumanLoopName }),
  };
};

const serializeAws_json1_1HumanLoopDataAttributes = (input: HumanLoopDataAttributes, context: __SerdeContext): any => {
  return {
    ...(input.ContentClassifiers != null && {
      ContentClassifiers: serializeAws_json1_1ContentClassifiers(input.ContentClassifiers, context),
    }),
  };
};

const serializeAws_json1_1Image = (input: Image, context: __SerdeContext): any => {
  return {
    ...(input.Bytes != null && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.S3Object != null && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const serializeAws_json1_1IndexFacesRequest = (input: IndexFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.DetectionAttributes != null && {
      DetectionAttributes: serializeAws_json1_1Attributes(input.DetectionAttributes, context),
    }),
    ...(input.ExternalImageId != null && { ExternalImageId: input.ExternalImageId }),
    ...(input.Image != null && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.MaxFaces != null && { MaxFaces: input.MaxFaces }),
    ...(input.QualityFilter != null && { QualityFilter: input.QualityFilter }),
  };
};

const serializeAws_json1_1KinesisDataStream = (input: KinesisDataStream, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

const serializeAws_json1_1KinesisVideoStream = (input: KinesisVideoStream, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

const serializeAws_json1_1KinesisVideoStreamStartSelector = (
  input: KinesisVideoStreamStartSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.FragmentNumber != null && { FragmentNumber: input.FragmentNumber }),
    ...(input.ProducerTimestamp != null && { ProducerTimestamp: input.ProducerTimestamp }),
  };
};

const serializeAws_json1_1LabelDetectionFeatureList = (
  input: (LabelDetectionFeatureName | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1LabelDetectionSettings = (input: LabelDetectionSettings, context: __SerdeContext): any => {
  return {
    ...(input.GeneralLabels != null && {
      GeneralLabels: serializeAws_json1_1GeneralLabelsSettings(input.GeneralLabels, context),
    }),
  };
};

const serializeAws_json1_1ListCollectionsRequest = (input: ListCollectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDatasetEntriesRequest = (
  input: ListDatasetEntriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainsLabels != null && {
      ContainsLabels: serializeAws_json1_1DatasetLabels(input.ContainsLabels, context),
    }),
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
    ...(input.HasErrors != null && { HasErrors: input.HasErrors }),
    ...(input.Labeled != null && { Labeled: input.Labeled }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SourceRefContains != null && { SourceRefContains: input.SourceRefContains }),
  };
};

const serializeAws_json1_1ListDatasetLabelsRequest = (
  input: ListDatasetLabelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListFacesRequest = (input: ListFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListProjectPoliciesRequest = (
  input: ListProjectPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
  };
};

const serializeAws_json1_1ListStreamProcessorsRequest = (
  input: ListStreamProcessorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1NotificationChannel = (input: NotificationChannel, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SNSTopicArn != null && { SNSTopicArn: input.SNSTopicArn }),
  };
};

const serializeAws_json1_1OutputConfig = (input: OutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

const serializeAws_json1_1Point = (input: Point, context: __SerdeContext): any => {
  return {
    ...(input.X != null && { X: __serializeFloat(input.X) }),
    ...(input.Y != null && { Y: __serializeFloat(input.Y) }),
  };
};

const serializeAws_json1_1Polygon = (input: Point[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Point(entry, context);
    });
};

const serializeAws_json1_1ProjectNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ProtectiveEquipmentSummarizationAttributes = (
  input: ProtectiveEquipmentSummarizationAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
    ...(input.RequiredEquipmentTypes != null && {
      RequiredEquipmentTypes: serializeAws_json1_1ProtectiveEquipmentTypes(input.RequiredEquipmentTypes, context),
    }),
  };
};

const serializeAws_json1_1ProtectiveEquipmentTypes = (
  input: (ProtectiveEquipmentType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PutProjectPolicyRequest = (input: PutProjectPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyDocument != null && { PolicyDocument: input.PolicyDocument }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.PolicyRevisionId != null && { PolicyRevisionId: input.PolicyRevisionId }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
  };
};

const serializeAws_json1_1RecognizeCelebritiesRequest = (
  input: RecognizeCelebritiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Image != null && { Image: serializeAws_json1_1Image(input.Image, context) }),
  };
};

const serializeAws_json1_1RegionOfInterest = (input: RegionOfInterest, context: __SerdeContext): any => {
  return {
    ...(input.BoundingBox != null && { BoundingBox: serializeAws_json1_1BoundingBox(input.BoundingBox, context) }),
    ...(input.Polygon != null && { Polygon: serializeAws_json1_1Polygon(input.Polygon, context) }),
  };
};

const serializeAws_json1_1RegionsOfInterest = (input: RegionOfInterest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RegionOfInterest(entry, context);
    });
};

const serializeAws_json1_1S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.KeyPrefix != null && { KeyPrefix: input.KeyPrefix }),
  };
};

const serializeAws_json1_1S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1SearchFacesByImageRequest = (
  input: SearchFacesByImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.FaceMatchThreshold != null && { FaceMatchThreshold: __serializeFloat(input.FaceMatchThreshold) }),
    ...(input.Image != null && { Image: serializeAws_json1_1Image(input.Image, context) }),
    ...(input.MaxFaces != null && { MaxFaces: input.MaxFaces }),
    ...(input.QualityFilter != null && { QualityFilter: input.QualityFilter }),
  };
};

const serializeAws_json1_1SearchFacesRequest = (input: SearchFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.FaceId != null && { FaceId: input.FaceId }),
    ...(input.FaceMatchThreshold != null && { FaceMatchThreshold: __serializeFloat(input.FaceMatchThreshold) }),
    ...(input.MaxFaces != null && { MaxFaces: input.MaxFaces }),
  };
};

const serializeAws_json1_1SegmentTypes = (input: (SegmentType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StartCelebrityRecognitionRequest = (
  input: StartCelebrityRecognitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartContentModerationRequest = (
  input: StartContentModerationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartFaceDetectionRequest = (
  input: StartFaceDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.FaceAttributes != null && { FaceAttributes: input.FaceAttributes }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartFaceSearchRequest = (input: StartFaceSearchRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.FaceMatchThreshold != null && { FaceMatchThreshold: __serializeFloat(input.FaceMatchThreshold) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartLabelDetectionRequest = (
  input: StartLabelDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Features != null && { Features: serializeAws_json1_1LabelDetectionFeatureList(input.Features, context) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Settings != null && { Settings: serializeAws_json1_1LabelDetectionSettings(input.Settings, context) }),
    ...(input.Video != null && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartPersonTrackingRequest = (
  input: StartPersonTrackingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartProjectVersionRequest = (
  input: StartProjectVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxInferenceUnits != null && { MaxInferenceUnits: input.MaxInferenceUnits }),
    ...(input.MinInferenceUnits != null && { MinInferenceUnits: input.MinInferenceUnits }),
    ...(input.ProjectVersionArn != null && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

const serializeAws_json1_1StartSegmentDetectionFilters = (
  input: StartSegmentDetectionFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ShotFilter != null && {
      ShotFilter: serializeAws_json1_1StartShotDetectionFilter(input.ShotFilter, context),
    }),
    ...(input.TechnicalCueFilter != null && {
      TechnicalCueFilter: serializeAws_json1_1StartTechnicalCueDetectionFilter(input.TechnicalCueFilter, context),
    }),
  };
};

const serializeAws_json1_1StartSegmentDetectionRequest = (
  input: StartSegmentDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1StartSegmentDetectionFilters(input.Filters, context) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.SegmentTypes != null && { SegmentTypes: serializeAws_json1_1SegmentTypes(input.SegmentTypes, context) }),
    ...(input.Video != null && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StartShotDetectionFilter = (
  input: StartShotDetectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.MinSegmentConfidence != null && { MinSegmentConfidence: __serializeFloat(input.MinSegmentConfidence) }),
  };
};

const serializeAws_json1_1StartStreamProcessorRequest = (
  input: StartStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StartSelector != null && {
      StartSelector: serializeAws_json1_1StreamProcessingStartSelector(input.StartSelector, context),
    }),
    ...(input.StopSelector != null && {
      StopSelector: serializeAws_json1_1StreamProcessingStopSelector(input.StopSelector, context),
    }),
  };
};

const serializeAws_json1_1StartTechnicalCueDetectionFilter = (
  input: StartTechnicalCueDetectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlackFrame != null && { BlackFrame: serializeAws_json1_1BlackFrame(input.BlackFrame, context) }),
    ...(input.MinSegmentConfidence != null && { MinSegmentConfidence: __serializeFloat(input.MinSegmentConfidence) }),
  };
};

const serializeAws_json1_1StartTextDetectionFilters = (
  input: StartTextDetectionFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegionsOfInterest != null && {
      RegionsOfInterest: serializeAws_json1_1RegionsOfInterest(input.RegionsOfInterest, context),
    }),
    ...(input.WordFilter != null && { WordFilter: serializeAws_json1_1DetectionFilter(input.WordFilter, context) }),
  };
};

const serializeAws_json1_1StartTextDetectionRequest = (
  input: StartTextDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1StartTextDetectionFilters(input.Filters, context) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: serializeAws_json1_1Video(input.Video, context) }),
  };
};

const serializeAws_json1_1StopProjectVersionRequest = (
  input: StopProjectVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProjectVersionArn != null && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

const serializeAws_json1_1StopStreamProcessorRequest = (
  input: StopStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StreamProcessingStartSelector = (
  input: StreamProcessingStartSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.KVSStreamStartSelector != null && {
      KVSStreamStartSelector: serializeAws_json1_1KinesisVideoStreamStartSelector(
        input.KVSStreamStartSelector,
        context
      ),
    }),
  };
};

const serializeAws_json1_1StreamProcessingStopSelector = (
  input: StreamProcessingStopSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxDurationInSeconds != null && { MaxDurationInSeconds: input.MaxDurationInSeconds }),
  };
};

const serializeAws_json1_1StreamProcessorDataSharingPreference = (
  input: StreamProcessorDataSharingPreference,
  context: __SerdeContext
): any => {
  return {
    ...(input.OptIn != null && { OptIn: input.OptIn }),
  };
};

const serializeAws_json1_1StreamProcessorInput = (input: StreamProcessorInput, context: __SerdeContext): any => {
  return {
    ...(input.KinesisVideoStream != null && {
      KinesisVideoStream: serializeAws_json1_1KinesisVideoStream(input.KinesisVideoStream, context),
    }),
  };
};

const serializeAws_json1_1StreamProcessorNotificationChannel = (
  input: StreamProcessorNotificationChannel,
  context: __SerdeContext
): any => {
  return {
    ...(input.SNSTopicArn != null && { SNSTopicArn: input.SNSTopicArn }),
  };
};

const serializeAws_json1_1StreamProcessorOutput = (input: StreamProcessorOutput, context: __SerdeContext): any => {
  return {
    ...(input.KinesisDataStream != null && {
      KinesisDataStream: serializeAws_json1_1KinesisDataStream(input.KinesisDataStream, context),
    }),
    ...(input.S3Destination != null && {
      S3Destination: serializeAws_json1_1S3Destination(input.S3Destination, context),
    }),
  };
};

const serializeAws_json1_1StreamProcessorParametersToDelete = (
  input: (StreamProcessorParameterToDelete | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StreamProcessorSettings = (input: StreamProcessorSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConnectedHome != null && {
      ConnectedHome: serializeAws_json1_1ConnectedHomeSettings(input.ConnectedHome, context),
    }),
    ...(input.FaceSearch != null && { FaceSearch: serializeAws_json1_1FaceSearchSettings(input.FaceSearch, context) }),
  };
};

const serializeAws_json1_1StreamProcessorSettingsForUpdate = (
  input: StreamProcessorSettingsForUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectedHomeForUpdate != null && {
      ConnectedHomeForUpdate: serializeAws_json1_1ConnectedHomeSettingsForUpdate(input.ConnectedHomeForUpdate, context),
    }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1TestingData = (input: TestingData, context: __SerdeContext): any => {
  return {
    ...(input.Assets != null && { Assets: serializeAws_json1_1Assets(input.Assets, context) }),
    ...(input.AutoCreate != null && { AutoCreate: input.AutoCreate }),
  };
};

const serializeAws_json1_1TrainingData = (input: TrainingData, context: __SerdeContext): any => {
  return {
    ...(input.Assets != null && { Assets: serializeAws_json1_1Assets(input.Assets, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDatasetEntriesRequest = (
  input: UpdateDatasetEntriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Changes != null && { Changes: serializeAws_json1_1DatasetChanges(input.Changes, context) }),
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
  };
};

const serializeAws_json1_1UpdateStreamProcessorRequest = (
  input: UpdateStreamProcessorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSharingPreferenceForUpdate != null && {
      DataSharingPreferenceForUpdate: serializeAws_json1_1StreamProcessorDataSharingPreference(
        input.DataSharingPreferenceForUpdate,
        context
      ),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParametersToDelete != null && {
      ParametersToDelete: serializeAws_json1_1StreamProcessorParametersToDelete(input.ParametersToDelete, context),
    }),
    ...(input.RegionsOfInterestForUpdate != null && {
      RegionsOfInterestForUpdate: serializeAws_json1_1RegionsOfInterest(input.RegionsOfInterestForUpdate, context),
    }),
    ...(input.SettingsForUpdate != null && {
      SettingsForUpdate: serializeAws_json1_1StreamProcessorSettingsForUpdate(input.SettingsForUpdate, context),
    }),
  };
};

const serializeAws_json1_1VersionNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Video = (input: Video, context: __SerdeContext): any => {
  return {
    ...(input.S3Object != null && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AgeRange = (output: any, context: __SerdeContext): AgeRange => {
  return {
    High: __expectInt32(output.High),
    Low: __expectInt32(output.Low),
  } as any;
};

const deserializeAws_json1_1Asset = (output: any, context: __SerdeContext): Asset => {
  return {
    GroundTruthManifest:
      output.GroundTruthManifest != null
        ? deserializeAws_json1_1GroundTruthManifest(output.GroundTruthManifest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Assets = (output: any, context: __SerdeContext): Asset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Asset(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AudioMetadata = (output: any, context: __SerdeContext): AudioMetadata => {
  return {
    Codec: __expectString(output.Codec),
    DurationMillis: __expectLong(output.DurationMillis),
    NumberOfChannels: __expectLong(output.NumberOfChannels),
    SampleRate: __expectLong(output.SampleRate),
  } as any;
};

const deserializeAws_json1_1AudioMetadataList = (output: any, context: __SerdeContext): AudioMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AudioMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Beard = (output: any, context: __SerdeContext): Beard => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

const deserializeAws_json1_1BodyParts = (output: any, context: __SerdeContext): ProtectiveEquipmentBodyPart[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProtectiveEquipmentBodyPart(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return {
    Height: __limitedParseFloat32(output.Height),
    Left: __limitedParseFloat32(output.Left),
    Top: __limitedParseFloat32(output.Top),
    Width: __limitedParseFloat32(output.Width),
  } as any;
};

const deserializeAws_json1_1Celebrity = (output: any, context: __SerdeContext): Celebrity => {
  return {
    Face: output.Face != null ? deserializeAws_json1_1ComparedFace(output.Face, context) : undefined,
    Id: __expectString(output.Id),
    KnownGender:
      output.KnownGender != null ? deserializeAws_json1_1KnownGender(output.KnownGender, context) : undefined,
    MatchConfidence: __limitedParseFloat32(output.MatchConfidence),
    Name: __expectString(output.Name),
    Urls: output.Urls != null ? deserializeAws_json1_1Urls(output.Urls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CelebrityDetail = (output: any, context: __SerdeContext): CelebrityDetail => {
  return {
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    Face: output.Face != null ? deserializeAws_json1_1FaceDetail(output.Face, context) : undefined,
    Id: __expectString(output.Id),
    KnownGender:
      output.KnownGender != null ? deserializeAws_json1_1KnownGender(output.KnownGender, context) : undefined,
    Name: __expectString(output.Name),
    Urls: output.Urls != null ? deserializeAws_json1_1Urls(output.Urls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CelebrityList = (output: any, context: __SerdeContext): Celebrity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Celebrity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CelebrityRecognition = (output: any, context: __SerdeContext): CelebrityRecognition => {
  return {
    Celebrity: output.Celebrity != null ? deserializeAws_json1_1CelebrityDetail(output.Celebrity, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

const deserializeAws_json1_1CelebrityRecognitions = (output: any, context: __SerdeContext): CelebrityRecognition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CelebrityRecognition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CollectionIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1ComparedFace = (output: any, context: __SerdeContext): ComparedFace => {
  return {
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    Emotions: output.Emotions != null ? deserializeAws_json1_1Emotions(output.Emotions, context) : undefined,
    Landmarks: output.Landmarks != null ? deserializeAws_json1_1Landmarks(output.Landmarks, context) : undefined,
    Pose: output.Pose != null ? deserializeAws_json1_1Pose(output.Pose, context) : undefined,
    Quality: output.Quality != null ? deserializeAws_json1_1ImageQuality(output.Quality, context) : undefined,
    Smile: output.Smile != null ? deserializeAws_json1_1Smile(output.Smile, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ComparedFaceList = (output: any, context: __SerdeContext): ComparedFace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ComparedFace(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ComparedSourceImageFace = (
  output: any,
  context: __SerdeContext
): ComparedSourceImageFace => {
  return {
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
  } as any;
};

const deserializeAws_json1_1CompareFacesMatch = (output: any, context: __SerdeContext): CompareFacesMatch => {
  return {
    Face: output.Face != null ? deserializeAws_json1_1ComparedFace(output.Face, context) : undefined,
    Similarity: __limitedParseFloat32(output.Similarity),
  } as any;
};

const deserializeAws_json1_1CompareFacesMatchList = (output: any, context: __SerdeContext): CompareFacesMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CompareFacesMatch(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CompareFacesResponse = (output: any, context: __SerdeContext): CompareFacesResponse => {
  return {
    FaceMatches:
      output.FaceMatches != null ? deserializeAws_json1_1CompareFacesMatchList(output.FaceMatches, context) : undefined,
    SourceImageFace:
      output.SourceImageFace != null
        ? deserializeAws_json1_1ComparedSourceImageFace(output.SourceImageFace, context)
        : undefined,
    SourceImageOrientationCorrection: __expectString(output.SourceImageOrientationCorrection),
    TargetImageOrientationCorrection: __expectString(output.TargetImageOrientationCorrection),
    UnmatchedFaces:
      output.UnmatchedFaces != null
        ? deserializeAws_json1_1CompareFacesUnmatchList(output.UnmatchedFaces, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CompareFacesUnmatchList = (output: any, context: __SerdeContext): ComparedFace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ComparedFace(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConnectedHomeLabels = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1ConnectedHomeSettings = (output: any, context: __SerdeContext): ConnectedHomeSettings => {
  return {
    Labels: output.Labels != null ? deserializeAws_json1_1ConnectedHomeLabels(output.Labels, context) : undefined,
    MinConfidence: __limitedParseFloat32(output.MinConfidence),
  } as any;
};

const deserializeAws_json1_1ContentModerationDetection = (
  output: any,
  context: __SerdeContext
): ContentModerationDetection => {
  return {
    ModerationLabel:
      output.ModerationLabel != null
        ? deserializeAws_json1_1ModerationLabel(output.ModerationLabel, context)
        : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

const deserializeAws_json1_1ContentModerationDetections = (
  output: any,
  context: __SerdeContext
): ContentModerationDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContentModerationDetection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CopyProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): CopyProjectVersionResponse => {
  return {
    ProjectVersionArn: __expectString(output.ProjectVersionArn),
  } as any;
};

const deserializeAws_json1_1CoversBodyPart = (output: any, context: __SerdeContext): CoversBodyPart => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

const deserializeAws_json1_1CreateCollectionResponse = (
  output: any,
  context: __SerdeContext
): CreateCollectionResponse => {
  return {
    CollectionArn: __expectString(output.CollectionArn),
    FaceModelVersion: __expectString(output.FaceModelVersion),
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

const deserializeAws_json1_1CreateDatasetResponse = (output: any, context: __SerdeContext): CreateDatasetResponse => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
  } as any;
};

const deserializeAws_json1_1CreateProjectResponse = (output: any, context: __SerdeContext): CreateProjectResponse => {
  return {
    ProjectArn: __expectString(output.ProjectArn),
  } as any;
};

const deserializeAws_json1_1CreateProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): CreateProjectVersionResponse => {
  return {
    ProjectVersionArn: __expectString(output.ProjectVersionArn),
  } as any;
};

const deserializeAws_json1_1CreateStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): CreateStreamProcessorResponse => {
  return {
    StreamProcessorArn: __expectString(output.StreamProcessorArn),
  } as any;
};

const deserializeAws_json1_1CustomLabel = (output: any, context: __SerdeContext): CustomLabel => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Geometry: output.Geometry != null ? deserializeAws_json1_1Geometry(output.Geometry, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CustomLabels = (output: any, context: __SerdeContext): CustomLabel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomLabel(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatasetDescription = (output: any, context: __SerdeContext): DatasetDescription => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    DatasetStats:
      output.DatasetStats != null ? deserializeAws_json1_1DatasetStats(output.DatasetStats, context) : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    StatusMessageCode: __expectString(output.StatusMessageCode),
  } as any;
};

const deserializeAws_json1_1DatasetEntries = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1DatasetLabelDescription = (
  output: any,
  context: __SerdeContext
): DatasetLabelDescription => {
  return {
    LabelName: __expectString(output.LabelName),
    LabelStats:
      output.LabelStats != null ? deserializeAws_json1_1DatasetLabelStats(output.LabelStats, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DatasetLabelDescriptions = (
  output: any,
  context: __SerdeContext
): DatasetLabelDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetLabelDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatasetLabelStats = (output: any, context: __SerdeContext): DatasetLabelStats => {
  return {
    BoundingBoxCount: __expectInt32(output.BoundingBoxCount),
    EntryCount: __expectInt32(output.EntryCount),
  } as any;
};

const deserializeAws_json1_1DatasetMetadata = (output: any, context: __SerdeContext): DatasetMetadata => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetType: __expectString(output.DatasetType),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    StatusMessageCode: __expectString(output.StatusMessageCode),
  } as any;
};

const deserializeAws_json1_1DatasetMetadataList = (output: any, context: __SerdeContext): DatasetMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatasetStats = (output: any, context: __SerdeContext): DatasetStats => {
  return {
    ErrorEntries: __expectInt32(output.ErrorEntries),
    LabeledEntries: __expectInt32(output.LabeledEntries),
    TotalEntries: __expectInt32(output.TotalEntries),
    TotalLabels: __expectInt32(output.TotalLabels),
  } as any;
};

const deserializeAws_json1_1DeleteCollectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteCollectionResponse => {
  return {
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

const deserializeAws_json1_1DeleteDatasetResponse = (output: any, context: __SerdeContext): DeleteDatasetResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteFacesResponse = (output: any, context: __SerdeContext): DeleteFacesResponse => {
  return {
    DeletedFaces:
      output.DeletedFaces != null ? deserializeAws_json1_1FaceIdList(output.DeletedFaces, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteProjectPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteProjectPolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteProjectResponse = (output: any, context: __SerdeContext): DeleteProjectResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): DeleteProjectVersionResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): DeleteStreamProcessorResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeCollectionResponse = (
  output: any,
  context: __SerdeContext
): DescribeCollectionResponse => {
  return {
    CollectionARN: __expectString(output.CollectionARN),
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    FaceCount: __expectLong(output.FaceCount),
    FaceModelVersion: __expectString(output.FaceModelVersion),
  } as any;
};

const deserializeAws_json1_1DescribeDatasetResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetResponse => {
  return {
    DatasetDescription:
      output.DatasetDescription != null
        ? deserializeAws_json1_1DatasetDescription(output.DatasetDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProjectsResponse = (
  output: any,
  context: __SerdeContext
): DescribeProjectsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ProjectDescriptions:
      output.ProjectDescriptions != null
        ? deserializeAws_json1_1ProjectDescriptions(output.ProjectDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProjectVersionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeProjectVersionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ProjectVersionDescriptions:
      output.ProjectVersionDescriptions != null
        ? deserializeAws_json1_1ProjectVersionDescriptions(output.ProjectVersionDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): DescribeStreamProcessorResponse => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    DataSharingPreference:
      output.DataSharingPreference != null
        ? deserializeAws_json1_1StreamProcessorDataSharingPreference(output.DataSharingPreference, context)
        : undefined,
    Input: output.Input != null ? deserializeAws_json1_1StreamProcessorInput(output.Input, context) : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    LastUpdateTimestamp:
      output.LastUpdateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    NotificationChannel:
      output.NotificationChannel != null
        ? deserializeAws_json1_1StreamProcessorNotificationChannel(output.NotificationChannel, context)
        : undefined,
    Output: output.Output != null ? deserializeAws_json1_1StreamProcessorOutput(output.Output, context) : undefined,
    RegionsOfInterest:
      output.RegionsOfInterest != null
        ? deserializeAws_json1_1RegionsOfInterest(output.RegionsOfInterest, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    Settings:
      output.Settings != null ? deserializeAws_json1_1StreamProcessorSettings(output.Settings, context) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    StreamProcessorArn: __expectString(output.StreamProcessorArn),
  } as any;
};

const deserializeAws_json1_1DetectCustomLabelsResponse = (
  output: any,
  context: __SerdeContext
): DetectCustomLabelsResponse => {
  return {
    CustomLabels:
      output.CustomLabels != null ? deserializeAws_json1_1CustomLabels(output.CustomLabels, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectFacesResponse = (output: any, context: __SerdeContext): DetectFacesResponse => {
  return {
    FaceDetails:
      output.FaceDetails != null ? deserializeAws_json1_1FaceDetailList(output.FaceDetails, context) : undefined,
    OrientationCorrection: __expectString(output.OrientationCorrection),
  } as any;
};

const deserializeAws_json1_1DetectLabelsImageBackground = (
  output: any,
  context: __SerdeContext
): DetectLabelsImageBackground => {
  return {
    DominantColors:
      output.DominantColors != null ? deserializeAws_json1_1DominantColors(output.DominantColors, context) : undefined,
    Quality:
      output.Quality != null ? deserializeAws_json1_1DetectLabelsImageQuality(output.Quality, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectLabelsImageForeground = (
  output: any,
  context: __SerdeContext
): DetectLabelsImageForeground => {
  return {
    DominantColors:
      output.DominantColors != null ? deserializeAws_json1_1DominantColors(output.DominantColors, context) : undefined,
    Quality:
      output.Quality != null ? deserializeAws_json1_1DetectLabelsImageQuality(output.Quality, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectLabelsImageProperties = (
  output: any,
  context: __SerdeContext
): DetectLabelsImageProperties => {
  return {
    Background:
      output.Background != null
        ? deserializeAws_json1_1DetectLabelsImageBackground(output.Background, context)
        : undefined,
    DominantColors:
      output.DominantColors != null ? deserializeAws_json1_1DominantColors(output.DominantColors, context) : undefined,
    Foreground:
      output.Foreground != null
        ? deserializeAws_json1_1DetectLabelsImageForeground(output.Foreground, context)
        : undefined,
    Quality:
      output.Quality != null ? deserializeAws_json1_1DetectLabelsImageQuality(output.Quality, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectLabelsImageQuality = (
  output: any,
  context: __SerdeContext
): DetectLabelsImageQuality => {
  return {
    Brightness: __limitedParseFloat32(output.Brightness),
    Contrast: __limitedParseFloat32(output.Contrast),
    Sharpness: __limitedParseFloat32(output.Sharpness),
  } as any;
};

const deserializeAws_json1_1DetectLabelsResponse = (output: any, context: __SerdeContext): DetectLabelsResponse => {
  return {
    ImageProperties:
      output.ImageProperties != null
        ? deserializeAws_json1_1DetectLabelsImageProperties(output.ImageProperties, context)
        : undefined,
    LabelModelVersion: __expectString(output.LabelModelVersion),
    Labels: output.Labels != null ? deserializeAws_json1_1Labels(output.Labels, context) : undefined,
    OrientationCorrection: __expectString(output.OrientationCorrection),
  } as any;
};

const deserializeAws_json1_1DetectModerationLabelsResponse = (
  output: any,
  context: __SerdeContext
): DetectModerationLabelsResponse => {
  return {
    HumanLoopActivationOutput:
      output.HumanLoopActivationOutput != null
        ? deserializeAws_json1_1HumanLoopActivationOutput(output.HumanLoopActivationOutput, context)
        : undefined,
    ModerationLabels:
      output.ModerationLabels != null
        ? deserializeAws_json1_1ModerationLabels(output.ModerationLabels, context)
        : undefined,
    ModerationModelVersion: __expectString(output.ModerationModelVersion),
  } as any;
};

const deserializeAws_json1_1DetectProtectiveEquipmentResponse = (
  output: any,
  context: __SerdeContext
): DetectProtectiveEquipmentResponse => {
  return {
    Persons:
      output.Persons != null ? deserializeAws_json1_1ProtectiveEquipmentPersons(output.Persons, context) : undefined,
    ProtectiveEquipmentModelVersion: __expectString(output.ProtectiveEquipmentModelVersion),
    Summary:
      output.Summary != null ? deserializeAws_json1_1ProtectiveEquipmentSummary(output.Summary, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectTextResponse = (output: any, context: __SerdeContext): DetectTextResponse => {
  return {
    TextDetections:
      output.TextDetections != null
        ? deserializeAws_json1_1TextDetectionList(output.TextDetections, context)
        : undefined,
    TextModelVersion: __expectString(output.TextModelVersion),
  } as any;
};

const deserializeAws_json1_1DistributeDatasetEntriesResponse = (
  output: any,
  context: __SerdeContext
): DistributeDatasetEntriesResponse => {
  return {} as any;
};

const deserializeAws_json1_1DominantColor = (output: any, context: __SerdeContext): DominantColor => {
  return {
    Blue: __expectInt32(output.Blue),
    CSSColor: __expectString(output.CSSColor),
    Green: __expectInt32(output.Green),
    HexCode: __expectString(output.HexCode),
    PixelPercent: __limitedParseFloat32(output.PixelPercent),
    Red: __expectInt32(output.Red),
    SimplifiedColor: __expectString(output.SimplifiedColor),
  } as any;
};

const deserializeAws_json1_1DominantColors = (output: any, context: __SerdeContext): DominantColor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DominantColor(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Emotion = (output: any, context: __SerdeContext): Emotion => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1Emotions = (output: any, context: __SerdeContext): Emotion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Emotion(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EquipmentDetection = (output: any, context: __SerdeContext): EquipmentDetection => {
  return {
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    CoversBodyPart:
      output.CoversBodyPart != null ? deserializeAws_json1_1CoversBodyPart(output.CoversBodyPart, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1EquipmentDetections = (output: any, context: __SerdeContext): EquipmentDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EquipmentDetection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    F1Score: __limitedParseFloat32(output.F1Score),
    Summary: output.Summary != null ? deserializeAws_json1_1Summary(output.Summary, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Eyeglasses = (output: any, context: __SerdeContext): Eyeglasses => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

const deserializeAws_json1_1EyeOpen = (output: any, context: __SerdeContext): EyeOpen => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

const deserializeAws_json1_1Face = (output: any, context: __SerdeContext): Face => {
  return {
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    ExternalImageId: __expectString(output.ExternalImageId),
    FaceId: __expectString(output.FaceId),
    ImageId: __expectString(output.ImageId),
    IndexFacesModelVersion: __expectString(output.IndexFacesModelVersion),
  } as any;
};

const deserializeAws_json1_1FaceDetail = (output: any, context: __SerdeContext): FaceDetail => {
  return {
    AgeRange: output.AgeRange != null ? deserializeAws_json1_1AgeRange(output.AgeRange, context) : undefined,
    Beard: output.Beard != null ? deserializeAws_json1_1Beard(output.Beard, context) : undefined,
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    Emotions: output.Emotions != null ? deserializeAws_json1_1Emotions(output.Emotions, context) : undefined,
    Eyeglasses: output.Eyeglasses != null ? deserializeAws_json1_1Eyeglasses(output.Eyeglasses, context) : undefined,
    EyesOpen: output.EyesOpen != null ? deserializeAws_json1_1EyeOpen(output.EyesOpen, context) : undefined,
    Gender: output.Gender != null ? deserializeAws_json1_1Gender(output.Gender, context) : undefined,
    Landmarks: output.Landmarks != null ? deserializeAws_json1_1Landmarks(output.Landmarks, context) : undefined,
    MouthOpen: output.MouthOpen != null ? deserializeAws_json1_1MouthOpen(output.MouthOpen, context) : undefined,
    Mustache: output.Mustache != null ? deserializeAws_json1_1Mustache(output.Mustache, context) : undefined,
    Pose: output.Pose != null ? deserializeAws_json1_1Pose(output.Pose, context) : undefined,
    Quality: output.Quality != null ? deserializeAws_json1_1ImageQuality(output.Quality, context) : undefined,
    Smile: output.Smile != null ? deserializeAws_json1_1Smile(output.Smile, context) : undefined,
    Sunglasses: output.Sunglasses != null ? deserializeAws_json1_1Sunglasses(output.Sunglasses, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FaceDetailList = (output: any, context: __SerdeContext): FaceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FaceDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FaceDetection = (output: any, context: __SerdeContext): FaceDetection => {
  return {
    Face: output.Face != null ? deserializeAws_json1_1FaceDetail(output.Face, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

const deserializeAws_json1_1FaceDetections = (output: any, context: __SerdeContext): FaceDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FaceDetection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FaceIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1FaceList = (output: any, context: __SerdeContext): Face[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Face(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FaceMatch = (output: any, context: __SerdeContext): FaceMatch => {
  return {
    Face: output.Face != null ? deserializeAws_json1_1Face(output.Face, context) : undefined,
    Similarity: __limitedParseFloat32(output.Similarity),
  } as any;
};

const deserializeAws_json1_1FaceMatchList = (output: any, context: __SerdeContext): FaceMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FaceMatch(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FaceModelVersionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1FaceRecord = (output: any, context: __SerdeContext): FaceRecord => {
  return {
    Face: output.Face != null ? deserializeAws_json1_1Face(output.Face, context) : undefined,
    FaceDetail: output.FaceDetail != null ? deserializeAws_json1_1FaceDetail(output.FaceDetail, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FaceRecordList = (output: any, context: __SerdeContext): FaceRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FaceRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FaceSearchSettings = (output: any, context: __SerdeContext): FaceSearchSettings => {
  return {
    CollectionId: __expectString(output.CollectionId),
    FaceMatchThreshold: __limitedParseFloat32(output.FaceMatchThreshold),
  } as any;
};

const deserializeAws_json1_1Gender = (output: any, context: __SerdeContext): Gender => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Polygon: output.Polygon != null ? deserializeAws_json1_1Polygon(output.Polygon, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetCelebrityInfoResponse = (
  output: any,
  context: __SerdeContext
): GetCelebrityInfoResponse => {
  return {
    KnownGender:
      output.KnownGender != null ? deserializeAws_json1_1KnownGender(output.KnownGender, context) : undefined,
    Name: __expectString(output.Name),
    Urls: output.Urls != null ? deserializeAws_json1_1Urls(output.Urls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetCelebrityRecognitionResponse = (
  output: any,
  context: __SerdeContext
): GetCelebrityRecognitionResponse => {
  return {
    Celebrities:
      output.Celebrities != null ? deserializeAws_json1_1CelebrityRecognitions(output.Celebrities, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata:
      output.VideoMetadata != null ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetContentModerationResponse = (
  output: any,
  context: __SerdeContext
): GetContentModerationResponse => {
  return {
    JobStatus: __expectString(output.JobStatus),
    ModerationLabels:
      output.ModerationLabels != null
        ? deserializeAws_json1_1ContentModerationDetections(output.ModerationLabels, context)
        : undefined,
    ModerationModelVersion: __expectString(output.ModerationModelVersion),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata:
      output.VideoMetadata != null ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetFaceDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetFaceDetectionResponse => {
  return {
    Faces: output.Faces != null ? deserializeAws_json1_1FaceDetections(output.Faces, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata:
      output.VideoMetadata != null ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetFaceSearchResponse = (output: any, context: __SerdeContext): GetFaceSearchResponse => {
  return {
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    Persons: output.Persons != null ? deserializeAws_json1_1PersonMatches(output.Persons, context) : undefined,
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata:
      output.VideoMetadata != null ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetLabelDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetLabelDetectionResponse => {
  return {
    JobStatus: __expectString(output.JobStatus),
    LabelModelVersion: __expectString(output.LabelModelVersion),
    Labels: output.Labels != null ? deserializeAws_json1_1LabelDetections(output.Labels, context) : undefined,
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata:
      output.VideoMetadata != null ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetPersonTrackingResponse = (
  output: any,
  context: __SerdeContext
): GetPersonTrackingResponse => {
  return {
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    Persons: output.Persons != null ? deserializeAws_json1_1PersonDetections(output.Persons, context) : undefined,
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata:
      output.VideoMetadata != null ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetSegmentDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetSegmentDetectionResponse => {
  return {
    AudioMetadata:
      output.AudioMetadata != null ? deserializeAws_json1_1AudioMetadataList(output.AudioMetadata, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    Segments: output.Segments != null ? deserializeAws_json1_1SegmentDetections(output.Segments, context) : undefined,
    SelectedSegmentTypes:
      output.SelectedSegmentTypes != null
        ? deserializeAws_json1_1SegmentTypesInfo(output.SelectedSegmentTypes, context)
        : undefined,
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata:
      output.VideoMetadata != null ? deserializeAws_json1_1VideoMetadataList(output.VideoMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetTextDetectionResponse => {
  return {
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    TextDetections:
      output.TextDetections != null
        ? deserializeAws_json1_1TextDetectionResults(output.TextDetections, context)
        : undefined,
    TextModelVersion: __expectString(output.TextModelVersion),
    VideoMetadata:
      output.VideoMetadata != null ? deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GroundTruthManifest = (output: any, context: __SerdeContext): GroundTruthManifest => {
  return {
    S3Object: output.S3Object != null ? deserializeAws_json1_1S3Object(output.S3Object, context) : undefined,
  } as any;
};

const deserializeAws_json1_1HumanLoopActivationOutput = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationOutput => {
  return {
    HumanLoopActivationConditionsEvaluationResults:
      output.HumanLoopActivationConditionsEvaluationResults != null
        ? new __LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults)
        : undefined,
    HumanLoopActivationReasons:
      output.HumanLoopActivationReasons != null
        ? deserializeAws_json1_1HumanLoopActivationReasons(output.HumanLoopActivationReasons, context)
        : undefined,
    HumanLoopArn: __expectString(output.HumanLoopArn),
  } as any;
};

const deserializeAws_json1_1HumanLoopActivationReasons = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1HumanLoopQuotaExceededException = (
  output: any,
  context: __SerdeContext
): HumanLoopQuotaExceededException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
    QuotaCode: __expectString(output.QuotaCode),
    ResourceType: __expectString(output.ResourceType),
    ServiceCode: __expectString(output.ServiceCode),
  } as any;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ImageQuality = (output: any, context: __SerdeContext): ImageQuality => {
  return {
    Brightness: __limitedParseFloat32(output.Brightness),
    Sharpness: __limitedParseFloat32(output.Sharpness),
  } as any;
};

const deserializeAws_json1_1ImageTooLargeException = (output: any, context: __SerdeContext): ImageTooLargeException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IndexFacesResponse = (output: any, context: __SerdeContext): IndexFacesResponse => {
  return {
    FaceModelVersion: __expectString(output.FaceModelVersion),
    FaceRecords:
      output.FaceRecords != null ? deserializeAws_json1_1FaceRecordList(output.FaceRecords, context) : undefined,
    OrientationCorrection: __expectString(output.OrientationCorrection),
    UnindexedFaces:
      output.UnindexedFaces != null ? deserializeAws_json1_1UnindexedFaces(output.UnindexedFaces, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    DominantColors:
      output.DominantColors != null ? deserializeAws_json1_1DominantColors(output.DominantColors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Instances = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Instance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidImageFormatException = (
  output: any,
  context: __SerdeContext
): InvalidImageFormatException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidPaginationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidPaginationTokenException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidPolicyRevisionIdException = (
  output: any,
  context: __SerdeContext
): InvalidPolicyRevisionIdException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidS3ObjectException = (
  output: any,
  context: __SerdeContext
): InvalidS3ObjectException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1KinesisDataStream = (output: any, context: __SerdeContext): KinesisDataStream => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_json1_1KinesisVideoStream = (output: any, context: __SerdeContext): KinesisVideoStream => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_json1_1KnownGender = (output: any, context: __SerdeContext): KnownGender => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1Label = (output: any, context: __SerdeContext): Label => {
  return {
    Aliases: output.Aliases != null ? deserializeAws_json1_1LabelAliases(output.Aliases, context) : undefined,
    Categories:
      output.Categories != null ? deserializeAws_json1_1LabelCategories(output.Categories, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    Instances: output.Instances != null ? deserializeAws_json1_1Instances(output.Instances, context) : undefined,
    Name: __expectString(output.Name),
    Parents: output.Parents != null ? deserializeAws_json1_1Parents(output.Parents, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LabelAlias = (output: any, context: __SerdeContext): LabelAlias => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1LabelAliases = (output: any, context: __SerdeContext): LabelAlias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LabelAlias(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LabelCategories = (output: any, context: __SerdeContext): LabelCategory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LabelCategory(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LabelCategory = (output: any, context: __SerdeContext): LabelCategory => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1LabelDetection = (output: any, context: __SerdeContext): LabelDetection => {
  return {
    DurationMillis: __expectLong(output.DurationMillis),
    EndTimestampMillis: __expectLong(output.EndTimestampMillis),
    Label: output.Label != null ? deserializeAws_json1_1Label(output.Label, context) : undefined,
    StartTimestampMillis: __expectLong(output.StartTimestampMillis),
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

const deserializeAws_json1_1LabelDetections = (output: any, context: __SerdeContext): LabelDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LabelDetection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Labels = (output: any, context: __SerdeContext): Label[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Label(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Landmark = (output: any, context: __SerdeContext): Landmark => {
  return {
    Type: __expectString(output.Type),
    X: __limitedParseFloat32(output.X),
    Y: __limitedParseFloat32(output.Y),
  } as any;
};

const deserializeAws_json1_1Landmarks = (output: any, context: __SerdeContext): Landmark[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Landmark(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListCollectionsResponse = (
  output: any,
  context: __SerdeContext
): ListCollectionsResponse => {
  return {
    CollectionIds:
      output.CollectionIds != null ? deserializeAws_json1_1CollectionIdList(output.CollectionIds, context) : undefined,
    FaceModelVersions:
      output.FaceModelVersions != null
        ? deserializeAws_json1_1FaceModelVersionList(output.FaceModelVersions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetEntriesResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetEntriesResponse => {
  return {
    DatasetEntries:
      output.DatasetEntries != null ? deserializeAws_json1_1DatasetEntries(output.DatasetEntries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetLabelsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetLabelsResponse => {
  return {
    DatasetLabelDescriptions:
      output.DatasetLabelDescriptions != null
        ? deserializeAws_json1_1DatasetLabelDescriptions(output.DatasetLabelDescriptions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListFacesResponse = (output: any, context: __SerdeContext): ListFacesResponse => {
  return {
    FaceModelVersion: __expectString(output.FaceModelVersion),
    Faces: output.Faces != null ? deserializeAws_json1_1FaceList(output.Faces, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListProjectPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListProjectPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ProjectPolicies:
      output.ProjectPolicies != null
        ? deserializeAws_json1_1ProjectPolicies(output.ProjectPolicies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListStreamProcessorsResponse = (
  output: any,
  context: __SerdeContext
): ListStreamProcessorsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    StreamProcessors:
      output.StreamProcessors != null
        ? deserializeAws_json1_1StreamProcessorList(output.StreamProcessors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ModerationLabel = (output: any, context: __SerdeContext): ModerationLabel => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Name: __expectString(output.Name),
    ParentName: __expectString(output.ParentName),
  } as any;
};

const deserializeAws_json1_1ModerationLabels = (output: any, context: __SerdeContext): ModerationLabel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ModerationLabel(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MouthOpen = (output: any, context: __SerdeContext): MouthOpen => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

const deserializeAws_json1_1Mustache = (output: any, context: __SerdeContext): Mustache => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

const deserializeAws_json1_1OutputConfig = (output: any, context: __SerdeContext): OutputConfig => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
  } as any;
};

const deserializeAws_json1_1Parent = (output: any, context: __SerdeContext): Parent => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1Parents = (output: any, context: __SerdeContext): Parent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Parent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PersonDetail = (output: any, context: __SerdeContext): PersonDetail => {
  return {
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Face: output.Face != null ? deserializeAws_json1_1FaceDetail(output.Face, context) : undefined,
    Index: __expectLong(output.Index),
  } as any;
};

const deserializeAws_json1_1PersonDetection = (output: any, context: __SerdeContext): PersonDetection => {
  return {
    Person: output.Person != null ? deserializeAws_json1_1PersonDetail(output.Person, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

const deserializeAws_json1_1PersonDetections = (output: any, context: __SerdeContext): PersonDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PersonDetection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PersonMatch = (output: any, context: __SerdeContext): PersonMatch => {
  return {
    FaceMatches:
      output.FaceMatches != null ? deserializeAws_json1_1FaceMatchList(output.FaceMatches, context) : undefined,
    Person: output.Person != null ? deserializeAws_json1_1PersonDetail(output.Person, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

const deserializeAws_json1_1PersonMatches = (output: any, context: __SerdeContext): PersonMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PersonMatch(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Point = (output: any, context: __SerdeContext): Point => {
  return {
    X: __limitedParseFloat32(output.X),
    Y: __limitedParseFloat32(output.Y),
  } as any;
};

const deserializeAws_json1_1Polygon = (output: any, context: __SerdeContext): Point[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Point(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Pose = (output: any, context: __SerdeContext): Pose => {
  return {
    Pitch: __limitedParseFloat32(output.Pitch),
    Roll: __limitedParseFloat32(output.Roll),
    Yaw: __limitedParseFloat32(output.Yaw),
  } as any;
};

const deserializeAws_json1_1ProjectDescription = (output: any, context: __SerdeContext): ProjectDescription => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    Datasets: output.Datasets != null ? deserializeAws_json1_1DatasetMetadataList(output.Datasets, context) : undefined,
    ProjectArn: __expectString(output.ProjectArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ProjectDescriptions = (output: any, context: __SerdeContext): ProjectDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProjectDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProjectPolicies = (output: any, context: __SerdeContext): ProjectPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProjectPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProjectPolicy = (output: any, context: __SerdeContext): ProjectPolicy => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    PolicyDocument: __expectString(output.PolicyDocument),
    PolicyName: __expectString(output.PolicyName),
    PolicyRevisionId: __expectString(output.PolicyRevisionId),
    ProjectArn: __expectString(output.ProjectArn),
  } as any;
};

const deserializeAws_json1_1ProjectVersionDescription = (
  output: any,
  context: __SerdeContext
): ProjectVersionDescription => {
  return {
    BillableTrainingTimeInSeconds: __expectLong(output.BillableTrainingTimeInSeconds),
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    EvaluationResult:
      output.EvaluationResult != null
        ? deserializeAws_json1_1EvaluationResult(output.EvaluationResult, context)
        : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    ManifestSummary:
      output.ManifestSummary != null
        ? deserializeAws_json1_1GroundTruthManifest(output.ManifestSummary, context)
        : undefined,
    MaxInferenceUnits: __expectInt32(output.MaxInferenceUnits),
    MinInferenceUnits: __expectInt32(output.MinInferenceUnits),
    OutputConfig:
      output.OutputConfig != null ? deserializeAws_json1_1OutputConfig(output.OutputConfig, context) : undefined,
    ProjectVersionArn: __expectString(output.ProjectVersionArn),
    SourceProjectVersionArn: __expectString(output.SourceProjectVersionArn),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    TestingDataResult:
      output.TestingDataResult != null
        ? deserializeAws_json1_1TestingDataResult(output.TestingDataResult, context)
        : undefined,
    TrainingDataResult:
      output.TrainingDataResult != null
        ? deserializeAws_json1_1TrainingDataResult(output.TrainingDataResult, context)
        : undefined,
    TrainingEndTimestamp:
      output.TrainingEndTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TrainingEndTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProjectVersionDescriptions = (
  output: any,
  context: __SerdeContext
): ProjectVersionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProjectVersionDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProtectiveEquipmentBodyPart = (
  output: any,
  context: __SerdeContext
): ProtectiveEquipmentBodyPart => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    EquipmentDetections:
      output.EquipmentDetections != null
        ? deserializeAws_json1_1EquipmentDetections(output.EquipmentDetections, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ProtectiveEquipmentPerson = (
  output: any,
  context: __SerdeContext
): ProtectiveEquipmentPerson => {
  return {
    BodyParts: output.BodyParts != null ? deserializeAws_json1_1BodyParts(output.BodyParts, context) : undefined,
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    Id: __expectInt32(output.Id),
  } as any;
};

const deserializeAws_json1_1ProtectiveEquipmentPersonIds = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1ProtectiveEquipmentPersons = (
  output: any,
  context: __SerdeContext
): ProtectiveEquipmentPerson[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProtectiveEquipmentPerson(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProtectiveEquipmentSummary = (
  output: any,
  context: __SerdeContext
): ProtectiveEquipmentSummary => {
  return {
    PersonsIndeterminate:
      output.PersonsIndeterminate != null
        ? deserializeAws_json1_1ProtectiveEquipmentPersonIds(output.PersonsIndeterminate, context)
        : undefined,
    PersonsWithRequiredEquipment:
      output.PersonsWithRequiredEquipment != null
        ? deserializeAws_json1_1ProtectiveEquipmentPersonIds(output.PersonsWithRequiredEquipment, context)
        : undefined,
    PersonsWithoutRequiredEquipment:
      output.PersonsWithoutRequiredEquipment != null
        ? deserializeAws_json1_1ProtectiveEquipmentPersonIds(output.PersonsWithoutRequiredEquipment, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PutProjectPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutProjectPolicyResponse => {
  return {
    PolicyRevisionId: __expectString(output.PolicyRevisionId),
  } as any;
};

const deserializeAws_json1_1Reasons = (output: any, context: __SerdeContext): (Reason | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1RecognizeCelebritiesResponse = (
  output: any,
  context: __SerdeContext
): RecognizeCelebritiesResponse => {
  return {
    CelebrityFaces:
      output.CelebrityFaces != null ? deserializeAws_json1_1CelebrityList(output.CelebrityFaces, context) : undefined,
    OrientationCorrection: __expectString(output.OrientationCorrection),
    UnrecognizedFaces:
      output.UnrecognizedFaces != null
        ? deserializeAws_json1_1ComparedFaceList(output.UnrecognizedFaces, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegionOfInterest = (output: any, context: __SerdeContext): RegionOfInterest => {
  return {
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Polygon: output.Polygon != null ? deserializeAws_json1_1Polygon(output.Polygon, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RegionsOfInterest = (output: any, context: __SerdeContext): RegionOfInterest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RegionOfInterest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotReadyException = (
  output: any,
  context: __SerdeContext
): ResourceNotReadyException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return {
    Bucket: __expectString(output.Bucket),
    KeyPrefix: __expectString(output.KeyPrefix),
  } as any;
};

const deserializeAws_json1_1S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    Bucket: __expectString(output.Bucket),
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1SearchFacesByImageResponse = (
  output: any,
  context: __SerdeContext
): SearchFacesByImageResponse => {
  return {
    FaceMatches:
      output.FaceMatches != null ? deserializeAws_json1_1FaceMatchList(output.FaceMatches, context) : undefined,
    FaceModelVersion: __expectString(output.FaceModelVersion),
    SearchedFaceBoundingBox:
      output.SearchedFaceBoundingBox != null
        ? deserializeAws_json1_1BoundingBox(output.SearchedFaceBoundingBox, context)
        : undefined,
    SearchedFaceConfidence: __limitedParseFloat32(output.SearchedFaceConfidence),
  } as any;
};

const deserializeAws_json1_1SearchFacesResponse = (output: any, context: __SerdeContext): SearchFacesResponse => {
  return {
    FaceMatches:
      output.FaceMatches != null ? deserializeAws_json1_1FaceMatchList(output.FaceMatches, context) : undefined,
    FaceModelVersion: __expectString(output.FaceModelVersion),
    SearchedFaceId: __expectString(output.SearchedFaceId),
  } as any;
};

const deserializeAws_json1_1SegmentDetection = (output: any, context: __SerdeContext): SegmentDetection => {
  return {
    DurationFrames: __expectLong(output.DurationFrames),
    DurationMillis: __expectLong(output.DurationMillis),
    DurationSMPTE: __expectString(output.DurationSMPTE),
    EndFrameNumber: __expectLong(output.EndFrameNumber),
    EndTimecodeSMPTE: __expectString(output.EndTimecodeSMPTE),
    EndTimestampMillis: __expectLong(output.EndTimestampMillis),
    ShotSegment:
      output.ShotSegment != null ? deserializeAws_json1_1ShotSegment(output.ShotSegment, context) : undefined,
    StartFrameNumber: __expectLong(output.StartFrameNumber),
    StartTimecodeSMPTE: __expectString(output.StartTimecodeSMPTE),
    StartTimestampMillis: __expectLong(output.StartTimestampMillis),
    TechnicalCueSegment:
      output.TechnicalCueSegment != null
        ? deserializeAws_json1_1TechnicalCueSegment(output.TechnicalCueSegment, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1SegmentDetections = (output: any, context: __SerdeContext): SegmentDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SegmentDetection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SegmentTypeInfo = (output: any, context: __SerdeContext): SegmentTypeInfo => {
  return {
    ModelVersion: __expectString(output.ModelVersion),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1SegmentTypesInfo = (output: any, context: __SerdeContext): SegmentTypeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SegmentTypeInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ShotSegment = (output: any, context: __SerdeContext): ShotSegment => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Index: __expectLong(output.Index),
  } as any;
};

const deserializeAws_json1_1Smile = (output: any, context: __SerdeContext): Smile => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

const deserializeAws_json1_1StartCelebrityRecognitionResponse = (
  output: any,
  context: __SerdeContext
): StartCelebrityRecognitionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartContentModerationResponse = (
  output: any,
  context: __SerdeContext
): StartContentModerationResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartFaceDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartFaceDetectionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartFaceSearchResponse = (
  output: any,
  context: __SerdeContext
): StartFaceSearchResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartLabelDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartLabelDetectionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartPersonTrackingResponse = (
  output: any,
  context: __SerdeContext
): StartPersonTrackingResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): StartProjectVersionResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1StartSegmentDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartSegmentDetectionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): StartStreamProcessorResponse => {
  return {
    SessionId: __expectString(output.SessionId),
  } as any;
};

const deserializeAws_json1_1StartTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartTextDetectionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StopProjectVersionResponse = (
  output: any,
  context: __SerdeContext
): StopProjectVersionResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1StopStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): StopStreamProcessorResponse => {
  return {} as any;
};

const deserializeAws_json1_1StreamProcessor = (output: any, context: __SerdeContext): StreamProcessor => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1StreamProcessorDataSharingPreference = (
  output: any,
  context: __SerdeContext
): StreamProcessorDataSharingPreference => {
  return {
    OptIn: __expectBoolean(output.OptIn),
  } as any;
};

const deserializeAws_json1_1StreamProcessorInput = (output: any, context: __SerdeContext): StreamProcessorInput => {
  return {
    KinesisVideoStream:
      output.KinesisVideoStream != null
        ? deserializeAws_json1_1KinesisVideoStream(output.KinesisVideoStream, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StreamProcessorList = (output: any, context: __SerdeContext): StreamProcessor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StreamProcessor(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StreamProcessorNotificationChannel = (
  output: any,
  context: __SerdeContext
): StreamProcessorNotificationChannel => {
  return {
    SNSTopicArn: __expectString(output.SNSTopicArn),
  } as any;
};

const deserializeAws_json1_1StreamProcessorOutput = (output: any, context: __SerdeContext): StreamProcessorOutput => {
  return {
    KinesisDataStream:
      output.KinesisDataStream != null
        ? deserializeAws_json1_1KinesisDataStream(output.KinesisDataStream, context)
        : undefined,
    S3Destination:
      output.S3Destination != null ? deserializeAws_json1_1S3Destination(output.S3Destination, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StreamProcessorSettings = (
  output: any,
  context: __SerdeContext
): StreamProcessorSettings => {
  return {
    ConnectedHome:
      output.ConnectedHome != null
        ? deserializeAws_json1_1ConnectedHomeSettings(output.ConnectedHome, context)
        : undefined,
    FaceSearch:
      output.FaceSearch != null ? deserializeAws_json1_1FaceSearchSettings(output.FaceSearch, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Summary = (output: any, context: __SerdeContext): Summary => {
  return {
    S3Object: output.S3Object != null ? deserializeAws_json1_1S3Object(output.S3Object, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Sunglasses = (output: any, context: __SerdeContext): Sunglasses => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

const deserializeAws_json1_1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TechnicalCueSegment = (output: any, context: __SerdeContext): TechnicalCueSegment => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1TestingData = (output: any, context: __SerdeContext): TestingData => {
  return {
    Assets: output.Assets != null ? deserializeAws_json1_1Assets(output.Assets, context) : undefined,
    AutoCreate: __expectBoolean(output.AutoCreate),
  } as any;
};

const deserializeAws_json1_1TestingDataResult = (output: any, context: __SerdeContext): TestingDataResult => {
  return {
    Input: output.Input != null ? deserializeAws_json1_1TestingData(output.Input, context) : undefined,
    Output: output.Output != null ? deserializeAws_json1_1TestingData(output.Output, context) : undefined,
    Validation:
      output.Validation != null ? deserializeAws_json1_1ValidationData(output.Validation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TextDetection = (output: any, context: __SerdeContext): TextDetection => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    DetectedText: __expectString(output.DetectedText),
    Geometry: output.Geometry != null ? deserializeAws_json1_1Geometry(output.Geometry, context) : undefined,
    Id: __expectInt32(output.Id),
    ParentId: __expectInt32(output.ParentId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1TextDetectionList = (output: any, context: __SerdeContext): TextDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TextDetection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TextDetectionResult = (output: any, context: __SerdeContext): TextDetectionResult => {
  return {
    TextDetection:
      output.TextDetection != null ? deserializeAws_json1_1TextDetection(output.TextDetection, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

const deserializeAws_json1_1TextDetectionResults = (output: any, context: __SerdeContext): TextDetectionResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TextDetectionResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TrainingData = (output: any, context: __SerdeContext): TrainingData => {
  return {
    Assets: output.Assets != null ? deserializeAws_json1_1Assets(output.Assets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TrainingDataResult = (output: any, context: __SerdeContext): TrainingDataResult => {
  return {
    Input: output.Input != null ? deserializeAws_json1_1TrainingData(output.Input, context) : undefined,
    Output: output.Output != null ? deserializeAws_json1_1TrainingData(output.Output, context) : undefined,
    Validation:
      output.Validation != null ? deserializeAws_json1_1ValidationData(output.Validation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UnindexedFace = (output: any, context: __SerdeContext): UnindexedFace => {
  return {
    FaceDetail: output.FaceDetail != null ? deserializeAws_json1_1FaceDetail(output.FaceDetail, context) : undefined,
    Reasons: output.Reasons != null ? deserializeAws_json1_1Reasons(output.Reasons, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UnindexedFaces = (output: any, context: __SerdeContext): UnindexedFace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UnindexedFace(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDatasetEntriesResponse = (
  output: any,
  context: __SerdeContext
): UpdateDatasetEntriesResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateStreamProcessorResponse = (
  output: any,
  context: __SerdeContext
): UpdateStreamProcessorResponse => {
  return {} as any;
};

const deserializeAws_json1_1Urls = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1ValidationData = (output: any, context: __SerdeContext): ValidationData => {
  return {
    Assets: output.Assets != null ? deserializeAws_json1_1Assets(output.Assets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1VideoMetadata = (output: any, context: __SerdeContext): VideoMetadata => {
  return {
    Codec: __expectString(output.Codec),
    ColorRange: __expectString(output.ColorRange),
    DurationMillis: __expectLong(output.DurationMillis),
    Format: __expectString(output.Format),
    FrameHeight: __expectLong(output.FrameHeight),
    FrameRate: __limitedParseFloat32(output.FrameRate),
    FrameWidth: __expectLong(output.FrameWidth),
  } as any;
};

const deserializeAws_json1_1VideoMetadataList = (output: any, context: __SerdeContext): VideoMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VideoMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1VideoTooLargeException = (output: any, context: __SerdeContext): VideoTooLargeException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
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

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
