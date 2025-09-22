// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _dI, _DIPS, _DIPSR, _DIPSRe, _hL, _ht, _ISI, _iSI, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIPSetRequest = struct(
  n0,
  _DIPSR,
  0,
  [_DI, _ISI],
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
        [_jN]: _iSI,
        [_hL]: 1,
      },
    ],
  ]
);
export var DeleteIPSetResponse = struct(n0, _DIPSRe, 0, [], []);
export var DeleteIPSet = op(
  n0,
  _DIPS,
  {
    [_ht]: ["DELETE", "/detector/{DetectorId}/ipset/{IpSetId}", 200],
  },
  () => DeleteIPSetRequest,
  () => DeleteIPSetResponse
);
