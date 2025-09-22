// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  BadGatewayException as __BadGatewayException,
  BadRequestException as __BadRequestException,
  ConflictException as __ConflictException,
  DependencyFailedException as __DependencyFailedException,
  InternalFailureException as __InternalFailureException,
  LimitExceededException as __LimitExceededException,
  LoopDetectedException as __LoopDetectedException,
  NotAcceptableException as __NotAcceptableException,
  NotFoundException as __NotFoundException,
  RequestTimeoutException as __RequestTimeoutException,
  UnsupportedMediaTypeException as __UnsupportedMediaTypeException,
} from "../models/index";
import {
  _A,
  _a,
  _AC,
  _aC,
  _ac,
  _ACL,
  _ACPM,
  _ACTTL,
  _aI,
  _aLU,
  _aS,
  _B,
  _b,
  _bA,
  _BGE,
  _bN,
  _BRE,
  _BS,
  _bV,
  _c,
  _CE,
  _cL,
  _cLF,
  _cS,
  _CT,
  _cT,
  _DA,
  _dA,
  _dAT,
  _DFE,
  _DS,
  _dS,
  _DSR,
  _DSRe,
  _e,
  _eIT,
  _eM,
  _fS,
  _GA,
  _gA,
  _gAL,
  _GS,
  _GSR,
  _GSRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _IC,
  _IFE,
  _IL,
  _iN,
  _IS,
  _iS,
  _ISL,
  _iT,
  _iTn,
  _iU,
  _LDE,
  _LEE,
  _lOB,
  _M,
  _m,
  _mF,
  _mT,
  _n,
  _NAE,
  _NFE,
  _nIC,
  _p,
  _PC,
  _PCR,
  _PCRo,
  _PI,
  _PS,
  _PSR,
  _PSRu,
  _PT,
  _PTR,
  _PTRo,
  _RA,
  _rA,
  _rAS,
  _RC,
  _rC,
  _rISV,
  _RTE,
  _s,
  _sA,
  _sc,
  _se,
  _ser,
  _sI,
  _SJACS,
  _SJAS,
  _SJS,
  _sL,
  _sl,
  _SM,
  _SR,
  _sR,
  _SS,
  _sS,
  _SSU,
  _sT,
  _sTE,
  _T,
  _t,
  _ti,
  _tTL,
  _tTLIS,
  _tTLu,
  _ty,
  _uI,
  _UMTE,
  _v,
  _ve,
  _xalac,
  _xalai,
  _xalbv,
  _xalds,
  _xaleit,
  _xalem,
  _xalin,
  _xalit,
  _xalm,
  _xalmf,
  _xalnic,
  _xalra,
  _xals,
  _xals_,
  _xalsa,
  _xalsi,
  _xalste,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BlobStream = sim(n0, _BS, 42, {
  [_s]: 1,
});
export var SensitiveString = sim(n0, _SS, 0, 8);
export var SensitiveStringUnbounded = sim(n0, _SSU, 0, 8);
export var SynthesizedJsonActiveContextsString = sim(n0, _SJACS, 0, {
  [_mT]: _a,
  [_se]: 1,
});
export var SynthesizedJsonAttributesString = sim(n0, _SJAS, 0, {
  [_mT]: _a,
  [_se]: 1,
});
export var SynthesizedJsonString = sim(n0, _SJS, 0, {
  [_mT]: _a,
});
export var Text = sim(n0, _T, 0, 8);
export var ActiveContext = struct(
  n0,
  _AC,
  0,
  [_n, _tTL, _p],
  [0, () => ActiveContextTimeToLive, [() => ActiveContextParametersMap, 0]]
);
export var ActiveContextTimeToLive = struct(n0, _ACTTL, 0, [_tTLIS, _tTLu], [1, 1]);
export var BadGatewayException = error(
  n0,
  _BGE,
  {
    [_e]: _ser,
    [_hE]: 502,
  },
  [_M],
  [0],

  __BadGatewayException
);
export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __BadRequestException
);
export var Button = struct(n0, _B, 0, [_t, _v], [0, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var DeleteSessionRequest = struct(
  n0,
  _DSR,
  0,
  [_bN, _bA, _uI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSessionResponse = struct(n0, _DSRe, 0, [_bN, _bA, _uI, _sI], [0, 0, 0, 0]);
export var DependencyFailedException = error(
  n0,
  _DFE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_M],
  [0],

  __DependencyFailedException
);
export var DialogAction = struct(
  n0,
  _DA,
  0,
  [_ty, _iN, _sl, _sTE, _fS, _m, _mF],
  [0, 0, [() => StringMap, 0], 0, 0, [() => Text, 0], 0]
);
export var GenericAttachment = struct(n0, _GA, 0, [_ti, _sT, _aLU, _iU, _b], [0, 0, 0, 0, () => listOfButtons]);
export var GetSessionRequest = struct(
  n0,
  _GSR,
  0,
  [_bN, _bA, _uI, _cLF],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _cLF,
      },
    ],
  ]
);
export var GetSessionResponse = struct(
  n0,
  _GSRe,
  0,
  [_rISV, _sA, _sI, _dA, _aC],
  [[() => IntentSummaryList, 0], [() => StringMap, 0], 0, [() => DialogAction, 0], [() => ActiveContextsList, 0]]
);
export var IntentConfidence = struct(n0, _IC, 0, [_sc], [1]);
export var IntentSummary = struct(
  n0,
  _IS,
  0,
  [_iN, _cL, _sl, _cS, _dAT, _fS, _sTE],
  [0, 0, [() => StringMap, 0], 0, 0, 0, 0]
);
export var InternalFailureException = error(
  n0,
  _IFE,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalFailureException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_rAS, _m],
  [
    [
      0,
      {
        [_hH]: _RA,
      },
    ],
    0,
  ],

  __LimitExceededException
);
export var LoopDetectedException = error(
  n0,
  _LDE,
  {
    [_e]: _ser,
    [_hE]: 508,
  },
  [_M],
  [0],

  __LoopDetectedException
);
export var NotAcceptableException = error(
  n0,
  _NAE,
  {
    [_e]: _c,
    [_hE]: 406,
  },
  [_m],
  [0],

  __NotAcceptableException
);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NotFoundException
);
export var PostContentRequest = struct(
  n0,
  _PCR,
  0,
  [_bN, _bA, _uI, _sA, _rA, _cT, _ac, _iS, _aC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      () => SynthesizedJsonAttributesString,
      {
        [_hH]: _xalsa,
      },
    ],
    [
      () => SynthesizedJsonAttributesString,
      {
        [_hH]: _xalra,
      },
    ],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [
      0,
      {
        [_hH]: _A,
      },
    ],
    [() => BlobStream, 16],
    [
      () => SynthesizedJsonActiveContextsString,
      {
        [_hH]: _xalac,
      },
    ],
  ]
);
export var PostContentResponse = struct(
  n0,
  _PCRo,
  0,
  [_cT, _iN, _nIC, _aI, _sl, _sA, _sR, _m, _eM, _mF, _dS, _sTE, _iT, _eIT, _aS, _bV, _sI, _aC],
  [
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [
      0,
      {
        [_hH]: _xalin,
      },
    ],
    [
      () => SynthesizedJsonString,
      {
        [_hH]: _xalnic,
      },
    ],
    [
      () => SynthesizedJsonString,
      {
        [_hH]: _xalai,
      },
    ],
    [
      () => SynthesizedJsonString,
      {
        [_hH]: _xals,
      },
    ],
    [
      () => SynthesizedJsonString,
      {
        [_hH]: _xalsa,
      },
    ],
    [
      0,
      {
        [_hH]: _xals_,
      },
    ],
    [
      () => Text,
      {
        [_hH]: _xalm,
      },
    ],
    [
      () => SensitiveString,
      {
        [_hH]: _xalem,
      },
    ],
    [
      0,
      {
        [_hH]: _xalmf,
      },
    ],
    [
      0,
      {
        [_hH]: _xalds,
      },
    ],
    [
      0,
      {
        [_hH]: _xalste,
      },
    ],
    [
      0,
      {
        [_hH]: _xalit,
      },
    ],
    [
      () => SensitiveStringUnbounded,
      {
        [_hH]: _xaleit,
      },
    ],
    [() => BlobStream, 16],
    [
      0,
      {
        [_hH]: _xalbv,
      },
    ],
    [
      0,
      {
        [_hH]: _xalsi,
      },
    ],
    [
      () => SynthesizedJsonActiveContextsString,
      {
        [_hH]: _xalac,
      },
    ],
  ]
);
export var PostTextRequest = struct(
  n0,
  _PTR,
  0,
  [_bN, _bA, _uI, _sA, _rA, _iTn, _aC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [() => StringMap, 0],
    [() => StringMap, 0],
    [() => Text, 0],
    [() => ActiveContextsList, 0],
  ]
);
export var PostTextResponse = struct(
  n0,
  _PTRo,
  0,
  [_iN, _nIC, _aI, _sl, _sA, _m, _sR, _mF, _dS, _sTE, _rC, _sI, _bV, _aC],
  [
    0,
    () => IntentConfidence,
    [() => IntentList, 0],
    [() => StringMap, 0],
    [() => StringMap, 0],
    [() => Text, 0],
    () => SentimentResponse,
    0,
    0,
    0,
    () => ResponseCard,
    0,
    0,
    [() => ActiveContextsList, 0],
  ]
);
export var PredictedIntent = struct(n0, _PI, 0, [_iN, _nIC, _sl], [0, () => IntentConfidence, [() => StringMap, 0]]);
export var PutSessionRequest = struct(
  n0,
  _PSR,
  0,
  [_bN, _bA, _uI, _sA, _dA, _rISV, _ac, _aC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [() => StringMap, 0],
    [() => DialogAction, 0],
    [() => IntentSummaryList, 0],
    [
      0,
      {
        [_hH]: _A,
      },
    ],
    [() => ActiveContextsList, 0],
  ]
);
export var PutSessionResponse = struct(
  n0,
  _PSRu,
  0,
  [_cT, _iN, _sl, _sA, _m, _eM, _mF, _dS, _sTE, _aS, _sI, _aC],
  [
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [
      0,
      {
        [_hH]: _xalin,
      },
    ],
    [
      () => SynthesizedJsonString,
      {
        [_hH]: _xals,
      },
    ],
    [
      () => SynthesizedJsonString,
      {
        [_hH]: _xalsa,
      },
    ],
    [
      () => Text,
      {
        [_hH]: _xalm,
      },
    ],
    [
      () => SensitiveString,
      {
        [_hH]: _xalem,
      },
    ],
    [
      0,
      {
        [_hH]: _xalmf,
      },
    ],
    [
      0,
      {
        [_hH]: _xalds,
      },
    ],
    [
      0,
      {
        [_hH]: _xalste,
      },
    ],
    [() => BlobStream, 16],
    [
      0,
      {
        [_hH]: _xalsi,
      },
    ],
    [
      () => SynthesizedJsonActiveContextsString,
      {
        [_hH]: _xalac,
      },
    ],
  ]
);
export var RequestTimeoutException = error(
  n0,
  _RTE,
  {
    [_e]: _c,
    [_hE]: 408,
  },
  [_m],
  [0],

  __RequestTimeoutException
);
export var ResponseCard = struct(n0, _RC, 0, [_ve, _cT, _gA], [0, 0, () => genericAttachmentList]);
export var SentimentResponse = struct(n0, _SR, 0, [_sL, _sS], [0, 0]);
export var UnsupportedMediaTypeException = error(
  n0,
  _UMTE,
  {
    [_e]: _c,
    [_hE]: 415,
  },
  [_m],
  [0],

  __UnsupportedMediaTypeException
);
export var Unit = "unit" as const;

export var ActiveContextsList = list(n0, _ACL, 8, [() => ActiveContext, 0]);
export var genericAttachmentList = list(n0, _gAL, 0, () => GenericAttachment);
export var IntentList = list(n0, _IL, 0, [() => PredictedIntent, 0]);
export var IntentSummaryList = list(n0, _ISL, 0, [() => IntentSummary, 0]);
export var listOfButtons = list(n0, _lOB, 0, () => Button);
export var ActiveContextParametersMap = map(n0, _ACPM, 0, [0, 0], [() => Text, 0]);
export var StringMap = map(n0, _SM, 8, 0, 0);
export var DeleteSession = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/bot/{botName}/alias/{botAlias}/user/{userId}/session", 200],
  },
  () => DeleteSessionRequest,
  () => DeleteSessionResponse
);
export var GetSession = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/bot/{botName}/alias/{botAlias}/user/{userId}/session", 200],
  },
  () => GetSessionRequest,
  () => GetSessionResponse
);
export var PostContent = op(
  n0,
  _PC,
  {
    [_h]: ["POST", "/bot/{botName}/alias/{botAlias}/user/{userId}/content", 200],
  },
  () => PostContentRequest,
  () => PostContentResponse
);
export var PostText = op(
  n0,
  _PT,
  {
    [_h]: ["POST", "/bot/{botName}/alias/{botAlias}/user/{userId}/text", 200],
  },
  () => PostTextRequest,
  () => PostTextResponse
);
export var PutSession = op(
  n0,
  _PS,
  {
    [_h]: ["POST", "/bot/{botName}/alias/{botAlias}/user/{userId}/session", 200],
  },
  () => PutSessionRequest,
  () => PutSessionResponse
);
