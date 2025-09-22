// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDQRER, _CDQRERR, _CDQRERRa, _RIu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelDataQualityRulesetEvaluationRunRequest = struct(n0, _CDQRERR, 0, [_RIu], [0]);
export var CancelDataQualityRulesetEvaluationRunResponse = struct(n0, _CDQRERRa, 0, [], []);
export var CancelDataQualityRulesetEvaluationRun = op(
  n0,
  _CDQRER,
  0,
  () => CancelDataQualityRulesetEvaluationRunRequest,
  () => CancelDataQualityRulesetEvaluationRunResponse
);
