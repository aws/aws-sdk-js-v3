// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hQ, _LTFR, _LTFRI, _LTFRO, _mR, _nT, _rAes, _t, n0 } from "./schemas_0";
import { TagList } from "./schemas_20_Create";

/* eslint no-var: 0 */

export var ListTagsForResourceInput = struct(
  n0,
  _LTFRI,
  0,
  [_rAes, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _rAes,
      },
    ],
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
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_t, _nT], [() => TagList, 0]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
