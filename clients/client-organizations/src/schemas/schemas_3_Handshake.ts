// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  HandshakeAlreadyInStateException as __HandshakeAlreadyInStateException,
  HandshakeConstraintViolationException as __HandshakeConstraintViolationException,
  HandshakeNotFoundException as __HandshakeNotFoundException,
  InvalidHandshakeTransitionException as __InvalidHandshakeTransitionException,
} from "../models/index";
import {
  _Ac,
  _AH,
  _AHR,
  _AHRc,
  _Ar,
  _AT,
  _c,
  _CH,
  _CHR,
  _CHRa,
  _DH,
  _DHe,
  _DHR,
  _DHRe,
  _DHRes,
  _DHResc,
  _e,
  _EAF,
  _EAFR,
  _EAFRn,
  _ET,
  _F,
  _H,
  _Ha,
  _HAISE,
  _HCVE,
  _hE,
  _HF,
  _HI,
  _HNFE,
  _HP,
  _HPa,
  _HPI,
  _HR,
  _HRa,
  _HRV,
  _I,
  _IHTE,
  _LHFA,
  _LHFAR,
  _LHFARi,
  _LHFO,
  _LHFOR,
  _LHFORi,
  _M,
  _MR,
  _NT,
  _Pa,
  _PHI,
  _R,
  _Re,
  _RT,
  _St,
  _T,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var HandshakePartyId = sim(n0, _HPI, 0, 8);
export var HandshakeResourceValue = sim(n0, _HRV, 0, 8);
export var AcceptHandshakeRequest = struct(n0, _AHR, 0, [_HI], [0]);
export var AcceptHandshakeResponse = struct(n0, _AHRc, 0, [_H], [[() => Handshake, 0]]);
export var CancelHandshakeRequest = struct(n0, _CHR, 0, [_HI], [0]);
export var CancelHandshakeResponse = struct(n0, _CHRa, 0, [_H], [[() => Handshake, 0]]);
export var DeclineHandshakeRequest = struct(n0, _DHR, 0, [_HI], [0]);
export var DeclineHandshakeResponse = struct(n0, _DHRe, 0, [_H], [[() => Handshake, 0]]);
export var DescribeHandshakeRequest = struct(n0, _DHRes, 0, [_HI], [0]);
export var DescribeHandshakeResponse = struct(n0, _DHResc, 0, [_H], [[() => Handshake, 0]]);
export var EnableAllFeaturesRequest = struct(n0, _EAFR, 0, [], []);
export var EnableAllFeaturesResponse = struct(n0, _EAFRn, 0, [_H], [[() => Handshake, 0]]);
export var Handshake = struct(
  n0,
  _H,
  0,
  [_I, _Ar, _Pa, _St, _RT, _ET, _Ac, _Re],
  [0, 0, [() => HandshakeParties, 0], 0, 4, 4, 0, [() => HandshakeResources, 0]]
);
export var HandshakeAlreadyInStateException = error(
  n0,
  _HAISE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __HandshakeAlreadyInStateException
);
export var HandshakeConstraintViolationException = error(
  n0,
  _HCVE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _R],
  [0, 0],

  __HandshakeConstraintViolationException
);
export var HandshakeFilter = struct(n0, _HF, 0, [_AT, _PHI], [0, 0]);
export var HandshakeNotFoundException = error(
  n0,
  _HNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __HandshakeNotFoundException
);
export var HandshakeParty = struct(n0, _HP, 0, [_I, _T], [[() => HandshakePartyId, 0], 0]);
export var HandshakeResource = struct(
  n0,
  _HR,
  0,
  [_V, _T, _Re],
  [[() => HandshakeResourceValue, 0], 0, [() => HandshakeResources, 0]]
);
export var InvalidHandshakeTransitionException = error(
  n0,
  _IHTE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __InvalidHandshakeTransitionException
);
export var ListHandshakesForAccountRequest = struct(n0, _LHFAR, 0, [_F, _NT, _MR], [() => HandshakeFilter, 0, 1]);
export var ListHandshakesForAccountResponse = struct(n0, _LHFARi, 0, [_Ha, _NT], [[() => Handshakes, 0], 0]);
export var ListHandshakesForOrganizationRequest = struct(n0, _LHFOR, 0, [_F, _NT, _MR], [() => HandshakeFilter, 0, 1]);
export var ListHandshakesForOrganizationResponse = struct(n0, _LHFORi, 0, [_Ha, _NT], [[() => Handshakes, 0], 0]);
export var HandshakeParties = list(n0, _HPa, 0, [() => HandshakeParty, 0]);
export var HandshakeResources = list(n0, _HRa, 0, [() => HandshakeResource, 0]);
export var Handshakes = list(n0, _Ha, 0, [() => Handshake, 0]);
export var AcceptHandshake = op(
  n0,
  _AH,
  0,
  () => AcceptHandshakeRequest,
  () => AcceptHandshakeResponse
);
export var CancelHandshake = op(
  n0,
  _CH,
  0,
  () => CancelHandshakeRequest,
  () => CancelHandshakeResponse
);
export var DeclineHandshake = op(
  n0,
  _DH,
  0,
  () => DeclineHandshakeRequest,
  () => DeclineHandshakeResponse
);
export var DescribeHandshake = op(
  n0,
  _DHe,
  0,
  () => DescribeHandshakeRequest,
  () => DescribeHandshakeResponse
);
export var EnableAllFeatures = op(
  n0,
  _EAF,
  0,
  () => EnableAllFeaturesRequest,
  () => EnableAllFeaturesResponse
);
export var ListHandshakesForAccount = op(
  n0,
  _LHFA,
  0,
  () => ListHandshakesForAccountRequest,
  () => ListHandshakesForAccountResponse
);
export var ListHandshakesForOrganization = op(
  n0,
  _LHFO,
  0,
  () => ListHandshakesForOrganizationRequest,
  () => ListHandshakesForOrganizationResponse
);
