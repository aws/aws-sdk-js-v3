// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

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
import {
  _a,
  _c,
  _cD,
  _CE,
  _cI,
  _cS,
  _cT,
  _DC,
  _DCR,
  _DTS,
  _DTSR,
  _DTSRe,
  _e,
  _FE,
  _GRM,
  _GRMR,
  _GRMRe,
  _GTS,
  _GTSR,
  _GTSRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _IFE,
  _IRE,
  _lMT,
  _LNSFT,
  _LNSFTR,
  _LNSFTRi,
  _LRM,
  _LRMR,
  _LRMRi,
  _m,
  _mE,
  _MNAE,
  _mR,
  _mT,
  _n,
  _nT,
  _P,
  _p,
  _pFI,
  _PR,
  _pS,
  _pSa,
  _pWM,
  _q,
  _r,
  _re,
  _RETLE,
  _RML,
  _RMS,
  _RNFE,
  _rT,
  _rTe,
  _s,
  _SJUP,
  _sN,
  _SUE,
  _t,
  _TE,
  _ti,
  _tN,
  _UDEE,
  _UE,
  _uP,
  _UTS,
  _UTSR,
  _UTSRp,
  _xamcd,
  _xampfi,
  _xamup,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SynthesizedJsonUserProperties = sim(n0, _SJUP, 0, {
  [_mT]: _a,
});
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
export var DeleteConnectionRequest = struct(
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
  ]
);
export var DeleteThingShadowRequest = struct(
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
  ]
);
export var DeleteThingShadowResponse = struct(n0, _DTSRe, 0, [_p], [[21, 16]]);
export var ForbiddenException = error(
  n0,
  _FE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __ForbiddenException
);
export var GetRetainedMessageRequest = struct(n0, _GRMR, 0, [_t], [[0, 1]]);
export var GetRetainedMessageResponse = struct(n0, _GRMRe, 0, [_t, _p, _q, _lMT, _uP], [0, 21, 1, 1, 21]);
export var GetThingShadowRequest = struct(
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
  ]
);
export var GetThingShadowResponse = struct(n0, _GTSRe, 0, [_p], [[21, 16]]);
export var InternalFailureException = error(
  n0,
  _IFE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalFailureException
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidRequestException
);
export var ListNamedShadowsForThingRequest = struct(
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
  ]
);
export var ListNamedShadowsForThingResponse = struct(n0, _LNSFTRi, 0, [_r, _nT, _ti], [64 | 0, 0, 1]);
export var ListRetainedMessagesRequest = struct(
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
  ]
);
export var ListRetainedMessagesResponse = struct(n0, _LRMRi, 0, [_rT, _nT], [() => RetainedMessageList, 0]);
export var MethodNotAllowedException = error(
  n0,
  _MNAE,
  {
    [_e]: _c,
    [_hE]: 405,
  },
  [_m],
  [0],

  __MethodNotAllowedException
);
export var PublishRequest = struct(
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
  ]
);
export var RequestEntityTooLargeException = error(
  n0,
  _RETLE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_m],
  [0],

  __RequestEntityTooLargeException
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
export var RetainedMessageSummary = struct(n0, _RMS, 0, [_t, _pSa, _q, _lMT], [0, 1, 1, 1]);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
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
export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],

  __UnauthorizedException
);
export var UnsupportedDocumentEncodingException = error(
  n0,
  _UDEE,
  {
    [_e]: _c,
    [_hE]: 415,
  },
  [_m],
  [0],

  __UnsupportedDocumentEncodingException
);
export var UpdateThingShadowRequest = struct(
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
  ]
);
export var UpdateThingShadowResponse = struct(n0, _UTSRp, 0, [_p], [[21, 16]]);
export var Unit = "unit" as const;

export var NamedShadowList = 64 | 0;

export var RetainedMessageList = list(n0, _RML, 0, () => RetainedMessageSummary);
export var DeleteConnection = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/connections/{clientId}", 200],
  },
  () => DeleteConnectionRequest,
  () => Unit
);
export var DeleteThingShadow = op(
  n0,
  _DTS,
  {
    [_h]: ["DELETE", "/things/{thingName}/shadow", 200],
  },
  () => DeleteThingShadowRequest,
  () => DeleteThingShadowResponse
);
export var GetRetainedMessage = op(
  n0,
  _GRM,
  {
    [_h]: ["GET", "/retainedMessage/{topic}", 200],
  },
  () => GetRetainedMessageRequest,
  () => GetRetainedMessageResponse
);
export var GetThingShadow = op(
  n0,
  _GTS,
  {
    [_h]: ["GET", "/things/{thingName}/shadow", 200],
  },
  () => GetThingShadowRequest,
  () => GetThingShadowResponse
);
export var ListNamedShadowsForThing = op(
  n0,
  _LNSFT,
  {
    [_h]: ["GET", "/api/things/shadow/ListNamedShadowsForThing/{thingName}", 200],
  },
  () => ListNamedShadowsForThingRequest,
  () => ListNamedShadowsForThingResponse
);
export var ListRetainedMessages = op(
  n0,
  _LRM,
  {
    [_h]: ["GET", "/retainedMessage", 200],
  },
  () => ListRetainedMessagesRequest,
  () => ListRetainedMessagesResponse
);
export var Publish = op(
  n0,
  _P,
  {
    [_h]: ["POST", "/topics/{topic}", 200],
  },
  () => PublishRequest,
  () => Unit
);
export var UpdateThingShadow = op(
  n0,
  _UTS,
  {
    [_h]: ["POST", "/things/{thingName}/shadow", 200],
  },
  () => UpdateThingShadowRequest,
  () => UpdateThingShadowResponse
);
