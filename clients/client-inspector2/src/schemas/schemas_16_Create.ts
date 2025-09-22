// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import { _aI, _AM, _AMR, _AMRs, _c, _e, _hE, _ht, _m, _rIe, _SQEE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateMemberRequest = struct(n0, _AMR, 0, [_aI], [0]);
export var AssociateMemberResponse = struct(n0, _AMRs, 0, [_aI], [0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rIe],
  [0, 0],

  __ServiceQuotaExceededException
);
export var AssociateMember = op(
  n0,
  _AM,
  {
    [_ht]: ["POST", "/members/associate", 200],
  },
  () => AssociateMemberRequest,
  () => AssociateMemberResponse
);
