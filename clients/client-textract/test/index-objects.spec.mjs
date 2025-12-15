import {
  AccessDeniedException,
  AccessDeniedException$,
  Adapter$,
  AdapterOverview$,
  AdapterVersionDatasetConfig$,
  AdapterVersionEvaluationMetric$,
  AdapterVersionOverview$,
  AdapterVersionStatus,
  AdaptersConfig$,
  AnalyzeDocument$,
  AnalyzeDocumentCommand,
  AnalyzeDocumentRequest$,
  AnalyzeDocumentResponse$,
  AnalyzeExpense$,
  AnalyzeExpenseCommand,
  AnalyzeExpenseRequest$,
  AnalyzeExpenseResponse$,
  AnalyzeID$,
  AnalyzeIDCommand,
  AnalyzeIDDetections$,
  AnalyzeIDRequest$,
  AnalyzeIDResponse$,
  AutoUpdate,
  BadDocumentException,
  BadDocumentException$,
  Block$,
  BlockType,
  BoundingBox$,
  ConflictException,
  ConflictException$,
  ContentClassifier,
  CreateAdapter$,
  CreateAdapterCommand,
  CreateAdapterRequest$,
  CreateAdapterResponse$,
  CreateAdapterVersion$,
  CreateAdapterVersionCommand,
  CreateAdapterVersionRequest$,
  CreateAdapterVersionResponse$,
  DeleteAdapter$,
  DeleteAdapterCommand,
  DeleteAdapterRequest$,
  DeleteAdapterResponse$,
  DeleteAdapterVersion$,
  DeleteAdapterVersionCommand,
  DeleteAdapterVersionRequest$,
  DeleteAdapterVersionResponse$,
  DetectDocumentText$,
  DetectDocumentTextCommand,
  DetectDocumentTextRequest$,
  DetectDocumentTextResponse$,
  DetectedSignature$,
  Document$,
  DocumentGroup$,
  DocumentLocation$,
  DocumentMetadata$,
  DocumentTooLargeException,
  DocumentTooLargeException$,
  EntityType,
  EvaluationMetric$,
  ExpenseCurrency$,
  ExpenseDetection$,
  ExpenseDocument$,
  ExpenseField$,
  ExpenseGroupProperty$,
  ExpenseType$,
  Extraction$,
  FeatureType,
  Geometry$,
  GetAdapter$,
  GetAdapterCommand,
  GetAdapterRequest$,
  GetAdapterResponse$,
  GetAdapterVersion$,
  GetAdapterVersionCommand,
  GetAdapterVersionRequest$,
  GetAdapterVersionResponse$,
  GetDocumentAnalysis$,
  GetDocumentAnalysisCommand,
  GetDocumentAnalysisRequest$,
  GetDocumentAnalysisResponse$,
  GetDocumentTextDetection$,
  GetDocumentTextDetectionCommand,
  GetDocumentTextDetectionRequest$,
  GetDocumentTextDetectionResponse$,
  GetExpenseAnalysis$,
  GetExpenseAnalysisCommand,
  GetExpenseAnalysisRequest$,
  GetExpenseAnalysisResponse$,
  GetLendingAnalysis$,
  GetLendingAnalysisCommand,
  GetLendingAnalysisRequest$,
  GetLendingAnalysisResponse$,
  GetLendingAnalysisSummary$,
  GetLendingAnalysisSummaryCommand,
  GetLendingAnalysisSummaryRequest$,
  GetLendingAnalysisSummaryResponse$,
  HumanLoopActivationOutput$,
  HumanLoopConfig$,
  HumanLoopDataAttributes$,
  HumanLoopQuotaExceededException,
  HumanLoopQuotaExceededException$,
  IdempotentParameterMismatchException,
  IdempotentParameterMismatchException$,
  IdentityDocument$,
  IdentityDocumentField$,
  InternalServerError,
  InternalServerError$,
  InvalidJobIdException,
  InvalidJobIdException$,
  InvalidKMSKeyException,
  InvalidKMSKeyException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidS3ObjectException,
  InvalidS3ObjectException$,
  JobStatus,
  LendingDetection$,
  LendingDocument$,
  LendingField$,
  LendingResult$,
  LendingSummary$,
  LimitExceededException,
  LimitExceededException$,
  LineItemFields$,
  LineItemGroup$,
  ListAdapterVersions$,
  ListAdapterVersionsCommand,
  ListAdapterVersionsRequest$,
  ListAdapterVersionsResponse$,
  ListAdapters$,
  ListAdaptersCommand,
  ListAdaptersRequest$,
  ListAdaptersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NormalizedValue$,
  NotificationChannel$,
  OutputConfig$,
  PageClassification$,
  Point$,
  Prediction$,
  ProvisionedThroughputExceededException,
  ProvisionedThroughputExceededException$,
  QueriesConfig$,
  Query$,
  Relationship$,
  RelationshipType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Object$,
  SelectionStatus,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SignatureDetection$,
  SplitDocument$,
  StartDocumentAnalysis$,
  StartDocumentAnalysisCommand,
  StartDocumentAnalysisRequest$,
  StartDocumentAnalysisResponse$,
  StartDocumentTextDetection$,
  StartDocumentTextDetectionCommand,
  StartDocumentTextDetectionRequest$,
  StartDocumentTextDetectionResponse$,
  StartExpenseAnalysis$,
  StartExpenseAnalysisCommand,
  StartExpenseAnalysisRequest$,
  StartExpenseAnalysisResponse$,
  StartLendingAnalysis$,
  StartLendingAnalysisCommand,
  StartLendingAnalysisRequest$,
  StartLendingAnalysisResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TextType,
  Textract,
  TextractClient,
  TextractServiceException,
  ThrottlingException,
  ThrottlingException$,
  UndetectedSignature$,
  UnsupportedDocumentException,
  UnsupportedDocumentException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAdapter$,
  UpdateAdapterCommand,
  UpdateAdapterRequest$,
  UpdateAdapterResponse$,
  ValidationException,
  ValidationException$,
  ValueType,
  Warning$,
  paginateListAdapterVersions,
  paginateListAdapters,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TextractClient === "function");
assert(typeof Textract === "function");
// commands
assert(typeof AnalyzeDocumentCommand === "function");
assert(typeof AnalyzeDocument$ === "object");
assert(typeof AnalyzeExpenseCommand === "function");
assert(typeof AnalyzeExpense$ === "object");
assert(typeof AnalyzeIDCommand === "function");
assert(typeof AnalyzeID$ === "object");
assert(typeof CreateAdapterCommand === "function");
assert(typeof CreateAdapter$ === "object");
assert(typeof CreateAdapterVersionCommand === "function");
assert(typeof CreateAdapterVersion$ === "object");
assert(typeof DeleteAdapterCommand === "function");
assert(typeof DeleteAdapter$ === "object");
assert(typeof DeleteAdapterVersionCommand === "function");
assert(typeof DeleteAdapterVersion$ === "object");
assert(typeof DetectDocumentTextCommand === "function");
assert(typeof DetectDocumentText$ === "object");
assert(typeof GetAdapterCommand === "function");
assert(typeof GetAdapter$ === "object");
assert(typeof GetAdapterVersionCommand === "function");
assert(typeof GetAdapterVersion$ === "object");
assert(typeof GetDocumentAnalysisCommand === "function");
assert(typeof GetDocumentAnalysis$ === "object");
assert(typeof GetDocumentTextDetectionCommand === "function");
assert(typeof GetDocumentTextDetection$ === "object");
assert(typeof GetExpenseAnalysisCommand === "function");
assert(typeof GetExpenseAnalysis$ === "object");
assert(typeof GetLendingAnalysisCommand === "function");
assert(typeof GetLendingAnalysis$ === "object");
assert(typeof GetLendingAnalysisSummaryCommand === "function");
assert(typeof GetLendingAnalysisSummary$ === "object");
assert(typeof ListAdaptersCommand === "function");
assert(typeof ListAdapters$ === "object");
assert(typeof ListAdapterVersionsCommand === "function");
assert(typeof ListAdapterVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartDocumentAnalysisCommand === "function");
assert(typeof StartDocumentAnalysis$ === "object");
assert(typeof StartDocumentTextDetectionCommand === "function");
assert(typeof StartDocumentTextDetection$ === "object");
assert(typeof StartExpenseAnalysisCommand === "function");
assert(typeof StartExpenseAnalysis$ === "object");
assert(typeof StartLendingAnalysisCommand === "function");
assert(typeof StartLendingAnalysis$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAdapterCommand === "function");
assert(typeof UpdateAdapter$ === "object");
// structural schemas
assert(typeof Adapter$ === "object");
assert(typeof AdapterOverview$ === "object");
assert(typeof AdaptersConfig$ === "object");
assert(typeof AdapterVersionDatasetConfig$ === "object");
assert(typeof AdapterVersionEvaluationMetric$ === "object");
assert(typeof AdapterVersionOverview$ === "object");
assert(typeof AnalyzeDocumentRequest$ === "object");
assert(typeof AnalyzeDocumentResponse$ === "object");
assert(typeof AnalyzeExpenseRequest$ === "object");
assert(typeof AnalyzeExpenseResponse$ === "object");
assert(typeof AnalyzeIDDetections$ === "object");
assert(typeof AnalyzeIDRequest$ === "object");
assert(typeof AnalyzeIDResponse$ === "object");
assert(typeof Block$ === "object");
assert(typeof BoundingBox$ === "object");
assert(typeof CreateAdapterRequest$ === "object");
assert(typeof CreateAdapterResponse$ === "object");
assert(typeof CreateAdapterVersionRequest$ === "object");
assert(typeof CreateAdapterVersionResponse$ === "object");
assert(typeof DeleteAdapterRequest$ === "object");
assert(typeof DeleteAdapterResponse$ === "object");
assert(typeof DeleteAdapterVersionRequest$ === "object");
assert(typeof DeleteAdapterVersionResponse$ === "object");
assert(typeof DetectDocumentTextRequest$ === "object");
assert(typeof DetectDocumentTextResponse$ === "object");
assert(typeof DetectedSignature$ === "object");
assert(typeof Document$ === "object");
assert(typeof DocumentGroup$ === "object");
assert(typeof DocumentLocation$ === "object");
assert(typeof DocumentMetadata$ === "object");
assert(typeof EvaluationMetric$ === "object");
assert(typeof ExpenseCurrency$ === "object");
assert(typeof ExpenseDetection$ === "object");
assert(typeof ExpenseDocument$ === "object");
assert(typeof ExpenseField$ === "object");
assert(typeof ExpenseGroupProperty$ === "object");
assert(typeof ExpenseType$ === "object");
assert(typeof Extraction$ === "object");
assert(typeof Geometry$ === "object");
assert(typeof GetAdapterRequest$ === "object");
assert(typeof GetAdapterResponse$ === "object");
assert(typeof GetAdapterVersionRequest$ === "object");
assert(typeof GetAdapterVersionResponse$ === "object");
assert(typeof GetDocumentAnalysisRequest$ === "object");
assert(typeof GetDocumentAnalysisResponse$ === "object");
assert(typeof GetDocumentTextDetectionRequest$ === "object");
assert(typeof GetDocumentTextDetectionResponse$ === "object");
assert(typeof GetExpenseAnalysisRequest$ === "object");
assert(typeof GetExpenseAnalysisResponse$ === "object");
assert(typeof GetLendingAnalysisRequest$ === "object");
assert(typeof GetLendingAnalysisResponse$ === "object");
assert(typeof GetLendingAnalysisSummaryRequest$ === "object");
assert(typeof GetLendingAnalysisSummaryResponse$ === "object");
assert(typeof HumanLoopActivationOutput$ === "object");
assert(typeof HumanLoopConfig$ === "object");
assert(typeof HumanLoopDataAttributes$ === "object");
assert(typeof IdentityDocument$ === "object");
assert(typeof IdentityDocumentField$ === "object");
assert(typeof LendingDetection$ === "object");
assert(typeof LendingDocument$ === "object");
assert(typeof LendingField$ === "object");
assert(typeof LendingResult$ === "object");
assert(typeof LendingSummary$ === "object");
assert(typeof LineItemFields$ === "object");
assert(typeof LineItemGroup$ === "object");
assert(typeof ListAdaptersRequest$ === "object");
assert(typeof ListAdaptersResponse$ === "object");
assert(typeof ListAdapterVersionsRequest$ === "object");
assert(typeof ListAdapterVersionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NormalizedValue$ === "object");
assert(typeof NotificationChannel$ === "object");
assert(typeof OutputConfig$ === "object");
assert(typeof PageClassification$ === "object");
assert(typeof Point$ === "object");
assert(typeof Prediction$ === "object");
assert(typeof QueriesConfig$ === "object");
assert(typeof Query$ === "object");
assert(typeof Relationship$ === "object");
assert(typeof S3Object$ === "object");
assert(typeof SignatureDetection$ === "object");
assert(typeof SplitDocument$ === "object");
assert(typeof StartDocumentAnalysisRequest$ === "object");
assert(typeof StartDocumentAnalysisResponse$ === "object");
assert(typeof StartDocumentTextDetectionRequest$ === "object");
assert(typeof StartDocumentTextDetectionResponse$ === "object");
assert(typeof StartExpenseAnalysisRequest$ === "object");
assert(typeof StartExpenseAnalysisResponse$ === "object");
assert(typeof StartLendingAnalysisRequest$ === "object");
assert(typeof StartLendingAnalysisResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UndetectedSignature$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAdapterRequest$ === "object");
assert(typeof UpdateAdapterResponse$ === "object");
assert(typeof Warning$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(BadDocumentException.prototype instanceof TextractServiceException);
assert(typeof BadDocumentException$ === "object");
assert(ConflictException.prototype instanceof TextractServiceException);
assert(typeof ConflictException$ === "object");
assert(DocumentTooLargeException.prototype instanceof TextractServiceException);
assert(typeof DocumentTooLargeException$ === "object");
assert(HumanLoopQuotaExceededException.prototype instanceof TextractServiceException);
assert(typeof HumanLoopQuotaExceededException$ === "object");
assert(IdempotentParameterMismatchException.prototype instanceof TextractServiceException);
assert(typeof IdempotentParameterMismatchException$ === "object");
assert(InternalServerError.prototype instanceof TextractServiceException);
assert(typeof InternalServerError$ === "object");
assert(InvalidJobIdException.prototype instanceof TextractServiceException);
assert(typeof InvalidJobIdException$ === "object");
assert(InvalidKMSKeyException.prototype instanceof TextractServiceException);
assert(typeof InvalidKMSKeyException$ === "object");
assert(InvalidParameterException.prototype instanceof TextractServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidS3ObjectException.prototype instanceof TextractServiceException);
assert(typeof InvalidS3ObjectException$ === "object");
assert(LimitExceededException.prototype instanceof TextractServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ProvisionedThroughputExceededException.prototype instanceof TextractServiceException);
assert(typeof ProvisionedThroughputExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof TextractServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof TextractServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof TextractServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnsupportedDocumentException.prototype instanceof TextractServiceException);
assert(typeof UnsupportedDocumentException$ === "object");
assert(ValidationException.prototype instanceof TextractServiceException);
assert(typeof ValidationException$ === "object");
assert(TextractServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAdapterVersions === "function");
assert(typeof paginateListAdapters === "function");
console.log(`Textract index test passed.`);
