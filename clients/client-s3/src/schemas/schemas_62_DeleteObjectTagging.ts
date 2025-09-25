// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DOT, _DOTO, _DOTR, _EBO, _h, _hH, _hQ, _K, _VI, _vI, _xaebo, _xavi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteObjectTaggingOutput = struct(
  n0,
  _DOTO,
  0,
  [_VI],
  [
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
  ]
);
export var DeleteObjectTaggingRequest = struct(
  n0,
  _DOTR,
  0,
  [_B, _K, _VI, _EBO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var DeleteObjectTagging = op(
  n0,
  _DOT,
  {
    [_h]: ["DELETE", "/{Key+}?tagging", 204],
  },
  () => DeleteObjectTaggingRequest,
  () => DeleteObjectTaggingOutput
);
