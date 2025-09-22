// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GRBRMK, _GRBRMKR, _GRBRMKRe, _MK, _NM, _RI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetRateBasedRuleManagedKeysRequest = struct(n0, _GRBRMKR, 0, [_RI, _NM], [0, 0]);
export var GetRateBasedRuleManagedKeysResponse = struct(n0, _GRBRMKRe, 0, [_MK, _NM], [64 | 0, 0]);
export var ManagedKeys = 64 | 0;

export var GetRateBasedRuleManagedKeys = op(
  n0,
  _GRBRMK,
  0,
  () => GetRateBasedRuleManagedKeysRequest,
  () => GetRateBasedRuleManagedKeysResponse
);
