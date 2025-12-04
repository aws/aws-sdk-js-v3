import {
  AugmentedManifestsDocumentTypeFormat,
  BatchDetectDominantLanguageCommand,
  BatchDetectEntitiesCommand,
  BatchDetectKeyPhrasesCommand,
  BatchDetectSentimentCommand,
  BatchDetectSyntaxCommand,
  BatchDetectTargetedSentimentCommand,
  BlockType,
  ClassifyDocumentCommand,
  Comprehend,
  ComprehendClient,
  ComprehendServiceException,
  ContainsPiiEntitiesCommand,
  CreateDatasetCommand,
  CreateDocumentClassifierCommand,
  CreateEndpointCommand,
  CreateEntityRecognizerCommand,
  CreateFlywheelCommand,
  DatasetDataFormat,
  DatasetStatus,
  DatasetType,
  DeleteDocumentClassifierCommand,
  DeleteEndpointCommand,
  DeleteEntityRecognizerCommand,
  DeleteFlywheelCommand,
  DeleteResourcePolicyCommand,
  DescribeDatasetCommand,
  DescribeDocumentClassificationJobCommand,
  DescribeDocumentClassifierCommand,
  DescribeDominantLanguageDetectionJobCommand,
  DescribeEndpointCommand,
  DescribeEntitiesDetectionJobCommand,
  DescribeEntityRecognizerCommand,
  DescribeEventsDetectionJobCommand,
  DescribeFlywheelCommand,
  DescribeFlywheelIterationCommand,
  DescribeKeyPhrasesDetectionJobCommand,
  DescribePiiEntitiesDetectionJobCommand,
  DescribeResourcePolicyCommand,
  DescribeSentimentDetectionJobCommand,
  DescribeTargetedSentimentDetectionJobCommand,
  DescribeTopicsDetectionJobCommand,
  DetectDominantLanguageCommand,
  DetectEntitiesCommand,
  DetectKeyPhrasesCommand,
  DetectPiiEntitiesCommand,
  DetectSentimentCommand,
  DetectSyntaxCommand,
  DetectTargetedSentimentCommand,
  DetectToxicContentCommand,
  DocumentClassifierDataFormat,
  DocumentClassifierDocumentTypeFormat,
  DocumentClassifierMode,
  DocumentReadAction,
  DocumentReadFeatureTypes,
  DocumentReadMode,
  DocumentType,
  EndpointStatus,
  EntityRecognizerDataFormat,
  EntityType,
  FlywheelIterationStatus,
  FlywheelStatus,
  ImportModelCommand,
  InputFormat,
  JobStatus,
  LanguageCode,
  ListDatasetsCommand,
  ListDocumentClassificationJobsCommand,
  ListDocumentClassifierSummariesCommand,
  ListDocumentClassifiersCommand,
  ListDominantLanguageDetectionJobsCommand,
  ListEndpointsCommand,
  ListEntitiesDetectionJobsCommand,
  ListEntityRecognizerSummariesCommand,
  ListEntityRecognizersCommand,
  ListEventsDetectionJobsCommand,
  ListFlywheelIterationHistoryCommand,
  ListFlywheelsCommand,
  ListKeyPhrasesDetectionJobsCommand,
  ListPiiEntitiesDetectionJobsCommand,
  ListSentimentDetectionJobsCommand,
  ListTagsForResourceCommand,
  ListTargetedSentimentDetectionJobsCommand,
  ListTopicsDetectionJobsCommand,
  ModelStatus,
  ModelType,
  PageBasedErrorCode,
  PageBasedWarningCode,
  PartOfSpeechTagType,
  PiiEntitiesDetectionMaskMode,
  PiiEntitiesDetectionMode,
  PiiEntityType,
  PutResourcePolicyCommand,
  RelationshipType,
  SentimentType,
  Split,
  StartDocumentClassificationJobCommand,
  StartDominantLanguageDetectionJobCommand,
  StartEntitiesDetectionJobCommand,
  StartEventsDetectionJobCommand,
  StartFlywheelIterationCommand,
  StartKeyPhrasesDetectionJobCommand,
  StartPiiEntitiesDetectionJobCommand,
  StartSentimentDetectionJobCommand,
  StartTargetedSentimentDetectionJobCommand,
  StartTopicsDetectionJobCommand,
  StopDominantLanguageDetectionJobCommand,
  StopEntitiesDetectionJobCommand,
  StopEventsDetectionJobCommand,
  StopKeyPhrasesDetectionJobCommand,
  StopPiiEntitiesDetectionJobCommand,
  StopSentimentDetectionJobCommand,
  StopTargetedSentimentDetectionJobCommand,
  StopTrainingDocumentClassifierCommand,
  StopTrainingEntityRecognizerCommand,
  SyntaxLanguageCode,
  TagResourceCommand,
  TargetedSentimentEntityType,
  ToxicContentType,
  UntagResourceCommand,
  UpdateEndpointCommand,
  UpdateFlywheelCommand,
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
assert(typeof BatchDetectEntitiesCommand === "function");
assert(typeof BatchDetectKeyPhrasesCommand === "function");
assert(typeof BatchDetectSentimentCommand === "function");
assert(typeof BatchDetectSyntaxCommand === "function");
assert(typeof BatchDetectTargetedSentimentCommand === "function");
assert(typeof ClassifyDocumentCommand === "function");
assert(typeof ContainsPiiEntitiesCommand === "function");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDocumentClassifierCommand === "function");
assert(typeof CreateEndpointCommand === "function");
assert(typeof CreateEntityRecognizerCommand === "function");
assert(typeof CreateFlywheelCommand === "function");
assert(typeof DeleteDocumentClassifierCommand === "function");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeleteEntityRecognizerCommand === "function");
assert(typeof DeleteFlywheelCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDocumentClassificationJobCommand === "function");
assert(typeof DescribeDocumentClassifierCommand === "function");
assert(typeof DescribeDominantLanguageDetectionJobCommand === "function");
assert(typeof DescribeEndpointCommand === "function");
assert(typeof DescribeEntitiesDetectionJobCommand === "function");
assert(typeof DescribeEntityRecognizerCommand === "function");
assert(typeof DescribeEventsDetectionJobCommand === "function");
assert(typeof DescribeFlywheelCommand === "function");
assert(typeof DescribeFlywheelIterationCommand === "function");
assert(typeof DescribeKeyPhrasesDetectionJobCommand === "function");
assert(typeof DescribePiiEntitiesDetectionJobCommand === "function");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeSentimentDetectionJobCommand === "function");
assert(typeof DescribeTargetedSentimentDetectionJobCommand === "function");
assert(typeof DescribeTopicsDetectionJobCommand === "function");
assert(typeof DetectDominantLanguageCommand === "function");
assert(typeof DetectEntitiesCommand === "function");
assert(typeof DetectKeyPhrasesCommand === "function");
assert(typeof DetectPiiEntitiesCommand === "function");
assert(typeof DetectSentimentCommand === "function");
assert(typeof DetectSyntaxCommand === "function");
assert(typeof DetectTargetedSentimentCommand === "function");
assert(typeof DetectToxicContentCommand === "function");
assert(typeof ImportModelCommand === "function");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDocumentClassificationJobsCommand === "function");
assert(typeof ListDocumentClassifiersCommand === "function");
assert(typeof ListDocumentClassifierSummariesCommand === "function");
assert(typeof ListDominantLanguageDetectionJobsCommand === "function");
assert(typeof ListEndpointsCommand === "function");
assert(typeof ListEntitiesDetectionJobsCommand === "function");
assert(typeof ListEntityRecognizersCommand === "function");
assert(typeof ListEntityRecognizerSummariesCommand === "function");
assert(typeof ListEventsDetectionJobsCommand === "function");
assert(typeof ListFlywheelIterationHistoryCommand === "function");
assert(typeof ListFlywheelsCommand === "function");
assert(typeof ListKeyPhrasesDetectionJobsCommand === "function");
assert(typeof ListPiiEntitiesDetectionJobsCommand === "function");
assert(typeof ListSentimentDetectionJobsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTargetedSentimentDetectionJobsCommand === "function");
assert(typeof ListTopicsDetectionJobsCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof StartDocumentClassificationJobCommand === "function");
assert(typeof StartDominantLanguageDetectionJobCommand === "function");
assert(typeof StartEntitiesDetectionJobCommand === "function");
assert(typeof StartEventsDetectionJobCommand === "function");
assert(typeof StartFlywheelIterationCommand === "function");
assert(typeof StartKeyPhrasesDetectionJobCommand === "function");
assert(typeof StartPiiEntitiesDetectionJobCommand === "function");
assert(typeof StartSentimentDetectionJobCommand === "function");
assert(typeof StartTargetedSentimentDetectionJobCommand === "function");
assert(typeof StartTopicsDetectionJobCommand === "function");
assert(typeof StopDominantLanguageDetectionJobCommand === "function");
assert(typeof StopEntitiesDetectionJobCommand === "function");
assert(typeof StopEventsDetectionJobCommand === "function");
assert(typeof StopKeyPhrasesDetectionJobCommand === "function");
assert(typeof StopPiiEntitiesDetectionJobCommand === "function");
assert(typeof StopSentimentDetectionJobCommand === "function");
assert(typeof StopTargetedSentimentDetectionJobCommand === "function");
assert(typeof StopTrainingDocumentClassifierCommand === "function");
assert(typeof StopTrainingEntityRecognizerCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateEndpointCommand === "function");
assert(typeof UpdateFlywheelCommand === "function");
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
