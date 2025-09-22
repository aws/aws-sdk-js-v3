// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cIhe, _mUNR, _RTAC, _RTACR, _RTACRe, _st, _TACRS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RefreshTrustedAdvisorCheckRequest = struct(n0, _RTACR, 0, [_cIhe], [0]);
export var RefreshTrustedAdvisorCheckResponse = struct(n0, _RTACRe, 0, [_st], [() => TrustedAdvisorCheckRefreshStatus]);
export var TrustedAdvisorCheckRefreshStatus = struct(n0, _TACRS, 0, [_cIhe, _st, _mUNR], [0, 0, 1]);
export var RefreshTrustedAdvisorCheck = op(
  n0,
  _RTAC,
  0,
  () => RefreshTrustedAdvisorCheckRequest,
  () => RefreshTrustedAdvisorCheckResponse
);
