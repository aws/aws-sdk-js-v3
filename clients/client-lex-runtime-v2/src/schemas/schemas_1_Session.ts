// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  BadGatewayException as __BadGatewayException,
  ConflictException as __ConflictException,
  DependencyFailedException as __DependencyFailedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _AC,
  _aC,
  _aCc,
  _ACL,
  _ACPM,
  _ACTTL,
  _ADE,
  _AIE,
  _ARE,
  _aS,
  _B,
  _b,
  _bAI,
  _BGE,
  _bI,
  _BL,
  _bN,
  _BS,
  _c,
  _cA,
  _cBEI,
  _CE,
  _CEo,
  _cM,
  _co,
  _CS,
  _cS,
  _CT,
  _cT,
  _cTM,
  _DA,
  _dA,
  _DE,
  _DFE,
  _dP,
  _DS,
  _DSR,
  _DSRe,
  _DTMFIE,
  _DTMFR,
  _e,
  _eI,
  _eR,
  _ESS,
  _GS,
  _GSR,
  _GSRe,
  _h,
  _HE,
  _hE,
  _hH,
  _I,
  _i,
  _iC,
  _iM,
  _In,
  _in,
  _Int,
  _IRC,
  _iRC,
  _IRE,
  _iS,
  _ISE,
  _iSn,
  _iT,
  _iU,
  _iV,
  _lI,
  _M,
  _m,
  _Me,
  _me,
  _mi,
  _n,
  _nC,
  _ne,
  _neu,
  _oRI,
  _oV,
  _p,
  _PCE,
  _PIE,
  _po,
  _PS,
  _PSR,
  _PSRu,
  _rA,
  _RBM,
  _rBM,
  _RCT,
  _rCT,
  _RCT_,
  _rCTe,
  _rES,
  _rESe,
  _RH,
  _rH,
  _RHD,
  _RHV,
  _rHV,
  _RHVL,
  _RNFE,
  _RT,
  _RTR,
  _RTRe,
  _RU,
  _RUR,
  _RURe,
  _rV,
  _S,
  _s,
  _sA,
  _SC,
  _sc,
  _SCR,
  _SCRES,
  _SCRESt,
  _SCRt,
  _se,
  _sen,
  _sES,
  _sH,
  _sh,
  _SHIM,
  _SHSM,
  _sI,
  _Sl,
  _sl,
  _SNES,
  _SR,
  _sR,
  _SS,
  _sS,
  _SSe,
  _sSe,
  _sSH,
  _sSTE,
  _sSu,
  _st,
  _sTE,
  _su,
  _T,
  _t,
  _TE,
  _TEr,
  _ti,
  _TIE,
  _tr,
  _TRE,
  _tTL,
  _tTLIS,
  _tTLu,
  _ty,
  _V,
  _v,
  _Va,
  _va,
  _VE,
  _wM,
  _xalcm,
  _xali,
  _xalim,
  _xalit,
  _xalm,
  _xalra,
  _xalrbm,
  _xalsi,
  _xalss,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BlobStream = sim(n0, _BS, 42, {
  [_s]: 1,
});
export var DTMFRegex = sim(n0, _DTMFR, 0, 8);
export var SensitiveNonEmptyString = sim(n0, _SNES, 0, 8);
export var Text = sim(n0, _T, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ActiveContext = struct(
  n0,
  _AC,
  0,
  [_n, _tTL, _cA],
  [0, () => ActiveContextTimeToLive, [() => ActiveContextParametersMap, 0]]
);
export var ActiveContextTimeToLive = struct(n0, _ACTTL, 0, [_tTLIS, _tTLu], [1, 1]);
export var AudioInputEvent = struct(n0, _AIE, 0, [_aC, _cT, _eI, _cTM], [21, 0, 0, 1]);
export var AudioResponseEvent = struct(n0, _ARE, 0, [_aC, _cT, _eI], [21, 0, 0]);
export var BadGatewayException = error(
  n0,
  _BGE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_m],
  [0],

  __BadGatewayException
);
export var Button = struct(n0, _B, 0, [_t, _v], [0, 0]);
export var ConfidenceScore = struct(n0, _CS, 0, [_sc], [1]);
export var ConfigurationEvent = struct(
  n0,
  _CE,
  0,
  [_rA, _rCT, _sS, _wM, _dP, _eI, _cTM],
  [128 | 0, 0, [() => SessionState, 0], [() => Messages, 0], 2, 0, 1]
);
export var ConflictException = error(
  n0,
  _CEo,
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
  [_bI, _bAI, _lI, _sI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSessionResponse = struct(n0, _DSRe, 0, [_bI, _bAI, _lI, _sI], [0, 0, 0, 0]);
export var DependencyFailedException = error(
  n0,
  _DFE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m],
  [0],

  __DependencyFailedException
);
export var DialogAction = struct(n0, _DA, 0, [_ty, _sTE, _sES, _sSTE], [0, 0, 0, () => ElicitSubSlot]);
export var DisconnectionEvent = struct(n0, _DE, 0, [_eI, _cTM], [0, 1]);
export var DTMFInputEvent = struct(n0, _DTMFIE, 0, [_iC, _eI, _cTM], [[() => DTMFRegex, 0], 0, 1]);
export var ElicitSubSlot = struct(n0, _ESS, 0, [_n, _sSTE], [0, () => ElicitSubSlot]);
export var GetSessionRequest = struct(
  n0,
  _GSR,
  0,
  [_bI, _bAI, _lI, _sI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetSessionResponse = struct(
  n0,
  _GSRe,
  0,
  [_sI, _me, _i, _sS],
  [0, [() => Messages, 0], () => Interpretations, [() => SessionState, 0]]
);
export var HeartbeatEvent = struct(n0, _HE, 0, [_eI], [0]);
export var ImageResponseCard = struct(n0, _IRC, 0, [_ti, _su, _iU, _b], [0, 0, 0, () => ButtonsList]);
export var Intent = struct(n0, _I, 0, [_n, _sl, _st, _cS], [0, () => Slots, 0, 0]);
export var IntentResultEvent = struct(
  n0,
  _IRE,
  0,
  [_iM, _i, _sS, _rA, _sI, _eI, _rBM],
  [0, () => Interpretations, [() => SessionState, 0], 128 | 0, 0, 0, () => RecognizedBotMember]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var Interpretation = struct(
  n0,
  _In,
  0,
  [_nC, _sR, _in, _iS],
  [() => ConfidenceScore, () => SentimentResponse, () => Intent, 0]
);
export var Message = struct(n0, _M, 0, [_co, _cT, _iRC], [[() => Text, 0], 0, () => ImageResponseCard]);
export var PlaybackCompletionEvent = struct(n0, _PCE, 0, [_eI, _cTM], [0, 1]);
export var PlaybackInterruptionEvent = struct(n0, _PIE, 0, [_eR, _cBEI, _eI], [0, 0, 0]);
export var PutSessionRequest = struct(
  n0,
  _PSR,
  0,
  [_bI, _bAI, _lI, _sI, _me, _sS, _rA, _rCT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [() => Messages, 0],
    [() => SessionState, 0],
    128 | 0,
    [
      0,
      {
        [_hH]: _RCT,
      },
    ],
  ]
);
export var PutSessionResponse = struct(
  n0,
  _PSRu,
  0,
  [_cT, _me, _sS, _rA, _sI, _aS],
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
        [_hH]: _xalm,
      },
    ],
    [
      0,
      {
        [_hH]: _xalss,
      },
    ],
    [
      0,
      {
        [_hH]: _xalra,
      },
    ],
    [
      0,
      {
        [_hH]: _xalsi,
      },
    ],
    [() => BlobStream, 16],
  ]
);
export var RecognizedBotMember = struct(n0, _RBM, 0, [_bI, _bN], [0, 0]);
export var RecognizeTextRequest = struct(
  n0,
  _RTR,
  0,
  [_bI, _bAI, _lI, _sI, _t, _sS, _rA],
  [[0, 1], [0, 1], [0, 1], [0, 1], [() => Text, 0], [() => SessionState, 0], 128 | 0]
);
export var RecognizeTextResponse = struct(
  n0,
  _RTRe,
  0,
  [_me, _sS, _i, _rA, _sI, _rBM],
  [[() => Messages, 0], [() => SessionState, 0], () => Interpretations, 128 | 0, 0, () => RecognizedBotMember]
);
export var RecognizeUtteranceRequest = struct(
  n0,
  _RUR,
  0,
  [_bI, _bAI, _lI, _sI, _sS, _rA, _rCTe, _rCT, _iSn],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      () => SensitiveNonEmptyString,
      {
        [_hH]: _xalss,
      },
    ],
    [
      () => SensitiveNonEmptyString,
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
        [_hH]: _RCT_,
      },
    ],
    [() => BlobStream, 16],
  ]
);
export var RecognizeUtteranceResponse = struct(
  n0,
  _RURe,
  0,
  [_iM, _cT, _me, _i, _sS, _rA, _sI, _iT, _aS, _rBM],
  [
    [
      0,
      {
        [_hH]: _xalim,
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
        [_hH]: _xalm,
      },
    ],
    [
      0,
      {
        [_hH]: _xali,
      },
    ],
    [
      0,
      {
        [_hH]: _xalss,
      },
    ],
    [
      0,
      {
        [_hH]: _xalra,
      },
    ],
    [
      0,
      {
        [_hH]: _xalsi,
      },
    ],
    [
      0,
      {
        [_hH]: _xalit,
      },
    ],
    [() => BlobStream, 16],
    [
      0,
      {
        [_hH]: _xalrbm,
      },
    ],
  ]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var RuntimeHintDetails = struct(
  n0,
  _RHD,
  0,
  [_rHV, _sSH],
  [() => RuntimeHintValuesList, () => SlotHintsSlotMap]
);
export var RuntimeHints = struct(n0, _RH, 0, [_sH], [() => SlotHintsIntentMap]);
export var RuntimeHintValue = struct(n0, _RHV, 0, [_p], [0]);
export var SentimentResponse = struct(n0, _SR, 0, [_sen, _sSe], [0, () => SentimentScore]);
export var SentimentScore = struct(n0, _SS, 0, [_po, _ne, _neu, _mi], [1, 1, 1, 1]);
export var SessionState = struct(
  n0,
  _SSe,
  0,
  [_dA, _in, _aCc, _sA, _oRI, _rH],
  [() => DialogAction, () => Intent, [() => ActiveContextsList, 0], 128 | 0, 0, () => RuntimeHints]
);
export var Slot = struct(n0, _S, 0, [_v, _sh, _va, _sSu], [() => Value, 0, () => Values, () => Slots]);
export var StartConversationRequest = struct(
  n0,
  _SCR,
  0,
  [_bI, _bAI, _lI, _sI, _cM, _rES],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xalcm,
      },
    ],
    [() => StartConversationRequestEventStream, 16],
  ]
);
export var StartConversationResponse = struct(
  n0,
  _SCRt,
  0,
  [_rESe],
  [[() => StartConversationResponseEventStream, 16]]
);
export var TextInputEvent = struct(n0, _TIE, 0, [_t, _eI, _cTM], [[() => Text, 0], 0, 1]);
export var TextResponseEvent = struct(n0, _TRE, 0, [_me, _eI], [[() => Messages, 0], 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var TranscriptEvent = struct(n0, _TEr, 0, [_tr, _eI], [0, 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var Value = struct(n0, _V, 0, [_oV, _iV, _rV], [0, 0, 64 | 0]);
export var Unit = "unit" as const;

export var ActiveContextsList = list(n0, _ACL, 0, [() => ActiveContext, 0]);
export var ButtonsList = list(n0, _BL, 0, () => Button);
export var Interpretations = list(n0, _Int, 0, () => Interpretation);
export var Messages = list(n0, _Me, 0, [() => Message, 0]);
export var RuntimeHintValuesList = list(n0, _RHVL, 0, () => RuntimeHintValue);
export var StringList = 64 | 0;

export var Values = list(n0, _Va, 0, () => Slot);
export var ActiveContextParametersMap = map(n0, _ACPM, 0, [0, 0], [() => Text, 0]);
export var SlotHintsIntentMap = map(n0, _SHIM, 0, 0, () => SlotHintsSlotMap);
export var SlotHintsSlotMap = map(n0, _SHSM, 0, 0, () => RuntimeHintDetails);
export var Slots = map(n0, _Sl, 0, 0, () => Slot);
export var StringMap = 128 | 0;

export var StartConversationRequestEventStream = uni(
  n0,
  _SCRES,
  {
    [_s]: 1,
  },
  [_CE, _AIE, _DTMFIE, _TIE, _PCE, _DE],
  [
    [() => ConfigurationEvent, 0],
    () => AudioInputEvent,
    [() => DTMFInputEvent, 0],
    [() => TextInputEvent, 0],
    () => PlaybackCompletionEvent,
    () => DisconnectionEvent,
  ]
);
export var StartConversationResponseEventStream = uni(
  n0,
  _SCRESt,
  {
    [_s]: 1,
  },
  [_PIE, _TEr, _IRE, _TRE, _ARE, _HE, _ADE, _RNFE, _VE, _TE, _ISE, _CEo, _DFE, _BGE],
  [
    () => PlaybackInterruptionEvent,
    () => TranscriptEvent,
    [() => IntentResultEvent, 0],
    [() => TextResponseEvent, 0],
    () => AudioResponseEvent,
    () => HeartbeatEvent,
    [() => AccessDeniedException, 0],
    [() => ResourceNotFoundException, 0],
    [() => ValidationException, 0],
    [() => ThrottlingException, 0],
    [() => InternalServerException, 0],
    [() => ConflictException, 0],
    [() => DependencyFailedException, 0],
    [() => BadGatewayException, 0],
  ]
);
export var DeleteSession = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}", 200],
  },
  () => DeleteSessionRequest,
  () => DeleteSessionResponse
);
export var GetSession = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}", 200],
  },
  () => GetSessionRequest,
  () => GetSessionResponse
);
export var PutSession = op(
  n0,
  _PS,
  {
    [_h]: ["POST", "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}", 200],
  },
  () => PutSessionRequest,
  () => PutSessionResponse
);
export var RecognizeText = op(
  n0,
  _RT,
  {
    [_h]: ["POST", "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text", 200],
  },
  () => RecognizeTextRequest,
  () => RecognizeTextResponse
);
export var RecognizeUtterance = op(
  n0,
  _RU,
  {
    [_h]: ["POST", "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance", 200],
  },
  () => RecognizeUtteranceRequest,
  () => RecognizeUtteranceResponse
);
export var StartConversation = op(
  n0,
  _SC,
  {
    [_h]: [
      "POST",
      "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation",
      200,
    ],
  },
  () => StartConversationRequest,
  () => StartConversationResponse
);
