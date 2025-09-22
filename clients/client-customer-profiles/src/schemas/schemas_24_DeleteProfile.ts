// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _DP, _DPR, _DPRe, _h, _M, _PI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProfileRequest = struct(n0, _DPR, 0, [_PI, _DN], [0, [0, 1]]);
export var DeleteProfileResponse = struct(n0, _DPRe, 0, [_M], [0]);
export var DeleteProfile = op(
  n0,
  _DP,
  {
    [_h]: ["POST", "/domains/{DomainName}/profiles/delete", 200],
  },
  () => DeleteProfileRequest,
  () => DeleteProfileResponse
);
