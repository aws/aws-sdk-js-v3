const _CE = "ConflictException";
const _DC = "DeleteConnection";
const _DCR = "DeleteConnectionRequest";
const _DTS = "DeleteThingShadow";
const _DTSR = "DeleteThingShadowRequest";
const _DTSRe = "DeleteThingShadowResponse";
const _FE = "ForbiddenException";
const _GRM = "GetRetainedMessage";
const _GRMR = "GetRetainedMessageRequest";
const _GRMRe = "GetRetainedMessageResponse";
const _GTS = "GetThingShadow";
const _GTSR = "GetThingShadowRequest";
const _GTSRe = "GetThingShadowResponse";
const _IFE = "InternalFailureException";
const _IRE = "InvalidRequestException";
const _LNSFT = "ListNamedShadowsForThing";
const _LNSFTR = "ListNamedShadowsForThingRequest";
const _LNSFTRi = "ListNamedShadowsForThingResponse";
const _LRM = "ListRetainedMessages";
const _LRMR = "ListRetainedMessagesRequest";
const _LRMRi = "ListRetainedMessagesResponse";
const _MNAE = "MethodNotAllowedException";
const _P = "Publish";
const _PR = "PublishRequest";
const _RETLE = "RequestEntityTooLargeException";
const _RML = "RetainedMessageList";
const _RMS = "RetainedMessageSummary";
const _RNFE = "ResourceNotFoundException";
const _SJUP = "SynthesizedJsonUserProperties";
const _SUE = "ServiceUnavailableException";
const _TE = "ThrottlingException";
const _UDEE = "UnsupportedDocumentEncodingException";
const _UE = "UnauthorizedException";
const _UTS = "UpdateThingShadow";
const _UTSR = "UpdateThingShadowRequest";
const _UTSRp = "UpdateThingShadowResponse";
const _a = "application/json";
const _c = "client";
const _cD = "correlationData";
const _cI = "clientId";
const _cS = "cleanSession";
const _cT = "contentType";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _lMT = "lastModifiedTime";
const _m = "message";
const _mE = "messageExpiry";
const _mR = "maxResults";
const _mT = "mediaType";
const _n = "name";
const _nT = "nextToken";
const _p = "payload";
const _pFI = "payloadFormatIndicator";
const _pS = "pageSize";
const _pSa = "payloadSize";
const _pWM = "preventWillMessage";
const _q = "qos";
const _r = "results";
const _rT = "retainedTopics";
const _rTe = "responseTopic";
const _re = "retain";
const _s = "server";
const _sN = "shadowName";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.iotdataplane";
const _t = "topic";
const _tN = "thingName";
const _ti = "timestamp";
const _uP = "userProperties";
const _xamcd = "x-amz-mqtt5-correlation-data";
const _xampfi = "x-amz-mqtt5-payload-format-indicator";
const _xamup = "x-amz-mqtt5-user-properties";
const n0 = "com.amazonaws.iotdataplane";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ConflictException as __ConflictException,
  ForbiddenException as __ForbiddenException,
  InternalFailureException as __InternalFailureException,
  InvalidRequestException as __InvalidRequestException,
  MethodNotAllowedException as __MethodNotAllowedException,
  RequestEntityTooLargeException as __RequestEntityTooLargeException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceUnavailableException as __ServiceUnavailableException,
  ThrottlingException as __ThrottlingException,
  UnauthorizedException as __UnauthorizedException,
  UnsupportedDocumentEncodingException as __UnsupportedDocumentEncodingException,
} from "../models/index";
import { IoTDataPlaneServiceException as __IoTDataPlaneServiceException } from "../models/IoTDataPlaneServiceException";

/* eslint no-var: 0 */

export var SynthesizedJsonUserProperties: StaticSimpleSchema = [
  0,
  n0,
  _SJUP,
  {
    [_mT]: _a,
  },
  0,
];
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

export var DeleteConnectionRequest: StaticStructureSchema = [
  3,
  n0,
  _DCR,
  0,
  [_cI, _cS, _pWM],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _cS,
      },
    ],
    [
      2,
      {
        [_hQ]: _pWM,
      },
    ],
  ],
];
export var DeleteThingShadowRequest: StaticStructureSchema = [
  3,
  n0,
  _DTSR,
  0,
  [_tN, _sN],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ],
];
export var DeleteThingShadowResponse: StaticStructureSchema = [3, n0, _DTSRe, 0, [_p], [[21, 16]]];
export var ForbiddenException: StaticErrorSchema = [
  -3,
  n0,
  _FE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ForbiddenException, __ForbiddenException);

export var GetRetainedMessageRequest: StaticStructureSchema = [3, n0, _GRMR, 0, [_t], [[0, 1]]];
export var GetRetainedMessageResponse: StaticStructureSchema = [
  3,
  n0,
  _GRMRe,
  0,
  [_t, _p, _q, _lMT, _uP],
  [0, 21, 1, 1, 21],
];
export var GetThingShadowRequest: StaticStructureSchema = [
  3,
  n0,
  _GTSR,
  0,
  [_tN, _sN],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ],
];
export var GetThingShadowResponse: StaticStructureSchema = [3, n0, _GTSRe, 0, [_p], [[21, 16]]];
export var InternalFailureException: StaticErrorSchema = [
  -3,
  n0,
  _IFE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalFailureException, __InternalFailureException);

export var InvalidRequestException: StaticErrorSchema = [
  -3,
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidRequestException, __InvalidRequestException);

export var ListNamedShadowsForThingRequest: StaticStructureSchema = [
  3,
  n0,
  _LNSFTR,
  0,
  [_tN, _nT, _pS],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
  ],
];
export var ListNamedShadowsForThingResponse: StaticStructureSchema = [
  3,
  n0,
  _LNSFTRi,
  0,
  [_r, _nT, _ti],
  [64 | 0, 0, 1],
];
export var ListRetainedMessagesRequest: StaticStructureSchema = [
  3,
  n0,
  _LRMR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ],
];
export var ListRetainedMessagesResponse: StaticStructureSchema = [
  3,
  n0,
  _LRMRi,
  0,
  [_rT, _nT],
  [() => RetainedMessageList, 0],
];
export var MethodNotAllowedException: StaticErrorSchema = [
  -3,
  n0,
  _MNAE,
  {
    [_e]: _c,
    [_hE]: 405,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MethodNotAllowedException, __MethodNotAllowedException);

export var PublishRequest: StaticStructureSchema = [
  3,
  n0,
  _PR,
  0,
  [_t, _q, _re, _p, _uP, _pFI, _cT, _rTe, _cD, _mE],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _q,
      },
    ],
    [
      2,
      {
        [_hQ]: _re,
      },
    ],
    [21, 16],
    [
      () => SynthesizedJsonUserProperties,
      {
        [_hH]: _xamup,
      },
    ],
    [
      0,
      {
        [_hH]: _xampfi,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rTe,
      },
    ],
    [
      0,
      {
        [_hH]: _xamcd,
      },
    ],
    [
      1,
      {
        [_hQ]: _mE,
      },
    ],
  ],
];
export var RequestEntityTooLargeException: StaticErrorSchema = [
  -3,
  n0,
  _RETLE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(RequestEntityTooLargeException, __RequestEntityTooLargeException);

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

export var RetainedMessageSummary: StaticStructureSchema = [3, n0, _RMS, 0, [_t, _pSa, _q, _lMT], [0, 1, 1, 1]];
export var ServiceUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceUnavailableException, __ServiceUnavailableException);

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

export var UnauthorizedException: StaticErrorSchema = [
  -3,
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnauthorizedException, __UnauthorizedException);

export var UnsupportedDocumentEncodingException: StaticErrorSchema = [
  -3,
  n0,
  _UDEE,
  {
    [_e]: _c,
    [_hE]: 415,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnsupportedDocumentEncodingException, __UnsupportedDocumentEncodingException);

export var UpdateThingShadowRequest: StaticStructureSchema = [
  3,
  n0,
  _UTSR,
  0,
  [_tN, _sN, _p],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [21, 16],
  ],
];
export var UpdateThingShadowResponse: StaticStructureSchema = [3, n0, _UTSRp, 0, [_p], [[21, 16]]];
export var __Unit = "unit" as const;

export var IoTDataPlaneServiceException: StaticErrorSchema = [-3, _sm, "IoTDataPlaneServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(IoTDataPlaneServiceException, __IoTDataPlaneServiceException);

export var NamedShadowList = 64 | 0;

export var RetainedMessageList: StaticListSchema = [1, n0, _RML, 0, () => RetainedMessageSummary];
export var DeleteConnection: StaticOperationSchema = [
  9,
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/connections/{clientId}", 200],
  },
  () => DeleteConnectionRequest,
  () => __Unit,
];
export var DeleteThingShadow: StaticOperationSchema = [
  9,
  n0,
  _DTS,
  {
    [_h]: ["DELETE", "/things/{thingName}/shadow", 200],
  },
  () => DeleteThingShadowRequest,
  () => DeleteThingShadowResponse,
];
export var GetRetainedMessage: StaticOperationSchema = [
  9,
  n0,
  _GRM,
  {
    [_h]: ["GET", "/retainedMessage/{topic}", 200],
  },
  () => GetRetainedMessageRequest,
  () => GetRetainedMessageResponse,
];
export var GetThingShadow: StaticOperationSchema = [
  9,
  n0,
  _GTS,
  {
    [_h]: ["GET", "/things/{thingName}/shadow", 200],
  },
  () => GetThingShadowRequest,
  () => GetThingShadowResponse,
];
export var ListNamedShadowsForThing: StaticOperationSchema = [
  9,
  n0,
  _LNSFT,
  {
    [_h]: ["GET", "/api/things/shadow/ListNamedShadowsForThing/{thingName}", 200],
  },
  () => ListNamedShadowsForThingRequest,
  () => ListNamedShadowsForThingResponse,
];
export var ListRetainedMessages: StaticOperationSchema = [
  9,
  n0,
  _LRM,
  {
    [_h]: ["GET", "/retainedMessage", 200],
  },
  () => ListRetainedMessagesRequest,
  () => ListRetainedMessagesResponse,
];
export var Publish: StaticOperationSchema = [
  9,
  n0,
  _P,
  {
    [_h]: ["POST", "/topics/{topic}", 200],
  },
  () => PublishRequest,
  () => __Unit,
];
export var UpdateThingShadow: StaticOperationSchema = [
  9,
  n0,
  _UTS,
  {
    [_h]: ["POST", "/things/{thingName}/shadow", 200],
  },
  () => UpdateThingShadowRequest,
  () => UpdateThingShadowResponse,
];
