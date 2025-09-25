// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

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
} from "../models/index";
import {
  _A,
  _ALC,
  _AS,
  _At,
  _C,
  _c,
  _CT,
  _CT_,
  _CTo,
  _DL,
  _DLI,
  _DLO,
  _DV,
  _DVI,
  _DVO,
  _E,
  _e,
  _ENSE,
  _G,
  _GL,
  _GLI,
  _GLO,
  _GSST,
  _GSSTI,
  _GSSTO,
  _h,
  _hE,
  _hH,
  _hQ,
  _I,
  _IALC,
  _ILE,
  _INTE,
  _ISBE,
  _ISE,
  _ISKE,
  _ISRE,
  _ISTAE,
  _ITIE,
  _L,
  _LA,
  _LAe,
  _LC,
  _LCa,
  _LCe,
  _LD,
  _LDL,
  _Le,
  _LL,
  _LLI,
  _LLO,
  _LM,
  _LN,
  _LNa,
  _LNFE,
  _LNSE,
  _LSEE,
  _LSST,
  _LSSTI,
  _LSSTO,
  _m,
  _MLLEE,
  _MLNEE,
  _MNSFFE,
  _MR,
  _N,
  _NT,
  _OF,
  _OSBN,
  _OSKP,
  _OU,
  _PL,
  _PLI,
  _PLO,
  _RC,
  _S,
  _s,
  _SE,
  _se,
  _SFE,
  _SMNSFTTE,
  _SMT,
  _SR,
  _SS,
  _SSI,
  _SSO,
  _SSST,
  _SSSTI,
  _SSSTO,
  _ST,
  _St,
  _STA,
  _STNFE,
  _STy,
  _T,
  _TI,
  _TLEE,
  _TS,
  _TSR,
  _TT,
  _UPAE,
  _UPLE,
  _V,
  _VI,
  _VL,
  _Vo,
  _xaR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AudioStream = sim(n0, _AS, 42, {
  [_s]: 1,
});
export var LexiconContent = sim(n0, _LC, 0, 8);
export var DeleteLexiconInput = struct(n0, _DLI, 0, [_N], [[0, 1]]);
export var DeleteLexiconOutput = struct(n0, _DLO, 0, [], []);
export var DescribeVoicesInput = struct(
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
  ]
);
export var DescribeVoicesOutput = struct(n0, _DVO, 0, [_V, _NT], [() => VoiceList, 0]);
export var EngineNotSupportedException = error(
  n0,
  _ENSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __EngineNotSupportedException
);
export var GetLexiconInput = struct(n0, _GLI, 0, [_N], [[0, 1]]);
export var GetLexiconOutput = struct(n0, _GLO, 0, [_L, _LA], [[() => Lexicon, 0], () => LexiconAttributes]);
export var GetSpeechSynthesisTaskInput = struct(n0, _GSSTI, 0, [_TI], [[0, 1]]);
export var GetSpeechSynthesisTaskOutput = struct(n0, _GSSTO, 0, [_ST], [() => SynthesisTask]);
export var InvalidLexiconException = error(
  n0,
  _ILE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidLexiconException
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidNextTokenException
);
export var InvalidS3BucketException = error(
  n0,
  _ISBE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidS3BucketException
);
export var InvalidS3KeyException = error(
  n0,
  _ISKE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidS3KeyException
);
export var InvalidSampleRateException = error(
  n0,
  _ISRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidSampleRateException
);
export var InvalidSnsTopicArnException = error(
  n0,
  _ISTAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidSnsTopicArnException
);
export var InvalidSsmlException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidSsmlException
);
export var InvalidTaskIdException = error(
  n0,
  _ITIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidTaskIdException
);
export var LanguageNotSupportedException = error(
  n0,
  _LNSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __LanguageNotSupportedException
);
export var Lexicon = struct(n0, _L, 0, [_C, _N], [[() => LexiconContent, 0], 0]);
export var LexiconAttributes = struct(n0, _LA, 0, [_A, _LCa, _LM, _LAe, _LCe, _S], [0, 0, 4, 0, 1, 1]);
export var LexiconDescription = struct(n0, _LD, 0, [_N, _At], [0, () => LexiconAttributes]);
export var LexiconNotFoundException = error(
  n0,
  _LNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __LexiconNotFoundException
);
export var LexiconSizeExceededException = error(
  n0,
  _LSEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __LexiconSizeExceededException
);
export var ListLexiconsInput = struct(
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
  ]
);
export var ListLexiconsOutput = struct(n0, _LLO, 0, [_Le, _NT], [() => LexiconDescriptionList, 0]);
export var ListSpeechSynthesisTasksInput = struct(
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
  ]
);
export var ListSpeechSynthesisTasksOutput = struct(n0, _LSSTO, 0, [_NT, _STy], [0, () => SynthesisTasks]);
export var MarksNotSupportedForFormatException = error(
  n0,
  _MNSFFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __MarksNotSupportedForFormatException
);
export var MaxLexemeLengthExceededException = error(
  n0,
  _MLLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __MaxLexemeLengthExceededException
);
export var MaxLexiconsNumberExceededException = error(
  n0,
  _MLNEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __MaxLexiconsNumberExceededException
);
export var PutLexiconInput = struct(
  n0,
  _PLI,
  0,
  [_N, _C],
  [
    [0, 1],
    [() => LexiconContent, 0],
  ]
);
export var PutLexiconOutput = struct(n0, _PLO, 0, [], []);
export var ServiceFailureException = error(
  n0,
  _SFE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __ServiceFailureException
);
export var SsmlMarksNotSupportedForTextTypeException = error(
  n0,
  _SMNSFTTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __SsmlMarksNotSupportedForTextTypeException
);
export var StartSpeechSynthesisTaskInput = struct(
  n0,
  _SSSTI,
  0,
  [_E, _LCa, _LN, _OF, _OSBN, _OSKP, _SR, _STA, _SMT, _T, _TT, _VI],
  [0, 0, 64 | 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 0]
);
export var StartSpeechSynthesisTaskOutput = struct(n0, _SSSTO, 0, [_ST], [() => SynthesisTask]);
export var SynthesisTask = struct(
  n0,
  _ST,
  0,
  [_E, _TI, _TS, _TSR, _OU, _CT, _RC, _STA, _LN, _OF, _SR, _SMT, _TT, _VI, _LCa],
  [0, 0, 0, 0, 0, 4, 1, 0, 64 | 0, 0, 0, 64 | 0, 0, 0, 0]
);
export var SynthesisTaskNotFoundException = error(
  n0,
  _STNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __SynthesisTaskNotFoundException
);
export var SynthesizeSpeechInput = struct(
  n0,
  _SSI,
  0,
  [_E, _LCa, _LN, _OF, _SR, _SMT, _T, _TT, _VI],
  [0, 0, 64 | 0, 0, 0, 64 | 0, 0, 0, 0]
);
export var SynthesizeSpeechOutput = struct(
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
  ]
);
export var TextLengthExceededException = error(
  n0,
  _TLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TextLengthExceededException
);
export var UnsupportedPlsAlphabetException = error(
  n0,
  _UPAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UnsupportedPlsAlphabetException
);
export var UnsupportedPlsLanguageException = error(
  n0,
  _UPLE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UnsupportedPlsLanguageException
);
export var Voice = struct(n0, _Vo, 0, [_G, _I, _LCa, _LNa, _N, _ALC, _SE], [0, 0, 0, 0, 0, 64 | 0, 64 | 0]);
export var Unit = "unit" as const;

export var EngineList = 64 | 0;

export var LanguageCodeList = 64 | 0;

export var LexiconDescriptionList = list(n0, _LDL, 0, () => LexiconDescription);
export var LexiconNameList = 64 | 0;

export var SpeechMarkTypeList = 64 | 0;

export var SynthesisTasks = list(n0, _STy, 0, () => SynthesisTask);
export var VoiceList = list(n0, _VL, 0, () => Voice);
export var DeleteLexicon = op(
  n0,
  _DL,
  {
    [_h]: ["DELETE", "/v1/lexicons/{Name}", 200],
  },
  () => DeleteLexiconInput,
  () => DeleteLexiconOutput
);
export var DescribeVoices = op(
  n0,
  _DV,
  {
    [_h]: ["GET", "/v1/voices", 200],
  },
  () => DescribeVoicesInput,
  () => DescribeVoicesOutput
);
export var GetLexicon = op(
  n0,
  _GL,
  {
    [_h]: ["GET", "/v1/lexicons/{Name}", 200],
  },
  () => GetLexiconInput,
  () => GetLexiconOutput
);
export var GetSpeechSynthesisTask = op(
  n0,
  _GSST,
  {
    [_h]: ["GET", "/v1/synthesisTasks/{TaskId}", 200],
  },
  () => GetSpeechSynthesisTaskInput,
  () => GetSpeechSynthesisTaskOutput
);
export var ListLexicons = op(
  n0,
  _LL,
  {
    [_h]: ["GET", "/v1/lexicons", 200],
  },
  () => ListLexiconsInput,
  () => ListLexiconsOutput
);
export var ListSpeechSynthesisTasks = op(
  n0,
  _LSST,
  {
    [_h]: ["GET", "/v1/synthesisTasks", 200],
  },
  () => ListSpeechSynthesisTasksInput,
  () => ListSpeechSynthesisTasksOutput
);
export var PutLexicon = op(
  n0,
  _PL,
  {
    [_h]: ["PUT", "/v1/lexicons/{Name}", 200],
  },
  () => PutLexiconInput,
  () => PutLexiconOutput
);
export var StartSpeechSynthesisTask = op(
  n0,
  _SSST,
  {
    [_h]: ["POST", "/v1/synthesisTasks", 200],
  },
  () => StartSpeechSynthesisTaskInput,
  () => StartSpeechSynthesisTaskOutput
);
export var SynthesizeSpeech = op(
  n0,
  _SS,
  {
    [_h]: ["POST", "/v1/speech", 200],
  },
  () => SynthesizeSpeechInput,
  () => SynthesizeSpeechOutput
);
