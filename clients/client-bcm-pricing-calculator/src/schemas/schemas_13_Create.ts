// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ar, _LTFR, _LTFRR, _LTFRRi, _t, _tK, _UR, _URR, _URRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_ar], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_ar, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var ResourceTagKeys = 64 | 0;

export var Tags = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
