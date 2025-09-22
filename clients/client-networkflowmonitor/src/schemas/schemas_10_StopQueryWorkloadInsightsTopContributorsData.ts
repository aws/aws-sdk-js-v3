// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _qI, _sI, _SQWITCDIt, _SQWITCDOt, _SQWITCDt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopQueryWorkloadInsightsTopContributorsDataInput = struct(
  n0,
  _SQWITCDIt,
  0,
  [_sI, _qI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopQueryWorkloadInsightsTopContributorsDataOutput = struct(n0, _SQWITCDOt, 0, [], []);
export var StopQueryWorkloadInsightsTopContributorsData = op(
  n0,
  _SQWITCDt,
  {
    [_h]: ["DELETE", "/workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}", 200],
  },
  () => StopQueryWorkloadInsightsTopContributorsDataInput,
  () => StopQueryWorkloadInsightsTopContributorsDataOutput
);
