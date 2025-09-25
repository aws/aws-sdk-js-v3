// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIp, _DWE, _DWER, _DWERe, _ht, _wEI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWebExperienceRequest = struct(
  n0,
  _DWER,
  0,
  [_aIp, _wEI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteWebExperienceResponse = struct(n0, _DWERe, 0, [], []);
export var DeleteWebExperience = op(
  n0,
  _DWE,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/experiences/{webExperienceId}", 200],
  },
  () => DeleteWebExperienceRequest,
  () => DeleteWebExperienceResponse
);
