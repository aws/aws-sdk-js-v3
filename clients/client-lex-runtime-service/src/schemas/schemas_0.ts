const _A = "Accept";
const _AC = "ActiveContext";
const _ACL = "ActiveContextsList";
const _ACPM = "ActiveContextParametersMap";
const _ACTTL = "ActiveContextTimeToLive";
const _B = "Button";
const _BGE = "BadGatewayException";
const _BRE = "BadRequestException";
const _BS = "BlobStream";
const _CE = "ConflictException";
const _CT = "Content-Type";
const _DA = "DialogAction";
const _DFE = "DependencyFailedException";
const _DS = "DeleteSession";
const _DSR = "DeleteSessionRequest";
const _DSRe = "DeleteSessionResponse";
const _GA = "GenericAttachment";
const _GS = "GetSession";
const _GSR = "GetSessionRequest";
const _GSRe = "GetSessionResponse";
const _IC = "IntentConfidence";
const _IFE = "InternalFailureException";
const _IL = "IntentList";
const _IS = "IntentSummary";
const _ISL = "IntentSummaryList";
const _LDE = "LoopDetectedException";
const _LEE = "LimitExceededException";
const _M = "Message";
const _NAE = "NotAcceptableException";
const _NFE = "NotFoundException";
const _PC = "PostContent";
const _PCR = "PostContentRequest";
const _PCRo = "PostContentResponse";
const _PI = "PredictedIntent";
const _PS = "PutSession";
const _PSR = "PutSessionRequest";
const _PSRu = "PutSessionResponse";
const _PT = "PostText";
const _PTR = "PostTextRequest";
const _PTRo = "PostTextResponse";
const _RA = "Retry-After";
const _RC = "ResponseCard";
const _RTE = "RequestTimeoutException";
const _SJACS = "SynthesizedJsonActiveContextsString";
const _SJAS = "SynthesizedJsonAttributesString";
const _SJS = "SynthesizedJsonString";
const _SM = "StringMap";
const _SR = "SentimentResponse";
const _SS = "SensitiveString";
const _SSU = "SensitiveStringUnbounded";
const _T = "Text";
const _UMTE = "UnsupportedMediaTypeException";
const _a = "application/json";
const _aC = "activeContexts";
const _aI = "alternativeIntents";
const _aLU = "attachmentLinkUrl";
const _aS = "audioStream";
const _ac = "accept";
const _b = "buttons";
const _bA = "botAlias";
const _bN = "botName";
const _bV = "botVersion";
const _c = "client";
const _cL = "checkpointLabel";
const _cLF = "checkpointLabelFilter";
const _cS = "confirmationStatus";
const _cT = "contentType";
const _dA = "dialogAction";
const _dAT = "dialogActionType";
const _dS = "dialogState";
const _e = "error";
const _eIT = "encodedInputTranscript";
const _eM = "encodedMessage";
const _fS = "fulfillmentState";
const _gA = "genericAttachments";
const _gAL = "genericAttachmentList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _iN = "intentName";
const _iS = "inputStream";
const _iT = "inputTranscript";
const _iTn = "inputText";
const _iU = "imageUrl";
const _lOB = "listOfButtons";
const _m = "message";
const _mF = "messageFormat";
const _mT = "mediaType";
const _n = "name";
const _nIC = "nluIntentConfidence";
const _p = "parameters";
const _rA = "requestAttributes";
const _rAS = "retryAfterSeconds";
const _rC = "responseCard";
const _rISV = "recentIntentSummaryView";
const _s = "streaming";
const _sA = "sessionAttributes";
const _sI = "sessionId";
const _sL = "sentimentLabel";
const _sR = "sentimentResponse";
const _sS = "sentimentScore";
const _sT = "subTitle";
const _sTE = "slotToElicit";
const _sc = "score";
const _se = "sensitive";
const _ser = "server";
const _sl = "slots";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.lexruntimeservice";
const _t = "text";
const _tTL = "timeToLive";
const _tTLIS = "timeToLiveInSeconds";
const _tTLu = "turnsToLive";
const _ti = "title";
const _ty = "type";
const _uI = "userId";
const _v = "value";
const _ve = "version";
const _xalac = "x-amz-lex-active-contexts";
const _xalai = "x-amz-lex-alternative-intents";
const _xalbv = "x-amz-lex-bot-version";
const _xalds = "x-amz-lex-dialog-state";
const _xaleit = "x-amz-lex-encoded-input-transcript";
const _xalem = "x-amz-lex-encoded-message";
const _xalin = "x-amz-lex-intent-name";
const _xalit = "x-amz-lex-input-transcript";
const _xalm = "x-amz-lex-message";
const _xalmf = "x-amz-lex-message-format";
const _xalnic = "x-amz-lex-nlu-intent-confidence";
const _xalra = "x-amz-lex-request-attributes";
const _xals = "x-amz-lex-slots";
const _xals_ = "x-amz-lex-sentiment";
const _xalsa = "x-amz-lex-session-attributes";
const _xalsi = "x-amz-lex-session-id";
const _xalste = "x-amz-lex-slot-to-elicit";
const n0 = "com.amazonaws.lexruntimeservice";

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
} from "../models/errors";
import { LexRuntimeServiceServiceException as __LexRuntimeServiceServiceException } from "../models/LexRuntimeServiceServiceException";

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
export var SensitiveString: StaticSimpleSchema = [0, n0, _SS, 8, 0];
export var SensitiveStringUnbounded: StaticSimpleSchema = [0, n0, _SSU, 8, 0];
export var SynthesizedJsonActiveContextsString: StaticSimpleSchema = [
  0,
  n0,
  _SJACS,
  {
    [_mT]: _a,
    [_se]: 1,
  },
  0,
];
export var SynthesizedJsonAttributesString: StaticSimpleSchema = [
  0,
  n0,
  _SJAS,
  {
    [_mT]: _a,
    [_se]: 1,
  },
  0,
];
export var SynthesizedJsonString: StaticSimpleSchema = [
  0,
  n0,
  _SJS,
  {
    [_mT]: _a,
  },
  0,
];
export var Text: StaticSimpleSchema = [0, n0, _T, 8, 0];
export var ActiveContext: StaticStructureSchema = [
  3,
  n0,
  _AC,
  0,
  [_n, _tTL, _p],
  [0, () => ActiveContextTimeToLive, [() => ActiveContextParametersMap, 0]],
];
export var ActiveContextTimeToLive: StaticStructureSchema = [3, n0, _ACTTL, 0, [_tTLIS, _tTLu], [1, 1]];
export var BadGatewayException: StaticErrorSchema = [
  -3,
  n0,
  _BGE,
  {
    [_e]: _ser,
    [_hE]: 502,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(BadGatewayException, __BadGatewayException);

export var BadRequestException: StaticErrorSchema = [
  -3,
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);

export var Button: StaticStructureSchema = [3, n0, _B, 0, [_t, _v], [0, 0]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
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
  [_bN, _bA, _uI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ],
];
export var DeleteSessionResponse: StaticStructureSchema = [3, n0, _DSRe, 0, [_bN, _bA, _uI, _sI], [0, 0, 0, 0]];
export var DependencyFailedException: StaticErrorSchema = [
  -3,
  n0,
  _DFE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(DependencyFailedException, __DependencyFailedException);

export var DialogAction: StaticStructureSchema = [
  3,
  n0,
  _DA,
  0,
  [_ty, _iN, _sl, _sTE, _fS, _m, _mF],
  [0, 0, [() => StringMap, 0], 0, 0, [() => Text, 0], 0],
];
export var GenericAttachment: StaticStructureSchema = [
  3,
  n0,
  _GA,
  0,
  [_ti, _sT, _aLU, _iU, _b],
  [0, 0, 0, 0, () => listOfButtons],
];
export var GetSessionRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var GetSessionResponse: StaticStructureSchema = [
  3,
  n0,
  _GSRe,
  0,
  [_rISV, _sA, _sI, _dA, _aC],
  [[() => IntentSummaryList, 0], [() => StringMap, 0], 0, [() => DialogAction, 0], [() => ActiveContextsList, 0]],
];
export var IntentConfidence: StaticStructureSchema = [3, n0, _IC, 0, [_sc], [1]];
export var IntentSummary: StaticStructureSchema = [
  3,
  n0,
  _IS,
  0,
  [_iN, _cL, _sl, _cS, _dAT, _fS, _sTE],
  [0, 0, [() => StringMap, 0], 0, 0, 0, 0],
];
export var InternalFailureException: StaticErrorSchema = [
  -3,
  n0,
  _IFE,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalFailureException, __InternalFailureException);

export var LimitExceededException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var LoopDetectedException: StaticErrorSchema = [
  -3,
  n0,
  _LDE,
  {
    [_e]: _ser,
    [_hE]: 508,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(LoopDetectedException, __LoopDetectedException);

export var NotAcceptableException: StaticErrorSchema = [
  -3,
  n0,
  _NAE,
  {
    [_e]: _c,
    [_hE]: 406,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(NotAcceptableException, __NotAcceptableException);

export var NotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(NotFoundException, __NotFoundException);

export var PostContentRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var PostContentResponse: StaticStructureSchema = [
  3,
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
  ],
];
export var PostTextRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var PostTextResponse: StaticStructureSchema = [
  3,
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
  ],
];
export var PredictedIntent: StaticStructureSchema = [
  3,
  n0,
  _PI,
  0,
  [_iN, _nIC, _sl],
  [0, () => IntentConfidence, [() => StringMap, 0]],
];
export var PutSessionRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var PutSessionResponse: StaticStructureSchema = [
  3,
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
  ],
];
export var RequestTimeoutException: StaticErrorSchema = [
  -3,
  n0,
  _RTE,
  {
    [_e]: _c,
    [_hE]: 408,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(RequestTimeoutException, __RequestTimeoutException);

export var ResponseCard: StaticStructureSchema = [3, n0, _RC, 0, [_ve, _cT, _gA], [0, 0, () => genericAttachmentList]];
export var SentimentResponse: StaticStructureSchema = [3, n0, _SR, 0, [_sL, _sS], [0, 0]];
export var UnsupportedMediaTypeException: StaticErrorSchema = [
  -3,
  n0,
  _UMTE,
  {
    [_e]: _c,
    [_hE]: 415,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnsupportedMediaTypeException, __UnsupportedMediaTypeException);

export var __Unit = "unit" as const;

export var LexRuntimeServiceServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "LexRuntimeServiceServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(LexRuntimeServiceServiceException, __LexRuntimeServiceServiceException);

export var ActiveContextsList: StaticListSchema = [1, n0, _ACL, 8, [() => ActiveContext, 0]];
export var genericAttachmentList: StaticListSchema = [1, n0, _gAL, 0, () => GenericAttachment];
export var IntentList: StaticListSchema = [1, n0, _IL, 0, [() => PredictedIntent, 0]];
export var IntentSummaryList: StaticListSchema = [1, n0, _ISL, 0, [() => IntentSummary, 0]];
export var listOfButtons: StaticListSchema = [1, n0, _lOB, 0, () => Button];
export var ActiveContextParametersMap: StaticMapSchema = [2, n0, _ACPM, 0, [0, 0], [() => Text, 0]];
export var StringMap: StaticMapSchema = [2, n0, _SM, 8, 0, 0];
export var DeleteSession: StaticOperationSchema = [
  9,
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/bot/{botName}/alias/{botAlias}/user/{userId}/session", 200],
  },
  () => DeleteSessionRequest,
  () => DeleteSessionResponse,
];
export var GetSession: StaticOperationSchema = [
  9,
  n0,
  _GS,
  {
    [_h]: ["GET", "/bot/{botName}/alias/{botAlias}/user/{userId}/session", 200],
  },
  () => GetSessionRequest,
  () => GetSessionResponse,
];
export var PostContent: StaticOperationSchema = [
  9,
  n0,
  _PC,
  {
    [_h]: ["POST", "/bot/{botName}/alias/{botAlias}/user/{userId}/content", 200],
  },
  () => PostContentRequest,
  () => PostContentResponse,
];
export var PostText: StaticOperationSchema = [
  9,
  n0,
  _PT,
  {
    [_h]: ["POST", "/bot/{botName}/alias/{botAlias}/user/{userId}/text", 200],
  },
  () => PostTextRequest,
  () => PostTextResponse,
];
export var PutSession: StaticOperationSchema = [
  9,
  n0,
  _PS,
  {
    [_h]: ["POST", "/bot/{botName}/alias/{botAlias}/user/{userId}/session", 200],
  },
  () => PutSessionRequest,
  () => PutSessionResponse,
];
