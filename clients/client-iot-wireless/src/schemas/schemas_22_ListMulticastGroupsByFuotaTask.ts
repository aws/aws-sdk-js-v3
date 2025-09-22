// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _h, _hQ, _I, _LMGBFT, _LMGBFTR, _LMGBFTRi, _MGBFT, _MGL, _MGLBFT, _MR, _mR, _NT, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListMulticastGroupsByFuotaTaskRequest = struct(
  n0,
  _LMGBFTR,
  0,
  [_I, _NT, _MR],
  [
    [0, 1],
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
export var ListMulticastGroupsByFuotaTaskResponse = struct(
  n0,
  _LMGBFTRi,
  0,
  [_NT, _MGL],
  [0, () => MulticastGroupListByFuotaTask]
);
export var MulticastGroupByFuotaTask = struct(n0, _MGBFT, 0, [_I], [0]);
export var MulticastGroupListByFuotaTask = list(n0, _MGLBFT, 0, () => MulticastGroupByFuotaTask);
export var ListMulticastGroupsByFuotaTask = op(
  n0,
  _LMGBFT,
  {
    [_h]: ["GET", "/fuota-tasks/{Id}/multicast-groups", 200],
  },
  () => ListMulticastGroupsByFuotaTaskRequest,
  () => ListMulticastGroupsByFuotaTaskResponse
);
