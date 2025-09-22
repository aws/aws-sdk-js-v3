// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _B,
  _BGR,
  _CA,
  _Cod,
  _De,
  _Del,
  _DM,
  _DMVI,
  _DO,
  _DOe,
  _DOele,
  _DOOe,
  _DORe,
  _DRel,
  _EBO,
  _Er,
  _Err,
  _ET,
  _h,
  _hH,
  _hP,
  _K,
  _LMT,
  _Mes,
  _MFA,
  _Ob,
  _Obj,
  _OI,
  _OIL,
  _Q,
  _RC,
  _RP,
  _Si,
  _VI,
  _xabgr,
  _xaebo,
  _xam_,
  _xarc,
  _xarp,
  _xasca,
  _xF,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Delete = struct(
  n0,
  _De,
  0,
  [_Ob, _Q],
  [
    [
      () => ObjectIdentifierList,
      {
        [_xN]: _Obj,
        [_xF]: 1,
      },
    ],
    2,
  ]
);
export var DeletedObject = struct(n0, _DO, 0, [_K, _VI, _DM, _DMVI], [0, 0, 2, 0]);
export var DeleteObjectsOutput = struct(
  n0,
  _DOOe,
  {
    [_xN]: _DRel,
  },
  [_Del, _RC, _Er],
  [
    [
      () => DeletedObjects,
      {
        [_xF]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
    [
      () => Errors,
      {
        [_xN]: _Err,
        [_xF]: 1,
      },
    ],
  ]
);
export var DeleteObjectsRequest = struct(
  n0,
  _DORe,
  0,
  [_B, _De, _MFA, _RP, _BGR, _EBO, _CA],
  [
    [0, 1],
    [
      () => Delete,
      {
        [_xN]: _De,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xam_,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      2,
      {
        [_hH]: _xabgr,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
  ]
);
export var _Error = struct(n0, _Err, 0, [_K, _VI, _Cod, _Mes], [0, 0, 0, 0]);
export var ObjectIdentifier = struct(n0, _OI, 0, [_K, _VI, _ET, _LMT, _Si], [0, 0, 0, 6, 1]);
export var DeletedObjects = list(n0, _DOe, 0, () => DeletedObject);
export var Errors = list(n0, _Er, 0, () => _Error);
export var ObjectIdentifierList = list(n0, _OIL, 0, () => ObjectIdentifier);
export var DeleteObjects = op(
  n0,
  _DOele,
  {
    [_h]: ["POST", "/?delete", 200],
  },
  () => DeleteObjectsRequest,
  () => DeleteObjectsOutput
);
