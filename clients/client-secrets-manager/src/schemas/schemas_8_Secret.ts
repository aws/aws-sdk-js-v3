// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _K, _SI, _T, _Ta, _TK, _TLT, _TR, _TRR, _UR, _URR, _Va, n0 } from "./schemas_0";
import { Unit } from "./schemas_7_Secret";

/* eslint no-var: 0 */

export var Tag = struct(n0, _Ta, 0, [_K, _Va], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_SI, _T], [0, () => TagListType]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_SI, _TK], [0, 64 | 0]);
export var TagKeyListType = 64 | 0;

export var TagListType = list(n0, _TLT, 0, () => Tag);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => Unit
);
