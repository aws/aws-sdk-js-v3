// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDQR, _DDQRR, _DDQRRe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataQualityRulesetRequest = struct(n0, _DDQRR, 0, [_N], [0]);
export var DeleteDataQualityRulesetResponse = struct(n0, _DDQRRe, 0, [], []);
export var DeleteDataQualityRuleset = op(
  n0,
  _DDQR,
  0,
  () => DeleteDataQualityRulesetRequest,
  () => DeleteDataQualityRulesetResponse
);
