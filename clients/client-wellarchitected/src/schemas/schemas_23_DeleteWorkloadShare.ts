// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _DWS, _DWSI, _h, _hQ, _iT, _SI, _WI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkloadShareInput = struct(
  n0,
  _DWSI,
  0,
  [_SI, _WI, _CRT],
  [
    [0, 1],
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
export var DeleteWorkloadShare = op(
  n0,
  _DWS,
  {
    [_h]: ["DELETE", "/workloads/{WorkloadId}/shares/{ShareId}", 200],
  },
  () => DeleteWorkloadShareInput,
  () => Unit
);
