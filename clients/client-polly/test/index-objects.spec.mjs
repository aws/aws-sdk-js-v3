import {
  DeleteLexiconCommand,
  DescribeVoicesCommand,
  Engine,
  EngineNotSupportedException,
  Gender,
  GetLexiconCommand,
  GetSpeechSynthesisTaskCommand,
  InvalidLexiconException,
  InvalidNextTokenException,
  InvalidS3BucketException,
  InvalidS3KeyException,
  InvalidSampleRateException,
  InvalidSnsTopicArnException,
  InvalidSsmlException,
  InvalidTaskIdException,
  LanguageCode,
  LanguageNotSupportedException,
  LexiconNotFoundException,
  LexiconSizeExceededException,
  ListLexiconsCommand,
  ListSpeechSynthesisTasksCommand,
  MarksNotSupportedForFormatException,
  MaxLexemeLengthExceededException,
  MaxLexiconsNumberExceededException,
  OutputFormat,
  Polly,
  PollyClient,
  PollyServiceException,
  PutLexiconCommand,
  ServiceFailureException,
  SpeechMarkType,
  SsmlMarksNotSupportedForTextTypeException,
  StartSpeechSynthesisTaskCommand,
  SynthesisTaskNotFoundException,
  SynthesizeSpeechCommand,
  TaskStatus,
  TextLengthExceededException,
  TextType,
  UnsupportedPlsAlphabetException,
  UnsupportedPlsLanguageException,
  VoiceId,
  paginateListSpeechSynthesisTasks,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PollyClient === "function");
assert(typeof Polly === "function");
// commands
assert(typeof DeleteLexiconCommand === "function");
assert(typeof DescribeVoicesCommand === "function");
assert(typeof GetLexiconCommand === "function");
assert(typeof GetSpeechSynthesisTaskCommand === "function");
assert(typeof ListLexiconsCommand === "function");
assert(typeof ListSpeechSynthesisTasksCommand === "function");
assert(typeof PutLexiconCommand === "function");
assert(typeof StartSpeechSynthesisTaskCommand === "function");
assert(typeof SynthesizeSpeechCommand === "function");
// enums
assert(typeof Engine === "object");
assert(typeof Gender === "object");
assert(typeof LanguageCode === "object");
assert(typeof OutputFormat === "object");
assert(typeof SpeechMarkType === "object");
assert(typeof TaskStatus === "object");
assert(typeof TextType === "object");
assert(typeof VoiceId === "object");
// errors
assert(EngineNotSupportedException.prototype instanceof PollyServiceException);
assert(InvalidLexiconException.prototype instanceof PollyServiceException);
assert(InvalidNextTokenException.prototype instanceof PollyServiceException);
assert(InvalidS3BucketException.prototype instanceof PollyServiceException);
assert(InvalidS3KeyException.prototype instanceof PollyServiceException);
assert(InvalidSampleRateException.prototype instanceof PollyServiceException);
assert(InvalidSnsTopicArnException.prototype instanceof PollyServiceException);
assert(InvalidSsmlException.prototype instanceof PollyServiceException);
assert(InvalidTaskIdException.prototype instanceof PollyServiceException);
assert(LanguageNotSupportedException.prototype instanceof PollyServiceException);
assert(LexiconNotFoundException.prototype instanceof PollyServiceException);
assert(LexiconSizeExceededException.prototype instanceof PollyServiceException);
assert(MarksNotSupportedForFormatException.prototype instanceof PollyServiceException);
assert(MaxLexemeLengthExceededException.prototype instanceof PollyServiceException);
assert(MaxLexiconsNumberExceededException.prototype instanceof PollyServiceException);
assert(ServiceFailureException.prototype instanceof PollyServiceException);
assert(SsmlMarksNotSupportedForTextTypeException.prototype instanceof PollyServiceException);
assert(SynthesisTaskNotFoundException.prototype instanceof PollyServiceException);
assert(TextLengthExceededException.prototype instanceof PollyServiceException);
assert(UnsupportedPlsAlphabetException.prototype instanceof PollyServiceException);
assert(UnsupportedPlsLanguageException.prototype instanceof PollyServiceException);
assert(PollyServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSpeechSynthesisTasks === "function");
console.log(`Polly index test passed.`);
