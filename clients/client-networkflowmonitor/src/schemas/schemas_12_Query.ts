// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _dC,
  _eT,
  _h,
  _l,
  _mNe,
  _qI,
  _sI,
  _SQWITC,
  _SQWITCD,
  _SQWITCDI,
  _SQWITCDO,
  _SQWITCI,
  _SQWITCO,
  _sT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StartQueryWorkloadInsightsTopContributorsDataInput = struct(
  n0,
  _SQWITCDI,
  0,
  [_sI, _sT, _eT, _mNe, _dC],
  [[0, 1], 5, 5, 0, 0]
);
export var StartQueryWorkloadInsightsTopContributorsDataOutput = struct(n0, _SQWITCDO, 0, [_qI], [0]);
export var StartQueryWorkloadInsightsTopContributorsInput = struct(
  n0,
  _SQWITCI,
  0,
  [_sI, _sT, _eT, _mNe, _dC, _l],
  [[0, 1], 5, 5, 0, 0, 1]
);
export var StartQueryWorkloadInsightsTopContributorsOutput = struct(n0, _SQWITCO, 0, [_qI], [0]);
export var StartQueryWorkloadInsightsTopContributors = op(
  n0,
  _SQWITC,
  {
    [_h]: ["POST", "/workloadInsights/{scopeId}/topContributorsQueries", 200],
  },
  () => StartQueryWorkloadInsightsTopContributorsInput,
  () => StartQueryWorkloadInsightsTopContributorsOutput
);
export var StartQueryWorkloadInsightsTopContributorsData = op(
  n0,
  _SQWITCD,
  {
    [_h]: ["POST", "/workloadInsights/{scopeId}/topContributorsDataQueries", 200],
  },
  () => StartQueryWorkloadInsightsTopContributorsDataInput,
  () => StartQueryWorkloadInsightsTopContributorsDataOutput
);
