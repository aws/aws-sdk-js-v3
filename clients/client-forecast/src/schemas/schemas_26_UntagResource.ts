// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _RA, _TKa, _UR, _URR, _URRn, n0, TagKey } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TKa], [0, [() => TagKeys, 0]]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = list(n0, _TKa, 0, [() => TagKey, 0]);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
