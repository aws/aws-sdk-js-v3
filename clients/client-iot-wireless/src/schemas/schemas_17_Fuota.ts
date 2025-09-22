// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Ar, _FT, _FTL, _h, _hQ, _I, _LFT, _LFTR, _LFTRi, _MR, _mR, _N, _NT, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FuotaTask = struct(n0, _FT, 0, [_I, _Ar, _N], [0, 0, 0]);
export var ListFuotaTasksRequest = struct(
  n0,
  _LFTR,
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
export var ListFuotaTasksResponse = struct(n0, _LFTRi, 0, [_NT, _FTL], [0, () => FuotaTaskList]);
export var FuotaTaskList = list(n0, _FTL, 0, () => FuotaTask);
export var ListFuotaTasks = op(
  n0,
  _LFT,
  {
    [_h]: ["GET", "/fuota-tasks", 200],
  },
  () => ListFuotaTasksRequest,
  () => ListFuotaTasksResponse
);
