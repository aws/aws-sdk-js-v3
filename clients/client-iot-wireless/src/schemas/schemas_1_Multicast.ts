// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Ar, _h, _hQ, _I, _LMG, _LMGR, _LMGRi, _MGL, _MGu, _MR, _mR, _N, _NT, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListMulticastGroupsRequest = struct(
  n0,
  _LMGR,
  0,
  [_NT, _MR],
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
export var ListMulticastGroupsResponse = struct(n0, _LMGRi, 0, [_NT, _MGL], [0, () => MulticastGroupList]);
export var MulticastGroup = struct(n0, _MGu, 0, [_I, _Ar, _N], [0, 0, 0]);
export var MulticastGroupList = list(n0, _MGL, 0, () => MulticastGroup);
export var ListMulticastGroups = op(
  n0,
  _LMG,
  {
    [_h]: ["GET", "/multicast-groups", 200],
  },
  () => ListMulticastGroupsRequest,
  () => ListMulticastGroupsResponse
);
