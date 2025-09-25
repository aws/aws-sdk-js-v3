// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cRI, _DCRel, _DCRR, _DCRRe, _dI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCaseRuleRequest = struct(
  n0,
  _DCRR,
  0,
  [_dI, _cRI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteCaseRuleResponse = struct(n0, _DCRRe, 0, [], []);
export var DeleteCaseRule = op(
  n0,
  _DCRel,
  {
    [_h]: ["DELETE", "/domains/{domainId}/case-rules/{caseRuleId}", 200],
  },
  () => DeleteCaseRuleRequest,
  () => DeleteCaseRuleResponse
);
