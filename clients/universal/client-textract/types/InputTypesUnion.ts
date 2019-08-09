import { AnalyzeDocumentInput } from "./AnalyzeDocumentInput";
import { DetectDocumentTextInput } from "./DetectDocumentTextInput";
import { GetDocumentAnalysisInput } from "./GetDocumentAnalysisInput";
import { GetDocumentTextDetectionInput } from "./GetDocumentTextDetectionInput";
import { StartDocumentAnalysisInput } from "./StartDocumentAnalysisInput";
import { StartDocumentTextDetectionInput } from "./StartDocumentTextDetectionInput";
export type InputTypesUnion =
  | AnalyzeDocumentInput
  | DetectDocumentTextInput
  | GetDocumentAnalysisInput
  | GetDocumentTextDetectionInput
  | StartDocumentAnalysisInput
  | StartDocumentTextDetectionInput;
