import { TextLengthExceededException } from "./TextLengthExceededException";
import { InvalidSampleRateException } from "./InvalidSampleRateException";
import { InvalidSsmlException } from "./InvalidSsmlException";
import { LexiconNotFoundException } from "./LexiconNotFoundException";
import { ServiceFailureException } from "./ServiceFailureException";
import { MarksNotSupportedForFormatException } from "./MarksNotSupportedForFormatException";
import { SsmlMarksNotSupportedForTextTypeException } from "./SsmlMarksNotSupportedForTextTypeException";
import { LanguageNotSupportedException } from "./LanguageNotSupportedException";
import { EngineNotSupportedException } from "./EngineNotSupportedException";
export type SynthesizeSpeechExceptionsUnion =
  | TextLengthExceededException
  | InvalidSampleRateException
  | InvalidSsmlException
  | LexiconNotFoundException
  | ServiceFailureException
  | MarksNotSupportedForFormatException
  | SsmlMarksNotSupportedForTextTypeException
  | LanguageNotSupportedException
  | EngineNotSupportedException;
