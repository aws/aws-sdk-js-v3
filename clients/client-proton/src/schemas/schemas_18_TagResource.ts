// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hQ, _rAes, _t, _TR, _TRI, _TRO, n0 } from "./schemas_0";
import { TagList } from "./schemas_20_Create";

/* eslint no-var: 0 */

export var TagResourceInput = struct(
  n0,
  _TRI,
  0,
  [_rAes, _t],
  [
    [
      0,
      {
        [_hQ]: _rAes,
      },
    ],
    () => TagList,
  ]
);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TagResource = op(
  n0,
  _TR,
  2,
  () => TagResourceInput,
  () => TagResourceOutput
);
