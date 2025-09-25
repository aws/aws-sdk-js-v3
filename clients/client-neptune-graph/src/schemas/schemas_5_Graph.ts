// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _CGS,
  _CGSI,
  _CGSO,
  _gIr,
  _h,
  _hQ,
  _i,
  _kKI,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _n,
  _rAe,
  _sCT,
  _sGI,
  _sN,
  _st,
  _t,
  _tK,
  _TR,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGraphSnapshotInput = struct(n0, _CGSI, 0, [_gIr, _sN, _t], [0, 0, 128 | 0]);
export var CreateGraphSnapshotOutput = struct(n0, _CGSO, 0, [_i, _n, _a, _sGI, _sCT, _st, _kKI], [0, 0, 0, 0, 4, 0, 0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rAe], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_t], [128 | 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rAe, _t], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rAe, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var CreateGraphSnapshot = op(
  n0,
  _CGS,
  {
    [_h]: ["POST", "/snapshots", 201],
  },
  () => CreateGraphSnapshotInput,
  () => CreateGraphSnapshotOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
