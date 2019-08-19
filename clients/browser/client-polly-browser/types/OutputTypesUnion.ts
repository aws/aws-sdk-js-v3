import { DeleteLexiconOutput } from "./DeleteLexiconOutput";
import { DescribeVoicesOutput } from "./DescribeVoicesOutput";
import { GetLexiconOutput } from "./GetLexiconOutput";
import { GetSpeechSynthesisTaskOutput } from "./GetSpeechSynthesisTaskOutput";
import { ListLexiconsOutput } from "./ListLexiconsOutput";
import { ListSpeechSynthesisTasksOutput } from "./ListSpeechSynthesisTasksOutput";
import { PutLexiconOutput } from "./PutLexiconOutput";
import { StartSpeechSynthesisTaskOutput } from "./StartSpeechSynthesisTaskOutput";
import { SynthesizeSpeechOutput } from "./SynthesizeSpeechOutput";
export type OutputTypesUnion =
  | DeleteLexiconOutput
  | DescribeVoicesOutput
  | GetLexiconOutput
  | GetSpeechSynthesisTaskOutput
  | ListLexiconsOutput
  | ListSpeechSynthesisTasksOutput
  | PutLexiconOutput
  | StartSpeechSynthesisTaskOutput
  | SynthesizeSpeechOutput;
