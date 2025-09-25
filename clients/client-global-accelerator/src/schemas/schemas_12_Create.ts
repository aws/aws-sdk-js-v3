// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _K, _RA, _Ta, _Tag, _TK, _TR, _TRR, _TRRa, _UR, _URR, _URRn, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [0, () => Tags]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = 64 | 0;

export var Tags = list(n0, _Ta, 0, () => Tag);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
