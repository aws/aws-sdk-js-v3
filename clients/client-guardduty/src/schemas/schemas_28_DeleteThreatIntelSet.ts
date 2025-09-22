// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _dI, _DTIS, _DTISR, _DTISRe, _hL, _ht, _jN, _TISI, _tISI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteThreatIntelSetRequest = struct(
  n0,
  _DTISR,
  0,
  [_DI, _TISI],
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
        [_jN]: _tISI,
        [_hL]: 1,
      },
    ],
  ]
);
export var DeleteThreatIntelSetResponse = struct(n0, _DTISRe, 0, [], []);
export var DeleteThreatIntelSet = op(
  n0,
  _DTIS,
  {
    [_ht]: ["DELETE", "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}", 200],
  },
  () => DeleteThreatIntelSetRequest,
  () => DeleteThreatIntelSetResponse
);
