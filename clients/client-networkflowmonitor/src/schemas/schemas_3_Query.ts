// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _d,
  _GQRWITCD,
  _GQRWITCDI,
  _GQRWITCDO,
  _h,
  _hQ,
  _la,
  _mR,
  _nT,
  _qI,
  _sI,
  _ti,
  _u,
  _va,
  _WITCDP,
  _WITCDPo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetQueryResultsWorkloadInsightsTopContributorsDataInput = struct(
  n0,
  _GQRWITCDI,
  0,
  [_sI, _qI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var GetQueryResultsWorkloadInsightsTopContributorsDataOutput = struct(
  n0,
  _GQRWITCDO,
  0,
  [_u, _d, _nT],
  [0, () => WorkloadInsightsTopContributorsDataPoints, 0]
);
export var WorkloadInsightsTopContributorsDataPoint = struct(n0, _WITCDP, 0, [_ti, _va, _la], [64 | 4, 64 | 1, 0]);
export var WorkloadInsightsTopContributorsDataPoints = list(
  n0,
  _WITCDPo,
  0,
  () => WorkloadInsightsTopContributorsDataPoint
);
export var WorkloadInsightsTopContributorsTimestampsList = 64 | 4;

export var WorkloadInsightsTopContributorsValuesList = 64 | 1;

export var GetQueryResultsWorkloadInsightsTopContributorsData = op(
  n0,
  _GQRWITCD,
  {
    [_h]: ["GET", "/workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}/results", 200],
  },
  () => GetQueryResultsWorkloadInsightsTopContributorsDataInput,
  () => GetQueryResultsWorkloadInsightsTopContributorsDataOutput
);
