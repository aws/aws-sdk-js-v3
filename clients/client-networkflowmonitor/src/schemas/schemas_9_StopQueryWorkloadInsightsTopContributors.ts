// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _qI, _sI, _SQWITCIt, _SQWITCOt, _SQWITCt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopQueryWorkloadInsightsTopContributorsInput = struct(
  n0,
  _SQWITCIt,
  0,
  [_sI, _qI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopQueryWorkloadInsightsTopContributorsOutput = struct(n0, _SQWITCOt, 0, [], []);
export var StopQueryWorkloadInsightsTopContributors = op(
  n0,
  _SQWITCt,
  {
    [_h]: ["DELETE", "/workloadInsights/{scopeId}/topContributorsQueries/{queryId}", 200],
  },
  () => StopQueryWorkloadInsightsTopContributorsInput,
  () => StopQueryWorkloadInsightsTopContributorsOutput
);
