import {
  AccessDeniedException,
  AssociateFacesCommand,
  Attribute,
  BodyPart,
  CelebrityRecognitionSortBy,
  ChallengeType,
  CompareFacesCommand,
  ConflictException,
  ContentClassifier,
  ContentModerationAggregateBy,
  ContentModerationSortBy,
  CopyProjectVersionCommand,
  CreateCollectionCommand,
  CreateDatasetCommand,
  CreateFaceLivenessSessionCommand,
  CreateProjectCommand,
  CreateProjectVersionCommand,
  CreateStreamProcessorCommand,
  CreateUserCommand,
  CustomizationFeature,
  DatasetStatus,
  DatasetStatusMessageCode,
  DatasetType,
  DeleteCollectionCommand,
  DeleteDatasetCommand,
  DeleteFacesCommand,
  DeleteProjectCommand,
  DeleteProjectPolicyCommand,
  DeleteProjectVersionCommand,
  DeleteStreamProcessorCommand,
  DeleteUserCommand,
  DescribeCollectionCommand,
  DescribeDatasetCommand,
  DescribeProjectVersionsCommand,
  DescribeProjectsCommand,
  DescribeStreamProcessorCommand,
  DetectCustomLabelsCommand,
  DetectFacesCommand,
  DetectLabelsCommand,
  DetectLabelsFeatureName,
  DetectModerationLabelsCommand,
  DetectProtectiveEquipmentCommand,
  DetectTextCommand,
  DisassociateFacesCommand,
  DistributeDatasetEntriesCommand,
  EmotionName,
  FaceAttributes,
  FaceSearchSortBy,
  GenderType,
  GetCelebrityInfoCommand,
  GetCelebrityRecognitionCommand,
  GetContentModerationCommand,
  GetFaceDetectionCommand,
  GetFaceLivenessSessionResultsCommand,
  GetFaceSearchCommand,
  GetLabelDetectionCommand,
  GetMediaAnalysisJobCommand,
  GetPersonTrackingCommand,
  GetSegmentDetectionCommand,
  GetTextDetectionCommand,
  HumanLoopQuotaExceededException,
  IdempotentParameterMismatchException,
  ImageTooLargeException,
  IndexFacesCommand,
  InternalServerError,
  InvalidImageFormatException,
  InvalidManifestException,
  InvalidPaginationTokenException,
  InvalidParameterException,
  InvalidPolicyRevisionIdException,
  InvalidS3ObjectException,
  KnownGenderType,
  LabelDetectionAggregateBy,
  LabelDetectionFeatureName,
  LabelDetectionSortBy,
  LandmarkType,
  LimitExceededException,
  ListCollectionsCommand,
  ListDatasetEntriesCommand,
  ListDatasetLabelsCommand,
  ListFacesCommand,
  ListMediaAnalysisJobsCommand,
  ListProjectPoliciesCommand,
  ListStreamProcessorsCommand,
  ListTagsForResourceCommand,
  ListUsersCommand,
  LivenessSessionStatus,
  MalformedPolicyDocumentException,
  MediaAnalysisJobFailureCode,
  MediaAnalysisJobStatus,
  OrientationCorrection,
  PersonTrackingSortBy,
  ProjectAutoUpdate,
  ProjectStatus,
  ProjectVersionStatus,
  ProtectiveEquipmentType,
  ProvisionedThroughputExceededException,
  PutProjectPolicyCommand,
  QualityFilter,
  Reason,
  RecognizeCelebritiesCommand,
  Rekognition,
  RekognitionClient,
  RekognitionServiceException,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  SearchFacesByImageCommand,
  SearchFacesCommand,
  SearchUsersByImageCommand,
  SearchUsersCommand,
  SegmentType,
  ServiceQuotaExceededException,
  SessionNotFoundException,
  StartCelebrityRecognitionCommand,
  StartContentModerationCommand,
  StartFaceDetectionCommand,
  StartFaceSearchCommand,
  StartLabelDetectionCommand,
  StartMediaAnalysisJobCommand,
  StartPersonTrackingCommand,
  StartProjectVersionCommand,
  StartSegmentDetectionCommand,
  StartStreamProcessorCommand,
  StartTextDetectionCommand,
  StopProjectVersionCommand,
  StopStreamProcessorCommand,
  StreamProcessorParameterToDelete,
  StreamProcessorStatus,
  TagResourceCommand,
  TechnicalCueType,
  TextTypes,
  ThrottlingException,
  UnsearchedFaceReason,
  UnsuccessfulFaceAssociationReason,
  UnsuccessfulFaceDeletionReason,
  UnsuccessfulFaceDisassociationReason,
  UntagResourceCommand,
  UpdateDatasetEntriesCommand,
  UpdateStreamProcessorCommand,
  UserStatus,
  VideoColorRange,
  VideoJobStatus,
  VideoTooLargeException,
  paginateDescribeProjectVersions,
  paginateDescribeProjects,
  paginateGetCelebrityRecognition,
  paginateGetContentModeration,
  paginateGetFaceDetection,
  paginateGetFaceSearch,
  paginateGetLabelDetection,
  paginateGetPersonTracking,
  paginateGetSegmentDetection,
  paginateGetTextDetection,
  paginateListCollections,
  paginateListDatasetEntries,
  paginateListDatasetLabels,
  paginateListFaces,
  paginateListMediaAnalysisJobs,
  paginateListProjectPolicies,
  paginateListStreamProcessors,
  paginateListUsers,
  waitForProjectVersionRunning,
  waitForProjectVersionTrainingCompleted,
  waitUntilProjectVersionRunning,
  waitUntilProjectVersionTrainingCompleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RekognitionClient === "function");
assert(typeof Rekognition === "function");
// commands
assert(typeof AssociateFacesCommand === "function");
assert(typeof CompareFacesCommand === "function");
assert(typeof CopyProjectVersionCommand === "function");
assert(typeof CreateCollectionCommand === "function");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateFaceLivenessSessionCommand === "function");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProjectVersionCommand === "function");
assert(typeof CreateStreamProcessorCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof DeleteCollectionCommand === "function");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteFacesCommand === "function");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProjectPolicyCommand === "function");
assert(typeof DeleteProjectVersionCommand === "function");
assert(typeof DeleteStreamProcessorCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DescribeCollectionCommand === "function");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeProjectsCommand === "function");
assert(typeof DescribeProjectVersionsCommand === "function");
assert(typeof DescribeStreamProcessorCommand === "function");
assert(typeof DetectCustomLabelsCommand === "function");
assert(typeof DetectFacesCommand === "function");
assert(typeof DetectLabelsCommand === "function");
assert(typeof DetectModerationLabelsCommand === "function");
assert(typeof DetectProtectiveEquipmentCommand === "function");
assert(typeof DetectTextCommand === "function");
assert(typeof DisassociateFacesCommand === "function");
assert(typeof DistributeDatasetEntriesCommand === "function");
assert(typeof GetCelebrityInfoCommand === "function");
assert(typeof GetCelebrityRecognitionCommand === "function");
assert(typeof GetContentModerationCommand === "function");
assert(typeof GetFaceDetectionCommand === "function");
assert(typeof GetFaceLivenessSessionResultsCommand === "function");
assert(typeof GetFaceSearchCommand === "function");
assert(typeof GetLabelDetectionCommand === "function");
assert(typeof GetMediaAnalysisJobCommand === "function");
assert(typeof GetPersonTrackingCommand === "function");
assert(typeof GetSegmentDetectionCommand === "function");
assert(typeof GetTextDetectionCommand === "function");
assert(typeof IndexFacesCommand === "function");
assert(typeof ListCollectionsCommand === "function");
assert(typeof ListDatasetEntriesCommand === "function");
assert(typeof ListDatasetLabelsCommand === "function");
assert(typeof ListFacesCommand === "function");
assert(typeof ListMediaAnalysisJobsCommand === "function");
assert(typeof ListProjectPoliciesCommand === "function");
assert(typeof ListStreamProcessorsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListUsersCommand === "function");
assert(typeof PutProjectPolicyCommand === "function");
assert(typeof RecognizeCelebritiesCommand === "function");
assert(typeof SearchFacesCommand === "function");
assert(typeof SearchFacesByImageCommand === "function");
assert(typeof SearchUsersCommand === "function");
assert(typeof SearchUsersByImageCommand === "function");
assert(typeof StartCelebrityRecognitionCommand === "function");
assert(typeof StartContentModerationCommand === "function");
assert(typeof StartFaceDetectionCommand === "function");
assert(typeof StartFaceSearchCommand === "function");
assert(typeof StartLabelDetectionCommand === "function");
assert(typeof StartMediaAnalysisJobCommand === "function");
assert(typeof StartPersonTrackingCommand === "function");
assert(typeof StartProjectVersionCommand === "function");
assert(typeof StartSegmentDetectionCommand === "function");
assert(typeof StartStreamProcessorCommand === "function");
assert(typeof StartTextDetectionCommand === "function");
assert(typeof StopProjectVersionCommand === "function");
assert(typeof StopStreamProcessorCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDatasetEntriesCommand === "function");
assert(typeof UpdateStreamProcessorCommand === "function");
// enums
assert(typeof Attribute === "object");
assert(typeof BodyPart === "object");
assert(typeof CelebrityRecognitionSortBy === "object");
assert(typeof ChallengeType === "object");
assert(typeof ContentClassifier === "object");
assert(typeof ContentModerationAggregateBy === "object");
assert(typeof ContentModerationSortBy === "object");
assert(typeof CustomizationFeature === "object");
assert(typeof DatasetStatus === "object");
assert(typeof DatasetStatusMessageCode === "object");
assert(typeof DatasetType === "object");
assert(typeof DetectLabelsFeatureName === "object");
assert(typeof EmotionName === "object");
assert(typeof FaceAttributes === "object");
assert(typeof FaceSearchSortBy === "object");
assert(typeof GenderType === "object");
assert(typeof KnownGenderType === "object");
assert(typeof LabelDetectionAggregateBy === "object");
assert(typeof LabelDetectionFeatureName === "object");
assert(typeof LabelDetectionSortBy === "object");
assert(typeof LandmarkType === "object");
assert(typeof LivenessSessionStatus === "object");
assert(typeof MediaAnalysisJobFailureCode === "object");
assert(typeof MediaAnalysisJobStatus === "object");
assert(typeof OrientationCorrection === "object");
assert(typeof PersonTrackingSortBy === "object");
assert(typeof ProjectAutoUpdate === "object");
assert(typeof ProjectStatus === "object");
assert(typeof ProjectVersionStatus === "object");
assert(typeof ProtectiveEquipmentType === "object");
assert(typeof QualityFilter === "object");
assert(typeof Reason === "object");
assert(typeof SegmentType === "object");
assert(typeof StreamProcessorParameterToDelete === "object");
assert(typeof StreamProcessorStatus === "object");
assert(typeof TechnicalCueType === "object");
assert(typeof TextTypes === "object");
assert(typeof UnsearchedFaceReason === "object");
assert(typeof UnsuccessfulFaceAssociationReason === "object");
assert(typeof UnsuccessfulFaceDeletionReason === "object");
assert(typeof UnsuccessfulFaceDisassociationReason === "object");
assert(typeof UserStatus === "object");
assert(typeof VideoColorRange === "object");
assert(typeof VideoJobStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof RekognitionServiceException);
assert(ConflictException.prototype instanceof RekognitionServiceException);
assert(HumanLoopQuotaExceededException.prototype instanceof RekognitionServiceException);
assert(IdempotentParameterMismatchException.prototype instanceof RekognitionServiceException);
assert(ImageTooLargeException.prototype instanceof RekognitionServiceException);
assert(InternalServerError.prototype instanceof RekognitionServiceException);
assert(InvalidImageFormatException.prototype instanceof RekognitionServiceException);
assert(InvalidManifestException.prototype instanceof RekognitionServiceException);
assert(InvalidPaginationTokenException.prototype instanceof RekognitionServiceException);
assert(InvalidParameterException.prototype instanceof RekognitionServiceException);
assert(InvalidPolicyRevisionIdException.prototype instanceof RekognitionServiceException);
assert(InvalidS3ObjectException.prototype instanceof RekognitionServiceException);
assert(LimitExceededException.prototype instanceof RekognitionServiceException);
assert(MalformedPolicyDocumentException.prototype instanceof RekognitionServiceException);
assert(ProvisionedThroughputExceededException.prototype instanceof RekognitionServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof RekognitionServiceException);
assert(ResourceInUseException.prototype instanceof RekognitionServiceException);
assert(ResourceNotFoundException.prototype instanceof RekognitionServiceException);
assert(ResourceNotReadyException.prototype instanceof RekognitionServiceException);
assert(ServiceQuotaExceededException.prototype instanceof RekognitionServiceException);
assert(SessionNotFoundException.prototype instanceof RekognitionServiceException);
assert(ThrottlingException.prototype instanceof RekognitionServiceException);
assert(VideoTooLargeException.prototype instanceof RekognitionServiceException);
assert(RekognitionServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForProjectVersionRunning === "function");
assert(typeof waitForProjectVersionTrainingCompleted === "function");
assert(typeof waitUntilProjectVersionRunning === "function");
assert(typeof waitUntilProjectVersionTrainingCompleted === "function");
// paginators
assert(typeof paginateDescribeProjectVersions === "function");
assert(typeof paginateDescribeProjects === "function");
assert(typeof paginateGetCelebrityRecognition === "function");
assert(typeof paginateGetContentModeration === "function");
assert(typeof paginateGetFaceDetection === "function");
assert(typeof paginateGetFaceSearch === "function");
assert(typeof paginateGetLabelDetection === "function");
assert(typeof paginateGetPersonTracking === "function");
assert(typeof paginateGetSegmentDetection === "function");
assert(typeof paginateGetTextDetection === "function");
assert(typeof paginateListCollections === "function");
assert(typeof paginateListDatasetEntries === "function");
assert(typeof paginateListDatasetLabels === "function");
assert(typeof paginateListFaces === "function");
assert(typeof paginateListMediaAnalysisJobs === "function");
assert(typeof paginateListProjectPolicies === "function");
assert(typeof paginateListStreamProcessors === "function");
assert(typeof paginateListUsers === "function");
console.log(`Rekognition index test passed.`);
