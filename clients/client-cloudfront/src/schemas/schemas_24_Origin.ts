// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  OriginAccessControlAlreadyExists as __OriginAccessControlAlreadyExists,
  TooManyOriginAccessControls as __TooManyOriginAccessControls,
} from "../models/index";
import {
  _c,
  _COAC,
  _COACR,
  _COACRr,
  _De,
  _e,
  _ET,
  _GOAC,
  _GOACC,
  _GOACCR,
  _GOACCRe,
  _GOACR,
  _GOACRe,
  _h,
  _hE,
  _hH,
  _hP,
  _hQ,
  _I,
  _Id,
  _IM,
  _IM_,
  _IT,
  _L,
  _LOAC,
  _LOACR,
  _LOACRi,
  _M,
  _Ma,
  _MI,
  _N,
  _NM,
  _OAC,
  _OACAE,
  _OACC,
  _OACL,
  _OACOT,
  _OACS,
  _OACSL,
  _Q,
  _SB,
  _SP,
  _TMOAC,
  _UOAC,
  _UOACR,
  _UOACRp,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateOriginAccessControlRequest = struct(
  n0,
  _COACR,
  0,
  [_OACC],
  [
    [
      () => OriginAccessControlConfig,
      {
        [_xN]: _OACC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateOriginAccessControlResult = struct(
  n0,
  _COACRr,
  0,
  [_OAC, _L, _ET],
  [
    [() => OriginAccessControl, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetOriginAccessControlConfigRequest = struct(n0, _GOACCR, 0, [_Id], [[0, 1]]);
export var GetOriginAccessControlConfigResult = struct(
  n0,
  _GOACCRe,
  0,
  [_OACC, _ET],
  [
    [() => OriginAccessControlConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetOriginAccessControlRequest = struct(n0, _GOACR, 0, [_Id], [[0, 1]]);
export var GetOriginAccessControlResult = struct(
  n0,
  _GOACRe,
  0,
  [_OAC, _ET],
  [
    [() => OriginAccessControl, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ListOriginAccessControlsRequest = struct(
  n0,
  _LOACR,
  0,
  [_Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListOriginAccessControlsResult = struct(n0, _LOACRi, 0, [_OACL], [[() => OriginAccessControlList, 16]]);
export var OriginAccessControl = struct(n0, _OAC, 0, [_Id, _OACC], [0, () => OriginAccessControlConfig]);
export var OriginAccessControlAlreadyExists = error(
  n0,
  _OACAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __OriginAccessControlAlreadyExists
);
export var OriginAccessControlConfig = struct(n0, _OACC, 0, [_N, _De, _SP, _SB, _OACOT], [0, 0, 0, 0, 0]);
export var OriginAccessControlList = struct(
  n0,
  _OACL,
  0,
  [_Ma, _NM, _MI, _IT, _Q, _I],
  [0, 0, 1, 2, 1, [() => OriginAccessControlSummaryList, 0]]
);
export var OriginAccessControlSummary = struct(n0, _OACS, 0, [_Id, _De, _N, _SP, _SB, _OACOT], [0, 0, 0, 0, 0, 0]);
export var TooManyOriginAccessControls = error(
  n0,
  _TMOAC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyOriginAccessControls
);
export var UpdateOriginAccessControlRequest = struct(
  n0,
  _UOACR,
  0,
  [_OACC, _Id, _IM],
  [
    [
      () => OriginAccessControlConfig,
      {
        [_xN]: _OACC,
        [_hP]: 1,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var UpdateOriginAccessControlResult = struct(
  n0,
  _UOACRp,
  0,
  [_OAC, _ET],
  [
    [() => OriginAccessControl, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var OriginAccessControlSummaryList = list(n0, _OACSL, 0, [
  () => OriginAccessControlSummary,
  {
    [_xN]: _OACS,
  },
]);
export var CreateOriginAccessControl = op(
  n0,
  _COAC,
  {
    [_h]: ["POST", "/2020-05-31/origin-access-control", 201],
  },
  () => CreateOriginAccessControlRequest,
  () => CreateOriginAccessControlResult
);
export var GetOriginAccessControl = op(
  n0,
  _GOAC,
  {
    [_h]: ["GET", "/2020-05-31/origin-access-control/{Id}", 200],
  },
  () => GetOriginAccessControlRequest,
  () => GetOriginAccessControlResult
);
export var GetOriginAccessControlConfig = op(
  n0,
  _GOACC,
  {
    [_h]: ["GET", "/2020-05-31/origin-access-control/{Id}/config", 200],
  },
  () => GetOriginAccessControlConfigRequest,
  () => GetOriginAccessControlConfigResult
);
export var ListOriginAccessControls = op(
  n0,
  _LOAC,
  {
    [_h]: ["GET", "/2020-05-31/origin-access-control", 200],
  },
  () => ListOriginAccessControlsRequest,
  () => ListOriginAccessControlsResult
);
export var UpdateOriginAccessControl = op(
  n0,
  _UOAC,
  {
    [_h]: ["PUT", "/2020-05-31/origin-access-control/{Id}/config", 200],
  },
  () => UpdateOriginAccessControlRequest,
  () => UpdateOriginAccessControlResult
);
