// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _h,
  _hH,
  _hL,
  _hQ,
  _HR,
  _LSLG,
  _LSLGE,
  _LSLGR,
  _LSLGRi,
  _N,
  _NT,
  _nT,
  _SLG,
  _SLGA,
  _SLGLt,
  _xaai,
  _xF,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListStorageLensGroupEntry = struct(n0, _LSLGE, 0, [_N, _SLGA, _HR], [0, 0, 0]);
export var ListStorageLensGroupsRequest = struct(
  n0,
  _LSLGR,
  0,
  [_AI, _NT],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListStorageLensGroupsResult = struct(
  n0,
  _LSLGRi,
  0,
  [_NT, _SLGLt],
  [
    0,
    [
      () => StorageLensGroupList,
      {
        [_xN]: _SLG,
        [_xF]: 1,
      },
    ],
  ]
);
export var StorageLensGroupList = list(n0, _SLGLt, 0, [
  () => ListStorageLensGroupEntry,
  {
    [_xN]: _SLG,
  },
]);
export var ListStorageLensGroups = op(
  n0,
  _LSLG,
  {
    [_h]: ["GET", "/v20180820/storagelensgroup", 200],
  },
  () => ListStorageLensGroupsRequest,
  () => ListStorageLensGroupsResult
);
