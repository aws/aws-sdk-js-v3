// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import { _c, _DMPP, _DMPPR, _e, _hE, _hL, _ht, _jN, _M, _m, _MPPI, _mPPI, _RNFE, _T, _t, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMalwareProtectionPlanRequest = struct(
  n0,
  _DMPPR,
  0,
  [_MPPI],
  [
    [
      0,
      {
        [_jN]: _mPPI,
        [_hL]: 1,
      },
    ],
  ]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _T],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
    [
      0,
      {
        [_jN]: _t,
      },
    ],
  ],

  __ResourceNotFoundException
);
export var DeleteMalwareProtectionPlan = op(
  n0,
  _DMPP,
  {
    [_ht]: ["DELETE", "/malware-protection-plan/{MalwareProtectionPlanId}", 200],
  },
  () => DeleteMalwareProtectionPlanRequest,
  () => Unit
);
