// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSP, _DSPR, _DSPRe, _eV, _h, _hQ, _sPN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSecurityProfileRequest = struct(
  n0,
  _DSPR,
  0,
  [_sPN, _eV],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _eV,
      },
    ],
  ]
);
export var DeleteSecurityProfileResponse = struct(n0, _DSPRe, 0, [], []);
export var DeleteSecurityProfile = op(
  n0,
  _DSP,
  {
    [_h]: ["DELETE", "/security-profiles/{securityProfileName}", 200],
  },
  () => DeleteSecurityProfileRequest,
  () => DeleteSecurityProfileResponse
);
