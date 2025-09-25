// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDQRRR, _CDQRRRR, _CDQRRRRa, _RIu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelDataQualityRuleRecommendationRunRequest = struct(n0, _CDQRRRR, 0, [_RIu], [0]);
export var CancelDataQualityRuleRecommendationRunResponse = struct(n0, _CDQRRRRa, 0, [], []);
export var CancelDataQualityRuleRecommendationRun = op(
  n0,
  _CDQRRR,
  0,
  () => CancelDataQualityRuleRecommendationRunRequest,
  () => CancelDataQualityRuleRecommendationRunResponse
);
