// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _DW, _DWR, _DWRe, _ht, _wID, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWaveRequest = struct(n0, _DWR, 0, [_wID, _aIDc], [0, 0]);
export var DeleteWaveResponse = struct(n0, _DWRe, 0, [], []);
export var DeleteWave = op(
  n0,
  _DW,
  {
    [_ht]: ["POST", "/DeleteWave", 204],
  },
  () => DeleteWaveRequest,
  () => DeleteWaveResponse
);
