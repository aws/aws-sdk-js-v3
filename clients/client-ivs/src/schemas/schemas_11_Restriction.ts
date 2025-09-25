// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _aC, _aO, _eSOE, _GPRP, _GPRPR, _GPRPRe, _ht, _n, _PRP, _pRP, _ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPlaybackRestrictionPolicyRequest = struct(n0, _GPRPR, 0, [_a], [0]);
export var GetPlaybackRestrictionPolicyResponse = struct(n0, _GPRPRe, 0, [_pRP], [() => PlaybackRestrictionPolicy]);
export var PlaybackRestrictionPolicy = struct(
  n0,
  _PRP,
  0,
  [_a, _aC, _aO, _eSOE, _n, _ta],
  [0, 64 | 0, 64 | 0, 2, 0, 128 | 0]
);
export var PlaybackRestrictionPolicyAllowedCountryList = 64 | 0;

export var PlaybackRestrictionPolicyAllowedOriginList = 64 | 0;

export var GetPlaybackRestrictionPolicy = op(
  n0,
  _GPRP,
  {
    [_ht]: ["POST", "/GetPlaybackRestrictionPolicy", 200],
  },
  () => GetPlaybackRestrictionPolicyRequest,
  () => GetPlaybackRestrictionPolicyResponse
);
