import {
  AugmentedManifestsDocumentTypeFormat,
  AugmentedManifestsListItem$,
  BatchDetectDominantLanguage$,
  BatchDetectDominantLanguageCommand,
  BatchDetectDominantLanguageItemResult$,
  BatchDetectDominantLanguageRequest$,
  BatchDetectDominantLanguageResponse$,
  BatchDetectEntities$,
  BatchDetectEntitiesCommand,
  BatchDetectEntitiesItemResult$,
  BatchDetectEntitiesRequest$,
  BatchDetectEntitiesResponse$,
  BatchDetectKeyPhrases$,
  BatchDetectKeyPhrasesCommand,
  BatchDetectKeyPhrasesItemResult$,
  BatchDetectKeyPhrasesRequest$,
  BatchDetectKeyPhrasesResponse$,
  BatchDetectSentiment$,
  BatchDetectSentimentCommand,
  BatchDetectSentimentItemResult$,
  BatchDetectSentimentRequest$,
  BatchDetectSentimentResponse$,
  BatchDetectSyntax$,
  BatchDetectSyntaxCommand,
  BatchDetectSyntaxItemResult$,
  BatchDetectSyntaxRequest$,
  BatchDetectSyntaxResponse$,
  BatchDetectTargetedSentiment$,
  BatchDetectTargetedSentimentCommand,
  BatchDetectTargetedSentimentItemResult$,
  BatchDetectTargetedSentimentRequest$,
  BatchDetectTargetedSentimentResponse$,
  BatchItemError$,
  BatchSizeLimitExceededException,
  BatchSizeLimitExceededException$,
  Block$,
  BlockReference$,
  BlockType,
  BoundingBox$,
  ChildBlock$,
  ClassifierEvaluationMetrics$,
  ClassifierMetadata$,
  ClassifyDocument$,
  ClassifyDocumentCommand,
  ClassifyDocumentRequest$,
  ClassifyDocumentResponse$,
  Comprehend,
  ComprehendClient,
  ComprehendServiceException,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ContainsPiiEntities$,
  ContainsPiiEntitiesCommand,
  ContainsPiiEntitiesRequest$,
  ContainsPiiEntitiesResponse$,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetRequest$,
  CreateDatasetResponse$,
  CreateDocumentClassifier$,
  CreateDocumentClassifierCommand,
  CreateDocumentClassifierRequest$,
  CreateDocumentClassifierResponse$,
  CreateEndpoint$,
  CreateEndpointCommand,
  CreateEndpointRequest$,
  CreateEndpointResponse$,
  CreateEntityRecognizer$,
  CreateEntityRecognizerCommand,
  CreateEntityRecognizerRequest$,
  CreateEntityRecognizerResponse$,
  CreateFlywheel$,
  CreateFlywheelCommand,
  CreateFlywheelRequest$,
  CreateFlywheelResponse$,
  DataSecurityConfig$,
  DatasetAugmentedManifestsListItem$,
  DatasetDataFormat,
  DatasetDocumentClassifierInputDataConfig$,
  DatasetEntityRecognizerAnnotations$,
  DatasetEntityRecognizerDocuments$,
  DatasetEntityRecognizerEntityList$,
  DatasetEntityRecognizerInputDataConfig$,
  DatasetFilter$,
  DatasetInputDataConfig$,
  DatasetProperties$,
  DatasetStatus,
  DatasetType,
  DeleteDocumentClassifier$,
  DeleteDocumentClassifierCommand,
  DeleteDocumentClassifierRequest$,
  DeleteDocumentClassifierResponse$,
  DeleteEndpoint$,
  DeleteEndpointCommand,
  DeleteEndpointRequest$,
  DeleteEndpointResponse$,
  DeleteEntityRecognizer$,
  DeleteEntityRecognizerCommand,
  DeleteEntityRecognizerRequest$,
  DeleteEntityRecognizerResponse$,
  DeleteFlywheel$,
  DeleteFlywheelCommand,
  DeleteFlywheelRequest$,
  DeleteFlywheelResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DescribeDataset$,
  DescribeDatasetCommand,
  DescribeDatasetRequest$,
  DescribeDatasetResponse$,
  DescribeDocumentClassificationJob$,
  DescribeDocumentClassificationJobCommand,
  DescribeDocumentClassificationJobRequest$,
  DescribeDocumentClassificationJobResponse$,
  DescribeDocumentClassifier$,
  DescribeDocumentClassifierCommand,
  DescribeDocumentClassifierRequest$,
  DescribeDocumentClassifierResponse$,
  DescribeDominantLanguageDetectionJob$,
  DescribeDominantLanguageDetectionJobCommand,
  DescribeDominantLanguageDetectionJobRequest$,
  DescribeDominantLanguageDetectionJobResponse$,
  DescribeEndpoint$,
  DescribeEndpointCommand,
  DescribeEndpointRequest$,
  DescribeEndpointResponse$,
  DescribeEntitiesDetectionJob$,
  DescribeEntitiesDetectionJobCommand,
  DescribeEntitiesDetectionJobRequest$,
  DescribeEntitiesDetectionJobResponse$,
  DescribeEntityRecognizer$,
  DescribeEntityRecognizerCommand,
  DescribeEntityRecognizerRequest$,
  DescribeEntityRecognizerResponse$,
  DescribeEventsDetectionJob$,
  DescribeEventsDetectionJobCommand,
  DescribeEventsDetectionJobRequest$,
  DescribeEventsDetectionJobResponse$,
  DescribeFlywheel$,
  DescribeFlywheelCommand,
  DescribeFlywheelIteration$,
  DescribeFlywheelIterationCommand,
  DescribeFlywheelIterationRequest$,
  DescribeFlywheelIterationResponse$,
  DescribeFlywheelRequest$,
  DescribeFlywheelResponse$,
  DescribeKeyPhrasesDetectionJob$,
  DescribeKeyPhrasesDetectionJobCommand,
  DescribeKeyPhrasesDetectionJobRequest$,
  DescribeKeyPhrasesDetectionJobResponse$,
  DescribePiiEntitiesDetectionJob$,
  DescribePiiEntitiesDetectionJobCommand,
  DescribePiiEntitiesDetectionJobRequest$,
  DescribePiiEntitiesDetectionJobResponse$,
  DescribeResourcePolicy$,
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyRequest$,
  DescribeResourcePolicyResponse$,
  DescribeSentimentDetectionJob$,
  DescribeSentimentDetectionJobCommand,
  DescribeSentimentDetectionJobRequest$,
  DescribeSentimentDetectionJobResponse$,
  DescribeTargetedSentimentDetectionJob$,
  DescribeTargetedSentimentDetectionJobCommand,
  DescribeTargetedSentimentDetectionJobRequest$,
  DescribeTargetedSentimentDetectionJobResponse$,
  DescribeTopicsDetectionJob$,
  DescribeTopicsDetectionJobCommand,
  DescribeTopicsDetectionJobRequest$,
  DescribeTopicsDetectionJobResponse$,
  DetectDominantLanguage$,
  DetectDominantLanguageCommand,
  DetectDominantLanguageRequest$,
  DetectDominantLanguageResponse$,
  DetectEntities$,
  DetectEntitiesCommand,
  DetectEntitiesRequest$,
  DetectEntitiesResponse$,
  DetectKeyPhrases$,
  DetectKeyPhrasesCommand,
  DetectKeyPhrasesRequest$,
  DetectKeyPhrasesResponse$,
  DetectPiiEntities$,
  DetectPiiEntitiesCommand,
  DetectPiiEntitiesRequest$,
  DetectPiiEntitiesResponse$,
  DetectSentiment$,
  DetectSentimentCommand,
  DetectSentimentRequest$,
  DetectSentimentResponse$,
  DetectSyntax$,
  DetectSyntaxCommand,
  DetectSyntaxRequest$,
  DetectSyntaxResponse$,
  DetectTargetedSentiment$,
  DetectTargetedSentimentCommand,
  DetectTargetedSentimentRequest$,
  DetectTargetedSentimentResponse$,
  DetectToxicContent$,
  DetectToxicContentCommand,
  DetectToxicContentRequest$,
  DetectToxicContentResponse$,
  DocumentClass$,
  DocumentClassificationConfig$,
  DocumentClassificationJobFilter$,
  DocumentClassificationJobProperties$,
  DocumentClassifierDataFormat,
  DocumentClassifierDocumentTypeFormat,
  DocumentClassifierDocuments$,
  DocumentClassifierFilter$,
  DocumentClassifierInputDataConfig$,
  DocumentClassifierMode,
  DocumentClassifierOutputDataConfig$,
  DocumentClassifierProperties$,
  DocumentClassifierSummary$,
  DocumentLabel$,
  DocumentMetadata$,
  DocumentReadAction,
  DocumentReadFeatureTypes,
  DocumentReadMode,
  DocumentReaderConfig$,
  DocumentType,
  DocumentTypeListItem$,
  DominantLanguage$,
  DominantLanguageDetectionJobFilter$,
  DominantLanguageDetectionJobProperties$,
  EndpointFilter$,
  EndpointProperties$,
  EndpointStatus,
  EntitiesDetectionJobFilter$,
  EntitiesDetectionJobProperties$,
  Entity$,
  EntityLabel$,
  EntityRecognitionConfig$,
  EntityRecognizerAnnotations$,
  EntityRecognizerDataFormat,
  EntityRecognizerDocuments$,
  EntityRecognizerEntityList$,
  EntityRecognizerEvaluationMetrics$,
  EntityRecognizerFilter$,
  EntityRecognizerInputDataConfig$,
  EntityRecognizerMetadata$,
  EntityRecognizerMetadataEntityTypesListItem$,
  EntityRecognizerOutputDataConfig$,
  EntityRecognizerProperties$,
  EntityRecognizerSummary$,
  EntityType,
  EntityTypesEvaluationMetrics$,
  EntityTypesListItem$,
  ErrorsListItem$,
  EventsDetectionJobFilter$,
  EventsDetectionJobProperties$,
  ExtractedCharactersListItem$,
  FlywheelFilter$,
  FlywheelIterationFilter$,
  FlywheelIterationProperties$,
  FlywheelIterationStatus,
  FlywheelModelEvaluationMetrics$,
  FlywheelProperties$,
  FlywheelStatus,
  FlywheelSummary$,
  Geometry$,
  ImportModel$,
  ImportModelCommand,
  ImportModelRequest$,
  ImportModelResponse$,
  InputDataConfig$,
  InputFormat,
  InternalServerException,
  InternalServerException$,
  InvalidFilterException,
  InvalidFilterException$,
  InvalidRequestDetail$,
  InvalidRequestDetailReason,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidRequestReason,
  JobNotFoundException,
  JobNotFoundException$,
  JobStatus,
  KeyPhrase$,
  KeyPhrasesDetectionJobFilter$,
  KeyPhrasesDetectionJobProperties$,
  KmsKeyValidationException,
  KmsKeyValidationException$,
  LanguageCode,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsRequest$,
  ListDatasetsResponse$,
  ListDocumentClassificationJobs$,
  ListDocumentClassificationJobsCommand,
  ListDocumentClassificationJobsRequest$,
  ListDocumentClassificationJobsResponse$,
  ListDocumentClassifierSummaries$,
  ListDocumentClassifierSummariesCommand,
  ListDocumentClassifierSummariesRequest$,
  ListDocumentClassifierSummariesResponse$,
  ListDocumentClassifiers$,
  ListDocumentClassifiersCommand,
  ListDocumentClassifiersRequest$,
  ListDocumentClassifiersResponse$,
  ListDominantLanguageDetectionJobs$,
  ListDominantLanguageDetectionJobsCommand,
  ListDominantLanguageDetectionJobsRequest$,
  ListDominantLanguageDetectionJobsResponse$,
  ListEndpoints$,
  ListEndpointsCommand,
  ListEndpointsRequest$,
  ListEndpointsResponse$,
  ListEntitiesDetectionJobs$,
  ListEntitiesDetectionJobsCommand,
  ListEntitiesDetectionJobsRequest$,
  ListEntitiesDetectionJobsResponse$,
  ListEntityRecognizerSummaries$,
  ListEntityRecognizerSummariesCommand,
  ListEntityRecognizerSummariesRequest$,
  ListEntityRecognizerSummariesResponse$,
  ListEntityRecognizers$,
  ListEntityRecognizersCommand,
  ListEntityRecognizersRequest$,
  ListEntityRecognizersResponse$,
  ListEventsDetectionJobs$,
  ListEventsDetectionJobsCommand,
  ListEventsDetectionJobsRequest$,
  ListEventsDetectionJobsResponse$,
  ListFlywheelIterationHistory$,
  ListFlywheelIterationHistoryCommand,
  ListFlywheelIterationHistoryRequest$,
  ListFlywheelIterationHistoryResponse$,
  ListFlywheels$,
  ListFlywheelsCommand,
  ListFlywheelsRequest$,
  ListFlywheelsResponse$,
  ListKeyPhrasesDetectionJobs$,
  ListKeyPhrasesDetectionJobsCommand,
  ListKeyPhrasesDetectionJobsRequest$,
  ListKeyPhrasesDetectionJobsResponse$,
  ListPiiEntitiesDetectionJobs$,
  ListPiiEntitiesDetectionJobsCommand,
  ListPiiEntitiesDetectionJobsRequest$,
  ListPiiEntitiesDetectionJobsResponse$,
  ListSentimentDetectionJobs$,
  ListSentimentDetectionJobsCommand,
  ListSentimentDetectionJobsRequest$,
  ListSentimentDetectionJobsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTargetedSentimentDetectionJobs$,
  ListTargetedSentimentDetectionJobsCommand,
  ListTargetedSentimentDetectionJobsRequest$,
  ListTargetedSentimentDetectionJobsResponse$,
  ListTopicsDetectionJobs$,
  ListTopicsDetectionJobsCommand,
  ListTopicsDetectionJobsRequest$,
  ListTopicsDetectionJobsResponse$,
  MentionSentiment$,
  ModelStatus,
  ModelType,
  OutputDataConfig$,
  PageBasedErrorCode,
  PageBasedWarningCode,
  PartOfSpeechTag$,
  PartOfSpeechTagType,
  PiiEntitiesDetectionJobFilter$,
  PiiEntitiesDetectionJobProperties$,
  PiiEntitiesDetectionMaskMode,
  PiiEntitiesDetectionMode,
  PiiEntity$,
  PiiEntityType,
  PiiOutputDataConfig$,
  Point$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RedactionConfig$,
  RelationshipType,
  RelationshipsListItem$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceUnavailableException,
  ResourceUnavailableException$,
  SentimentDetectionJobFilter$,
  SentimentDetectionJobProperties$,
  SentimentScore$,
  SentimentType,
  Split,
  StartDocumentClassificationJob$,
  StartDocumentClassificationJobCommand,
  StartDocumentClassificationJobRequest$,
  StartDocumentClassificationJobResponse$,
  StartDominantLanguageDetectionJob$,
  StartDominantLanguageDetectionJobCommand,
  StartDominantLanguageDetectionJobRequest$,
  StartDominantLanguageDetectionJobResponse$,
  StartEntitiesDetectionJob$,
  StartEntitiesDetectionJobCommand,
  StartEntitiesDetectionJobRequest$,
  StartEntitiesDetectionJobResponse$,
  StartEventsDetectionJob$,
  StartEventsDetectionJobCommand,
  StartEventsDetectionJobRequest$,
  StartEventsDetectionJobResponse$,
  StartFlywheelIteration$,
  StartFlywheelIterationCommand,
  StartFlywheelIterationRequest$,
  StartFlywheelIterationResponse$,
  StartKeyPhrasesDetectionJob$,
  StartKeyPhrasesDetectionJobCommand,
  StartKeyPhrasesDetectionJobRequest$,
  StartKeyPhrasesDetectionJobResponse$,
  StartPiiEntitiesDetectionJob$,
  StartPiiEntitiesDetectionJobCommand,
  StartPiiEntitiesDetectionJobRequest$,
  StartPiiEntitiesDetectionJobResponse$,
  StartSentimentDetectionJob$,
  StartSentimentDetectionJobCommand,
  StartSentimentDetectionJobRequest$,
  StartSentimentDetectionJobResponse$,
  StartTargetedSentimentDetectionJob$,
  StartTargetedSentimentDetectionJobCommand,
  StartTargetedSentimentDetectionJobRequest$,
  StartTargetedSentimentDetectionJobResponse$,
  StartTopicsDetectionJob$,
  StartTopicsDetectionJobCommand,
  StartTopicsDetectionJobRequest$,
  StartTopicsDetectionJobResponse$,
  StopDominantLanguageDetectionJob$,
  StopDominantLanguageDetectionJobCommand,
  StopDominantLanguageDetectionJobRequest$,
  StopDominantLanguageDetectionJobResponse$,
  StopEntitiesDetectionJob$,
  StopEntitiesDetectionJobCommand,
  StopEntitiesDetectionJobRequest$,
  StopEntitiesDetectionJobResponse$,
  StopEventsDetectionJob$,
  StopEventsDetectionJobCommand,
  StopEventsDetectionJobRequest$,
  StopEventsDetectionJobResponse$,
  StopKeyPhrasesDetectionJob$,
  StopKeyPhrasesDetectionJobCommand,
  StopKeyPhrasesDetectionJobRequest$,
  StopKeyPhrasesDetectionJobResponse$,
  StopPiiEntitiesDetectionJob$,
  StopPiiEntitiesDetectionJobCommand,
  StopPiiEntitiesDetectionJobRequest$,
  StopPiiEntitiesDetectionJobResponse$,
  StopSentimentDetectionJob$,
  StopSentimentDetectionJobCommand,
  StopSentimentDetectionJobRequest$,
  StopSentimentDetectionJobResponse$,
  StopTargetedSentimentDetectionJob$,
  StopTargetedSentimentDetectionJobCommand,
  StopTargetedSentimentDetectionJobRequest$,
  StopTargetedSentimentDetectionJobResponse$,
  StopTrainingDocumentClassifier$,
  StopTrainingDocumentClassifierCommand,
  StopTrainingDocumentClassifierRequest$,
  StopTrainingDocumentClassifierResponse$,
  StopTrainingEntityRecognizer$,
  StopTrainingEntityRecognizerCommand,
  StopTrainingEntityRecognizerRequest$,
  StopTrainingEntityRecognizerResponse$,
  SyntaxLanguageCode,
  SyntaxToken$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetedSentimentDetectionJobFilter$,
  TargetedSentimentDetectionJobProperties$,
  TargetedSentimentEntity$,
  TargetedSentimentEntityType,
  TargetedSentimentMention$,
  TaskConfig$,
  TextSegment$,
  TextSizeLimitExceededException,
  TextSizeLimitExceededException$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TooManyTagKeysException,
  TooManyTagKeysException$,
  TooManyTagsException,
  TooManyTagsException$,
  TopicsDetectionJobFilter$,
  TopicsDetectionJobProperties$,
  ToxicContent$,
  ToxicContentType,
  ToxicLabels$,
  UnsupportedLanguageException,
  UnsupportedLanguageException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDataSecurityConfig$,
  UpdateEndpoint$,
  UpdateEndpointCommand,
  UpdateEndpointRequest$,
  UpdateEndpointResponse$,
  UpdateFlywheel$,
  UpdateFlywheelCommand,
  UpdateFlywheelRequest$,
  UpdateFlywheelResponse$,
  VpcConfig$,
  WarningsListItem$,
  paginateListDatasets,
  paginateListDocumentClassificationJobs,
  paginateListDocumentClassifierSummaries,
  paginateListDocumentClassifiers,
  paginateListDominantLanguageDetectionJobs,
  paginateListEndpoints,
  paginateListEntitiesDetectionJobs,
  paginateListEntityRecognizerSummaries,
  paginateListEntityRecognizers,
  paginateListEventsDetectionJobs,
  paginateListFlywheelIterationHistory,
  paginateListFlywheels,
  paginateListKeyPhrasesDetectionJobs,
  paginateListPiiEntitiesDetectionJobs,
  paginateListSentimentDetectionJobs,
  paginateListTargetedSentimentDetectionJobs,
  paginateListTopicsDetectionJobs,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ComprehendClient === "function");
assert(typeof Comprehend === "function");
// commands
assert(typeof BatchDetectDominantLanguageCommand === "function");
assert(typeof BatchDetectDominantLanguage$ === "object");
assert(typeof BatchDetectEntitiesCommand === "function");
assert(typeof BatchDetectEntities$ === "object");
assert(typeof BatchDetectKeyPhrasesCommand === "function");
assert(typeof BatchDetectKeyPhrases$ === "object");
assert(typeof BatchDetectSentimentCommand === "function");
assert(typeof BatchDetectSentiment$ === "object");
assert(typeof BatchDetectSyntaxCommand === "function");
assert(typeof BatchDetectSyntax$ === "object");
assert(typeof BatchDetectTargetedSentimentCommand === "function");
assert(typeof BatchDetectTargetedSentiment$ === "object");
assert(typeof ClassifyDocumentCommand === "function");
assert(typeof ClassifyDocument$ === "object");
assert(typeof ContainsPiiEntitiesCommand === "function");
assert(typeof ContainsPiiEntities$ === "object");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateDocumentClassifierCommand === "function");
assert(typeof CreateDocumentClassifier$ === "object");
assert(typeof CreateEndpointCommand === "function");
assert(typeof CreateEndpoint$ === "object");
assert(typeof CreateEntityRecognizerCommand === "function");
assert(typeof CreateEntityRecognizer$ === "object");
assert(typeof CreateFlywheelCommand === "function");
assert(typeof CreateFlywheel$ === "object");
assert(typeof DeleteDocumentClassifierCommand === "function");
assert(typeof DeleteDocumentClassifier$ === "object");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeleteEndpoint$ === "object");
assert(typeof DeleteEntityRecognizerCommand === "function");
assert(typeof DeleteEntityRecognizer$ === "object");
assert(typeof DeleteFlywheelCommand === "function");
assert(typeof DeleteFlywheel$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDataset$ === "object");
assert(typeof DescribeDocumentClassificationJobCommand === "function");
assert(typeof DescribeDocumentClassificationJob$ === "object");
assert(typeof DescribeDocumentClassifierCommand === "function");
assert(typeof DescribeDocumentClassifier$ === "object");
assert(typeof DescribeDominantLanguageDetectionJobCommand === "function");
assert(typeof DescribeDominantLanguageDetectionJob$ === "object");
assert(typeof DescribeEndpointCommand === "function");
assert(typeof DescribeEndpoint$ === "object");
assert(typeof DescribeEntitiesDetectionJobCommand === "function");
assert(typeof DescribeEntitiesDetectionJob$ === "object");
assert(typeof DescribeEntityRecognizerCommand === "function");
assert(typeof DescribeEntityRecognizer$ === "object");
assert(typeof DescribeEventsDetectionJobCommand === "function");
assert(typeof DescribeEventsDetectionJob$ === "object");
assert(typeof DescribeFlywheelCommand === "function");
assert(typeof DescribeFlywheel$ === "object");
assert(typeof DescribeFlywheelIterationCommand === "function");
assert(typeof DescribeFlywheelIteration$ === "object");
assert(typeof DescribeKeyPhrasesDetectionJobCommand === "function");
assert(typeof DescribeKeyPhrasesDetectionJob$ === "object");
assert(typeof DescribePiiEntitiesDetectionJobCommand === "function");
assert(typeof DescribePiiEntitiesDetectionJob$ === "object");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeResourcePolicy$ === "object");
assert(typeof DescribeSentimentDetectionJobCommand === "function");
assert(typeof DescribeSentimentDetectionJob$ === "object");
assert(typeof DescribeTargetedSentimentDetectionJobCommand === "function");
assert(typeof DescribeTargetedSentimentDetectionJob$ === "object");
assert(typeof DescribeTopicsDetectionJobCommand === "function");
assert(typeof DescribeTopicsDetectionJob$ === "object");
assert(typeof DetectDominantLanguageCommand === "function");
assert(typeof DetectDominantLanguage$ === "object");
assert(typeof DetectEntitiesCommand === "function");
assert(typeof DetectEntities$ === "object");
assert(typeof DetectKeyPhrasesCommand === "function");
assert(typeof DetectKeyPhrases$ === "object");
assert(typeof DetectPiiEntitiesCommand === "function");
assert(typeof DetectPiiEntities$ === "object");
assert(typeof DetectSentimentCommand === "function");
assert(typeof DetectSentiment$ === "object");
assert(typeof DetectSyntaxCommand === "function");
assert(typeof DetectSyntax$ === "object");
assert(typeof DetectTargetedSentimentCommand === "function");
assert(typeof DetectTargetedSentiment$ === "object");
assert(typeof DetectToxicContentCommand === "function");
assert(typeof DetectToxicContent$ === "object");
assert(typeof ImportModelCommand === "function");
assert(typeof ImportModel$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListDocumentClassificationJobsCommand === "function");
assert(typeof ListDocumentClassificationJobs$ === "object");
assert(typeof ListDocumentClassifiersCommand === "function");
assert(typeof ListDocumentClassifiers$ === "object");
assert(typeof ListDocumentClassifierSummariesCommand === "function");
assert(typeof ListDocumentClassifierSummaries$ === "object");
assert(typeof ListDominantLanguageDetectionJobsCommand === "function");
assert(typeof ListDominantLanguageDetectionJobs$ === "object");
assert(typeof ListEndpointsCommand === "function");
assert(typeof ListEndpoints$ === "object");
assert(typeof ListEntitiesDetectionJobsCommand === "function");
assert(typeof ListEntitiesDetectionJobs$ === "object");
assert(typeof ListEntityRecognizersCommand === "function");
assert(typeof ListEntityRecognizers$ === "object");
assert(typeof ListEntityRecognizerSummariesCommand === "function");
assert(typeof ListEntityRecognizerSummaries$ === "object");
assert(typeof ListEventsDetectionJobsCommand === "function");
assert(typeof ListEventsDetectionJobs$ === "object");
assert(typeof ListFlywheelIterationHistoryCommand === "function");
assert(typeof ListFlywheelIterationHistory$ === "object");
assert(typeof ListFlywheelsCommand === "function");
assert(typeof ListFlywheels$ === "object");
assert(typeof ListKeyPhrasesDetectionJobsCommand === "function");
assert(typeof ListKeyPhrasesDetectionJobs$ === "object");
assert(typeof ListPiiEntitiesDetectionJobsCommand === "function");
assert(typeof ListPiiEntitiesDetectionJobs$ === "object");
assert(typeof ListSentimentDetectionJobsCommand === "function");
assert(typeof ListSentimentDetectionJobs$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTargetedSentimentDetectionJobsCommand === "function");
assert(typeof ListTargetedSentimentDetectionJobs$ === "object");
assert(typeof ListTopicsDetectionJobsCommand === "function");
assert(typeof ListTopicsDetectionJobs$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof StartDocumentClassificationJobCommand === "function");
assert(typeof StartDocumentClassificationJob$ === "object");
assert(typeof StartDominantLanguageDetectionJobCommand === "function");
assert(typeof StartDominantLanguageDetectionJob$ === "object");
assert(typeof StartEntitiesDetectionJobCommand === "function");
assert(typeof StartEntitiesDetectionJob$ === "object");
assert(typeof StartEventsDetectionJobCommand === "function");
assert(typeof StartEventsDetectionJob$ === "object");
assert(typeof StartFlywheelIterationCommand === "function");
assert(typeof StartFlywheelIteration$ === "object");
assert(typeof StartKeyPhrasesDetectionJobCommand === "function");
assert(typeof StartKeyPhrasesDetectionJob$ === "object");
assert(typeof StartPiiEntitiesDetectionJobCommand === "function");
assert(typeof StartPiiEntitiesDetectionJob$ === "object");
assert(typeof StartSentimentDetectionJobCommand === "function");
assert(typeof StartSentimentDetectionJob$ === "object");
assert(typeof StartTargetedSentimentDetectionJobCommand === "function");
assert(typeof StartTargetedSentimentDetectionJob$ === "object");
assert(typeof StartTopicsDetectionJobCommand === "function");
assert(typeof StartTopicsDetectionJob$ === "object");
assert(typeof StopDominantLanguageDetectionJobCommand === "function");
assert(typeof StopDominantLanguageDetectionJob$ === "object");
assert(typeof StopEntitiesDetectionJobCommand === "function");
assert(typeof StopEntitiesDetectionJob$ === "object");
assert(typeof StopEventsDetectionJobCommand === "function");
assert(typeof StopEventsDetectionJob$ === "object");
assert(typeof StopKeyPhrasesDetectionJobCommand === "function");
assert(typeof StopKeyPhrasesDetectionJob$ === "object");
assert(typeof StopPiiEntitiesDetectionJobCommand === "function");
assert(typeof StopPiiEntitiesDetectionJob$ === "object");
assert(typeof StopSentimentDetectionJobCommand === "function");
assert(typeof StopSentimentDetectionJob$ === "object");
assert(typeof StopTargetedSentimentDetectionJobCommand === "function");
assert(typeof StopTargetedSentimentDetectionJob$ === "object");
assert(typeof StopTrainingDocumentClassifierCommand === "function");
assert(typeof StopTrainingDocumentClassifier$ === "object");
assert(typeof StopTrainingEntityRecognizerCommand === "function");
assert(typeof StopTrainingEntityRecognizer$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateEndpointCommand === "function");
assert(typeof UpdateEndpoint$ === "object");
assert(typeof UpdateFlywheelCommand === "function");
assert(typeof UpdateFlywheel$ === "object");
// structural schemas
assert(typeof AugmentedManifestsListItem$ === "object");
assert(typeof BatchDetectDominantLanguageItemResult$ === "object");
assert(typeof BatchDetectDominantLanguageRequest$ === "object");
assert(typeof BatchDetectDominantLanguageResponse$ === "object");
assert(typeof BatchDetectEntitiesItemResult$ === "object");
assert(typeof BatchDetectEntitiesRequest$ === "object");
assert(typeof BatchDetectEntitiesResponse$ === "object");
assert(typeof BatchDetectKeyPhrasesItemResult$ === "object");
assert(typeof BatchDetectKeyPhrasesRequest$ === "object");
assert(typeof BatchDetectKeyPhrasesResponse$ === "object");
assert(typeof BatchDetectSentimentItemResult$ === "object");
assert(typeof BatchDetectSentimentRequest$ === "object");
assert(typeof BatchDetectSentimentResponse$ === "object");
assert(typeof BatchDetectSyntaxItemResult$ === "object");
assert(typeof BatchDetectSyntaxRequest$ === "object");
assert(typeof BatchDetectSyntaxResponse$ === "object");
assert(typeof BatchDetectTargetedSentimentItemResult$ === "object");
assert(typeof BatchDetectTargetedSentimentRequest$ === "object");
assert(typeof BatchDetectTargetedSentimentResponse$ === "object");
assert(typeof BatchItemError$ === "object");
assert(typeof Block$ === "object");
assert(typeof BlockReference$ === "object");
assert(typeof BoundingBox$ === "object");
assert(typeof ChildBlock$ === "object");
assert(typeof ClassifierEvaluationMetrics$ === "object");
assert(typeof ClassifierMetadata$ === "object");
assert(typeof ClassifyDocumentRequest$ === "object");
assert(typeof ClassifyDocumentResponse$ === "object");
assert(typeof ContainsPiiEntitiesRequest$ === "object");
assert(typeof ContainsPiiEntitiesResponse$ === "object");
assert(typeof CreateDatasetRequest$ === "object");
assert(typeof CreateDatasetResponse$ === "object");
assert(typeof CreateDocumentClassifierRequest$ === "object");
assert(typeof CreateDocumentClassifierResponse$ === "object");
assert(typeof CreateEndpointRequest$ === "object");
assert(typeof CreateEndpointResponse$ === "object");
assert(typeof CreateEntityRecognizerRequest$ === "object");
assert(typeof CreateEntityRecognizerResponse$ === "object");
assert(typeof CreateFlywheelRequest$ === "object");
assert(typeof CreateFlywheelResponse$ === "object");
assert(typeof DataSecurityConfig$ === "object");
assert(typeof DatasetAugmentedManifestsListItem$ === "object");
assert(typeof DatasetDocumentClassifierInputDataConfig$ === "object");
assert(typeof DatasetEntityRecognizerAnnotations$ === "object");
assert(typeof DatasetEntityRecognizerDocuments$ === "object");
assert(typeof DatasetEntityRecognizerEntityList$ === "object");
assert(typeof DatasetEntityRecognizerInputDataConfig$ === "object");
assert(typeof DatasetFilter$ === "object");
assert(typeof DatasetInputDataConfig$ === "object");
assert(typeof DatasetProperties$ === "object");
assert(typeof DeleteDocumentClassifierRequest$ === "object");
assert(typeof DeleteDocumentClassifierResponse$ === "object");
assert(typeof DeleteEndpointRequest$ === "object");
assert(typeof DeleteEndpointResponse$ === "object");
assert(typeof DeleteEntityRecognizerRequest$ === "object");
assert(typeof DeleteEntityRecognizerResponse$ === "object");
assert(typeof DeleteFlywheelRequest$ === "object");
assert(typeof DeleteFlywheelResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DescribeDatasetRequest$ === "object");
assert(typeof DescribeDatasetResponse$ === "object");
assert(typeof DescribeDocumentClassificationJobRequest$ === "object");
assert(typeof DescribeDocumentClassificationJobResponse$ === "object");
assert(typeof DescribeDocumentClassifierRequest$ === "object");
assert(typeof DescribeDocumentClassifierResponse$ === "object");
assert(typeof DescribeDominantLanguageDetectionJobRequest$ === "object");
assert(typeof DescribeDominantLanguageDetectionJobResponse$ === "object");
assert(typeof DescribeEndpointRequest$ === "object");
assert(typeof DescribeEndpointResponse$ === "object");
assert(typeof DescribeEntitiesDetectionJobRequest$ === "object");
assert(typeof DescribeEntitiesDetectionJobResponse$ === "object");
assert(typeof DescribeEntityRecognizerRequest$ === "object");
assert(typeof DescribeEntityRecognizerResponse$ === "object");
assert(typeof DescribeEventsDetectionJobRequest$ === "object");
assert(typeof DescribeEventsDetectionJobResponse$ === "object");
assert(typeof DescribeFlywheelIterationRequest$ === "object");
assert(typeof DescribeFlywheelIterationResponse$ === "object");
assert(typeof DescribeFlywheelRequest$ === "object");
assert(typeof DescribeFlywheelResponse$ === "object");
assert(typeof DescribeKeyPhrasesDetectionJobRequest$ === "object");
assert(typeof DescribeKeyPhrasesDetectionJobResponse$ === "object");
assert(typeof DescribePiiEntitiesDetectionJobRequest$ === "object");
assert(typeof DescribePiiEntitiesDetectionJobResponse$ === "object");
assert(typeof DescribeResourcePolicyRequest$ === "object");
assert(typeof DescribeResourcePolicyResponse$ === "object");
assert(typeof DescribeSentimentDetectionJobRequest$ === "object");
assert(typeof DescribeSentimentDetectionJobResponse$ === "object");
assert(typeof DescribeTargetedSentimentDetectionJobRequest$ === "object");
assert(typeof DescribeTargetedSentimentDetectionJobResponse$ === "object");
assert(typeof DescribeTopicsDetectionJobRequest$ === "object");
assert(typeof DescribeTopicsDetectionJobResponse$ === "object");
assert(typeof DetectDominantLanguageRequest$ === "object");
assert(typeof DetectDominantLanguageResponse$ === "object");
assert(typeof DetectEntitiesRequest$ === "object");
assert(typeof DetectEntitiesResponse$ === "object");
assert(typeof DetectKeyPhrasesRequest$ === "object");
assert(typeof DetectKeyPhrasesResponse$ === "object");
assert(typeof DetectPiiEntitiesRequest$ === "object");
assert(typeof DetectPiiEntitiesResponse$ === "object");
assert(typeof DetectSentimentRequest$ === "object");
assert(typeof DetectSentimentResponse$ === "object");
assert(typeof DetectSyntaxRequest$ === "object");
assert(typeof DetectSyntaxResponse$ === "object");
assert(typeof DetectTargetedSentimentRequest$ === "object");
assert(typeof DetectTargetedSentimentResponse$ === "object");
assert(typeof DetectToxicContentRequest$ === "object");
assert(typeof DetectToxicContentResponse$ === "object");
assert(typeof DocumentClass$ === "object");
assert(typeof DocumentClassificationConfig$ === "object");
assert(typeof DocumentClassificationJobFilter$ === "object");
assert(typeof DocumentClassificationJobProperties$ === "object");
assert(typeof DocumentClassifierDocuments$ === "object");
assert(typeof DocumentClassifierFilter$ === "object");
assert(typeof DocumentClassifierInputDataConfig$ === "object");
assert(typeof DocumentClassifierOutputDataConfig$ === "object");
assert(typeof DocumentClassifierProperties$ === "object");
assert(typeof DocumentClassifierSummary$ === "object");
assert(typeof DocumentLabel$ === "object");
assert(typeof DocumentMetadata$ === "object");
assert(typeof DocumentReaderConfig$ === "object");
assert(typeof DocumentTypeListItem$ === "object");
assert(typeof DominantLanguage$ === "object");
assert(typeof DominantLanguageDetectionJobFilter$ === "object");
assert(typeof DominantLanguageDetectionJobProperties$ === "object");
assert(typeof EndpointFilter$ === "object");
assert(typeof EndpointProperties$ === "object");
assert(typeof EntitiesDetectionJobFilter$ === "object");
assert(typeof EntitiesDetectionJobProperties$ === "object");
assert(typeof Entity$ === "object");
assert(typeof EntityLabel$ === "object");
assert(typeof EntityRecognitionConfig$ === "object");
assert(typeof EntityRecognizerAnnotations$ === "object");
assert(typeof EntityRecognizerDocuments$ === "object");
assert(typeof EntityRecognizerEntityList$ === "object");
assert(typeof EntityRecognizerEvaluationMetrics$ === "object");
assert(typeof EntityRecognizerFilter$ === "object");
assert(typeof EntityRecognizerInputDataConfig$ === "object");
assert(typeof EntityRecognizerMetadata$ === "object");
assert(typeof EntityRecognizerMetadataEntityTypesListItem$ === "object");
assert(typeof EntityRecognizerOutputDataConfig$ === "object");
assert(typeof EntityRecognizerProperties$ === "object");
assert(typeof EntityRecognizerSummary$ === "object");
assert(typeof EntityTypesEvaluationMetrics$ === "object");
assert(typeof EntityTypesListItem$ === "object");
assert(typeof ErrorsListItem$ === "object");
assert(typeof EventsDetectionJobFilter$ === "object");
assert(typeof EventsDetectionJobProperties$ === "object");
assert(typeof ExtractedCharactersListItem$ === "object");
assert(typeof FlywheelFilter$ === "object");
assert(typeof FlywheelIterationFilter$ === "object");
assert(typeof FlywheelIterationProperties$ === "object");
assert(typeof FlywheelModelEvaluationMetrics$ === "object");
assert(typeof FlywheelProperties$ === "object");
assert(typeof FlywheelSummary$ === "object");
assert(typeof Geometry$ === "object");
assert(typeof ImportModelRequest$ === "object");
assert(typeof ImportModelResponse$ === "object");
assert(typeof InputDataConfig$ === "object");
assert(typeof InvalidRequestDetail$ === "object");
assert(typeof KeyPhrase$ === "object");
assert(typeof KeyPhrasesDetectionJobFilter$ === "object");
assert(typeof KeyPhrasesDetectionJobProperties$ === "object");
assert(typeof ListDatasetsRequest$ === "object");
assert(typeof ListDatasetsResponse$ === "object");
assert(typeof ListDocumentClassificationJobsRequest$ === "object");
assert(typeof ListDocumentClassificationJobsResponse$ === "object");
assert(typeof ListDocumentClassifiersRequest$ === "object");
assert(typeof ListDocumentClassifiersResponse$ === "object");
assert(typeof ListDocumentClassifierSummariesRequest$ === "object");
assert(typeof ListDocumentClassifierSummariesResponse$ === "object");
assert(typeof ListDominantLanguageDetectionJobsRequest$ === "object");
assert(typeof ListDominantLanguageDetectionJobsResponse$ === "object");
assert(typeof ListEndpointsRequest$ === "object");
assert(typeof ListEndpointsResponse$ === "object");
assert(typeof ListEntitiesDetectionJobsRequest$ === "object");
assert(typeof ListEntitiesDetectionJobsResponse$ === "object");
assert(typeof ListEntityRecognizersRequest$ === "object");
assert(typeof ListEntityRecognizersResponse$ === "object");
assert(typeof ListEntityRecognizerSummariesRequest$ === "object");
assert(typeof ListEntityRecognizerSummariesResponse$ === "object");
assert(typeof ListEventsDetectionJobsRequest$ === "object");
assert(typeof ListEventsDetectionJobsResponse$ === "object");
assert(typeof ListFlywheelIterationHistoryRequest$ === "object");
assert(typeof ListFlywheelIterationHistoryResponse$ === "object");
assert(typeof ListFlywheelsRequest$ === "object");
assert(typeof ListFlywheelsResponse$ === "object");
assert(typeof ListKeyPhrasesDetectionJobsRequest$ === "object");
assert(typeof ListKeyPhrasesDetectionJobsResponse$ === "object");
assert(typeof ListPiiEntitiesDetectionJobsRequest$ === "object");
assert(typeof ListPiiEntitiesDetectionJobsResponse$ === "object");
assert(typeof ListSentimentDetectionJobsRequest$ === "object");
assert(typeof ListSentimentDetectionJobsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTargetedSentimentDetectionJobsRequest$ === "object");
assert(typeof ListTargetedSentimentDetectionJobsResponse$ === "object");
assert(typeof ListTopicsDetectionJobsRequest$ === "object");
assert(typeof ListTopicsDetectionJobsResponse$ === "object");
assert(typeof MentionSentiment$ === "object");
assert(typeof OutputDataConfig$ === "object");
assert(typeof PartOfSpeechTag$ === "object");
assert(typeof PiiEntitiesDetectionJobFilter$ === "object");
assert(typeof PiiEntitiesDetectionJobProperties$ === "object");
assert(typeof PiiEntity$ === "object");
assert(typeof PiiOutputDataConfig$ === "object");
assert(typeof Point$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RedactionConfig$ === "object");
assert(typeof RelationshipsListItem$ === "object");
assert(typeof SentimentDetectionJobFilter$ === "object");
assert(typeof SentimentDetectionJobProperties$ === "object");
assert(typeof SentimentScore$ === "object");
assert(typeof StartDocumentClassificationJobRequest$ === "object");
assert(typeof StartDocumentClassificationJobResponse$ === "object");
assert(typeof StartDominantLanguageDetectionJobRequest$ === "object");
assert(typeof StartDominantLanguageDetectionJobResponse$ === "object");
assert(typeof StartEntitiesDetectionJobRequest$ === "object");
assert(typeof StartEntitiesDetectionJobResponse$ === "object");
assert(typeof StartEventsDetectionJobRequest$ === "object");
assert(typeof StartEventsDetectionJobResponse$ === "object");
assert(typeof StartFlywheelIterationRequest$ === "object");
assert(typeof StartFlywheelIterationResponse$ === "object");
assert(typeof StartKeyPhrasesDetectionJobRequest$ === "object");
assert(typeof StartKeyPhrasesDetectionJobResponse$ === "object");
assert(typeof StartPiiEntitiesDetectionJobRequest$ === "object");
assert(typeof StartPiiEntitiesDetectionJobResponse$ === "object");
assert(typeof StartSentimentDetectionJobRequest$ === "object");
assert(typeof StartSentimentDetectionJobResponse$ === "object");
assert(typeof StartTargetedSentimentDetectionJobRequest$ === "object");
assert(typeof StartTargetedSentimentDetectionJobResponse$ === "object");
assert(typeof StartTopicsDetectionJobRequest$ === "object");
assert(typeof StartTopicsDetectionJobResponse$ === "object");
assert(typeof StopDominantLanguageDetectionJobRequest$ === "object");
assert(typeof StopDominantLanguageDetectionJobResponse$ === "object");
assert(typeof StopEntitiesDetectionJobRequest$ === "object");
assert(typeof StopEntitiesDetectionJobResponse$ === "object");
assert(typeof StopEventsDetectionJobRequest$ === "object");
assert(typeof StopEventsDetectionJobResponse$ === "object");
assert(typeof StopKeyPhrasesDetectionJobRequest$ === "object");
assert(typeof StopKeyPhrasesDetectionJobResponse$ === "object");
assert(typeof StopPiiEntitiesDetectionJobRequest$ === "object");
assert(typeof StopPiiEntitiesDetectionJobResponse$ === "object");
assert(typeof StopSentimentDetectionJobRequest$ === "object");
assert(typeof StopSentimentDetectionJobResponse$ === "object");
assert(typeof StopTargetedSentimentDetectionJobRequest$ === "object");
assert(typeof StopTargetedSentimentDetectionJobResponse$ === "object");
assert(typeof StopTrainingDocumentClassifierRequest$ === "object");
assert(typeof StopTrainingDocumentClassifierResponse$ === "object");
assert(typeof StopTrainingEntityRecognizerRequest$ === "object");
assert(typeof StopTrainingEntityRecognizerResponse$ === "object");
assert(typeof SyntaxToken$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetedSentimentDetectionJobFilter$ === "object");
assert(typeof TargetedSentimentDetectionJobProperties$ === "object");
assert(typeof TargetedSentimentEntity$ === "object");
assert(typeof TargetedSentimentMention$ === "object");
assert(typeof TaskConfig$ === "object");
assert(typeof TextSegment$ === "object");
assert(typeof TopicsDetectionJobFilter$ === "object");
assert(typeof TopicsDetectionJobProperties$ === "object");
assert(typeof ToxicContent$ === "object");
assert(typeof ToxicLabels$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDataSecurityConfig$ === "object");
assert(typeof UpdateEndpointRequest$ === "object");
assert(typeof UpdateEndpointResponse$ === "object");
assert(typeof UpdateFlywheelRequest$ === "object");
assert(typeof UpdateFlywheelResponse$ === "object");
assert(typeof VpcConfig$ === "object");
assert(typeof WarningsListItem$ === "object");
// enums
assert(typeof AugmentedManifestsDocumentTypeFormat === "object");
assert(typeof BlockType === "object");
assert(typeof DatasetDataFormat === "object");
assert(typeof DatasetStatus === "object");
assert(typeof DatasetType === "object");
assert(typeof DocumentClassifierDataFormat === "object");
assert(typeof DocumentClassifierDocumentTypeFormat === "object");
assert(typeof DocumentClassifierMode === "object");
assert(typeof DocumentReadAction === "object");
assert(typeof DocumentReadFeatureTypes === "object");
assert(typeof DocumentReadMode === "object");
assert(typeof DocumentType === "object");
assert(typeof EndpointStatus === "object");
assert(typeof EntityRecognizerDataFormat === "object");
assert(typeof EntityType === "object");
assert(typeof FlywheelIterationStatus === "object");
assert(typeof FlywheelStatus === "object");
assert(typeof InputFormat === "object");
assert(typeof InvalidRequestDetailReason === "object");
assert(typeof InvalidRequestReason === "object");
assert(typeof JobStatus === "object");
assert(typeof LanguageCode === "object");
assert(typeof ModelStatus === "object");
assert(typeof ModelType === "object");
assert(typeof PageBasedErrorCode === "object");
assert(typeof PageBasedWarningCode === "object");
assert(typeof PartOfSpeechTagType === "object");
assert(typeof PiiEntitiesDetectionMaskMode === "object");
assert(typeof PiiEntitiesDetectionMode === "object");
assert(typeof PiiEntityType === "object");
assert(typeof RelationshipType === "object");
assert(typeof SentimentType === "object");
assert(typeof Split === "object");
assert(typeof SyntaxLanguageCode === "object");
assert(typeof TargetedSentimentEntityType === "object");
assert(typeof ToxicContentType === "object");
// errors
assert(BatchSizeLimitExceededException.prototype instanceof ComprehendServiceException);
assert(typeof BatchSizeLimitExceededException$ === "object");
assert(ConcurrentModificationException.prototype instanceof ComprehendServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(InternalServerException.prototype instanceof ComprehendServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidFilterException.prototype instanceof ComprehendServiceException);
assert(typeof InvalidFilterException$ === "object");
assert(InvalidRequestException.prototype instanceof ComprehendServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(JobNotFoundException.prototype instanceof ComprehendServiceException);
assert(typeof JobNotFoundException$ === "object");
assert(KmsKeyValidationException.prototype instanceof ComprehendServiceException);
assert(typeof KmsKeyValidationException$ === "object");
assert(ResourceInUseException.prototype instanceof ComprehendServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof ComprehendServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ComprehendServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceUnavailableException.prototype instanceof ComprehendServiceException);
assert(typeof ResourceUnavailableException$ === "object");
assert(TextSizeLimitExceededException.prototype instanceof ComprehendServiceException);
assert(typeof TextSizeLimitExceededException$ === "object");
assert(TooManyRequestsException.prototype instanceof ComprehendServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(TooManyTagKeysException.prototype instanceof ComprehendServiceException);
assert(typeof TooManyTagKeysException$ === "object");
assert(TooManyTagsException.prototype instanceof ComprehendServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnsupportedLanguageException.prototype instanceof ComprehendServiceException);
assert(typeof UnsupportedLanguageException$ === "object");
assert(ComprehendServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListDocumentClassificationJobs === "function");
assert(typeof paginateListDocumentClassifierSummaries === "function");
assert(typeof paginateListDocumentClassifiers === "function");
assert(typeof paginateListDominantLanguageDetectionJobs === "function");
assert(typeof paginateListEndpoints === "function");
assert(typeof paginateListEntitiesDetectionJobs === "function");
assert(typeof paginateListEntityRecognizerSummaries === "function");
assert(typeof paginateListEntityRecognizers === "function");
assert(typeof paginateListEventsDetectionJobs === "function");
assert(typeof paginateListFlywheelIterationHistory === "function");
assert(typeof paginateListFlywheels === "function");
assert(typeof paginateListKeyPhrasesDetectionJobs === "function");
assert(typeof paginateListPiiEntitiesDetectionJobs === "function");
assert(typeof paginateListSentimentDetectionJobs === "function");
assert(typeof paginateListTargetedSentimentDetectionJobs === "function");
assert(typeof paginateListTopicsDetectionJobs === "function");
console.log(`Comprehend index test passed.`);
