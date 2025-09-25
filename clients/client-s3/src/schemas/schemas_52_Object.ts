// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _BGR,
  _CA,
  _CM,
  _CMD,
  _EBO,
  _GORe,
  _GORO,
  _GORR,
  _h,
  _hH,
  _hP,
  _hQ,
  _K,
  _Mo,
  _OLR,
  _PORO,
  _PORR,
  _PORu,
  _RC,
  _Ret,
  _RP,
  _RUD,
  _VI,
  _vI,
  _xabgr,
  _xaebo,
  _xarc,
  _xarp,
  _xasca,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetObjectRetentionOutput = struct(
  n0,
  _GORO,
  0,
  [_Ret],
  [
    [
      () => ObjectLockRetention,
      {
        [_xN]: _Ret,
        [_hP]: 1,
      },
    ],
  ]
);
export var GetObjectRetentionRequest = struct(
  n0,
  _GORR,
  0,
  [_B, _K, _VI, _RP, _EBO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var ObjectLockRetention = struct(n0, _OLR, 0, [_Mo, _RUD], [0, 5]);
export var PutObjectRetentionOutput = struct(
  n0,
  _PORO,
  0,
  [_RC],
  [
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var PutObjectRetentionRequest = struct(
  n0,
  _PORR,
  0,
  [_B, _K, _Ret, _RP, _VI, _BGR, _CMD, _CA, _EBO],
  [
    [0, 1],
    [0, 1],
    [
      () => ObjectLockRetention,
      {
        [_xN]: _Ret,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hQ]: _vI,
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
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var GetObjectRetention = op(
  n0,
  _GORe,
  {
    [_h]: ["GET", "/{Key+}?retention", 200],
  },
  () => GetObjectRetentionRequest,
  () => GetObjectRetentionOutput
);
export var PutObjectRetention = op(
  n0,
  _PORu,
  {
    [_h]: ["PUT", "/{Key+}?retention", 200],
  },
  () => PutObjectRetentionRequest,
  () => PutObjectRetentionOutput
);
