const _A = "Alphabet";
const _ALC = "AdditionalLanguageCodes";
const _AS = "AudioStream";
const _At = "Attributes";
const _C = "Content";
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
const _SE = "SupportedEngines";
const _SFE = "ServiceFailureException";
const _SMNSFTTE = "SsmlMarksNotSupportedForTextTypeException";
const _SMT = "SpeechMarkTypes";
const _SR = "SampleRate";
const _SS = "SynthesizeSpeech";
const _SSI = "SynthesizeSpeechInput";
const _SSO = "SynthesizeSpeechOutput";
const _SSST = "StartSpeechSynthesisTask";
const _SSSTI = "StartSpeechSynthesisTaskInput";
const _SSSTO = "StartSpeechSynthesisTaskOutput";
const _ST = "SynthesisTask";
const _STA = "SnsTopicArn";
const _STNFE = "SynthesisTaskNotFoundException";
const _STy = "SynthesisTasks";
const _St = "Status";
const _T = "Text";
const _TI = "TaskId";
const _TLEE = "TextLengthExceededException";
const _TS = "TaskStatus";
const _TSR = "TaskStatusReason";
const _TT = "TextType";
const _UPAE = "UnsupportedPlsAlphabetException";
const _UPLE = "UnsupportedPlsLanguageException";
const _V = "Voices";
const _VI = "VoiceId";
const _VL = "VoiceList";
const _Vo = "Voice";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _m = "message";
const _s = "streaming";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.polly";
const _xaR = "x-amzn-RequestCharacters";
const n0 = "com.amazonaws.polly";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  EngineNotSupportedException as __EngineNotSupportedException,
  InvalidLexiconException as __InvalidLexiconException,
  InvalidNextTokenException as __InvalidNextTokenException,
  InvalidS3BucketException as __InvalidS3BucketException,
  InvalidS3KeyException as __InvalidS3KeyException,
  InvalidSampleRateException as __InvalidSampleRateException,
  InvalidSnsTopicArnException as __InvalidSnsTopicArnException,
  InvalidSsmlException as __InvalidSsmlException,
  InvalidTaskIdException as __InvalidTaskIdException,
  LanguageNotSupportedException as __LanguageNotSupportedException,
  LexiconNotFoundException as __LexiconNotFoundException,
  LexiconSizeExceededException as __LexiconSizeExceededException,
  MarksNotSupportedForFormatException as __MarksNotSupportedForFormatException,
  MaxLexemeLengthExceededException as __MaxLexemeLengthExceededException,
  MaxLexiconsNumberExceededException as __MaxLexiconsNumberExceededException,
  ServiceFailureException as __ServiceFailureException,
  SsmlMarksNotSupportedForTextTypeException as __SsmlMarksNotSupportedForTextTypeException,
  SynthesisTaskNotFoundException as __SynthesisTaskNotFoundException,
  TextLengthExceededException as __TextLengthExceededException,
  UnsupportedPlsAlphabetException as __UnsupportedPlsAlphabetException,
  UnsupportedPlsLanguageException as __UnsupportedPlsLanguageException,
} from "../models/errors";
import { PollyServiceException as __PollyServiceException } from "../models/PollyServiceException";

/* eslint no-var: 0 */

export var AudioStream: StaticSimpleSchema = [
  0,
  n0,
  _AS,
  {
    [_s]: 1,
  },
  42,
];
export var LexiconContent: StaticSimpleSchema = [0, n0, _LC, 8, 0];
export var DeleteLexiconInput: StaticStructureSchema = [3, n0, _DLI, 0, [_N], [[0, 1]]];
export var DeleteLexiconOutput: StaticStructureSchema = [3, n0, _DLO, 0, [], []];
export var DescribeVoicesInput: StaticStructureSchema = [
  3,
  n0,
  _DVI,
  0,
  [_E, _LCa, _IALC, _NT],
  [
    [
      0,
      {
        [_hQ]: _E,
      },
    ],
    [
      0,
      {
        [_hQ]: _LCa,
      },
    ],
    [
      2,
      {
        [_hQ]: _IALC,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ],
];
export var DescribeVoicesOutput: StaticStructureSchema = [3, n0, _DVO, 0, [_V, _NT], [() => VoiceList, 0]];
export var EngineNotSupportedException: StaticErrorSchema = [
  -3,
  n0,
  _ENSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(EngineNotSupportedException, __EngineNotSupportedException);

export var GetLexiconInput: StaticStructureSchema = [3, n0, _GLI, 0, [_N], [[0, 1]]];
export var GetLexiconOutput: StaticStructureSchema = [
  3,
  n0,
  _GLO,
  0,
  [_L, _LA],
  [[() => Lexicon, 0], () => LexiconAttributes],
];
export var GetSpeechSynthesisTaskInput: StaticStructureSchema = [3, n0, _GSSTI, 0, [_TI], [[0, 1]]];
export var GetSpeechSynthesisTaskOutput: StaticStructureSchema = [3, n0, _GSSTO, 0, [_ST], [() => SynthesisTask]];
export var InvalidLexiconException: StaticErrorSchema = [
  -3,
  n0,
  _ILE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidLexiconException, __InvalidLexiconException);

export var InvalidNextTokenException: StaticErrorSchema = [
  -3,
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidNextTokenException, __InvalidNextTokenException);

export var InvalidS3BucketException: StaticErrorSchema = [
  -3,
  n0,
  _ISBE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidS3BucketException, __InvalidS3BucketException);

export var InvalidS3KeyException: StaticErrorSchema = [
  -3,
  n0,
  _ISKE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidS3KeyException, __InvalidS3KeyException);

export var InvalidSampleRateException: StaticErrorSchema = [
  -3,
  n0,
  _ISRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidSampleRateException, __InvalidSampleRateException);

export var InvalidSnsTopicArnException: StaticErrorSchema = [
  -3,
  n0,
  _ISTAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidSnsTopicArnException, __InvalidSnsTopicArnException);

export var InvalidSsmlException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidSsmlException, __InvalidSsmlException);

export var InvalidTaskIdException: StaticErrorSchema = [
  -3,
  n0,
  _ITIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidTaskIdException, __InvalidTaskIdException);

export var LanguageNotSupportedException: StaticErrorSchema = [
  -3,
  n0,
  _LNSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(LanguageNotSupportedException, __LanguageNotSupportedException);

export var Lexicon: StaticStructureSchema = [3, n0, _L, 0, [_C, _N], [[() => LexiconContent, 0], 0]];
export var LexiconAttributes: StaticStructureSchema = [
  3,
  n0,
  _LA,
  0,
  [_A, _LCa, _LM, _LAe, _LCe, _S],
  [0, 0, 4, 0, 1, 1],
];
export var LexiconDescription: StaticStructureSchema = [3, n0, _LD, 0, [_N, _At], [0, () => LexiconAttributes]];
export var LexiconNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _LNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(LexiconNotFoundException, __LexiconNotFoundException);

export var LexiconSizeExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LSEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(LexiconSizeExceededException, __LexiconSizeExceededException);

export var ListLexiconsInput: StaticStructureSchema = [
  3,
  n0,
  _LLI,
  0,
  [_NT],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ],
];
export var ListLexiconsOutput: StaticStructureSchema = [3, n0, _LLO, 0, [_Le, _NT], [() => LexiconDescriptionList, 0]];
export var ListSpeechSynthesisTasksInput: StaticStructureSchema = [
  3,
  n0,
  _LSSTI,
  0,
  [_MR, _NT, _St],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
  ],
];
export var ListSpeechSynthesisTasksOutput: StaticStructureSchema = [
  3,
  n0,
  _LSSTO,
  0,
  [_NT, _STy],
  [0, () => SynthesisTasks],
];
export var MarksNotSupportedForFormatException: StaticErrorSchema = [
  -3,
  n0,
  _MNSFFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MarksNotSupportedForFormatException, __MarksNotSupportedForFormatException);

export var MaxLexemeLengthExceededException: StaticErrorSchema = [
  -3,
  n0,
  _MLLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MaxLexemeLengthExceededException, __MaxLexemeLengthExceededException);

export var MaxLexiconsNumberExceededException: StaticErrorSchema = [
  -3,
  n0,
  _MLNEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MaxLexiconsNumberExceededException, __MaxLexiconsNumberExceededException);

export var PutLexiconInput: StaticStructureSchema = [
  3,
  n0,
  _PLI,
  0,
  [_N, _C],
  [
    [0, 1],
    [() => LexiconContent, 0],
  ],
];
export var PutLexiconOutput: StaticStructureSchema = [3, n0, _PLO, 0, [], []];
export var ServiceFailureException: StaticErrorSchema = [
  -3,
  n0,
  _SFE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceFailureException, __ServiceFailureException);

export var SsmlMarksNotSupportedForTextTypeException: StaticErrorSchema = [
  -3,
  n0,
  _SMNSFTTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(
  SsmlMarksNotSupportedForTextTypeException,
  __SsmlMarksNotSupportedForTextTypeException
);

export var StartSpeechSynthesisTaskInput: StaticStructureSchema = [
  3,
  n0,
  _SSSTI,
  0,
  [_E, _LCa, _LN, _OF, _OSBN, _OSKP, _SR, _STA, _SMT, _T, _TT, _VI],
  [0, 0, 64 | 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 0],
];
export var StartSpeechSynthesisTaskOutput: StaticStructureSchema = [3, n0, _SSSTO, 0, [_ST], [() => SynthesisTask]];
export var SynthesisTask: StaticStructureSchema = [
  3,
  n0,
  _ST,
  0,
  [_E, _TI, _TS, _TSR, _OU, _CT, _RC, _STA, _LN, _OF, _SR, _SMT, _TT, _VI, _LCa],
  [0, 0, 0, 0, 0, 4, 1, 0, 64 | 0, 0, 0, 64 | 0, 0, 0, 0],
];
export var SynthesisTaskNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _STNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(SynthesisTaskNotFoundException, __SynthesisTaskNotFoundException);

export var SynthesizeSpeechInput: StaticStructureSchema = [
  3,
  n0,
  _SSI,
  0,
  [_E, _LCa, _LN, _OF, _SR, _SMT, _T, _TT, _VI],
  [0, 0, 64 | 0, 0, 0, 64 | 0, 0, 0, 0],
];
export var SynthesizeSpeechOutput: StaticStructureSchema = [
  3,
  n0,
  _SSO,
  0,
  [_AS, _CTo, _RC],
  [
    [() => AudioStream, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      1,
      {
        [_hH]: _xaR,
      },
    ],
  ],
];
export var TextLengthExceededException: StaticErrorSchema = [
  -3,
  n0,
  _TLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TextLengthExceededException, __TextLengthExceededException);

export var UnsupportedPlsAlphabetException: StaticErrorSchema = [
  -3,
  n0,
  _UPAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnsupportedPlsAlphabetException, __UnsupportedPlsAlphabetException);

export var UnsupportedPlsLanguageException: StaticErrorSchema = [
  -3,
  n0,
  _UPLE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnsupportedPlsLanguageException, __UnsupportedPlsLanguageException);

export var Voice: StaticStructureSchema = [
  3,
  n0,
  _Vo,
  0,
  [_G, _I, _LCa, _LNa, _N, _ALC, _SE],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0],
];
export var __Unit = "unit" as const;

export var PollyServiceException: StaticErrorSchema = [-3, _sm, "PollyServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(PollyServiceException, __PollyServiceException);

export var EngineList = 64 | 0;

export var LanguageCodeList = 64 | 0;

export var LexiconDescriptionList: StaticListSchema = [1, n0, _LDL, 0, () => LexiconDescription];
export var LexiconNameList = 64 | 0;

export var SpeechMarkTypeList = 64 | 0;

export var SynthesisTasks: StaticListSchema = [1, n0, _STy, 0, () => SynthesisTask];
export var VoiceList: StaticListSchema = [1, n0, _VL, 0, () => Voice];
export var DeleteLexicon: StaticOperationSchema = [
  9,
  n0,
  _DL,
  {
    [_h]: ["DELETE", "/v1/lexicons/{Name}", 200],
  },
  () => DeleteLexiconInput,
  () => DeleteLexiconOutput,
];
export var DescribeVoices: StaticOperationSchema = [
  9,
  n0,
  _DV,
  {
    [_h]: ["GET", "/v1/voices", 200],
  },
  () => DescribeVoicesInput,
  () => DescribeVoicesOutput,
];
export var GetLexicon: StaticOperationSchema = [
  9,
  n0,
  _GL,
  {
    [_h]: ["GET", "/v1/lexicons/{Name}", 200],
  },
  () => GetLexiconInput,
  () => GetLexiconOutput,
];
export var GetSpeechSynthesisTask: StaticOperationSchema = [
  9,
  n0,
  _GSST,
  {
    [_h]: ["GET", "/v1/synthesisTasks/{TaskId}", 200],
  },
  () => GetSpeechSynthesisTaskInput,
  () => GetSpeechSynthesisTaskOutput,
];
export var ListLexicons: StaticOperationSchema = [
  9,
  n0,
  _LL,
  {
    [_h]: ["GET", "/v1/lexicons", 200],
  },
  () => ListLexiconsInput,
  () => ListLexiconsOutput,
];
export var ListSpeechSynthesisTasks: StaticOperationSchema = [
  9,
  n0,
  _LSST,
  {
    [_h]: ["GET", "/v1/synthesisTasks", 200],
  },
  () => ListSpeechSynthesisTasksInput,
  () => ListSpeechSynthesisTasksOutput,
];
export var PutLexicon: StaticOperationSchema = [
  9,
  n0,
  _PL,
  {
    [_h]: ["PUT", "/v1/lexicons/{Name}", 200],
  },
  () => PutLexiconInput,
  () => PutLexiconOutput,
];
export var StartSpeechSynthesisTask: StaticOperationSchema = [
  9,
  n0,
  _SSST,
  {
    [_h]: ["POST", "/v1/synthesisTasks", 200],
  },
  () => StartSpeechSynthesisTaskInput,
  () => StartSpeechSynthesisTaskOutput,
];
export var SynthesizeSpeech: StaticOperationSchema = [
  9,
  n0,
  _SS,
  {
    [_h]: ["POST", "/v1/speech", 200],
  },
  () => SynthesizeSpeechInput,
  () => SynthesizeSpeechOutput,
];
