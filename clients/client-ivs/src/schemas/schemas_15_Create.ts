// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import { _aC, _aO, _c, _CPRP, _CPRPR, _CPRPRr, _e, _eM, _eSOE, _hE, _ht, _n, _pRP, _SQEE, _ta, n0 } from "./schemas_0";
import { PlaybackRestrictionPolicy } from "./schemas_11_Restriction";

/* eslint no-var: 0 */

export var CreatePlaybackRestrictionPolicyRequest = struct(
  n0,
  _CPRPR,
  0,
  [_aC, _aO, _eSOE, _n, _ta],
  [64 | 0, 64 | 0, 2, 0, 128 | 0]
);
export var CreatePlaybackRestrictionPolicyResponse = struct(n0, _CPRPRr, 0, [_pRP], [() => PlaybackRestrictionPolicy]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_eM],
  [0],

  __ServiceQuotaExceededException
);
export var CreatePlaybackRestrictionPolicy = op(
  n0,
  _CPRP,
  {
    [_ht]: ["POST", "/CreatePlaybackRestrictionPolicy", 200],
  },
  () => CreatePlaybackRestrictionPolicyRequest,
  () => CreatePlaybackRestrictionPolicyResponse
);
