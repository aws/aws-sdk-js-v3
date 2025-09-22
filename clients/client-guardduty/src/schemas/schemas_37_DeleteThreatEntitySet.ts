// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _dI, _DTES, _DTESR, _DTESRe, _hL, _ht, _jN, _TESI, _tESI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteThreatEntitySetRequest = struct(
  n0,
  _DTESR,
  0,
  [_DI, _TESI],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _tESI,
        [_hL]: 1,
      },
    ],
  ]
);
export var DeleteThreatEntitySetResponse = struct(n0, _DTESRe, 0, [], []);
export var DeleteThreatEntitySet = op(
  n0,
  _DTES,
  {
    [_ht]: ["DELETE", "/detector/{DetectorId}/threatentityset/{ThreatEntitySetId}", 200],
  },
  () => DeleteThreatEntitySetRequest,
  () => DeleteThreatEntitySetResponse
);
