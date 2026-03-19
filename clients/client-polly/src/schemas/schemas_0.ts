const _A = "Alphabet";
const _AC = "AudioChunk";
const _AE = "AudioEvent";
const _ALC = "AdditionalLanguageCodes";
const _AS = "AudioStream";
const _ASc = "ActionStream";
const _At = "Attributes";
const _C = "Content";
const _CSE = "CloseStreamEvent";
const _CT = "CreationTime";
const _CT_ = "Content-Type";
const _CTo = "ContentType";
const _DL = "DeleteLexicon";
const _DLI = "DeleteLexiconInput";
const _DLO = "DeleteLexiconOutput";
const _DV = "DescribeVoices";
const _DVI = "DescribeVoicesInput";
const _DVO = "DescribeVoicesOutput";
const _E = "Engine";
const _ENSE = "EngineNotSupportedException";
const _ES = "EventStream";
const _F = "Force";
const _FSC = "FlushStreamConfiguration";
const _G = "Gender";
const _GL = "GetLexicon";
const _GLI = "GetLexiconInput";
const _GLO = "GetLexiconOutput";
const _GSST = "GetSpeechSynthesisTask";
const _GSSTI = "GetSpeechSynthesisTaskInput";
const _GSSTO = "GetSpeechSynthesisTaskOutput";
const _I = "Id";
const _IALC = "IncludeAdditionalLanguageCodes";
const _ILE = "InvalidLexiconException";
const _INTE = "InvalidNextTokenException";
const _ISBE = "InvalidS3BucketException";
const _ISE = "InvalidSsmlException";
const _ISKE = "InvalidS3KeyException";
const _ISRE = "InvalidSampleRateException";
const _ISTAE = "InvalidSnsTopicArnException";
const _ITIE = "InvalidTaskIdException";
const _L = "Lexicon";
const _LA = "LexiconAttributes";
const _LAe = "LexiconArn";
const _LC = "LexiconContent";
const _LCa = "LanguageCode";
const _LCe = "LexemesCount";
const _LD = "LexiconDescription";
const _LDL = "LexiconDescriptionList";
const _LL = "ListLexicons";
const _LLI = "ListLexiconsInput";
const _LLO = "ListLexiconsOutput";
const _LM = "LastModified";
const _LN = "LexiconNames";
const _LNFE = "LexiconNotFoundException";
const _LNSE = "LanguageNotSupportedException";
const _LNa = "LanguageName";
const _LSEE = "LexiconSizeExceededException";
const _LSST = "ListSpeechSynthesisTasks";
const _LSSTI = "ListSpeechSynthesisTasksInput";
const _LSSTO = "ListSpeechSynthesisTasksOutput";
const _Le = "Lexicons";
const _MLLEE = "MaxLexemeLengthExceededException";
const _MLNEE = "MaxLexiconsNumberExceededException";
const _MNSFFE = "MarksNotSupportedForFormatException";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _OF = "OutputFormat";
const _OSBN = "OutputS3BucketName";
const _OSKP = "OutputS3KeyPrefix";
const _OU = "OutputUri";
const _PL = "PutLexicon";
const _PLI = "PutLexiconInput";
const _PLO = "PutLexiconOutput";
const _RC = "RequestCharacters";
const _S = "Size";
const _SCE = "StreamClosedEvent";
const _SE = "SupportedEngines";
const _SFE = "ServiceFailureException";
const _SMNSFTTE = "SsmlMarksNotSupportedForTextTypeException";
const _SMT = "SpeechMarkTypes";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "SampleRate";
const _SS = "SynthesizeSpeech";
const _SSI = "SynthesizeSpeechInput";
const _SSO = "SynthesizeSpeechOutput";
const _SSSS = "StartSpeechSynthesisStream";
const _SSSSAS = "StartSpeechSynthesisStreamActionStream";
const _SSSSES = "StartSpeechSynthesisStreamEventStream";
const _SSSSI = "StartSpeechSynthesisStreamInput";
const _SSSSO = "StartSpeechSynthesisStreamOutput";
const _SSST = "StartSpeechSynthesisTask";
const _SSSTI = "StartSpeechSynthesisTaskInput";
const _SSSTO = "StartSpeechSynthesisTaskOutput";
const _ST = "SynthesisTask";
const _STA = "SnsTopicArn";
const _STNFE = "SynthesisTaskNotFoundException";
const _STy = "SynthesisTasks";
const _St = "Status";
const _T = "Text";
const _TE = "ThrottlingException";
const _TEe = "TextEvent";
const _TI = "TaskId";
const _TLEE = "TextLengthExceededException";
const _TR = "ThrottlingReason";
const _TRL = "ThrottlingReasonList";
const _TS = "TaskStatus";
const _TSR = "TaskStatusReason";
const _TT = "TextType";
const _UPAE = "UnsupportedPlsAlphabetException";
const _UPLE = "UnsupportedPlsLanguageException";
const _V = "Voices";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _VI = "VoiceId";
const _VL = "VoiceList";
const _Vo = "Voice";
const _aQE = "awsQueryError";
const _c = "client";
const _e = "error";
const _eP = "eventPayload";
const _f = "fields";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _m = "message";
const _n = "name";
const _qC = "quotaCode";
const _r = "reason";
const _re = "resource";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.polly";
const _sC = "serviceCode";
const _se = "server";
const _st = "streaming";
const _tR = "throttlingReasons";
const _xaE = "x-amzn-Engine";
const _xaL = "x-amzn-LanguageCode";
const _xaL_ = "x-amzn-LexiconNames";
const _xaO = "x-amzn-OutputFormat";
const _xaR = "x-amzn-RequestCharacters";
const _xaS = "x-amzn-SampleRate";
const _xaV = "x-amzn-VoiceId";
const n0 = "com.amazonaws.polly";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import {
  EngineNotSupportedException,
  InvalidLexiconException,
  InvalidNextTokenException,
  InvalidS3BucketException,
  InvalidS3KeyException,
  InvalidSampleRateException,
  InvalidSnsTopicArnException,
  InvalidSsmlException,
  InvalidTaskIdException,
  LanguageNotSupportedException,
  LexiconNotFoundException,
  LexiconSizeExceededException,
  MarksNotSupportedForFormatException,
  MaxLexemeLengthExceededException,
  MaxLexiconsNumberExceededException,
  ServiceFailureException,
  ServiceQuotaExceededException,
  SsmlMarksNotSupportedForTextTypeException,
  SynthesisTaskNotFoundException,
  TextLengthExceededException,
  ThrottlingException,
  UnsupportedPlsAlphabetException,
  UnsupportedPlsLanguageException,
  ValidationException,
} from "../models/errors";
import { PollyServiceException } from "../models/PollyServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var PollyServiceException$: StaticErrorSchema = [-3, _s, "PollyServiceException", 0, [], []];
_s_registry.registerError(PollyServiceException$, PollyServiceException);
const n0_registry = TypeRegistry.for(n0);
export var EngineNotSupportedException$: StaticErrorSchema = [-3, n0, _ENSE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(EngineNotSupportedException$, EngineNotSupportedException);
export var InvalidLexiconException$: StaticErrorSchema = [-3, n0, _ILE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidLexiconException$, InvalidLexiconException);
export var InvalidNextTokenException$: StaticErrorSchema = [-3, n0, _INTE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidNextTokenException$, InvalidNextTokenException);
export var InvalidS3BucketException$: StaticErrorSchema = [-3, n0, _ISBE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidS3BucketException$, InvalidS3BucketException);
export var InvalidS3KeyException$: StaticErrorSchema = [-3, n0, _ISKE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidS3KeyException$, InvalidS3KeyException);
export var InvalidSampleRateException$: StaticErrorSchema = [-3, n0, _ISRE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidSampleRateException$, InvalidSampleRateException);
export var InvalidSnsTopicArnException$: StaticErrorSchema = [-3, n0, _ISTAE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidSnsTopicArnException$, InvalidSnsTopicArnException);
export var InvalidSsmlException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidSsmlException$, InvalidSsmlException);
export var InvalidTaskIdException$: StaticErrorSchema = [-3, n0, _ITIE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidTaskIdException$, InvalidTaskIdException);
export var LanguageNotSupportedException$: StaticErrorSchema = [-3, n0, _LNSE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(LanguageNotSupportedException$, LanguageNotSupportedException);
export var LexiconNotFoundException$: StaticErrorSchema = [-3, n0, _LNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
n0_registry.registerError(LexiconNotFoundException$, LexiconNotFoundException);
export var LexiconSizeExceededException$: StaticErrorSchema = [-3, n0, _LSEE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(LexiconSizeExceededException$, LexiconSizeExceededException);
export var MarksNotSupportedForFormatException$: StaticErrorSchema = [-3, n0, _MNSFFE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(MarksNotSupportedForFormatException$, MarksNotSupportedForFormatException);
export var MaxLexemeLengthExceededException$: StaticErrorSchema = [-3, n0, _MLLEE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(MaxLexemeLengthExceededException$, MaxLexemeLengthExceededException);
export var MaxLexiconsNumberExceededException$: StaticErrorSchema = [-3, n0, _MLNEE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(MaxLexiconsNumberExceededException$, MaxLexiconsNumberExceededException);
export var ServiceFailureException$: StaticErrorSchema = [-3, n0, _SFE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0]
];
n0_registry.registerError(ServiceFailureException$, ServiceFailureException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _qC, _sC],
  [0, 0, 0], 3
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var SsmlMarksNotSupportedForTextTypeException$: StaticErrorSchema = [-3, n0, _SMNSFTTE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(SsmlMarksNotSupportedForTextTypeException$, SsmlMarksNotSupportedForTextTypeException);
export var SynthesisTaskNotFoundException$: StaticErrorSchema = [-3, n0, _STNFE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(SynthesisTaskNotFoundException$, SynthesisTaskNotFoundException);
export var TextLengthExceededException$: StaticErrorSchema = [-3, n0, _TLEE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(TextLengthExceededException$, TextLengthExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_aQE]: [`Throttling`, 400], [_e]: _c, [_hE]: 400 },
  [_m, _tR],
  [0, () => ThrottlingReasonList]
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var UnsupportedPlsAlphabetException$: StaticErrorSchema = [-3, n0, _UPAE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(UnsupportedPlsAlphabetException$, UnsupportedPlsAlphabetException);
export var UnsupportedPlsLanguageException$: StaticErrorSchema = [-3, n0, _UPLE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(UnsupportedPlsLanguageException$, UnsupportedPlsLanguageException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _f],
  [0, 0, () => ValidationExceptionFieldList], 2
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
var AudioStream: StaticSimpleSchema = [0, n0, _AS, { [_st]: 1 }, 42];
var LexiconContent: StaticSimpleSchema = [0, n0, _LC, 8, 0];
export var AudioEvent$: StaticStructureSchema = [3, n0, _AE,
  0,
  [_AC],
  [[21, { [_eP]: 1 }]]
];
export var CloseStreamEvent$: StaticStructureSchema = [3, n0, _CSE,
  0,
  [],
  []
];
export var DeleteLexiconInput$: StaticStructureSchema = [3, n0, _DLI,
  0,
  [_N],
  [[0, 1]], 1
];
export var DeleteLexiconOutput$: StaticStructureSchema = [3, n0, _DLO,
  0,
  [],
  []
];
export var DescribeVoicesInput$: StaticStructureSchema = [3, n0, _DVI,
  0,
  [_E, _LCa, _IALC, _NT],
  [[0, { [_hQ]: _E }], [0, { [_hQ]: _LCa }], [2, { [_hQ]: _IALC }], [0, { [_hQ]: _NT }]]
];
export var DescribeVoicesOutput$: StaticStructureSchema = [3, n0, _DVO,
  0,
  [_V, _NT],
  [() => VoiceList, 0]
];
export var FlushStreamConfiguration$: StaticStructureSchema = [3, n0, _FSC,
  0,
  [_F],
  [2]
];
export var GetLexiconInput$: StaticStructureSchema = [3, n0, _GLI,
  0,
  [_N],
  [[0, 1]], 1
];
export var GetLexiconOutput$: StaticStructureSchema = [3, n0, _GLO,
  0,
  [_L, _LA],
  [[() => Lexicon$, 0], () => LexiconAttributes$]
];
export var GetSpeechSynthesisTaskInput$: StaticStructureSchema = [3, n0, _GSSTI,
  0,
  [_TI],
  [[0, 1]], 1
];
export var GetSpeechSynthesisTaskOutput$: StaticStructureSchema = [3, n0, _GSSTO,
  0,
  [_ST],
  [() => SynthesisTask$]
];
export var Lexicon$: StaticStructureSchema = [3, n0, _L,
  0,
  [_C, _N],
  [[() => LexiconContent, 0], 0]
];
export var LexiconAttributes$: StaticStructureSchema = [3, n0, _LA,
  0,
  [_A, _LCa, _LM, _LAe, _LCe, _S],
  [0, 0, 4, 0, 1, 1]
];
export var LexiconDescription$: StaticStructureSchema = [3, n0, _LD,
  0,
  [_N, _At],
  [0, () => LexiconAttributes$]
];
export var ListLexiconsInput$: StaticStructureSchema = [3, n0, _LLI,
  0,
  [_NT],
  [[0, { [_hQ]: _NT }]]
];
export var ListLexiconsOutput$: StaticStructureSchema = [3, n0, _LLO,
  0,
  [_Le, _NT],
  [() => LexiconDescriptionList, 0]
];
export var ListSpeechSynthesisTasksInput$: StaticStructureSchema = [3, n0, _LSSTI,
  0,
  [_MR, _NT, _St],
  [[1, { [_hQ]: _MR }], [0, { [_hQ]: _NT }], [0, { [_hQ]: _St }]]
];
export var ListSpeechSynthesisTasksOutput$: StaticStructureSchema = [3, n0, _LSSTO,
  0,
  [_NT, _STy],
  [0, () => SynthesisTasks]
];
export var PutLexiconInput$: StaticStructureSchema = [3, n0, _PLI,
  0,
  [_N, _C],
  [[0, 1], [() => LexiconContent, 0]], 2
];
export var PutLexiconOutput$: StaticStructureSchema = [3, n0, _PLO,
  0,
  [],
  []
];
export var StartSpeechSynthesisStreamInput$: StaticStructureSchema = [3, n0, _SSSSI,
  0,
  [_E, _OF, _VI, _LCa, _LN, _SR, _ASc],
  [[0, { [_hH]: _xaE }], [0, { [_hH]: _xaO }], [0, { [_hH]: _xaV }], [0, { [_hH]: _xaL }], [64 | 0, { [_hH]: _xaL_ }], [0, { [_hH]: _xaS }], [() => StartSpeechSynthesisStreamActionStream$, 16]], 3
];
export var StartSpeechSynthesisStreamOutput$: StaticStructureSchema = [3, n0, _SSSSO,
  0,
  [_ES],
  [[() => StartSpeechSynthesisStreamEventStream$, 16]]
];
export var StartSpeechSynthesisTaskInput$: StaticStructureSchema = [3, n0, _SSSTI,
  0,
  [_OF, _OSBN, _T, _VI, _E, _LCa, _LN, _OSKP, _SR, _STA, _SMT, _TT],
  [0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 0, 64 | 0, 0], 4
];
export var StartSpeechSynthesisTaskOutput$: StaticStructureSchema = [3, n0, _SSSTO,
  0,
  [_ST],
  [() => SynthesisTask$]
];
export var StreamClosedEvent$: StaticStructureSchema = [3, n0, _SCE,
  0,
  [_RC],
  [1]
];
export var SynthesisTask$: StaticStructureSchema = [3, n0, _ST,
  0,
  [_E, _TI, _TS, _TSR, _OU, _CT, _RC, _STA, _LN, _OF, _SR, _SMT, _TT, _VI, _LCa],
  [0, 0, 0, 0, 0, 4, 1, 0, 64 | 0, 0, 0, 64 | 0, 0, 0, 0]
];
export var SynthesizeSpeechInput$: StaticStructureSchema = [3, n0, _SSI,
  0,
  [_OF, _T, _VI, _E, _LCa, _LN, _SR, _SMT, _TT],
  [0, 0, 0, 0, 0, 64 | 0, 0, 64 | 0, 0], 3
];
export var SynthesizeSpeechOutput$: StaticStructureSchema = [3, n0, _SSO,
  0,
  [_AS, _CTo, _RC],
  [[() => AudioStream, 16], [0, { [_hH]: _CT_ }], [1, { [_hH]: _xaR }]]
];
export var TextEvent$: StaticStructureSchema = [3, n0, _TEe,
  0,
  [_T, _TT, _FSC],
  [0, 0, () => FlushStreamConfiguration$], 1
];
export var ThrottlingReason$: StaticStructureSchema = [3, n0, _TR,
  0,
  [_r, _re],
  [0, 0]
];
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_n, _m],
  [0, 0], 2
];
export var Voice$: StaticStructureSchema = [3, n0, _Vo,
  0,
  [_G, _I, _LCa, _LNa, _N, _ALC, _SE],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0]
];
var EngineList = 64 | 0;
var LanguageCodeList = 64 | 0;
var LexiconDescriptionList: StaticListSchema = [1, n0, _LDL,
  0, () => LexiconDescription$
];
var LexiconNameList = 64 | 0;
var SpeechMarkTypeList = 64 | 0;
var SynthesisTasks: StaticListSchema = [1, n0, _STy,
  0, () => SynthesisTask$
];
var ThrottlingReasonList: StaticListSchema = [1, n0, _TRL,
  0, () => ThrottlingReason$
];
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
var VoiceList: StaticListSchema = [1, n0, _VL,
  0, () => Voice$
];
export var StartSpeechSynthesisStreamActionStream$: StaticUnionSchema = [4, n0, _SSSSAS,
  { [_st]: 1 },
  [_TEe, _CSE],
  [() => TextEvent$, () => CloseStreamEvent$]
];
export var StartSpeechSynthesisStreamEventStream$: StaticUnionSchema = [4, n0, _SSSSES,
  { [_st]: 1 },
  [_AE, _SCE, _VE, _SQEE, _SFE, _TE],
  [[() => AudioEvent$, 0], () => StreamClosedEvent$, [() => ValidationException$, 0], [() => ServiceQuotaExceededException$, 0], [() => ServiceFailureException$, 0], [() => ThrottlingException$, 0]]
];
export var DeleteLexicon$: StaticOperationSchema = [9, n0, _DL,
  { [_h]: ["DELETE", "/v1/lexicons/{Name}", 200] }, () => DeleteLexiconInput$, () => DeleteLexiconOutput$
];
export var DescribeVoices$: StaticOperationSchema = [9, n0, _DV,
  { [_h]: ["GET", "/v1/voices", 200] }, () => DescribeVoicesInput$, () => DescribeVoicesOutput$
];
export var GetLexicon$: StaticOperationSchema = [9, n0, _GL,
  { [_h]: ["GET", "/v1/lexicons/{Name}", 200] }, () => GetLexiconInput$, () => GetLexiconOutput$
];
export var GetSpeechSynthesisTask$: StaticOperationSchema = [9, n0, _GSST,
  { [_h]: ["GET", "/v1/synthesisTasks/{TaskId}", 200] }, () => GetSpeechSynthesisTaskInput$, () => GetSpeechSynthesisTaskOutput$
];
export var ListLexicons$: StaticOperationSchema = [9, n0, _LL,
  { [_h]: ["GET", "/v1/lexicons", 200] }, () => ListLexiconsInput$, () => ListLexiconsOutput$
];
export var ListSpeechSynthesisTasks$: StaticOperationSchema = [9, n0, _LSST,
  { [_h]: ["GET", "/v1/synthesisTasks", 200] }, () => ListSpeechSynthesisTasksInput$, () => ListSpeechSynthesisTasksOutput$
];
export var PutLexicon$: StaticOperationSchema = [9, n0, _PL,
  { [_h]: ["PUT", "/v1/lexicons/{Name}", 200] }, () => PutLexiconInput$, () => PutLexiconOutput$
];
export var StartSpeechSynthesisStream$: StaticOperationSchema = [9, n0, _SSSS,
  { [_h]: ["POST", "/v1/synthesisStream", 200] }, () => StartSpeechSynthesisStreamInput$, () => StartSpeechSynthesisStreamOutput$
];
export var StartSpeechSynthesisTask$: StaticOperationSchema = [9, n0, _SSST,
  { [_h]: ["POST", "/v1/synthesisTasks", 200] }, () => StartSpeechSynthesisTaskInput$, () => StartSpeechSynthesisTaskOutput$
];
export var SynthesizeSpeech$: StaticOperationSchema = [9, n0, _SS,
  { [_h]: ["POST", "/v1/speech", 200] }, () => SynthesizeSpeechInput$, () => SynthesizeSpeechOutput$
];
