// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _LT, _LTI, _LTO, _MR, _mR, _NT, _nT, _RA, _Ta, n0 } from "./schemas_0";
import { Tags } from "./schemas_41_Backup";

/* eslint no-var: 0 */

export var ListTagsInput = struct(
  n0,
  _LTI,
  0,
  [_RA, _NT, _MR],
  [
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
export var ListTagsOutput = struct(n0, _LTO, 0, [_NT, _Ta], [0, [() => Tags, 0]]);
export var ListTags = op(
  n0,
  _LT,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsInput,
  () => ListTagsOutput
);
