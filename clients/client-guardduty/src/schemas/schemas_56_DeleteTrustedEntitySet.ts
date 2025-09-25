// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _dI, _DTESe, _DTESRel, _DTESRele, _hL, _ht, _jN, _TESIr, _tESIr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTrustedEntitySetRequest = struct(
  n0,
  _DTESRel,
  0,
  [_DI, _TESIr],
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
        [_jN]: _tESIr,
        [_hL]: 1,
      },
    ],
  ]
);
export var DeleteTrustedEntitySetResponse = struct(n0, _DTESRele, 0, [], []);
export var DeleteTrustedEntitySet = op(
  n0,
  _DTESe,
  {
    [_ht]: ["DELETE", "/detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}", 200],
  },
  () => DeleteTrustedEntitySetRequest,
  () => DeleteTrustedEntitySetResponse
);
