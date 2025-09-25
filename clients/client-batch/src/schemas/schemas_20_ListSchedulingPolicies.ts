// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _ht, _LSP, _LSPR, _LSPRi, _mR, _nT, _sP, _SPLD, _SPLDL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSchedulingPoliciesRequest = struct(n0, _LSPR, 0, [_mR, _nT], [1, 0]);
export var ListSchedulingPoliciesResponse = struct(
  n0,
  _LSPRi,
  0,
  [_sP, _nT],
  [() => SchedulingPolicyListingDetailList, 0]
);
export var SchedulingPolicyListingDetail = struct(n0, _SPLD, 0, [_a], [0]);
export var SchedulingPolicyListingDetailList = list(n0, _SPLDL, 0, () => SchedulingPolicyListingDetail);
export var ListSchedulingPolicies = op(
  n0,
  _LSP,
  {
    [_ht]: ["POST", "/v1/listschedulingpolicies", 200],
  },
  () => ListSchedulingPoliciesRequest,
  () => ListSchedulingPoliciesResponse
);
