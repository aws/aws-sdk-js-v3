// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPel, _DPRel, _DPRele, _ht, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePresetRequest = struct(n0, _DPRel, 0, [_N], [[0, 1]]);
export var DeletePresetResponse = struct(n0, _DPRele, 0, [], []);
export var DeletePreset = op(
  n0,
  _DPel,
  {
    [_ht]: ["DELETE", "/2017-08-29/presets/{Name}", 202],
  },
  () => DeletePresetRequest,
  () => DeletePresetResponse
);
