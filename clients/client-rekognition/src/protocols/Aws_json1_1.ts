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
import {
  CreateFaceLivenessSessionCommandInput,
  CreateFaceLivenessSessionCommandOutput,
} from "../commands/CreateFaceLivenessSessionCommand";
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
import {
  GetFaceLivenessSessionResultsCommandInput,
  GetFaceLivenessSessionResultsCommandOutput,
} from "../commands/GetFaceLivenessSessionResultsCommand";
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
  AuditImage,
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
  CreateFaceLivenessSessionRequest,
  CreateFaceLivenessSessionRequestSettings,
  CreateFaceLivenessSessionResponse,
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
  GetFaceLivenessSessionResultsRequest,
  GetFaceLivenessSessionResultsResponse,
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
  LivenessOutputConfig,
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
  SessionNotFoundException,
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
  ValidationData,
  Video,
  VideoMetadata,
  VideoTooLargeException,
} from "../models/models_0";
import {
  StreamProcessorSettingsForUpdate,
  UpdateStreamProcessorRequest,
  UpdateStreamProcessorResponse,
} from "../models/models_1";
import { RekognitionServiceException as __BaseException } from "../models/RekognitionServiceException";

/**
 * serializeAws_json1_1CompareFacesCommand
 */
export const se_CompareFacesCommand = async (
  input: CompareFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CompareFaces",
  };
  let body: any;
  body = JSON.stringify(se_CompareFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopyProjectVersionCommand
 */
export const se_CopyProjectVersionCommand = async (
  input: CopyProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CopyProjectVersion",
  };
  let body: any;
  body = JSON.stringify(se_CopyProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCollectionCommand
 */
export const se_CreateCollectionCommand = async (
  input: CreateCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateCollection",
  };
  let body: any;
  body = JSON.stringify(se_CreateCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatasetCommand
 */
export const se_CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateDataset",
  };
  let body: any;
  body = JSON.stringify(se_CreateDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFaceLivenessSessionCommand
 */
export const se_CreateFaceLivenessSessionCommand = async (
  input: CreateFaceLivenessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateFaceLivenessSession",
  };
  let body: any;
  body = JSON.stringify(se_CreateFaceLivenessSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateProject",
  };
  let body: any;
  body = JSON.stringify(se_CreateProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectVersionCommand
 */
export const se_CreateProjectVersionCommand = async (
  input: CreateProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateProjectVersion",
  };
  let body: any;
  body = JSON.stringify(se_CreateProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStreamProcessorCommand
 */
export const se_CreateStreamProcessorCommand = async (
  input: CreateStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.CreateStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(se_CreateStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCollectionCommand
 */
export const se_DeleteCollectionCommand = async (
  input: DeleteCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteCollection",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDatasetCommand
 */
export const se_DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteDataset",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFacesCommand
 */
export const se_DeleteFacesCommand = async (
  input: DeleteFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteFaces",
  };
  let body: any;
  body = JSON.stringify(se_DeleteFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteProject",
  };
  let body: any;
  body = JSON.stringify(se_DeleteProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectPolicyCommand
 */
export const se_DeleteProjectPolicyCommand = async (
  input: DeleteProjectPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteProjectPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteProjectPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectVersionCommand
 */
export const se_DeleteProjectVersionCommand = async (
  input: DeleteProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteProjectVersion",
  };
  let body: any;
  body = JSON.stringify(se_DeleteProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStreamProcessorCommand
 */
export const se_DeleteStreamProcessorCommand = async (
  input: DeleteStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DeleteStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(se_DeleteStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCollectionCommand
 */
export const se_DescribeCollectionCommand = async (
  input: DescribeCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DescribeCollection",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDatasetCommand
 */
export const se_DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DescribeDataset",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProjectsCommand
 */
export const se_DescribeProjectsCommand = async (
  input: DescribeProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DescribeProjects",
  };
  let body: any;
  body = JSON.stringify(se_DescribeProjectsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProjectVersionsCommand
 */
export const se_DescribeProjectVersionsCommand = async (
  input: DescribeProjectVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DescribeProjectVersions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeProjectVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStreamProcessorCommand
 */
export const se_DescribeStreamProcessorCommand = async (
  input: DescribeStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DescribeStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(se_DescribeStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectCustomLabelsCommand
 */
export const se_DetectCustomLabelsCommand = async (
  input: DetectCustomLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectCustomLabels",
  };
  let body: any;
  body = JSON.stringify(se_DetectCustomLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectFacesCommand
 */
export const se_DetectFacesCommand = async (
  input: DetectFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectFaces",
  };
  let body: any;
  body = JSON.stringify(se_DetectFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectLabelsCommand
 */
export const se_DetectLabelsCommand = async (
  input: DetectLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectLabels",
  };
  let body: any;
  body = JSON.stringify(se_DetectLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectModerationLabelsCommand
 */
export const se_DetectModerationLabelsCommand = async (
  input: DetectModerationLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectModerationLabels",
  };
  let body: any;
  body = JSON.stringify(se_DetectModerationLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectProtectiveEquipmentCommand
 */
export const se_DetectProtectiveEquipmentCommand = async (
  input: DetectProtectiveEquipmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectProtectiveEquipment",
  };
  let body: any;
  body = JSON.stringify(se_DetectProtectiveEquipmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectTextCommand
 */
export const se_DetectTextCommand = async (
  input: DetectTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DetectText",
  };
  let body: any;
  body = JSON.stringify(se_DetectTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DistributeDatasetEntriesCommand
 */
export const se_DistributeDatasetEntriesCommand = async (
  input: DistributeDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.DistributeDatasetEntries",
  };
  let body: any;
  body = JSON.stringify(se_DistributeDatasetEntriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCelebrityInfoCommand
 */
export const se_GetCelebrityInfoCommand = async (
  input: GetCelebrityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetCelebrityInfo",
  };
  let body: any;
  body = JSON.stringify(se_GetCelebrityInfoRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCelebrityRecognitionCommand
 */
export const se_GetCelebrityRecognitionCommand = async (
  input: GetCelebrityRecognitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetCelebrityRecognition",
  };
  let body: any;
  body = JSON.stringify(se_GetCelebrityRecognitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContentModerationCommand
 */
export const se_GetContentModerationCommand = async (
  input: GetContentModerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetContentModeration",
  };
  let body: any;
  body = JSON.stringify(se_GetContentModerationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFaceDetectionCommand
 */
export const se_GetFaceDetectionCommand = async (
  input: GetFaceDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetFaceDetection",
  };
  let body: any;
  body = JSON.stringify(se_GetFaceDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFaceLivenessSessionResultsCommand
 */
export const se_GetFaceLivenessSessionResultsCommand = async (
  input: GetFaceLivenessSessionResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetFaceLivenessSessionResults",
  };
  let body: any;
  body = JSON.stringify(se_GetFaceLivenessSessionResultsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFaceSearchCommand
 */
export const se_GetFaceSearchCommand = async (
  input: GetFaceSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetFaceSearch",
  };
  let body: any;
  body = JSON.stringify(se_GetFaceSearchRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLabelDetectionCommand
 */
export const se_GetLabelDetectionCommand = async (
  input: GetLabelDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetLabelDetection",
  };
  let body: any;
  body = JSON.stringify(se_GetLabelDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPersonTrackingCommand
 */
export const se_GetPersonTrackingCommand = async (
  input: GetPersonTrackingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetPersonTracking",
  };
  let body: any;
  body = JSON.stringify(se_GetPersonTrackingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSegmentDetectionCommand
 */
export const se_GetSegmentDetectionCommand = async (
  input: GetSegmentDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetSegmentDetection",
  };
  let body: any;
  body = JSON.stringify(se_GetSegmentDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTextDetectionCommand
 */
export const se_GetTextDetectionCommand = async (
  input: GetTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.GetTextDetection",
  };
  let body: any;
  body = JSON.stringify(se_GetTextDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1IndexFacesCommand
 */
export const se_IndexFacesCommand = async (
  input: IndexFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.IndexFaces",
  };
  let body: any;
  body = JSON.stringify(se_IndexFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCollectionsCommand
 */
export const se_ListCollectionsCommand = async (
  input: ListCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListCollections",
  };
  let body: any;
  body = JSON.stringify(se_ListCollectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetEntriesCommand
 */
export const se_ListDatasetEntriesCommand = async (
  input: ListDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListDatasetEntries",
  };
  let body: any;
  body = JSON.stringify(se_ListDatasetEntriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetLabelsCommand
 */
export const se_ListDatasetLabelsCommand = async (
  input: ListDatasetLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListDatasetLabels",
  };
  let body: any;
  body = JSON.stringify(se_ListDatasetLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFacesCommand
 */
export const se_ListFacesCommand = async (
  input: ListFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListFaces",
  };
  let body: any;
  body = JSON.stringify(se_ListFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProjectPoliciesCommand
 */
export const se_ListProjectPoliciesCommand = async (
  input: ListProjectPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListProjectPolicies",
  };
  let body: any;
  body = JSON.stringify(se_ListProjectPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStreamProcessorsCommand
 */
export const se_ListStreamProcessorsCommand = async (
  input: ListStreamProcessorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListStreamProcessors",
  };
  let body: any;
  body = JSON.stringify(se_ListStreamProcessorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutProjectPolicyCommand
 */
export const se_PutProjectPolicyCommand = async (
  input: PutProjectPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.PutProjectPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutProjectPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RecognizeCelebritiesCommand
 */
export const se_RecognizeCelebritiesCommand = async (
  input: RecognizeCelebritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.RecognizeCelebrities",
  };
  let body: any;
  body = JSON.stringify(se_RecognizeCelebritiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchFacesCommand
 */
export const se_SearchFacesCommand = async (
  input: SearchFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.SearchFaces",
  };
  let body: any;
  body = JSON.stringify(se_SearchFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchFacesByImageCommand
 */
export const se_SearchFacesByImageCommand = async (
  input: SearchFacesByImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.SearchFacesByImage",
  };
  let body: any;
  body = JSON.stringify(se_SearchFacesByImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartCelebrityRecognitionCommand
 */
export const se_StartCelebrityRecognitionCommand = async (
  input: StartCelebrityRecognitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartCelebrityRecognition",
  };
  let body: any;
  body = JSON.stringify(se_StartCelebrityRecognitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartContentModerationCommand
 */
export const se_StartContentModerationCommand = async (
  input: StartContentModerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartContentModeration",
  };
  let body: any;
  body = JSON.stringify(se_StartContentModerationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartFaceDetectionCommand
 */
export const se_StartFaceDetectionCommand = async (
  input: StartFaceDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartFaceDetection",
  };
  let body: any;
  body = JSON.stringify(se_StartFaceDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartFaceSearchCommand
 */
export const se_StartFaceSearchCommand = async (
  input: StartFaceSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartFaceSearch",
  };
  let body: any;
  body = JSON.stringify(se_StartFaceSearchRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartLabelDetectionCommand
 */
export const se_StartLabelDetectionCommand = async (
  input: StartLabelDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartLabelDetection",
  };
  let body: any;
  body = JSON.stringify(se_StartLabelDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartPersonTrackingCommand
 */
export const se_StartPersonTrackingCommand = async (
  input: StartPersonTrackingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartPersonTracking",
  };
  let body: any;
  body = JSON.stringify(se_StartPersonTrackingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartProjectVersionCommand
 */
export const se_StartProjectVersionCommand = async (
  input: StartProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartProjectVersion",
  };
  let body: any;
  body = JSON.stringify(se_StartProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSegmentDetectionCommand
 */
export const se_StartSegmentDetectionCommand = async (
  input: StartSegmentDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartSegmentDetection",
  };
  let body: any;
  body = JSON.stringify(se_StartSegmentDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartStreamProcessorCommand
 */
export const se_StartStreamProcessorCommand = async (
  input: StartStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(se_StartStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTextDetectionCommand
 */
export const se_StartTextDetectionCommand = async (
  input: StartTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StartTextDetection",
  };
  let body: any;
  body = JSON.stringify(se_StartTextDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopProjectVersionCommand
 */
export const se_StopProjectVersionCommand = async (
  input: StopProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StopProjectVersion",
  };
  let body: any;
  body = JSON.stringify(se_StopProjectVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopStreamProcessorCommand
 */
export const se_StopStreamProcessorCommand = async (
  input: StopStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.StopStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(se_StopStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDatasetEntriesCommand
 */
export const se_UpdateDatasetEntriesCommand = async (
  input: UpdateDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.UpdateDatasetEntries",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDatasetEntriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStreamProcessorCommand
 */
export const se_UpdateStreamProcessorCommand = async (
  input: UpdateStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RekognitionService.UpdateStreamProcessor",
  };
  let body: any;
  body = JSON.stringify(se_UpdateStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CompareFacesCommand
 */
export const de_CompareFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompareFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CompareFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CompareFacesResponse(data, context);
  const response: CompareFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CompareFacesCommandError
 */
const de_CompareFacesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await de_ImageTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await de_InvalidImageFormatExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CopyProjectVersionCommand
 */
export const de_CopyProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyProjectVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyProjectVersionResponse(data, context);
  const response: CopyProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CopyProjectVersionCommandError
 */
const de_CopyProjectVersionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CreateCollectionCommand
 */
export const de_CreateCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCollectionResponse(data, context);
  const response: CreateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCollectionCommandError
 */
const de_CreateCollectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.rekognition#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CreateDatasetCommand
 */
export const de_CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDatasetCommandError
 */
const de_CreateDatasetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.rekognition#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CreateFaceLivenessSessionCommand
 */
export const de_CreateFaceLivenessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFaceLivenessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFaceLivenessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFaceLivenessSessionResponse(data, context);
  const response: CreateFaceLivenessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateFaceLivenessSessionCommandError
 */
const de_CreateFaceLivenessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFaceLivenessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProjectResponse(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateProjectCommandError
 */
const de_CreateProjectCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CreateProjectVersionCommand
 */
export const de_CreateProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProjectVersionResponse(data, context);
  const response: CreateProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateProjectVersionCommandError
 */
const de_CreateProjectVersionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CreateStreamProcessorCommand
 */
export const de_CreateStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStreamProcessorResponse(data, context);
  const response: CreateStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateStreamProcessorCommandError
 */
const de_CreateStreamProcessorCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteCollectionCommand
 */
export const de_DeleteCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCollectionResponse(data, context);
  const response: DeleteCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCollectionCommandError
 */
const de_DeleteCollectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteDatasetCommand
 */
export const de_DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDatasetResponse(data, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDatasetCommandError
 */
const de_DeleteDatasetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteFacesCommand
 */
export const de_DeleteFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFacesResponse(data, context);
  const response: DeleteFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteFacesCommandError
 */
const de_DeleteFacesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProjectResponse(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteProjectCommandError
 */
const de_DeleteProjectCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteProjectPolicyCommand
 */
export const de_DeleteProjectPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProjectPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProjectPolicyResponse(data, context);
  const response: DeleteProjectPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteProjectPolicyCommandError
 */
const de_DeleteProjectPolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPolicyRevisionIdException":
    case "com.amazonaws.rekognition#InvalidPolicyRevisionIdException":
      throw await de_InvalidPolicyRevisionIdExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteProjectVersionCommand
 */
export const de_DeleteProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProjectVersionResponse(data, context);
  const response: DeleteProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteProjectVersionCommandError
 */
const de_DeleteProjectVersionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteStreamProcessorCommand
 */
export const de_DeleteStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteStreamProcessorResponse(data, context);
  const response: DeleteStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteStreamProcessorCommandError
 */
const de_DeleteStreamProcessorCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DescribeCollectionCommand
 */
export const de_DescribeCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCollectionResponse(data, context);
  const response: DescribeCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCollectionCommandError
 */
const de_DescribeCollectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DescribeDatasetCommand
 */
export const de_DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDatasetCommandError
 */
const de_DescribeDatasetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DescribeProjectsCommand
 */
export const de_DescribeProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProjectsResponse(data, context);
  const response: DescribeProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeProjectsCommandError
 */
const de_DescribeProjectsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DescribeProjectVersionsCommand
 */
export const de_DescribeProjectVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProjectVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProjectVersionsResponse(data, context);
  const response: DescribeProjectVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeProjectVersionsCommandError
 */
const de_DescribeProjectVersionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DescribeStreamProcessorCommand
 */
export const de_DescribeStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStreamProcessorResponse(data, context);
  const response: DescribeStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStreamProcessorCommandError
 */
const de_DescribeStreamProcessorCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DetectCustomLabelsCommand
 */
export const de_DetectCustomLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectCustomLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectCustomLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectCustomLabelsResponse(data, context);
  const response: DetectCustomLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetectCustomLabelsCommandError
 */
const de_DetectCustomLabelsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await de_ImageTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await de_InvalidImageFormatExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.rekognition#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DetectFacesCommand
 */
export const de_DetectFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectFacesResponse(data, context);
  const response: DetectFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetectFacesCommandError
 */
const de_DetectFacesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await de_ImageTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await de_InvalidImageFormatExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DetectLabelsCommand
 */
export const de_DetectLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectLabelsResponse(data, context);
  const response: DetectLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetectLabelsCommandError
 */
const de_DetectLabelsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await de_ImageTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await de_InvalidImageFormatExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DetectModerationLabelsCommand
 */
export const de_DetectModerationLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectModerationLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectModerationLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectModerationLabelsResponse(data, context);
  const response: DetectModerationLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetectModerationLabelsCommandError
 */
const de_DetectModerationLabelsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "HumanLoopQuotaExceededException":
    case "com.amazonaws.rekognition#HumanLoopQuotaExceededException":
      throw await de_HumanLoopQuotaExceededExceptionRes(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await de_ImageTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await de_InvalidImageFormatExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DetectProtectiveEquipmentCommand
 */
export const de_DetectProtectiveEquipmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectProtectiveEquipmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectProtectiveEquipmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectProtectiveEquipmentResponse(data, context);
  const response: DetectProtectiveEquipmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetectProtectiveEquipmentCommandError
 */
const de_DetectProtectiveEquipmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await de_ImageTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await de_InvalidImageFormatExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DetectTextCommand
 */
export const de_DetectTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectTextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectTextResponse(data, context);
  const response: DetectTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetectTextCommandError
 */
const de_DetectTextCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await de_ImageTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await de_InvalidImageFormatExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DistributeDatasetEntriesCommand
 */
export const de_DistributeDatasetEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DistributeDatasetEntriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DistributeDatasetEntriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DistributeDatasetEntriesResponse(data, context);
  const response: DistributeDatasetEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DistributeDatasetEntriesCommandError
 */
const de_DistributeDatasetEntriesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.rekognition#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetCelebrityInfoCommand
 */
export const de_GetCelebrityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityInfoCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCelebrityInfoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCelebrityInfoResponse(data, context);
  const response: GetCelebrityInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCelebrityInfoCommandError
 */
const de_GetCelebrityInfoCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetCelebrityRecognitionCommand
 */
export const de_GetCelebrityRecognitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCelebrityRecognitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCelebrityRecognitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCelebrityRecognitionResponse(data, context);
  const response: GetCelebrityRecognitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCelebrityRecognitionCommandError
 */
const de_GetCelebrityRecognitionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetContentModerationCommand
 */
export const de_GetContentModerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentModerationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContentModerationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContentModerationResponse(data, context);
  const response: GetContentModerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContentModerationCommandError
 */
const de_GetContentModerationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetFaceDetectionCommand
 */
export const de_GetFaceDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFaceDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFaceDetectionResponse(data, context);
  const response: GetFaceDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFaceDetectionCommandError
 */
const de_GetFaceDetectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetFaceLivenessSessionResultsCommand
 */
export const de_GetFaceLivenessSessionResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceLivenessSessionResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFaceLivenessSessionResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFaceLivenessSessionResultsResponse(data, context);
  const response: GetFaceLivenessSessionResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFaceLivenessSessionResultsCommandError
 */
const de_GetFaceLivenessSessionResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceLivenessSessionResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "SessionNotFoundException":
    case "com.amazonaws.rekognition#SessionNotFoundException":
      throw await de_SessionNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetFaceSearchCommand
 */
export const de_GetFaceSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFaceSearchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFaceSearchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFaceSearchResponse(data, context);
  const response: GetFaceSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFaceSearchCommandError
 */
const de_GetFaceSearchCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetLabelDetectionCommand
 */
export const de_GetLabelDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLabelDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLabelDetectionResponse(data, context);
  const response: GetLabelDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLabelDetectionCommandError
 */
const de_GetLabelDetectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetPersonTrackingCommand
 */
export const de_GetPersonTrackingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonTrackingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPersonTrackingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPersonTrackingResponse(data, context);
  const response: GetPersonTrackingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPersonTrackingCommandError
 */
const de_GetPersonTrackingCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetSegmentDetectionCommand
 */
export const de_GetSegmentDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSegmentDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSegmentDetectionResponse(data, context);
  const response: GetSegmentDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSegmentDetectionCommandError
 */
const de_GetSegmentDetectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetTextDetectionCommand
 */
export const de_GetTextDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTextDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTextDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTextDetectionResponse(data, context);
  const response: GetTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetTextDetectionCommandError
 */
const de_GetTextDetectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1IndexFacesCommand
 */
export const de_IndexFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IndexFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IndexFacesResponse(data, context);
  const response: IndexFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1IndexFacesCommandError
 */
const de_IndexFacesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await de_ImageTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await de_InvalidImageFormatExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListCollectionsCommand
 */
export const de_ListCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCollectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCollectionsResponse(data, context);
  const response: ListCollectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCollectionsCommandError
 */
const de_ListCollectionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListDatasetEntriesCommand
 */
export const de_ListDatasetEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetEntriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetEntriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetEntriesResponse(data, context);
  const response: ListDatasetEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDatasetEntriesCommandError
 */
const de_ListDatasetEntriesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.rekognition#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListDatasetLabelsCommand
 */
export const de_ListDatasetLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetLabelsResponse(data, context);
  const response: ListDatasetLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDatasetLabelsCommandError
 */
const de_ListDatasetLabelsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.rekognition#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListFacesCommand
 */
export const de_ListFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFacesResponse(data, context);
  const response: ListFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFacesCommandError
 */
const de_ListFacesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListProjectPoliciesCommand
 */
export const de_ListProjectPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProjectPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProjectPoliciesResponse(data, context);
  const response: ListProjectPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListProjectPoliciesCommandError
 */
const de_ListProjectPoliciesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListStreamProcessorsCommand
 */
export const de_ListStreamProcessorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamProcessorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStreamProcessorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStreamProcessorsResponse(data, context);
  const response: ListStreamProcessorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListStreamProcessorsCommandError
 */
const de_ListStreamProcessorsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.rekognition#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1PutProjectPolicyCommand
 */
export const de_PutProjectPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProjectPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutProjectPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutProjectPolicyResponse(data, context);
  const response: PutProjectPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutProjectPolicyCommandError
 */
const de_PutProjectPolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPolicyRevisionIdException":
    case "com.amazonaws.rekognition#InvalidPolicyRevisionIdException":
      throw await de_InvalidPolicyRevisionIdExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.rekognition#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.rekognition#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1RecognizeCelebritiesCommand
 */
export const de_RecognizeCelebritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeCelebritiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RecognizeCelebritiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RecognizeCelebritiesResponse(data, context);
  const response: RecognizeCelebritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RecognizeCelebritiesCommandError
 */
const de_RecognizeCelebritiesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await de_ImageTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await de_InvalidImageFormatExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1SearchFacesCommand
 */
export const de_SearchFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchFacesResponse(data, context);
  const response: SearchFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchFacesCommandError
 */
const de_SearchFacesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1SearchFacesByImageCommand
 */
export const de_SearchFacesByImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFacesByImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchFacesByImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchFacesByImageResponse(data, context);
  const response: SearchFacesByImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchFacesByImageCommandError
 */
const de_SearchFacesByImageCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ImageTooLargeException":
    case "com.amazonaws.rekognition#ImageTooLargeException":
      throw await de_ImageTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidImageFormatException":
    case "com.amazonaws.rekognition#InvalidImageFormatException":
      throw await de_InvalidImageFormatExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartCelebrityRecognitionCommand
 */
export const de_StartCelebrityRecognitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCelebrityRecognitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartCelebrityRecognitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartCelebrityRecognitionResponse(data, context);
  const response: StartCelebrityRecognitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartCelebrityRecognitionCommandError
 */
const de_StartCelebrityRecognitionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await de_VideoTooLargeExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartContentModerationCommand
 */
export const de_StartContentModerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentModerationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartContentModerationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartContentModerationResponse(data, context);
  const response: StartContentModerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartContentModerationCommandError
 */
const de_StartContentModerationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await de_VideoTooLargeExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartFaceDetectionCommand
 */
export const de_StartFaceDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartFaceDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartFaceDetectionResponse(data, context);
  const response: StartFaceDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartFaceDetectionCommandError
 */
const de_StartFaceDetectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await de_VideoTooLargeExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartFaceSearchCommand
 */
export const de_StartFaceSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceSearchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartFaceSearchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartFaceSearchResponse(data, context);
  const response: StartFaceSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartFaceSearchCommandError
 */
const de_StartFaceSearchCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await de_VideoTooLargeExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartLabelDetectionCommand
 */
export const de_StartLabelDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLabelDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartLabelDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartLabelDetectionResponse(data, context);
  const response: StartLabelDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartLabelDetectionCommandError
 */
const de_StartLabelDetectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await de_VideoTooLargeExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartPersonTrackingCommand
 */
export const de_StartPersonTrackingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPersonTrackingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartPersonTrackingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartPersonTrackingResponse(data, context);
  const response: StartPersonTrackingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartPersonTrackingCommandError
 */
const de_StartPersonTrackingCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await de_VideoTooLargeExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartProjectVersionCommand
 */
export const de_StartProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProjectVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartProjectVersionResponse(data, context);
  const response: StartProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartProjectVersionCommandError
 */
const de_StartProjectVersionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartSegmentDetectionCommand
 */
export const de_StartSegmentDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSegmentDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSegmentDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartSegmentDetectionResponse(data, context);
  const response: StartSegmentDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartSegmentDetectionCommandError
 */
const de_StartSegmentDetectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await de_VideoTooLargeExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartStreamProcessorCommand
 */
export const de_StartStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartStreamProcessorResponse(data, context);
  const response: StartStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartStreamProcessorCommandError
 */
const de_StartStreamProcessorCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartTextDetectionCommand
 */
export const de_StartTextDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartTextDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartTextDetectionResponse(data, context);
  const response: StartTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartTextDetectionCommandError
 */
const de_StartTextDetectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.rekognition#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "VideoTooLargeException":
    case "com.amazonaws.rekognition#VideoTooLargeException":
      throw await de_VideoTooLargeExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StopProjectVersionCommand
 */
export const de_StopProjectVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProjectVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopProjectVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopProjectVersionResponse(data, context);
  const response: StopProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopProjectVersionCommandError
 */
const de_StopProjectVersionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StopStreamProcessorCommand
 */
export const de_StopStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopStreamProcessorResponse(data, context);
  const response: StopStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopStreamProcessorCommandError
 */
const de_StopStreamProcessorCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognition#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UpdateDatasetEntriesCommand
 */
export const de_UpdateDatasetEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetEntriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDatasetEntriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDatasetEntriesResponse(data, context);
  const response: UpdateDatasetEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDatasetEntriesCommandError
 */
const de_UpdateDatasetEntriesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.rekognition#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UpdateStreamProcessorCommand
 */
export const de_UpdateStreamProcessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamProcessorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStreamProcessorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateStreamProcessorResponse(data, context);
  const response: UpdateStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateStreamProcessorCommandError
 */
const de_UpdateStreamProcessorCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.rekognition#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.rekognition#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.rekognition#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rekognition#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognition#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1HumanLoopQuotaExceededExceptionRes
 */
const de_HumanLoopQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HumanLoopQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HumanLoopQuotaExceededException(body, context);
  const exception = new HumanLoopQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchExceptionRes
 */
const de_IdempotentParameterMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ImageTooLargeExceptionRes
 */
const de_ImageTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ImageTooLargeException(body, context);
  const exception = new ImageTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidImageFormatExceptionRes
 */
const de_InvalidImageFormatExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImageFormatException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidImageFormatException(body, context);
  const exception = new InvalidImageFormatException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPaginationTokenExceptionRes
 */
const de_InvalidPaginationTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPaginationTokenException(body, context);
  const exception = new InvalidPaginationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPolicyRevisionIdExceptionRes
 */
const de_InvalidPolicyRevisionIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyRevisionIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPolicyRevisionIdException(body, context);
  const exception = new InvalidPolicyRevisionIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidS3ObjectExceptionRes
 */
const de_InvalidS3ObjectExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3ObjectException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidS3ObjectException(body, context);
  const exception = new InvalidS3ObjectException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MalformedPolicyDocumentExceptionRes
 */
const de_MalformedPolicyDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MalformedPolicyDocumentException(body, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ProvisionedThroughputExceededExceptionRes
 */
const de_ProvisionedThroughputExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ProvisionedThroughputExceededException(body, context);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotReadyExceptionRes
 */
const de_ResourceNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotReadyException(body, context);
  const exception = new ResourceNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SessionNotFoundExceptionRes
 */
const de_SessionNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SessionNotFoundException(body, context);
  const exception = new SessionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1VideoTooLargeExceptionRes
 */
const de_VideoTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VideoTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_VideoTooLargeException(body, context);
  const exception = new VideoTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1Asset
 */
const se_Asset = (input: Asset, context: __SerdeContext): any => {
  return {
    ...(input.GroundTruthManifest != null && {
      GroundTruthManifest: se_GroundTruthManifest(input.GroundTruthManifest, context),
    }),
  };
};

/**
 * serializeAws_json1_1Assets
 */
const se_Assets = (input: Asset[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Asset(entry, context);
    });
};

/**
 * serializeAws_json1_1Attributes
 */
const se_Attributes = (input: (Attribute | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BlackFrame
 */
const se_BlackFrame = (input: BlackFrame, context: __SerdeContext): any => {
  return {
    ...(input.MaxPixelThreshold != null && { MaxPixelThreshold: __serializeFloat(input.MaxPixelThreshold) }),
    ...(input.MinCoveragePercentage != null && {
      MinCoveragePercentage: __serializeFloat(input.MinCoveragePercentage),
    }),
  };
};

/**
 * serializeAws_json1_1BoundingBox
 */
const se_BoundingBox = (input: BoundingBox, context: __SerdeContext): any => {
  return {
    ...(input.Height != null && { Height: __serializeFloat(input.Height) }),
    ...(input.Left != null && { Left: __serializeFloat(input.Left) }),
    ...(input.Top != null && { Top: __serializeFloat(input.Top) }),
    ...(input.Width != null && { Width: __serializeFloat(input.Width) }),
  };
};

/**
 * serializeAws_json1_1CompareFacesRequest
 */
const se_CompareFacesRequest = (input: CompareFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.QualityFilter != null && { QualityFilter: input.QualityFilter }),
    ...(input.SimilarityThreshold != null && { SimilarityThreshold: __serializeFloat(input.SimilarityThreshold) }),
    ...(input.SourceImage != null && { SourceImage: se_Image(input.SourceImage, context) }),
    ...(input.TargetImage != null && { TargetImage: se_Image(input.TargetImage, context) }),
  };
};

/**
 * serializeAws_json1_1ConnectedHomeLabels
 */
const se_ConnectedHomeLabels = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConnectedHomeSettings
 */
const se_ConnectedHomeSettings = (input: ConnectedHomeSettings, context: __SerdeContext): any => {
  return {
    ...(input.Labels != null && { Labels: se_ConnectedHomeLabels(input.Labels, context) }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
  };
};

/**
 * serializeAws_json1_1ConnectedHomeSettingsForUpdate
 */
const se_ConnectedHomeSettingsForUpdate = (input: ConnectedHomeSettingsForUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Labels != null && { Labels: se_ConnectedHomeLabels(input.Labels, context) }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
  };
};

/**
 * serializeAws_json1_1ContentClassifiers
 */
const se_ContentClassifiers = (input: (ContentClassifier | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CopyProjectVersionRequest
 */
const se_CopyProjectVersionRequest = (input: CopyProjectVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DestinationProjectArn != null && { DestinationProjectArn: input.DestinationProjectArn }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.OutputConfig != null && { OutputConfig: se_OutputConfig(input.OutputConfig, context) }),
    ...(input.SourceProjectArn != null && { SourceProjectArn: input.SourceProjectArn }),
    ...(input.SourceProjectVersionArn != null && { SourceProjectVersionArn: input.SourceProjectVersionArn }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

/**
 * serializeAws_json1_1CreateCollectionRequest
 */
const se_CreateCollectionRequest = (input: CreateCollectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDatasetRequest
 */
const se_CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetSource != null && { DatasetSource: se_DatasetSource(input.DatasetSource, context) }),
    ...(input.DatasetType != null && { DatasetType: input.DatasetType }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
  };
};

/**
 * serializeAws_json1_1CreateFaceLivenessSessionRequest
 */
const se_CreateFaceLivenessSessionRequest = (input: CreateFaceLivenessSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Settings != null && { Settings: se_CreateFaceLivenessSessionRequestSettings(input.Settings, context) }),
  };
};

/**
 * serializeAws_json1_1CreateFaceLivenessSessionRequestSettings
 */
const se_CreateFaceLivenessSessionRequestSettings = (
  input: CreateFaceLivenessSessionRequestSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditImagesLimit != null && { AuditImagesLimit: input.AuditImagesLimit }),
    ...(input.OutputConfig != null && { OutputConfig: se_LivenessOutputConfig(input.OutputConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CreateProjectRequest
 */
const se_CreateProjectRequest = (input: CreateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProjectName != null && { ProjectName: input.ProjectName }),
  };
};

/**
 * serializeAws_json1_1CreateProjectVersionRequest
 */
const se_CreateProjectVersionRequest = (input: CreateProjectVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.OutputConfig != null && { OutputConfig: se_OutputConfig(input.OutputConfig, context) }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.TestingData != null && { TestingData: se_TestingData(input.TestingData, context) }),
    ...(input.TrainingData != null && { TrainingData: se_TrainingData(input.TrainingData, context) }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

/**
 * serializeAws_json1_1CreateStreamProcessorRequest
 */
const se_CreateStreamProcessorRequest = (input: CreateStreamProcessorRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataSharingPreference != null && {
      DataSharingPreference: se_StreamProcessorDataSharingPreference(input.DataSharingPreference, context),
    }),
    ...(input.Input != null && { Input: se_StreamProcessorInput(input.Input, context) }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_StreamProcessorNotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Output != null && { Output: se_StreamProcessorOutput(input.Output, context) }),
    ...(input.RegionsOfInterest != null && {
      RegionsOfInterest: se_RegionsOfInterest(input.RegionsOfInterest, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Settings != null && { Settings: se_StreamProcessorSettings(input.Settings, context) }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1DatasetChanges
 */
const se_DatasetChanges = (input: DatasetChanges, context: __SerdeContext): any => {
  return {
    ...(input.GroundTruth != null && { GroundTruth: context.base64Encoder(input.GroundTruth) }),
  };
};

/**
 * serializeAws_json1_1DatasetLabels
 */
const se_DatasetLabels = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DatasetSource
 */
const se_DatasetSource = (input: DatasetSource, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
    ...(input.GroundTruthManifest != null && {
      GroundTruthManifest: se_GroundTruthManifest(input.GroundTruthManifest, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteCollectionRequest
 */
const se_DeleteCollectionRequest = (input: DeleteCollectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
  };
};

/**
 * serializeAws_json1_1DeleteDatasetRequest
 */
const se_DeleteDatasetRequest = (input: DeleteDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
  };
};

/**
 * serializeAws_json1_1DeleteFacesRequest
 */
const se_DeleteFacesRequest = (input: DeleteFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.FaceIds != null && { FaceIds: se_FaceIdList(input.FaceIds, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteProjectPolicyRequest
 */
const se_DeleteProjectPolicyRequest = (input: DeleteProjectPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.PolicyRevisionId != null && { PolicyRevisionId: input.PolicyRevisionId }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
  };
};

/**
 * serializeAws_json1_1DeleteProjectRequest
 */
const se_DeleteProjectRequest = (input: DeleteProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
  };
};

/**
 * serializeAws_json1_1DeleteProjectVersionRequest
 */
const se_DeleteProjectVersionRequest = (input: DeleteProjectVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProjectVersionArn != null && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

/**
 * serializeAws_json1_1DeleteStreamProcessorRequest
 */
const se_DeleteStreamProcessorRequest = (input: DeleteStreamProcessorRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeCollectionRequest
 */
const se_DescribeCollectionRequest = (input: DescribeCollectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
  };
};

/**
 * serializeAws_json1_1DescribeDatasetRequest
 */
const se_DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
  };
};

/**
 * serializeAws_json1_1DescribeProjectsRequest
 */
const se_DescribeProjectsRequest = (input: DescribeProjectsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProjectNames != null && { ProjectNames: se_ProjectNames(input.ProjectNames, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeProjectVersionsRequest
 */
const se_DescribeProjectVersionsRequest = (input: DescribeProjectVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
    ...(input.VersionNames != null && { VersionNames: se_VersionNames(input.VersionNames, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeStreamProcessorRequest
 */
const se_DescribeStreamProcessorRequest = (input: DescribeStreamProcessorRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DetectCustomLabelsRequest
 */
const se_DetectCustomLabelsRequest = (input: DetectCustomLabelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Image != null && { Image: se_Image(input.Image, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
    ...(input.ProjectVersionArn != null && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

/**
 * serializeAws_json1_1DetectFacesRequest
 */
const se_DetectFacesRequest = (input: DetectFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_Attributes(input.Attributes, context) }),
    ...(input.Image != null && { Image: se_Image(input.Image, context) }),
  };
};

/**
 * serializeAws_json1_1DetectionFilter
 */
const se_DetectionFilter = (input: DetectionFilter, context: __SerdeContext): any => {
  return {
    ...(input.MinBoundingBoxHeight != null && { MinBoundingBoxHeight: __serializeFloat(input.MinBoundingBoxHeight) }),
    ...(input.MinBoundingBoxWidth != null && { MinBoundingBoxWidth: __serializeFloat(input.MinBoundingBoxWidth) }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
  };
};

/**
 * serializeAws_json1_1DetectLabelsFeatureList
 */
const se_DetectLabelsFeatureList = (input: (DetectLabelsFeatureName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DetectLabelsImagePropertiesSettings
 */
const se_DetectLabelsImagePropertiesSettings = (
  input: DetectLabelsImagePropertiesSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxDominantColors != null && { MaxDominantColors: input.MaxDominantColors }),
  };
};

/**
 * serializeAws_json1_1DetectLabelsRequest
 */
const se_DetectLabelsRequest = (input: DetectLabelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Features != null && { Features: se_DetectLabelsFeatureList(input.Features, context) }),
    ...(input.Image != null && { Image: se_Image(input.Image, context) }),
    ...(input.MaxLabels != null && { MaxLabels: input.MaxLabels }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
    ...(input.Settings != null && { Settings: se_DetectLabelsSettings(input.Settings, context) }),
  };
};

/**
 * serializeAws_json1_1DetectLabelsSettings
 */
const se_DetectLabelsSettings = (input: DetectLabelsSettings, context: __SerdeContext): any => {
  return {
    ...(input.GeneralLabels != null && { GeneralLabels: se_GeneralLabelsSettings(input.GeneralLabels, context) }),
    ...(input.ImageProperties != null && {
      ImageProperties: se_DetectLabelsImagePropertiesSettings(input.ImageProperties, context),
    }),
  };
};

/**
 * serializeAws_json1_1DetectModerationLabelsRequest
 */
const se_DetectModerationLabelsRequest = (input: DetectModerationLabelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.HumanLoopConfig != null && { HumanLoopConfig: se_HumanLoopConfig(input.HumanLoopConfig, context) }),
    ...(input.Image != null && { Image: se_Image(input.Image, context) }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
  };
};

/**
 * serializeAws_json1_1DetectProtectiveEquipmentRequest
 */
const se_DetectProtectiveEquipmentRequest = (input: DetectProtectiveEquipmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Image != null && { Image: se_Image(input.Image, context) }),
    ...(input.SummarizationAttributes != null && {
      SummarizationAttributes: se_ProtectiveEquipmentSummarizationAttributes(input.SummarizationAttributes, context),
    }),
  };
};

/**
 * serializeAws_json1_1DetectTextFilters
 */
const se_DetectTextFilters = (input: DetectTextFilters, context: __SerdeContext): any => {
  return {
    ...(input.RegionsOfInterest != null && {
      RegionsOfInterest: se_RegionsOfInterest(input.RegionsOfInterest, context),
    }),
    ...(input.WordFilter != null && { WordFilter: se_DetectionFilter(input.WordFilter, context) }),
  };
};

/**
 * serializeAws_json1_1DetectTextRequest
 */
const se_DetectTextRequest = (input: DetectTextRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_DetectTextFilters(input.Filters, context) }),
    ...(input.Image != null && { Image: se_Image(input.Image, context) }),
  };
};

/**
 * serializeAws_json1_1DistributeDataset
 */
const se_DistributeDataset = (input: DistributeDataset, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

/**
 * serializeAws_json1_1DistributeDatasetEntriesRequest
 */
const se_DistributeDatasetEntriesRequest = (input: DistributeDatasetEntriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Datasets != null && { Datasets: se_DistributeDatasetMetadataList(input.Datasets, context) }),
  };
};

/**
 * serializeAws_json1_1DistributeDatasetMetadataList
 */
const se_DistributeDatasetMetadataList = (input: DistributeDataset[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DistributeDataset(entry, context);
    });
};

/**
 * serializeAws_json1_1FaceIdList
 */
const se_FaceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FaceSearchSettings
 */
const se_FaceSearchSettings = (input: FaceSearchSettings, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.FaceMatchThreshold != null && { FaceMatchThreshold: __serializeFloat(input.FaceMatchThreshold) }),
  };
};

/**
 * serializeAws_json1_1GeneralLabelsFilterList
 */
const se_GeneralLabelsFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GeneralLabelsSettings
 */
const se_GeneralLabelsSettings = (input: GeneralLabelsSettings, context: __SerdeContext): any => {
  return {
    ...(input.LabelCategoryExclusionFilters != null && {
      LabelCategoryExclusionFilters: se_GeneralLabelsFilterList(input.LabelCategoryExclusionFilters, context),
    }),
    ...(input.LabelCategoryInclusionFilters != null && {
      LabelCategoryInclusionFilters: se_GeneralLabelsFilterList(input.LabelCategoryInclusionFilters, context),
    }),
    ...(input.LabelExclusionFilters != null && {
      LabelExclusionFilters: se_GeneralLabelsFilterList(input.LabelExclusionFilters, context),
    }),
    ...(input.LabelInclusionFilters != null && {
      LabelInclusionFilters: se_GeneralLabelsFilterList(input.LabelInclusionFilters, context),
    }),
  };
};

/**
 * serializeAws_json1_1GetCelebrityInfoRequest
 */
const se_GetCelebrityInfoRequest = (input: GetCelebrityInfoRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1GetCelebrityRecognitionRequest
 */
const se_GetCelebrityRecognitionRequest = (input: GetCelebrityRecognitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
  };
};

/**
 * serializeAws_json1_1GetContentModerationRequest
 */
const se_GetContentModerationRequest = (input: GetContentModerationRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
  };
};

/**
 * serializeAws_json1_1GetFaceDetectionRequest
 */
const se_GetFaceDetectionRequest = (input: GetFaceDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetFaceLivenessSessionResultsRequest
 */
const se_GetFaceLivenessSessionResultsRequest = (
  input: GetFaceLivenessSessionResultsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

/**
 * serializeAws_json1_1GetFaceSearchRequest
 */
const se_GetFaceSearchRequest = (input: GetFaceSearchRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
  };
};

/**
 * serializeAws_json1_1GetLabelDetectionRequest
 */
const se_GetLabelDetectionRequest = (input: GetLabelDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AggregateBy != null && { AggregateBy: input.AggregateBy }),
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
  };
};

/**
 * serializeAws_json1_1GetPersonTrackingRequest
 */
const se_GetPersonTrackingRequest = (input: GetPersonTrackingRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
  };
};

/**
 * serializeAws_json1_1GetSegmentDetectionRequest
 */
const se_GetSegmentDetectionRequest = (input: GetSegmentDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetTextDetectionRequest
 */
const se_GetTextDetectionRequest = (input: GetTextDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GroundTruthManifest
 */
const se_GroundTruthManifest = (input: GroundTruthManifest, context: __SerdeContext): any => {
  return {
    ...(input.S3Object != null && { S3Object: se_S3Object(input.S3Object, context) }),
  };
};

/**
 * serializeAws_json1_1HumanLoopConfig
 */
const se_HumanLoopConfig = (input: HumanLoopConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataAttributes != null && { DataAttributes: se_HumanLoopDataAttributes(input.DataAttributes, context) }),
    ...(input.FlowDefinitionArn != null && { FlowDefinitionArn: input.FlowDefinitionArn }),
    ...(input.HumanLoopName != null && { HumanLoopName: input.HumanLoopName }),
  };
};

/**
 * serializeAws_json1_1HumanLoopDataAttributes
 */
const se_HumanLoopDataAttributes = (input: HumanLoopDataAttributes, context: __SerdeContext): any => {
  return {
    ...(input.ContentClassifiers != null && {
      ContentClassifiers: se_ContentClassifiers(input.ContentClassifiers, context),
    }),
  };
};

/**
 * serializeAws_json1_1Image
 */
const se_Image = (input: Image, context: __SerdeContext): any => {
  return {
    ...(input.Bytes != null && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.S3Object != null && { S3Object: se_S3Object(input.S3Object, context) }),
  };
};

/**
 * serializeAws_json1_1IndexFacesRequest
 */
const se_IndexFacesRequest = (input: IndexFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.DetectionAttributes != null && {
      DetectionAttributes: se_Attributes(input.DetectionAttributes, context),
    }),
    ...(input.ExternalImageId != null && { ExternalImageId: input.ExternalImageId }),
    ...(input.Image != null && { Image: se_Image(input.Image, context) }),
    ...(input.MaxFaces != null && { MaxFaces: input.MaxFaces }),
    ...(input.QualityFilter != null && { QualityFilter: input.QualityFilter }),
  };
};

/**
 * serializeAws_json1_1KinesisDataStream
 */
const se_KinesisDataStream = (input: KinesisDataStream, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

/**
 * serializeAws_json1_1KinesisVideoStream
 */
const se_KinesisVideoStream = (input: KinesisVideoStream, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

/**
 * serializeAws_json1_1KinesisVideoStreamStartSelector
 */
const se_KinesisVideoStreamStartSelector = (input: KinesisVideoStreamStartSelector, context: __SerdeContext): any => {
  return {
    ...(input.FragmentNumber != null && { FragmentNumber: input.FragmentNumber }),
    ...(input.ProducerTimestamp != null && { ProducerTimestamp: input.ProducerTimestamp }),
  };
};

/**
 * serializeAws_json1_1LabelDetectionFeatureList
 */
const se_LabelDetectionFeatureList = (input: (LabelDetectionFeatureName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1LabelDetectionSettings
 */
const se_LabelDetectionSettings = (input: LabelDetectionSettings, context: __SerdeContext): any => {
  return {
    ...(input.GeneralLabels != null && { GeneralLabels: se_GeneralLabelsSettings(input.GeneralLabels, context) }),
  };
};

/**
 * serializeAws_json1_1ListCollectionsRequest
 */
const se_ListCollectionsRequest = (input: ListCollectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDatasetEntriesRequest
 */
const se_ListDatasetEntriesRequest = (input: ListDatasetEntriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContainsLabels != null && { ContainsLabels: se_DatasetLabels(input.ContainsLabels, context) }),
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
    ...(input.HasErrors != null && { HasErrors: input.HasErrors }),
    ...(input.Labeled != null && { Labeled: input.Labeled }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SourceRefContains != null && { SourceRefContains: input.SourceRefContains }),
  };
};

/**
 * serializeAws_json1_1ListDatasetLabelsRequest
 */
const se_ListDatasetLabelsRequest = (input: ListDatasetLabelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFacesRequest
 */
const se_ListFacesRequest = (input: ListFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListProjectPoliciesRequest
 */
const se_ListProjectPoliciesRequest = (input: ListProjectPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
  };
};

/**
 * serializeAws_json1_1ListStreamProcessorsRequest
 */
const se_ListStreamProcessorsRequest = (input: ListStreamProcessorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1LivenessOutputConfig
 */
const se_LivenessOutputConfig = (input: LivenessOutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

/**
 * serializeAws_json1_1NotificationChannel
 */
const se_NotificationChannel = (input: NotificationChannel, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SNSTopicArn != null && { SNSTopicArn: input.SNSTopicArn }),
  };
};

/**
 * serializeAws_json1_1OutputConfig
 */
const se_OutputConfig = (input: OutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

/**
 * serializeAws_json1_1Point
 */
const se_Point = (input: Point, context: __SerdeContext): any => {
  return {
    ...(input.X != null && { X: __serializeFloat(input.X) }),
    ...(input.Y != null && { Y: __serializeFloat(input.Y) }),
  };
};

/**
 * serializeAws_json1_1Polygon
 */
const se_Polygon = (input: Point[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Point(entry, context);
    });
};

/**
 * serializeAws_json1_1ProjectNames
 */
const se_ProjectNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProtectiveEquipmentSummarizationAttributes
 */
const se_ProtectiveEquipmentSummarizationAttributes = (
  input: ProtectiveEquipmentSummarizationAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
    ...(input.RequiredEquipmentTypes != null && {
      RequiredEquipmentTypes: se_ProtectiveEquipmentTypes(input.RequiredEquipmentTypes, context),
    }),
  };
};

/**
 * serializeAws_json1_1ProtectiveEquipmentTypes
 */
const se_ProtectiveEquipmentTypes = (input: (ProtectiveEquipmentType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PutProjectPolicyRequest
 */
const se_PutProjectPolicyRequest = (input: PutProjectPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyDocument != null && { PolicyDocument: input.PolicyDocument }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.PolicyRevisionId != null && { PolicyRevisionId: input.PolicyRevisionId }),
    ...(input.ProjectArn != null && { ProjectArn: input.ProjectArn }),
  };
};

/**
 * serializeAws_json1_1RecognizeCelebritiesRequest
 */
const se_RecognizeCelebritiesRequest = (input: RecognizeCelebritiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Image != null && { Image: se_Image(input.Image, context) }),
  };
};

/**
 * serializeAws_json1_1RegionOfInterest
 */
const se_RegionOfInterest = (input: RegionOfInterest, context: __SerdeContext): any => {
  return {
    ...(input.BoundingBox != null && { BoundingBox: se_BoundingBox(input.BoundingBox, context) }),
    ...(input.Polygon != null && { Polygon: se_Polygon(input.Polygon, context) }),
  };
};

/**
 * serializeAws_json1_1RegionsOfInterest
 */
const se_RegionsOfInterest = (input: RegionOfInterest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RegionOfInterest(entry, context);
    });
};

/**
 * serializeAws_json1_1S3Destination
 */
const se_S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.KeyPrefix != null && { KeyPrefix: input.KeyPrefix }),
  };
};

/**
 * serializeAws_json1_1S3Object
 */
const se_S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1SearchFacesByImageRequest
 */
const se_SearchFacesByImageRequest = (input: SearchFacesByImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.FaceMatchThreshold != null && { FaceMatchThreshold: __serializeFloat(input.FaceMatchThreshold) }),
    ...(input.Image != null && { Image: se_Image(input.Image, context) }),
    ...(input.MaxFaces != null && { MaxFaces: input.MaxFaces }),
    ...(input.QualityFilter != null && { QualityFilter: input.QualityFilter }),
  };
};

/**
 * serializeAws_json1_1SearchFacesRequest
 */
const se_SearchFacesRequest = (input: SearchFacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.FaceId != null && { FaceId: input.FaceId }),
    ...(input.FaceMatchThreshold != null && { FaceMatchThreshold: __serializeFloat(input.FaceMatchThreshold) }),
    ...(input.MaxFaces != null && { MaxFaces: input.MaxFaces }),
  };
};

/**
 * serializeAws_json1_1SegmentTypes
 */
const se_SegmentTypes = (input: (SegmentType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StartCelebrityRecognitionRequest
 */
const se_StartCelebrityRecognitionRequest = (input: StartCelebrityRecognitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: se_Video(input.Video, context) }),
  };
};

/**
 * serializeAws_json1_1StartContentModerationRequest
 */
const se_StartContentModerationRequest = (input: StartContentModerationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: se_Video(input.Video, context) }),
  };
};

/**
 * serializeAws_json1_1StartFaceDetectionRequest
 */
const se_StartFaceDetectionRequest = (input: StartFaceDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.FaceAttributes != null && { FaceAttributes: input.FaceAttributes }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: se_Video(input.Video, context) }),
  };
};

/**
 * serializeAws_json1_1StartFaceSearchRequest
 */
const se_StartFaceSearchRequest = (input: StartFaceSearchRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.CollectionId != null && { CollectionId: input.CollectionId }),
    ...(input.FaceMatchThreshold != null && { FaceMatchThreshold: __serializeFloat(input.FaceMatchThreshold) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: se_Video(input.Video, context) }),
  };
};

/**
 * serializeAws_json1_1StartLabelDetectionRequest
 */
const se_StartLabelDetectionRequest = (input: StartLabelDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Features != null && { Features: se_LabelDetectionFeatureList(input.Features, context) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.MinConfidence != null && { MinConfidence: __serializeFloat(input.MinConfidence) }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Settings != null && { Settings: se_LabelDetectionSettings(input.Settings, context) }),
    ...(input.Video != null && { Video: se_Video(input.Video, context) }),
  };
};

/**
 * serializeAws_json1_1StartPersonTrackingRequest
 */
const se_StartPersonTrackingRequest = (input: StartPersonTrackingRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: se_Video(input.Video, context) }),
  };
};

/**
 * serializeAws_json1_1StartProjectVersionRequest
 */
const se_StartProjectVersionRequest = (input: StartProjectVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxInferenceUnits != null && { MaxInferenceUnits: input.MaxInferenceUnits }),
    ...(input.MinInferenceUnits != null && { MinInferenceUnits: input.MinInferenceUnits }),
    ...(input.ProjectVersionArn != null && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

/**
 * serializeAws_json1_1StartSegmentDetectionFilters
 */
const se_StartSegmentDetectionFilters = (input: StartSegmentDetectionFilters, context: __SerdeContext): any => {
  return {
    ...(input.ShotFilter != null && { ShotFilter: se_StartShotDetectionFilter(input.ShotFilter, context) }),
    ...(input.TechnicalCueFilter != null && {
      TechnicalCueFilter: se_StartTechnicalCueDetectionFilter(input.TechnicalCueFilter, context),
    }),
  };
};

/**
 * serializeAws_json1_1StartSegmentDetectionRequest
 */
const se_StartSegmentDetectionRequest = (input: StartSegmentDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Filters != null && { Filters: se_StartSegmentDetectionFilters(input.Filters, context) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.SegmentTypes != null && { SegmentTypes: se_SegmentTypes(input.SegmentTypes, context) }),
    ...(input.Video != null && { Video: se_Video(input.Video, context) }),
  };
};

/**
 * serializeAws_json1_1StartShotDetectionFilter
 */
const se_StartShotDetectionFilter = (input: StartShotDetectionFilter, context: __SerdeContext): any => {
  return {
    ...(input.MinSegmentConfidence != null && { MinSegmentConfidence: __serializeFloat(input.MinSegmentConfidence) }),
  };
};

/**
 * serializeAws_json1_1StartStreamProcessorRequest
 */
const se_StartStreamProcessorRequest = (input: StartStreamProcessorRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StartSelector != null && {
      StartSelector: se_StreamProcessingStartSelector(input.StartSelector, context),
    }),
    ...(input.StopSelector != null && { StopSelector: se_StreamProcessingStopSelector(input.StopSelector, context) }),
  };
};

/**
 * serializeAws_json1_1StartTechnicalCueDetectionFilter
 */
const se_StartTechnicalCueDetectionFilter = (input: StartTechnicalCueDetectionFilter, context: __SerdeContext): any => {
  return {
    ...(input.BlackFrame != null && { BlackFrame: se_BlackFrame(input.BlackFrame, context) }),
    ...(input.MinSegmentConfidence != null && { MinSegmentConfidence: __serializeFloat(input.MinSegmentConfidence) }),
  };
};

/**
 * serializeAws_json1_1StartTextDetectionFilters
 */
const se_StartTextDetectionFilters = (input: StartTextDetectionFilters, context: __SerdeContext): any => {
  return {
    ...(input.RegionsOfInterest != null && {
      RegionsOfInterest: se_RegionsOfInterest(input.RegionsOfInterest, context),
    }),
    ...(input.WordFilter != null && { WordFilter: se_DetectionFilter(input.WordFilter, context) }),
  };
};

/**
 * serializeAws_json1_1StartTextDetectionRequest
 */
const se_StartTextDetectionRequest = (input: StartTextDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Filters != null && { Filters: se_StartTextDetectionFilters(input.Filters, context) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.Video != null && { Video: se_Video(input.Video, context) }),
  };
};

/**
 * serializeAws_json1_1StopProjectVersionRequest
 */
const se_StopProjectVersionRequest = (input: StopProjectVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProjectVersionArn != null && { ProjectVersionArn: input.ProjectVersionArn }),
  };
};

/**
 * serializeAws_json1_1StopStreamProcessorRequest
 */
const se_StopStreamProcessorRequest = (input: StopStreamProcessorRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1StreamProcessingStartSelector
 */
const se_StreamProcessingStartSelector = (input: StreamProcessingStartSelector, context: __SerdeContext): any => {
  return {
    ...(input.KVSStreamStartSelector != null && {
      KVSStreamStartSelector: se_KinesisVideoStreamStartSelector(input.KVSStreamStartSelector, context),
    }),
  };
};

/**
 * serializeAws_json1_1StreamProcessingStopSelector
 */
const se_StreamProcessingStopSelector = (input: StreamProcessingStopSelector, context: __SerdeContext): any => {
  return {
    ...(input.MaxDurationInSeconds != null && { MaxDurationInSeconds: input.MaxDurationInSeconds }),
  };
};

/**
 * serializeAws_json1_1StreamProcessorDataSharingPreference
 */
const se_StreamProcessorDataSharingPreference = (
  input: StreamProcessorDataSharingPreference,
  context: __SerdeContext
): any => {
  return {
    ...(input.OptIn != null && { OptIn: input.OptIn }),
  };
};

/**
 * serializeAws_json1_1StreamProcessorInput
 */
const se_StreamProcessorInput = (input: StreamProcessorInput, context: __SerdeContext): any => {
  return {
    ...(input.KinesisVideoStream != null && {
      KinesisVideoStream: se_KinesisVideoStream(input.KinesisVideoStream, context),
    }),
  };
};

/**
 * serializeAws_json1_1StreamProcessorNotificationChannel
 */
const se_StreamProcessorNotificationChannel = (
  input: StreamProcessorNotificationChannel,
  context: __SerdeContext
): any => {
  return {
    ...(input.SNSTopicArn != null && { SNSTopicArn: input.SNSTopicArn }),
  };
};

/**
 * serializeAws_json1_1StreamProcessorOutput
 */
const se_StreamProcessorOutput = (input: StreamProcessorOutput, context: __SerdeContext): any => {
  return {
    ...(input.KinesisDataStream != null && {
      KinesisDataStream: se_KinesisDataStream(input.KinesisDataStream, context),
    }),
    ...(input.S3Destination != null && { S3Destination: se_S3Destination(input.S3Destination, context) }),
  };
};

/**
 * serializeAws_json1_1StreamProcessorParametersToDelete
 */
const se_StreamProcessorParametersToDelete = (
  input: (StreamProcessorParameterToDelete | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StreamProcessorSettings
 */
const se_StreamProcessorSettings = (input: StreamProcessorSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConnectedHome != null && { ConnectedHome: se_ConnectedHomeSettings(input.ConnectedHome, context) }),
    ...(input.FaceSearch != null && { FaceSearch: se_FaceSearchSettings(input.FaceSearch, context) }),
  };
};

/**
 * serializeAws_json1_1StreamProcessorSettingsForUpdate
 */
const se_StreamProcessorSettingsForUpdate = (input: StreamProcessorSettingsForUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ConnectedHomeForUpdate != null && {
      ConnectedHomeForUpdate: se_ConnectedHomeSettingsForUpdate(input.ConnectedHomeForUpdate, context),
    }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TestingData
 */
const se_TestingData = (input: TestingData, context: __SerdeContext): any => {
  return {
    ...(input.Assets != null && { Assets: se_Assets(input.Assets, context) }),
    ...(input.AutoCreate != null && { AutoCreate: input.AutoCreate }),
  };
};

/**
 * serializeAws_json1_1TrainingData
 */
const se_TrainingData = (input: TrainingData, context: __SerdeContext): any => {
  return {
    ...(input.Assets != null && { Assets: se_Assets(input.Assets, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDatasetEntriesRequest
 */
const se_UpdateDatasetEntriesRequest = (input: UpdateDatasetEntriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Changes != null && { Changes: se_DatasetChanges(input.Changes, context) }),
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
  };
};

/**
 * serializeAws_json1_1UpdateStreamProcessorRequest
 */
const se_UpdateStreamProcessorRequest = (input: UpdateStreamProcessorRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataSharingPreferenceForUpdate != null && {
      DataSharingPreferenceForUpdate: se_StreamProcessorDataSharingPreference(
        input.DataSharingPreferenceForUpdate,
        context
      ),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParametersToDelete != null && {
      ParametersToDelete: se_StreamProcessorParametersToDelete(input.ParametersToDelete, context),
    }),
    ...(input.RegionsOfInterestForUpdate != null && {
      RegionsOfInterestForUpdate: se_RegionsOfInterest(input.RegionsOfInterestForUpdate, context),
    }),
    ...(input.SettingsForUpdate != null && {
      SettingsForUpdate: se_StreamProcessorSettingsForUpdate(input.SettingsForUpdate, context),
    }),
  };
};

/**
 * serializeAws_json1_1VersionNames
 */
const se_VersionNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Video
 */
const se_Video = (input: Video, context: __SerdeContext): any => {
  return {
    ...(input.S3Object != null && { S3Object: se_S3Object(input.S3Object, context) }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AgeRange
 */
const de_AgeRange = (output: any, context: __SerdeContext): AgeRange => {
  return {
    High: __expectInt32(output.High),
    Low: __expectInt32(output.Low),
  } as any;
};

/**
 * deserializeAws_json1_1Asset
 */
const de_Asset = (output: any, context: __SerdeContext): Asset => {
  return {
    GroundTruthManifest:
      output.GroundTruthManifest != null ? de_GroundTruthManifest(output.GroundTruthManifest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Assets
 */
const de_Assets = (output: any, context: __SerdeContext): Asset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Asset(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AudioMetadata
 */
const de_AudioMetadata = (output: any, context: __SerdeContext): AudioMetadata => {
  return {
    Codec: __expectString(output.Codec),
    DurationMillis: __expectLong(output.DurationMillis),
    NumberOfChannels: __expectLong(output.NumberOfChannels),
    SampleRate: __expectLong(output.SampleRate),
  } as any;
};

/**
 * deserializeAws_json1_1AudioMetadataList
 */
const de_AudioMetadataList = (output: any, context: __SerdeContext): AudioMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AudioMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AuditImage
 */
const de_AuditImage = (output: any, context: __SerdeContext): AuditImage => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Bytes: output.Bytes != null ? context.base64Decoder(output.Bytes) : undefined,
    S3Object: output.S3Object != null ? de_S3Object(output.S3Object, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AuditImages
 */
const de_AuditImages = (output: any, context: __SerdeContext): AuditImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AuditImage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Beard
 */
const de_Beard = (output: any, context: __SerdeContext): Beard => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1BodyParts
 */
const de_BodyParts = (output: any, context: __SerdeContext): ProtectiveEquipmentBodyPart[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProtectiveEquipmentBodyPart(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BoundingBox
 */
const de_BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return {
    Height: __limitedParseFloat32(output.Height),
    Left: __limitedParseFloat32(output.Left),
    Top: __limitedParseFloat32(output.Top),
    Width: __limitedParseFloat32(output.Width),
  } as any;
};

/**
 * deserializeAws_json1_1Celebrity
 */
const de_Celebrity = (output: any, context: __SerdeContext): Celebrity => {
  return {
    Face: output.Face != null ? de_ComparedFace(output.Face, context) : undefined,
    Id: __expectString(output.Id),
    KnownGender: output.KnownGender != null ? de_KnownGender(output.KnownGender, context) : undefined,
    MatchConfidence: __limitedParseFloat32(output.MatchConfidence),
    Name: __expectString(output.Name),
    Urls: output.Urls != null ? de_Urls(output.Urls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CelebrityDetail
 */
const de_CelebrityDetail = (output: any, context: __SerdeContext): CelebrityDetail => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    Face: output.Face != null ? de_FaceDetail(output.Face, context) : undefined,
    Id: __expectString(output.Id),
    KnownGender: output.KnownGender != null ? de_KnownGender(output.KnownGender, context) : undefined,
    Name: __expectString(output.Name),
    Urls: output.Urls != null ? de_Urls(output.Urls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CelebrityList
 */
const de_CelebrityList = (output: any, context: __SerdeContext): Celebrity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Celebrity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CelebrityRecognition
 */
const de_CelebrityRecognition = (output: any, context: __SerdeContext): CelebrityRecognition => {
  return {
    Celebrity: output.Celebrity != null ? de_CelebrityDetail(output.Celebrity, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1CelebrityRecognitions
 */
const de_CelebrityRecognitions = (output: any, context: __SerdeContext): CelebrityRecognition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CelebrityRecognition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CollectionIdList
 */
const de_CollectionIdList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1ComparedFace
 */
const de_ComparedFace = (output: any, context: __SerdeContext): ComparedFace => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    Emotions: output.Emotions != null ? de_Emotions(output.Emotions, context) : undefined,
    Landmarks: output.Landmarks != null ? de_Landmarks(output.Landmarks, context) : undefined,
    Pose: output.Pose != null ? de_Pose(output.Pose, context) : undefined,
    Quality: output.Quality != null ? de_ImageQuality(output.Quality, context) : undefined,
    Smile: output.Smile != null ? de_Smile(output.Smile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ComparedFaceList
 */
const de_ComparedFaceList = (output: any, context: __SerdeContext): ComparedFace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComparedFace(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComparedSourceImageFace
 */
const de_ComparedSourceImageFace = (output: any, context: __SerdeContext): ComparedSourceImageFace => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
  } as any;
};

/**
 * deserializeAws_json1_1CompareFacesMatch
 */
const de_CompareFacesMatch = (output: any, context: __SerdeContext): CompareFacesMatch => {
  return {
    Face: output.Face != null ? de_ComparedFace(output.Face, context) : undefined,
    Similarity: __limitedParseFloat32(output.Similarity),
  } as any;
};

/**
 * deserializeAws_json1_1CompareFacesMatchList
 */
const de_CompareFacesMatchList = (output: any, context: __SerdeContext): CompareFacesMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CompareFacesMatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CompareFacesResponse
 */
const de_CompareFacesResponse = (output: any, context: __SerdeContext): CompareFacesResponse => {
  return {
    FaceMatches: output.FaceMatches != null ? de_CompareFacesMatchList(output.FaceMatches, context) : undefined,
    SourceImageFace:
      output.SourceImageFace != null ? de_ComparedSourceImageFace(output.SourceImageFace, context) : undefined,
    SourceImageOrientationCorrection: __expectString(output.SourceImageOrientationCorrection),
    TargetImageOrientationCorrection: __expectString(output.TargetImageOrientationCorrection),
    UnmatchedFaces:
      output.UnmatchedFaces != null ? de_CompareFacesUnmatchList(output.UnmatchedFaces, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CompareFacesUnmatchList
 */
const de_CompareFacesUnmatchList = (output: any, context: __SerdeContext): ComparedFace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComparedFace(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConnectedHomeLabels
 */
const de_ConnectedHomeLabels = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1ConnectedHomeSettings
 */
const de_ConnectedHomeSettings = (output: any, context: __SerdeContext): ConnectedHomeSettings => {
  return {
    Labels: output.Labels != null ? de_ConnectedHomeLabels(output.Labels, context) : undefined,
    MinConfidence: __limitedParseFloat32(output.MinConfidence),
  } as any;
};

/**
 * deserializeAws_json1_1ContentModerationDetection
 */
const de_ContentModerationDetection = (output: any, context: __SerdeContext): ContentModerationDetection => {
  return {
    ModerationLabel: output.ModerationLabel != null ? de_ModerationLabel(output.ModerationLabel, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1ContentModerationDetections
 */
const de_ContentModerationDetections = (output: any, context: __SerdeContext): ContentModerationDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContentModerationDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CopyProjectVersionResponse
 */
const de_CopyProjectVersionResponse = (output: any, context: __SerdeContext): CopyProjectVersionResponse => {
  return {
    ProjectVersionArn: __expectString(output.ProjectVersionArn),
  } as any;
};

/**
 * deserializeAws_json1_1CoversBodyPart
 */
const de_CoversBodyPart = (output: any, context: __SerdeContext): CoversBodyPart => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1CreateCollectionResponse
 */
const de_CreateCollectionResponse = (output: any, context: __SerdeContext): CreateCollectionResponse => {
  return {
    CollectionArn: __expectString(output.CollectionArn),
    FaceModelVersion: __expectString(output.FaceModelVersion),
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDatasetResponse
 */
const de_CreateDatasetResponse = (output: any, context: __SerdeContext): CreateDatasetResponse => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateFaceLivenessSessionResponse
 */
const de_CreateFaceLivenessSessionResponse = (
  output: any,
  context: __SerdeContext
): CreateFaceLivenessSessionResponse => {
  return {
    SessionId: __expectString(output.SessionId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateProjectResponse
 */
const de_CreateProjectResponse = (output: any, context: __SerdeContext): CreateProjectResponse => {
  return {
    ProjectArn: __expectString(output.ProjectArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateProjectVersionResponse
 */
const de_CreateProjectVersionResponse = (output: any, context: __SerdeContext): CreateProjectVersionResponse => {
  return {
    ProjectVersionArn: __expectString(output.ProjectVersionArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateStreamProcessorResponse
 */
const de_CreateStreamProcessorResponse = (output: any, context: __SerdeContext): CreateStreamProcessorResponse => {
  return {
    StreamProcessorArn: __expectString(output.StreamProcessorArn),
  } as any;
};

/**
 * deserializeAws_json1_1CustomLabel
 */
const de_CustomLabel = (output: any, context: __SerdeContext): CustomLabel => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Geometry: output.Geometry != null ? de_Geometry(output.Geometry, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1CustomLabels
 */
const de_CustomLabels = (output: any, context: __SerdeContext): CustomLabel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomLabel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetDescription
 */
const de_DatasetDescription = (output: any, context: __SerdeContext): DatasetDescription => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    DatasetStats: output.DatasetStats != null ? de_DatasetStats(output.DatasetStats, context) : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    StatusMessageCode: __expectString(output.StatusMessageCode),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetEntries
 */
const de_DatasetEntries = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1DatasetLabelDescription
 */
const de_DatasetLabelDescription = (output: any, context: __SerdeContext): DatasetLabelDescription => {
  return {
    LabelName: __expectString(output.LabelName),
    LabelStats: output.LabelStats != null ? de_DatasetLabelStats(output.LabelStats, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DatasetLabelDescriptions
 */
const de_DatasetLabelDescriptions = (output: any, context: __SerdeContext): DatasetLabelDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetLabelDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetLabelStats
 */
const de_DatasetLabelStats = (output: any, context: __SerdeContext): DatasetLabelStats => {
  return {
    BoundingBoxCount: __expectInt32(output.BoundingBoxCount),
    EntryCount: __expectInt32(output.EntryCount),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetMetadata
 */
const de_DatasetMetadata = (output: any, context: __SerdeContext): DatasetMetadata => {
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

/**
 * deserializeAws_json1_1DatasetMetadataList
 */
const de_DatasetMetadataList = (output: any, context: __SerdeContext): DatasetMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetStats
 */
const de_DatasetStats = (output: any, context: __SerdeContext): DatasetStats => {
  return {
    ErrorEntries: __expectInt32(output.ErrorEntries),
    LabeledEntries: __expectInt32(output.LabeledEntries),
    TotalEntries: __expectInt32(output.TotalEntries),
    TotalLabels: __expectInt32(output.TotalLabels),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteCollectionResponse
 */
const de_DeleteCollectionResponse = (output: any, context: __SerdeContext): DeleteCollectionResponse => {
  return {
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDatasetResponse
 */
const de_DeleteDatasetResponse = (output: any, context: __SerdeContext): DeleteDatasetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteFacesResponse
 */
const de_DeleteFacesResponse = (output: any, context: __SerdeContext): DeleteFacesResponse => {
  return {
    DeletedFaces: output.DeletedFaces != null ? de_FaceIdList(output.DeletedFaces, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteProjectPolicyResponse
 */
const de_DeleteProjectPolicyResponse = (output: any, context: __SerdeContext): DeleteProjectPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteProjectResponse
 */
const de_DeleteProjectResponse = (output: any, context: __SerdeContext): DeleteProjectResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteProjectVersionResponse
 */
const de_DeleteProjectVersionResponse = (output: any, context: __SerdeContext): DeleteProjectVersionResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteStreamProcessorResponse
 */
const de_DeleteStreamProcessorResponse = (output: any, context: __SerdeContext): DeleteStreamProcessorResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeCollectionResponse
 */
const de_DescribeCollectionResponse = (output: any, context: __SerdeContext): DescribeCollectionResponse => {
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

/**
 * deserializeAws_json1_1DescribeDatasetResponse
 */
const de_DescribeDatasetResponse = (output: any, context: __SerdeContext): DescribeDatasetResponse => {
  return {
    DatasetDescription:
      output.DatasetDescription != null ? de_DatasetDescription(output.DatasetDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProjectsResponse
 */
const de_DescribeProjectsResponse = (output: any, context: __SerdeContext): DescribeProjectsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ProjectDescriptions:
      output.ProjectDescriptions != null ? de_ProjectDescriptions(output.ProjectDescriptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProjectVersionsResponse
 */
const de_DescribeProjectVersionsResponse = (output: any, context: __SerdeContext): DescribeProjectVersionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ProjectVersionDescriptions:
      output.ProjectVersionDescriptions != null
        ? de_ProjectVersionDescriptions(output.ProjectVersionDescriptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStreamProcessorResponse
 */
const de_DescribeStreamProcessorResponse = (output: any, context: __SerdeContext): DescribeStreamProcessorResponse => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    DataSharingPreference:
      output.DataSharingPreference != null
        ? de_StreamProcessorDataSharingPreference(output.DataSharingPreference, context)
        : undefined,
    Input: output.Input != null ? de_StreamProcessorInput(output.Input, context) : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    LastUpdateTimestamp:
      output.LastUpdateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    NotificationChannel:
      output.NotificationChannel != null
        ? de_StreamProcessorNotificationChannel(output.NotificationChannel, context)
        : undefined,
    Output: output.Output != null ? de_StreamProcessorOutput(output.Output, context) : undefined,
    RegionsOfInterest:
      output.RegionsOfInterest != null ? de_RegionsOfInterest(output.RegionsOfInterest, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
    Settings: output.Settings != null ? de_StreamProcessorSettings(output.Settings, context) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    StreamProcessorArn: __expectString(output.StreamProcessorArn),
  } as any;
};

/**
 * deserializeAws_json1_1DetectCustomLabelsResponse
 */
const de_DetectCustomLabelsResponse = (output: any, context: __SerdeContext): DetectCustomLabelsResponse => {
  return {
    CustomLabels: output.CustomLabels != null ? de_CustomLabels(output.CustomLabels, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectFacesResponse
 */
const de_DetectFacesResponse = (output: any, context: __SerdeContext): DetectFacesResponse => {
  return {
    FaceDetails: output.FaceDetails != null ? de_FaceDetailList(output.FaceDetails, context) : undefined,
    OrientationCorrection: __expectString(output.OrientationCorrection),
  } as any;
};

/**
 * deserializeAws_json1_1DetectLabelsImageBackground
 */
const de_DetectLabelsImageBackground = (output: any, context: __SerdeContext): DetectLabelsImageBackground => {
  return {
    DominantColors: output.DominantColors != null ? de_DominantColors(output.DominantColors, context) : undefined,
    Quality: output.Quality != null ? de_DetectLabelsImageQuality(output.Quality, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectLabelsImageForeground
 */
const de_DetectLabelsImageForeground = (output: any, context: __SerdeContext): DetectLabelsImageForeground => {
  return {
    DominantColors: output.DominantColors != null ? de_DominantColors(output.DominantColors, context) : undefined,
    Quality: output.Quality != null ? de_DetectLabelsImageQuality(output.Quality, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectLabelsImageProperties
 */
const de_DetectLabelsImageProperties = (output: any, context: __SerdeContext): DetectLabelsImageProperties => {
  return {
    Background: output.Background != null ? de_DetectLabelsImageBackground(output.Background, context) : undefined,
    DominantColors: output.DominantColors != null ? de_DominantColors(output.DominantColors, context) : undefined,
    Foreground: output.Foreground != null ? de_DetectLabelsImageForeground(output.Foreground, context) : undefined,
    Quality: output.Quality != null ? de_DetectLabelsImageQuality(output.Quality, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectLabelsImageQuality
 */
const de_DetectLabelsImageQuality = (output: any, context: __SerdeContext): DetectLabelsImageQuality => {
  return {
    Brightness: __limitedParseFloat32(output.Brightness),
    Contrast: __limitedParseFloat32(output.Contrast),
    Sharpness: __limitedParseFloat32(output.Sharpness),
  } as any;
};

/**
 * deserializeAws_json1_1DetectLabelsResponse
 */
const de_DetectLabelsResponse = (output: any, context: __SerdeContext): DetectLabelsResponse => {
  return {
    ImageProperties:
      output.ImageProperties != null ? de_DetectLabelsImageProperties(output.ImageProperties, context) : undefined,
    LabelModelVersion: __expectString(output.LabelModelVersion),
    Labels: output.Labels != null ? de_Labels(output.Labels, context) : undefined,
    OrientationCorrection: __expectString(output.OrientationCorrection),
  } as any;
};

/**
 * deserializeAws_json1_1DetectModerationLabelsResponse
 */
const de_DetectModerationLabelsResponse = (output: any, context: __SerdeContext): DetectModerationLabelsResponse => {
  return {
    HumanLoopActivationOutput:
      output.HumanLoopActivationOutput != null
        ? de_HumanLoopActivationOutput(output.HumanLoopActivationOutput, context)
        : undefined,
    ModerationLabels:
      output.ModerationLabels != null ? de_ModerationLabels(output.ModerationLabels, context) : undefined,
    ModerationModelVersion: __expectString(output.ModerationModelVersion),
  } as any;
};

/**
 * deserializeAws_json1_1DetectProtectiveEquipmentResponse
 */
const de_DetectProtectiveEquipmentResponse = (
  output: any,
  context: __SerdeContext
): DetectProtectiveEquipmentResponse => {
  return {
    Persons: output.Persons != null ? de_ProtectiveEquipmentPersons(output.Persons, context) : undefined,
    ProtectiveEquipmentModelVersion: __expectString(output.ProtectiveEquipmentModelVersion),
    Summary: output.Summary != null ? de_ProtectiveEquipmentSummary(output.Summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectTextResponse
 */
const de_DetectTextResponse = (output: any, context: __SerdeContext): DetectTextResponse => {
  return {
    TextDetections: output.TextDetections != null ? de_TextDetectionList(output.TextDetections, context) : undefined,
    TextModelVersion: __expectString(output.TextModelVersion),
  } as any;
};

/**
 * deserializeAws_json1_1DistributeDatasetEntriesResponse
 */
const de_DistributeDatasetEntriesResponse = (
  output: any,
  context: __SerdeContext
): DistributeDatasetEntriesResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DominantColor
 */
const de_DominantColor = (output: any, context: __SerdeContext): DominantColor => {
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

/**
 * deserializeAws_json1_1DominantColors
 */
const de_DominantColors = (output: any, context: __SerdeContext): DominantColor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DominantColor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Emotion
 */
const de_Emotion = (output: any, context: __SerdeContext): Emotion => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1Emotions
 */
const de_Emotions = (output: any, context: __SerdeContext): Emotion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Emotion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EquipmentDetection
 */
const de_EquipmentDetection = (output: any, context: __SerdeContext): EquipmentDetection => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    CoversBodyPart: output.CoversBodyPart != null ? de_CoversBodyPart(output.CoversBodyPart, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1EquipmentDetections
 */
const de_EquipmentDetections = (output: any, context: __SerdeContext): EquipmentDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EquipmentDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EvaluationResult
 */
const de_EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    F1Score: __limitedParseFloat32(output.F1Score),
    Summary: output.Summary != null ? de_Summary(output.Summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Eyeglasses
 */
const de_Eyeglasses = (output: any, context: __SerdeContext): Eyeglasses => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1EyeOpen
 */
const de_EyeOpen = (output: any, context: __SerdeContext): EyeOpen => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1Face
 */
const de_Face = (output: any, context: __SerdeContext): Face => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    ExternalImageId: __expectString(output.ExternalImageId),
    FaceId: __expectString(output.FaceId),
    ImageId: __expectString(output.ImageId),
    IndexFacesModelVersion: __expectString(output.IndexFacesModelVersion),
  } as any;
};

/**
 * deserializeAws_json1_1FaceDetail
 */
const de_FaceDetail = (output: any, context: __SerdeContext): FaceDetail => {
  return {
    AgeRange: output.AgeRange != null ? de_AgeRange(output.AgeRange, context) : undefined,
    Beard: output.Beard != null ? de_Beard(output.Beard, context) : undefined,
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    Emotions: output.Emotions != null ? de_Emotions(output.Emotions, context) : undefined,
    Eyeglasses: output.Eyeglasses != null ? de_Eyeglasses(output.Eyeglasses, context) : undefined,
    EyesOpen: output.EyesOpen != null ? de_EyeOpen(output.EyesOpen, context) : undefined,
    Gender: output.Gender != null ? de_Gender(output.Gender, context) : undefined,
    Landmarks: output.Landmarks != null ? de_Landmarks(output.Landmarks, context) : undefined,
    MouthOpen: output.MouthOpen != null ? de_MouthOpen(output.MouthOpen, context) : undefined,
    Mustache: output.Mustache != null ? de_Mustache(output.Mustache, context) : undefined,
    Pose: output.Pose != null ? de_Pose(output.Pose, context) : undefined,
    Quality: output.Quality != null ? de_ImageQuality(output.Quality, context) : undefined,
    Smile: output.Smile != null ? de_Smile(output.Smile, context) : undefined,
    Sunglasses: output.Sunglasses != null ? de_Sunglasses(output.Sunglasses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FaceDetailList
 */
const de_FaceDetailList = (output: any, context: __SerdeContext): FaceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FaceDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FaceDetection
 */
const de_FaceDetection = (output: any, context: __SerdeContext): FaceDetection => {
  return {
    Face: output.Face != null ? de_FaceDetail(output.Face, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1FaceDetections
 */
const de_FaceDetections = (output: any, context: __SerdeContext): FaceDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FaceDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FaceIdList
 */
const de_FaceIdList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1FaceList
 */
const de_FaceList = (output: any, context: __SerdeContext): Face[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Face(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FaceMatch
 */
const de_FaceMatch = (output: any, context: __SerdeContext): FaceMatch => {
  return {
    Face: output.Face != null ? de_Face(output.Face, context) : undefined,
    Similarity: __limitedParseFloat32(output.Similarity),
  } as any;
};

/**
 * deserializeAws_json1_1FaceMatchList
 */
const de_FaceMatchList = (output: any, context: __SerdeContext): FaceMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FaceMatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FaceModelVersionList
 */
const de_FaceModelVersionList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1FaceRecord
 */
const de_FaceRecord = (output: any, context: __SerdeContext): FaceRecord => {
  return {
    Face: output.Face != null ? de_Face(output.Face, context) : undefined,
    FaceDetail: output.FaceDetail != null ? de_FaceDetail(output.FaceDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FaceRecordList
 */
const de_FaceRecordList = (output: any, context: __SerdeContext): FaceRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FaceRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FaceSearchSettings
 */
const de_FaceSearchSettings = (output: any, context: __SerdeContext): FaceSearchSettings => {
  return {
    CollectionId: __expectString(output.CollectionId),
    FaceMatchThreshold: __limitedParseFloat32(output.FaceMatchThreshold),
  } as any;
};

/**
 * deserializeAws_json1_1Gender
 */
const de_Gender = (output: any, context: __SerdeContext): Gender => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1Geometry
 */
const de_Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Polygon: output.Polygon != null ? de_Polygon(output.Polygon, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCelebrityInfoResponse
 */
const de_GetCelebrityInfoResponse = (output: any, context: __SerdeContext): GetCelebrityInfoResponse => {
  return {
    KnownGender: output.KnownGender != null ? de_KnownGender(output.KnownGender, context) : undefined,
    Name: __expectString(output.Name),
    Urls: output.Urls != null ? de_Urls(output.Urls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCelebrityRecognitionResponse
 */
const de_GetCelebrityRecognitionResponse = (output: any, context: __SerdeContext): GetCelebrityRecognitionResponse => {
  return {
    Celebrities: output.Celebrities != null ? de_CelebrityRecognitions(output.Celebrities, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata: output.VideoMetadata != null ? de_VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetContentModerationResponse
 */
const de_GetContentModerationResponse = (output: any, context: __SerdeContext): GetContentModerationResponse => {
  return {
    JobStatus: __expectString(output.JobStatus),
    ModerationLabels:
      output.ModerationLabels != null ? de_ContentModerationDetections(output.ModerationLabels, context) : undefined,
    ModerationModelVersion: __expectString(output.ModerationModelVersion),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata: output.VideoMetadata != null ? de_VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetFaceDetectionResponse
 */
const de_GetFaceDetectionResponse = (output: any, context: __SerdeContext): GetFaceDetectionResponse => {
  return {
    Faces: output.Faces != null ? de_FaceDetections(output.Faces, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata: output.VideoMetadata != null ? de_VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetFaceLivenessSessionResultsResponse
 */
const de_GetFaceLivenessSessionResultsResponse = (
  output: any,
  context: __SerdeContext
): GetFaceLivenessSessionResultsResponse => {
  return {
    AuditImages: output.AuditImages != null ? de_AuditImages(output.AuditImages, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    ReferenceImage: output.ReferenceImage != null ? de_AuditImage(output.ReferenceImage, context) : undefined,
    SessionId: __expectString(output.SessionId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1GetFaceSearchResponse
 */
const de_GetFaceSearchResponse = (output: any, context: __SerdeContext): GetFaceSearchResponse => {
  return {
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    Persons: output.Persons != null ? de_PersonMatches(output.Persons, context) : undefined,
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata: output.VideoMetadata != null ? de_VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLabelDetectionResponse
 */
const de_GetLabelDetectionResponse = (output: any, context: __SerdeContext): GetLabelDetectionResponse => {
  return {
    JobStatus: __expectString(output.JobStatus),
    LabelModelVersion: __expectString(output.LabelModelVersion),
    Labels: output.Labels != null ? de_LabelDetections(output.Labels, context) : undefined,
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata: output.VideoMetadata != null ? de_VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetPersonTrackingResponse
 */
const de_GetPersonTrackingResponse = (output: any, context: __SerdeContext): GetPersonTrackingResponse => {
  return {
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    Persons: output.Persons != null ? de_PersonDetections(output.Persons, context) : undefined,
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata: output.VideoMetadata != null ? de_VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSegmentDetectionResponse
 */
const de_GetSegmentDetectionResponse = (output: any, context: __SerdeContext): GetSegmentDetectionResponse => {
  return {
    AudioMetadata: output.AudioMetadata != null ? de_AudioMetadataList(output.AudioMetadata, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    Segments: output.Segments != null ? de_SegmentDetections(output.Segments, context) : undefined,
    SelectedSegmentTypes:
      output.SelectedSegmentTypes != null ? de_SegmentTypesInfo(output.SelectedSegmentTypes, context) : undefined,
    StatusMessage: __expectString(output.StatusMessage),
    VideoMetadata: output.VideoMetadata != null ? de_VideoMetadataList(output.VideoMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTextDetectionResponse
 */
const de_GetTextDetectionResponse = (output: any, context: __SerdeContext): GetTextDetectionResponse => {
  return {
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    TextDetections: output.TextDetections != null ? de_TextDetectionResults(output.TextDetections, context) : undefined,
    TextModelVersion: __expectString(output.TextModelVersion),
    VideoMetadata: output.VideoMetadata != null ? de_VideoMetadata(output.VideoMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GroundTruthManifest
 */
const de_GroundTruthManifest = (output: any, context: __SerdeContext): GroundTruthManifest => {
  return {
    S3Object: output.S3Object != null ? de_S3Object(output.S3Object, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HumanLoopActivationOutput
 */
const de_HumanLoopActivationOutput = (output: any, context: __SerdeContext): HumanLoopActivationOutput => {
  return {
    HumanLoopActivationConditionsEvaluationResults:
      output.HumanLoopActivationConditionsEvaluationResults != null
        ? new __LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults)
        : undefined,
    HumanLoopActivationReasons:
      output.HumanLoopActivationReasons != null
        ? de_HumanLoopActivationReasons(output.HumanLoopActivationReasons, context)
        : undefined,
    HumanLoopArn: __expectString(output.HumanLoopArn),
  } as any;
};

/**
 * deserializeAws_json1_1HumanLoopActivationReasons
 */
const de_HumanLoopActivationReasons = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1HumanLoopQuotaExceededException
 */
const de_HumanLoopQuotaExceededException = (output: any, context: __SerdeContext): HumanLoopQuotaExceededException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
    QuotaCode: __expectString(output.QuotaCode),
    ResourceType: __expectString(output.ResourceType),
    ServiceCode: __expectString(output.ServiceCode),
  } as any;
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchException
 */
const de_IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ImageQuality
 */
const de_ImageQuality = (output: any, context: __SerdeContext): ImageQuality => {
  return {
    Brightness: __limitedParseFloat32(output.Brightness),
    Sharpness: __limitedParseFloat32(output.Sharpness),
  } as any;
};

/**
 * deserializeAws_json1_1ImageTooLargeException
 */
const de_ImageTooLargeException = (output: any, context: __SerdeContext): ImageTooLargeException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IndexFacesResponse
 */
const de_IndexFacesResponse = (output: any, context: __SerdeContext): IndexFacesResponse => {
  return {
    FaceModelVersion: __expectString(output.FaceModelVersion),
    FaceRecords: output.FaceRecords != null ? de_FaceRecordList(output.FaceRecords, context) : undefined,
    OrientationCorrection: __expectString(output.OrientationCorrection),
    UnindexedFaces: output.UnindexedFaces != null ? de_UnindexedFaces(output.UnindexedFaces, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    DominantColors: output.DominantColors != null ? de_DominantColors(output.DominantColors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Instances
 */
const de_Instances = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Instance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidImageFormatException
 */
const de_InvalidImageFormatException = (output: any, context: __SerdeContext): InvalidImageFormatException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPaginationTokenException
 */
const de_InvalidPaginationTokenException = (output: any, context: __SerdeContext): InvalidPaginationTokenException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPolicyRevisionIdException
 */
const de_InvalidPolicyRevisionIdException = (
  output: any,
  context: __SerdeContext
): InvalidPolicyRevisionIdException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidS3ObjectException
 */
const de_InvalidS3ObjectException = (output: any, context: __SerdeContext): InvalidS3ObjectException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1KinesisDataStream
 */
const de_KinesisDataStream = (output: any, context: __SerdeContext): KinesisDataStream => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

/**
 * deserializeAws_json1_1KinesisVideoStream
 */
const de_KinesisVideoStream = (output: any, context: __SerdeContext): KinesisVideoStream => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

/**
 * deserializeAws_json1_1KnownGender
 */
const de_KnownGender = (output: any, context: __SerdeContext): KnownGender => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1Label
 */
const de_Label = (output: any, context: __SerdeContext): Label => {
  return {
    Aliases: output.Aliases != null ? de_LabelAliases(output.Aliases, context) : undefined,
    Categories: output.Categories != null ? de_LabelCategories(output.Categories, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    Instances: output.Instances != null ? de_Instances(output.Instances, context) : undefined,
    Name: __expectString(output.Name),
    Parents: output.Parents != null ? de_Parents(output.Parents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LabelAlias
 */
const de_LabelAlias = (output: any, context: __SerdeContext): LabelAlias => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1LabelAliases
 */
const de_LabelAliases = (output: any, context: __SerdeContext): LabelAlias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LabelAlias(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LabelCategories
 */
const de_LabelCategories = (output: any, context: __SerdeContext): LabelCategory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LabelCategory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LabelCategory
 */
const de_LabelCategory = (output: any, context: __SerdeContext): LabelCategory => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1LabelDetection
 */
const de_LabelDetection = (output: any, context: __SerdeContext): LabelDetection => {
  return {
    DurationMillis: __expectLong(output.DurationMillis),
    EndTimestampMillis: __expectLong(output.EndTimestampMillis),
    Label: output.Label != null ? de_Label(output.Label, context) : undefined,
    StartTimestampMillis: __expectLong(output.StartTimestampMillis),
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1LabelDetections
 */
const de_LabelDetections = (output: any, context: __SerdeContext): LabelDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LabelDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Labels
 */
const de_Labels = (output: any, context: __SerdeContext): Label[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Label(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Landmark
 */
const de_Landmark = (output: any, context: __SerdeContext): Landmark => {
  return {
    Type: __expectString(output.Type),
    X: __limitedParseFloat32(output.X),
    Y: __limitedParseFloat32(output.Y),
  } as any;
};

/**
 * deserializeAws_json1_1Landmarks
 */
const de_Landmarks = (output: any, context: __SerdeContext): Landmark[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Landmark(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListCollectionsResponse
 */
const de_ListCollectionsResponse = (output: any, context: __SerdeContext): ListCollectionsResponse => {
  return {
    CollectionIds: output.CollectionIds != null ? de_CollectionIdList(output.CollectionIds, context) : undefined,
    FaceModelVersions:
      output.FaceModelVersions != null ? de_FaceModelVersionList(output.FaceModelVersions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatasetEntriesResponse
 */
const de_ListDatasetEntriesResponse = (output: any, context: __SerdeContext): ListDatasetEntriesResponse => {
  return {
    DatasetEntries: output.DatasetEntries != null ? de_DatasetEntries(output.DatasetEntries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatasetLabelsResponse
 */
const de_ListDatasetLabelsResponse = (output: any, context: __SerdeContext): ListDatasetLabelsResponse => {
  return {
    DatasetLabelDescriptions:
      output.DatasetLabelDescriptions != null
        ? de_DatasetLabelDescriptions(output.DatasetLabelDescriptions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFacesResponse
 */
const de_ListFacesResponse = (output: any, context: __SerdeContext): ListFacesResponse => {
  return {
    FaceModelVersion: __expectString(output.FaceModelVersion),
    Faces: output.Faces != null ? de_FaceList(output.Faces, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListProjectPoliciesResponse
 */
const de_ListProjectPoliciesResponse = (output: any, context: __SerdeContext): ListProjectPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ProjectPolicies: output.ProjectPolicies != null ? de_ProjectPolicies(output.ProjectPolicies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListStreamProcessorsResponse
 */
const de_ListStreamProcessorsResponse = (output: any, context: __SerdeContext): ListStreamProcessorsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    StreamProcessors:
      output.StreamProcessors != null ? de_StreamProcessorList(output.StreamProcessors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MalformedPolicyDocumentException
 */
const de_MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ModerationLabel
 */
const de_ModerationLabel = (output: any, context: __SerdeContext): ModerationLabel => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Name: __expectString(output.Name),
    ParentName: __expectString(output.ParentName),
  } as any;
};

/**
 * deserializeAws_json1_1ModerationLabels
 */
const de_ModerationLabels = (output: any, context: __SerdeContext): ModerationLabel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ModerationLabel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MouthOpen
 */
const de_MouthOpen = (output: any, context: __SerdeContext): MouthOpen => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1Mustache
 */
const de_Mustache = (output: any, context: __SerdeContext): Mustache => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1OutputConfig
 */
const de_OutputConfig = (output: any, context: __SerdeContext): OutputConfig => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
  } as any;
};

/**
 * deserializeAws_json1_1Parent
 */
const de_Parent = (output: any, context: __SerdeContext): Parent => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1Parents
 */
const de_Parents = (output: any, context: __SerdeContext): Parent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Parent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PersonDetail
 */
const de_PersonDetail = (output: any, context: __SerdeContext): PersonDetail => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Face: output.Face != null ? de_FaceDetail(output.Face, context) : undefined,
    Index: __expectLong(output.Index),
  } as any;
};

/**
 * deserializeAws_json1_1PersonDetection
 */
const de_PersonDetection = (output: any, context: __SerdeContext): PersonDetection => {
  return {
    Person: output.Person != null ? de_PersonDetail(output.Person, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1PersonDetections
 */
const de_PersonDetections = (output: any, context: __SerdeContext): PersonDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PersonDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PersonMatch
 */
const de_PersonMatch = (output: any, context: __SerdeContext): PersonMatch => {
  return {
    FaceMatches: output.FaceMatches != null ? de_FaceMatchList(output.FaceMatches, context) : undefined,
    Person: output.Person != null ? de_PersonDetail(output.Person, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1PersonMatches
 */
const de_PersonMatches = (output: any, context: __SerdeContext): PersonMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PersonMatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Point
 */
const de_Point = (output: any, context: __SerdeContext): Point => {
  return {
    X: __limitedParseFloat32(output.X),
    Y: __limitedParseFloat32(output.Y),
  } as any;
};

/**
 * deserializeAws_json1_1Polygon
 */
const de_Polygon = (output: any, context: __SerdeContext): Point[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Point(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Pose
 */
const de_Pose = (output: any, context: __SerdeContext): Pose => {
  return {
    Pitch: __limitedParseFloat32(output.Pitch),
    Roll: __limitedParseFloat32(output.Roll),
    Yaw: __limitedParseFloat32(output.Yaw),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectDescription
 */
const de_ProjectDescription = (output: any, context: __SerdeContext): ProjectDescription => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    Datasets: output.Datasets != null ? de_DatasetMetadataList(output.Datasets, context) : undefined,
    ProjectArn: __expectString(output.ProjectArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectDescriptions
 */
const de_ProjectDescriptions = (output: any, context: __SerdeContext): ProjectDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProjectDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectPolicies
 */
const de_ProjectPolicies = (output: any, context: __SerdeContext): ProjectPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProjectPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectPolicy
 */
const de_ProjectPolicy = (output: any, context: __SerdeContext): ProjectPolicy => {
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

/**
 * deserializeAws_json1_1ProjectVersionDescription
 */
const de_ProjectVersionDescription = (output: any, context: __SerdeContext): ProjectVersionDescription => {
  return {
    BillableTrainingTimeInSeconds: __expectLong(output.BillableTrainingTimeInSeconds),
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    EvaluationResult:
      output.EvaluationResult != null ? de_EvaluationResult(output.EvaluationResult, context) : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    ManifestSummary:
      output.ManifestSummary != null ? de_GroundTruthManifest(output.ManifestSummary, context) : undefined,
    MaxInferenceUnits: __expectInt32(output.MaxInferenceUnits),
    MinInferenceUnits: __expectInt32(output.MinInferenceUnits),
    OutputConfig: output.OutputConfig != null ? de_OutputConfig(output.OutputConfig, context) : undefined,
    ProjectVersionArn: __expectString(output.ProjectVersionArn),
    SourceProjectVersionArn: __expectString(output.SourceProjectVersionArn),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    TestingDataResult:
      output.TestingDataResult != null ? de_TestingDataResult(output.TestingDataResult, context) : undefined,
    TrainingDataResult:
      output.TrainingDataResult != null ? de_TrainingDataResult(output.TrainingDataResult, context) : undefined,
    TrainingEndTimestamp:
      output.TrainingEndTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TrainingEndTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProjectVersionDescriptions
 */
const de_ProjectVersionDescriptions = (output: any, context: __SerdeContext): ProjectVersionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProjectVersionDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProtectiveEquipmentBodyPart
 */
const de_ProtectiveEquipmentBodyPart = (output: any, context: __SerdeContext): ProtectiveEquipmentBodyPart => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    EquipmentDetections:
      output.EquipmentDetections != null ? de_EquipmentDetections(output.EquipmentDetections, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ProtectiveEquipmentPerson
 */
const de_ProtectiveEquipmentPerson = (output: any, context: __SerdeContext): ProtectiveEquipmentPerson => {
  return {
    BodyParts: output.BodyParts != null ? de_BodyParts(output.BodyParts, context) : undefined,
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    Id: __expectInt32(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1ProtectiveEquipmentPersonIds
 */
const de_ProtectiveEquipmentPersonIds = (output: any, context: __SerdeContext): number[] => {
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

/**
 * deserializeAws_json1_1ProtectiveEquipmentPersons
 */
const de_ProtectiveEquipmentPersons = (output: any, context: __SerdeContext): ProtectiveEquipmentPerson[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProtectiveEquipmentPerson(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProtectiveEquipmentSummary
 */
const de_ProtectiveEquipmentSummary = (output: any, context: __SerdeContext): ProtectiveEquipmentSummary => {
  return {
    PersonsIndeterminate:
      output.PersonsIndeterminate != null
        ? de_ProtectiveEquipmentPersonIds(output.PersonsIndeterminate, context)
        : undefined,
    PersonsWithRequiredEquipment:
      output.PersonsWithRequiredEquipment != null
        ? de_ProtectiveEquipmentPersonIds(output.PersonsWithRequiredEquipment, context)
        : undefined,
    PersonsWithoutRequiredEquipment:
      output.PersonsWithoutRequiredEquipment != null
        ? de_ProtectiveEquipmentPersonIds(output.PersonsWithoutRequiredEquipment, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProvisionedThroughputExceededException
 */
const de_ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PutProjectPolicyResponse
 */
const de_PutProjectPolicyResponse = (output: any, context: __SerdeContext): PutProjectPolicyResponse => {
  return {
    PolicyRevisionId: __expectString(output.PolicyRevisionId),
  } as any;
};

/**
 * deserializeAws_json1_1Reasons
 */
const de_Reasons = (output: any, context: __SerdeContext): (Reason | string)[] => {
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

/**
 * deserializeAws_json1_1RecognizeCelebritiesResponse
 */
const de_RecognizeCelebritiesResponse = (output: any, context: __SerdeContext): RecognizeCelebritiesResponse => {
  return {
    CelebrityFaces: output.CelebrityFaces != null ? de_CelebrityList(output.CelebrityFaces, context) : undefined,
    OrientationCorrection: __expectString(output.OrientationCorrection),
    UnrecognizedFaces:
      output.UnrecognizedFaces != null ? de_ComparedFaceList(output.UnrecognizedFaces, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegionOfInterest
 */
const de_RegionOfInterest = (output: any, context: __SerdeContext): RegionOfInterest => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Polygon: output.Polygon != null ? de_Polygon(output.Polygon, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegionsOfInterest
 */
const de_RegionsOfInterest = (output: any, context: __SerdeContext): RegionOfInterest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RegionOfInterest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotReadyException
 */
const de_ResourceNotReadyException = (output: any, context: __SerdeContext): ResourceNotReadyException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1S3Destination
 */
const de_S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return {
    Bucket: __expectString(output.Bucket),
    KeyPrefix: __expectString(output.KeyPrefix),
  } as any;
};

/**
 * deserializeAws_json1_1S3Object
 */
const de_S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    Bucket: __expectString(output.Bucket),
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1SearchFacesByImageResponse
 */
const de_SearchFacesByImageResponse = (output: any, context: __SerdeContext): SearchFacesByImageResponse => {
  return {
    FaceMatches: output.FaceMatches != null ? de_FaceMatchList(output.FaceMatches, context) : undefined,
    FaceModelVersion: __expectString(output.FaceModelVersion),
    SearchedFaceBoundingBox:
      output.SearchedFaceBoundingBox != null ? de_BoundingBox(output.SearchedFaceBoundingBox, context) : undefined,
    SearchedFaceConfidence: __limitedParseFloat32(output.SearchedFaceConfidence),
  } as any;
};

/**
 * deserializeAws_json1_1SearchFacesResponse
 */
const de_SearchFacesResponse = (output: any, context: __SerdeContext): SearchFacesResponse => {
  return {
    FaceMatches: output.FaceMatches != null ? de_FaceMatchList(output.FaceMatches, context) : undefined,
    FaceModelVersion: __expectString(output.FaceModelVersion),
    SearchedFaceId: __expectString(output.SearchedFaceId),
  } as any;
};

/**
 * deserializeAws_json1_1SegmentDetection
 */
const de_SegmentDetection = (output: any, context: __SerdeContext): SegmentDetection => {
  return {
    DurationFrames: __expectLong(output.DurationFrames),
    DurationMillis: __expectLong(output.DurationMillis),
    DurationSMPTE: __expectString(output.DurationSMPTE),
    EndFrameNumber: __expectLong(output.EndFrameNumber),
    EndTimecodeSMPTE: __expectString(output.EndTimecodeSMPTE),
    EndTimestampMillis: __expectLong(output.EndTimestampMillis),
    ShotSegment: output.ShotSegment != null ? de_ShotSegment(output.ShotSegment, context) : undefined,
    StartFrameNumber: __expectLong(output.StartFrameNumber),
    StartTimecodeSMPTE: __expectString(output.StartTimecodeSMPTE),
    StartTimestampMillis: __expectLong(output.StartTimestampMillis),
    TechnicalCueSegment:
      output.TechnicalCueSegment != null ? de_TechnicalCueSegment(output.TechnicalCueSegment, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1SegmentDetections
 */
const de_SegmentDetections = (output: any, context: __SerdeContext): SegmentDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SegmentDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SegmentTypeInfo
 */
const de_SegmentTypeInfo = (output: any, context: __SerdeContext): SegmentTypeInfo => {
  return {
    ModelVersion: __expectString(output.ModelVersion),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1SegmentTypesInfo
 */
const de_SegmentTypesInfo = (output: any, context: __SerdeContext): SegmentTypeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SegmentTypeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1SessionNotFoundException
 */
const de_SessionNotFoundException = (output: any, context: __SerdeContext): SessionNotFoundException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ShotSegment
 */
const de_ShotSegment = (output: any, context: __SerdeContext): ShotSegment => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Index: __expectLong(output.Index),
  } as any;
};

/**
 * deserializeAws_json1_1Smile
 */
const de_Smile = (output: any, context: __SerdeContext): Smile => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1StartCelebrityRecognitionResponse
 */
const de_StartCelebrityRecognitionResponse = (
  output: any,
  context: __SerdeContext
): StartCelebrityRecognitionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartContentModerationResponse
 */
const de_StartContentModerationResponse = (output: any, context: __SerdeContext): StartContentModerationResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartFaceDetectionResponse
 */
const de_StartFaceDetectionResponse = (output: any, context: __SerdeContext): StartFaceDetectionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartFaceSearchResponse
 */
const de_StartFaceSearchResponse = (output: any, context: __SerdeContext): StartFaceSearchResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartLabelDetectionResponse
 */
const de_StartLabelDetectionResponse = (output: any, context: __SerdeContext): StartLabelDetectionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartPersonTrackingResponse
 */
const de_StartPersonTrackingResponse = (output: any, context: __SerdeContext): StartPersonTrackingResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartProjectVersionResponse
 */
const de_StartProjectVersionResponse = (output: any, context: __SerdeContext): StartProjectVersionResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1StartSegmentDetectionResponse
 */
const de_StartSegmentDetectionResponse = (output: any, context: __SerdeContext): StartSegmentDetectionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartStreamProcessorResponse
 */
const de_StartStreamProcessorResponse = (output: any, context: __SerdeContext): StartStreamProcessorResponse => {
  return {
    SessionId: __expectString(output.SessionId),
  } as any;
};

/**
 * deserializeAws_json1_1StartTextDetectionResponse
 */
const de_StartTextDetectionResponse = (output: any, context: __SerdeContext): StartTextDetectionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StopProjectVersionResponse
 */
const de_StopProjectVersionResponse = (output: any, context: __SerdeContext): StopProjectVersionResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1StopStreamProcessorResponse
 */
const de_StopStreamProcessorResponse = (output: any, context: __SerdeContext): StopStreamProcessorResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StreamProcessor
 */
const de_StreamProcessor = (output: any, context: __SerdeContext): StreamProcessor => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1StreamProcessorDataSharingPreference
 */
const de_StreamProcessorDataSharingPreference = (
  output: any,
  context: __SerdeContext
): StreamProcessorDataSharingPreference => {
  return {
    OptIn: __expectBoolean(output.OptIn),
  } as any;
};

/**
 * deserializeAws_json1_1StreamProcessorInput
 */
const de_StreamProcessorInput = (output: any, context: __SerdeContext): StreamProcessorInput => {
  return {
    KinesisVideoStream:
      output.KinesisVideoStream != null ? de_KinesisVideoStream(output.KinesisVideoStream, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StreamProcessorList
 */
const de_StreamProcessorList = (output: any, context: __SerdeContext): StreamProcessor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StreamProcessor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StreamProcessorNotificationChannel
 */
const de_StreamProcessorNotificationChannel = (
  output: any,
  context: __SerdeContext
): StreamProcessorNotificationChannel => {
  return {
    SNSTopicArn: __expectString(output.SNSTopicArn),
  } as any;
};

/**
 * deserializeAws_json1_1StreamProcessorOutput
 */
const de_StreamProcessorOutput = (output: any, context: __SerdeContext): StreamProcessorOutput => {
  return {
    KinesisDataStream:
      output.KinesisDataStream != null ? de_KinesisDataStream(output.KinesisDataStream, context) : undefined,
    S3Destination: output.S3Destination != null ? de_S3Destination(output.S3Destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StreamProcessorSettings
 */
const de_StreamProcessorSettings = (output: any, context: __SerdeContext): StreamProcessorSettings => {
  return {
    ConnectedHome: output.ConnectedHome != null ? de_ConnectedHomeSettings(output.ConnectedHome, context) : undefined,
    FaceSearch: output.FaceSearch != null ? de_FaceSearchSettings(output.FaceSearch, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Summary
 */
const de_Summary = (output: any, context: __SerdeContext): Summary => {
  return {
    S3Object: output.S3Object != null ? de_S3Object(output.S3Object, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Sunglasses
 */
const de_Sunglasses = (output: any, context: __SerdeContext): Sunglasses => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectBoolean(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TechnicalCueSegment
 */
const de_TechnicalCueSegment = (output: any, context: __SerdeContext): TechnicalCueSegment => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1TestingData
 */
const de_TestingData = (output: any, context: __SerdeContext): TestingData => {
  return {
    Assets: output.Assets != null ? de_Assets(output.Assets, context) : undefined,
    AutoCreate: __expectBoolean(output.AutoCreate),
  } as any;
};

/**
 * deserializeAws_json1_1TestingDataResult
 */
const de_TestingDataResult = (output: any, context: __SerdeContext): TestingDataResult => {
  return {
    Input: output.Input != null ? de_TestingData(output.Input, context) : undefined,
    Output: output.Output != null ? de_TestingData(output.Output, context) : undefined,
    Validation: output.Validation != null ? de_ValidationData(output.Validation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TextDetection
 */
const de_TextDetection = (output: any, context: __SerdeContext): TextDetection => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    DetectedText: __expectString(output.DetectedText),
    Geometry: output.Geometry != null ? de_Geometry(output.Geometry, context) : undefined,
    Id: __expectInt32(output.Id),
    ParentId: __expectInt32(output.ParentId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1TextDetectionList
 */
const de_TextDetectionList = (output: any, context: __SerdeContext): TextDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TextDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TextDetectionResult
 */
const de_TextDetectionResult = (output: any, context: __SerdeContext): TextDetectionResult => {
  return {
    TextDetection: output.TextDetection != null ? de_TextDetection(output.TextDetection, context) : undefined,
    Timestamp: __expectLong(output.Timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1TextDetectionResults
 */
const de_TextDetectionResults = (output: any, context: __SerdeContext): TextDetectionResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TextDetectionResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Code: __expectString(output.Code),
    Logref: __expectString(output.Logref),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TrainingData
 */
const de_TrainingData = (output: any, context: __SerdeContext): TrainingData => {
  return {
    Assets: output.Assets != null ? de_Assets(output.Assets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TrainingDataResult
 */
const de_TrainingDataResult = (output: any, context: __SerdeContext): TrainingDataResult => {
  return {
    Input: output.Input != null ? de_TrainingData(output.Input, context) : undefined,
    Output: output.Output != null ? de_TrainingData(output.Output, context) : undefined,
    Validation: output.Validation != null ? de_ValidationData(output.Validation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UnindexedFace
 */
const de_UnindexedFace = (output: any, context: __SerdeContext): UnindexedFace => {
  return {
    FaceDetail: output.FaceDetail != null ? de_FaceDetail(output.FaceDetail, context) : undefined,
    Reasons: output.Reasons != null ? de_Reasons(output.Reasons, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UnindexedFaces
 */
const de_UnindexedFaces = (output: any, context: __SerdeContext): UnindexedFace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnindexedFace(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDatasetEntriesResponse
 */
const de_UpdateDatasetEntriesResponse = (output: any, context: __SerdeContext): UpdateDatasetEntriesResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateStreamProcessorResponse
 */
const de_UpdateStreamProcessorResponse = (output: any, context: __SerdeContext): UpdateStreamProcessorResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Urls
 */
const de_Urls = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1ValidationData
 */
const de_ValidationData = (output: any, context: __SerdeContext): ValidationData => {
  return {
    Assets: output.Assets != null ? de_Assets(output.Assets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1VideoMetadata
 */
const de_VideoMetadata = (output: any, context: __SerdeContext): VideoMetadata => {
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

/**
 * deserializeAws_json1_1VideoMetadataList
 */
const de_VideoMetadataList = (output: any, context: __SerdeContext): VideoMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VideoMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VideoTooLargeException
 */
const de_VideoTooLargeException = (output: any, context: __SerdeContext): VideoTooLargeException => {
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
