// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _C,
  _c,
  _e,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _RARN,
  _RNFE,
  _Ta,
  _TK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [128 | 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __ResourceNotFoundException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
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
