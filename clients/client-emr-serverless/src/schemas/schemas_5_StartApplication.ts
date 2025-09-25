// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import { _aI, _cl, _er, _hE, _ht, _m, _SA, _SAR, _SARt, _SQEE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_er]: _cl,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var StartApplicationRequest = struct(n0, _SAR, 0, [_aI], [[0, 1]]);
export var StartApplicationResponse = struct(n0, _SARt, 0, [], []);
export var StartApplication = op(
  n0,
  _SA,
  {
    [_ht]: ["POST", "/applications/{applicationId}/start", 200],
  },
  () => StartApplicationRequest,
  () => StartApplicationResponse
);
