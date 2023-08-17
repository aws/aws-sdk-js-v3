// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AssociateFacesCommandInput, AssociateFacesCommandOutput } from "../commands/AssociateFacesCommand";
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
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
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
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
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
import { DisassociateFacesCommandInput, DisassociateFacesCommandOutput } from "../commands/DisassociateFacesCommand";
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
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { PutProjectPolicyCommandInput, PutProjectPolicyCommandOutput } from "../commands/PutProjectPolicyCommand";
import {
  RecognizeCelebritiesCommandInput,
  RecognizeCelebritiesCommandOutput,
} from "../commands/RecognizeCelebritiesCommand";
import { SearchFacesByImageCommandInput, SearchFacesByImageCommandOutput } from "../commands/SearchFacesByImageCommand";
import { SearchFacesCommandInput, SearchFacesCommandOutput } from "../commands/SearchFacesCommand";
import { SearchUsersByImageCommandInput, SearchUsersByImageCommandOutput } from "../commands/SearchUsersByImageCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "../commands/SearchUsersCommand";
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
  Asset,
  AssociateFacesRequest,
  AssociateFacesResponse,
  Attribute,
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
  ConflictException,
  ConnectedHomeSettings,
  ConnectedHomeSettingsForUpdate,
  ContentClassifier,
  ContentModerationDetection,
  CopyProjectVersionRequest,
  CoversBodyPart,
  CreateCollectionRequest,
  CreateDatasetRequest,
  CreateFaceLivenessSessionRequest,
  CreateFaceLivenessSessionRequestSettings,
  CreateProjectRequest,
  CreateProjectVersionRequest,
  CreateStreamProcessorRequest,
  CreateUserRequest,
  CustomLabel,
  DatasetChanges,
  DatasetDescription,
  DatasetMetadata,
  DatasetSource,
  DeleteCollectionRequest,
  DeleteDatasetRequest,
  DeleteFacesRequest,
  DeleteProjectPolicyRequest,
  DeleteProjectRequest,
  DeleteProjectVersionRequest,
  DeleteStreamProcessorRequest,
  DeleteUserRequest,
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
  DisassociateFacesRequest,
  DistributeDataset,
  DistributeDatasetEntriesRequest,
  DominantColor,
  Emotion,
  EquipmentDetection,
  EvaluationResult,
  EyeDirection,
  Eyeglasses,
  EyeOpen,
  Face,
  FaceDetail,
  FaceDetection,
  FaceMatch,
  FaceOccluded,
  FaceRecord,
  FaceSearchSettings,
  Gender,
  GeneralLabelsSettings,
  Geometry,
  GetCelebrityInfoRequest,
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
  Label,
  LabelDetection,
  LabelDetectionFeatureName,
  LabelDetectionSettings,
  Landmark,
  LimitExceededException,
  ListCollectionsRequest,
  ListDatasetEntriesRequest,
  ListDatasetLabelsRequest,
  ListFacesRequest,
  ListFacesResponse,
  ListProjectPoliciesRequest,
  ListProjectPoliciesResponse,
  ListStreamProcessorsRequest,
  ListTagsForResourceRequest,
  ListUsersRequest,
  LivenessOutputConfig,
  MalformedPolicyDocumentException,
  ModerationLabel,
  MouthOpen,
  Mustache,
  NotificationChannel,
  OutputConfig,
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
  ProtectiveEquipmentType,
  ProvisionedThroughputExceededException,
  PutProjectPolicyRequest,
  RecognizeCelebritiesRequest,
  RecognizeCelebritiesResponse,
  RegionOfInterest,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  S3Destination,
  S3Object,
  SearchedFaceDetails,
  SearchFacesByImageRequest,
  SearchFacesByImageResponse,
  SearchFacesRequest,
  SearchFacesResponse,
  SearchUsersByImageRequest,
  SearchUsersByImageResponse,
  SearchUsersRequest,
  SearchUsersResponse,
  SegmentDetection,
  SegmentType,
  ServiceQuotaExceededException,
  SessionNotFoundException,
  ShotSegment,
  Smile,
  StartCelebrityRecognitionRequest,
  StreamProcessorDataSharingPreference,
  StreamProcessorInput,
  StreamProcessorNotificationChannel,
  StreamProcessorOutput,
  StreamProcessorSettings,
  Sunglasses,
  TechnicalCueSegment,
  TestingData,
  TextDetection,
  TextDetectionResult,
  ThrottlingException,
  TrainingData,
  UnindexedFace,
  UnsearchedFace,
  UnsuccessfulFaceAssociation,
  UserMatch,
  Video,
  VideoMetadata,
} from "../models/models_0";
import {
  StartContentModerationRequest,
  StartFaceDetectionRequest,
  StartFaceSearchRequest,
  StartLabelDetectionRequest,
  StartPersonTrackingRequest,
  StartProjectVersionRequest,
  StartSegmentDetectionFilters,
  StartSegmentDetectionRequest,
  StartShotDetectionFilter,
  StartStreamProcessorRequest,
  StartTechnicalCueDetectionFilter,
  StartTextDetectionFilters,
  StartTextDetectionRequest,
  StopProjectVersionRequest,
  StopStreamProcessorRequest,
  StreamProcessingStartSelector,
  StreamProcessingStopSelector,
  StreamProcessorParameterToDelete,
  StreamProcessorSettingsForUpdate,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateDatasetEntriesRequest,
  UpdateStreamProcessorRequest,
  VideoTooLargeException,
} from "../models/models_1";
import { RekognitionServiceException as __BaseException } from "../models/RekognitionServiceException";

/**
 * serializeAws_json1_1AssociateFacesCommand
 */
export const se_AssociateFacesCommand = async (
  input: AssociateFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateFaces");
  let body: any;
  body = JSON.stringify(se_AssociateFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CompareFacesCommand
 */
export const se_CompareFacesCommand = async (
  input: CompareFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CompareFaces");
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
  const headers: __HeaderBag = sharedHeaders("CopyProjectVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCollectionCommand
 */
export const se_CreateCollectionCommand = async (
  input: CreateCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCollection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatasetCommand
 */
export const se_CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataset");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFaceLivenessSessionCommand
 */
export const se_CreateFaceLivenessSessionCommand = async (
  input: CreateFaceLivenessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFaceLivenessSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectVersionCommand
 */
export const se_CreateProjectVersionCommand = async (
  input: CreateProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProjectVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStreamProcessorCommand
 */
export const se_CreateStreamProcessorCommand = async (
  input: CreateStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStreamProcessor");
  let body: any;
  body = JSON.stringify(se_CreateStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUser");
  let body: any;
  body = JSON.stringify(se_CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCollectionCommand
 */
export const se_DeleteCollectionCommand = async (
  input: DeleteCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCollection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDatasetCommand
 */
export const se_DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataset");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFacesCommand
 */
export const se_DeleteFacesCommand = async (
  input: DeleteFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectPolicyCommand
 */
export const se_DeleteProjectPolicyCommand = async (
  input: DeleteProjectPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProjectPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectVersionCommand
 */
export const se_DeleteProjectVersionCommand = async (
  input: DeleteProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProjectVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStreamProcessorCommand
 */
export const se_DeleteStreamProcessorCommand = async (
  input: DeleteStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStreamProcessor");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUser");
  let body: any;
  body = JSON.stringify(se_DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCollectionCommand
 */
export const se_DescribeCollectionCommand = async (
  input: DescribeCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCollection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDatasetCommand
 */
export const se_DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataset");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProjectsCommand
 */
export const se_DescribeProjectsCommand = async (
  input: DescribeProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProjects");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProjectVersionsCommand
 */
export const se_DescribeProjectVersionsCommand = async (
  input: DescribeProjectVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProjectVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStreamProcessorCommand
 */
export const se_DescribeStreamProcessorCommand = async (
  input: DescribeStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStreamProcessor");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectCustomLabelsCommand
 */
export const se_DetectCustomLabelsCommand = async (
  input: DetectCustomLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectCustomLabels");
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
  const headers: __HeaderBag = sharedHeaders("DetectFaces");
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
  const headers: __HeaderBag = sharedHeaders("DetectLabels");
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
  const headers: __HeaderBag = sharedHeaders("DetectModerationLabels");
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
  const headers: __HeaderBag = sharedHeaders("DetectProtectiveEquipment");
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
  const headers: __HeaderBag = sharedHeaders("DetectText");
  let body: any;
  body = JSON.stringify(se_DetectTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateFacesCommand
 */
export const se_DisassociateFacesCommand = async (
  input: DisassociateFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateFaces");
  let body: any;
  body = JSON.stringify(se_DisassociateFacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DistributeDatasetEntriesCommand
 */
export const se_DistributeDatasetEntriesCommand = async (
  input: DistributeDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DistributeDatasetEntries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCelebrityInfoCommand
 */
export const se_GetCelebrityInfoCommand = async (
  input: GetCelebrityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCelebrityInfo");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCelebrityRecognitionCommand
 */
export const se_GetCelebrityRecognitionCommand = async (
  input: GetCelebrityRecognitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCelebrityRecognition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContentModerationCommand
 */
export const se_GetContentModerationCommand = async (
  input: GetContentModerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContentModeration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFaceDetectionCommand
 */
export const se_GetFaceDetectionCommand = async (
  input: GetFaceDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFaceDetection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFaceLivenessSessionResultsCommand
 */
export const se_GetFaceLivenessSessionResultsCommand = async (
  input: GetFaceLivenessSessionResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFaceLivenessSessionResults");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFaceSearchCommand
 */
export const se_GetFaceSearchCommand = async (
  input: GetFaceSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFaceSearch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLabelDetectionCommand
 */
export const se_GetLabelDetectionCommand = async (
  input: GetLabelDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLabelDetection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPersonTrackingCommand
 */
export const se_GetPersonTrackingCommand = async (
  input: GetPersonTrackingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPersonTracking");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSegmentDetectionCommand
 */
export const se_GetSegmentDetectionCommand = async (
  input: GetSegmentDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSegmentDetection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTextDetectionCommand
 */
export const se_GetTextDetectionCommand = async (
  input: GetTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTextDetection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1IndexFacesCommand
 */
export const se_IndexFacesCommand = async (
  input: IndexFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("IndexFaces");
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
  const headers: __HeaderBag = sharedHeaders("ListCollections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetEntriesCommand
 */
export const se_ListDatasetEntriesCommand = async (
  input: ListDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasetEntries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetLabelsCommand
 */
export const se_ListDatasetLabelsCommand = async (
  input: ListDatasetLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasetLabels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFacesCommand
 */
export const se_ListFacesCommand = async (
  input: ListFacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProjectPoliciesCommand
 */
export const se_ListProjectPoliciesCommand = async (
  input: ListProjectPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProjectPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStreamProcessorsCommand
 */
export const se_ListStreamProcessorsCommand = async (
  input: ListStreamProcessorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStreamProcessors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUsers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutProjectPolicyCommand
 */
export const se_PutProjectPolicyCommand = async (
  input: PutProjectPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutProjectPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RecognizeCelebritiesCommand
 */
export const se_RecognizeCelebritiesCommand = async (
  input: RecognizeCelebritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RecognizeCelebrities");
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
  const headers: __HeaderBag = sharedHeaders("SearchFaces");
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
  const headers: __HeaderBag = sharedHeaders("SearchFacesByImage");
  let body: any;
  body = JSON.stringify(se_SearchFacesByImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchUsersCommand
 */
export const se_SearchUsersCommand = async (
  input: SearchUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchUsers");
  let body: any;
  body = JSON.stringify(se_SearchUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchUsersByImageCommand
 */
export const se_SearchUsersByImageCommand = async (
  input: SearchUsersByImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchUsersByImage");
  let body: any;
  body = JSON.stringify(se_SearchUsersByImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartCelebrityRecognitionCommand
 */
export const se_StartCelebrityRecognitionCommand = async (
  input: StartCelebrityRecognitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartCelebrityRecognition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartContentModerationCommand
 */
export const se_StartContentModerationCommand = async (
  input: StartContentModerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartContentModeration");
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
  const headers: __HeaderBag = sharedHeaders("StartFaceDetection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartFaceSearchCommand
 */
export const se_StartFaceSearchCommand = async (
  input: StartFaceSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartFaceSearch");
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
  const headers: __HeaderBag = sharedHeaders("StartLabelDetection");
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
  const headers: __HeaderBag = sharedHeaders("StartPersonTracking");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartProjectVersionCommand
 */
export const se_StartProjectVersionCommand = async (
  input: StartProjectVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartProjectVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSegmentDetectionCommand
 */
export const se_StartSegmentDetectionCommand = async (
  input: StartSegmentDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSegmentDetection");
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
  const headers: __HeaderBag = sharedHeaders("StartStreamProcessor");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTextDetectionCommand
 */
export const se_StartTextDetectionCommand = async (
  input: StartTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartTextDetection");
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
  const headers: __HeaderBag = sharedHeaders("StopProjectVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopStreamProcessorCommand
 */
export const se_StopStreamProcessorCommand = async (
  input: StopStreamProcessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopStreamProcessor");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDatasetEntriesCommand
 */
export const se_UpdateDatasetEntriesCommand = async (
  input: UpdateDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDatasetEntries");
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
  const headers: __HeaderBag = sharedHeaders("UpdateStreamProcessor");
  let body: any;
  body = JSON.stringify(se_UpdateStreamProcessorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateFacesCommand
 */
export const de_AssociateFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateFacesResponse(data, context);
  const response: AssociateFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateFacesCommandError
 */
const de_AssociateFacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rekognition#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CopyProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateFaceLivenessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserCommandError
 */
const de_CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rekognition#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteProjectPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rekognition#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateFacesCommand
 */
export const de_DisassociateFacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateFacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateFacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateFacesCommandError
 */
const de_DisassociateFacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognition#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rekognition#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.rekognition#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DistributeDatasetEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCelebrityInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListCollectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDatasetEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDatasetLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListStreamProcessorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUsersCommandError
 */
const de_ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutProjectPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SearchUsersCommand
 */
export const de_SearchUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchUsersResponse(data, context);
  const response: SearchUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SearchUsersCommandError
 */
const de_SearchUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SearchUsersByImageCommand
 */
export const de_SearchUsersByImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersByImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchUsersByImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchUsersByImageResponse(data, context);
  const response: SearchUsersByImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SearchUsersByImageCommandError
 */
const de_SearchUsersByImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersByImageCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartCelebrityRecognitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartContentModerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartFaceDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartFaceSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartLabelDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartPersonTrackingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartSegmentDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopProjectVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDatasetEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateStreamProcessorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new VideoTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_Asset omitted.

// se_Assets omitted.

/**
 * serializeAws_json1_1AssociateFacesRequest
 */
const se_AssociateFacesRequest = (input: AssociateFacesRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CollectionId: [],
    FaceIds: _json,
    UserId: [],
    UserMatchThreshold: __serializeFloat,
  });
};

// se_Attributes omitted.

/**
 * serializeAws_json1_1BlackFrame
 */
const se_BlackFrame = (input: BlackFrame, context: __SerdeContext): any => {
  return take(input, {
    MaxPixelThreshold: __serializeFloat,
    MinCoveragePercentage: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1BoundingBox
 */
const se_BoundingBox = (input: BoundingBox, context: __SerdeContext): any => {
  return take(input, {
    Height: __serializeFloat,
    Left: __serializeFloat,
    Top: __serializeFloat,
    Width: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1CompareFacesRequest
 */
const se_CompareFacesRequest = (input: CompareFacesRequest, context: __SerdeContext): any => {
  return take(input, {
    QualityFilter: [],
    SimilarityThreshold: __serializeFloat,
    SourceImage: (_) => se_Image(_, context),
    TargetImage: (_) => se_Image(_, context),
  });
};

// se_ConnectedHomeLabels omitted.

/**
 * serializeAws_json1_1ConnectedHomeSettings
 */
const se_ConnectedHomeSettings = (input: ConnectedHomeSettings, context: __SerdeContext): any => {
  return take(input, {
    Labels: _json,
    MinConfidence: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1ConnectedHomeSettingsForUpdate
 */
const se_ConnectedHomeSettingsForUpdate = (input: ConnectedHomeSettingsForUpdate, context: __SerdeContext): any => {
  return take(input, {
    Labels: _json,
    MinConfidence: __serializeFloat,
  });
};

// se_ContentClassifiers omitted.

// se_CopyProjectVersionRequest omitted.

// se_CreateCollectionRequest omitted.

// se_CreateDatasetRequest omitted.

// se_CreateFaceLivenessSessionRequest omitted.

// se_CreateFaceLivenessSessionRequestSettings omitted.

// se_CreateProjectRequest omitted.

// se_CreateProjectVersionRequest omitted.

/**
 * serializeAws_json1_1CreateStreamProcessorRequest
 */
const se_CreateStreamProcessorRequest = (input: CreateStreamProcessorRequest, context: __SerdeContext): any => {
  return take(input, {
    DataSharingPreference: _json,
    Input: _json,
    KmsKeyId: [],
    Name: [],
    NotificationChannel: _json,
    Output: _json,
    RegionsOfInterest: (_) => se_RegionsOfInterest(_, context),
    RoleArn: [],
    Settings: (_) => se_StreamProcessorSettings(_, context),
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateUserRequest
 */
const se_CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CollectionId: [],
    UserId: [],
  });
};

/**
 * serializeAws_json1_1DatasetChanges
 */
const se_DatasetChanges = (input: DatasetChanges, context: __SerdeContext): any => {
  return take(input, {
    GroundTruth: context.base64Encoder,
  });
};

// se_DatasetLabels omitted.

// se_DatasetSource omitted.

// se_DeleteCollectionRequest omitted.

// se_DeleteDatasetRequest omitted.

// se_DeleteFacesRequest omitted.

// se_DeleteProjectPolicyRequest omitted.

// se_DeleteProjectRequest omitted.

// se_DeleteProjectVersionRequest omitted.

// se_DeleteStreamProcessorRequest omitted.

/**
 * serializeAws_json1_1DeleteUserRequest
 */
const se_DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CollectionId: [],
    UserId: [],
  });
};

// se_DescribeCollectionRequest omitted.

// se_DescribeDatasetRequest omitted.

// se_DescribeProjectsRequest omitted.

// se_DescribeProjectVersionsRequest omitted.

// se_DescribeStreamProcessorRequest omitted.

/**
 * serializeAws_json1_1DetectCustomLabelsRequest
 */
const se_DetectCustomLabelsRequest = (input: DetectCustomLabelsRequest, context: __SerdeContext): any => {
  return take(input, {
    Image: (_) => se_Image(_, context),
    MaxResults: [],
    MinConfidence: __serializeFloat,
    ProjectVersionArn: [],
  });
};

/**
 * serializeAws_json1_1DetectFacesRequest
 */
const se_DetectFacesRequest = (input: DetectFacesRequest, context: __SerdeContext): any => {
  return take(input, {
    Attributes: _json,
    Image: (_) => se_Image(_, context),
  });
};

/**
 * serializeAws_json1_1DetectionFilter
 */
const se_DetectionFilter = (input: DetectionFilter, context: __SerdeContext): any => {
  return take(input, {
    MinBoundingBoxHeight: __serializeFloat,
    MinBoundingBoxWidth: __serializeFloat,
    MinConfidence: __serializeFloat,
  });
};

// se_DetectLabelsFeatureList omitted.

// se_DetectLabelsImagePropertiesSettings omitted.

/**
 * serializeAws_json1_1DetectLabelsRequest
 */
const se_DetectLabelsRequest = (input: DetectLabelsRequest, context: __SerdeContext): any => {
  return take(input, {
    Features: _json,
    Image: (_) => se_Image(_, context),
    MaxLabels: [],
    MinConfidence: __serializeFloat,
    Settings: _json,
  });
};

// se_DetectLabelsSettings omitted.

/**
 * serializeAws_json1_1DetectModerationLabelsRequest
 */
const se_DetectModerationLabelsRequest = (input: DetectModerationLabelsRequest, context: __SerdeContext): any => {
  return take(input, {
    HumanLoopConfig: _json,
    Image: (_) => se_Image(_, context),
    MinConfidence: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1DetectProtectiveEquipmentRequest
 */
const se_DetectProtectiveEquipmentRequest = (input: DetectProtectiveEquipmentRequest, context: __SerdeContext): any => {
  return take(input, {
    Image: (_) => se_Image(_, context),
    SummarizationAttributes: (_) => se_ProtectiveEquipmentSummarizationAttributes(_, context),
  });
};

/**
 * serializeAws_json1_1DetectTextFilters
 */
const se_DetectTextFilters = (input: DetectTextFilters, context: __SerdeContext): any => {
  return take(input, {
    RegionsOfInterest: (_) => se_RegionsOfInterest(_, context),
    WordFilter: (_) => se_DetectionFilter(_, context),
  });
};

/**
 * serializeAws_json1_1DetectTextRequest
 */
const se_DetectTextRequest = (input: DetectTextRequest, context: __SerdeContext): any => {
  return take(input, {
    Filters: (_) => se_DetectTextFilters(_, context),
    Image: (_) => se_Image(_, context),
  });
};

/**
 * serializeAws_json1_1DisassociateFacesRequest
 */
const se_DisassociateFacesRequest = (input: DisassociateFacesRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CollectionId: [],
    FaceIds: _json,
    UserId: [],
  });
};

// se_DistributeDataset omitted.

// se_DistributeDatasetEntriesRequest omitted.

// se_DistributeDatasetMetadataList omitted.

// se_FaceIdList omitted.

/**
 * serializeAws_json1_1FaceSearchSettings
 */
const se_FaceSearchSettings = (input: FaceSearchSettings, context: __SerdeContext): any => {
  return take(input, {
    CollectionId: [],
    FaceMatchThreshold: __serializeFloat,
  });
};

// se_GeneralLabelsFilterList omitted.

// se_GeneralLabelsSettings omitted.

// se_GetCelebrityInfoRequest omitted.

// se_GetCelebrityRecognitionRequest omitted.

// se_GetContentModerationRequest omitted.

// se_GetFaceDetectionRequest omitted.

// se_GetFaceLivenessSessionResultsRequest omitted.

// se_GetFaceSearchRequest omitted.

// se_GetLabelDetectionRequest omitted.

// se_GetPersonTrackingRequest omitted.

// se_GetSegmentDetectionRequest omitted.

// se_GetTextDetectionRequest omitted.

// se_GroundTruthManifest omitted.

// se_HumanLoopConfig omitted.

// se_HumanLoopDataAttributes omitted.

/**
 * serializeAws_json1_1Image
 */
const se_Image = (input: Image, context: __SerdeContext): any => {
  return take(input, {
    Bytes: context.base64Encoder,
    S3Object: _json,
  });
};

/**
 * serializeAws_json1_1IndexFacesRequest
 */
const se_IndexFacesRequest = (input: IndexFacesRequest, context: __SerdeContext): any => {
  return take(input, {
    CollectionId: [],
    DetectionAttributes: _json,
    ExternalImageId: [],
    Image: (_) => se_Image(_, context),
    MaxFaces: [],
    QualityFilter: [],
  });
};

// se_KinesisDataStream omitted.

// se_KinesisVideoStream omitted.

// se_KinesisVideoStreamStartSelector omitted.

// se_LabelDetectionFeatureList omitted.

// se_LabelDetectionSettings omitted.

// se_ListCollectionsRequest omitted.

// se_ListDatasetEntriesRequest omitted.

// se_ListDatasetLabelsRequest omitted.

// se_ListFacesRequest omitted.

// se_ListProjectPoliciesRequest omitted.

// se_ListStreamProcessorsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListUsersRequest omitted.

// se_LivenessOutputConfig omitted.

// se_NotificationChannel omitted.

// se_OutputConfig omitted.

/**
 * serializeAws_json1_1Point
 */
const se_Point = (input: Point, context: __SerdeContext): any => {
  return take(input, {
    X: __serializeFloat,
    Y: __serializeFloat,
  });
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

// se_ProjectNames omitted.

/**
 * serializeAws_json1_1ProtectiveEquipmentSummarizationAttributes
 */
const se_ProtectiveEquipmentSummarizationAttributes = (
  input: ProtectiveEquipmentSummarizationAttributes,
  context: __SerdeContext
): any => {
  return take(input, {
    MinConfidence: __serializeFloat,
    RequiredEquipmentTypes: _json,
  });
};

// se_ProtectiveEquipmentTypes omitted.

// se_PutProjectPolicyRequest omitted.

/**
 * serializeAws_json1_1RecognizeCelebritiesRequest
 */
const se_RecognizeCelebritiesRequest = (input: RecognizeCelebritiesRequest, context: __SerdeContext): any => {
  return take(input, {
    Image: (_) => se_Image(_, context),
  });
};

/**
 * serializeAws_json1_1RegionOfInterest
 */
const se_RegionOfInterest = (input: RegionOfInterest, context: __SerdeContext): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
    Polygon: (_) => se_Polygon(_, context),
  });
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

// se_S3Destination omitted.

// se_S3Object omitted.

/**
 * serializeAws_json1_1SearchFacesByImageRequest
 */
const se_SearchFacesByImageRequest = (input: SearchFacesByImageRequest, context: __SerdeContext): any => {
  return take(input, {
    CollectionId: [],
    FaceMatchThreshold: __serializeFloat,
    Image: (_) => se_Image(_, context),
    MaxFaces: [],
    QualityFilter: [],
  });
};

/**
 * serializeAws_json1_1SearchFacesRequest
 */
const se_SearchFacesRequest = (input: SearchFacesRequest, context: __SerdeContext): any => {
  return take(input, {
    CollectionId: [],
    FaceId: [],
    FaceMatchThreshold: __serializeFloat,
    MaxFaces: [],
  });
};

/**
 * serializeAws_json1_1SearchUsersByImageRequest
 */
const se_SearchUsersByImageRequest = (input: SearchUsersByImageRequest, context: __SerdeContext): any => {
  return take(input, {
    CollectionId: [],
    Image: (_) => se_Image(_, context),
    MaxUsers: [],
    QualityFilter: [],
    UserMatchThreshold: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1SearchUsersRequest
 */
const se_SearchUsersRequest = (input: SearchUsersRequest, context: __SerdeContext): any => {
  return take(input, {
    CollectionId: [],
    FaceId: [],
    MaxUsers: [],
    UserId: [],
    UserMatchThreshold: __serializeFloat,
  });
};

// se_SegmentTypes omitted.

// se_StartCelebrityRecognitionRequest omitted.

/**
 * serializeAws_json1_1StartContentModerationRequest
 */
const se_StartContentModerationRequest = (input: StartContentModerationRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [],
    JobTag: [],
    MinConfidence: __serializeFloat,
    NotificationChannel: _json,
    Video: _json,
  });
};

// se_StartFaceDetectionRequest omitted.

/**
 * serializeAws_json1_1StartFaceSearchRequest
 */
const se_StartFaceSearchRequest = (input: StartFaceSearchRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [],
    CollectionId: [],
    FaceMatchThreshold: __serializeFloat,
    JobTag: [],
    NotificationChannel: _json,
    Video: _json,
  });
};

/**
 * serializeAws_json1_1StartLabelDetectionRequest
 */
const se_StartLabelDetectionRequest = (input: StartLabelDetectionRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [],
    Features: _json,
    JobTag: [],
    MinConfidence: __serializeFloat,
    NotificationChannel: _json,
    Settings: _json,
    Video: _json,
  });
};

// se_StartPersonTrackingRequest omitted.

// se_StartProjectVersionRequest omitted.

/**
 * serializeAws_json1_1StartSegmentDetectionFilters
 */
const se_StartSegmentDetectionFilters = (input: StartSegmentDetectionFilters, context: __SerdeContext): any => {
  return take(input, {
    ShotFilter: (_) => se_StartShotDetectionFilter(_, context),
    TechnicalCueFilter: (_) => se_StartTechnicalCueDetectionFilter(_, context),
  });
};

/**
 * serializeAws_json1_1StartSegmentDetectionRequest
 */
const se_StartSegmentDetectionRequest = (input: StartSegmentDetectionRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [],
    Filters: (_) => se_StartSegmentDetectionFilters(_, context),
    JobTag: [],
    NotificationChannel: _json,
    SegmentTypes: _json,
    Video: _json,
  });
};

/**
 * serializeAws_json1_1StartShotDetectionFilter
 */
const se_StartShotDetectionFilter = (input: StartShotDetectionFilter, context: __SerdeContext): any => {
  return take(input, {
    MinSegmentConfidence: __serializeFloat,
  });
};

// se_StartStreamProcessorRequest omitted.

/**
 * serializeAws_json1_1StartTechnicalCueDetectionFilter
 */
const se_StartTechnicalCueDetectionFilter = (input: StartTechnicalCueDetectionFilter, context: __SerdeContext): any => {
  return take(input, {
    BlackFrame: (_) => se_BlackFrame(_, context),
    MinSegmentConfidence: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1StartTextDetectionFilters
 */
const se_StartTextDetectionFilters = (input: StartTextDetectionFilters, context: __SerdeContext): any => {
  return take(input, {
    RegionsOfInterest: (_) => se_RegionsOfInterest(_, context),
    WordFilter: (_) => se_DetectionFilter(_, context),
  });
};

/**
 * serializeAws_json1_1StartTextDetectionRequest
 */
const se_StartTextDetectionRequest = (input: StartTextDetectionRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [],
    Filters: (_) => se_StartTextDetectionFilters(_, context),
    JobTag: [],
    NotificationChannel: _json,
    Video: _json,
  });
};

// se_StopProjectVersionRequest omitted.

// se_StopStreamProcessorRequest omitted.

// se_StreamProcessingStartSelector omitted.

// se_StreamProcessingStopSelector omitted.

// se_StreamProcessorDataSharingPreference omitted.

// se_StreamProcessorInput omitted.

// se_StreamProcessorNotificationChannel omitted.

// se_StreamProcessorOutput omitted.

// se_StreamProcessorParametersToDelete omitted.

/**
 * serializeAws_json1_1StreamProcessorSettings
 */
const se_StreamProcessorSettings = (input: StreamProcessorSettings, context: __SerdeContext): any => {
  return take(input, {
    ConnectedHome: (_) => se_ConnectedHomeSettings(_, context),
    FaceSearch: (_) => se_FaceSearchSettings(_, context),
  });
};

/**
 * serializeAws_json1_1StreamProcessorSettingsForUpdate
 */
const se_StreamProcessorSettingsForUpdate = (input: StreamProcessorSettingsForUpdate, context: __SerdeContext): any => {
  return take(input, {
    ConnectedHomeForUpdate: (_) => se_ConnectedHomeSettingsForUpdate(_, context),
  });
};

// se_TagKeyList omitted.

// se_TagMap omitted.

// se_TagResourceRequest omitted.

// se_TestingData omitted.

// se_TrainingData omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_1UpdateDatasetEntriesRequest
 */
const se_UpdateDatasetEntriesRequest = (input: UpdateDatasetEntriesRequest, context: __SerdeContext): any => {
  return take(input, {
    Changes: (_) => se_DatasetChanges(_, context),
    DatasetArn: [],
  });
};

/**
 * serializeAws_json1_1UpdateStreamProcessorRequest
 */
const se_UpdateStreamProcessorRequest = (input: UpdateStreamProcessorRequest, context: __SerdeContext): any => {
  return take(input, {
    DataSharingPreferenceForUpdate: _json,
    Name: [],
    ParametersToDelete: _json,
    RegionsOfInterestForUpdate: (_) => se_RegionsOfInterest(_, context),
    SettingsForUpdate: (_) => se_StreamProcessorSettingsForUpdate(_, context),
  });
};

// se_UserFaceIdList omitted.

// se_VersionNames omitted.

// se_Video omitted.

// de_AccessDeniedException omitted.

// de_AgeRange omitted.

// de_Asset omitted.

// de_Assets omitted.

// de_AssociatedFace omitted.

// de_AssociatedFacesList omitted.

/**
 * deserializeAws_json1_1AssociateFacesResponse
 */
const de_AssociateFacesResponse = (output: any, context: __SerdeContext): AssociateFacesResponse => {
  return take(output, {
    AssociatedFaces: _json,
    UnsuccessfulFaceAssociations: (_: any) => de_UnsuccessfulFaceAssociationList(_, context),
    UserStatus: __expectString,
  }) as any;
};

// de_AudioMetadata omitted.

// de_AudioMetadataList omitted.

/**
 * deserializeAws_json1_1AuditImage
 */
const de_AuditImage = (output: any, context: __SerdeContext): AuditImage => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Bytes: context.base64Decoder,
    S3Object: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1AuditImages
 */
const de_AuditImages = (output: any, context: __SerdeContext): AuditImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuditImage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Beard
 */
const de_Beard = (output: any, context: __SerdeContext): Beard => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1BodyParts
 */
const de_BodyParts = (output: any, context: __SerdeContext): ProtectiveEquipmentBodyPart[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProtectiveEquipmentBodyPart(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BoundingBox
 */
const de_BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return take(output, {
    Height: __limitedParseFloat32,
    Left: __limitedParseFloat32,
    Top: __limitedParseFloat32,
    Width: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1Celebrity
 */
const de_Celebrity = (output: any, context: __SerdeContext): Celebrity => {
  return take(output, {
    Face: (_: any) => de_ComparedFace(_, context),
    Id: __expectString,
    KnownGender: _json,
    MatchConfidence: __limitedParseFloat32,
    Name: __expectString,
    Urls: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CelebrityDetail
 */
const de_CelebrityDetail = (output: any, context: __SerdeContext): CelebrityDetail => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Confidence: __limitedParseFloat32,
    Face: (_: any) => de_FaceDetail(_, context),
    Id: __expectString,
    KnownGender: _json,
    Name: __expectString,
    Urls: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CelebrityList
 */
const de_CelebrityList = (output: any, context: __SerdeContext): Celebrity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Celebrity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CelebrityRecognition
 */
const de_CelebrityRecognition = (output: any, context: __SerdeContext): CelebrityRecognition => {
  return take(output, {
    Celebrity: (_: any) => de_CelebrityDetail(_, context),
    Timestamp: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1CelebrityRecognitions
 */
const de_CelebrityRecognitions = (output: any, context: __SerdeContext): CelebrityRecognition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CelebrityRecognition(entry, context);
    });
  return retVal;
};

// de_CollectionIdList omitted.

/**
 * deserializeAws_json1_1ComparedFace
 */
const de_ComparedFace = (output: any, context: __SerdeContext): ComparedFace => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Confidence: __limitedParseFloat32,
    Emotions: (_: any) => de_Emotions(_, context),
    Landmarks: (_: any) => de_Landmarks(_, context),
    Pose: (_: any) => de_Pose(_, context),
    Quality: (_: any) => de_ImageQuality(_, context),
    Smile: (_: any) => de_Smile(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ComparedFaceList
 */
const de_ComparedFaceList = (output: any, context: __SerdeContext): ComparedFace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ComparedFace(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComparedSourceImageFace
 */
const de_ComparedSourceImageFace = (output: any, context: __SerdeContext): ComparedSourceImageFace => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Confidence: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1CompareFacesMatch
 */
const de_CompareFacesMatch = (output: any, context: __SerdeContext): CompareFacesMatch => {
  return take(output, {
    Face: (_: any) => de_ComparedFace(_, context),
    Similarity: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1CompareFacesMatchList
 */
const de_CompareFacesMatchList = (output: any, context: __SerdeContext): CompareFacesMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CompareFacesMatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CompareFacesResponse
 */
const de_CompareFacesResponse = (output: any, context: __SerdeContext): CompareFacesResponse => {
  return take(output, {
    FaceMatches: (_: any) => de_CompareFacesMatchList(_, context),
    SourceImageFace: (_: any) => de_ComparedSourceImageFace(_, context),
    SourceImageOrientationCorrection: __expectString,
    TargetImageOrientationCorrection: __expectString,
    UnmatchedFaces: (_: any) => de_CompareFacesUnmatchList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CompareFacesUnmatchList
 */
const de_CompareFacesUnmatchList = (output: any, context: __SerdeContext): ComparedFace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ComparedFace(entry, context);
    });
  return retVal;
};

// de_ConflictException omitted.

// de_ConnectedHomeLabels omitted.

/**
 * deserializeAws_json1_1ConnectedHomeSettings
 */
const de_ConnectedHomeSettings = (output: any, context: __SerdeContext): ConnectedHomeSettings => {
  return take(output, {
    Labels: _json,
    MinConfidence: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1ContentModerationDetection
 */
const de_ContentModerationDetection = (output: any, context: __SerdeContext): ContentModerationDetection => {
  return take(output, {
    DurationMillis: __expectLong,
    EndTimestampMillis: __expectLong,
    ModerationLabel: (_: any) => de_ModerationLabel(_, context),
    StartTimestampMillis: __expectLong,
    Timestamp: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1ContentModerationDetections
 */
const de_ContentModerationDetections = (output: any, context: __SerdeContext): ContentModerationDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContentModerationDetection(entry, context);
    });
  return retVal;
};

// de_CopyProjectVersionResponse omitted.

/**
 * deserializeAws_json1_1CoversBodyPart
 */
const de_CoversBodyPart = (output: any, context: __SerdeContext): CoversBodyPart => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectBoolean,
  }) as any;
};

// de_CreateCollectionResponse omitted.

// de_CreateDatasetResponse omitted.

// de_CreateFaceLivenessSessionResponse omitted.

// de_CreateProjectResponse omitted.

// de_CreateProjectVersionResponse omitted.

// de_CreateStreamProcessorResponse omitted.

// de_CreateUserResponse omitted.

/**
 * deserializeAws_json1_1CustomLabel
 */
const de_CustomLabel = (output: any, context: __SerdeContext): CustomLabel => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Geometry: (_: any) => de_Geometry(_, context),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CustomLabels
 */
const de_CustomLabels = (output: any, context: __SerdeContext): CustomLabel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomLabel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetDescription
 */
const de_DatasetDescription = (output: any, context: __SerdeContext): DatasetDescription => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetStats: _json,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusMessage: __expectString,
    StatusMessageCode: __expectString,
  }) as any;
};

// de_DatasetEntries omitted.

// de_DatasetLabelDescription omitted.

// de_DatasetLabelDescriptions omitted.

// de_DatasetLabelStats omitted.

/**
 * deserializeAws_json1_1DatasetMetadata
 */
const de_DatasetMetadata = (output: any, context: __SerdeContext): DatasetMetadata => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetArn: __expectString,
    DatasetType: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    StatusMessageCode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetMetadataList
 */
const de_DatasetMetadataList = (output: any, context: __SerdeContext): DatasetMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetMetadata(entry, context);
    });
  return retVal;
};

// de_DatasetStats omitted.

// de_DeleteCollectionResponse omitted.

// de_DeleteDatasetResponse omitted.

// de_DeleteFacesResponse omitted.

// de_DeleteProjectPolicyResponse omitted.

// de_DeleteProjectResponse omitted.

// de_DeleteProjectVersionResponse omitted.

// de_DeleteStreamProcessorResponse omitted.

// de_DeleteUserResponse omitted.

/**
 * deserializeAws_json1_1DescribeCollectionResponse
 */
const de_DescribeCollectionResponse = (output: any, context: __SerdeContext): DescribeCollectionResponse => {
  return take(output, {
    CollectionARN: __expectString,
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FaceCount: __expectLong,
    FaceModelVersion: __expectString,
    UserCount: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetResponse
 */
const de_DescribeDatasetResponse = (output: any, context: __SerdeContext): DescribeDatasetResponse => {
  return take(output, {
    DatasetDescription: (_: any) => de_DatasetDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProjectsResponse
 */
const de_DescribeProjectsResponse = (output: any, context: __SerdeContext): DescribeProjectsResponse => {
  return take(output, {
    NextToken: __expectString,
    ProjectDescriptions: (_: any) => de_ProjectDescriptions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProjectVersionsResponse
 */
const de_DescribeProjectVersionsResponse = (output: any, context: __SerdeContext): DescribeProjectVersionsResponse => {
  return take(output, {
    NextToken: __expectString,
    ProjectVersionDescriptions: (_: any) => de_ProjectVersionDescriptions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStreamProcessorResponse
 */
const de_DescribeStreamProcessorResponse = (output: any, context: __SerdeContext): DescribeStreamProcessorResponse => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSharingPreference: _json,
    Input: _json,
    KmsKeyId: __expectString,
    LastUpdateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    NotificationChannel: _json,
    Output: _json,
    RegionsOfInterest: (_: any) => de_RegionsOfInterest(_, context),
    RoleArn: __expectString,
    Settings: (_: any) => de_StreamProcessorSettings(_, context),
    Status: __expectString,
    StatusMessage: __expectString,
    StreamProcessorArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DetectCustomLabelsResponse
 */
const de_DetectCustomLabelsResponse = (output: any, context: __SerdeContext): DetectCustomLabelsResponse => {
  return take(output, {
    CustomLabels: (_: any) => de_CustomLabels(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectFacesResponse
 */
const de_DetectFacesResponse = (output: any, context: __SerdeContext): DetectFacesResponse => {
  return take(output, {
    FaceDetails: (_: any) => de_FaceDetailList(_, context),
    OrientationCorrection: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DetectLabelsImageBackground
 */
const de_DetectLabelsImageBackground = (output: any, context: __SerdeContext): DetectLabelsImageBackground => {
  return take(output, {
    DominantColors: (_: any) => de_DominantColors(_, context),
    Quality: (_: any) => de_DetectLabelsImageQuality(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectLabelsImageForeground
 */
const de_DetectLabelsImageForeground = (output: any, context: __SerdeContext): DetectLabelsImageForeground => {
  return take(output, {
    DominantColors: (_: any) => de_DominantColors(_, context),
    Quality: (_: any) => de_DetectLabelsImageQuality(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectLabelsImageProperties
 */
const de_DetectLabelsImageProperties = (output: any, context: __SerdeContext): DetectLabelsImageProperties => {
  return take(output, {
    Background: (_: any) => de_DetectLabelsImageBackground(_, context),
    DominantColors: (_: any) => de_DominantColors(_, context),
    Foreground: (_: any) => de_DetectLabelsImageForeground(_, context),
    Quality: (_: any) => de_DetectLabelsImageQuality(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectLabelsImageQuality
 */
const de_DetectLabelsImageQuality = (output: any, context: __SerdeContext): DetectLabelsImageQuality => {
  return take(output, {
    Brightness: __limitedParseFloat32,
    Contrast: __limitedParseFloat32,
    Sharpness: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1DetectLabelsResponse
 */
const de_DetectLabelsResponse = (output: any, context: __SerdeContext): DetectLabelsResponse => {
  return take(output, {
    ImageProperties: (_: any) => de_DetectLabelsImageProperties(_, context),
    LabelModelVersion: __expectString,
    Labels: (_: any) => de_Labels(_, context),
    OrientationCorrection: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DetectModerationLabelsResponse
 */
const de_DetectModerationLabelsResponse = (output: any, context: __SerdeContext): DetectModerationLabelsResponse => {
  return take(output, {
    HumanLoopActivationOutput: (_: any) => de_HumanLoopActivationOutput(_, context),
    ModerationLabels: (_: any) => de_ModerationLabels(_, context),
    ModerationModelVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DetectProtectiveEquipmentResponse
 */
const de_DetectProtectiveEquipmentResponse = (
  output: any,
  context: __SerdeContext
): DetectProtectiveEquipmentResponse => {
  return take(output, {
    Persons: (_: any) => de_ProtectiveEquipmentPersons(_, context),
    ProtectiveEquipmentModelVersion: __expectString,
    Summary: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DetectTextResponse
 */
const de_DetectTextResponse = (output: any, context: __SerdeContext): DetectTextResponse => {
  return take(output, {
    TextDetections: (_: any) => de_TextDetectionList(_, context),
    TextModelVersion: __expectString,
  }) as any;
};

// de_DisassociatedFace omitted.

// de_DisassociatedFacesList omitted.

// de_DisassociateFacesResponse omitted.

// de_DistributeDatasetEntriesResponse omitted.

/**
 * deserializeAws_json1_1DominantColor
 */
const de_DominantColor = (output: any, context: __SerdeContext): DominantColor => {
  return take(output, {
    Blue: __expectInt32,
    CSSColor: __expectString,
    Green: __expectInt32,
    HexCode: __expectString,
    PixelPercent: __limitedParseFloat32,
    Red: __expectInt32,
    SimplifiedColor: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DominantColors
 */
const de_DominantColors = (output: any, context: __SerdeContext): DominantColor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DominantColor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Emotion
 */
const de_Emotion = (output: any, context: __SerdeContext): Emotion => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Emotions
 */
const de_Emotions = (output: any, context: __SerdeContext): Emotion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Emotion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EquipmentDetection
 */
const de_EquipmentDetection = (output: any, context: __SerdeContext): EquipmentDetection => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Confidence: __limitedParseFloat32,
    CoversBodyPart: (_: any) => de_CoversBodyPart(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EquipmentDetections
 */
const de_EquipmentDetections = (output: any, context: __SerdeContext): EquipmentDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EquipmentDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EvaluationResult
 */
const de_EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return take(output, {
    F1Score: __limitedParseFloat32,
    Summary: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1EyeDirection
 */
const de_EyeDirection = (output: any, context: __SerdeContext): EyeDirection => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Pitch: __limitedParseFloat32,
    Yaw: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1Eyeglasses
 */
const de_Eyeglasses = (output: any, context: __SerdeContext): Eyeglasses => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1EyeOpen
 */
const de_EyeOpen = (output: any, context: __SerdeContext): EyeOpen => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1Face
 */
const de_Face = (output: any, context: __SerdeContext): Face => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Confidence: __limitedParseFloat32,
    ExternalImageId: __expectString,
    FaceId: __expectString,
    ImageId: __expectString,
    IndexFacesModelVersion: __expectString,
    UserId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FaceDetail
 */
const de_FaceDetail = (output: any, context: __SerdeContext): FaceDetail => {
  return take(output, {
    AgeRange: _json,
    Beard: (_: any) => de_Beard(_, context),
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Confidence: __limitedParseFloat32,
    Emotions: (_: any) => de_Emotions(_, context),
    EyeDirection: (_: any) => de_EyeDirection(_, context),
    Eyeglasses: (_: any) => de_Eyeglasses(_, context),
    EyesOpen: (_: any) => de_EyeOpen(_, context),
    FaceOccluded: (_: any) => de_FaceOccluded(_, context),
    Gender: (_: any) => de_Gender(_, context),
    Landmarks: (_: any) => de_Landmarks(_, context),
    MouthOpen: (_: any) => de_MouthOpen(_, context),
    Mustache: (_: any) => de_Mustache(_, context),
    Pose: (_: any) => de_Pose(_, context),
    Quality: (_: any) => de_ImageQuality(_, context),
    Smile: (_: any) => de_Smile(_, context),
    Sunglasses: (_: any) => de_Sunglasses(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1FaceDetailList
 */
const de_FaceDetailList = (output: any, context: __SerdeContext): FaceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FaceDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FaceDetection
 */
const de_FaceDetection = (output: any, context: __SerdeContext): FaceDetection => {
  return take(output, {
    Face: (_: any) => de_FaceDetail(_, context),
    Timestamp: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1FaceDetections
 */
const de_FaceDetections = (output: any, context: __SerdeContext): FaceDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FaceDetection(entry, context);
    });
  return retVal;
};

// de_FaceIdList omitted.

/**
 * deserializeAws_json1_1FaceList
 */
const de_FaceList = (output: any, context: __SerdeContext): Face[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Face(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FaceMatch
 */
const de_FaceMatch = (output: any, context: __SerdeContext): FaceMatch => {
  return take(output, {
    Face: (_: any) => de_Face(_, context),
    Similarity: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1FaceMatchList
 */
const de_FaceMatchList = (output: any, context: __SerdeContext): FaceMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FaceMatch(entry, context);
    });
  return retVal;
};

// de_FaceModelVersionList omitted.

/**
 * deserializeAws_json1_1FaceOccluded
 */
const de_FaceOccluded = (output: any, context: __SerdeContext): FaceOccluded => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1FaceRecord
 */
const de_FaceRecord = (output: any, context: __SerdeContext): FaceRecord => {
  return take(output, {
    Face: (_: any) => de_Face(_, context),
    FaceDetail: (_: any) => de_FaceDetail(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1FaceRecordList
 */
const de_FaceRecordList = (output: any, context: __SerdeContext): FaceRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FaceRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FaceSearchSettings
 */
const de_FaceSearchSettings = (output: any, context: __SerdeContext): FaceSearchSettings => {
  return take(output, {
    CollectionId: __expectString,
    FaceMatchThreshold: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1Gender
 */
const de_Gender = (output: any, context: __SerdeContext): Gender => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Geometry
 */
const de_Geometry = (output: any, context: __SerdeContext): Geometry => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Polygon: (_: any) => de_Polygon(_, context),
  }) as any;
};

// de_GetCelebrityInfoResponse omitted.

/**
 * deserializeAws_json1_1GetCelebrityRecognitionResponse
 */
const de_GetCelebrityRecognitionResponse = (output: any, context: __SerdeContext): GetCelebrityRecognitionResponse => {
  return take(output, {
    Celebrities: (_: any) => de_CelebrityRecognitions(_, context),
    JobId: __expectString,
    JobStatus: __expectString,
    JobTag: __expectString,
    NextToken: __expectString,
    StatusMessage: __expectString,
    Video: _json,
    VideoMetadata: (_: any) => de_VideoMetadata(_, context),
  }) as any;
};

// de_GetContentModerationRequestMetadata omitted.

/**
 * deserializeAws_json1_1GetContentModerationResponse
 */
const de_GetContentModerationResponse = (output: any, context: __SerdeContext): GetContentModerationResponse => {
  return take(output, {
    GetRequestMetadata: _json,
    JobId: __expectString,
    JobStatus: __expectString,
    JobTag: __expectString,
    ModerationLabels: (_: any) => de_ContentModerationDetections(_, context),
    ModerationModelVersion: __expectString,
    NextToken: __expectString,
    StatusMessage: __expectString,
    Video: _json,
    VideoMetadata: (_: any) => de_VideoMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetFaceDetectionResponse
 */
const de_GetFaceDetectionResponse = (output: any, context: __SerdeContext): GetFaceDetectionResponse => {
  return take(output, {
    Faces: (_: any) => de_FaceDetections(_, context),
    JobId: __expectString,
    JobStatus: __expectString,
    JobTag: __expectString,
    NextToken: __expectString,
    StatusMessage: __expectString,
    Video: _json,
    VideoMetadata: (_: any) => de_VideoMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetFaceLivenessSessionResultsResponse
 */
const de_GetFaceLivenessSessionResultsResponse = (
  output: any,
  context: __SerdeContext
): GetFaceLivenessSessionResultsResponse => {
  return take(output, {
    AuditImages: (_: any) => de_AuditImages(_, context),
    Confidence: __limitedParseFloat32,
    ReferenceImage: (_: any) => de_AuditImage(_, context),
    SessionId: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetFaceSearchResponse
 */
const de_GetFaceSearchResponse = (output: any, context: __SerdeContext): GetFaceSearchResponse => {
  return take(output, {
    JobId: __expectString,
    JobStatus: __expectString,
    JobTag: __expectString,
    NextToken: __expectString,
    Persons: (_: any) => de_PersonMatches(_, context),
    StatusMessage: __expectString,
    Video: _json,
    VideoMetadata: (_: any) => de_VideoMetadata(_, context),
  }) as any;
};

// de_GetLabelDetectionRequestMetadata omitted.

/**
 * deserializeAws_json1_1GetLabelDetectionResponse
 */
const de_GetLabelDetectionResponse = (output: any, context: __SerdeContext): GetLabelDetectionResponse => {
  return take(output, {
    GetRequestMetadata: _json,
    JobId: __expectString,
    JobStatus: __expectString,
    JobTag: __expectString,
    LabelModelVersion: __expectString,
    Labels: (_: any) => de_LabelDetections(_, context),
    NextToken: __expectString,
    StatusMessage: __expectString,
    Video: _json,
    VideoMetadata: (_: any) => de_VideoMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetPersonTrackingResponse
 */
const de_GetPersonTrackingResponse = (output: any, context: __SerdeContext): GetPersonTrackingResponse => {
  return take(output, {
    JobId: __expectString,
    JobStatus: __expectString,
    JobTag: __expectString,
    NextToken: __expectString,
    Persons: (_: any) => de_PersonDetections(_, context),
    StatusMessage: __expectString,
    Video: _json,
    VideoMetadata: (_: any) => de_VideoMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetSegmentDetectionResponse
 */
const de_GetSegmentDetectionResponse = (output: any, context: __SerdeContext): GetSegmentDetectionResponse => {
  return take(output, {
    AudioMetadata: _json,
    JobId: __expectString,
    JobStatus: __expectString,
    JobTag: __expectString,
    NextToken: __expectString,
    Segments: (_: any) => de_SegmentDetections(_, context),
    SelectedSegmentTypes: _json,
    StatusMessage: __expectString,
    Video: _json,
    VideoMetadata: (_: any) => de_VideoMetadataList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTextDetectionResponse
 */
const de_GetTextDetectionResponse = (output: any, context: __SerdeContext): GetTextDetectionResponse => {
  return take(output, {
    JobId: __expectString,
    JobStatus: __expectString,
    JobTag: __expectString,
    NextToken: __expectString,
    StatusMessage: __expectString,
    TextDetections: (_: any) => de_TextDetectionResults(_, context),
    TextModelVersion: __expectString,
    Video: _json,
    VideoMetadata: (_: any) => de_VideoMetadata(_, context),
  }) as any;
};

// de_GroundTruthManifest omitted.

/**
 * deserializeAws_json1_1HumanLoopActivationOutput
 */
const de_HumanLoopActivationOutput = (output: any, context: __SerdeContext): HumanLoopActivationOutput => {
  return take(output, {
    HumanLoopActivationConditionsEvaluationResults: (_: any) => new __LazyJsonString(_),
    HumanLoopActivationReasons: _json,
    HumanLoopArn: __expectString,
  }) as any;
};

// de_HumanLoopActivationReasons omitted.

// de_HumanLoopQuotaExceededException omitted.

// de_IdempotentParameterMismatchException omitted.

/**
 * deserializeAws_json1_1ImageQuality
 */
const de_ImageQuality = (output: any, context: __SerdeContext): ImageQuality => {
  return take(output, {
    Brightness: __limitedParseFloat32,
    Sharpness: __limitedParseFloat32,
  }) as any;
};

// de_ImageTooLargeException omitted.

/**
 * deserializeAws_json1_1IndexFacesResponse
 */
const de_IndexFacesResponse = (output: any, context: __SerdeContext): IndexFacesResponse => {
  return take(output, {
    FaceModelVersion: __expectString,
    FaceRecords: (_: any) => de_FaceRecordList(_, context),
    OrientationCorrection: __expectString,
    UnindexedFaces: (_: any) => de_UnindexedFaces(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Confidence: __limitedParseFloat32,
    DominantColors: (_: any) => de_DominantColors(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Instances
 */
const de_Instances = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Instance(entry, context);
    });
  return retVal;
};

// de_InternalServerError omitted.

// de_InvalidImageFormatException omitted.

// de_InvalidPaginationTokenException omitted.

// de_InvalidParameterException omitted.

// de_InvalidPolicyRevisionIdException omitted.

// de_InvalidS3ObjectException omitted.

// de_KinesisDataStream omitted.

// de_KinesisVideoStream omitted.

// de_KnownGender omitted.

/**
 * deserializeAws_json1_1Label
 */
const de_Label = (output: any, context: __SerdeContext): Label => {
  return take(output, {
    Aliases: _json,
    Categories: _json,
    Confidence: __limitedParseFloat32,
    Instances: (_: any) => de_Instances(_, context),
    Name: __expectString,
    Parents: _json,
  }) as any;
};

// de_LabelAlias omitted.

// de_LabelAliases omitted.

// de_LabelCategories omitted.

// de_LabelCategory omitted.

/**
 * deserializeAws_json1_1LabelDetection
 */
const de_LabelDetection = (output: any, context: __SerdeContext): LabelDetection => {
  return take(output, {
    DurationMillis: __expectLong,
    EndTimestampMillis: __expectLong,
    Label: (_: any) => de_Label(_, context),
    StartTimestampMillis: __expectLong,
    Timestamp: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelDetections
 */
const de_LabelDetections = (output: any, context: __SerdeContext): LabelDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Label(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Landmark
 */
const de_Landmark = (output: any, context: __SerdeContext): Landmark => {
  return take(output, {
    Type: __expectString,
    X: __limitedParseFloat32,
    Y: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1Landmarks
 */
const de_Landmarks = (output: any, context: __SerdeContext): Landmark[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Landmark(entry, context);
    });
  return retVal;
};

// de_LimitExceededException omitted.

// de_ListCollectionsResponse omitted.

// de_ListDatasetEntriesResponse omitted.

// de_ListDatasetLabelsResponse omitted.

/**
 * deserializeAws_json1_1ListFacesResponse
 */
const de_ListFacesResponse = (output: any, context: __SerdeContext): ListFacesResponse => {
  return take(output, {
    FaceModelVersion: __expectString,
    Faces: (_: any) => de_FaceList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListProjectPoliciesResponse
 */
const de_ListProjectPoliciesResponse = (output: any, context: __SerdeContext): ListProjectPoliciesResponse => {
  return take(output, {
    NextToken: __expectString,
    ProjectPolicies: (_: any) => de_ProjectPolicies(_, context),
  }) as any;
};

// de_ListStreamProcessorsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListUsersResponse omitted.

// de_MalformedPolicyDocumentException omitted.

// de_MatchedUser omitted.

/**
 * deserializeAws_json1_1ModerationLabel
 */
const de_ModerationLabel = (output: any, context: __SerdeContext): ModerationLabel => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Name: __expectString,
    ParentName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModerationLabels
 */
const de_ModerationLabels = (output: any, context: __SerdeContext): ModerationLabel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModerationLabel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MouthOpen
 */
const de_MouthOpen = (output: any, context: __SerdeContext): MouthOpen => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1Mustache
 */
const de_Mustache = (output: any, context: __SerdeContext): Mustache => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectBoolean,
  }) as any;
};

// de_OutputConfig omitted.

// de_Parent omitted.

// de_Parents omitted.

/**
 * deserializeAws_json1_1PersonDetail
 */
const de_PersonDetail = (output: any, context: __SerdeContext): PersonDetail => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Face: (_: any) => de_FaceDetail(_, context),
    Index: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1PersonDetection
 */
const de_PersonDetection = (output: any, context: __SerdeContext): PersonDetection => {
  return take(output, {
    Person: (_: any) => de_PersonDetail(_, context),
    Timestamp: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1PersonDetections
 */
const de_PersonDetections = (output: any, context: __SerdeContext): PersonDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PersonDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PersonMatch
 */
const de_PersonMatch = (output: any, context: __SerdeContext): PersonMatch => {
  return take(output, {
    FaceMatches: (_: any) => de_FaceMatchList(_, context),
    Person: (_: any) => de_PersonDetail(_, context),
    Timestamp: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1PersonMatches
 */
const de_PersonMatches = (output: any, context: __SerdeContext): PersonMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PersonMatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Point
 */
const de_Point = (output: any, context: __SerdeContext): Point => {
  return take(output, {
    X: __limitedParseFloat32,
    Y: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1Polygon
 */
const de_Polygon = (output: any, context: __SerdeContext): Point[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Point(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Pose
 */
const de_Pose = (output: any, context: __SerdeContext): Pose => {
  return take(output, {
    Pitch: __limitedParseFloat32,
    Roll: __limitedParseFloat32,
    Yaw: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1ProjectDescription
 */
const de_ProjectDescription = (output: any, context: __SerdeContext): ProjectDescription => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Datasets: (_: any) => de_DatasetMetadataList(_, context),
    ProjectArn: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProjectDescriptions
 */
const de_ProjectDescriptions = (output: any, context: __SerdeContext): ProjectDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_ProjectPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectPolicy
 */
const de_ProjectPolicy = (output: any, context: __SerdeContext): ProjectPolicy => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PolicyDocument: __expectString,
    PolicyName: __expectString,
    PolicyRevisionId: __expectString,
    ProjectArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProjectVersionDescription
 */
const de_ProjectVersionDescription = (output: any, context: __SerdeContext): ProjectVersionDescription => {
  return take(output, {
    BillableTrainingTimeInSeconds: __expectLong,
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationResult: (_: any) => de_EvaluationResult(_, context),
    KmsKeyId: __expectString,
    ManifestSummary: _json,
    MaxInferenceUnits: __expectInt32,
    MinInferenceUnits: __expectInt32,
    OutputConfig: _json,
    ProjectVersionArn: __expectString,
    SourceProjectVersionArn: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    TestingDataResult: _json,
    TrainingDataResult: _json,
    TrainingEndTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ProjectVersionDescriptions
 */
const de_ProjectVersionDescriptions = (output: any, context: __SerdeContext): ProjectVersionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProjectVersionDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProtectiveEquipmentBodyPart
 */
const de_ProtectiveEquipmentBodyPart = (output: any, context: __SerdeContext): ProtectiveEquipmentBodyPart => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    EquipmentDetections: (_: any) => de_EquipmentDetections(_, context),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProtectiveEquipmentPerson
 */
const de_ProtectiveEquipmentPerson = (output: any, context: __SerdeContext): ProtectiveEquipmentPerson => {
  return take(output, {
    BodyParts: (_: any) => de_BodyParts(_, context),
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Confidence: __limitedParseFloat32,
    Id: __expectInt32,
  }) as any;
};

// de_ProtectiveEquipmentPersonIds omitted.

/**
 * deserializeAws_json1_1ProtectiveEquipmentPersons
 */
const de_ProtectiveEquipmentPersons = (output: any, context: __SerdeContext): ProtectiveEquipmentPerson[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProtectiveEquipmentPerson(entry, context);
    });
  return retVal;
};

// de_ProtectiveEquipmentSummary omitted.

// de_ProvisionedThroughputExceededException omitted.

// de_PutProjectPolicyResponse omitted.

// de_Reasons omitted.

/**
 * deserializeAws_json1_1RecognizeCelebritiesResponse
 */
const de_RecognizeCelebritiesResponse = (output: any, context: __SerdeContext): RecognizeCelebritiesResponse => {
  return take(output, {
    CelebrityFaces: (_: any) => de_CelebrityList(_, context),
    OrientationCorrection: __expectString,
    UnrecognizedFaces: (_: any) => de_ComparedFaceList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RegionOfInterest
 */
const de_RegionOfInterest = (output: any, context: __SerdeContext): RegionOfInterest => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Polygon: (_: any) => de_Polygon(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RegionsOfInterest
 */
const de_RegionsOfInterest = (output: any, context: __SerdeContext): RegionOfInterest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RegionOfInterest(entry, context);
    });
  return retVal;
};

// de_ResourceAlreadyExistsException omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceNotReadyException omitted.

// de_S3Destination omitted.

// de_S3Object omitted.

// de_SearchedFace omitted.

/**
 * deserializeAws_json1_1SearchedFaceDetails
 */
const de_SearchedFaceDetails = (output: any, context: __SerdeContext): SearchedFaceDetails => {
  return take(output, {
    FaceDetail: (_: any) => de_FaceDetail(_, context),
  }) as any;
};

// de_SearchedUser omitted.

/**
 * deserializeAws_json1_1SearchFacesByImageResponse
 */
const de_SearchFacesByImageResponse = (output: any, context: __SerdeContext): SearchFacesByImageResponse => {
  return take(output, {
    FaceMatches: (_: any) => de_FaceMatchList(_, context),
    FaceModelVersion: __expectString,
    SearchedFaceBoundingBox: (_: any) => de_BoundingBox(_, context),
    SearchedFaceConfidence: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1SearchFacesResponse
 */
const de_SearchFacesResponse = (output: any, context: __SerdeContext): SearchFacesResponse => {
  return take(output, {
    FaceMatches: (_: any) => de_FaceMatchList(_, context),
    FaceModelVersion: __expectString,
    SearchedFaceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SearchUsersByImageResponse
 */
const de_SearchUsersByImageResponse = (output: any, context: __SerdeContext): SearchUsersByImageResponse => {
  return take(output, {
    FaceModelVersion: __expectString,
    SearchedFace: (_: any) => de_SearchedFaceDetails(_, context),
    UnsearchedFaces: (_: any) => de_UnsearchedFacesList(_, context),
    UserMatches: (_: any) => de_UserMatchList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SearchUsersResponse
 */
const de_SearchUsersResponse = (output: any, context: __SerdeContext): SearchUsersResponse => {
  return take(output, {
    FaceModelVersion: __expectString,
    SearchedFace: _json,
    SearchedUser: _json,
    UserMatches: (_: any) => de_UserMatchList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SegmentDetection
 */
const de_SegmentDetection = (output: any, context: __SerdeContext): SegmentDetection => {
  return take(output, {
    DurationFrames: __expectLong,
    DurationMillis: __expectLong,
    DurationSMPTE: __expectString,
    EndFrameNumber: __expectLong,
    EndTimecodeSMPTE: __expectString,
    EndTimestampMillis: __expectLong,
    ShotSegment: (_: any) => de_ShotSegment(_, context),
    StartFrameNumber: __expectLong,
    StartTimecodeSMPTE: __expectString,
    StartTimestampMillis: __expectLong,
    TechnicalCueSegment: (_: any) => de_TechnicalCueSegment(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SegmentDetections
 */
const de_SegmentDetections = (output: any, context: __SerdeContext): SegmentDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SegmentDetection(entry, context);
    });
  return retVal;
};

// de_SegmentTypeInfo omitted.

// de_SegmentTypesInfo omitted.

// de_ServiceQuotaExceededException omitted.

// de_SessionNotFoundException omitted.

/**
 * deserializeAws_json1_1ShotSegment
 */
const de_ShotSegment = (output: any, context: __SerdeContext): ShotSegment => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Index: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1Smile
 */
const de_Smile = (output: any, context: __SerdeContext): Smile => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectBoolean,
  }) as any;
};

// de_StartCelebrityRecognitionResponse omitted.

// de_StartContentModerationResponse omitted.

// de_StartFaceDetectionResponse omitted.

// de_StartFaceSearchResponse omitted.

// de_StartLabelDetectionResponse omitted.

// de_StartPersonTrackingResponse omitted.

// de_StartProjectVersionResponse omitted.

// de_StartSegmentDetectionResponse omitted.

// de_StartStreamProcessorResponse omitted.

// de_StartTextDetectionResponse omitted.

// de_StopProjectVersionResponse omitted.

// de_StopStreamProcessorResponse omitted.

// de_StreamProcessor omitted.

// de_StreamProcessorDataSharingPreference omitted.

// de_StreamProcessorInput omitted.

// de_StreamProcessorList omitted.

// de_StreamProcessorNotificationChannel omitted.

// de_StreamProcessorOutput omitted.

/**
 * deserializeAws_json1_1StreamProcessorSettings
 */
const de_StreamProcessorSettings = (output: any, context: __SerdeContext): StreamProcessorSettings => {
  return take(output, {
    ConnectedHome: (_: any) => de_ConnectedHomeSettings(_, context),
    FaceSearch: (_: any) => de_FaceSearchSettings(_, context),
  }) as any;
};

// de_Summary omitted.

/**
 * deserializeAws_json1_1Sunglasses
 */
const de_Sunglasses = (output: any, context: __SerdeContext): Sunglasses => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectBoolean,
  }) as any;
};

// de_TagMap omitted.

// de_TagResourceResponse omitted.

/**
 * deserializeAws_json1_1TechnicalCueSegment
 */
const de_TechnicalCueSegment = (output: any, context: __SerdeContext): TechnicalCueSegment => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Type: __expectString,
  }) as any;
};

// de_TestingData omitted.

// de_TestingDataResult omitted.

/**
 * deserializeAws_json1_1TextDetection
 */
const de_TextDetection = (output: any, context: __SerdeContext): TextDetection => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    DetectedText: __expectString,
    Geometry: (_: any) => de_Geometry(_, context),
    Id: __expectInt32,
    ParentId: __expectInt32,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TextDetectionList
 */
const de_TextDetectionList = (output: any, context: __SerdeContext): TextDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TextDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TextDetectionResult
 */
const de_TextDetectionResult = (output: any, context: __SerdeContext): TextDetectionResult => {
  return take(output, {
    TextDetection: (_: any) => de_TextDetection(_, context),
    Timestamp: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1TextDetectionResults
 */
const de_TextDetectionResults = (output: any, context: __SerdeContext): TextDetectionResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TextDetectionResult(entry, context);
    });
  return retVal;
};

// de_ThrottlingException omitted.

// de_TrainingData omitted.

// de_TrainingDataResult omitted.

/**
 * deserializeAws_json1_1UnindexedFace
 */
const de_UnindexedFace = (output: any, context: __SerdeContext): UnindexedFace => {
  return take(output, {
    FaceDetail: (_: any) => de_FaceDetail(_, context),
    Reasons: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1UnindexedFaces
 */
const de_UnindexedFaces = (output: any, context: __SerdeContext): UnindexedFace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UnindexedFace(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnsearchedFace
 */
const de_UnsearchedFace = (output: any, context: __SerdeContext): UnsearchedFace => {
  return take(output, {
    FaceDetails: (_: any) => de_FaceDetail(_, context),
    Reasons: _json,
  }) as any;
};

// de_UnsearchedFaceReasons omitted.

/**
 * deserializeAws_json1_1UnsearchedFacesList
 */
const de_UnsearchedFacesList = (output: any, context: __SerdeContext): UnsearchedFace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UnsearchedFace(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnsuccessfulFaceAssociation
 */
const de_UnsuccessfulFaceAssociation = (output: any, context: __SerdeContext): UnsuccessfulFaceAssociation => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    FaceId: __expectString,
    Reasons: _json,
    UserId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UnsuccessfulFaceAssociationList
 */
const de_UnsuccessfulFaceAssociationList = (output: any, context: __SerdeContext): UnsuccessfulFaceAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UnsuccessfulFaceAssociation(entry, context);
    });
  return retVal;
};

// de_UnsuccessfulFaceAssociationReasons omitted.

// de_UnsuccessfulFaceDeletion omitted.

// de_UnsuccessfulFaceDeletionReasons omitted.

// de_UnsuccessfulFaceDeletionsList omitted.

// de_UnsuccessfulFaceDisassociation omitted.

// de_UnsuccessfulFaceDisassociationList omitted.

// de_UnsuccessfulFaceDisassociationReasons omitted.

// de_UntagResourceResponse omitted.

// de_UpdateDatasetEntriesResponse omitted.

// de_UpdateStreamProcessorResponse omitted.

// de_Urls omitted.

// de_User omitted.

// de_UserList omitted.

/**
 * deserializeAws_json1_1UserMatch
 */
const de_UserMatch = (output: any, context: __SerdeContext): UserMatch => {
  return take(output, {
    Similarity: __limitedParseFloat32,
    User: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1UserMatchList
 */
const de_UserMatchList = (output: any, context: __SerdeContext): UserMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserMatch(entry, context);
    });
  return retVal;
};

// de_ValidationData omitted.

// de_Video omitted.

/**
 * deserializeAws_json1_1VideoMetadata
 */
const de_VideoMetadata = (output: any, context: __SerdeContext): VideoMetadata => {
  return take(output, {
    Codec: __expectString,
    ColorRange: __expectString,
    DurationMillis: __expectLong,
    Format: __expectString,
    FrameHeight: __expectLong,
    FrameRate: __limitedParseFloat32,
    FrameWidth: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1VideoMetadataList
 */
const de_VideoMetadataList = (output: any, context: __SerdeContext): VideoMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VideoMetadata(entry, context);
    });
  return retVal;
};

// de_VideoTooLargeException omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `RekognitionService.${operation}`,
  };
}

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
