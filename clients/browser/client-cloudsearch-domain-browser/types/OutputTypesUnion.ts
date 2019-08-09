import { SearchOutput } from "./SearchOutput";
import { SuggestOutput } from "./SuggestOutput";
import { UploadDocumentsOutput } from "./UploadDocumentsOutput";
export type OutputTypesUnion =
  | SearchOutput
  | SuggestOutput
  | UploadDocumentsOutput;
