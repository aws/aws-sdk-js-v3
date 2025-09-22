export const _A = "Alphabet";
export const _ALC = "AdditionalLanguageCodes";
export const _AS = "AudioStream";
export const _At = "Attributes";
export const _C = "Content";
export const _CT = "CreationTime";
export const _CT_ = "Content-Type";
export const _CTo = "ContentType";
export const _DL = "DeleteLexicon";
export const _DLI = "DeleteLexiconInput";
export const _DLO = "DeleteLexiconOutput";
export const _DV = "DescribeVoices";
export const _DVI = "DescribeVoicesInput";
export const _DVO = "DescribeVoicesOutput";
export const _E = "Engine";
export const _ENSE = "EngineNotSupportedException";
export const _G = "Gender";
export const _GL = "GetLexicon";
export const _GLI = "GetLexiconInput";
export const _GLO = "GetLexiconOutput";
export const _GSST = "GetSpeechSynthesisTask";
export const _GSSTI = "GetSpeechSynthesisTaskInput";
export const _GSSTO = "GetSpeechSynthesisTaskOutput";
export const _I = "Id";
export const _IALC = "IncludeAdditionalLanguageCodes";
export const _ILE = "InvalidLexiconException";
export const _INTE = "InvalidNextTokenException";
export const _ISBE = "InvalidS3BucketException";
export const _ISE = "InvalidSsmlException";
export const _ISKE = "InvalidS3KeyException";
export const _ISRE = "InvalidSampleRateException";
export const _ISTAE = "InvalidSnsTopicArnException";
export const _ITIE = "InvalidTaskIdException";
export const _L = "Lexicon";
export const _LA = "LexiconAttributes";
export const _LAe = "LexiconArn";
export const _LC = "LexiconContent";
export const _LCa = "LanguageCode";
export const _LCe = "LexemesCount";
export const _LD = "LexiconDescription";
export const _LDL = "LexiconDescriptionList";
export const _LL = "ListLexicons";
export const _LLI = "ListLexiconsInput";
export const _LLO = "ListLexiconsOutput";
export const _LM = "LastModified";
export const _LN = "LexiconNames";
export const _LNFE = "LexiconNotFoundException";
export const _LNSE = "LanguageNotSupportedException";
export const _LNa = "LanguageName";
export const _LSEE = "LexiconSizeExceededException";
export const _LSST = "ListSpeechSynthesisTasks";
export const _LSSTI = "ListSpeechSynthesisTasksInput";
export const _LSSTO = "ListSpeechSynthesisTasksOutput";
export const _Le = "Lexicons";
export const _MLLEE = "MaxLexemeLengthExceededException";
export const _MLNEE = "MaxLexiconsNumberExceededException";
export const _MNSFFE = "MarksNotSupportedForFormatException";
export const _MR = "MaxResults";
export const _N = "Name";
export const _NT = "NextToken";
export const _OF = "OutputFormat";
export const _OSBN = "OutputS3BucketName";
export const _OSKP = "OutputS3KeyPrefix";
export const _OU = "OutputUri";
export const _PL = "PutLexicon";
export const _PLI = "PutLexiconInput";
export const _PLO = "PutLexiconOutput";
export const _RC = "RequestCharacters";
export const _S = "Size";
export const _SE = "SupportedEngines";
export const _SFE = "ServiceFailureException";
export const _SMNSFTTE = "SsmlMarksNotSupportedForTextTypeException";
export const _SMT = "SpeechMarkTypes";
export const _SR = "SampleRate";
export const _SS = "SynthesizeSpeech";
export const _SSI = "SynthesizeSpeechInput";
export const _SSO = "SynthesizeSpeechOutput";
export const _SSST = "StartSpeechSynthesisTask";
export const _SSSTI = "StartSpeechSynthesisTaskInput";
export const _SSSTO = "StartSpeechSynthesisTaskOutput";
export const _ST = "SynthesisTask";
export const _STA = "SnsTopicArn";
export const _STNFE = "SynthesisTaskNotFoundException";
export const _STy = "SynthesisTasks";
export const _St = "Status";
export const _T = "Text";
export const _TI = "TaskId";
export const _TLEE = "TextLengthExceededException";
export const _TS = "TaskStatus";
export const _TSR = "TaskStatusReason";
export const _TT = "TextType";
export const _UPAE = "UnsupportedPlsAlphabetException";
export const _UPLE = "UnsupportedPlsLanguageException";
export const _V = "Voices";
export const _VI = "VoiceId";
export const _VL = "VoiceList";
export const _Vo = "Voice";
export const _c = "client";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _m = "message";
export const _s = "streaming";
export const _se = "server";
export const _xaR = "x-amzn-RequestCharacters";
export const n0 = "com.amazonaws.polly";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { PollyServiceException as __PollyServiceException } from "../models/PollyServiceException";

/* eslint no-var: 0 */

export var PollyServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.polly",
  "PollyServiceException",
  0,
  [],
  [],
  __PollyServiceException
);
