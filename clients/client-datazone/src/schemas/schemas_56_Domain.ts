// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DDe, _DDI, _DDO, _hQ, _ht, _i, _iTd, _s, _sDC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainInput = struct(
  n0,
  _DDI,
  0,
  [_i, _cT, _sDC],
  [
    [0, 1],
    [
      0,
      {
        [_iTd]: 1,
        [_hQ]: _cT,
      },
    ],
    [
      2,
      {
        [_hQ]: _sDC,
      },
    ],
  ]
);
export var DeleteDomainOutput = struct(n0, _DDO, 0, [_s], [0]);
export var DeleteDomain = op(
  n0,
  _DDe,
  {
    [_ht]: ["DELETE", "/v2/domains/{identifier}", 202],
  },
  () => DeleteDomainInput,
  () => DeleteDomainOutput
);
