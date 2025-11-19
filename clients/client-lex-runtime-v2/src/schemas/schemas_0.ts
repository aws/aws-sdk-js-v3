const _AC = "ActiveContext";
const _ACL = "ActiveContextsList";
const _ACPM = "ActiveContextParametersMap";
const _ACTTL = "ActiveContextTimeToLive";
const _ADE = "AccessDeniedException";
const _AIE = "AudioInputEvent";
const _ARE = "AudioResponseEvent";
const _B = "Button";
const _BGE = "BadGatewayException";
const _BL = "ButtonsList";
const _BS = "BlobStream";
const _CE = "ConfigurationEvent";
const _CEo = "ConflictException";
const _CS = "ConfidenceScore";
const _CT = "Content-Type";
const _DA = "DialogAction";
const _DE = "DisconnectionEvent";
const _DFE = "DependencyFailedException";
const _DS = "DeleteSession";
const _DSR = "DeleteSessionRequest";
const _DSRe = "DeleteSessionResponse";
const _DTMFIE = "DTMFInputEvent";
const _DTMFR = "DTMFRegex";
const _ESS = "ElicitSubSlot";
const _GS = "GetSession";
const _GSR = "GetSessionRequest";
const _GSRe = "GetSessionResponse";
const _HE = "HeartbeatEvent";
const _I = "Intent";
const _IRC = "ImageResponseCard";
const _IRE = "IntentResultEvent";
const _ISE = "InternalServerException";
const _In = "Interpretation";
const _Int = "Interpretations";
const _M = "Message";
const _Me = "Messages";
const _PCE = "PlaybackCompletionEvent";
const _PIE = "PlaybackInterruptionEvent";
const _PS = "PutSession";
const _PSR = "PutSessionRequest";
const _PSRu = "PutSessionResponse";
const _RBM = "RecognizedBotMember";
const _RCT = "ResponseContentType";
const _RCT_ = "Response-Content-Type";
const _RH = "RuntimeHints";
const _RHD = "RuntimeHintDetails";
const _RHV = "RuntimeHintValue";
const _RHVL = "RuntimeHintValuesList";
const _RNFE = "ResourceNotFoundException";
const _RT = "RecognizeText";
const _RTR = "RecognizeTextRequest";
const _RTRe = "RecognizeTextResponse";
const _RU = "RecognizeUtterance";
const _RUR = "RecognizeUtteranceRequest";
const _RURe = "RecognizeUtteranceResponse";
const _S = "Slot";
const _SC = "StartConversation";
const _SCR = "StartConversationRequest";
const _SCRES = "StartConversationRequestEventStream";
const _SCRESt = "StartConversationResponseEventStream";
const _SCRt = "StartConversationResponse";
const _SHIM = "SlotHintsIntentMap";
const _SHSM = "SlotHintsSlotMap";
const _SNES = "SensitiveNonEmptyString";
const _SR = "SentimentResponse";
const _SS = "SentimentScore";
const _SSe = "SessionState";
const _Sl = "Slots";
const _T = "Text";
const _TE = "ThrottlingException";
const _TEr = "TranscriptEvent";
const _TIE = "TextInputEvent";
const _TRE = "TextResponseEvent";
const _V = "Value";
const _VE = "ValidationException";
const _Va = "Values";
const _aC = "audioChunk";
const _aCc = "activeContexts";
const _aS = "audioStream";
const _b = "buttons";
const _bAI = "botAliasId";
const _bI = "botId";
const _bN = "botName";
const _c = "client";
const _cA = "contextAttributes";
const _cBEI = "causedByEventId";
const _cM = "conversationMode";
const _cS = "confirmationState";
const _cT = "contentType";
const _cTM = "clientTimestampMillis";
const _co = "content";
const _dA = "dialogAction";
const _dP = "disablePlayback";
const _e = "error";
const _eI = "eventId";
const _eR = "eventReason";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _i = "interpretations";
const _iC = "inputCharacter";
const _iM = "inputMode";
const _iRC = "imageResponseCard";
const _iS = "interpretationSource";
const _iSn = "inputStream";
const _iT = "inputTranscript";
const _iU = "imageUrl";
const _iV = "interpretedValue";
const _in = "intent";
const _lI = "localeId";
const _m = "message";
const _me = "messages";
const _mi = "mixed";
const _n = "name";
const _nC = "nluConfidence";
const _ne = "negative";
const _neu = "neutral";
const _oRI = "originatingRequestId";
const _oV = "originalValue";
const _p = "phrase";
const _po = "positive";
const _rA = "requestAttributes";
const _rBM = "recognizedBotMember";
const _rCT = "responseContentType";
const _rCTe = "requestContentType";
const _rES = "requestEventStream";
const _rESe = "responseEventStream";
const _rH = "runtimeHints";
const _rHV = "runtimeHintValues";
const _rV = "resolvedValues";
const _s = "streaming";
const _sA = "sessionAttributes";
const _sES = "slotElicitationStyle";
const _sH = "slotHints";
const _sI = "sessionId";
const _sR = "sentimentResponse";
const _sS = "sessionState";
const _sSH = "subSlotHints";
const _sSTE = "subSlotToElicit";
const _sSe = "sentimentScore";
const _sSu = "subSlots";
const _sTE = "slotToElicit";
const _sc = "score";
const _se = "server";
const _sen = "sentiment";
const _sh = "shape";
const _sl = "slots";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.lexruntimev2";
const _st = "state";
const _su = "subtitle";
const _t = "text";
const _tTL = "timeToLive";
const _tTLIS = "timeToLiveInSeconds";
const _tTLu = "turnsToLive";
const _ti = "title";
const _tr = "transcript";
const _ty = "type";
const _v = "value";
const _va = "values";
const _wM = "welcomeMessages";
const _xalcm = "x-amz-lex-conversation-mode";
const _xali = "x-amz-lex-interpretations";
const _xalim = "x-amz-lex-input-mode";
const _xalit = "x-amz-lex-input-transcript";
const _xalm = "x-amz-lex-messages";
const _xalra = "x-amz-lex-request-attributes";
const _xalrbm = "x-amz-lex-recognized-bot-member";
const _xalsi = "x-amz-lex-session-id";
const _xalss = "x-amz-lex-session-state";
const n0 = "com.amazonaws.lexruntimev2";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  BadGatewayException as __BadGatewayException,
  ConflictException as __ConflictException,
  DependencyFailedException as __DependencyFailedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { LexRuntimeV2ServiceException as __LexRuntimeV2ServiceException } from "../models/LexRuntimeV2ServiceException";

/* eslint no-var: 0 */

export var BlobStream: StaticSimpleSchema = [
  0,
  n0,
  _BS,
  {
    [_s]: 1,
  },
  42,
];
export var DTMFRegex: StaticSimpleSchema = [0, n0, _DTMFR, 8, 0];
export var SensitiveNonEmptyString: StaticSimpleSchema = [0, n0, _SNES, 8, 0];
export var Text: StaticSimpleSchema = [0, n0, _T, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var ActiveContext: StaticStructureSchema = [
  3,
  n0,
  _AC,
  0,
  [_n, _tTL, _cA],
  [0, () => ActiveContextTimeToLive, [() => ActiveContextParametersMap, 0]],
];
export var ActiveContextTimeToLive: StaticStructureSchema = [3, n0, _ACTTL, 0, [_tTLIS, _tTLu], [1, 1]];
export var AudioInputEvent: StaticStructureSchema = [3, n0, _AIE, 0, [_aC, _cT, _eI, _cTM], [21, 0, 0, 1]];
export var AudioResponseEvent: StaticStructureSchema = [3, n0, _ARE, 0, [_aC, _cT, _eI], [21, 0, 0]];
export var BadGatewayException: StaticErrorSchema = [
  -3,
  n0,
  _BGE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(BadGatewayException, __BadGatewayException);

export var Button: StaticStructureSchema = [3, n0, _B, 0, [_t, _v], [0, 0]];
export var ConfidenceScore: StaticStructureSchema = [3, n0, _CS, 0, [_sc], [1]];
export var ConfigurationEvent: StaticStructureSchema = [
  3,
  n0,
  _CE,
  0,
  [_rA, _rCT, _sS, _wM, _dP, _eI, _cTM],
  [128 | 0, 0, [() => SessionState, 0], [() => Messages, 0], 2, 0, 1],
];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CEo,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var DeleteSessionRequest: StaticStructureSchema = [
  3,
  n0,
  _DSR,
  0,
  [_bI, _bAI, _lI, _sI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ],
];
export var DeleteSessionResponse: StaticStructureSchema = [3, n0, _DSRe, 0, [_bI, _bAI, _lI, _sI], [0, 0, 0, 0]];
export var DependencyFailedException: StaticErrorSchema = [
  -3,
  n0,
  _DFE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(DependencyFailedException, __DependencyFailedException);

export var DialogAction: StaticStructureSchema = [
  3,
  n0,
  _DA,
  0,
  [_ty, _sTE, _sES, _sSTE],
  [0, 0, 0, () => ElicitSubSlot],
];
export var DisconnectionEvent: StaticStructureSchema = [3, n0, _DE, 0, [_eI, _cTM], [0, 1]];
export var DTMFInputEvent: StaticStructureSchema = [3, n0, _DTMFIE, 0, [_iC, _eI, _cTM], [[() => DTMFRegex, 0], 0, 1]];
export var ElicitSubSlot: StaticStructureSchema = [3, n0, _ESS, 0, [_n, _sSTE], [0, () => ElicitSubSlot]];
export var GetSessionRequest: StaticStructureSchema = [
  3,
  n0,
  _GSR,
  0,
  [_bI, _bAI, _lI, _sI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ],
];
export var GetSessionResponse: StaticStructureSchema = [
  3,
  n0,
  _GSRe,
  0,
  [_sI, _me, _i, _sS],
  [0, [() => Messages, 0], () => Interpretations, [() => SessionState, 0]],
];
export var HeartbeatEvent: StaticStructureSchema = [3, n0, _HE, 0, [_eI], [0]];
export var ImageResponseCard: StaticStructureSchema = [
  3,
  n0,
  _IRC,
  0,
  [_ti, _su, _iU, _b],
  [0, 0, 0, () => ButtonsList],
];
export var Intent: StaticStructureSchema = [3, n0, _I, 0, [_n, _sl, _st, _cS], [0, () => Slots, 0, 0]];
export var IntentResultEvent: StaticStructureSchema = [
  3,
  n0,
  _IRE,
  0,
  [_iM, _i, _sS, _rA, _sI, _eI, _rBM],
  [0, () => Interpretations, [() => SessionState, 0], 128 | 0, 0, 0, () => RecognizedBotMember],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var Interpretation: StaticStructureSchema = [
  3,
  n0,
  _In,
  0,
  [_nC, _sR, _in, _iS],
  [() => ConfidenceScore, () => SentimentResponse, () => Intent, 0],
];
export var Message: StaticStructureSchema = [
  3,
  n0,
  _M,
  0,
  [_co, _cT, _iRC],
  [[() => Text, 0], 0, () => ImageResponseCard],
];
export var PlaybackCompletionEvent: StaticStructureSchema = [3, n0, _PCE, 0, [_eI, _cTM], [0, 1]];
export var PlaybackInterruptionEvent: StaticStructureSchema = [3, n0, _PIE, 0, [_eR, _cBEI, _eI], [0, 0, 0]];
export var PutSessionRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var PutSessionResponse: StaticStructureSchema = [
  3,
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
  ],
];
export var RecognizedBotMember: StaticStructureSchema = [3, n0, _RBM, 0, [_bI, _bN], [0, 0]];
export var RecognizeTextRequest: StaticStructureSchema = [
  3,
  n0,
  _RTR,
  0,
  [_bI, _bAI, _lI, _sI, _t, _sS, _rA],
  [[0, 1], [0, 1], [0, 1], [0, 1], [() => Text, 0], [() => SessionState, 0], 128 | 0],
];
export var RecognizeTextResponse: StaticStructureSchema = [
  3,
  n0,
  _RTRe,
  0,
  [_me, _sS, _i, _rA, _sI, _rBM],
  [[() => Messages, 0], [() => SessionState, 0], () => Interpretations, 128 | 0, 0, () => RecognizedBotMember],
];
export var RecognizeUtteranceRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var RecognizeUtteranceResponse: StaticStructureSchema = [
  3,
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
  ],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var RuntimeHintDetails: StaticStructureSchema = [
  3,
  n0,
  _RHD,
  0,
  [_rHV, _sSH],
  [() => RuntimeHintValuesList, () => SlotHintsSlotMap],
];
export var RuntimeHints: StaticStructureSchema = [3, n0, _RH, 0, [_sH], [() => SlotHintsIntentMap]];
export var RuntimeHintValue: StaticStructureSchema = [3, n0, _RHV, 0, [_p], [0]];
export var SentimentResponse: StaticStructureSchema = [3, n0, _SR, 0, [_sen, _sSe], [0, () => SentimentScore]];
export var SentimentScore: StaticStructureSchema = [3, n0, _SS, 0, [_po, _ne, _neu, _mi], [1, 1, 1, 1]];
export var SessionState: StaticStructureSchema = [
  3,
  n0,
  _SSe,
  0,
  [_dA, _in, _aCc, _sA, _oRI, _rH],
  [() => DialogAction, () => Intent, [() => ActiveContextsList, 0], 128 | 0, 0, () => RuntimeHints],
];
export var Slot: StaticStructureSchema = [
  3,
  n0,
  _S,
  0,
  [_v, _sh, _va, _sSu],
  [() => Value, 0, () => Values, () => Slots],
];
export var StartConversationRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var StartConversationResponse: StaticStructureSchema = [
  3,
  n0,
  _SCRt,
  0,
  [_rESe],
  [[() => StartConversationResponseEventStream, 16]],
];
export var TextInputEvent: StaticStructureSchema = [3, n0, _TIE, 0, [_t, _eI, _cTM], [[() => Text, 0], 0, 1]];
export var TextResponseEvent: StaticStructureSchema = [3, n0, _TRE, 0, [_me, _eI], [[() => Messages, 0], 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var TranscriptEvent: StaticStructureSchema = [3, n0, _TEr, 0, [_tr, _eI], [0, 0]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var Value: StaticStructureSchema = [3, n0, _V, 0, [_oV, _iV, _rV], [0, 0, 64 | 0]];
export var __Unit = "unit" as const;

export var LexRuntimeV2ServiceException: StaticErrorSchema = [-3, _sm, "LexRuntimeV2ServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(LexRuntimeV2ServiceException, __LexRuntimeV2ServiceException);

export var ActiveContextsList: StaticListSchema = [1, n0, _ACL, 0, [() => ActiveContext, 0]];
export var ButtonsList: StaticListSchema = [1, n0, _BL, 0, () => Button];
export var Interpretations: StaticListSchema = [1, n0, _Int, 0, () => Interpretation];
export var Messages: StaticListSchema = [1, n0, _Me, 0, [() => Message, 0]];
export var RuntimeHintValuesList: StaticListSchema = [1, n0, _RHVL, 0, () => RuntimeHintValue];
export var StringList = 64 | 0;

export var Values: StaticListSchema = [1, n0, _Va, 0, () => Slot];
export var ActiveContextParametersMap: StaticMapSchema = [2, n0, _ACPM, 0, [0, 0], [() => Text, 0]];
export var SlotHintsIntentMap: StaticMapSchema = [2, n0, _SHIM, 0, 0, () => SlotHintsSlotMap];
export var SlotHintsSlotMap: StaticMapSchema = [2, n0, _SHSM, 0, 0, () => RuntimeHintDetails];
export var Slots: StaticMapSchema = [2, n0, _Sl, 0, 0, () => Slot];
export var StringMap = 128 | 0;

export var StartConversationRequestEventStream: StaticStructureSchema = [
  3,
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
  ],
];
export var StartConversationResponseEventStream: StaticStructureSchema = [
  3,
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
  ],
];
export var DeleteSession: StaticOperationSchema = [
  9,
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}", 200],
  },
  () => DeleteSessionRequest,
  () => DeleteSessionResponse,
];
export var GetSession: StaticOperationSchema = [
  9,
  n0,
  _GS,
  {
    [_h]: ["GET", "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}", 200],
  },
  () => GetSessionRequest,
  () => GetSessionResponse,
];
export var PutSession: StaticOperationSchema = [
  9,
  n0,
  _PS,
  {
    [_h]: ["POST", "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}", 200],
  },
  () => PutSessionRequest,
  () => PutSessionResponse,
];
export var RecognizeText: StaticOperationSchema = [
  9,
  n0,
  _RT,
  {
    [_h]: ["POST", "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text", 200],
  },
  () => RecognizeTextRequest,
  () => RecognizeTextResponse,
];
export var RecognizeUtterance: StaticOperationSchema = [
  9,
  n0,
  _RU,
  {
    [_h]: ["POST", "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance", 200],
  },
  () => RecognizeUtteranceRequest,
  () => RecognizeUtteranceResponse,
];
export var StartConversation: StaticOperationSchema = [
  9,
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
  () => StartConversationResponse,
];
