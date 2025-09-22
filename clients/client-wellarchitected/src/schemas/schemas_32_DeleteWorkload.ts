// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _DW, _DWI, _h, _hQ, _iT, _WI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkloadInput = struct(
  n0,
  _DWI,
  0,
  [_WI, _CRT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _CRT,
      },
    ],
  ]
);
export var DeleteWorkload = op(
  n0,
  _DW,
  {
    [_h]: ["DELETE", "/workloads/{WorkloadId}", 200],
  },
  () => DeleteWorkloadInput,
  () => Unit
);
