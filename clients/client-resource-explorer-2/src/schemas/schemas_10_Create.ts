// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _h, _LTFR, _LTFRI, _LTFRO, _rA, _T, _TM, _TRa, _TRI, _TRO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_T], [[() => TagMap, 0]]);
export var TagResourceInput = struct(
  n0,
  _TRI,
  0,
  [_rA, _T],
  [
    [0, 1],
    [() => TagMap, 0],
  ]
);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TagMap = map(n0, _TM, 8, 0, 0);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
