// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPel, _DPRel, _DPRele, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePresetRequest = struct(n0, _DPRel, 0, [_I], [[0, 1]]);
export var DeletePresetResponse = struct(n0, _DPRele, 0, [], []);
export var DeletePreset = op(
  n0,
  _DPel,
  {
    [_h]: ["DELETE", "/2012-09-25/presets/{Id}", 202],
  },
  () => DeletePresetRequest,
  () => DeletePresetResponse
);
