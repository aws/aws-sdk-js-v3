import { AnalyzeDocumentOutput } from "./AnalyzeDocumentOutput";
import { DetectDocumentTextOutput } from "./DetectDocumentTextOutput";
import { GetDocumentAnalysisOutput } from "./GetDocumentAnalysisOutput";
import { GetDocumentTextDetectionOutput } from "./GetDocumentTextDetectionOutput";
import { StartDocumentAnalysisOutput } from "./StartDocumentAnalysisOutput";
import { StartDocumentTextDetectionOutput } from "./StartDocumentTextDetectionOutput";
export type OutputTypesUnion =
  | AnalyzeDocumentOutput
  | DetectDocumentTextOutput
  | GetDocumentAnalysisOutput
  | GetDocumentTextDetectionOutput
  | StartDocumentAnalysisOutput
  | StartDocumentTextDetectionOutput;
