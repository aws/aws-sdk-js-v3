import {
  AccessDeniedException,
  AdapterVersionStatus,
  AnalyzeDocumentCommand,
  AnalyzeExpenseCommand,
  AnalyzeIDCommand,
  AutoUpdate,
  BadDocumentException,
  BlockType,
  ConflictException,
  ContentClassifier,
  CreateAdapterCommand,
  CreateAdapterVersionCommand,
  DeleteAdapterCommand,
  DeleteAdapterVersionCommand,
  DetectDocumentTextCommand,
  DocumentTooLargeException,
  EntityType,
  FeatureType,
  GetAdapterCommand,
  GetAdapterVersionCommand,
  GetDocumentAnalysisCommand,
  GetDocumentTextDetectionCommand,
  GetExpenseAnalysisCommand,
  GetLendingAnalysisCommand,
  GetLendingAnalysisSummaryCommand,
  HumanLoopQuotaExceededException,
  IdempotentParameterMismatchException,
  InternalServerError,
  InvalidJobIdException,
  InvalidKMSKeyException,
  InvalidParameterException,
  InvalidS3ObjectException,
  JobStatus,
  LimitExceededException,
  ListAdapterVersionsCommand,
  ListAdaptersCommand,
  ListTagsForResourceCommand,
  ProvisionedThroughputExceededException,
  RelationshipType,
  ResourceNotFoundException,
  SelectionStatus,
  ServiceQuotaExceededException,
  StartDocumentAnalysisCommand,
  StartDocumentTextDetectionCommand,
  StartExpenseAnalysisCommand,
  StartLendingAnalysisCommand,
  TagResourceCommand,
  TextType,
  Textract,
  TextractClient,
  TextractServiceException,
  ThrottlingException,
  UnsupportedDocumentException,
  UntagResourceCommand,
  UpdateAdapterCommand,
  ValidationException,
  ValueType,
  paginateListAdapterVersions,
  paginateListAdapters,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TextractClient === "function");
assert(typeof Textract === "function");
// commands
assert(typeof AnalyzeDocumentCommand === "function");
assert(typeof AnalyzeExpenseCommand === "function");
assert(typeof AnalyzeIDCommand === "function");
assert(typeof CreateAdapterCommand === "function");
assert(typeof CreateAdapterVersionCommand === "function");
assert(typeof DeleteAdapterCommand === "function");
assert(typeof DeleteAdapterVersionCommand === "function");
assert(typeof DetectDocumentTextCommand === "function");
assert(typeof GetAdapterCommand === "function");
assert(typeof GetAdapterVersionCommand === "function");
assert(typeof GetDocumentAnalysisCommand === "function");
assert(typeof GetDocumentTextDetectionCommand === "function");
assert(typeof GetExpenseAnalysisCommand === "function");
assert(typeof GetLendingAnalysisCommand === "function");
assert(typeof GetLendingAnalysisSummaryCommand === "function");
assert(typeof ListAdaptersCommand === "function");
assert(typeof ListAdapterVersionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartDocumentAnalysisCommand === "function");
assert(typeof StartDocumentTextDetectionCommand === "function");
assert(typeof StartExpenseAnalysisCommand === "function");
assert(typeof StartLendingAnalysisCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAdapterCommand === "function");
// enums
assert(typeof AdapterVersionStatus === "object");
assert(typeof AutoUpdate === "object");
assert(typeof BlockType === "object");
assert(typeof ContentClassifier === "object");
assert(typeof EntityType === "object");
assert(typeof FeatureType === "object");
assert(typeof JobStatus === "object");
assert(typeof RelationshipType === "object");
assert(typeof SelectionStatus === "object");
assert(typeof TextType === "object");
assert(typeof ValueType === "object");
// errors
assert(AccessDeniedException.prototype instanceof TextractServiceException);
assert(BadDocumentException.prototype instanceof TextractServiceException);
assert(ConflictException.prototype instanceof TextractServiceException);
assert(DocumentTooLargeException.prototype instanceof TextractServiceException);
assert(HumanLoopQuotaExceededException.prototype instanceof TextractServiceException);
assert(IdempotentParameterMismatchException.prototype instanceof TextractServiceException);
assert(InternalServerError.prototype instanceof TextractServiceException);
assert(InvalidJobIdException.prototype instanceof TextractServiceException);
assert(InvalidKMSKeyException.prototype instanceof TextractServiceException);
assert(InvalidParameterException.prototype instanceof TextractServiceException);
assert(InvalidS3ObjectException.prototype instanceof TextractServiceException);
assert(LimitExceededException.prototype instanceof TextractServiceException);
assert(ProvisionedThroughputExceededException.prototype instanceof TextractServiceException);
assert(ResourceNotFoundException.prototype instanceof TextractServiceException);
assert(ServiceQuotaExceededException.prototype instanceof TextractServiceException);
assert(ThrottlingException.prototype instanceof TextractServiceException);
assert(UnsupportedDocumentException.prototype instanceof TextractServiceException);
assert(ValidationException.prototype instanceof TextractServiceException);
assert(TextractServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAdapterVersions === "function");
assert(typeof paginateListAdapters === "function");
console.log(`Textract index test passed.`);
