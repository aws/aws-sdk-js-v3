import { DeleteLexiconInput } from "./DeleteLexiconInput";
import { DescribeVoicesInput } from "./DescribeVoicesInput";
import { GetLexiconInput } from "./GetLexiconInput";
import { GetSpeechSynthesisTaskInput } from "./GetSpeechSynthesisTaskInput";
import { ListLexiconsInput } from "./ListLexiconsInput";
import { ListSpeechSynthesisTasksInput } from "./ListSpeechSynthesisTasksInput";
import { PutLexiconInput } from "./PutLexiconInput";
import { StartSpeechSynthesisTaskInput } from "./StartSpeechSynthesisTaskInput";
import { SynthesizeSpeechInput } from "./SynthesizeSpeechInput";
export type InputTypesUnion =
  | DeleteLexiconInput
  | DescribeVoicesInput
  | GetLexiconInput
  | GetSpeechSynthesisTaskInput
  | ListLexiconsInput
  | ListSpeechSynthesisTasksInput
  | PutLexiconInput
  | StartSpeechSynthesisTaskInput
  | SynthesizeSpeechInput;
