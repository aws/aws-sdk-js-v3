// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRS, _CRSR, _CRSRr, _ht, _JI, _jI, _jN, _SCI, _sCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateResourceShareRequest = struct(
  n0,
  _CRSR,
  0,
  [_JI, _SCI],
  [
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _sCI,
      },
    ],
  ]
);
export var CreateResourceShareResponse = struct(n0, _CRSRr, 0, [], []);
export var CreateResourceShare = op(
  n0,
  _CRS,
  {
    [_ht]: ["POST", "/2017-08-29/resourceShares", 202],
  },
  () => CreateResourceShareRequest,
  () => CreateResourceShareResponse
);
