// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _GQRWITC,
  _GQRWITCI,
  _GQRWITCO,
  _h,
  _hQ,
  _lA,
  _lRo,
  _lSA,
  _lSI,
  _lVA,
  _lVI,
  _mR,
  _nT,
  _qI,
  _rIe,
  _sI,
  _tC,
  _v,
  _WITCR,
  _WITCRL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetQueryResultsWorkloadInsightsTopContributorsInput = struct(
  n0,
  _GQRWITCI,
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
export var GetQueryResultsWorkloadInsightsTopContributorsOutput = struct(
  n0,
  _GQRWITCO,
  0,
  [_tC, _nT],
  [() => WorkloadInsightsTopContributorsRowList, 0]
);
export var WorkloadInsightsTopContributorsRow = struct(
  n0,
  _WITCR,
  0,
  [_aI, _lSI, _lA, _lVI, _lRo, _rIe, _v, _lSA, _lVA],
  [0, 0, 0, 0, 0, 0, 1, 0, 0]
);
export var WorkloadInsightsTopContributorsRowList = list(n0, _WITCRL, 0, () => WorkloadInsightsTopContributorsRow);
export var GetQueryResultsWorkloadInsightsTopContributors = op(
  n0,
  _GQRWITC,
  {
    [_h]: ["GET", "/workloadInsights/{scopeId}/topContributorsQueries/{queryId}/results", 200],
  },
  () => GetQueryResultsWorkloadInsightsTopContributorsInput,
  () => GetQueryResultsWorkloadInsightsTopContributorsOutput
);
