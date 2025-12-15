import {
  AccessDeniedException,
  AccessDeniedException$,
  AgeRange$,
  Asset$,
  AssociateFaces$,
  AssociateFacesCommand,
  AssociateFacesRequest$,
  AssociateFacesResponse$,
  AssociatedFace$,
  Attribute,
  AudioMetadata$,
  AuditImage$,
  Beard$,
  BlackFrame$,
  BodyPart,
  BoundingBox$,
  Celebrity$,
  CelebrityDetail$,
  CelebrityRecognition$,
  CelebrityRecognitionSortBy,
  Challenge$,
  ChallengePreference$,
  ChallengeType,
  CompareFaces$,
  CompareFacesCommand,
  CompareFacesMatch$,
  CompareFacesRequest$,
  CompareFacesResponse$,
  ComparedFace$,
  ComparedSourceImageFace$,
  ConflictException,
  ConflictException$,
  ConnectedHomeSettings$,
  ConnectedHomeSettingsForUpdate$,
  ContentClassifier,
  ContentModerationAggregateBy,
  ContentModerationDetection$,
  ContentModerationSortBy,
  ContentType$,
  CopyProjectVersion$,
  CopyProjectVersionCommand,
  CopyProjectVersionRequest$,
  CopyProjectVersionResponse$,
  CoversBodyPart$,
  CreateCollection$,
  CreateCollectionCommand,
  CreateCollectionRequest$,
  CreateCollectionResponse$,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetRequest$,
  CreateDatasetResponse$,
  CreateFaceLivenessSession$,
  CreateFaceLivenessSessionCommand,
  CreateFaceLivenessSessionRequest$,
  CreateFaceLivenessSessionRequestSettings$,
  CreateFaceLivenessSessionResponse$,
  CreateProject$,
  CreateProjectCommand,
  CreateProjectRequest$,
  CreateProjectResponse$,
  CreateProjectVersion$,
  CreateProjectVersionCommand,
  CreateProjectVersionRequest$,
  CreateProjectVersionResponse$,
  CreateStreamProcessor$,
  CreateStreamProcessorCommand,
  CreateStreamProcessorRequest$,
  CreateStreamProcessorResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  CustomLabel$,
  CustomizationFeature,
  CustomizationFeatureConfig$,
  CustomizationFeatureContentModerationConfig$,
  DatasetChanges$,
  DatasetDescription$,
  DatasetLabelDescription$,
  DatasetLabelStats$,
  DatasetMetadata$,
  DatasetSource$,
  DatasetStats$,
  DatasetStatus,
  DatasetStatusMessageCode,
  DatasetType,
  DeleteCollection$,
  DeleteCollectionCommand,
  DeleteCollectionRequest$,
  DeleteCollectionResponse$,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetRequest$,
  DeleteDatasetResponse$,
  DeleteFaces$,
  DeleteFacesCommand,
  DeleteFacesRequest$,
  DeleteFacesResponse$,
  DeleteProject$,
  DeleteProjectCommand,
  DeleteProjectPolicy$,
  DeleteProjectPolicyCommand,
  DeleteProjectPolicyRequest$,
  DeleteProjectPolicyResponse$,
  DeleteProjectRequest$,
  DeleteProjectResponse$,
  DeleteProjectVersion$,
  DeleteProjectVersionCommand,
  DeleteProjectVersionRequest$,
  DeleteProjectVersionResponse$,
  DeleteStreamProcessor$,
  DeleteStreamProcessorCommand,
  DeleteStreamProcessorRequest$,
  DeleteStreamProcessorResponse$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserRequest$,
  DeleteUserResponse$,
  DescribeCollection$,
  DescribeCollectionCommand,
  DescribeCollectionRequest$,
  DescribeCollectionResponse$,
  DescribeDataset$,
  DescribeDatasetCommand,
  DescribeDatasetRequest$,
  DescribeDatasetResponse$,
  DescribeProjectVersions$,
  DescribeProjectVersionsCommand,
  DescribeProjectVersionsRequest$,
  DescribeProjectVersionsResponse$,
  DescribeProjects$,
  DescribeProjectsCommand,
  DescribeProjectsRequest$,
  DescribeProjectsResponse$,
  DescribeStreamProcessor$,
  DescribeStreamProcessorCommand,
  DescribeStreamProcessorRequest$,
  DescribeStreamProcessorResponse$,
  DetectCustomLabels$,
  DetectCustomLabelsCommand,
  DetectCustomLabelsRequest$,
  DetectCustomLabelsResponse$,
  DetectFaces$,
  DetectFacesCommand,
  DetectFacesRequest$,
  DetectFacesResponse$,
  DetectLabels$,
  DetectLabelsCommand,
  DetectLabelsFeatureName,
  DetectLabelsImageBackground$,
  DetectLabelsImageForeground$,
  DetectLabelsImageProperties$,
  DetectLabelsImagePropertiesSettings$,
  DetectLabelsImageQuality$,
  DetectLabelsRequest$,
  DetectLabelsResponse$,
  DetectLabelsSettings$,
  DetectModerationLabels$,
  DetectModerationLabelsCommand,
  DetectModerationLabelsRequest$,
  DetectModerationLabelsResponse$,
  DetectProtectiveEquipment$,
  DetectProtectiveEquipmentCommand,
  DetectProtectiveEquipmentRequest$,
  DetectProtectiveEquipmentResponse$,
  DetectText$,
  DetectTextCommand,
  DetectTextFilters$,
  DetectTextRequest$,
  DetectTextResponse$,
  DetectionFilter$,
  DisassociateFaces$,
  DisassociateFacesCommand,
  DisassociateFacesRequest$,
  DisassociateFacesResponse$,
  DisassociatedFace$,
  DistributeDataset$,
  DistributeDatasetEntries$,
  DistributeDatasetEntriesCommand,
  DistributeDatasetEntriesRequest$,
  DistributeDatasetEntriesResponse$,
  DominantColor$,
  Emotion$,
  EmotionName,
  EquipmentDetection$,
  EvaluationResult$,
  EyeDirection$,
  EyeOpen$,
  Eyeglasses$,
  Face$,
  FaceAttributes,
  FaceDetail$,
  FaceDetection$,
  FaceMatch$,
  FaceOccluded$,
  FaceRecord$,
  FaceSearchSettings$,
  FaceSearchSortBy,
  Gender$,
  GenderType,
  GeneralLabelsSettings$,
  Geometry$,
  GetCelebrityInfo$,
  GetCelebrityInfoCommand,
  GetCelebrityInfoRequest$,
  GetCelebrityInfoResponse$,
  GetCelebrityRecognition$,
  GetCelebrityRecognitionCommand,
  GetCelebrityRecognitionRequest$,
  GetCelebrityRecognitionResponse$,
  GetContentModeration$,
  GetContentModerationCommand,
  GetContentModerationRequest$,
  GetContentModerationRequestMetadata$,
  GetContentModerationResponse$,
  GetFaceDetection$,
  GetFaceDetectionCommand,
  GetFaceDetectionRequest$,
  GetFaceDetectionResponse$,
  GetFaceLivenessSessionResults$,
  GetFaceLivenessSessionResultsCommand,
  GetFaceLivenessSessionResultsRequest$,
  GetFaceLivenessSessionResultsResponse$,
  GetFaceSearch$,
  GetFaceSearchCommand,
  GetFaceSearchRequest$,
  GetFaceSearchResponse$,
  GetLabelDetection$,
  GetLabelDetectionCommand,
  GetLabelDetectionRequest$,
  GetLabelDetectionRequestMetadata$,
  GetLabelDetectionResponse$,
  GetMediaAnalysisJob$,
  GetMediaAnalysisJobCommand,
  GetMediaAnalysisJobRequest$,
  GetMediaAnalysisJobResponse$,
  GetPersonTracking$,
  GetPersonTrackingCommand,
  GetPersonTrackingRequest$,
  GetPersonTrackingResponse$,
  GetSegmentDetection$,
  GetSegmentDetectionCommand,
  GetSegmentDetectionRequest$,
  GetSegmentDetectionResponse$,
  GetTextDetection$,
  GetTextDetectionCommand,
  GetTextDetectionRequest$,
  GetTextDetectionResponse$,
  GroundTruthManifest$,
  HumanLoopActivationOutput$,
  HumanLoopConfig$,
  HumanLoopDataAttributes$,
  HumanLoopQuotaExceededException,
  HumanLoopQuotaExceededException$,
  IdempotentParameterMismatchException,
  IdempotentParameterMismatchException$,
  Image$,
  ImageQuality$,
  ImageTooLargeException,
  ImageTooLargeException$,
  IndexFaces$,
  IndexFacesCommand,
  IndexFacesRequest$,
  IndexFacesResponse$,
  Instance$,
  InternalServerError,
  InternalServerError$,
  InvalidImageFormatException,
  InvalidImageFormatException$,
  InvalidManifestException,
  InvalidManifestException$,
  InvalidPaginationTokenException,
  InvalidPaginationTokenException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidPolicyRevisionIdException,
  InvalidPolicyRevisionIdException$,
  InvalidS3ObjectException,
  InvalidS3ObjectException$,
  KinesisDataStream$,
  KinesisVideoStream$,
  KinesisVideoStreamStartSelector$,
  KnownGender$,
  KnownGenderType,
  Label$,
  LabelAlias$,
  LabelCategory$,
  LabelDetection$,
  LabelDetectionAggregateBy,
  LabelDetectionFeatureName,
  LabelDetectionSettings$,
  LabelDetectionSortBy,
  Landmark$,
  LandmarkType,
  LimitExceededException,
  LimitExceededException$,
  ListCollections$,
  ListCollectionsCommand,
  ListCollectionsRequest$,
  ListCollectionsResponse$,
  ListDatasetEntries$,
  ListDatasetEntriesCommand,
  ListDatasetEntriesRequest$,
  ListDatasetEntriesResponse$,
  ListDatasetLabels$,
  ListDatasetLabelsCommand,
  ListDatasetLabelsRequest$,
  ListDatasetLabelsResponse$,
  ListFaces$,
  ListFacesCommand,
  ListFacesRequest$,
  ListFacesResponse$,
  ListMediaAnalysisJobs$,
  ListMediaAnalysisJobsCommand,
  ListMediaAnalysisJobsRequest$,
  ListMediaAnalysisJobsResponse$,
  ListProjectPolicies$,
  ListProjectPoliciesCommand,
  ListProjectPoliciesRequest$,
  ListProjectPoliciesResponse$,
  ListStreamProcessors$,
  ListStreamProcessorsCommand,
  ListStreamProcessorsRequest$,
  ListStreamProcessorsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListUsers$,
  ListUsersCommand,
  ListUsersRequest$,
  ListUsersResponse$,
  LivenessOutputConfig$,
  LivenessSessionStatus,
  MalformedPolicyDocumentException,
  MalformedPolicyDocumentException$,
  MatchedUser$,
  MediaAnalysisDetectModerationLabelsConfig$,
  MediaAnalysisInput$,
  MediaAnalysisJobDescription$,
  MediaAnalysisJobFailureCode,
  MediaAnalysisJobFailureDetails$,
  MediaAnalysisJobStatus,
  MediaAnalysisManifestSummary$,
  MediaAnalysisModelVersions$,
  MediaAnalysisOperationsConfig$,
  MediaAnalysisOutputConfig$,
  MediaAnalysisResults$,
  ModerationLabel$,
  MouthOpen$,
  Mustache$,
  NotificationChannel$,
  OrientationCorrection,
  OutputConfig$,
  Parent$,
  PersonDetail$,
  PersonDetection$,
  PersonMatch$,
  PersonTrackingSortBy,
  Point$,
  Pose$,
  ProjectAutoUpdate,
  ProjectDescription$,
  ProjectPolicy$,
  ProjectStatus,
  ProjectVersionDescription$,
  ProjectVersionStatus,
  ProtectiveEquipmentBodyPart$,
  ProtectiveEquipmentPerson$,
  ProtectiveEquipmentSummarizationAttributes$,
  ProtectiveEquipmentSummary$,
  ProtectiveEquipmentType,
  ProvisionedThroughputExceededException,
  ProvisionedThroughputExceededException$,
  PutProjectPolicy$,
  PutProjectPolicyCommand,
  PutProjectPolicyRequest$,
  PutProjectPolicyResponse$,
  QualityFilter,
  Reason,
  RecognizeCelebrities$,
  RecognizeCelebritiesCommand,
  RecognizeCelebritiesRequest$,
  RecognizeCelebritiesResponse$,
  RegionOfInterest$,
  Rekognition,
  RekognitionClient,
  RekognitionServiceException,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotReadyException,
  ResourceNotReadyException$,
  S3Destination$,
  S3Object$,
  SearchFaces$,
  SearchFacesByImage$,
  SearchFacesByImageCommand,
  SearchFacesByImageRequest$,
  SearchFacesByImageResponse$,
  SearchFacesCommand,
  SearchFacesRequest$,
  SearchFacesResponse$,
  SearchUsers$,
  SearchUsersByImage$,
  SearchUsersByImageCommand,
  SearchUsersByImageRequest$,
  SearchUsersByImageResponse$,
  SearchUsersCommand,
  SearchUsersRequest$,
  SearchUsersResponse$,
  SearchedFace$,
  SearchedFaceDetails$,
  SearchedUser$,
  SegmentDetection$,
  SegmentType,
  SegmentTypeInfo$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionNotFoundException,
  SessionNotFoundException$,
  ShotSegment$,
  Smile$,
  StartCelebrityRecognition$,
  StartCelebrityRecognitionCommand,
  StartCelebrityRecognitionRequest$,
  StartCelebrityRecognitionResponse$,
  StartContentModeration$,
  StartContentModerationCommand,
  StartContentModerationRequest$,
  StartContentModerationResponse$,
  StartFaceDetection$,
  StartFaceDetectionCommand,
  StartFaceDetectionRequest$,
  StartFaceDetectionResponse$,
  StartFaceSearch$,
  StartFaceSearchCommand,
  StartFaceSearchRequest$,
  StartFaceSearchResponse$,
  StartLabelDetection$,
  StartLabelDetectionCommand,
  StartLabelDetectionRequest$,
  StartLabelDetectionResponse$,
  StartMediaAnalysisJob$,
  StartMediaAnalysisJobCommand,
  StartMediaAnalysisJobRequest$,
  StartMediaAnalysisJobResponse$,
  StartPersonTracking$,
  StartPersonTrackingCommand,
  StartPersonTrackingRequest$,
  StartPersonTrackingResponse$,
  StartProjectVersion$,
  StartProjectVersionCommand,
  StartProjectVersionRequest$,
  StartProjectVersionResponse$,
  StartSegmentDetection$,
  StartSegmentDetectionCommand,
  StartSegmentDetectionFilters$,
  StartSegmentDetectionRequest$,
  StartSegmentDetectionResponse$,
  StartShotDetectionFilter$,
  StartStreamProcessor$,
  StartStreamProcessorCommand,
  StartStreamProcessorRequest$,
  StartStreamProcessorResponse$,
  StartTechnicalCueDetectionFilter$,
  StartTextDetection$,
  StartTextDetectionCommand,
  StartTextDetectionFilters$,
  StartTextDetectionRequest$,
  StartTextDetectionResponse$,
  StopProjectVersion$,
  StopProjectVersionCommand,
  StopProjectVersionRequest$,
  StopProjectVersionResponse$,
  StopStreamProcessor$,
  StopStreamProcessorCommand,
  StopStreamProcessorRequest$,
  StopStreamProcessorResponse$,
  StreamProcessingStartSelector$,
  StreamProcessingStopSelector$,
  StreamProcessor$,
  StreamProcessorDataSharingPreference$,
  StreamProcessorInput$,
  StreamProcessorNotificationChannel$,
  StreamProcessorOutput$,
  StreamProcessorParameterToDelete,
  StreamProcessorSettings$,
  StreamProcessorSettingsForUpdate$,
  StreamProcessorStatus,
  Summary$,
  Sunglasses$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TechnicalCueSegment$,
  TechnicalCueType,
  TestingData$,
  TestingDataResult$,
  TextDetection$,
  TextDetectionResult$,
  TextTypes,
  ThrottlingException,
  ThrottlingException$,
  TrainingData$,
  TrainingDataResult$,
  UnindexedFace$,
  UnsearchedFace$,
  UnsearchedFaceReason,
  UnsuccessfulFaceAssociation$,
  UnsuccessfulFaceAssociationReason,
  UnsuccessfulFaceDeletion$,
  UnsuccessfulFaceDeletionReason,
  UnsuccessfulFaceDisassociation$,
  UnsuccessfulFaceDisassociationReason,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDatasetEntries$,
  UpdateDatasetEntriesCommand,
  UpdateDatasetEntriesRequest$,
  UpdateDatasetEntriesResponse$,
  UpdateStreamProcessor$,
  UpdateStreamProcessorCommand,
  UpdateStreamProcessorRequest$,
  UpdateStreamProcessorResponse$,
  User$,
  UserMatch$,
  UserStatus,
  ValidationData$,
  Versions$,
  Video$,
  VideoColorRange,
  VideoJobStatus,
  VideoMetadata$,
  VideoTooLargeException,
  VideoTooLargeException$,
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
assert(typeof AssociateFaces$ === "object");
assert(typeof CompareFacesCommand === "function");
assert(typeof CompareFaces$ === "object");
assert(typeof CopyProjectVersionCommand === "function");
assert(typeof CopyProjectVersion$ === "object");
assert(typeof CreateCollectionCommand === "function");
assert(typeof CreateCollection$ === "object");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateFaceLivenessSessionCommand === "function");
assert(typeof CreateFaceLivenessSession$ === "object");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProject$ === "object");
assert(typeof CreateProjectVersionCommand === "function");
assert(typeof CreateProjectVersion$ === "object");
assert(typeof CreateStreamProcessorCommand === "function");
assert(typeof CreateStreamProcessor$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof DeleteCollectionCommand === "function");
assert(typeof DeleteCollection$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DeleteFacesCommand === "function");
assert(typeof DeleteFaces$ === "object");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProject$ === "object");
assert(typeof DeleteProjectPolicyCommand === "function");
assert(typeof DeleteProjectPolicy$ === "object");
assert(typeof DeleteProjectVersionCommand === "function");
assert(typeof DeleteProjectVersion$ === "object");
assert(typeof DeleteStreamProcessorCommand === "function");
assert(typeof DeleteStreamProcessor$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DescribeCollectionCommand === "function");
assert(typeof DescribeCollection$ === "object");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDataset$ === "object");
assert(typeof DescribeProjectsCommand === "function");
assert(typeof DescribeProjects$ === "object");
assert(typeof DescribeProjectVersionsCommand === "function");
assert(typeof DescribeProjectVersions$ === "object");
assert(typeof DescribeStreamProcessorCommand === "function");
assert(typeof DescribeStreamProcessor$ === "object");
assert(typeof DetectCustomLabelsCommand === "function");
assert(typeof DetectCustomLabels$ === "object");
assert(typeof DetectFacesCommand === "function");
assert(typeof DetectFaces$ === "object");
assert(typeof DetectLabelsCommand === "function");
assert(typeof DetectLabels$ === "object");
assert(typeof DetectModerationLabelsCommand === "function");
assert(typeof DetectModerationLabels$ === "object");
assert(typeof DetectProtectiveEquipmentCommand === "function");
assert(typeof DetectProtectiveEquipment$ === "object");
assert(typeof DetectTextCommand === "function");
assert(typeof DetectText$ === "object");
assert(typeof DisassociateFacesCommand === "function");
assert(typeof DisassociateFaces$ === "object");
assert(typeof DistributeDatasetEntriesCommand === "function");
assert(typeof DistributeDatasetEntries$ === "object");
assert(typeof GetCelebrityInfoCommand === "function");
assert(typeof GetCelebrityInfo$ === "object");
assert(typeof GetCelebrityRecognitionCommand === "function");
assert(typeof GetCelebrityRecognition$ === "object");
assert(typeof GetContentModerationCommand === "function");
assert(typeof GetContentModeration$ === "object");
assert(typeof GetFaceDetectionCommand === "function");
assert(typeof GetFaceDetection$ === "object");
assert(typeof GetFaceLivenessSessionResultsCommand === "function");
assert(typeof GetFaceLivenessSessionResults$ === "object");
assert(typeof GetFaceSearchCommand === "function");
assert(typeof GetFaceSearch$ === "object");
assert(typeof GetLabelDetectionCommand === "function");
assert(typeof GetLabelDetection$ === "object");
assert(typeof GetMediaAnalysisJobCommand === "function");
assert(typeof GetMediaAnalysisJob$ === "object");
assert(typeof GetPersonTrackingCommand === "function");
assert(typeof GetPersonTracking$ === "object");
assert(typeof GetSegmentDetectionCommand === "function");
assert(typeof GetSegmentDetection$ === "object");
assert(typeof GetTextDetectionCommand === "function");
assert(typeof GetTextDetection$ === "object");
assert(typeof IndexFacesCommand === "function");
assert(typeof IndexFaces$ === "object");
assert(typeof ListCollectionsCommand === "function");
assert(typeof ListCollections$ === "object");
assert(typeof ListDatasetEntriesCommand === "function");
assert(typeof ListDatasetEntries$ === "object");
assert(typeof ListDatasetLabelsCommand === "function");
assert(typeof ListDatasetLabels$ === "object");
assert(typeof ListFacesCommand === "function");
assert(typeof ListFaces$ === "object");
assert(typeof ListMediaAnalysisJobsCommand === "function");
assert(typeof ListMediaAnalysisJobs$ === "object");
assert(typeof ListProjectPoliciesCommand === "function");
assert(typeof ListProjectPolicies$ === "object");
assert(typeof ListStreamProcessorsCommand === "function");
assert(typeof ListStreamProcessors$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof PutProjectPolicyCommand === "function");
assert(typeof PutProjectPolicy$ === "object");
assert(typeof RecognizeCelebritiesCommand === "function");
assert(typeof RecognizeCelebrities$ === "object");
assert(typeof SearchFacesCommand === "function");
assert(typeof SearchFaces$ === "object");
assert(typeof SearchFacesByImageCommand === "function");
assert(typeof SearchFacesByImage$ === "object");
assert(typeof SearchUsersCommand === "function");
assert(typeof SearchUsers$ === "object");
assert(typeof SearchUsersByImageCommand === "function");
assert(typeof SearchUsersByImage$ === "object");
assert(typeof StartCelebrityRecognitionCommand === "function");
assert(typeof StartCelebrityRecognition$ === "object");
assert(typeof StartContentModerationCommand === "function");
assert(typeof StartContentModeration$ === "object");
assert(typeof StartFaceDetectionCommand === "function");
assert(typeof StartFaceDetection$ === "object");
assert(typeof StartFaceSearchCommand === "function");
assert(typeof StartFaceSearch$ === "object");
assert(typeof StartLabelDetectionCommand === "function");
assert(typeof StartLabelDetection$ === "object");
assert(typeof StartMediaAnalysisJobCommand === "function");
assert(typeof StartMediaAnalysisJob$ === "object");
assert(typeof StartPersonTrackingCommand === "function");
assert(typeof StartPersonTracking$ === "object");
assert(typeof StartProjectVersionCommand === "function");
assert(typeof StartProjectVersion$ === "object");
assert(typeof StartSegmentDetectionCommand === "function");
assert(typeof StartSegmentDetection$ === "object");
assert(typeof StartStreamProcessorCommand === "function");
assert(typeof StartStreamProcessor$ === "object");
assert(typeof StartTextDetectionCommand === "function");
assert(typeof StartTextDetection$ === "object");
assert(typeof StopProjectVersionCommand === "function");
assert(typeof StopProjectVersion$ === "object");
assert(typeof StopStreamProcessorCommand === "function");
assert(typeof StopStreamProcessor$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDatasetEntriesCommand === "function");
assert(typeof UpdateDatasetEntries$ === "object");
assert(typeof UpdateStreamProcessorCommand === "function");
assert(typeof UpdateStreamProcessor$ === "object");
// structural schemas
assert(typeof AgeRange$ === "object");
assert(typeof Asset$ === "object");
assert(typeof AssociatedFace$ === "object");
assert(typeof AssociateFacesRequest$ === "object");
assert(typeof AssociateFacesResponse$ === "object");
assert(typeof AudioMetadata$ === "object");
assert(typeof AuditImage$ === "object");
assert(typeof Beard$ === "object");
assert(typeof BlackFrame$ === "object");
assert(typeof BoundingBox$ === "object");
assert(typeof Celebrity$ === "object");
assert(typeof CelebrityDetail$ === "object");
assert(typeof CelebrityRecognition$ === "object");
assert(typeof Challenge$ === "object");
assert(typeof ChallengePreference$ === "object");
assert(typeof ComparedFace$ === "object");
assert(typeof ComparedSourceImageFace$ === "object");
assert(typeof CompareFacesMatch$ === "object");
assert(typeof CompareFacesRequest$ === "object");
assert(typeof CompareFacesResponse$ === "object");
assert(typeof ConnectedHomeSettings$ === "object");
assert(typeof ConnectedHomeSettingsForUpdate$ === "object");
assert(typeof ContentModerationDetection$ === "object");
assert(typeof ContentType$ === "object");
assert(typeof CopyProjectVersionRequest$ === "object");
assert(typeof CopyProjectVersionResponse$ === "object");
assert(typeof CoversBodyPart$ === "object");
assert(typeof CreateCollectionRequest$ === "object");
assert(typeof CreateCollectionResponse$ === "object");
assert(typeof CreateDatasetRequest$ === "object");
assert(typeof CreateDatasetResponse$ === "object");
assert(typeof CreateFaceLivenessSessionRequest$ === "object");
assert(typeof CreateFaceLivenessSessionRequestSettings$ === "object");
assert(typeof CreateFaceLivenessSessionResponse$ === "object");
assert(typeof CreateProjectRequest$ === "object");
assert(typeof CreateProjectResponse$ === "object");
assert(typeof CreateProjectVersionRequest$ === "object");
assert(typeof CreateProjectVersionResponse$ === "object");
assert(typeof CreateStreamProcessorRequest$ === "object");
assert(typeof CreateStreamProcessorResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof CustomizationFeatureConfig$ === "object");
assert(typeof CustomizationFeatureContentModerationConfig$ === "object");
assert(typeof CustomLabel$ === "object");
assert(typeof DatasetChanges$ === "object");
assert(typeof DatasetDescription$ === "object");
assert(typeof DatasetLabelDescription$ === "object");
assert(typeof DatasetLabelStats$ === "object");
assert(typeof DatasetMetadata$ === "object");
assert(typeof DatasetSource$ === "object");
assert(typeof DatasetStats$ === "object");
assert(typeof DeleteCollectionRequest$ === "object");
assert(typeof DeleteCollectionResponse$ === "object");
assert(typeof DeleteDatasetRequest$ === "object");
assert(typeof DeleteDatasetResponse$ === "object");
assert(typeof DeleteFacesRequest$ === "object");
assert(typeof DeleteFacesResponse$ === "object");
assert(typeof DeleteProjectPolicyRequest$ === "object");
assert(typeof DeleteProjectPolicyResponse$ === "object");
assert(typeof DeleteProjectRequest$ === "object");
assert(typeof DeleteProjectResponse$ === "object");
assert(typeof DeleteProjectVersionRequest$ === "object");
assert(typeof DeleteProjectVersionResponse$ === "object");
assert(typeof DeleteStreamProcessorRequest$ === "object");
assert(typeof DeleteStreamProcessorResponse$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteUserResponse$ === "object");
assert(typeof DescribeCollectionRequest$ === "object");
assert(typeof DescribeCollectionResponse$ === "object");
assert(typeof DescribeDatasetRequest$ === "object");
assert(typeof DescribeDatasetResponse$ === "object");
assert(typeof DescribeProjectsRequest$ === "object");
assert(typeof DescribeProjectsResponse$ === "object");
assert(typeof DescribeProjectVersionsRequest$ === "object");
assert(typeof DescribeProjectVersionsResponse$ === "object");
assert(typeof DescribeStreamProcessorRequest$ === "object");
assert(typeof DescribeStreamProcessorResponse$ === "object");
assert(typeof DetectCustomLabelsRequest$ === "object");
assert(typeof DetectCustomLabelsResponse$ === "object");
assert(typeof DetectFacesRequest$ === "object");
assert(typeof DetectFacesResponse$ === "object");
assert(typeof DetectionFilter$ === "object");
assert(typeof DetectLabelsImageBackground$ === "object");
assert(typeof DetectLabelsImageForeground$ === "object");
assert(typeof DetectLabelsImageProperties$ === "object");
assert(typeof DetectLabelsImagePropertiesSettings$ === "object");
assert(typeof DetectLabelsImageQuality$ === "object");
assert(typeof DetectLabelsRequest$ === "object");
assert(typeof DetectLabelsResponse$ === "object");
assert(typeof DetectLabelsSettings$ === "object");
assert(typeof DetectModerationLabelsRequest$ === "object");
assert(typeof DetectModerationLabelsResponse$ === "object");
assert(typeof DetectProtectiveEquipmentRequest$ === "object");
assert(typeof DetectProtectiveEquipmentResponse$ === "object");
assert(typeof DetectTextFilters$ === "object");
assert(typeof DetectTextRequest$ === "object");
assert(typeof DetectTextResponse$ === "object");
assert(typeof DisassociatedFace$ === "object");
assert(typeof DisassociateFacesRequest$ === "object");
assert(typeof DisassociateFacesResponse$ === "object");
assert(typeof DistributeDataset$ === "object");
assert(typeof DistributeDatasetEntriesRequest$ === "object");
assert(typeof DistributeDatasetEntriesResponse$ === "object");
assert(typeof DominantColor$ === "object");
assert(typeof Emotion$ === "object");
assert(typeof EquipmentDetection$ === "object");
assert(typeof EvaluationResult$ === "object");
assert(typeof EyeDirection$ === "object");
assert(typeof Eyeglasses$ === "object");
assert(typeof EyeOpen$ === "object");
assert(typeof Face$ === "object");
assert(typeof FaceDetail$ === "object");
assert(typeof FaceDetection$ === "object");
assert(typeof FaceMatch$ === "object");
assert(typeof FaceOccluded$ === "object");
assert(typeof FaceRecord$ === "object");
assert(typeof FaceSearchSettings$ === "object");
assert(typeof Gender$ === "object");
assert(typeof GeneralLabelsSettings$ === "object");
assert(typeof Geometry$ === "object");
assert(typeof GetCelebrityInfoRequest$ === "object");
assert(typeof GetCelebrityInfoResponse$ === "object");
assert(typeof GetCelebrityRecognitionRequest$ === "object");
assert(typeof GetCelebrityRecognitionResponse$ === "object");
assert(typeof GetContentModerationRequest$ === "object");
assert(typeof GetContentModerationRequestMetadata$ === "object");
assert(typeof GetContentModerationResponse$ === "object");
assert(typeof GetFaceDetectionRequest$ === "object");
assert(typeof GetFaceDetectionResponse$ === "object");
assert(typeof GetFaceLivenessSessionResultsRequest$ === "object");
assert(typeof GetFaceLivenessSessionResultsResponse$ === "object");
assert(typeof GetFaceSearchRequest$ === "object");
assert(typeof GetFaceSearchResponse$ === "object");
assert(typeof GetLabelDetectionRequest$ === "object");
assert(typeof GetLabelDetectionRequestMetadata$ === "object");
assert(typeof GetLabelDetectionResponse$ === "object");
assert(typeof GetMediaAnalysisJobRequest$ === "object");
assert(typeof GetMediaAnalysisJobResponse$ === "object");
assert(typeof GetPersonTrackingRequest$ === "object");
assert(typeof GetPersonTrackingResponse$ === "object");
assert(typeof GetSegmentDetectionRequest$ === "object");
assert(typeof GetSegmentDetectionResponse$ === "object");
assert(typeof GetTextDetectionRequest$ === "object");
assert(typeof GetTextDetectionResponse$ === "object");
assert(typeof GroundTruthManifest$ === "object");
assert(typeof HumanLoopActivationOutput$ === "object");
assert(typeof HumanLoopConfig$ === "object");
assert(typeof HumanLoopDataAttributes$ === "object");
assert(typeof Image$ === "object");
assert(typeof ImageQuality$ === "object");
assert(typeof IndexFacesRequest$ === "object");
assert(typeof IndexFacesResponse$ === "object");
assert(typeof Instance$ === "object");
assert(typeof KinesisDataStream$ === "object");
assert(typeof KinesisVideoStream$ === "object");
assert(typeof KinesisVideoStreamStartSelector$ === "object");
assert(typeof KnownGender$ === "object");
assert(typeof Label$ === "object");
assert(typeof LabelAlias$ === "object");
assert(typeof LabelCategory$ === "object");
assert(typeof LabelDetection$ === "object");
assert(typeof LabelDetectionSettings$ === "object");
assert(typeof Landmark$ === "object");
assert(typeof ListCollectionsRequest$ === "object");
assert(typeof ListCollectionsResponse$ === "object");
assert(typeof ListDatasetEntriesRequest$ === "object");
assert(typeof ListDatasetEntriesResponse$ === "object");
assert(typeof ListDatasetLabelsRequest$ === "object");
assert(typeof ListDatasetLabelsResponse$ === "object");
assert(typeof ListFacesRequest$ === "object");
assert(typeof ListFacesResponse$ === "object");
assert(typeof ListMediaAnalysisJobsRequest$ === "object");
assert(typeof ListMediaAnalysisJobsResponse$ === "object");
assert(typeof ListProjectPoliciesRequest$ === "object");
assert(typeof ListProjectPoliciesResponse$ === "object");
assert(typeof ListStreamProcessorsRequest$ === "object");
assert(typeof ListStreamProcessorsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof LivenessOutputConfig$ === "object");
assert(typeof MatchedUser$ === "object");
assert(typeof MediaAnalysisDetectModerationLabelsConfig$ === "object");
assert(typeof MediaAnalysisInput$ === "object");
assert(typeof MediaAnalysisJobDescription$ === "object");
assert(typeof MediaAnalysisJobFailureDetails$ === "object");
assert(typeof MediaAnalysisManifestSummary$ === "object");
assert(typeof MediaAnalysisModelVersions$ === "object");
assert(typeof MediaAnalysisOperationsConfig$ === "object");
assert(typeof MediaAnalysisOutputConfig$ === "object");
assert(typeof MediaAnalysisResults$ === "object");
assert(typeof ModerationLabel$ === "object");
assert(typeof MouthOpen$ === "object");
assert(typeof Mustache$ === "object");
assert(typeof NotificationChannel$ === "object");
assert(typeof OutputConfig$ === "object");
assert(typeof Parent$ === "object");
assert(typeof PersonDetail$ === "object");
assert(typeof PersonDetection$ === "object");
assert(typeof PersonMatch$ === "object");
assert(typeof Point$ === "object");
assert(typeof Pose$ === "object");
assert(typeof ProjectDescription$ === "object");
assert(typeof ProjectPolicy$ === "object");
assert(typeof ProjectVersionDescription$ === "object");
assert(typeof ProtectiveEquipmentBodyPart$ === "object");
assert(typeof ProtectiveEquipmentPerson$ === "object");
assert(typeof ProtectiveEquipmentSummarizationAttributes$ === "object");
assert(typeof ProtectiveEquipmentSummary$ === "object");
assert(typeof PutProjectPolicyRequest$ === "object");
assert(typeof PutProjectPolicyResponse$ === "object");
assert(typeof RecognizeCelebritiesRequest$ === "object");
assert(typeof RecognizeCelebritiesResponse$ === "object");
assert(typeof RegionOfInterest$ === "object");
assert(typeof S3Destination$ === "object");
assert(typeof S3Object$ === "object");
assert(typeof SearchedFace$ === "object");
assert(typeof SearchedFaceDetails$ === "object");
assert(typeof SearchedUser$ === "object");
assert(typeof SearchFacesByImageRequest$ === "object");
assert(typeof SearchFacesByImageResponse$ === "object");
assert(typeof SearchFacesRequest$ === "object");
assert(typeof SearchFacesResponse$ === "object");
assert(typeof SearchUsersByImageRequest$ === "object");
assert(typeof SearchUsersByImageResponse$ === "object");
assert(typeof SearchUsersRequest$ === "object");
assert(typeof SearchUsersResponse$ === "object");
assert(typeof SegmentDetection$ === "object");
assert(typeof SegmentTypeInfo$ === "object");
assert(typeof ShotSegment$ === "object");
assert(typeof Smile$ === "object");
assert(typeof StartCelebrityRecognitionRequest$ === "object");
assert(typeof StartCelebrityRecognitionResponse$ === "object");
assert(typeof StartContentModerationRequest$ === "object");
assert(typeof StartContentModerationResponse$ === "object");
assert(typeof StartFaceDetectionRequest$ === "object");
assert(typeof StartFaceDetectionResponse$ === "object");
assert(typeof StartFaceSearchRequest$ === "object");
assert(typeof StartFaceSearchResponse$ === "object");
assert(typeof StartLabelDetectionRequest$ === "object");
assert(typeof StartLabelDetectionResponse$ === "object");
assert(typeof StartMediaAnalysisJobRequest$ === "object");
assert(typeof StartMediaAnalysisJobResponse$ === "object");
assert(typeof StartPersonTrackingRequest$ === "object");
assert(typeof StartPersonTrackingResponse$ === "object");
assert(typeof StartProjectVersionRequest$ === "object");
assert(typeof StartProjectVersionResponse$ === "object");
assert(typeof StartSegmentDetectionFilters$ === "object");
assert(typeof StartSegmentDetectionRequest$ === "object");
assert(typeof StartSegmentDetectionResponse$ === "object");
assert(typeof StartShotDetectionFilter$ === "object");
assert(typeof StartStreamProcessorRequest$ === "object");
assert(typeof StartStreamProcessorResponse$ === "object");
assert(typeof StartTechnicalCueDetectionFilter$ === "object");
assert(typeof StartTextDetectionFilters$ === "object");
assert(typeof StartTextDetectionRequest$ === "object");
assert(typeof StartTextDetectionResponse$ === "object");
assert(typeof StopProjectVersionRequest$ === "object");
assert(typeof StopProjectVersionResponse$ === "object");
assert(typeof StopStreamProcessorRequest$ === "object");
assert(typeof StopStreamProcessorResponse$ === "object");
assert(typeof StreamProcessingStartSelector$ === "object");
assert(typeof StreamProcessingStopSelector$ === "object");
assert(typeof StreamProcessor$ === "object");
assert(typeof StreamProcessorDataSharingPreference$ === "object");
assert(typeof StreamProcessorInput$ === "object");
assert(typeof StreamProcessorNotificationChannel$ === "object");
assert(typeof StreamProcessorOutput$ === "object");
assert(typeof StreamProcessorSettings$ === "object");
assert(typeof StreamProcessorSettingsForUpdate$ === "object");
assert(typeof Summary$ === "object");
assert(typeof Sunglasses$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TechnicalCueSegment$ === "object");
assert(typeof TestingData$ === "object");
assert(typeof TestingDataResult$ === "object");
assert(typeof TextDetection$ === "object");
assert(typeof TextDetectionResult$ === "object");
assert(typeof TrainingData$ === "object");
assert(typeof TrainingDataResult$ === "object");
assert(typeof UnindexedFace$ === "object");
assert(typeof UnsearchedFace$ === "object");
assert(typeof UnsuccessfulFaceAssociation$ === "object");
assert(typeof UnsuccessfulFaceDeletion$ === "object");
assert(typeof UnsuccessfulFaceDisassociation$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDatasetEntriesRequest$ === "object");
assert(typeof UpdateDatasetEntriesResponse$ === "object");
assert(typeof UpdateStreamProcessorRequest$ === "object");
assert(typeof UpdateStreamProcessorResponse$ === "object");
assert(typeof User$ === "object");
assert(typeof UserMatch$ === "object");
assert(typeof ValidationData$ === "object");
assert(typeof Versions$ === "object");
assert(typeof Video$ === "object");
assert(typeof VideoMetadata$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof RekognitionServiceException);
assert(typeof ConflictException$ === "object");
assert(HumanLoopQuotaExceededException.prototype instanceof RekognitionServiceException);
assert(typeof HumanLoopQuotaExceededException$ === "object");
assert(IdempotentParameterMismatchException.prototype instanceof RekognitionServiceException);
assert(typeof IdempotentParameterMismatchException$ === "object");
assert(ImageTooLargeException.prototype instanceof RekognitionServiceException);
assert(typeof ImageTooLargeException$ === "object");
assert(InternalServerError.prototype instanceof RekognitionServiceException);
assert(typeof InternalServerError$ === "object");
assert(InvalidImageFormatException.prototype instanceof RekognitionServiceException);
assert(typeof InvalidImageFormatException$ === "object");
assert(InvalidManifestException.prototype instanceof RekognitionServiceException);
assert(typeof InvalidManifestException$ === "object");
assert(InvalidPaginationTokenException.prototype instanceof RekognitionServiceException);
assert(typeof InvalidPaginationTokenException$ === "object");
assert(InvalidParameterException.prototype instanceof RekognitionServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidPolicyRevisionIdException.prototype instanceof RekognitionServiceException);
assert(typeof InvalidPolicyRevisionIdException$ === "object");
assert(InvalidS3ObjectException.prototype instanceof RekognitionServiceException);
assert(typeof InvalidS3ObjectException$ === "object");
assert(LimitExceededException.prototype instanceof RekognitionServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MalformedPolicyDocumentException.prototype instanceof RekognitionServiceException);
assert(typeof MalformedPolicyDocumentException$ === "object");
assert(ProvisionedThroughputExceededException.prototype instanceof RekognitionServiceException);
assert(typeof ProvisionedThroughputExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof RekognitionServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceInUseException.prototype instanceof RekognitionServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof RekognitionServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceNotReadyException.prototype instanceof RekognitionServiceException);
assert(typeof ResourceNotReadyException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof RekognitionServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(SessionNotFoundException.prototype instanceof RekognitionServiceException);
assert(typeof SessionNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof RekognitionServiceException);
assert(typeof ThrottlingException$ === "object");
assert(VideoTooLargeException.prototype instanceof RekognitionServiceException);
assert(typeof VideoTooLargeException$ === "object");
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
