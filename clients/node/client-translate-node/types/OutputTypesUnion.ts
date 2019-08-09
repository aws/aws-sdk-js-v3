import { DeleteTerminologyOutput } from "./DeleteTerminologyOutput";
import { GetTerminologyOutput } from "./GetTerminologyOutput";
import { ImportTerminologyOutput } from "./ImportTerminologyOutput";
import { ListTerminologiesOutput } from "./ListTerminologiesOutput";
import { TranslateTextOutput } from "./TranslateTextOutput";
export type OutputTypesUnion =
  | DeleteTerminologyOutput
  | GetTerminologyOutput
  | ImportTerminologyOutput
  | ListTerminologiesOutput
  | TranslateTextOutput;
