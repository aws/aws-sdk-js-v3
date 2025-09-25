// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DSLG, _DSLGR, _h, _hH, _hL, _N, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStorageLensGroupRequest = struct(
  n0,
  _DSLGR,
  0,
  [_N, _AI],
  [
    [0, 1],
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var DeleteStorageLensGroup = op(
  n0,
  _DSLG,
  {
    [_h]: ["DELETE", "/v20180820/storagelensgroup/{Name}", 204],
  },
  () => DeleteStorageLensGroupRequest,
  () => Unit
);
