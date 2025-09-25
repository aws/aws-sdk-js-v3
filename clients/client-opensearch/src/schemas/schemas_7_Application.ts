// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _AS, _ASp, _cA, _en, _h, _hQ, _i, _LA, _LAR, _LARi, _lUA, _mR, _n, _nT, _s, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationSummary = struct(n0, _AS, 0, [_i, _a, _n, _en, _s, _cA, _lUA], [0, 0, 0, 0, 0, 4, 4]);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _st, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _st,
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
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_ASp, _nT], [() => ApplicationSummaries, 0]);
export var ApplicationStatuses = 64 | 0;

export var ApplicationSummaries = list(n0, _ASp, 0, () => ApplicationSummary);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/list-applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
