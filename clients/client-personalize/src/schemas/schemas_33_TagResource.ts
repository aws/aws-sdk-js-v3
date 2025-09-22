// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _rAes, _t, _TR, _TRR, _TRRa, n0, Tags } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_rAes, _t], [0, [() => Tags, 0]]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
