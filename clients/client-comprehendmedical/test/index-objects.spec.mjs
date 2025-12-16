import {
  Attribute$,
  AttributeName,
  Characters$,
  ComprehendMedical,
  ComprehendMedicalAsyncJobFilter$,
  ComprehendMedicalAsyncJobProperties$,
  ComprehendMedicalClient,
  ComprehendMedicalServiceException,
  DescribeEntitiesDetectionV2Job$,
  DescribeEntitiesDetectionV2JobCommand,
  DescribeEntitiesDetectionV2JobRequest$,
  DescribeEntitiesDetectionV2JobResponse$,
  DescribeICD10CMInferenceJob$,
  DescribeICD10CMInferenceJobCommand,
  DescribeICD10CMInferenceJobRequest$,
  DescribeICD10CMInferenceJobResponse$,
  DescribePHIDetectionJob$,
  DescribePHIDetectionJobCommand,
  DescribePHIDetectionJobRequest$,
  DescribePHIDetectionJobResponse$,
  DescribeRxNormInferenceJob$,
  DescribeRxNormInferenceJobCommand,
  DescribeRxNormInferenceJobRequest$,
  DescribeRxNormInferenceJobResponse$,
  DescribeSNOMEDCTInferenceJob$,
  DescribeSNOMEDCTInferenceJobCommand,
  DescribeSNOMEDCTInferenceJobRequest$,
  DescribeSNOMEDCTInferenceJobResponse$,
  DetectEntities$,
  DetectEntitiesCommand,
  DetectEntitiesRequest$,
  DetectEntitiesResponse$,
  DetectEntitiesV2$,
  DetectEntitiesV2Command,
  DetectEntitiesV2Request$,
  DetectEntitiesV2Response$,
  DetectPHI$,
  DetectPHICommand,
  DetectPHIRequest$,
  DetectPHIResponse$,
  Entity$,
  EntitySubType,
  EntityType,
  ICD10CMAttribute$,
  ICD10CMAttributeType,
  ICD10CMConcept$,
  ICD10CMEntity$,
  ICD10CMEntityCategory,
  ICD10CMEntityType,
  ICD10CMRelationshipType,
  ICD10CMTrait$,
  ICD10CMTraitName,
  InferICD10CM$,
  InferICD10CMCommand,
  InferICD10CMRequest$,
  InferICD10CMResponse$,
  InferRxNorm$,
  InferRxNormCommand,
  InferRxNormRequest$,
  InferRxNormResponse$,
  InferSNOMEDCT$,
  InferSNOMEDCTCommand,
  InferSNOMEDCTRequest$,
  InferSNOMEDCTResponse$,
  InputDataConfig$,
  InternalServerException,
  InternalServerException$,
  InvalidEncodingException,
  InvalidEncodingException$,
  InvalidRequestException,
  InvalidRequestException$,
  JobStatus,
  LanguageCode,
  ListEntitiesDetectionV2Jobs$,
  ListEntitiesDetectionV2JobsCommand,
  ListEntitiesDetectionV2JobsRequest$,
  ListEntitiesDetectionV2JobsResponse$,
  ListICD10CMInferenceJobs$,
  ListICD10CMInferenceJobsCommand,
  ListICD10CMInferenceJobsRequest$,
  ListICD10CMInferenceJobsResponse$,
  ListPHIDetectionJobs$,
  ListPHIDetectionJobsCommand,
  ListPHIDetectionJobsRequest$,
  ListPHIDetectionJobsResponse$,
  ListRxNormInferenceJobs$,
  ListRxNormInferenceJobsCommand,
  ListRxNormInferenceJobsRequest$,
  ListRxNormInferenceJobsResponse$,
  ListSNOMEDCTInferenceJobs$,
  ListSNOMEDCTInferenceJobsCommand,
  ListSNOMEDCTInferenceJobsRequest$,
  ListSNOMEDCTInferenceJobsResponse$,
  OutputDataConfig$,
  RelationshipType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RxNormAttribute$,
  RxNormAttributeType,
  RxNormConcept$,
  RxNormEntity$,
  RxNormEntityCategory,
  RxNormEntityType,
  RxNormTrait$,
  RxNormTraitName,
  SNOMEDCTAttribute$,
  SNOMEDCTAttributeType,
  SNOMEDCTConcept$,
  SNOMEDCTDetails$,
  SNOMEDCTEntity$,
  SNOMEDCTEntityCategory,
  SNOMEDCTEntityType,
  SNOMEDCTRelationshipType,
  SNOMEDCTTrait$,
  SNOMEDCTTraitName,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StartEntitiesDetectionV2Job$,
  StartEntitiesDetectionV2JobCommand,
  StartEntitiesDetectionV2JobRequest$,
  StartEntitiesDetectionV2JobResponse$,
  StartICD10CMInferenceJob$,
  StartICD10CMInferenceJobCommand,
  StartICD10CMInferenceJobRequest$,
  StartICD10CMInferenceJobResponse$,
  StartPHIDetectionJob$,
  StartPHIDetectionJobCommand,
  StartPHIDetectionJobRequest$,
  StartPHIDetectionJobResponse$,
  StartRxNormInferenceJob$,
  StartRxNormInferenceJobCommand,
  StartRxNormInferenceJobRequest$,
  StartRxNormInferenceJobResponse$,
  StartSNOMEDCTInferenceJob$,
  StartSNOMEDCTInferenceJobCommand,
  StartSNOMEDCTInferenceJobRequest$,
  StartSNOMEDCTInferenceJobResponse$,
  StopEntitiesDetectionV2Job$,
  StopEntitiesDetectionV2JobCommand,
  StopEntitiesDetectionV2JobRequest$,
  StopEntitiesDetectionV2JobResponse$,
  StopICD10CMInferenceJob$,
  StopICD10CMInferenceJobCommand,
  StopICD10CMInferenceJobRequest$,
  StopICD10CMInferenceJobResponse$,
  StopPHIDetectionJob$,
  StopPHIDetectionJobCommand,
  StopPHIDetectionJobRequest$,
  StopPHIDetectionJobResponse$,
  StopRxNormInferenceJob$,
  StopRxNormInferenceJobCommand,
  StopRxNormInferenceJobRequest$,
  StopRxNormInferenceJobResponse$,
  StopSNOMEDCTInferenceJob$,
  StopSNOMEDCTInferenceJobCommand,
  StopSNOMEDCTInferenceJobRequest$,
  StopSNOMEDCTInferenceJobResponse$,
  TextSizeLimitExceededException,
  TextSizeLimitExceededException$,
  TooManyRequestsException,
  TooManyRequestsException$,
  Trait$,
  UnmappedAttribute$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ComprehendMedicalClient === "function");
assert(typeof ComprehendMedical === "function");
// commands
assert(typeof DescribeEntitiesDetectionV2JobCommand === "function");
assert(typeof DescribeEntitiesDetectionV2Job$ === "object");
assert(typeof DescribeICD10CMInferenceJobCommand === "function");
assert(typeof DescribeICD10CMInferenceJob$ === "object");
assert(typeof DescribePHIDetectionJobCommand === "function");
assert(typeof DescribePHIDetectionJob$ === "object");
assert(typeof DescribeRxNormInferenceJobCommand === "function");
assert(typeof DescribeRxNormInferenceJob$ === "object");
assert(typeof DescribeSNOMEDCTInferenceJobCommand === "function");
assert(typeof DescribeSNOMEDCTInferenceJob$ === "object");
assert(typeof DetectEntitiesCommand === "function");
assert(typeof DetectEntities$ === "object");
assert(typeof DetectEntitiesV2Command === "function");
assert(typeof DetectEntitiesV2$ === "object");
assert(typeof DetectPHICommand === "function");
assert(typeof DetectPHI$ === "object");
assert(typeof InferICD10CMCommand === "function");
assert(typeof InferICD10CM$ === "object");
assert(typeof InferRxNormCommand === "function");
assert(typeof InferRxNorm$ === "object");
assert(typeof InferSNOMEDCTCommand === "function");
assert(typeof InferSNOMEDCT$ === "object");
assert(typeof ListEntitiesDetectionV2JobsCommand === "function");
assert(typeof ListEntitiesDetectionV2Jobs$ === "object");
assert(typeof ListICD10CMInferenceJobsCommand === "function");
assert(typeof ListICD10CMInferenceJobs$ === "object");
assert(typeof ListPHIDetectionJobsCommand === "function");
assert(typeof ListPHIDetectionJobs$ === "object");
assert(typeof ListRxNormInferenceJobsCommand === "function");
assert(typeof ListRxNormInferenceJobs$ === "object");
assert(typeof ListSNOMEDCTInferenceJobsCommand === "function");
assert(typeof ListSNOMEDCTInferenceJobs$ === "object");
assert(typeof StartEntitiesDetectionV2JobCommand === "function");
assert(typeof StartEntitiesDetectionV2Job$ === "object");
assert(typeof StartICD10CMInferenceJobCommand === "function");
assert(typeof StartICD10CMInferenceJob$ === "object");
assert(typeof StartPHIDetectionJobCommand === "function");
assert(typeof StartPHIDetectionJob$ === "object");
assert(typeof StartRxNormInferenceJobCommand === "function");
assert(typeof StartRxNormInferenceJob$ === "object");
assert(typeof StartSNOMEDCTInferenceJobCommand === "function");
assert(typeof StartSNOMEDCTInferenceJob$ === "object");
assert(typeof StopEntitiesDetectionV2JobCommand === "function");
assert(typeof StopEntitiesDetectionV2Job$ === "object");
assert(typeof StopICD10CMInferenceJobCommand === "function");
assert(typeof StopICD10CMInferenceJob$ === "object");
assert(typeof StopPHIDetectionJobCommand === "function");
assert(typeof StopPHIDetectionJob$ === "object");
assert(typeof StopRxNormInferenceJobCommand === "function");
assert(typeof StopRxNormInferenceJob$ === "object");
assert(typeof StopSNOMEDCTInferenceJobCommand === "function");
assert(typeof StopSNOMEDCTInferenceJob$ === "object");
// structural schemas
assert(typeof Attribute$ === "object");
assert(typeof Characters$ === "object");
assert(typeof ComprehendMedicalAsyncJobFilter$ === "object");
assert(typeof ComprehendMedicalAsyncJobProperties$ === "object");
assert(typeof DescribeEntitiesDetectionV2JobRequest$ === "object");
assert(typeof DescribeEntitiesDetectionV2JobResponse$ === "object");
assert(typeof DescribeICD10CMInferenceJobRequest$ === "object");
assert(typeof DescribeICD10CMInferenceJobResponse$ === "object");
assert(typeof DescribePHIDetectionJobRequest$ === "object");
assert(typeof DescribePHIDetectionJobResponse$ === "object");
assert(typeof DescribeRxNormInferenceJobRequest$ === "object");
assert(typeof DescribeRxNormInferenceJobResponse$ === "object");
assert(typeof DescribeSNOMEDCTInferenceJobRequest$ === "object");
assert(typeof DescribeSNOMEDCTInferenceJobResponse$ === "object");
assert(typeof DetectEntitiesRequest$ === "object");
assert(typeof DetectEntitiesResponse$ === "object");
assert(typeof DetectEntitiesV2Request$ === "object");
assert(typeof DetectEntitiesV2Response$ === "object");
assert(typeof DetectPHIRequest$ === "object");
assert(typeof DetectPHIResponse$ === "object");
assert(typeof Entity$ === "object");
assert(typeof ICD10CMAttribute$ === "object");
assert(typeof ICD10CMConcept$ === "object");
assert(typeof ICD10CMEntity$ === "object");
assert(typeof ICD10CMTrait$ === "object");
assert(typeof InferICD10CMRequest$ === "object");
assert(typeof InferICD10CMResponse$ === "object");
assert(typeof InferRxNormRequest$ === "object");
assert(typeof InferRxNormResponse$ === "object");
assert(typeof InferSNOMEDCTRequest$ === "object");
assert(typeof InferSNOMEDCTResponse$ === "object");
assert(typeof InputDataConfig$ === "object");
assert(typeof ListEntitiesDetectionV2JobsRequest$ === "object");
assert(typeof ListEntitiesDetectionV2JobsResponse$ === "object");
assert(typeof ListICD10CMInferenceJobsRequest$ === "object");
assert(typeof ListICD10CMInferenceJobsResponse$ === "object");
assert(typeof ListPHIDetectionJobsRequest$ === "object");
assert(typeof ListPHIDetectionJobsResponse$ === "object");
assert(typeof ListRxNormInferenceJobsRequest$ === "object");
assert(typeof ListRxNormInferenceJobsResponse$ === "object");
assert(typeof ListSNOMEDCTInferenceJobsRequest$ === "object");
assert(typeof ListSNOMEDCTInferenceJobsResponse$ === "object");
assert(typeof OutputDataConfig$ === "object");
assert(typeof RxNormAttribute$ === "object");
assert(typeof RxNormConcept$ === "object");
assert(typeof RxNormEntity$ === "object");
assert(typeof RxNormTrait$ === "object");
assert(typeof SNOMEDCTAttribute$ === "object");
assert(typeof SNOMEDCTConcept$ === "object");
assert(typeof SNOMEDCTDetails$ === "object");
assert(typeof SNOMEDCTEntity$ === "object");
assert(typeof SNOMEDCTTrait$ === "object");
assert(typeof StartEntitiesDetectionV2JobRequest$ === "object");
assert(typeof StartEntitiesDetectionV2JobResponse$ === "object");
assert(typeof StartICD10CMInferenceJobRequest$ === "object");
assert(typeof StartICD10CMInferenceJobResponse$ === "object");
assert(typeof StartPHIDetectionJobRequest$ === "object");
assert(typeof StartPHIDetectionJobResponse$ === "object");
assert(typeof StartRxNormInferenceJobRequest$ === "object");
assert(typeof StartRxNormInferenceJobResponse$ === "object");
assert(typeof StartSNOMEDCTInferenceJobRequest$ === "object");
assert(typeof StartSNOMEDCTInferenceJobResponse$ === "object");
assert(typeof StopEntitiesDetectionV2JobRequest$ === "object");
assert(typeof StopEntitiesDetectionV2JobResponse$ === "object");
assert(typeof StopICD10CMInferenceJobRequest$ === "object");
assert(typeof StopICD10CMInferenceJobResponse$ === "object");
assert(typeof StopPHIDetectionJobRequest$ === "object");
assert(typeof StopPHIDetectionJobResponse$ === "object");
assert(typeof StopRxNormInferenceJobRequest$ === "object");
assert(typeof StopRxNormInferenceJobResponse$ === "object");
assert(typeof StopSNOMEDCTInferenceJobRequest$ === "object");
assert(typeof StopSNOMEDCTInferenceJobResponse$ === "object");
assert(typeof Trait$ === "object");
assert(typeof UnmappedAttribute$ === "object");
// enums
assert(typeof AttributeName === "object");
assert(typeof EntitySubType === "object");
assert(typeof EntityType === "object");
assert(typeof ICD10CMAttributeType === "object");
assert(typeof ICD10CMEntityCategory === "object");
assert(typeof ICD10CMEntityType === "object");
assert(typeof ICD10CMRelationshipType === "object");
assert(typeof ICD10CMTraitName === "object");
assert(typeof JobStatus === "object");
assert(typeof LanguageCode === "object");
assert(typeof RelationshipType === "object");
assert(typeof RxNormAttributeType === "object");
assert(typeof RxNormEntityCategory === "object");
assert(typeof RxNormEntityType === "object");
assert(typeof RxNormTraitName === "object");
assert(typeof SNOMEDCTAttributeType === "object");
assert(typeof SNOMEDCTEntityCategory === "object");
assert(typeof SNOMEDCTEntityType === "object");
assert(typeof SNOMEDCTRelationshipType === "object");
assert(typeof SNOMEDCTTraitName === "object");
// errors
assert(InternalServerException.prototype instanceof ComprehendMedicalServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidEncodingException.prototype instanceof ComprehendMedicalServiceException);
assert(typeof InvalidEncodingException$ === "object");
assert(InvalidRequestException.prototype instanceof ComprehendMedicalServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ComprehendMedicalServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ComprehendMedicalServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TextSizeLimitExceededException.prototype instanceof ComprehendMedicalServiceException);
assert(typeof TextSizeLimitExceededException$ === "object");
assert(TooManyRequestsException.prototype instanceof ComprehendMedicalServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ValidationException.prototype instanceof ComprehendMedicalServiceException);
assert(typeof ValidationException$ === "object");
assert(ComprehendMedicalServiceException.prototype instanceof Error);
console.log(`ComprehendMedical index test passed.`);
