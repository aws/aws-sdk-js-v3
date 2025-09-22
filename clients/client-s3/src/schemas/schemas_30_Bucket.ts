// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _B,
  _BLS,
  _CA,
  _CM,
  _CMD,
  _DN,
  _EA,
  _EBO,
  _G,
  _GBLe,
  _GBLOe,
  _GBLRe,
  _Gr,
  _Gra,
  _h,
  _hH,
  _hi,
  _hP,
  _ID,
  _LE,
  _PBL,
  _PBLR,
  _PDS,
  _Pe,
  _PP,
  _SPi,
  _TB,
  _TG,
  _TGa,
  _TOKF,
  _TP,
  _Ty,
  _URI,
  _x,
  _xA,
  _xaebo,
  _xasca,
  _xN,
  _xNm,
  _xs,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BucketLoggingStatus = struct(n0, _BLS, 0, [_LE], [[() => LoggingEnabled, 0]]);
export var GetBucketLoggingOutput = struct(
  n0,
  _GBLOe,
  {
    [_xN]: _BLS,
  },
  [_LE],
  [[() => LoggingEnabled, 0]]
);
export var GetBucketLoggingRequest = struct(
  n0,
  _GBLRe,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var Grant = struct(
  n0,
  _Gr,
  0,
  [_Gra, _Pe],
  [
    [
      () => Grantee,
      {
        [_xNm]: [_x, _hi],
      },
    ],
    0,
  ]
);
export var Grantee = struct(
  n0,
  _Gra,
  0,
  [_DN, _EA, _ID, _URI, _Ty],
  [
    0,
    0,
    0,
    0,
    [
      0,
      {
        [_xN]: _xs,
        [_xA]: 1,
      },
    ],
  ]
);
export var LoggingEnabled = struct(
  n0,
  _LE,
  0,
  [_TB, _TG, _TP, _TOKF],
  [0, [() => TargetGrants, 0], 0, [() => TargetObjectKeyFormat, 0]]
);
export var PartitionedPrefix = struct(
  n0,
  _PP,
  {
    [_xN]: _PP,
  },
  [_PDS],
  [0]
);
export var PutBucketLoggingRequest = struct(
  n0,
  _PBLR,
  0,
  [_B, _BLS, _CMD, _CA, _EBO],
  [
    [0, 1],
    [
      () => BucketLoggingStatus,
      {
        [_xN]: _BLS,
        [_hP]: 1,
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
export var SimplePrefix = struct(
  n0,
  _SPi,
  {
    [_xN]: _SPi,
  },
  [],
  []
);
export var TargetGrant = struct(
  n0,
  _TGa,
  0,
  [_Gra, _Pe],
  [
    [
      () => Grantee,
      {
        [_xNm]: [_x, _hi],
      },
    ],
    0,
  ]
);
export var TargetObjectKeyFormat = struct(
  n0,
  _TOKF,
  0,
  [_SPi, _PP],
  [
    [
      () => SimplePrefix,
      {
        [_xN]: _SPi,
      },
    ],
    [
      () => PartitionedPrefix,
      {
        [_xN]: _PP,
      },
    ],
  ]
);
export var Grants = list(n0, _G, 0, [
  () => Grant,
  {
    [_xN]: _Gr,
  },
]);
export var TargetGrants = list(n0, _TG, 0, [
  () => TargetGrant,
  {
    [_xN]: _Gr,
  },
]);
export var GetBucketLogging = op(
  n0,
  _GBLe,
  {
    [_h]: ["GET", "/?logging", 200],
  },
  () => GetBucketLoggingRequest,
  () => GetBucketLoggingOutput
);
export var PutBucketLogging = op(
  n0,
  _PBL,
  {
    [_h]: ["PUT", "/?logging", 200],
  },
  () => PutBucketLoggingRequest,
  () => Unit
);
