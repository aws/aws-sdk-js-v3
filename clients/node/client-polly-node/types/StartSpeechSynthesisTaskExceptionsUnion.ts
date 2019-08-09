import { TextLengthExceededException } from "./TextLengthExceededException";
import { InvalidS3BucketException } from "./InvalidS3BucketException";
import { InvalidS3KeyException } from "./InvalidS3KeyException";
import { InvalidSampleRateException } from "./InvalidSampleRateException";
import { InvalidSnsTopicArnException } from "./InvalidSnsTopicArnException";
import { InvalidSsmlException } from "./InvalidSsmlException";
import { EngineNotSupportedException } from "./EngineNotSupportedException";
import { LexiconNotFoundException } from "./LexiconNotFoundException";
import { ServiceFailureException } from "./ServiceFailureException";
import { MarksNotSupportedForFormatException } from "./MarksNotSupportedForFormatException";
import { SsmlMarksNotSupportedForTextTypeException } from "./SsmlMarksNotSupportedForTextTypeException";
import { LanguageNotSupportedException } from "./LanguageNotSupportedException";
export type StartSpeechSynthesisTaskExceptionsUnion =
  | TextLengthExceededException
  | InvalidS3BucketException
  | InvalidS3KeyException
  | InvalidSampleRateException
  | InvalidSnsTopicArnException
  | InvalidSsmlException
  | EngineNotSupportedException
  | LexiconNotFoundException
  | ServiceFailureException
  | MarksNotSupportedForFormatException
  | SsmlMarksNotSupportedForTextTypeException
  | LanguageNotSupportedException;
