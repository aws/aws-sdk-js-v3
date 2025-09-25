// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _jN, _rAe, _sSOe, _URP, _URPR, _URPRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateResourceProfileRequest = struct(
  n0,
  _URPR,
  0,
  [_rAe, _sSOe],
  [
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
    [
      1,
      {
        [_jN]: _sSOe,
      },
    ],
  ]
);
export var UpdateResourceProfileResponse = struct(n0, _URPRp, 0, [], []);
export var UpdateResourceProfile = op(
  n0,
  _URP,
  {
    [_h]: ["PATCH", "/resource-profiles", 200],
  },
  () => UpdateResourceProfileRequest,
  () => UpdateResourceProfileResponse
);
