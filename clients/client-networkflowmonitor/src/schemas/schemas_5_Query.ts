// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GQSWITC, _GQSWITCD, _GQSWITCDI, _GQSWITCDO, _GQSWITCI, _GQSWITCO, _h, _qI, _s, _sI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetQueryStatusWorkloadInsightsTopContributorsDataInput = struct(
  n0,
  _GQSWITCDI,
  0,
  [_sI, _qI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetQueryStatusWorkloadInsightsTopContributorsDataOutput = struct(n0, _GQSWITCDO, 0, [_s], [0]);
export var GetQueryStatusWorkloadInsightsTopContributorsInput = struct(
  n0,
  _GQSWITCI,
  0,
  [_sI, _qI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetQueryStatusWorkloadInsightsTopContributorsOutput = struct(n0, _GQSWITCO, 0, [_s], [0]);
export var GetQueryStatusWorkloadInsightsTopContributors = op(
  n0,
  _GQSWITC,
  {
    [_h]: ["GET", "/workloadInsights/{scopeId}/topContributorsQueries/{queryId}/status", 200],
  },
  () => GetQueryStatusWorkloadInsightsTopContributorsInput,
  () => GetQueryStatusWorkloadInsightsTopContributorsOutput
);
export var GetQueryStatusWorkloadInsightsTopContributorsData = op(
  n0,
  _GQSWITCD,
  {
    [_h]: ["GET", "/workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}/status", 200],
  },
  () => GetQueryStatusWorkloadInsightsTopContributorsDataInput,
  () => GetQueryStatusWorkloadInsightsTopContributorsDataOutput
);
