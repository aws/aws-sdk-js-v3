import {
  AdapterVersionStatus,
  AnalyzeDocumentCommand,
  AnalyzeExpenseCommand,
  AnalyzeIDCommand,
  AutoUpdate,
  BlockType,
  ContentClassifier,
  CreateAdapterCommand,
  CreateAdapterVersionCommand,
  DeleteAdapterCommand,
  DeleteAdapterVersionCommand,
  DetectDocumentTextCommand,
  EntityType,
  FeatureType,
  GetAdapterCommand,
  GetAdapterVersionCommand,
  GetDocumentAnalysisCommand,
  GetDocumentTextDetectionCommand,
  GetExpenseAnalysisCommand,
  GetLendingAnalysisCommand,
  GetLendingAnalysisSummaryCommand,
  JobStatus,
  ListAdapterVersionsCommand,
  ListAdaptersCommand,
  ListTagsForResourceCommand,
  RelationshipType,
  SelectionStatus,
  StartDocumentAnalysisCommand,
  StartDocumentTextDetectionCommand,
  StartExpenseAnalysisCommand,
  StartLendingAnalysisCommand,
  TagResourceCommand,
  TextType,
  Textract,
  TextractClient,
  TextractServiceException,
  UntagResourceCommand,
  UpdateAdapterCommand,
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
assert(TextractServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAdapterVersions === "function");
assert(typeof paginateListAdapters === "function");
console.log(`Textract index test passed.`);
