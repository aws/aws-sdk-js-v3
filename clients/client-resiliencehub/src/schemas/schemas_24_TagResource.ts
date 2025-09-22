// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _rA, _ta, _TRa, _TRR, _TRRa, n0, TagMap } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rA, _ta],
  [
    [0, 1],
    [() => TagMap, 0],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
