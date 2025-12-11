import {
  AttributeName,
  ComprehendMedical,
  ComprehendMedicalClient,
  ComprehendMedicalServiceException,
  DescribeEntitiesDetectionV2JobCommand,
  DescribeICD10CMInferenceJobCommand,
  DescribePHIDetectionJobCommand,
  DescribeRxNormInferenceJobCommand,
  DescribeSNOMEDCTInferenceJobCommand,
  DetectEntitiesCommand,
  DetectEntitiesV2Command,
  DetectPHICommand,
  EntitySubType,
  EntityType,
  ICD10CMAttributeType,
  ICD10CMEntityCategory,
  ICD10CMEntityType,
  ICD10CMRelationshipType,
  ICD10CMTraitName,
  InferICD10CMCommand,
  InferRxNormCommand,
  InferSNOMEDCTCommand,
  InternalServerException,
  InvalidEncodingException,
  InvalidRequestException,
  JobStatus,
  LanguageCode,
  ListEntitiesDetectionV2JobsCommand,
  ListICD10CMInferenceJobsCommand,
  ListPHIDetectionJobsCommand,
  ListRxNormInferenceJobsCommand,
  ListSNOMEDCTInferenceJobsCommand,
  RelationshipType,
  ResourceNotFoundException,
  RxNormAttributeType,
  RxNormEntityCategory,
  RxNormEntityType,
  RxNormTraitName,
  SNOMEDCTAttributeType,
  SNOMEDCTEntityCategory,
  SNOMEDCTEntityType,
  SNOMEDCTRelationshipType,
  SNOMEDCTTraitName,
  ServiceUnavailableException,
  StartEntitiesDetectionV2JobCommand,
  StartICD10CMInferenceJobCommand,
  StartPHIDetectionJobCommand,
  StartRxNormInferenceJobCommand,
  StartSNOMEDCTInferenceJobCommand,
  StopEntitiesDetectionV2JobCommand,
  StopICD10CMInferenceJobCommand,
  StopPHIDetectionJobCommand,
  StopRxNormInferenceJobCommand,
  StopSNOMEDCTInferenceJobCommand,
  TextSizeLimitExceededException,
  TooManyRequestsException,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ComprehendMedicalClient === "function");
assert(typeof ComprehendMedical === "function");
// commands
assert(typeof DescribeEntitiesDetectionV2JobCommand === "function");
assert(typeof DescribeICD10CMInferenceJobCommand === "function");
assert(typeof DescribePHIDetectionJobCommand === "function");
assert(typeof DescribeRxNormInferenceJobCommand === "function");
assert(typeof DescribeSNOMEDCTInferenceJobCommand === "function");
assert(typeof DetectEntitiesCommand === "function");
assert(typeof DetectEntitiesV2Command === "function");
assert(typeof DetectPHICommand === "function");
assert(typeof InferICD10CMCommand === "function");
assert(typeof InferRxNormCommand === "function");
assert(typeof InferSNOMEDCTCommand === "function");
assert(typeof ListEntitiesDetectionV2JobsCommand === "function");
assert(typeof ListICD10CMInferenceJobsCommand === "function");
assert(typeof ListPHIDetectionJobsCommand === "function");
assert(typeof ListRxNormInferenceJobsCommand === "function");
assert(typeof ListSNOMEDCTInferenceJobsCommand === "function");
assert(typeof StartEntitiesDetectionV2JobCommand === "function");
assert(typeof StartICD10CMInferenceJobCommand === "function");
assert(typeof StartPHIDetectionJobCommand === "function");
assert(typeof StartRxNormInferenceJobCommand === "function");
assert(typeof StartSNOMEDCTInferenceJobCommand === "function");
assert(typeof StopEntitiesDetectionV2JobCommand === "function");
assert(typeof StopICD10CMInferenceJobCommand === "function");
assert(typeof StopPHIDetectionJobCommand === "function");
assert(typeof StopRxNormInferenceJobCommand === "function");
assert(typeof StopSNOMEDCTInferenceJobCommand === "function");
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
assert(InvalidEncodingException.prototype instanceof ComprehendMedicalServiceException);
assert(InvalidRequestException.prototype instanceof ComprehendMedicalServiceException);
assert(ResourceNotFoundException.prototype instanceof ComprehendMedicalServiceException);
assert(ServiceUnavailableException.prototype instanceof ComprehendMedicalServiceException);
assert(TextSizeLimitExceededException.prototype instanceof ComprehendMedicalServiceException);
assert(TooManyRequestsException.prototype instanceof ComprehendMedicalServiceException);
assert(ValidationException.prototype instanceof ComprehendMedicalServiceException);
assert(ComprehendMedicalServiceException.prototype instanceof Error);
console.log(`ComprehendMedical index test passed.`);
