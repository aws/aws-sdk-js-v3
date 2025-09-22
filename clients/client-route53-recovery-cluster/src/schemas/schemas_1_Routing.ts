// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  EndpointTemporarilyUnavailableException as __EndpointTemporarilyUnavailableException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceLimitExceededException as __ServiceLimitExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _c,
  _CE,
  _CPA,
  _CPN,
  _e,
  _ETUE,
  _f,
  _GRCS,
  _GRCSR,
  _GRCSRe,
  _hE,
  _hH,
  _ISE,
  _lC,
  _LRC,
  _LRCR,
  _LRCRi,
  _m,
  _MR,
  _n,
  _NT,
  _O,
  _r,
  _RA,
  _rAS,
  _RC,
  _RCA,
  _RCN,
  _RCo,
  _RCS,
  _rI,
  _RNFE,
  _rT,
  _s,
  _sC,
  _SLEE,
  _SRTO,
  _TE,
  _URCS,
  _URCSE,
  _URCSEp,
  _URCSp,
  _URCSR,
  _URCSRp,
  _URCSRpd,
  _URCSRpda,
  _VE,
  _VEF,
  _VEFL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

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
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var EndpointTemporarilyUnavailableException = error(
  n0,
  _ETUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_m],
  [0],

  __EndpointTemporarilyUnavailableException
);
export var GetRoutingControlStateRequest = struct(n0, _GRCSR, 0, [_RCA], [0]);
export var GetRoutingControlStateResponse = struct(n0, _GRCSRe, 0, [_RCA, _RCS, _RCN], [0, 0, 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __InternalServerException
);
export var ListRoutingControlsRequest = struct(n0, _LRCR, 0, [_CPA, _NT, _MR], [0, 0, 1]);
export var ListRoutingControlsResponse = struct(n0, _LRCRi, 0, [_RC, _NT], [() => RoutingControls, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var RoutingControl = struct(n0, _RCo, 0, [_CPA, _CPN, _RCA, _RCN, _RCS, _O], [0, 0, 0, 0, 0, 0]);
export var ServiceLimitExceededException = error(
  n0,
  _SLEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _lC, _sC],
  [0, 0, 0, 0, 0],

  __ServiceLimitExceededException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __ThrottlingException
);
export var UpdateRoutingControlStateEntry = struct(n0, _URCSE, 0, [_RCA, _RCS], [0, 0]);
export var UpdateRoutingControlStateRequest = struct(n0, _URCSR, 0, [_RCA, _RCS, _SRTO], [0, 0, 64 | 0]);
export var UpdateRoutingControlStateResponse = struct(n0, _URCSRp, 0, [], []);
export var UpdateRoutingControlStatesRequest = struct(
  n0,
  _URCSRpd,
  0,
  [_URCSEp, _SRTO],
  [() => UpdateRoutingControlStateEntries, 64 | 0]
);
export var UpdateRoutingControlStatesResponse = struct(n0, _URCSRpda, 0, [], []);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r, _f],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var Unit = "unit" as const;

export var Arns = 64 | 0;

export var RoutingControls = list(n0, _RC, 0, () => RoutingControl);
export var UpdateRoutingControlStateEntries = list(n0, _URCSEp, 0, () => UpdateRoutingControlStateEntry);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var GetRoutingControlState = op(
  n0,
  _GRCS,
  0,
  () => GetRoutingControlStateRequest,
  () => GetRoutingControlStateResponse
);
export var ListRoutingControls = op(
  n0,
  _LRC,
  0,
  () => ListRoutingControlsRequest,
  () => ListRoutingControlsResponse
);
export var UpdateRoutingControlState = op(
  n0,
  _URCS,
  0,
  () => UpdateRoutingControlStateRequest,
  () => UpdateRoutingControlStateResponse
);
export var UpdateRoutingControlStates = op(
  n0,
  _URCSp,
  0,
  () => UpdateRoutingControlStatesRequest,
  () => UpdateRoutingControlStatesResponse
);
