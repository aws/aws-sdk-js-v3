import {
  DeleteLexicon$,
  DeleteLexiconCommand,
  DeleteLexiconInput$,
  DeleteLexiconOutput$,
  DescribeVoices$,
  DescribeVoicesCommand,
  DescribeVoicesInput$,
  DescribeVoicesOutput$,
  Engine,
  EngineNotSupportedException,
  EngineNotSupportedException$,
  Gender,
  GetLexicon$,
  GetLexiconCommand,
  GetLexiconInput$,
  GetLexiconOutput$,
  GetSpeechSynthesisTask$,
  GetSpeechSynthesisTaskCommand,
  GetSpeechSynthesisTaskInput$,
  GetSpeechSynthesisTaskOutput$,
  InvalidLexiconException,
  InvalidLexiconException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidS3BucketException,
  InvalidS3BucketException$,
  InvalidS3KeyException,
  InvalidS3KeyException$,
  InvalidSampleRateException,
  InvalidSampleRateException$,
  InvalidSnsTopicArnException,
  InvalidSnsTopicArnException$,
  InvalidSsmlException,
  InvalidSsmlException$,
  InvalidTaskIdException,
  InvalidTaskIdException$,
  LanguageCode,
  LanguageNotSupportedException,
  LanguageNotSupportedException$,
  Lexicon$,
  LexiconAttributes$,
  LexiconDescription$,
  LexiconNotFoundException,
  LexiconNotFoundException$,
  LexiconSizeExceededException,
  LexiconSizeExceededException$,
  ListLexicons$,
  ListLexiconsCommand,
  ListLexiconsInput$,
  ListLexiconsOutput$,
  ListSpeechSynthesisTasks$,
  ListSpeechSynthesisTasksCommand,
  ListSpeechSynthesisTasksInput$,
  ListSpeechSynthesisTasksOutput$,
  MarksNotSupportedForFormatException,
  MarksNotSupportedForFormatException$,
  MaxLexemeLengthExceededException,
  MaxLexemeLengthExceededException$,
  MaxLexiconsNumberExceededException,
  MaxLexiconsNumberExceededException$,
  OutputFormat,
  paginateListSpeechSynthesisTasks,
  Polly,
  PollyClient,
  PollyServiceException,
  PutLexicon$,
  PutLexiconCommand,
  PutLexiconInput$,
  PutLexiconOutput$,
  ServiceFailureException,
  ServiceFailureException$,
  SpeechMarkType,
  SsmlMarksNotSupportedForTextTypeException,
  SsmlMarksNotSupportedForTextTypeException$,
  StartSpeechSynthesisTask$,
  StartSpeechSynthesisTaskCommand,
  StartSpeechSynthesisTaskInput$,
  StartSpeechSynthesisTaskOutput$,
  SynthesisTask$,
  SynthesisTaskNotFoundException,
  SynthesisTaskNotFoundException$,
  SynthesizeSpeech$,
  SynthesizeSpeechCommand,
  SynthesizeSpeechInput$,
  SynthesizeSpeechOutput$,
  TaskStatus,
  TextLengthExceededException,
  TextLengthExceededException$,
  TextType,
  UnsupportedPlsAlphabetException,
  UnsupportedPlsAlphabetException$,
  UnsupportedPlsLanguageException,
  UnsupportedPlsLanguageException$,
  Voice$,
  VoiceId,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PollyClient === "function");
assert(typeof Polly === "function");
// commands
assert(typeof DeleteLexiconCommand === "function");
assert(typeof DeleteLexicon$ === "object");
assert(typeof DescribeVoicesCommand === "function");
assert(typeof DescribeVoices$ === "object");
assert(typeof GetLexiconCommand === "function");
assert(typeof GetLexicon$ === "object");
assert(typeof GetSpeechSynthesisTaskCommand === "function");
assert(typeof GetSpeechSynthesisTask$ === "object");
assert(typeof ListLexiconsCommand === "function");
assert(typeof ListLexicons$ === "object");
assert(typeof ListSpeechSynthesisTasksCommand === "function");
assert(typeof ListSpeechSynthesisTasks$ === "object");
assert(typeof PutLexiconCommand === "function");
assert(typeof PutLexicon$ === "object");
assert(typeof StartSpeechSynthesisTaskCommand === "function");
assert(typeof StartSpeechSynthesisTask$ === "object");
assert(typeof SynthesizeSpeechCommand === "function");
assert(typeof SynthesizeSpeech$ === "object");
// structural schemas
assert(typeof DeleteLexiconInput$ === "object");
assert(typeof DeleteLexiconOutput$ === "object");
assert(typeof DescribeVoicesInput$ === "object");
assert(typeof DescribeVoicesOutput$ === "object");
assert(typeof GetLexiconInput$ === "object");
assert(typeof GetLexiconOutput$ === "object");
assert(typeof GetSpeechSynthesisTaskInput$ === "object");
assert(typeof GetSpeechSynthesisTaskOutput$ === "object");
assert(typeof Lexicon$ === "object");
assert(typeof LexiconAttributes$ === "object");
assert(typeof LexiconDescription$ === "object");
assert(typeof ListLexiconsInput$ === "object");
assert(typeof ListLexiconsOutput$ === "object");
assert(typeof ListSpeechSynthesisTasksInput$ === "object");
assert(typeof ListSpeechSynthesisTasksOutput$ === "object");
assert(typeof PutLexiconInput$ === "object");
assert(typeof PutLexiconOutput$ === "object");
assert(typeof StartSpeechSynthesisTaskInput$ === "object");
assert(typeof StartSpeechSynthesisTaskOutput$ === "object");
assert(typeof SynthesisTask$ === "object");
assert(typeof SynthesizeSpeechInput$ === "object");
assert(typeof SynthesizeSpeechOutput$ === "object");
assert(typeof Voice$ === "object");
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
assert(typeof EngineNotSupportedException$ === "object");
assert(InvalidLexiconException.prototype instanceof PollyServiceException);
assert(typeof InvalidLexiconException$ === "object");
assert(InvalidNextTokenException.prototype instanceof PollyServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidS3BucketException.prototype instanceof PollyServiceException);
assert(typeof InvalidS3BucketException$ === "object");
assert(InvalidS3KeyException.prototype instanceof PollyServiceException);
assert(typeof InvalidS3KeyException$ === "object");
assert(InvalidSampleRateException.prototype instanceof PollyServiceException);
assert(typeof InvalidSampleRateException$ === "object");
assert(InvalidSnsTopicArnException.prototype instanceof PollyServiceException);
assert(typeof InvalidSnsTopicArnException$ === "object");
assert(InvalidSsmlException.prototype instanceof PollyServiceException);
assert(typeof InvalidSsmlException$ === "object");
assert(InvalidTaskIdException.prototype instanceof PollyServiceException);
assert(typeof InvalidTaskIdException$ === "object");
assert(LanguageNotSupportedException.prototype instanceof PollyServiceException);
assert(typeof LanguageNotSupportedException$ === "object");
assert(LexiconNotFoundException.prototype instanceof PollyServiceException);
assert(typeof LexiconNotFoundException$ === "object");
assert(LexiconSizeExceededException.prototype instanceof PollyServiceException);
assert(typeof LexiconSizeExceededException$ === "object");
assert(MarksNotSupportedForFormatException.prototype instanceof PollyServiceException);
assert(typeof MarksNotSupportedForFormatException$ === "object");
assert(MaxLexemeLengthExceededException.prototype instanceof PollyServiceException);
assert(typeof MaxLexemeLengthExceededException$ === "object");
assert(MaxLexiconsNumberExceededException.prototype instanceof PollyServiceException);
assert(typeof MaxLexiconsNumberExceededException$ === "object");
assert(ServiceFailureException.prototype instanceof PollyServiceException);
assert(typeof ServiceFailureException$ === "object");
assert(SsmlMarksNotSupportedForTextTypeException.prototype instanceof PollyServiceException);
assert(typeof SsmlMarksNotSupportedForTextTypeException$ === "object");
assert(SynthesisTaskNotFoundException.prototype instanceof PollyServiceException);
assert(typeof SynthesisTaskNotFoundException$ === "object");
assert(TextLengthExceededException.prototype instanceof PollyServiceException);
assert(typeof TextLengthExceededException$ === "object");
assert(UnsupportedPlsAlphabetException.prototype instanceof PollyServiceException);
assert(typeof UnsupportedPlsAlphabetException$ === "object");
assert(UnsupportedPlsLanguageException.prototype instanceof PollyServiceException);
assert(typeof UnsupportedPlsLanguageException$ === "object");
assert(PollyServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSpeechSynthesisTasks === "function");
console.log(`Polly index test passed.`);
