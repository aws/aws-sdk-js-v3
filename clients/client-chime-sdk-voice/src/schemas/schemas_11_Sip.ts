// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AR,
  _CT,
  _D,
  _GSR,
  _GSRR,
  _GSRRe,
  _h,
  _N,
  _Pri,
  _SMAI,
  _SR,
  _SRI,
  _SRTA,
  _SRTAL,
  _TA,
  _TT,
  _TVr,
  _UT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSipRuleRequest = struct(n0, _GSRR, 0, [_SRI], [[0, 1]]);
export var GetSipRuleResponse = struct(n0, _GSRRe, 0, [_SR], [() => SipRule]);
export var SipRule = struct(
  n0,
  _SR,
  0,
  [_SRI, _N, _D, _TT, _TVr, _TA, _CT, _UT],
  [0, 0, 2, 0, 0, () => SipRuleTargetApplicationList, 5, 5]
);
export var SipRuleTargetApplication = struct(n0, _SRTA, 0, [_SMAI, _Pri, _AR], [0, 1, 0]);
export var SipRuleTargetApplicationList = list(n0, _SRTAL, 0, () => SipRuleTargetApplication);
export var GetSipRule = op(
  n0,
  _GSR,
  {
    [_h]: ["GET", "/sip-rules/{SipRuleId}", 200],
  },
  () => GetSipRuleRequest,
  () => GetSipRuleResponse
);
