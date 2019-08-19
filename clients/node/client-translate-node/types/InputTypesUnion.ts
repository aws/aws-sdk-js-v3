import { DeleteTerminologyInput } from "./DeleteTerminologyInput";
import { GetTerminologyInput } from "./GetTerminologyInput";
import { ImportTerminologyInput } from "./ImportTerminologyInput";
import { ListTerminologiesInput } from "./ListTerminologiesInput";
import { TranslateTextInput } from "./TranslateTextInput";
export type InputTypesUnion =
  | DeleteTerminologyInput
  | GetTerminologyInput
  | ImportTerminologyInput
  | ListTerminologiesInput
  | TranslateTextInput;
