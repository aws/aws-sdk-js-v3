// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cT,
  _EM,
  _EMR,
  _EMRn,
  _fPF,
  _GMS,
  _GMSR,
  _GMSRe,
  _h,
  _i,
  _iT,
  _jN,
  _s,
  _sR,
  _uA,
  _UMS,
  _UMSp,
  _UMSR,
  _UMSRp,
  _UMSRpd,
  _UMSRpda,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EnableMacieRequest = struct(
  n0,
  _EMR,
  0,
  [_cT, _fPF, _s],
  [
    [
      0,
      {
        [_jN]: _cT,
        [_iT]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _fPF,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var EnableMacieResponse = struct(n0, _EMRn, 0, [], []);
export var GetMacieSessionRequest = struct(n0, _GMSR, 0, [], []);
export var GetMacieSessionResponse = struct(
  n0,
  _GMSRe,
  0,
  [_cA, _fPF, _sR, _s, _uA],
  [
    [
      5,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _fPF,
      },
    ],
    [
      0,
      {
        [_jN]: _sR,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
    [
      5,
      {
        [_jN]: _uA,
      },
    ],
  ]
);
export var UpdateMacieSessionRequest = struct(
  n0,
  _UMSR,
  0,
  [_fPF, _s],
  [
    [
      0,
      {
        [_jN]: _fPF,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var UpdateMacieSessionResponse = struct(n0, _UMSRp, 0, [], []);
export var UpdateMemberSessionRequest = struct(
  n0,
  _UMSRpd,
  0,
  [_i, _s],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var UpdateMemberSessionResponse = struct(n0, _UMSRpda, 0, [], []);
export var EnableMacie = op(
  n0,
  _EM,
  {
    [_h]: ["POST", "/macie", 200],
  },
  () => EnableMacieRequest,
  () => EnableMacieResponse
);
export var GetMacieSession = op(
  n0,
  _GMS,
  {
    [_h]: ["GET", "/macie", 200],
  },
  () => GetMacieSessionRequest,
  () => GetMacieSessionResponse
);
export var UpdateMacieSession = op(
  n0,
  _UMS,
  {
    [_h]: ["PATCH", "/macie", 200],
  },
  () => UpdateMacieSessionRequest,
  () => UpdateMacieSessionResponse
);
export var UpdateMemberSession = op(
  n0,
  _UMSp,
  {
    [_h]: ["PATCH", "/macie/members/{id}", 200],
  },
  () => UpdateMemberSessionRequest,
  () => UpdateMemberSessionResponse
);
